import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../site.config.mjs';
import { buildPages } from '../src/content.mjs';
import { renderDocument } from '../src/template.mjs';
import { ctaBand, eyebrow, primaryButton, secondaryButton } from '../src/components.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

async function copyFile(source, destination) {
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination, { force: true });
}

async function writePage(page) {
  const normalized = page.path === '/' ? '' : page.path.replace(/^\/+|\/+$/g, '');
  const output = normalized ? path.join(dist, normalized, 'index.html') : path.join(dist, 'index.html');
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, renderDocument({ site, page }), 'utf8');
}

function xmlEscape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

async function build() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(path.join(dist, 'assets', 'images'), { recursive: true });

  await cp(path.join(root, 'public'), dist, { recursive: true, force: true });
  await copyFile(path.join(root, 'src', 'styles.css'), path.join(dist, 'assets', 'styles.css'));
  await copyFile(path.join(root, 'src', 'main.js'), path.join(dist, 'assets', 'main.js'));

  const pages = buildPages(site);
  for (const page of pages) {
    await writePage(page);
  }

  const notFoundPage = {
    path: '/404',
    title: 'Page Not Found | Capital Generations',
    description: 'The requested Capital Generations page could not be found. Return home, explore services, or talk with our team.',
    noIndex: true,
    body: `<section class="page-hero section section--dark"><div class="page-hero__glow" aria-hidden="true"></div><div class="container"><div class="page-hero__grid"><div class="page-hero__content reveal is-visible">${eyebrow('404', 'light')}<h1>That page is not here.</h1><p class="page-hero__lead">The link may be old, or the page may have moved.</p><div class="button-row">${primaryButton('Return home', '/')}${secondaryButton('Explore services', '/services', { className: 'button--on-dark' })}</div></div><div class="page-hero__visual reveal is-visible"><div class="contact-visual"><div class="contact-visual__calendar"><strong>Find the next step</strong><span>Home, services, results, or a conversation</span><div><i></i><i></i><i></i><i></i><i></i></div></div></div></div></div></div></section>${ctaBand({ title: 'Looking for something specific?', description: 'Tell us what you need and we will point you in the right direction.', primaryHref: site.calendlyUrl, primaryLabel: 'Talk with us', secondaryLabel: 'Send us a note' })}`,
  };
  await writeFile(path.join(dist, '404.html'), renderDocument({ site, page: notFoundPage }), 'utf8');

  const now = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((page) => {
      const url = `${site.url}${page.path === '/' ? '' : page.path}`;
      const priority = page.path === '/' ? '1.0' : page.path === '/contact' ? '0.9' : '0.8';
      return `  <url>\n    <loc>${xmlEscape(url)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n')}\n</urlset>\n`;
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

  await writeFile(
    path.join(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
    'utf8',
  );

  const manifest = {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#071a33',
    icons: [
      { src: '/assets/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
  await writeFile(path.join(dist, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  await writeFile(
    path.join(dist, 'humans.txt'),
    `Capital Generations\nManaged outsourced SDR and AE teams.\nEstablished ${site.foundedYear}.\n${site.location}\n${site.phoneDisplay}\n${site.email}\n${site.social.linkedin}\n`,
    'utf8',
  );

  console.log(`Built ${pages.length} pages plus 404 into ${path.relative(root, dist)}/`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
