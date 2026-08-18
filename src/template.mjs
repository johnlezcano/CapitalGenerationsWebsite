import { icon, primaryButton } from './components.mjs';

function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function normalizePath(path) {
  if (!path || path === '/') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

function activeFor(currentPath, target) {
  if (target === '/') return currentPath === '/';
  return currentPath === target || currentPath.startsWith(`${target}/`);
}

function navAnchor(label, href, currentPath) {
  const active = activeFor(currentPath, href);
  return `<a href="${href}"${active ? ' aria-current="page"' : ''}>${label}</a>`;
}

function header(site, currentPath) {
  const serviceActive = currentPath.startsWith('/services');
  return `<header class="site-header" data-site-header>
    <div class="container site-header__inner">
      <a class="brand" href="/" aria-label="Capital Generations home">
        <img src="/assets/images/logo-capital-generations.png" width="566" height="240" alt="Capital Generations" />
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
        <span class="sr-only">Open navigation</span>
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation" data-site-nav>
        <details class="nav-dropdown"${serviceActive ? ' data-active="true"' : ''}>
          <summary${serviceActive ? ' aria-current="page"' : ''}>Services ${icon('chevron')}</summary>
          <div class="nav-dropdown__panel">
            <a href="/services"><strong>Services overview</strong><span>Choose the right sales capacity.</span></a>
            <a href="/services/sdr-teams"><strong>Outsourced SDR teams</strong><span>Create qualified conversations.</span></a>
            <a href="/services/ae-teams"><strong>Outsourced AE teams</strong><span>Add sales execution capacity.</span></a>
            <a href="/services/full-sales-teams"><strong>Full sales teams</strong><span>Connect outreach and execution.</span></a>
          </div>
        </details>
        ${navAnchor('How it works', '/how-it-works', currentPath)}
        ${navAnchor('Results', '/results', currentPath)}
        ${navAnchor('Education', '/industries/education', currentPath)}
        ${navAnchor('About', '/about', currentPath)}
        <div class="site-nav__mobile-contact">
          ${navAnchor('Contact', '/contact', currentPath)}
        </div>
        ${primaryButton('Book a call', site.calendlyUrl, { external: true, className: 'site-nav__cta', track: 'book_call_header' })}
      </nav>
    </div>
  </header>`;
}

function footer(site) {
  const linkedinLink = site.social?.linkedin
    ? `<a class="footer-contact-link" href="${site.social.linkedin}" target="_blank" rel="noopener noreferrer" data-track="linkedin_footer" aria-label="Follow Capital Generations on LinkedIn">${icon('linkedin')}<span>LinkedIn</span></a>`
    : '';

  return `<footer class="site-footer">
    <div class="container">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <a class="brand brand--footer" href="/" aria-label="Capital Generations home">
            <img src="/assets/images/logo-capital-generations.png" width="566" height="240" alt="Capital Generations" />
          </a>
          <p>Managed outsourced SDR and AE teams for growing B2B companies.</p>
          <div class="footer-contact-list" aria-label="Capital Generations contact details">
            <a class="footer-contact-link" href="mailto:${site.email}" data-track="email_footer">${icon('mail')}<span>${site.email}</span></a>
            <a class="footer-contact-link" href="${site.phoneUrl}" data-track="phone_footer">${icon('phone')}<span>${site.phoneDisplay}</span></a>
            <a class="footer-contact-link" href="${site.whatsappUrl}" target="_blank" rel="noopener noreferrer" data-track="whatsapp_footer" aria-label="Message Capital Generations on WhatsApp">${icon('whatsapp')}<span>WhatsApp</span></a>
            ${linkedinLink}
          </div>
        </div>
        <div class="site-footer__links">
          <div>
            <h2>Services</h2>
            <a href="/services/sdr-teams">SDR teams</a>
            <a href="/services/ae-teams">AE teams</a>
            <a href="/services/full-sales-teams">Full sales teams</a>
            <a href="/industries/education">Education sales</a>
          </div>
          <div>
            <h2>Company</h2>
            <a href="/how-it-works">How it works</a>
            <a href="/results">Results</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div class="site-footer__cta">
          <span>Need more qualified pipeline?</span>
          <h2>Let’s talk about the team behind it.</h2>
          ${primaryButton('Book a strategy call', site.calendlyUrl, { external: true, track: 'book_call_footer' })}
        </div>
      </div>
      <div class="site-footer__bottom">
        <p>© <span data-current-year></span> Capital Generations. Established ${site.foundedYear}. ${site.location}.</p>
        <div><a href="/privacy">Privacy</a><a href="/sitemap.xml">Sitemap</a></div>
      </div>
    </div>
  </footer>`;
}

function whatsappButton(site) {
  if (!site.whatsappUrl) return '';
  return `<a class="whatsapp-fab" href="${site.whatsappUrl}" target="_blank" rel="noopener noreferrer" data-track="whatsapp_floating" aria-label="Message Capital Generations on WhatsApp">
    ${icon('whatsapp')}<span>WhatsApp</span>
  </a>`;
}

function organizationSchema(site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/assets/images/logo-capital-generations.png`,
    image: `${site.url}/assets/images/og-default.jpg`,
    email: site.email,
    telephone: site.phoneE164,
    description: site.description,
    foundingDate: site.foundedYear,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: site.phoneE164,
      email: site.email,
      availableLanguage: ['English'],
      areaServed: 'US',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Outsourced sales development',
      'Sales development representatives',
      'Account executives',
      'B2B appointment setting',
      'Outbound sales',
      'Education sales',
    ],
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

function webpageSchema(site, page) {
  const pageUrl = `${site.url}${page.path === '/' ? '' : page.path}`;
  const data = {
    '@context': 'https://schema.org',
    '@type': page.schemaType || 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#organization` },
  };

  if (page.faqs?.length) {
    return [
      data,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ];
  }

  return [data];
}

function websiteSchema(site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en-US',
  };
}

export function renderDocument({ site, page }) {
  const path = normalizePath(page.path);
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const schemas = [organizationSchema(site), websiteSchema(site), ...webpageSchema(site, { ...page, path })];
  const searchVerification = site.searchConsoleVerification
    ? `<meta name="google-site-verification" content="${esc(site.searchConsoleVerification)}" />`
    : '<!-- Search Console is verified through DNS -->';
  const gaId = String(site.gaMeasurementId || '').trim();
  const googleTag = gaId
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${JSON.stringify(gaId)});
  </script>`
    : '<!-- Google Analytics 4 is not configured -->';

  return `<!doctype html>
<html lang="en" data-ga-id="${esc(site.gaMeasurementId)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  <meta name="robots" content="${page.noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="theme-color" content="#071a33" />
  ${searchVerification}

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${esc(site.name)}" />
  <meta property="og:title" content="${esc(page.ogTitle || page.title)}" />
  <meta property="og:description" content="${esc(page.description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${site.url}/assets/images/og-default.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Capital Generations: managed outsourced SDR and AE teams" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(page.ogTitle || page.title)}" />
  <meta name="twitter:description" content="${esc(page.description)}" />
  <meta name="twitter:image" content="${site.url}/assets/images/og-default.jpg" />

  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/icon-32.png" />
  <link rel="icon" type="image/png" sizes="64x64" href="/assets/images/icon-64.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icon-180.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="stylesheet" href="/assets/styles.css" />
  <script type="application/ld+json">${JSON.stringify(schemas)}</script>
  ${googleTag}
  <script src="/assets/main.js" defer></script>
</head>
<body class="${esc(page.bodyClass || '')}" data-page-path="${path}">
  <a class="skip-link" href="#main-content">Skip to main content</a>
  ${header(site, path)}
  <main id="main-content">
    ${page.body}
  </main>
  ${footer(site)}
  ${whatsappButton(site)}
</body>
</html>`;
}
