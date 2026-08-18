import { readFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../site.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const failures = [];
const warnings = [];

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry);
    const info = await stat(full);
    if (info.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function internalTargetToFile(target) {
  const clean = target.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return path.join(dist, 'index.html');
  if (clean.endsWith('/')) return path.join(dist, clean.replace(/^\//, ''), 'index.html');
  if (path.extname(clean)) return path.join(dist, clean.replace(/^\//, ''));
  return path.join(dist, clean.replace(/^\//, ''), 'index.html');
}

const allFiles = await walk(dist);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const titles = new Map();
const dashStylePattern = /[—–‑−]|[A-Za-z0-9]-[A-Za-z0-9]/;

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function copyAttributes(html) {
  const values = [];
  for (const attribute of ['aria-label', 'alt', 'placeholder']) {
    const expression = new RegExp(`${attribute}=\"([^\"]*)\"`, 'gi');
    values.push(...[...html.matchAll(expression)].map((match) => match[1]));
  }
  for (const property of ['og:title', 'og:description', 'og:image:alt', 'twitter:title', 'twitter:description']) {
    const expression = new RegExp(`<meta[^>]+(?:property|name)=\"${property}\"[^>]+content=\"([^\"]*)\"`, 'i');
    const value = html.match(expression)?.[1];
    if (value) values.push(value);
  }
  return values;
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

// Hashes let the public validation script reject private discovery terms
// without publishing those terms in the repository itself.
const privateClientTokenHashes = new Set([
  '742c6fc72b334178cc658baaef34ea61779c4279bcc6d1103fe7cac9059ac998',
  '4fa6b9ecefe6605ee33b2a4461a207e51d352432ccee30cc7b32779a1e60c11f',
  'f147b65b08c76721815cb01a2674ded06e431f0115c6ac2cca2e42e8ee2252f9',
  '2905c99e86ffdc6671ce1638f376a665285f9492d05a6d09ece949f385be231a',
  'a8c61fece99cae490044f783eb4c12283205495d84634856fe2f8112c244a230',
]);
const retiredEmailHash = '903c2985f52226b7fcdda1c479ff42f2d3aeea6e82346e01828fc0536cc69932';
const privatePricingHashes = new Set([
  '90e60bf58e22b544f30376766e42b258d29fe43d5d009c6e4a58df30976ab1b7',
  '156bc4af87073d790d7b129e3908f47d088f03ef0277e64fe7f92b24733a7423',
  '91354f1145746a26f38de5af9b5379405513afb3bc5e522880ca26286cb38e3e',
  'f455ed4209cdc909730b6b732fb242e1933fdebcfac5fdf35dd9f2bac7cb51b0',
]);

const banned = [
  'filipino',
  'filipinos',
  'indians',
  'eastern europeans',
  'add the endpoint in site.config.mjs',
  'form has not been connected to formspree',
];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(dist, file);
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1]?.trim();
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];

  if (!title) failures.push(`${relative}: missing title`);
  if (!description || description.length < 50) failures.push(`${relative}: missing or short meta description`);
  if (h1Count !== 1) failures.push(`${relative}: expected exactly one h1, found ${h1Count}`);
  if (!canonical) failures.push(`${relative}: missing canonical URL`);
  if (canonical && !canonical.startsWith(site.url)) failures.push(`${relative}: canonical does not use configured site URL`);

  const renderedCopy = visibleText(html);
  if (dashStylePattern.test(renderedCopy)) failures.push(`${relative}: visible copy contains a dash or hyphenated prose term`);
  for (const value of [title, description, ...copyAttributes(html)].filter(Boolean)) {
    if (dashStylePattern.test(value)) failures.push(`${relative}: metadata or accessibility copy contains a dash or hyphenated prose term: ${value}`);
  }

  if (title) {
    if (titles.has(title)) warnings.push(`${relative}: duplicate title also used by ${titles.get(title)}`);
    else titles.set(title, relative);
  }

  const lower = html.toLowerCase();
  for (const term of banned) {
    if (lower.includes(term)) failures.push(`${relative}: contains prohibited public content`);
  }

  const tokenHashes = new Set((lower.match(/[a-z0-9]+/g) || []).map(sha256));
  if ([...privateClientTokenHashes].some((hash) => tokenHashes.has(hash))) {
    failures.push(`${relative}: contains a private discovery token`);
  }

  const emailValues = lower.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/g) || [];
  if (emailValues.some((email) => sha256(email) === retiredEmailHash)) {
    failures.push(`${relative}: contains a retired private email address`);
  }

  const pricingValues = lower.match(/\$\s?\d[\d,]*(?:\.\d+)?(?:[mkb])?/g) || [];
  if (pricingValues.some((value) => privatePricingHashes.has(sha256(value.replace(/\s+/g, ''))))) {
    failures.push(`${relative}: contains private proposal pricing`);
  }

  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const ref of refs) {
    if (!ref.startsWith('/') || ref.startsWith('//')) continue;
    const targetFile = internalTargetToFile(ref);
    try {
      const info = await stat(targetFile);
      if (!info.isFile()) failures.push(`${relative}: internal reference is not a file: ${ref}`);
    } catch {
      failures.push(`${relative}: broken internal reference: ${ref}`);
    }
  }
}


const contactHtmlPath = path.join(dist, 'contact', 'index.html');
try {
  const contactHtml = await readFile(contactHtmlPath, 'utf8');
  const requiredContactValues = [
    site.formspreeEndpoint,
    site.email,
    site.phoneDisplay,
    `tel:${site.phoneE164}`,
    site.whatsappUrl,
    site.social.linkedin,
  ].filter(Boolean);

  for (const value of requiredContactValues) {
    if (!contactHtml.includes(value)) failures.push(`contact/index.html: missing configured contact value: ${value}`);
  }
} catch {
  failures.push('Unable to inspect contact/index.html for production contact configuration.');
}

if (!site.formspreeEndpoint.startsWith('https://formspree.io/f/')) {
  failures.push('site.config.mjs: Formspree endpoint is missing or invalid.');
}

if (site.email !== 'contact@capitalgenerations.com') {
  failures.push('site.config.mjs: public email must be contact@capitalgenerations.com.');
}

if (site.url !== 'https://capitalgenerations.com') {
  failures.push('site.config.mjs: canonical site URL must be https://capitalgenerations.com.');
}

if (site.phoneDisplay !== '(631) 877 1393') {
  failures.push('site.config.mjs: phone display must use the approved dash free format.');
}

if (site.foundedYear !== 2020) {
  failures.push('site.config.mjs: foundedYear must be 2020.');
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(dist, file);
  if (!html.includes(site.email)) failures.push(`${relative}: missing configured public email`);
  if (!html.includes(`Established ${site.foundedYear}. ${site.location}.`)) {
    failures.push(`${relative}: missing updated footer establishment line`);
  }
  if (!html.includes('data-track="whatsapp_floating"')) {
    failures.push(`${relative}: missing global WhatsApp button`);
  }
}

for (const required of ['index.html', '404.html', 'sitemap.xml', 'robots.txt', 'site.webmanifest', 'assets/styles.css', 'assets/main.js']) {
  try {
    const info = await stat(path.join(dist, required));
    if (!info.isFile()) failures.push(`Required output is not a file: ${required}`);
  } catch {
    failures.push(`Missing required output: ${required}`);
  }
}

if (warnings.length) {
  console.warn('\nWarnings:');
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (failures.length) {
  console.error('\nValidation failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML files and ${allFiles.length} total generated files.`);
  console.log('No broken internal references, private client names, published pricing, prohibited positioning language, or dash styled public copy found.');
}
