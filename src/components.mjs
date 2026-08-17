const iconPaths = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',
  whatsapp: '<path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.1A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.1 7.4c.5 3.6 2.4 5.5 6 6"/><path d="m8.1 7.4 1.6-.6 1 2.2-1.2.8M14.1 13.4l.8-1.2 2.2 1-.6 1.6"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M18.5 5.5 21 3m-5.5 3.5L21 3m0 0v4m0-4h-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.5 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.08A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.12.6.65 1.03 1.27 1.04H21a2 2 0 1 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8z"/>',
  graduation: '<path d="m2 10 10-5 10 5-10 5L2 10z"/><path d="M6 12.5V17c3 2 9 2 12 0v-4.5M22 10v6"/>',
  spark: '<path d="m12 3-1.4 4.2a2 2 0 0 1-1.3 1.3L5 10l4.3 1.5a2 2 0 0 1 1.3 1.3L12 17l1.4-4.2a2 2 0 0 1 1.3-1.3L19 10l-4.3-1.5a2 2 0 0 1-1.3-1.3L12 3z"/><path d="m19 15-.7 2.1a1 1 0 0 1-.6.6L15.5 18l2.2.8a1 1 0 0 1 .6.6L19 21l.7-1.6a1 1 0 0 1 .6-.6l1.7-.8-1.7-.3a1 1 0 0 1-.6-.6L19 15z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  refresh: '<path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5"/>',
  map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
};

export function icon(name, className = '') {
  const path = iconPaths[name] || iconPaths.spark;
  return `<svg class="icon ${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

export function arrowLink(label, href, className = '') {
  return `<a class="text-link ${className}" href="${href}"><span>${label}</span>${icon('arrow')}</a>`;
}

export function primaryButton(label, href, options = {}) {
  const { external = false, className = '', track = '' } = options;
  return `<a class="button button--primary ${className}" href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}${track ? ` data-track="${track}"` : ''}><span>${label}</span>${icon('arrow')}</a>`;
}

export function secondaryButton(label, href, options = {}) {
  const { external = false, className = '', track = '' } = options;
  return `<a class="button button--secondary ${className}" href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}${track ? ` data-track="${track}"` : ''}><span>${label}</span>${icon('arrow')}</a>`;
}

export function eyebrow(text, tone = '') {
  return `<p class="eyebrow ${tone ? `eyebrow--${tone}` : ''}"><span></span>${text}</p>`;
}

export function sectionHeading({ eyebrowText, title, description = '', align = 'left', tone = '' }) {
  return `<div class="section-heading section-heading--${align}${tone ? ` section-heading--${tone}` : ''}">
    ${eyebrowText ? eyebrow(eyebrowText, tone === 'dark' ? 'light' : '') : ''}
    <h2>${title}</h2>
    ${description ? `<p>${description}</p>` : ''}
  </div>`;
}

export function serviceCard({ iconName, eyebrowText, title, description, href, bullets = [] }) {
  return `<article class="service-card reveal">
    <div class="service-card__top">
      <div class="icon-box">${icon(iconName)}</div>
      <span class="service-card__eyebrow">${eyebrowText}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    ${bullets.length ? `<ul class="check-list check-list--compact">${bullets.map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>` : ''}
    ${arrowLink('Explore service', href)}
  </article>`;
}

export function featureCard({ iconName, title, description, className = '' }) {
  return `<article class="feature-card ${className} reveal">
    <div class="icon-box icon-box--small">${icon(iconName)}</div>
    <h3>${title}</h3>
    <p>${description}</p>
  </article>`;
}

export function resultMetric({ value, label, detail = '' }) {
  return `<article class="metric-card reveal">
    <strong>${value}</strong>
    <span>${label}</span>
    ${detail ? `<p>${detail}</p>` : ''}
  </article>`;
}

export function processStep({ number, title, description, iconName }) {
  return `<article class="process-step reveal">
    <div class="process-step__number">${number}</div>
    <div class="icon-box icon-box--small">${icon(iconName)}</div>
    <h3>${title}</h3>
    <p>${description}</p>
  </article>`;
}

export function faqItem(question, answer) {
  return `<details class="faq-item reveal">
    <summary><span>${question}</span>${icon('chevron')}</summary>
    <div class="faq-item__answer"><p>${answer}</p></div>
  </details>`;
}

export function tag(text) {
  return `<span class="tag">${text}</span>`;
}

export function checkList(items, className = '') {
  return `<ul class="check-list ${className}">${items.map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>`;
}

export function ctaBand({ title, description, primaryHref, primaryLabel = 'Book a strategy call', secondaryHref = '/contact', secondaryLabel = 'Contact us', external = true }) {
  return `<section class="cta-band section section--tight">
    <div class="container">
      <div class="cta-band__inner reveal">
        <div>
          ${eyebrow('Ready when you are', 'light')}
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
        <div class="button-row">
          ${primaryButton(primaryLabel, primaryHref, { external, track: 'book_call_cta' })}
          ${secondaryButton(secondaryLabel, secondaryHref, { className: 'button--on-dark' })}
        </div>
      </div>
    </div>
  </section>`;
}

export function breadcrumb(items) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items.map((item, index) => `<li>${index < items.length - 1 ? `<a href="${item.href}">${item.label}</a><span>/</span>` : `<span aria-current="page">${item.label}</span>`}</li>`).join('')}</ol></nav>`;
}

export function pageHero({ eyebrowText, title, description, bullets = [], primaryHref, primaryLabel = 'Book a strategy call', secondaryHref = '', secondaryLabel = '', visual = '', breadcrumbItems = [] }) {
  return `<section class="page-hero section section--dark">
    <div class="page-hero__glow" aria-hidden="true"></div>
    <div class="container">
      ${breadcrumbItems.length ? breadcrumb(breadcrumbItems) : ''}
      <div class="page-hero__grid">
        <div class="page-hero__content reveal">
          ${eyebrow(eyebrowText, 'light')}
          <h1>${title}</h1>
          <p class="page-hero__lead">${description}</p>
          ${bullets.length ? checkList(bullets, 'check-list--light page-hero__list') : ''}
          <div class="button-row">
            ${primaryButton(primaryLabel, primaryHref, { external: primaryHref.startsWith('http'), track: 'book_call_hero' })}
            ${secondaryHref ? secondaryButton(secondaryLabel, secondaryHref, { className: 'button--on-dark' }) : ''}
          </div>
        </div>
        ${visual ? `<div class="page-hero__visual reveal">${visual}</div>` : ''}
      </div>
    </div>
  </section>`;
}

export function teamPodVisual() {
  return `<div class="team-pod" role="img" aria-label="A dedicated sales rep supported by management, client success, data operations, and reporting">
    <div class="team-pod__ring team-pod__ring--one"></div>
    <div class="team-pod__ring team-pod__ring--two"></div>
    <div class="team-pod__center">
      <span>Dedicated talent</span>
      <strong>SDR / AE</strong>
      <small>Built around your goals</small>
    </div>
    <div class="team-pod__node team-pod__node--manager">${icon('users')}<span>Manager</span></div>
    <div class="team-pod__node team-pod__node--data">${icon('database')}<span>Data</span></div>
    <div class="team-pod__node team-pod__node--success">${icon('shield')}<span>Client success</span></div>
    <div class="team-pod__node team-pod__node--reporting">${icon('chart')}<span>Reporting</span></div>
  </div>`;
}

export function dashboardMock() {
  return `<figure class="dashboard-mock reveal">
    <div class="dashboard-mock__bar">
      <div><span class="dashboard-dot"></span><strong>Client performance dashboard</strong></div>
      <span class="live-pill"><i></i> Reporting view</span>
    </div>
    <div class="dashboard-mock__metrics">
      <div><span>Activity</span><strong>Visible</strong><small>Calls, emails, tasks</small></div>
      <div><span>Contactability</span><strong>Tracked</strong><small>By segment and period</small></div>
      <div><span>Meetings</span><strong>Qualified</strong><small>Scheduled, held, outcomes</small></div>
    </div>
    <div class="dashboard-mock__grid">
      <div class="dashboard-panel dashboard-panel--line">
        <div class="dashboard-panel__header"><strong>Performance trend</strong><span>Illustrative</span></div>
        <svg viewBox="0 0 520 220" role="img" aria-label="Illustrative performance trend chart">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#4f9fda" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#4f9fda" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <g class="chart-grid">
            <path d="M35 40H500M35 90H500M35 140H500M35 190H500"/>
            <path d="M35 20V190M125 20V190M215 20V190M305 20V190M395 20V190M500 20V190"/>
          </g>
          <path class="chart-area" d="M35 170 C95 165 110 145 155 150 S235 125 270 132 S350 88 390 96 S460 45 500 58 L500 190 L35 190 Z"/>
          <path class="chart-line" d="M35 170 C95 165 110 145 155 150 S235 125 270 132 S350 88 390 96 S460 45 500 58"/>
          <g class="chart-points"><circle cx="35" cy="170" r="5"/><circle cx="155" cy="150" r="5"/><circle cx="270" cy="132" r="5"/><circle cx="390" cy="96" r="5"/><circle cx="500" cy="58" r="5"/></g>
        </svg>
      </div>
      <div class="dashboard-panel dashboard-panel--bars">
        <div class="dashboard-panel__header"><strong>Outreach outcomes</strong><span>By period</span></div>
        <div class="bar-chart" aria-hidden="true">
          <div><i style="--bar:45%"></i><b style="--bar:64%"></b><span>Contact</span></div>
          <div><i style="--bar:32%"></i><b style="--bar:52%"></b><span>Qualified</span></div>
          <div><i style="--bar:38%"></i><b style="--bar:76%"></b><span>Meeting</span></div>
          <div><i style="--bar:21%"></i><b style="--bar:48%"></b><span>Held</span></div>
        </div>
      </div>
      <div class="dashboard-panel dashboard-panel--list">
        <div class="dashboard-panel__header"><strong>Meeting outcomes</strong><span>Current view</span></div>
        <div class="outcome-list">
          <div><span><i class="status status--blue"></i>Scheduled</span><b>Tracked</b></div>
          <div><span><i class="status status--teal"></i>Held</span><b>Tracked</b></div>
          <div><span><i class="status status--amber"></i>Rescheduled</span><b>Tracked</b></div>
          <div><span><i class="status status--gray"></i>No show</span><b>Tracked</b></div>
        </div>
      </div>
    </div>
    <figcaption>Illustrative dashboard layout. Actual reporting is configured to each engagement.</figcaption>
  </figure>`;
}
