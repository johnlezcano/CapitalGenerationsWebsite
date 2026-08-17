import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

const banned = [
  'gaggle',
  'classtag',
  'nextwavestem',
  'nutkase',
  '401go',
  '$3200',
  '$3,200',
  '$6000',
  '$6,000',
  'filipino',
  'filipinos',
  'indians',
  'eastern europeans',
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

  if (title) {
    if (titles.has(title)) warnings.push(`${relative}: duplicate title also used by ${titles.get(title)}`);
    else titles.set(title, relative);
  }

  const lower = html.toLowerCase();
  for (const term of banned) {
    if (lower.includes(term)) failures.push(`${relative}: contains prohibited/private term “${term}”`);
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
  console.log('No broken internal references, private client names, published pricing, or prohibited positioning language found.');
}
