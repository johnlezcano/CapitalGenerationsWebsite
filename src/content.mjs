import {
  arrowLink,
  checkList,
  ctaBand,
  dashboardMock,
  eyebrow,
  faqItem,
  featureCard,
  icon,
  pageHero,
  primaryButton,
  processStep,
  resultMetric,
  secondaryButton,
  sectionHeading,
  serviceCard,
  tag,
  teamPodVisual,
} from './components.mjs';

function homeHero(site) {
  return `<section class="home-hero section section--dark">
    <div class="home-hero__grid-bg" aria-hidden="true"></div>
    <div class="home-hero__glow home-hero__glow--one" aria-hidden="true"></div>
    <div class="home-hero__glow home-hero__glow--two" aria-hidden="true"></div>
    <div class="container home-hero__inner">
      <div class="home-hero__content reveal">
        ${eyebrow('Managed outsourced sales teams', 'light')}
        <h1>Build pipeline without building the entire team.</h1>
        <p>Capital Generations recruits, trains, manages, and supports dedicated SDRs and AEs, so your company gets more qualified conversations without another hiring and management burden.</p>
        <div class="button-row">
          ${primaryButton('Book a strategy call', site.calendlyUrl, { external: true, track: 'book_call_hero' })}
          ${secondaryButton('See how it works', '/how-it-works', { className: 'button--on-dark' })}
        </div>
        <div class="hero-proof">
          <span>${icon('check')}Dedicated sales talent</span>
          <span>${icon('check')}Human led outreach</span>
          <span>${icon('check')}Manager accountability</span>
          <span>${icon('check')}Transparent reporting</span>
        </div>
      </div>
      <div class="home-hero__visual reveal">
        <div class="revenue-system" role="img" aria-label="A managed sales system connecting targeting, outreach, management, and reporting to qualified pipeline">
          <div class="revenue-system__grid" aria-hidden="true"></div>
          <div class="revenue-system__status"><i></i> Managed sales program</div>
          <div class="revenue-system__center">
            <span>Business outcome</span>
            <strong>Qualified pipeline</strong>
            <div class="mini-chart" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <div class="revenue-system__card revenue-system__card--target">${icon('target')}<div><span>Targeting</span><strong>Right accounts</strong></div></div>
          <div class="revenue-system__card revenue-system__card--outreach">${icon('phone')}<div><span>Outreach</span><strong>Real conversations</strong></div></div>
          <div class="revenue-system__card revenue-system__card--manage">${icon('users')}<div><span>Management</span><strong>Daily accountability</strong></div></div>
          <div class="revenue-system__card revenue-system__card--report">${icon('chart')}<div><span>Reporting</span><strong>Clear visibility</strong></div></div>
        </div>
      </div>
    </div>
  </section>`;
}

function faqSection(title, description, faqs) {
  return `<section class="section section--soft">
    <div class="container two-column two-column--faq">
      <div class="sticky-copy">
        ${sectionHeading({ eyebrowText: 'Frequently asked', title, description })}
      </div>
      <div class="faq-list">${faqs.map(({ question, answer }) => faqItem(question, answer)).join('')}</div>
    </div>
  </section>`;
}

function homePage(site) {
  const faqs = [
    {
      question: 'Is Capital Generations a staffing company or a lead generation agency?',
      answer: 'Neither description captures the full model. Capital Generations provides dedicated sales talent inside a managed operating system that includes recruiting, training, sales management, client success, data support, and reporting.',
    },
    {
      question: 'Are the representatives dedicated to our company?',
      answer: 'Engagements are structured around dedicated sales capacity aligned to your market, messaging, goals, and process. The supporting management, data, and client success functions keep the program accountable and adaptable.',
    },
    {
      question: 'Do you only work with education companies?',
      answer: 'No. Capital Generations supports growing B2B companies across industries, with particularly deep experience selling into K through 12, higher education, and education related markets.',
    },
    {
      question: 'How is outreach different from automated appointment setting?',
      answer: 'The model is human led and account aware. Calls and follow up are tailored to the prospect, role, market, and conversation rather than relying on generic scripts or high volume automated sequences alone.',
    },
    {
      question: 'What can we see in reporting?',
      answer: 'Reporting can cover outreach activity, contactability, target market performance, meeting status, held meeting outcomes, geography, and conversion trends. The reporting view is configured to the engagement.',
    },
  ];

  return {
    path: '/',
    title: 'Outsourced SDR & AE Teams | Capital Generations',
    ogTitle: 'Build pipeline without building the entire team.',
    description:
      'Capital Generations recruits, trains, manages, and reports on dedicated SDR and AE teams that create qualified pipeline for growing B2B companies.',
    faqs,
    body: `${homeHero(site)}

    <section class="proof-strip" aria-label="Core service benefits">
      <div class="container proof-strip__inner">
        <span>Dedicated reps</span><i></i><span>Sales management</span><i></i><span>Data operations</span><i></i><span>Client success</span><i></i><span>Power BI visibility</span>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeading({
          eyebrowText: 'More than a rep',
          title: 'A rep is only part of the system.',
          description: 'Strong outbound requires the right people, target market, management rhythm, technology, and feedback loop. Capital Generations brings those pieces together for you.',
          align: 'center',
        })}
        <div class="feature-grid feature-grid--five">
          ${featureCard({ iconName: 'users', title: 'Recruiting & training', description: 'We source, select, onboard, and develop the sales talent assigned to your program.' })}
          ${featureCard({ iconName: 'target', title: 'ICP targeting', description: 'Account and contact research keeps effort focused on the people most likely to buy.' })}
          ${featureCard({ iconName: 'shield', title: 'Sales management', description: 'Managers coach performance, review activity, and hold daily execution accountable.' })}
          ${featureCard({ iconName: 'database', title: 'Data support', description: 'Target lists, segmentation, enrichment, and cleanup support more relevant outreach.' })}
          ${featureCard({ iconName: 'chart', title: 'Reporting', description: 'A clear dashboard shows activity, outcomes, trends, and where the program should adjust.' })}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({
          eyebrowText: 'Choose your sales capacity',
          title: 'Start where the bottleneck is.',
          description: 'Add pipeline generation, closing support, or a connected team that handles both.',
        })}
        <div class="service-grid">
          ${serviceCard({ iconName: 'phone', eyebrowText: 'Pipeline generation', title: 'Outsourced SDR teams', description: 'Dedicated SDR capacity for targeting, prospecting, qualifying, scheduling, and following up with the right accounts.', href: '/services/sdr-teams', bullets: ['Phone first multichannel outreach', 'Qualified meeting setting', 'Managed execution and reporting'] })}
          ${serviceCard({ iconName: 'briefcase', eyebrowText: 'Sales execution', title: 'Outsourced AE teams', description: 'Add dedicated sales execution capacity to move qualified opportunities through discovery, follow up, and your sales process.', href: '/services/ae-teams', bullets: ['Aligned to your process', 'Opportunity follow through', 'Managed pipeline discipline'] })}
          ${serviceCard({ iconName: 'layers', eyebrowText: 'Connected coverage', title: 'Full sales teams', description: 'Connect SDR and AE capacity under one operating rhythm, from target account to qualified opportunity and beyond.', href: '/services/full-sales-teams', bullets: ['Unified handoffs', 'One management structure', 'End to end visibility'] })}
        </div>
      </div>
    </section>

    <section class="section section--dark process-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'A repeatable operating model', title: 'From target market to qualified conversation.', description: 'The work is structured, measured, and adjusted around your goals, not a generic campaign dropped into a shared queue.', tone: 'dark' })}
        <div class="process-grid process-grid--five">
          ${processStep({ number: '01', iconName: 'compass', title: 'Align', description: 'Clarify the offer, sales motion, ICP, target roles, goals, and definitions of quality.' })}
          ${processStep({ number: '02', iconName: 'search', title: 'Build', description: 'Develop the target market, account lists, contact coverage, messaging, and workflow.' })}
          ${processStep({ number: '03', iconName: 'users', title: 'Deploy', description: 'Assign and prepare the right sales talent, manager, client success lead, and data support.' })}
          ${processStep({ number: '04', iconName: 'message', title: 'Engage', description: 'Launch human led calls and follow up across the channels that fit the buyer.' })}
          ${processStep({ number: '05', iconName: 'refresh', title: 'Improve', description: 'Review performance, listen to the market, adjust targeting, and strengthen conversion.' })}
        </div>
        <div class="section-link-row">${arrowLink('See the full operating process', '/how-it-works', 'text-link--light')}</div>
      </div>
    </section>

    <section class="section reporting-section">
      <div class="container reporting-section__grid">
        <div class="reporting-section__copy">
          ${sectionHeading({ eyebrowText: 'Visibility built in', title: 'See the work. See the trend. See what changes next.', description: 'Capital Generations uses Outreach for execution and Power BI reporting to help clients understand activity, contactability, conversion, meeting status, and target market performance.' })}
          ${checkList(['Outreach activity and contact outcomes', 'Meeting scheduled, held, canceled, and missed meeting status', 'Target market and geography performance', 'Period over period conversion trends'])}
          ${arrowLink('Explore reporting and results', '/results')}
        </div>
        ${dashboardMock()}
      </div>
    </section>

    <section class="section section--soft results-preview">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Selected client outcomes', title: 'Measured by pipeline movement, not activity theater.', description: 'Anonymized results from prior engagements. Outcomes vary by offer, market, sales cycle, and client execution.', align: 'center' })}
        <div class="metrics-grid metrics-grid--four">
          ${resultMetric({ value: '600%', label: 'increase in meetings held', detail: 'Achieved by month three in one education engagement.' })}
          ${resultMetric({ value: '3×', label: 'internal meeting output', detail: 'Scheduled more meetings than the internal SDR team in a selected engagement.' })}
          ${resultMetric({ value: '200+', label: 'meetings scheduled', detail: 'Generated during the first half of 2023 for one client.' })}
          ${resultMetric({ value: '$3.5M', label: 'pipeline generated', detail: 'Reported during 2023 in a selected education engagement.' })}
        </div>
        <div class="section-link-row section-link-row--center">${arrowLink('View anonymized results', '/results')}</div>
      </div>
    </section>

    <section class="section education-callout">
      <div class="container education-callout__inner">
        <div class="education-callout__visual reveal" aria-hidden="true">
          <div class="education-map-card">
            <div class="education-map-card__top">${icon('graduation')}<span>Education market coverage</span></div>
            <div class="education-map-card__roles">
              <span>District leaders</span><span>School leaders</span><span>Academic teams</span><span>IT</span><span>Special education</span><span>Finance & grants</span>
            </div>
            <div class="education-map-card__line"></div>
          </div>
        </div>
        <div class="education-callout__copy reveal">
          ${eyebrow('Education sales expertise')}
          <h2>Education buying is complex. Your outreach should understand that.</h2>
          <p>Capital Generations has substantial experience helping education companies reach district, school, academic, technology, special education, finance, and student success stakeholders.</p>
          ${arrowLink('Explore education sales development', '/industries/education')}
        </div>
      </div>
    </section>

    ${faqSection('Questions before we talk?', 'A few direct answers about how the managed model works.', faqs)}

    ${ctaBand({
      title: 'Need more qualified conversations with the right accounts?',
      description: 'Tell us where your sales motion is getting stuck. We’ll talk through the team, process, and coverage that would make sense.',
      primaryHref: site.calendlyUrl,
    })}`,
  };
}

function servicesPage(site) {
  const faqs = [
    {
      question: 'Can we start with one service and expand later?',
      answer: 'Yes. Many companies begin with a defined SDR or AE need and expand once the workflow, economics, and target market are clearer.',
    },
    {
      question: 'Who manages the representatives?',
      answer: 'Capital Generations provides the management structure around the assigned talent. A sales manager drives coaching and accountability, while client success and data support keep the engagement aligned and supplied.',
    },
    {
      question: 'Can Capital Generations work inside our existing tools?',
      answer: 'The operating model can plug into the client’s CRM and workflow where appropriate. Capital Generations also uses Outreach and Power BI as core execution and reporting tools.',
    },
    {
      question: 'Are services limited to the United States?',
      answer: 'The strongest current positioning is United States focused B2B sales, with experience supporting broader and international outreach requirements when the engagement calls for it.',
    },
  ];

  return {
    path: '/services',
    title: 'Outsourced Sales Services | Capital Generations',
    description: 'Add managed SDR, AE, or full sales team capacity with recruiting, training, management, data support, client success, and reporting built in.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Outsourced sales services',
      title: 'Add the sales capacity you need, backed by the system it requires.',
      description: 'Choose dedicated SDR support, AE support, or a connected sales team. Capital Generations manages the people, process, accountability, data, and visibility around the work.',
      bullets: ['Dedicated sales talent', 'Manager led accountability', 'Client success and data support', 'Performance reporting'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how it works',
      visual: teamPodVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }],
    })}

    <section class="section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Three ways to engage', title: 'Start with the gap in your current sales motion.', description: 'Every option is designed as managed sales capacity, not anonymous staffing or a shared appointment setting pool.' })}
        <div class="service-grid">
          ${serviceCard({ iconName: 'phone', eyebrowText: 'Pipeline generation', title: 'Outsourced SDR teams', description: 'Build target lists, start relevant conversations, qualify interest, schedule meetings, and keep follow up moving.', href: '/services/sdr-teams', bullets: ['Target account research', 'Custom phone led outreach', 'Meeting setting and confirmation'] })}
          ${serviceCard({ iconName: 'briefcase', eyebrowText: 'Sales execution', title: 'Outsourced AE teams', description: 'Add capacity to handle discovery, demos, follow up, opportunity movement, and pipeline discipline inside your process.', href: '/services/ae-teams', bullets: ['Discovery and follow up support', 'Opportunity management', 'Process and CRM alignment'] })}
          ${serviceCard({ iconName: 'layers', eyebrowText: 'Integrated coverage', title: 'Full sales teams', description: 'Connect prospecting and sales execution through one managed team, workflow, reporting structure, and client relationship.', href: '/services/full-sales-teams', bullets: ['SDR to AE handoffs', 'Unified management', 'End to end visibility'] })}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Included around the talent', title: 'The operating layer is part of the value.', description: 'The goal is not to hand you another person to manage. The goal is to deliver accountable sales capacity.' })}
        <div class="feature-grid feature-grid--five">
          ${featureCard({ iconName: 'search', title: 'Hiring', description: 'Candidate sourcing, selection, and replacement when necessary.' })}
          ${featureCard({ iconName: 'graduation', title: 'Training', description: 'Role preparation, product learning, call development, and coaching.' })}
          ${featureCard({ iconName: 'shield', title: 'Management', description: 'KPI accountability, call review, mentoring, and performance action.' })}
          ${featureCard({ iconName: 'database', title: 'Data support', description: 'Account research, contact coverage, segmentation, and list maintenance.' })}
          ${featureCard({ iconName: 'chart', title: 'Visibility', description: 'Dashboards, outcomes, trends, and a regular strategy rhythm.' })}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container selection-guide">
        <div>
          ${sectionHeading({ eyebrowText: 'Choosing a model', title: 'Which service is the right starting point?', description: 'The answer depends on where pipeline is slowing down and how much of the sales motion you want Capital Generations to own.' })}
        </div>
        <div class="selection-guide__cards">
          <article class="selection-card reveal"><span>Choose SDR teams when…</span><h3>You need more qualified conversations.</h3><p>Your closers have capacity, but the top of the funnel is inconsistent or too dependent on referrals and inbound.</p>${arrowLink('Explore SDR teams', '/services/sdr-teams')}</article>
          <article class="selection-card reveal"><span>Choose AE teams when…</span><h3>You need more sales execution capacity.</h3><p>Qualified opportunities exist, but discovery, follow up, demos, and pipeline movement need more dedicated attention.</p>${arrowLink('Explore AE teams', '/services/ae-teams')}</article>
          <article class="selection-card reveal"><span>Choose a full team when…</span><h3>You want one connected operating model.</h3><p>You need both pipeline creation and sales execution aligned under one management and reporting structure.</p>${arrowLink('Explore full sales teams', '/services/full-sales-teams')}</article>
        </div>
      </div>
    </section>

    ${faqSection('Service questions', 'The right engagement should fit the sales motion, not force the sales motion to fit a package.', faqs)}

    ${ctaBand({ title: 'Not sure which team structure fits?', description: 'Bring your current funnel, goals, and bottleneck. We’ll help frame the practical starting point.', primaryHref: site.calendlyUrl })}`,
  };
}

function sdrVisual() {
  return `<div class="workflow-visual workflow-visual--sdr" role="img" aria-label="Target accounts move through research, human outreach, qualification, and meeting setting">
    <div class="workflow-visual__header"><span>Managed SDR workflow</span><i></i></div>
    <div class="workflow-visual__steps">
      <div>${icon('target')}<span>Target</span></div><b>${icon('arrow')}</b>
      <div>${icon('search')}<span>Research</span></div><b>${icon('arrow')}</b>
      <div>${icon('phone')}<span>Engage</span></div><b>${icon('arrow')}</b>
      <div>${icon('calendar')}<span>Meet</span></div>
    </div>
    <div class="workflow-visual__footer"><span>${icon('users')} Manager review</span><span>${icon('chart')} Dashboard</span></div>
  </div>`;
}

function sdrPage(site) {
  const faqs = [
    {
      question: 'Is outreach only by phone?',
      answer: 'Telephone outreach is a core strength, but the program can combine phone, email, and LinkedIn follow up based on the market, contact seniority, and campaign strategy.',
    },
    {
      question: 'Do SDRs use a fixed script?',
      answer: 'Messaging frameworks and call preparation create consistency, but calls are not treated as generic scripts. Representatives are expected to respond to the account, role, context, and live conversation.',
    },
    {
      question: 'Who builds the target account and contact lists?',
      answer: 'Capital Generations provides data support for account selection, contact identification, list maintenance, segmentation, and cleansing, aligned to the agreed ideal customer profile.',
    },
    {
      question: 'What happens when an SDR is underperforming?',
      answer: 'Management includes coaching, KPI review, call feedback, and accountability. Capital Generations also owns the people management responsibility, including replacement when necessary.',
    },
    {
      question: 'How are meetings handled after they are booked?',
      answer: 'The team schedules and confirms the meeting, records relevant context, supports the handoff, and tracks whether the meeting was held, rescheduled, canceled, or missed.',
    },
  ];

  return {
    path: '/services/sdr-teams',
    title: 'Outsourced SDR Teams | Capital Generations',
    description: 'Dedicated outsourced SDR teams for target research, human led prospecting, qualification, appointment setting, management, and transparent reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Outsourced SDR teams',
      title: 'Build qualified pipeline without building an internal SDR function.',
      description: 'Capital Generations recruits, trains, manages, and supports dedicated SDR capacity that targets the right accounts, starts real conversations, and books qualified meetings for your sales team.',
      bullets: ['Phone first multichannel outreach', 'Custom conversations, not call center scripts', 'Manager led coaching and accountability', 'Data support and Power BI reporting'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/results',
      secondaryLabel: 'See selected results',
      visual: sdrVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'SDR teams', href: '/services/sdr-teams' }],
    })}

    <section class="section">
      <div class="container split-intro">
        <div>
          ${sectionHeading({ eyebrowText: 'What the team handles', title: 'The daily work required to create conversations.', description: 'Your internal sales leadership stays focused on strategy, deals, and revenue while Capital Generations runs the outreach engine.' })}
        </div>
        <div class="capability-grid">
          ${featureCard({ iconName: 'target', title: 'ICP and account targeting', description: 'Translate your ideal customer into target segments, organizations, territories, and buyer roles.' })}
          ${featureCard({ iconName: 'database', title: 'Contact research and hygiene', description: 'Identify decision makers, enrich coverage, remove stale records, and keep lists usable.' })}
          ${featureCard({ iconName: 'phone', title: 'Human led prospecting', description: 'Use phone, email, and LinkedIn with messaging tailored to the buyer and market.' })}
          ${featureCard({ iconName: 'message', title: 'Qualification', description: 'Understand fit, timing, need, and context before passing a conversation forward.' })}
          ${featureCard({ iconName: 'calendar', title: 'Meeting setting', description: 'Schedule, confirm, and support the handoff to the client’s sales team.' })}
          ${featureCard({ iconName: 'refresh', title: 'Follow up', description: 'Keep appropriate prospects moving without relying on single touch outreach.' })}
          ${featureCard({ iconName: 'shield', title: 'Management and coaching', description: 'Review performance, calls, activity, and KPIs while taking action when execution slips.' })}
          ${featureCard({ iconName: 'chart', title: 'Reporting and optimization', description: 'Track outcomes and adjust the target market, messaging, and cadence based on evidence.' })}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Built to represent your company', title: 'Context before contact.', description: 'The goal is not simply more dials. It is more credible conversations with the people your company should actually be talking to.', align: 'center' })}
        <div class="principles-grid">
          <article class="principle-card reveal"><span>01</span><h3>Account aware</h3><p>Outreach starts with the organization, buyer role, market, and reason the conversation may matter.</p></article>
          <article class="principle-card reveal"><span>02</span><h3>Human led</h3><p>Technology supports the work. Representatives handle objections, nuance, and live conversation.</p></article>
          <article class="principle-card reveal"><span>03</span><h3>Professionally managed</h3><p>Coaching and accountability are part of the engagement rather than being pushed back to your Head of Sales.</p></article>
          <article class="principle-card reveal"><span>04</span><h3>Measured by outcomes</h3><p>Activity matters, but qualification, meetings held, conversion, and pipeline movement matter more.</p></article>
        </div>
      </div>
    </section>

    <section class="section comparison-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Compared with building internally', title: 'Keep the sales capacity. Reduce the management drag.', description: 'An internal SDR function requires more than salary. It requires recruiting, ramp time, coaching, data, tools, performance management, and replacement coverage.' })}
        <div class="comparison-table reveal" role="table" aria-label="Capital Generations compared with an internal SDR build">
          <div class="comparison-table__row comparison-table__head" role="row"><div role="columnheader">Requirement</div><div role="columnheader">Build internally</div><div role="columnheader">Capital Generations</div></div>
          <div class="comparison-table__row" role="row"><div role="cell">Recruiting and hiring</div><div role="cell">Owned by your team</div><div role="cell">Managed by CG</div></div>
          <div class="comparison-table__row" role="row"><div role="cell">Training and development</div><div role="cell">Requires internal bandwidth</div><div role="cell">Built into the engagement</div></div>
          <div class="comparison-table__row" role="row"><div role="cell">Daily coaching and accountability</div><div role="cell">Falls to sales leadership</div><div role="cell">Sales manager included</div></div>
          <div class="comparison-table__row" role="row"><div role="cell">Data and list operations</div><div role="cell">Separate tools and resources</div><div role="cell">Data support included</div></div>
          <div class="comparison-table__row" role="row"><div role="cell">Performance visibility</div><div role="cell">You build the reporting</div><div role="cell">Dashboard and review rhythm</div></div>
          <div class="comparison-table__row" role="row"><div role="cell">Replacement responsibility</div><div role="cell">Restart the hiring cycle</div><div role="cell">Managed by CG</div></div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container team-support">
        <div class="team-support__visual reveal">${teamPodVisual()}</div>
        <div class="team-support__copy reveal">
          ${sectionHeading({ eyebrowText: 'One dedicated rep. A broader support team.', title: 'The SDR is backed by management, data, client success, and reporting.', description: 'That operating layer keeps the representative prepared, supplied, accountable, and aligned with your sales goals.', tone: 'dark' })}
          ${checkList(['SDR manager for coaching and KPI accountability', 'Client success lead for alignment and communication', 'Data resource for targeting and list operations', 'Power BI dashboard for performance visibility'], 'check-list--light')}
        </div>
      </div>
    </section>

    ${faqSection('Outsourced SDR questions', 'The practical details that separate a managed SDR team from generic appointment setting.', faqs)}

    ${ctaBand({ title: 'Ready to create more qualified conversations?', description: 'Let’s talk about your ICP, current outbound motion, sales capacity, and what a managed SDR team would need to accomplish.', primaryHref: site.calendlyUrl })}`,
  };
}

function aeVisual() {
  return `<div class="ae-visual" role="img" aria-label="Qualified opportunities moving through discovery, follow up, proposal, and close coordination">
    <div class="ae-visual__top"><span>Opportunity workflow</span><i>Managed</i></div>
    <div class="ae-visual__pipeline">
      <div class="ae-stage ae-stage--active"><span>Discovery</span><b></b></div>
      <div class="ae-stage ae-stage--active"><span>Demo</span><b></b></div>
      <div class="ae-stage"><span>Follow up</span><b></b></div>
      <div class="ae-stage"><span>Proposal</span><b></b></div>
      <div class="ae-stage"><span>Decision</span><b></b></div>
    </div>
    <div class="ae-visual__cards"><div>${icon('briefcase')}<span>AE capacity</span><strong>Aligned to your process</strong></div><div>${icon('chart')}<span>Pipeline discipline</span><strong>Visible and accountable</strong></div></div>
  </div>`;
}

function aePage(site) {
  const faqs = [
    {
      question: 'What parts of the sales process can an outsourced AE support?',
      answer: 'Depending on the engagement, AE support can cover discovery, demonstrations, follow up, opportunity management, CRM hygiene, pipeline movement, and close coordination. The exact scope is defined during onboarding.',
    },
    {
      question: 'Do we need an existing sales process?',
      answer: 'A defined offer, target market, and basic sales process make the engagement stronger. Capital Generations can help structure the operating workflow, but the model is most effective when the company has validated demand and a clear customer problem.',
    },
    {
      question: 'Can an AE work with our internal SDRs?',
      answer: 'Yes. The AE can receive qualified handoffs from an internal or Capital Generations SDR team, provided the qualification criteria, ownership, CRM process, and follow up expectations are clearly defined.',
    },
    {
      question: 'How is AE performance managed?',
      answer: 'Performance is managed through agreed pipeline stages, activity and follow up expectations, opportunity review, sales management, client success communication, and reporting.',
    },
  ];

  return {
    path: '/services/ae-teams',
    title: 'Outsourced AE Teams | Capital Generations',
    description: 'Add managed account executive capacity for discovery, demos, follow up, opportunity management, and sales process execution without another hiring cycle.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Outsourced AE teams',
      title: 'Add sales execution capacity without starting another hiring cycle.',
      description: 'Dedicated AE support helps your company move qualified opportunities through discovery, demonstrations, follow up, and the sales process, with management and accountability around the work.',
      bullets: ['Aligned to your sales process', 'Dedicated follow up and opportunity ownership', 'Manager and client success support', 'Pipeline reporting and review'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/services/full-sales-teams',
      secondaryLabel: 'Explore full sales teams',
      visual: aeVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AE teams', href: '/services/ae-teams' }],
    })}

    <section class="section">
      <div class="container split-intro">
        <div>
          ${sectionHeading({ eyebrowText: 'Where AE support fits', title: 'When opportunity volume and sales bandwidth stop matching.', description: 'A managed AE engagement adds focused execution where qualified interest is being lost to delayed follow up, inconsistent ownership, or limited closing capacity.' })}
          ${checkList(['Your Head of Sales is carrying too many opportunities', 'Qualified meetings are not receiving consistent follow up', 'A new market or segment needs dedicated coverage', 'Internal AEs need relief without a long recruiting cycle'])}
        </div>
        <div class="capability-grid capability-grid--two">
          ${featureCard({ iconName: 'message', title: 'Discovery', description: 'Run structured conversations that clarify the problem, fit, stakeholders, timing, and next step.' })}
          ${featureCard({ iconName: 'spark', title: 'Demos and presentations', description: 'Support product or service presentations using the client’s approved process and materials.' })}
          ${featureCard({ iconName: 'refresh', title: 'Follow up', description: 'Keep momentum after the meeting with clear ownership, relevant communication, and defined next actions.' })}
          ${featureCard({ iconName: 'briefcase', title: 'Opportunity management', description: 'Maintain stage discipline, notes, actions, and visibility inside the agreed sales workflow.' })}
          ${featureCard({ iconName: 'users', title: 'Stakeholder coordination', description: 'Map the buying group and help move conversations beyond a single point of contact.' })}
          ${featureCard({ iconName: 'chart', title: 'Pipeline review', description: 'Review movement, blockers, conversion, and next steps with management and the client team.' })}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Clear ownership', title: 'Qualified meetings should become managed opportunities.', description: 'The handoff from first conversation to sales execution is where many outsourced programs break. The AE model is designed to make ownership explicit.', align: 'center' })}
        <div class="handoff-flow reveal" role="img" aria-label="Flow from qualified meeting to discovery, opportunity management, and next step">
          <div>${icon('calendar')}<span>Qualified meeting</span></div><b>${icon('arrow')}</b>
          <div>${icon('message')}<span>Discovery</span></div><b>${icon('arrow')}</b>
          <div>${icon('briefcase')}<span>Opportunity</span></div><b>${icon('arrow')}</b>
          <div>${icon('refresh')}<span>Next action</span></div><b>${icon('arrow')}</b>
          <div>${icon('chart')}<span>Pipeline visibility</span></div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container team-support">
        <div class="team-support__visual reveal">${teamPodVisual()}</div>
        <div class="team-support__copy reveal">
          ${sectionHeading({ eyebrowText: 'Managed, not merely placed', title: 'The engagement includes an operating structure around the AE.', description: 'Capital Generations takes responsibility for talent, management, client alignment, and performance visibility so the role does not become another unmanaged contractor relationship.', tone: 'dark' })}
          ${checkList(['Defined scope and stage ownership', 'Sales manager coaching and accountability', 'Client success communication and alignment', 'Pipeline and activity visibility'], 'check-list--light')}
        </div>
      </div>
    </section>

    ${faqSection('Outsourced AE questions', 'AE scope is tailored to the client’s product, process, sales cycle, and internal team.', faqs)}

    ${ctaBand({ title: 'Need more capacity after the meeting is booked?', description: 'Let’s talk through your current pipeline, sales process, handoff, and where opportunities are slowing down.', primaryHref: site.calendlyUrl })}`,
  };
}

function fullTeamVisual() {
  return `<div class="full-team-visual" role="img" aria-label="A connected sales team from target account to qualified pipeline">
    <div class="full-team-visual__label">Connected sales workflow</div>
    <div class="full-team-visual__track">
      <div><i>${icon('target')}</i><span>ICP</span></div>
      <b>${icon('arrow')}</b>
      <div><i>${icon('phone')}</i><span>SDR</span></div>
      <b>${icon('arrow')}</b>
      <div><i>${icon('calendar')}</i><span>Meeting</span></div>
      <b>${icon('arrow')}</b>
      <div><i>${icon('briefcase')}</i><span>AE</span></div>
      <b>${icon('arrow')}</b>
      <div><i>${icon('chart')}</i><span>Pipeline</span></div>
    </div>
    <div class="full-team-visual__support"><span>${icon('users')} One management rhythm</span><span>${icon('database')} Shared data</span><span>${icon('shield')} Client success</span></div>
  </div>`;
}

function fullSalesPage(site) {
  const faqs = [
    {
      question: 'Does a full sales team replace our Head of Sales?',
      answer: 'No. The model is designed to add managed execution capacity around the client’s commercial leadership. Strategy, pricing, product decisions, and major deal ownership remain aligned with the client.',
    },
    {
      question: 'Can the team include both Capital Generations and internal sellers?',
      answer: 'Yes. The operating model can combine internal and outsourced roles as long as stage ownership, handoffs, systems, qualification criteria, and reporting responsibilities are clear.',
    },
    {
      question: 'How are SDR to AE handoffs handled?',
      answer: 'The engagement defines what qualifies as a handoff, what context is required, who owns follow up, how quickly the AE responds, and how meeting and opportunity outcomes are recorded.',
    },
    {
      question: 'Is the full sales team model only for companies with no sales team?',
      answer: 'No. It can support an early sales function, add a new market pod, increase capacity around an existing team, or create a dedicated outbound motion while internal leaders focus elsewhere.',
    },
  ];

  return {
    path: '/services/full-sales-teams',
    title: 'Outsourced Sales Teams | Capital Generations',
    description: 'Connect dedicated SDR and AE capacity under one managed operating model for targeting, outreach, qualification, handoff, opportunity management, and reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Full outsourced sales teams',
      title: 'One managed team from first touch to pipeline movement.',
      description: 'Connect dedicated SDR and AE capacity under one operating rhythm so targeting, outreach, qualification, handoff, follow up, and reporting work as one system.',
      bullets: ['SDR and AE capacity in one engagement', 'Clear qualification and handoff rules', 'Unified management and client success', 'End to end performance visibility'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See the operating model',
      visual: fullTeamVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Full sales teams', href: '/services/full-sales-teams' }],
    })}

    <section class="section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Close the gaps between roles', title: 'Pipeline generation and sales execution should not operate as separate islands.', description: 'The full sales team model creates shared context, agreed ownership, and one management cadence across the early sales journey.' })}
        <div class="connected-grid">
          <article class="connected-card reveal"><div class="icon-box">${icon('target')}</div><span>01</span><h3>Target market design</h3><p>Define the accounts, segments, buyer roles, territories, and contact coverage that matter.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('phone')}</div><span>02</span><h3>Outbound engagement</h3><p>Start account aware conversations through phone, email, LinkedIn, and relevant follow up.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('calendar')}</div><span>03</span><h3>Qualification and meetings</h3><p>Clarify fit and context, schedule the conversation, confirm attendance, and document the handoff.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('briefcase')}</div><span>04</span><h3>Sales execution</h3><p>Run discovery, demonstrations, follow up, opportunity movement, and next step ownership.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('chart')}</div><span>05</span><h3>Review and optimization</h3><p>Use outcomes across the funnel to improve the ICP, messaging, qualification, and process.</p></article>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container full-team-benefits">
        <div class="full-team-benefits__copy">
          ${sectionHeading({ eyebrowText: 'Why connect the team', title: 'One operating rhythm reduces lost context and delayed follow up.', description: 'Instead of separate vendors, contractors, and internal processes, the full sales team model creates a single accountable workflow.' })}
          ${checkList(['Shared qualification standards', 'Faster, clearer SDR to AE handoffs', 'Consistent messaging across the buyer journey', 'One manager and client success cadence', 'Combined visibility into activity and outcomes'])}
        </div>
        <div class="system-card reveal">
          <div class="system-card__head"><span>Managed revenue pod</span><i>Active</i></div>
          <div class="system-card__body">
            <div>${icon('phone')}<span><strong>SDR</strong><small>Creates qualified conversations</small></span></div>
            <div>${icon('briefcase')}<span><strong>AE</strong><small>Moves opportunities forward</small></span></div>
            <div>${icon('users')}<span><strong>Manager</strong><small>Coaches and holds accountable</small></span></div>
            <div>${icon('shield')}<span><strong>Client success</strong><small>Keeps the engagement aligned</small></span></div>
            <div>${icon('database')}<span><strong>Data support</strong><small>Supplies the right market coverage</small></span></div>
            <div>${icon('chart')}<span><strong>Dashboard</strong><small>Makes performance visible</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Best fit situations', title: 'When a full team can make sense.', description: 'The model is particularly useful when the company needs a connected sales function but does not want to build every role and support layer internally.', align: 'center' })}
        <div class="fit-grid">
          ${featureCard({ iconName: 'spark', title: 'New outbound motion', description: 'Launch a structured outbound program around a validated offer and target market.' })}
          ${featureCard({ iconName: 'map', title: 'New market or territory', description: 'Create a dedicated pod for a segment, geography, vertical, or product line.' })}
          ${featureCard({ iconName: 'users', title: 'Lean internal sales team', description: 'Give a Head of Sales more execution capacity without adding a full internal org chart.' })}
          ${featureCard({ iconName: 'refresh', title: 'Inconsistent handoffs', description: 'Connect meeting creation and opportunity follow up through one defined workflow.' })}
        </div>
      </div>
    </section>

    ${faqSection('Full sales team questions', 'A connected team works best when ownership, process, and outcomes are explicit.', faqs)}

    ${ctaBand({ title: 'Want one accountable partner across the sales motion?', description: 'Let’s map the roles, handoffs, target market, and management structure your company actually needs.', primaryHref: site.calendlyUrl })}`,
  };
}

function processVisual() {
  return `<div class="process-visual" role="img" aria-label="Five stages: align, build, deploy, engage, improve">
    <div class="process-visual__rail"></div>
    <div><span>01</span><strong>Align</strong></div>
    <div><span>02</span><strong>Build</strong></div>
    <div><span>03</span><strong>Deploy</strong></div>
    <div><span>04</span><strong>Engage</strong></div>
    <div><span>05</span><strong>Improve</strong></div>
  </div>`;
}

function howItWorksPage(site) {
  const faqs = [
    {
      question: 'How quickly can a program launch?',
      answer: 'Launch timing depends on the role, target market, product complexity, data requirements, systems, and readiness of client materials. The onboarding plan is defined after discovery rather than promised as a generic timeline.',
    },
    {
      question: 'What does the client need to provide?',
      answer: 'Clients should provide product and market context, current sales materials, target customer knowledge, approved claims, CRM or workflow access where required, feedback, and clear ownership for meetings and opportunities.',
    },
    {
      question: 'How often do we review performance?',
      answer: 'The engagement includes a regular strategy and performance rhythm. The exact cadence is set with the client and supported by the live reporting view.',
    },
    {
      question: 'Can targeting and messaging change after launch?',
      answer: 'Yes. Monitoring and adjustment are core parts of the model. The team uses call feedback, contactability, meeting outcomes, conversion, and client input to improve the program.',
    },
  ];

  return {
    path: '/how-it-works',
    title: 'How Our Managed Sales Teams Work | Capital Generations',
    description: 'See how Capital Generations aligns on ICP, builds the target market, deploys dedicated sales talent, runs human led outreach, and improves performance.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'How it works',
      title: 'A managed sales program, not a rep dropped into your Slack.',
      description: 'Capital Generations combines discovery, targeting, sales talent, management, client success, data support, execution, and reporting in one operating model.',
      bullets: ['Clear ICP and qualification standards', 'Prepared and managed sales talent', 'Human led execution', 'Continuous reporting and adjustment'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/services',
      secondaryLabel: 'Explore services',
      visual: processVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'How it works', href: '/how-it-works' }],
    })}

    <section class="section process-detail">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'The operating process', title: 'Five stages that turn sales capacity into a working program.', description: 'Each stage has a practical output, an owner, and a feedback loop.' })}
        <div class="process-detail__list">
          <article class="process-detail__item reveal"><div class="process-detail__number">01</div><div class="process-detail__icon">${icon('compass')}</div><div><span>Align</span><h3>Define the commercial target.</h3><p>Clarify the product, value proposition, sales motion, ideal customer, target roles, geographies, qualification criteria, meeting expectations, and success measures.</p><ul><li>ICP and segment definition</li><li>Buyer role priorities</li><li>Quality and handoff standards</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">02</div><div class="process-detail__icon">${icon('search')}</div><div><span>Build</span><h3>Create the market, message, and workflow.</h3><p>Translate the strategy into target accounts, contact coverage, segmentation, outreach messaging, channel use, CRM stages, and reporting requirements.</p><ul><li>Account and contact research</li><li>Messaging frameworks</li><li>Systems and reporting setup</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">03</div><div class="process-detail__icon">${icon('users')}</div><div><span>Deploy</span><h3>Prepare the right team for the engagement.</h3><p>Assign the SDR or AE capacity, sales manager, client success lead, and data support required for the scope. Train on the offer, buyer, process, objections, and tools.</p><ul><li>Talent assignment and onboarding</li><li>Product and market preparation</li><li>Manager expectations and KPIs</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">04</div><div class="process-detail__icon">${icon('phone')}</div><div><span>Engage</span><h3>Run the work with human judgment.</h3><p>Execute phone led multichannel outreach, qualification, meeting setting, follow up, discovery, or opportunity work according to the engagement.</p><ul><li>Account aware conversations</li><li>Documented outcomes and context</li><li>Defined handoffs and next actions</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">05</div><div class="process-detail__icon">${icon('refresh')}</div><div><span>Improve</span><h3>Use the market response to get better.</h3><p>Review call feedback, contactability, conversion, meeting outcomes, pipeline movement, and client input. Adjust targeting, messaging, workflow, and coaching accordingly.</p><ul><li>Performance and strategy reviews</li><li>Target market refinement</li><li>Coaching and accountability action</li></ul></div></article>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container team-support">
        <div class="team-support__visual reveal">${teamPodVisual()}</div>
        <div class="team-support__copy reveal">
          ${sectionHeading({ eyebrowText: 'Who is around the work', title: 'Your assigned seller is supported by a broader team.', description: 'The exact roles vary by engagement, but the operating model brings together sales execution, management, client alignment, data, and reporting.', tone: 'dark' })}
          ${checkList(['Dedicated SDR and/or AE capacity', 'Sales manager', 'Client success', 'Data and list support', 'Performance dashboard'], 'check-list--light')}
        </div>
      </div>
    </section>

    <section class="section cadence-section">
      <div class="container cadence-section__grid">
        <div>
          ${sectionHeading({ eyebrowText: 'The working cadence', title: 'Accountability happens between the strategy calls.', description: 'A good managed program is not a monthly report on activity that already happened. Management, coaching, data work, execution, and adjustment occur continuously.' })}
        </div>
        <div class="cadence-cards">
          <article class="cadence-card reveal"><span>Daily</span><h3>Execution and management</h3><p>Outreach, follow up, CRM updates, activity monitoring, call review, and rep accountability.</p></article>
          <article class="cadence-card reveal"><span>Weekly</span><h3>Performance and alignment</h3><p>Review market feedback, activity, outcomes, blockers, upcoming priorities, and client actions.</p></article>
          <article class="cadence-card reveal"><span>Ongoing</span><h3>Data and optimization</h3><p>Refresh target coverage, improve segmentation, adjust messaging, and respond to performance evidence.</p></article>
        </div>
      </div>
    </section>

    ${faqSection('Process questions', 'The onboarding and operating plan is tailored to the role, market, and client readiness.', faqs)}

    ${ctaBand({ title: 'Want to map the operating model to your sales motion?', description: 'We’ll talk through the target market, roles, systems, handoffs, and outcomes before recommending a structure.', primaryHref: site.calendlyUrl })}`,
  };
}

function educationVisual() {
  return `<div class="education-visual" role="img" aria-label="Education buyer roles connected across district, school, academics, technology, and student services">
    <div class="education-visual__center">${icon('graduation')}<strong>Education market</strong><span>Multiple stakeholders</span></div>
    <div class="education-visual__role education-visual__role--one">District</div>
    <div class="education-visual__role education-visual__role--two">School</div>
    <div class="education-visual__role education-visual__role--three">Academic</div>
    <div class="education-visual__role education-visual__role--four">IT</div>
    <div class="education-visual__role education-visual__role--five">Student services</div>
  </div>`;
}

function educationPage(site) {
  const faqs = [
    {
      question: 'Which education markets can Capital Generations support?',
      answer: 'The strongest experience reflected in existing materials is with K through 12 districts, schools, private school groups, higher education, education technology, student services, special education, enrichment, and education related solutions.',
    },
    {
      question: 'Which buyer roles can outreach target?',
      answer: 'Depending on the offer, outreach may target superintendents, assistant superintendents, provosts, academic leaders, curriculum and instruction, special education, IT, finance and grants, community engagement, student success, and other relevant stakeholders.',
    },
    {
      question: 'Can the program target both district level and school level buyers?',
      answer: 'Yes. The target market design can separate district, school, campus, private school group, and higher education motions, with different roles, messaging, timing, and qualification rules.',
    },
    {
      question: 'How do you handle education seasonality?',
      answer: 'Targeting, call themes, follow up, and capacity should reflect budget cycles, school calendars, planning periods, and seasonal priorities. The program can adjust segments and effort as the market changes.',
    },
  ];

  return {
    path: '/industries/education',
    title: 'Education Sales Development | Capital Generations',
    description: 'Managed education sales development for companies selling into K through 12, higher education, districts, schools, academic teams, IT, special education, and student services.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Education sales development',
      title: 'Reach the people who shape education buying decisions.',
      description: 'Capital Generations helps education companies navigate multiple stakeholder markets with targeted account research, professional outreach, qualified meetings, management, and clear reporting.',
      bullets: ['District, school, and higher education targeting', 'Role specific outreach and messaging', 'Phone led human conversations', 'Experience across complex education buying groups'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/results',
      secondaryLabel: 'See education outcomes',
      visual: educationVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries/education' }, { label: 'Education', href: '/industries/education' }],
    })}

    <section class="section">
      <div class="container education-buyers">
        <div class="education-buyers__copy">
          ${sectionHeading({ eyebrowText: 'A multiple stakeholder market', title: 'Education sales rarely has one buyer.', description: 'The right outreach program understands the difference between the economic buyer, academic owner, technical evaluator, operational influencer, and end user advocate.' })}
          <p>Targeting is structured around the offer and buying process, not a generic list of “school contacts.”</p>
        </div>
        <div class="buyer-cloud reveal" aria-label="Examples of education buyer roles">
          ${tag('Superintendent')}${tag('Assistant Superintendent')}${tag('Provost')}${tag('Academic Director')}${tag('Curriculum & Instruction')}${tag('Special Education')}${tag('Exceptional Learners')}${tag('IT leadership')}${tag('Finance & Grants')}${tag('Community Engagement')}${tag('Student Success')}${tag('Strategic Planning')}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Built for education complexity', title: 'The program adapts to the market you are actually selling into.', description: 'District outreach, private schools, colleges, campus groups, and education technology each require different account structures, roles, timing, and language.' })}
        <div class="feature-grid feature-grid--four">
          ${featureCard({ iconName: 'map', title: 'Market segmentation', description: 'Separate district, school, private school, higher education, geography, enrollment, and other useful segments.' })}
          ${featureCard({ iconName: 'users', title: 'Buyer group coverage', description: 'Map multiple stakeholders instead of depending on one contact record per account.' })}
          ${featureCard({ iconName: 'clock', title: 'Calendar awareness', description: 'Adjust focus around planning periods, budget cycles, school year timing, and seasonal needs.' })}
          ${featureCard({ iconName: 'message', title: 'Role relevant conversations', description: 'Tailor the reason for outreach to academic, operational, technical, financial, or student outcomes.' })}
        </div>
      </div>
    </section>

    <section class="section education-use-cases">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Where we can help', title: 'Common education sales motions.', description: 'The final target market and team structure are always built around the client’s offer and goals.' })}
        <div class="use-case-grid">
          <article class="use-case-card reveal"><span>K through 12</span><h3>District and school outreach</h3><p>Reach central office leaders, school administrators, academic functions, technology, student services, and other defined buyers.</p></article>
          <article class="use-case-card reveal"><span>Private education</span><h3>School and multiple campus growth</h3><p>Target individual schools, ownership groups, networks, and relevant leaders with a segmented approach.</p></article>
          <article class="use-case-card reveal"><span>Higher education</span><h3>Institution and campus development</h3><p>Engage provost, academic, student success, technology, finance, and program stakeholders where relevant.</p></article>
          <article class="use-case-card reveal"><span>EdTech & services</span><h3>New category or product adoption</h3><p>Build awareness and qualified conversations for technology, enrichment, student support, training, and service offerings.</p></article>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Selected education outcomes', title: 'Experience measured in meetings, pipeline, and market growth.', description: 'Anonymized results from selected prior engagements. Outcomes vary by offer, market, timing, and client execution.', tone: 'dark', align: 'center' })}
        <div class="metrics-grid metrics-grid--four metrics-grid--dark">
          ${resultMetric({ value: '600%', label: 'increase in meetings held', detail: 'By month three in one education engagement.' })}
          ${resultMetric({ value: '200+', label: 'meetings scheduled', detail: 'In the first half of 2023 for one provider.' })}
          ${resultMetric({ value: '$3.5M', label: 'pipeline generated', detail: 'Reported in 2023 in a selected engagement.' })}
          ${resultMetric({ value: '250%', label: 'private school growth', detail: 'During a seasonal school start ramp in one engagement.' })}
        </div>
      </div>
    </section>

    ${faqSection('Education sales questions', 'Selling into education requires practical decisions about buyer roles, account structure, timing, and handoffs.', faqs)}

    ${ctaBand({ title: 'Selling into schools, districts, or higher education?', description: 'Let’s talk through the offer, market level, target roles, seasonality, and sales capacity required to create qualified pipeline.', primaryHref: site.calendlyUrl })}`,
  };
}

function resultsVisual() {
  return `<div class="results-visual" role="img" aria-label="Anonymized performance metrics showing meetings, pipeline, and conversion visibility">
    <div class="results-visual__main"><span>Selected outcome</span><strong>Pipeline growth</strong><svg viewBox="0 0 330 120" aria-hidden="true"><path d="M10 102 C60 98 75 77 115 83 S180 66 215 55 S275 38 320 12"/><path d="M10 102 C60 98 75 77 115 83 S180 66 215 55 S275 38 320 12 L320 112 L10 112 Z"/></svg></div>
    <div class="results-visual__stat results-visual__stat--one"><strong>3×</strong><span>meeting output</span></div>
    <div class="results-visual__stat results-visual__stat--two"><strong>200+</strong><span>meetings</span></div>
    <div class="results-visual__stat results-visual__stat--three"><strong>$3.5M</strong><span>pipeline</span></div>
  </div>`;
}

function resultsPage(site) {
  const faqs = [
    {
      question: 'Why are the case studies anonymized?',
      answer: 'Capital Generations is not displaying client logos or names on the launch site. The outcomes are presented without identifying the companies or exposing private campaign information.',
    },
    {
      question: 'Are these results guaranteed?',
      answer: 'No. Results depend on the offer, pricing, market, timing, sales cycle, target quality, internal follow up, and other factors. The examples show selected prior outcomes, not a promise of future performance.',
    },
    {
      question: 'Which metrics are tracked?',
      answer: 'Metrics can include account and prospect coverage, calls and outreach activity, contactability, qualified contact, meetings scheduled, meetings held, canceled and missed meeting outcomes, conversion, geography, segments, and pipeline progression.',
    },
    {
      question: 'Can reporting be tailored to our sales process?',
      answer: 'Yes. The Power BI reporting view can be configured around the engagement, target market, meeting definitions, stages, and outcomes that matter to the client.',
    },
  ];

  return {
    path: '/results',
    title: 'Outsourced Sales Results | Capital Generations',
    description: 'Review anonymized Capital Generations outcomes, including meeting growth, meeting volume, pipeline generated, market growth, and transparent dashboard reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Results and reporting',
      title: 'Performance should be visible, and tied to the right outcomes.',
      description: 'Capital Generations measures the activity behind the work, the quality of the conversations, the status of meetings, and the pipeline movement that follows.',
      bullets: ['Anonymized client outcomes', 'Meeting and conversion visibility', 'Target market performance', 'Power BI dashboard reporting'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how the work runs',
      visual: resultsVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Results', href: '/results' }],
    })}

    <section class="section results-overview">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Selected outcomes', title: 'Evidence from prior engagements.', description: 'These figures are anonymized and drawn from selected client work. They are not guarantees. Performance varies based on the market, offer, timing, sales cycle, and client follow through.', align: 'center' })}
        <div class="metrics-grid metrics-grid--four">
          ${resultMetric({ value: '600%', label: 'increase in meetings held', detail: 'By month three in one education engagement.' })}
          ${resultMetric({ value: '3×', label: 'as many meetings as internal staff', detail: 'In a selected direct comparison engagement.' })}
          ${resultMetric({ value: '200+', label: 'meetings scheduled in H1', detail: 'Generated for one client during 2023.' })}
          ${resultMetric({ value: '$3.5M', label: 'pipeline generated', detail: 'Reported during 2023 in a selected engagement.' })}
        </div>
      </div>
    </section>

    <section class="section section--soft case-study-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Anonymized engagement snapshots', title: 'Different markets. The same need for accountable execution.', description: 'Client identities are intentionally withheld on the launch site.' })}
        <div class="case-study-grid">
          <article class="case-study-card reveal">
            <div class="case-study-card__meta"><span>Education technology</span><i>SDR engagement</i></div>
            <h3>Increase qualified meeting production.</h3>
            <p>A growing education technology company needed more consistent access to school and district buyers without placing the full recruiting and management load on internal sales leadership.</p>
            <div class="case-study-card__outcomes"><div><strong>600%</strong><span>increase in meetings held by month three</span></div><div><strong>3×</strong><span>internal meeting output</span></div></div>
          </article>
          <article class="case-study-card reveal">
            <div class="case-study-card__meta"><span>STEM and enrichment</span><i>Scaled SDR team</i></div>
            <h3>Scale a successful education outbound motion.</h3>
            <p>The program expanded from one SDR to a team of four serving school and district targets across multiple education offerings.</p>
            <div class="case-study-card__outcomes"><div><strong>200+</strong><span>meetings scheduled in H1 2023</span></div><div><strong>$3.5M</strong><span>pipeline generated in 2023</span></div></div>
          </article>
          <article class="case-study-card reveal">
            <div class="case-study-card__meta"><span>K through 12 services</span><i>Market development program</i></div>
            <h3>Open new private school opportunities.</h3>
            <p>Capital Generations built outbound targeting around industries and geographies, helping the client reach multiple campus organizations during a critical school start growth period.</p>
            <div class="case-study-card__outcomes"><div><strong>250%</strong><span>private school growth during ramp period</span></div><div><strong>Multiple</strong><span>multiple campus clients added</span></div></div>
          </article>
          <article class="case-study-card reveal">
            <div class="case-study-card__meta"><span>B2B technology</span><i>Dedicated outbound partner</i></div>
            <h3>Create a reliable source of outbound opportunities.</h3>
            <p>The program targeted technology stakeholders at large school districts and became a primary outbound lead source for the client’s internal sales staff.</p>
            <div class="case-study-card__outcomes"><div><strong>3:1</strong><span>meeting advantage over internal staff</span></div><div><strong>New</strong><span>market opportunities identified</span></div></div>
          </article>
        </div>
      </div>
    </section>

    <section class="section reporting-detail">
      <div class="container reporting-section__grid">
        <div class="reporting-section__copy">
          ${sectionHeading({ eyebrowText: 'The dashboard is part of the service', title: 'Know what happened, and where to adjust.', description: 'The reporting structure is designed to turn daily execution into a useful management view rather than a raw activity dump.' })}
          ${checkList(['Account and prospect coverage', 'Call composition and contactability', 'Qualified contact and conversion trends', 'Meetings scheduled, held, canceled, and missed', 'Performance by geography, segment, or target market', 'Meeting and pipeline follow through'])}
        </div>
        ${dashboardMock()}
      </div>
    </section>

    ${faqSection('Results and reporting questions', 'Clear reporting should create better decisions, not just more charts.', faqs)}

    ${ctaBand({ title: 'Want to talk about the outcome your team needs?', description: 'Bring your current funnel, target market, and sales goals. We’ll discuss what should be measured and what the team would need to own.', primaryHref: site.calendlyUrl })}`,
  };
}

function aboutVisual() {
  return `<div class="about-visual" role="img" aria-label="Capital Generations operating principles: human conversations, accountability, targeting, and visibility">
    <div class="about-visual__center"><img src="/assets/images/logo-mark.png" alt="" width="240" height="240"/><span>Sales operators</span></div>
    <div class="about-visual__item about-visual__item--one">${icon('message')}Human</div>
    <div class="about-visual__item about-visual__item--two">${icon('shield')}Accountable</div>
    <div class="about-visual__item about-visual__item--three">${icon('target')}Targeted</div>
    <div class="about-visual__item about-visual__item--four">${icon('chart')}Visible</div>
  </div>`;
}

function aboutPage(site) {
  const faqs = [
    {
      question: 'Where is Capital Generations based?',
      answer: 'Capital Generations is based in New York and supports B2B sales programs with a strong focus on the United States.',
    },
    {
      question: 'What type of company is the best fit?',
      answer: 'The strongest fit is typically a growing B2B company, often under 100 employees, with a credible offer, a defined or emerging ideal customer profile, and a Head of Sales or commercial leader who needs more execution capacity.',
    },
    {
      question: 'What is Capital Generations not?',
      answer: 'The model is not positioned as a low cost call center, a shared pool of generic appointment setters, a list broker, or an automated mass automated outreach service. It is managed sales capacity built to represent the client professionally.',
    },
    {
      question: 'Does Capital Generations work outside education?',
      answer: 'Yes. Education is a significant area of experience, but the service model applies to B2B companies in other markets where targeted outbound and managed sales capacity are a fit.',
    },
  ];

  return {
    path: '/about',
    title: 'About Capital Generations | Managed B2B Sales Teams',
    description: 'Capital Generations is a New York based outsourced sales company providing dedicated SDR and AE capacity with recruiting, training, management, data, and reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'About Capital Generations',
      title: 'Built by sales operators, not lead resellers.',
      description: 'Capital Generations exists to give growing companies professionally managed sales capacity without requiring them to build every role, process, tool, and management layer internally.',
      bullets: ['Human led B2B sales execution', 'Dedicated sales talent', 'Management and accountability', 'Targeting, data, and reporting support'],
      primaryHref: site.calendlyUrl,
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how we work',
      visual: aboutVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }],
    })}

    <section class="section about-story">
      <div class="container about-story__grid">
        <div>
          ${sectionHeading({ eyebrowText: 'Our point of view', title: 'Outsourcing should remove management burden, not create another one.', description: 'Hiring a rep is only the beginning. Someone still has to recruit, train, coach, supply data, review calls, track performance, manage turnover, and connect the work to revenue.' })}
        </div>
        <div class="about-story__copy reveal">
          <p>Capital Generations brings those responsibilities together in one managed engagement. The client gets dedicated sales capacity, while Capital Generations owns the operating work required to keep that capacity productive and accountable.</p>
          <p>The company has particularly strong experience in education and complex B2B outreach, where buyer roles, account structures, timing, and real conversation matter.</p>
        </div>
      </div>
    </section>

    <section class="section section--soft values-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Operating principles', title: 'How the company should feel to a client.', description: 'Professional, direct, responsive, and accountable, without pretending sales development is automatic.', align: 'center' })}
        <div class="feature-grid feature-grid--four">
          ${featureCard({ iconName: 'message', title: 'Human', description: 'Technology supports the process. People create the conversations, interpret context, and handle nuance.' })}
          ${featureCard({ iconName: 'shield', title: 'Accountable', description: 'Managers own coaching and performance action rather than passing every people issue to the client.' })}
          ${featureCard({ iconName: 'target', title: 'Focused', description: 'The program is built around the right accounts, roles, segments, and business objective.' })}
          ${featureCard({ iconName: 'chart', title: 'Transparent', description: 'Clients should see what the team is doing, what is happening, and what should change.' })}
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container team-support">
        <div class="team-support__visual reveal">${teamPodVisual()}</div>
        <div class="team-support__copy reveal">
          ${sectionHeading({ eyebrowText: 'The Capital Generations model', title: 'A dedicated seller, supported by an operating team.', description: 'The exact structure depends on the engagement, but the model brings together execution, management, client alignment, data, and reporting.', tone: 'dark' })}
          ${checkList(['Dedicated SDR and/or AE talent', 'Sales manager', 'Client success', 'Data and list operations', 'Dashboard visibility'], 'check-list--light')}
        </div>
      </div>
    </section>

    <section class="section positioning-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'What we are, and what we are not', title: 'Managed sales capacity built to represent your company.', description: 'Capital Generations is designed for clients who care about professionalism, communication quality, management, and measurable execution.' })}
        <div class="positioning-grid">
          <div class="positioning-card positioning-card--yes reveal"><span>${icon('check')}Capital Generations</span><ul><li>Dedicated sales capacity</li><li>Human led, account aware outreach</li><li>Manager coaching and accountability</li><li>Data and reporting support</li><li>Built around the client’s goals</li></ul></div>
          <div class="positioning-card positioning-card--no reveal"><span>Not the model</span><ul><li>Shared appointment setter pool</li><li>Generic call center scripts</li><li>Automated volume without context</li><li>A list of leads with no ownership</li><li>Another contractor for you to manage</li></ul></div>
        </div>
      </div>
    </section>

    ${faqSection('About the company', 'A few practical details about fit, location, and positioning.', faqs)}

    ${ctaBand({ title: 'Looking for a managed sales partner rather than another vendor?', description: 'Let’s talk about the sales capacity, accountability, and target market work your company needs.', primaryHref: site.calendlyUrl })}`,
  };
}

function contactPage(site) {
  const formEndpoint = site.formspreeEndpoint || '';
  const faqs = [
    {
      question: 'What should I bring to the first conversation?',
      answer: 'Come prepared to discuss your offer, target market, current sales team, pipeline goals, sales cycle, existing outbound activity, and where execution is getting stuck.',
    },
    {
      question: 'Is the first conversation a sales demo?',
      answer: 'It is a practical fit conversation. The goal is to understand the sales motion and determine whether an SDR, AE, or connected team model makes sense.',
    },
    {
      question: 'Can I contact Capital Generations without booking a call?',
      answer: `Yes. Email ${site.email}, call ${site.phoneDisplay}, send a WhatsApp message, or use the contact form.`,
    },
  ];

  return {
    path: '/contact',
    title: 'Book a Sales Strategy Call | Capital Generations',
    description: 'Book a conversation with Capital Generations about managed outsourced SDR teams, AE teams, education sales development, and qualified pipeline growth.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Start a conversation',
      title: 'Tell us where your sales motion needs more capacity.',
      description: 'We’ll talk through your offer, target market, team, current funnel, and the outcomes you need, then determine whether Capital Generations is a practical fit.',
      bullets: ['No published package pushed on the call', 'Practical discussion of fit and scope', 'SDR, AE, or full sales team options', 'Clear next steps if there is a fit'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Choose a time',
      secondaryHref: `mailto:${site.email}`,
      secondaryLabel: 'Email us',
      visual: `<div class="contact-visual" role="img" aria-label="Calendar and conversation planning"><div class="contact-visual__calendar">${icon('calendar')}<strong>Book a conversation</strong><span>Choose a time that works</span><div><i></i><i></i><i></i><i></i><i></i></div></div><div class="contact-visual__note">${icon('message')}<span>Talk through your ICP, sales motion, and growth goals.</span></div></div>`,
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }],
    })}

    <section class="section contact-section">
      <div class="container contact-grid">
        <div class="contact-option contact-option--calendar reveal">
          <div class="icon-box">${icon('calendar')}</div>
          <span class="contact-option__label">Fastest option</span>
          <h2>Book a strategy conversation.</h2>
          <p>Choose a time on the Capital Generations calendar. The conversation will focus on your target market, current team, sales bottleneck, and desired outcome.</p>
          ${primaryButton('Open Calendly', site.calendlyUrl, { external: true, track: 'book_call_contact' })}
          <small>Calendly opens in a new tab.</small>
          <div class="direct-contact" aria-label="Other ways to contact Capital Generations">
            <span>Or contact us directly</span>
            <a href="${site.phoneUrl}" data-track="phone_contact">${icon('phone')}<span><strong>${site.phoneDisplay}</strong><small>Call Capital Generations</small></span></a>
            <a href="${site.whatsappUrl}" target="_blank" rel="noopener noreferrer" data-track="whatsapp_contact">${icon('whatsapp')}<span><strong>WhatsApp</strong><small>Start a business conversation</small></span></a>
            <a href="mailto:${site.email}" data-track="email_contact">${icon('mail')}<span><strong>${site.email}</strong><small>Send an email</small></span></a>
            ${site.social?.linkedin ? `<a href="${site.social.linkedin}" target="_blank" rel="noopener noreferrer" data-track="linkedin_contact">${icon('linkedin')}<span><strong>LinkedIn</strong><small>Follow Capital Generations</small></span></a>` : ''}
          </div>
        </div>

        <div class="contact-form-wrap reveal">
          <div class="contact-form-wrap__head">
            ${eyebrow('Send a note')}
            <h2>Prefer to start with context?</h2>
            <p>Share a few details and your message will be sent directly to the Capital Generations team.</p>
          </div>
          <form class="contact-form" method="POST" action="${formEndpoint}" data-contact-form data-formspree-endpoint="${formEndpoint}" data-contact-email="${site.email}">
            <input type="hidden" name="_subject" value="New Capital Generations website inquiry" />
            <input type="hidden" name="source" value="Capital Generations website" />
            <label class="honeypot" aria-hidden="true">Leave this field empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" /></label>
            <div class="form-row">
              <label><span>Name</span><input type="text" name="name" autocomplete="name" required /></label>
              <label><span>Work email</span><input type="email" name="email" autocomplete="email" required /></label>
            </div>
            <div class="form-row">
              <label><span>Company</span><input type="text" name="company" autocomplete="organization" required /></label>
              <label><span>Website</span><input type="url" name="website" placeholder="https://" inputmode="url" /></label>
            </div>
            <label><span>What do you need help with?</span><select name="service" required><option value="">Choose one</option><option>Outsourced SDR team</option><option>Outsourced AE team</option><option>Full sales team</option><option>Education sales development</option><option>Not sure yet</option></select></label>
            <label><span>What are you trying to accomplish?</span><textarea name="message" rows="6" placeholder="Tell us about your target market, current sales team, and pipeline goal." required></textarea></label>
            <div class="contact-form__footer">
              <button class="button button--primary" type="submit"><span>Send inquiry</span>${icon('arrow')}</button>
              <p>By submitting, you agree that Capital Generations may contact you about your inquiry. See our <a href="/privacy">privacy notice</a>.</p>
            </div>
            <div class="form-status" data-form-status role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>

    <section class="section section--soft expectation-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'What happens next', title: 'A straightforward first conversation.', description: 'The goal is to understand fit before discussing an engagement structure.', align: 'center' })}
        <div class="process-grid process-grid--three">
          ${processStep({ number: '01', iconName: 'message', title: 'Understand', description: 'Discuss the offer, target market, current team, pipeline, and sales bottleneck.' })}
          ${processStep({ number: '02', iconName: 'compass', title: 'Frame', description: 'Determine whether SDR, AE, or full sales team capacity is the relevant starting point.' })}
          ${processStep({ number: '03', iconName: 'arrow', title: 'Decide', description: 'Agree on the next discovery step, or conclude quickly if the fit is not right.' })}
        </div>
      </div>
    </section>

    ${faqSection('Before the first call', 'You do not need a perfect brief. A clear description of the sales challenge is enough to begin.', faqs)}`,
  };
}

function privacyPage(site) {
  return {
    path: '/privacy',
    title: 'Privacy Notice | Capital Generations',
    description: 'Privacy notice for the Capital Generations website, contact form, scheduling links, analytics, and information submitted by website visitors.',
    body: `<section class="legal-hero section section--dark"><div class="container"><div class="legal-hero__content">${eyebrow('Privacy notice', 'light')}<h1>How website information is handled.</h1><p>Last updated: August 17, 2026</p></div></div></section>
    <section class="section legal-content"><div class="container legal-content__inner">
      <p class="legal-intro">This notice describes the basic information practices for the Capital Generations website. It should be reviewed by qualified counsel before public launch, especially after analytics and form services are connected.</p>
      <h2>Information you submit</h2>
      <p>When you contact Capital Generations, book a meeting, or submit a website form, you may provide information such as your name, work email, company, website, service interest, and message. Capital Generations may use that information to respond to your inquiry, evaluate fit, communicate about services, and maintain business records.</p>
      <h2>Scheduling and form providers</h2>
      <p>The website links to Calendly for scheduling, WhatsApp for messaging, and LinkedIn for company information. The contact form uses Formspree. Information submitted through or shared with those services is also subject to each provider’s privacy and security practices.</p>
      <h2>Analytics</h2>
      <p>Google Analytics 4 may be added after launch to understand website traffic and usage. When enabled, analytics may collect device, browser, approximate location, referral, page view, and interaction information according to Google’s configuration and policies.</p>
      <h2>How information may be shared</h2>
      <p>Information may be shared with service providers that support website hosting, scheduling, form processing, analytics, email, and business operations. Capital Generations does not intend to sell personal information submitted through the website.</p>
      <h2>Data retention and security</h2>
      <p>Information may be retained for as long as reasonably needed to respond to inquiries, maintain business records, comply with legal obligations, and protect legitimate business interests. No method of transmission or storage can be guaranteed completely secure.</p>
      <h2>Your choices</h2>
      <p>You may contact Capital Generations to ask about information you submitted through the website or to request that future sales communication stop, subject to applicable legal and recordkeeping requirements.</p>
      <h2>Contact</h2>
      <p>Questions about this notice may be sent to <a href="mailto:${site.email}">${site.email}</a>.</p>
    </div></section>`,
  };
}

export function buildPages(site) {
  return [
    homePage(site),
    servicesPage(site),
    sdrPage(site),
    aePage(site),
    fullSalesPage(site),
    howItWorksPage(site),
    educationPage(site),
    resultsPage(site),
    aboutPage(site),
    contactPage(site),
    privacyPage(site),
  ];
}
