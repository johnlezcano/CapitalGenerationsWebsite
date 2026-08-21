import {
  arrowLink,
  checkList,
  ctaBand,
  dashboardMock,
  eyebrow,
  managedTeamSystem,
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
        ${eyebrow('Your outsourced sales team', 'light')}
        <h1>Build pipeline without building the entire team.</h1>
        <p>We hire the reps, train them, manage them, and make sure the work gets done. You get more qualified conversations without taking on another recruiting and management job.</p>
        <div class="button-row">
          ${primaryButton('Talk through your sales goals', site.calendlyUrl, { external: true, track: 'book_call_hero' })}
          ${secondaryButton('See how it works', '/how-it-works', { className: 'button--on-dark' })}
        </div>
        <div class="hero-proof">
          <span>${icon('check')}Reps dedicated to you</span>
          <span>${icon('check')}Real conversations</span>
          <span>${icon('check')}Hands on management</span>
          <span>${icon('check')}Reporting you can use</span>
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
          <div class="revenue-system__card revenue-system__card--manage">${icon('users')}<div><span>Management</span><strong>Daily management</strong></div></div>
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
      answer: 'We are not simply a staffing firm or a lead generation shop. We hire and manage dedicated sellers, then support them with training, client success, data, and reporting.',
    },
    {
      question: 'Are the representatives dedicated to our company?',
      answer: 'Yes. The rep works on your program and learns your market, message, goals, and process. Our managers, data team, and client success team stay involved so you are not managing the rep alone.',
    },
    {
      question: 'Do you only work with education companies?',
      answer: 'No. We work with growing B2B companies across industries. Education is one area where we have especially deep experience.',
    },
    {
      question: 'How is outreach different from automated appointment setting?',
      answer: 'We do not hand a rep a generic script and ask for volume. Calls and follow up are shaped around the account, buyer, market, and what happens in the conversation.',
    },
    {
      question: 'What can we see in reporting?',
      answer: 'You can see outreach activity, contact results, meetings, conversion trends, target market performance, and where we think the program should adjust.',
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

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({
          eyebrowText: 'Where do you need help?',
          title: 'Start with the part of sales that needs more attention.',
          description: 'We can help you create more conversations, move more opportunities, or run both together.',
        })}
        <div class="service-grid">
          ${serviceCard({ iconName: 'phone', eyebrowText: 'Pipeline generation', title: 'Outsourced SDR teams', description: 'We handle the targeting, outreach, qualification, scheduling, and follow up needed to create more meetings.', href: '/services/sdr-teams', bullets: ['Phone, email, and LinkedIn outreach', 'Qualified meetings for your team', 'Management and clear reporting'] })}
          ${serviceCard({ iconName: 'briefcase', eyebrowText: 'Sales execution', title: 'Outsourced AE teams', description: 'We add a dedicated seller to run discovery, follow up, and opportunity movement inside your process.', href: '/services/ae-teams', bullets: ['Fits your sales process', 'Owns the follow up', 'Keeps the pipeline moving'] })}
          ${serviceCard({ iconName: 'layers', eyebrowText: 'Connected coverage', title: 'Full sales teams', description: 'We connect SDR and AE work so the handoffs are clear and the whole motion is managed together.', href: '/services/full-sales-teams', bullets: ['Clear SDR and AE handoffs', 'One management rhythm', 'Visibility from first touch onward'] })}
        </div>
      </div>
    </section>

    <section class="section managed-team-section">
      <div class="container">
        ${sectionHeading({
          eyebrowText: 'The team behind the rep',
          title: 'More Than an SDR',
          description: 'Every engagement includes a dedicated seller supported by a broader operating team. You get the people, process, data, and support needed to keep the work moving.',
          align: 'center',
        })}
        ${managedTeamSystem()}
        <div class="section-link-row section-link-row--center">${arrowLink('See everything behind the SDR', '/services/sdr-teams')}</div>
      </div>
    </section>

    <section class="section section--dark process-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'How we get to work', title: 'We learn your business, then run the work.', description: 'We agree on who to target, build the list and message, prepare the team, start conversations, and keep improving based on what the market tells us.', tone: 'dark' })}
        <div class="process-grid process-grid--five">
          ${processStep({ number: '01', iconName: 'compass', title: 'Align', description: 'We get clear on what you sell, who should buy it, and what a good meeting looks like.' })}
          ${processStep({ number: '02', iconName: 'search', title: 'Build', description: 'We build the target accounts, contacts, message, and workflow the team will use.' })}
          ${processStep({ number: '03', iconName: 'users', title: 'Deploy', description: 'We assign the rep and the people who will manage, support, and report on the work.' })}
          ${processStep({ number: '04', iconName: 'message', title: 'Engage', description: 'The team starts real conversations and follows up in the channels that fit your buyers.' })}
          ${processStep({ number: '05', iconName: 'refresh', title: 'Improve', description: 'We listen to calls, review results, and change the target, message, or approach when needed.' })}
        </div>
        <div class="section-link-row">${arrowLink('See what working with us looks like', '/how-it-works', 'text-link--light')}</div>
      </div>
    </section>

    <section class="section reporting-section">
      <div class="container reporting-section__grid">
        <div class="reporting-section__copy">
          ${sectionHeading({ eyebrowText: 'Visibility built in', title: 'You should never have to guess what the team is doing.', description: 'We use Outreach to run the work and Power BI to show you the activity, conversations, meetings, and patterns that matter.' })}
          ${checkList(['Who the team is reaching and what happens', 'Meetings scheduled, held, canceled, and missed', 'Which markets and segments are responding', 'How conversion changes over time'])}
          ${arrowLink('See the reporting and results', '/results')}
        </div>
        ${dashboardMock()}
      </div>
    </section>

    <section class="section section--soft results-preview">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Selected client outcomes', title: 'The numbers should mean something.', description: 'We care about meetings that happen, conversations with the right people, and pipeline that actually moves. These are anonymized results from selected client work.', align: 'center' })}
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
          <h2>Education sales takes context, not just a contact list.</h2>
          <p>We have spent years helping education companies reach district, school, academic, technology, special education, finance, and student success leaders.</p>
          ${arrowLink('See our education experience', '/industries/education')}
        </div>
      </div>
    </section>

    ${faqSection('Questions before we talk?', 'Straight answers about how we work.', faqs)}

    ${ctaBand({
      title: 'Want to talk through your pipeline?',
      description: 'Tell us what you are trying to fix or build. We will give you a straight answer about whether our team can help.',
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk through your sales goals',
      secondaryLabel: 'Send us a note',
    })}`,
  };
}

function servicesPage(site) {
  const faqs = [
    {
      question: 'Can we start with one service and expand later?',
      answer: 'Yes. You can start with the sales gap that matters most today and add more support later if the work and results justify it.',
    },
    {
      question: 'Who manages the representatives?',
      answer: 'We do. A sales manager coaches the rep and holds the work accountable. Client success and data support stay involved so your team is not left managing the details.',
    },
    {
      question: 'Can Capital Generations work inside our existing tools?',
      answer: 'Yes. We can work inside your CRM and workflow where it makes sense. We also use Outreach to run the work and Power BI to make the results visible.',
    },
    {
      question: 'Are services limited to the United States?',
      answer: 'Our main focus is B2B sales in the United States. We can also discuss broader coverage when the market and engagement call for it.',
    },
  ];

  return {
    path: '/services',
    title: 'Outsourced Sales Services | Capital Generations',
    description: 'Add managed SDR, AE, or full sales team capacity with recruiting, training, management, data support, client success, and reporting built in.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Outsourced sales services',
      title: 'Tell us where sales is getting stuck. We can add the team around it.',
      description: 'Need more meetings, more follow up, or both? We hire and manage the people who do the work, and we keep you close to the results.',
      bullets: ['A rep who works on your program', 'A manager who stays close to the work', 'Data and client support', 'Reporting you can actually use'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk through the gap',
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how it works',
      visual: teamPodVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }],
    })}

    <section class="section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Ways we can help', title: 'Start with the part of sales that needs help.', description: 'You are not buying a generic package. We shape the team around the work your company needs done.' })}
        <div class="service-grid">
          ${serviceCard({ iconName: 'phone', eyebrowText: 'Pipeline generation', title: 'Outsourced SDR teams', description: 'We build the list, start the conversations, qualify interest, schedule meetings, and keep the follow up moving.', href: '/services/sdr-teams', bullets: ['Target account research', 'Custom phone led outreach', 'Meeting setting and confirmation'] })}
          ${serviceCard({ iconName: 'briefcase', eyebrowText: 'Sales execution', title: 'Outsourced AE teams', description: 'We add a seller who can handle discovery, demos, follow up, and the day to day work of moving opportunities forward.', href: '/services/ae-teams', bullets: ['Discovery and follow up support', 'Opportunity management', 'Process and CRM alignment'] })}
          ${serviceCard({ iconName: 'layers', eyebrowText: 'Integrated coverage', title: 'Full sales teams', description: 'We connect the people creating meetings with the people moving opportunities, then manage the handoffs and reporting together.', href: '/services/full-sales-teams', bullets: ['SDR to AE handoffs', 'Unified management', 'End to end visibility'] })}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'What we handle', title: 'You should not have to manage the people we provide.', description: 'We take care of hiring, training, coaching, data, and reporting so your Head of Sales can stay focused on the business.' })}
        <div class="feature-grid feature-grid--five">
          ${featureCard({ iconName: 'search', title: 'Hiring', description: 'We find the right person and handle replacement when it is needed.' })}
          ${featureCard({ iconName: 'graduation', title: 'Training', description: 'We train the rep on the role, your offer, the market, and the conversations they need to have.' })}
          ${featureCard({ iconName: 'shield', title: 'Management', description: 'We review calls, coach the rep, track the work, and step in when performance slips.' })}
          ${featureCard({ iconName: 'database', title: 'Data support', description: 'We keep the rep supplied with the right accounts, contacts, and clean data.' })}
          ${featureCard({ iconName: 'chart', title: 'Visibility', description: 'You can see what happened, what is changing, and what we think should happen next.' })}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container selection-guide">
        <div>
          ${sectionHeading({ eyebrowText: 'Choosing a model', title: 'Which service is the right starting point?', description: 'It comes down to where the work is backing up and what you want us to own.' })}
        </div>
        <div class="selection-guide__cards">
          <article class="selection-card reveal"><span>Choose SDR teams when…</span><h3>You need more qualified conversations.</h3><p>Your closers have room for more conversations, but the top of the funnel is inconsistent or too dependent on referrals and inbound.</p>${arrowLink('Explore SDR teams', '/services/sdr-teams')}</article>
          <article class="selection-card reveal"><span>Choose AE teams when…</span><h3>You need more help after the meeting.</h3><p>You have qualified interest, but discovery, demos, follow up, and next steps are not getting enough attention.</p>${arrowLink('Explore AE teams', '/services/ae-teams')}</article>
          <article class="selection-card reveal"><span>Choose a full team when…</span><h3>You want one team to own the whole motion.</h3><p>You need one team to create the conversation, own the handoff, and keep the opportunity moving.</p>${arrowLink('Explore full sales teams', '/services/full-sales-teams')}</article>
        </div>
      </div>
    </section>

    ${faqSection('Service questions', 'The team should fit your sales motion, not force you into a package.', faqs)}

    ${ctaBand({ title: 'Not sure where to start?', description: 'Tell us what is happening in your funnel. We will talk it through and suggest the most practical starting point.', primaryHref: site.calendlyUrl, primaryLabel: 'Talk through the options', secondaryLabel: 'Send us a note' })}`,
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
      answer: 'Phone is a core strength, but the team can also use email and LinkedIn based on the market, buyer, and conversation.',
    },
    {
      question: 'Do SDRs use a fixed script?',
      answer: 'We prepare the rep with a clear message and call framework, but we do not expect them to read a generic script. They need to listen and respond to the person on the other end.',
    },
    {
      question: 'Who builds the target account and contact lists?',
      answer: 'We handle the account and contact research, list maintenance, segmentation, and cleanup around the ideal customer profile we agree on together.',
    },
    {
      question: 'What happens when an SDR is underperforming?',
      answer: 'We coach the rep, review the calls and numbers, and take action when the work is not where it needs to be. We also handle replacement when necessary.',
    },
    {
      question: 'How are meetings handled after they are booked?',
      answer: 'The team books and confirms the meeting, records useful context, supports the handoff, and tracks what happens afterward.',
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
      description: 'We hire the SDR, train them on your business, manage the daily work, and make sure the right accounts are getting real outreach.',
      bullets: ['Phone, email, and LinkedIn outreach', 'Real conversations instead of call center scripts', 'A manager who coaches and holds accountable', 'Data support and reporting'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk about your pipeline',
      secondaryHref: '/results',
      secondaryLabel: 'See selected results',
      visual: sdrVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'SDR teams', href: '/services/sdr-teams' }],
    })}

    <section class="section">
      <div class="container split-intro">
        <div>
          ${sectionHeading({ eyebrowText: 'What the team handles', title: 'We do the work that keeps outbound moving.', description: 'Your sales leaders can stay focused on deals. We handle the lists, calls, follow up, coaching, and reporting.' })}
        </div>
        <div class="capability-grid">
          ${featureCard({ iconName: 'target', title: 'ICP and account targeting', description: 'We turn your ideal customer into a clear list of accounts, segments, territories, and buyer roles.' })}
          ${featureCard({ iconName: 'database', title: 'Contact research and hygiene', description: 'We find the right people, fill the gaps, remove stale records, and keep the list usable.' })}
          ${featureCard({ iconName: 'phone', title: 'Human led prospecting', description: 'The rep uses phone, email, and LinkedIn with a message that fits the buyer and market.' })}
          ${featureCard({ iconName: 'message', title: 'Qualification', description: 'The rep learns enough about fit, timing, need, and context before passing the conversation to your team.' })}
          ${featureCard({ iconName: 'calendar', title: 'Meeting setting', description: 'We schedule the meeting, confirm it, and make sure your team gets the context.' })}
          ${featureCard({ iconName: 'refresh', title: 'Follow up', description: 'We keep following up when the conversation deserves more than one attempt.' })}
          ${featureCard({ iconName: 'shield', title: 'Management and coaching', description: 'We review the calls and numbers, coach the rep, and step in when the work slips.' })}
          ${featureCard({ iconName: 'chart', title: 'Reporting and changes', description: 'We track what happens and adjust the target, message, and approach based on what we learn.' })}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Built to represent your company', title: 'Your rep should sound like they understand the account.', description: 'The goal is not more dials for the sake of it. It is better conversations with the people your company should be talking to.', align: 'center' })}
        <div class="principles-grid">
          <article class="principle-card reveal"><span>01</span><h3>Account aware</h3><p>The rep starts with the account, the buyer, and a real reason the conversation may matter.</p></article>
          <article class="principle-card reveal"><span>02</span><h3>Human led</h3><p>Technology helps with the work. The rep still has to listen, think, handle objections, and have a real conversation.</p></article>
          <article class="principle-card reveal"><span>03</span><h3>Professionally managed</h3><p>We coach the rep and hold the work accountable instead of handing that job back to your Head of Sales.</p></article>
          <article class="principle-card reveal"><span>04</span><h3>Measured by outcomes</h3><p>Calls matter, but qualified conversations, meetings that happen, and pipeline movement matter more.</p></article>
        </div>
      </div>
    </section>

    <section class="section comparison-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Compared with building internally', title: 'Get the SDR without taking on the entire SDR department.', description: 'Hiring internally also means recruiting, ramp time, coaching, data, tools, performance management, and replacement. We take that work off your plate.' })}
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

    <section class="section section--soft managed-team-section managed-team-section--sdr">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'The team behind the rep', title: 'More Than an SDR', description: 'Your dedicated SDR is backed by sales management, client success, data, reporting, integrations, and operational support. That broader team is part of the engagement.', align: 'center' })}
        ${managedTeamSystem({ detailed: true })}
      </div>
    </section>

    ${faqSection('Outsourced SDR questions', 'Straight answers about what the team does and how we manage it.', faqs)}

    ${ctaBand({ title: 'Want to see what an SDR team could look like for you?', description: 'Tell us who you sell to, how outbound works today, and where you need more help.', primaryHref: site.calendlyUrl, primaryLabel: 'Talk through your SDR needs', secondaryLabel: 'Send us a note' })}`,
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
    <div class="ae-visual__cards"><div>${icon('briefcase')}<span>Dedicated AE</span><strong>Works in your process</strong></div><div>${icon('chart')}<span>Pipeline follow through</span><strong>Visible and managed</strong></div></div>
  </div>`;
}

function aePage(site) {
  const faqs = [
    {
      question: 'What parts of the sales process can an outsourced AE support?',
      answer: 'It can cover discovery, demos, follow up, opportunity management, CRM updates, pipeline movement, and close coordination. We agree on the exact scope before the work starts.',
    },
    {
      question: 'Do we need an existing sales process?',
      answer: 'A clear offer, target market, and basic sales process help. We can help organize the workflow, but the model works best when you have a real customer problem and some evidence that the market will buy.',
    },
    {
      question: 'Can an AE work with our internal SDRs?',
      answer: 'Yes. The AE can work with your internal SDRs or ours as long as everyone agrees on what qualifies, who owns the next step, and how the handoff is recorded.',
    },
    {
      question: 'How is AE performance managed?',
      answer: 'We agree on the stages, follow up expectations, opportunity reviews, and reporting, then our manager stays close to the work.',
    },
  ];

  return {
    path: '/services/ae-teams',
    title: 'Outsourced AE Teams | Capital Generations',
    description: 'Add managed account executive capacity for discovery, demos, follow up, opportunity management, and sales process execution without another hiring cycle.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Outsourced AE teams',
      title: 'Add a seller who can keep good opportunities moving.',
      description: 'We give qualified opportunities consistent ownership through discovery, demos, follow up, and the rest of your process. We manage the person and the work around them.',
      bullets: ['Works inside your sales process', 'Owns follow up and next steps', 'Supported by a manager and client success', 'Clear pipeline review'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk through your pipeline',
      secondaryHref: '/services/full-sales-teams',
      secondaryLabel: 'Explore full sales teams',
      visual: aeVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AE teams', href: '/services/ae-teams' }],
    })}

    <section class="section">
      <div class="container split-intro">
        <div>
          ${sectionHeading({ eyebrowText: 'Where AE support fits', title: 'When good opportunities are waiting too long for attention.', description: 'An AE can step in when follow up is slow, ownership is unclear, or your current team simply has more opportunities than time.' })}
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
        ${sectionHeading({ eyebrowText: 'Clear ownership', title: 'A booked meeting needs someone to own what happens next.', description: 'We define the handoff, the follow up, and the next action so qualified interest does not disappear after the calendar invite.', align: 'center' })}
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
          ${sectionHeading({ eyebrowText: 'We stay involved', title: 'We do not place an AE and disappear.', description: 'We stay responsible for the person, the management, the communication with your team, and the visibility around the work.', tone: 'dark' })}
          ${checkList(['Clear scope and stage ownership', 'Sales manager coaching and follow through', 'Client success communication with your team', 'A clear view of pipeline and activity'], 'check-list--light')}
        </div>
      </div>
    </section>

    ${faqSection('Outsourced AE questions', 'We shape the role around your product, process, sales cycle, and team.', faqs)}

    ${ctaBand({ title: 'Have good opportunities but not enough follow through?', description: 'Tell us where deals are slowing down. We will talk through whether added AE support makes sense.', primaryHref: site.calendlyUrl, primaryLabel: 'Talk through your pipeline', secondaryLabel: 'Send us a note' })}`,
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
      answer: 'No. Your commercial leadership still owns strategy, pricing, product decisions, and major deals. We add the people and management needed to get more of the sales work done.',
    },
    {
      question: 'Can the team include both Capital Generations and internal sellers?',
      answer: 'Yes. Internal and Capital Generations sellers can work together as long as everyone knows who owns each stage, what counts as qualified, and how the handoff works.',
    },
    {
      question: 'How are SDR to AE handoffs handled?',
      answer: 'We agree on what qualifies, what context the AE needs, who owns the follow up, how quickly it happens, and how the outcome is recorded.',
    },
    {
      question: 'Is the full sales team model only for companies with no sales team?',
      answer: 'No. It can help an early sales team, support a new market, add capacity around an existing team, or run a dedicated outbound motion while your leaders focus elsewhere.',
    },
  ];

  return {
    path: '/services/full-sales-teams',
    title: 'Outsourced Sales Teams | Capital Generations',
    description: 'Connect dedicated SDR and AE capacity under one managed operating model for targeting, outreach, qualification, handoff, opportunity management, and reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Full outsourced sales teams',
      title: 'One team to create the conversation and keep it moving.',
      description: 'We connect SDR and AE work so the target, handoff, follow up, and reporting stay clear from first contact onward.',
      bullets: ['SDR and AE support in one team', 'Clear rules for qualification and handoff', 'One manager and client success rhythm', 'Visibility from first touch onward'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Map out your sales team',
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how the team works',
      visual: fullTeamVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Full sales teams', href: '/services/full-sales-teams' }],
    })}

    <section class="section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Close the gaps between roles', title: 'The handoff should not be where momentum dies.', description: 'We keep the SDR and AE working from the same definition of a good opportunity, with clear ownership and shared context.' })}
        <div class="connected-grid">
          <article class="connected-card reveal"><div class="icon-box">${icon('target')}</div><span>01</span><h3>Target market design</h3><p>Define the accounts, segments, buyer roles, territories, and contact coverage that matter.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('phone')}</div><span>02</span><h3>Outbound engagement</h3><p>Start account aware conversations through phone, email, LinkedIn, and relevant follow up.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('calendar')}</div><span>03</span><h3>Qualification and meetings</h3><p>Clarify fit and context, schedule the conversation, confirm attendance, and document the handoff.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('briefcase')}</div><span>04</span><h3>Sales execution</h3><p>Run discovery, demonstrations, follow up, opportunity movement, and next step ownership.</p></article>
          <article class="connected-card reveal"><div class="icon-box">${icon('chart')}</div><span>05</span><h3>Review and improve</h3><p>Use outcomes across the funnel to improve the ICP, messaging, qualification, and process.</p></article>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container full-team-benefits">
        <div class="full-team-benefits__copy">
          ${sectionHeading({ eyebrowText: 'Why connect the team', title: 'One team means fewer dropped balls.', description: 'Instead of juggling separate vendors, contractors, and internal processes, you get one managed workflow and one place to see what is happening.' })}
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
        ${sectionHeading({ eyebrowText: 'Best fit situations', title: 'When a full team can make sense.', description: 'This works well when you need a connected sales team but do not want to hire and manage every role yourself.', align: 'center' })}
        <div class="fit-grid">
          ${featureCard({ iconName: 'spark', title: 'New outbound motion', description: 'Launch a structured outbound program around a validated offer and target market.' })}
          ${featureCard({ iconName: 'map', title: 'New market or territory', description: 'Create a dedicated pod for a segment, geography, vertical, or product line.' })}
          ${featureCard({ iconName: 'users', title: 'Lean internal sales team', description: 'Give your Head of Sales more people doing the work without adding a full internal org chart.' })}
          ${featureCard({ iconName: 'refresh', title: 'Inconsistent handoffs', description: 'Connect meeting creation and opportunity follow up through one defined workflow.' })}
        </div>
      </div>
    </section>

    ${faqSection('Full sales team questions', 'The team works best when everyone is clear on ownership, process, and outcomes.', faqs)}

    ${ctaBand({ title: 'Need one team to own the handoffs?', description: 'Tell us how sales is set up today. We will help map the roles, ownership, and support you actually need.', primaryHref: site.calendlyUrl, primaryLabel: 'Map out the team', secondaryLabel: 'Send us a note' })}`,
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
      answer: 'It depends on the role, market, product, data, systems, and how ready the materials are. We give you a real launch plan after we understand the work instead of promising the same timeline to everyone.',
    },
    {
      question: 'What does the client need to provide?',
      answer: 'We need the product and market context, current sales materials, what you know about the customer, approved claims, access to the right systems, regular feedback, and clear ownership after a meeting is booked.',
    },
    {
      question: 'How often do we review performance?',
      answer: 'We set a regular review rhythm with you, and the live reporting gives both teams something concrete to discuss.',
    },
    {
      question: 'Can targeting and messaging change after launch?',
      answer: 'Yes. We listen to calls, look at who is answering, review meeting outcomes and conversion, and use your feedback to change the target or message when needed.',
    },
  ];

  return {
    path: '/how-it-works',
    title: 'How Our Managed Sales Teams Work | Capital Generations',
    description: 'See how Capital Generations aligns on ICP, builds the target market, deploys dedicated sales talent, runs human led outreach, and improves performance.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'How it works',
      title: 'We do not hand you a rep and disappear.',
      description: 'We learn your business, set up the target market and message, manage the people, and stay close to the work from launch onward.',
      bullets: ['A clear target and definition of a good meeting', 'A rep who is trained and managed', 'Real conversations with real buyers', 'Reporting and changes as we learn'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Walk through your sales motion',
      secondaryHref: '/services',
      secondaryLabel: 'Explore services',
      visual: processVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'How it works', href: '/how-it-works' }],
    })}

    <section class="section process-detail">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'The operating process', title: 'What working with us actually looks like.', description: 'Each step has a clear output, a person responsible, and a chance to learn and adjust.' })}
        <div class="process-detail__list">
          <article class="process-detail__item reveal"><div class="process-detail__number">01</div><div class="process-detail__icon">${icon('compass')}</div><div><span>Align</span><h3>Define the commercial target.</h3><p>We get clear on what you sell, why it matters, who should buy it, which roles to reach, what counts as qualified, and what a good result looks like.</p><ul><li>ICP and segment definition</li><li>Buyer role priorities</li><li>Quality and handoff standards</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">02</div><div class="process-detail__icon">${icon('search')}</div><div><span>Build</span><h3>Create the market, message, and workflow.</h3><p>We turn that plan into target accounts, contacts, segments, messages, channels, CRM stages, and a reporting setup.</p><ul><li>Account and contact research</li><li>Messaging frameworks</li><li>Systems and reporting setup</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">03</div><div class="process-detail__icon">${icon('users')}</div><div><span>Deploy</span><h3>Prepare the right team for the engagement.</h3><p>We assign the seller, manager, client success lead, and data support, then train the team on your offer, buyers, process, objections, and tools.</p><ul><li>Talent assignment and onboarding</li><li>Product and market preparation</li><li>Manager expectations and KPIs</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">04</div><div class="process-detail__icon">${icon('phone')}</div><div><span>Engage</span><h3>Run the work with human judgment.</h3><p>The team starts the calls, emails, follow up, qualification, meetings, discovery, or opportunity work we agreed to run.</p><ul><li>Account aware conversations</li><li>Documented outcomes and context</li><li>Defined handoffs and next actions</li></ul></div></article>
          <article class="process-detail__item reveal"><div class="process-detail__number">05</div><div class="process-detail__icon">${icon('refresh')}</div><div><span>Improve</span><h3>Use the market response to get better.</h3><p>We review the calls, responses, meetings, pipeline, and your feedback, then change the target, message, workflow, or coaching when needed.</p><ul><li>Performance and strategy reviews</li><li>Target market refinement</li><li>Coaching and performance follow up</li></ul></div></article>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container team-support">
        <div class="team-support__visual reveal">${teamPodVisual()}</div>
        <div class="team-support__copy reveal">
          ${sectionHeading({ eyebrowText: 'Who is around the work', title: 'Your seller has people behind them.', description: 'The exact roles vary, but the rep is supported by management, client success, data, and reporting.', tone: 'dark' })}
          ${checkList(['Dedicated SDR and/or AE capacity', 'Sales manager', 'Client success', 'Data and list support', 'Performance dashboard'], 'check-list--light')}
        </div>
      </div>
    </section>

    <section class="section cadence-section">
      <div class="container cadence-section__grid">
        <div>
          ${sectionHeading({ eyebrowText: 'The working cadence', title: 'The work happens every day, not just on review calls.', description: 'Calls, follow up, coaching, data work, and adjustments keep moving between meetings with your team.' })}
        </div>
        <div class="cadence-cards">
          <article class="cadence-card reveal"><span>Daily</span><h3>Calls, follow up, and management</h3><p>Outreach, follow up, CRM updates, call review, and rep coaching.</p></article>
          <article class="cadence-card reveal"><span>Weekly</span><h3>Performance and alignment</h3><p>Review market feedback, activity, outcomes, blockers, upcoming priorities, and client actions.</p></article>
          <article class="cadence-card reveal"><span>Ongoing</span><h3>Data and adjustments</h3><p>Refresh target coverage, improve segmentation, adjust messaging, and respond to performance evidence.</p></article>
        </div>
      </div>
    </section>

    ${faqSection('Process questions', 'We build the launch and working rhythm around the role, market, and what your team is ready for.', faqs)}

    ${ctaBand({ title: 'Want to talk through how this would work for your team?', description: 'We will walk through your market, roles, tools, handoffs, and goals before suggesting a setup.', primaryHref: site.calendlyUrl, primaryLabel: 'Walk through it with us', secondaryLabel: 'Send us a note' })}`,
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
      answer: 'Our strongest experience includes K through 12 districts and schools, private school groups, higher education, education technology, student services, special education, enrichment, and related solutions.',
    },
    {
      question: 'Which buyer roles can outreach target?',
      answer: 'It depends on what you sell. The list can include superintendents, provosts, academic leaders, curriculum and instruction, special education, IT, finance and grants, community engagement, student success, and other relevant roles.',
    },
    {
      question: 'Can the program target both district level and school level buyers?',
      answer: 'Yes. We can separate district, school, campus, private school group, and higher education campaigns, then adjust the roles, message, timing, and qualification for each.',
    },
    {
      question: 'How do you handle education seasonality?',
      answer: 'We plan around budget cycles, school calendars, buying windows, and seasonal priorities, then shift the target and effort as the market changes.',
    },
  ];

  return {
    path: '/industries/education',
    title: 'Education Sales Development | Capital Generations',
    description: 'Managed education sales development for companies selling into K through 12, higher education, districts, schools, academic teams, IT, special education, and student services.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Education sales development',
      title: 'Reach the right education buyers without treating every school the same.',
      description: 'We help education companies find the right accounts, understand the buying group, start professional conversations, and create meetings with real context.',
      bullets: ['District, school, and higher education targeting', 'Messages built for the role', 'Real phone conversations', 'Experience with complex buying groups'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk through your education market',
      secondaryHref: '/results',
      secondaryLabel: 'See education outcomes',
      visual: educationVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries/education' }, { label: 'Education', href: '/industries/education' }],
    })}

    <section class="section">
      <div class="container education-buyers">
        <div class="education-buyers__copy">
          ${sectionHeading({ eyebrowText: 'A multiple stakeholder market', title: 'There is rarely one person who makes the decision.', description: 'The right approach changes based on who owns the budget, the academic outcome, the technology, the operation, or the student experience.' })}
          <p>We build the list and message around how your offer is actually bought, not around a generic file of school contacts.</p>
        </div>
        <div class="buyer-cloud reveal" aria-label="Examples of education buyer roles">
          ${tag('Superintendent')}${tag('Assistant Superintendent')}${tag('Provost')}${tag('Academic Director')}${tag('Curriculum & Instruction')}${tag('Special Education')}${tag('Exceptional Learners')}${tag('IT leadership')}${tag('Finance & Grants')}${tag('Community Engagement')}${tag('Student Success')}${tag('Strategic Planning')}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Built for education complexity', title: 'Districts, schools, and colleges do not buy the same way.', description: 'We adjust the accounts, roles, timing, and message to the specific market you are trying to reach.' })}
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
        ${sectionHeading({ eyebrowText: 'Where we can help', title: 'Where we can get to work.', description: 'We build the final market and team around your offer and goals.' })}
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
        ${sectionHeading({ eyebrowText: 'Selected education outcomes', title: 'What that work has produced.', description: 'These are anonymized results from selected client work. They are real examples, not a promise of the same outcome.', tone: 'dark', align: 'center' })}
        <div class="metrics-grid metrics-grid--four metrics-grid--dark">
          ${resultMetric({ value: '600%', label: 'increase in meetings held', detail: 'By month three in one education engagement.' })}
          ${resultMetric({ value: '200+', label: 'meetings scheduled', detail: 'In the first half of 2023 for one provider.' })}
          ${resultMetric({ value: '$3.5M', label: 'pipeline generated', detail: 'Reported in 2023 in a selected engagement.' })}
          ${resultMetric({ value: '250%', label: 'private school growth', detail: 'During a seasonal school start ramp in one engagement.' })}
        </div>
      </div>
    </section>

    ${faqSection('Education sales questions', 'Straight answers about buyer roles, account structure, timing, and handoffs.', faqs)}

    ${ctaBand({ title: 'Trying to sell into schools, districts, or colleges?', description: 'Tell us what you sell and who you need to reach. We will talk through the market, timing, and team required.', primaryHref: site.calendlyUrl, primaryLabel: 'Talk through the market', secondaryLabel: 'Send us a note' })}`,
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
      answer: 'We are keeping client names and private campaign details off the public site. The results are real, but the companies remain anonymous.',
    },
    {
      question: 'Are these results guaranteed?',
      answer: 'No. Results depend on the offer, market, timing, sales cycle, target quality, internal follow up, and many other factors. These are examples from prior work, not promises.',
    },
    {
      question: 'Which metrics are tracked?',
      answer: 'We can track account coverage, outreach, conversations, qualified contacts, meetings scheduled and held, cancellations, missed meetings, conversion, market performance, and pipeline movement.',
    },
    {
      question: 'Can reporting be tailored to our sales process?',
      answer: 'Yes. We can shape the Power BI view around your market, meeting definitions, stages, and the outcomes your team actually uses.',
    },
  ];

  return {
    path: '/results',
    title: 'Outsourced Sales Results | Capital Generations',
    description: 'Review anonymized Capital Generations outcomes, including meeting growth, meeting volume, pipeline generated, market growth, and transparent dashboard reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'Results and reporting',
      title: 'You should be able to see what is working.',
      description: 'We track the work, the conversations, the meetings, and the pipeline so you know what is happening and where we need to change course.',
      bullets: ['Real results with client names kept private', 'Meetings and conversion you can follow', 'Visibility by target market', 'Power BI reporting'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk about the numbers that matter',
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how the work runs',
      visual: resultsVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Results', href: '/results' }],
    })}

    <section class="section results-overview">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'Selected outcomes', title: 'A few results from work we have done.', description: 'The companies are anonymous, but the numbers come from real engagements. They are examples, not promises.', align: 'center' })}
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
        ${sectionHeading({ eyebrowText: 'Anonymized engagement snapshots', title: 'Different businesses. The same need for people who follow through.', description: 'We are keeping client names private for now.' })}
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
          ${sectionHeading({ eyebrowText: 'The dashboard is part of the service', title: 'No mystery report. No raw activity dump.', description: 'We turn the daily work into a view you can use to manage the program and decide what to change.' })}
          ${checkList(['Account and prospect coverage', 'Call composition and contactability', 'Qualified contact and conversion trends', 'Meetings scheduled, held, canceled, and missed', 'Performance by geography, segment, or target market', 'Meeting and pipeline follow through'])}
        </div>
        ${dashboardMock()}
      </div>
    </section>

    ${faqSection('Results and reporting questions', 'Reporting should make the next decision easier, not just add more charts.', faqs)}

    ${ctaBand({ title: 'What would a good result look like for your team?', description: 'Tell us what you are trying to change in the funnel. We will talk through what the team should own and what we would measure.', primaryHref: site.calendlyUrl, primaryLabel: 'Talk through your goals', secondaryLabel: 'Send us a note' })}`,
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

function teamPhoto({ slug, name, role, bio }) {
  return `<article class="team-profile-card reveal">
    <div class="team-profile-card__media">
      <img
        src="/assets/team/${slug}-640.webp"
        srcset="/assets/team/${slug}-320.webp 320w, /assets/team/${slug}-640.webp 640w"
        sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
        width="640"
        height="800"
        loading="lazy"
        decoding="async"
        alt="${name}, ${role} at Capital Generations"
      />
    </div>
    <div class="team-profile-card__body">
      <span class="team-profile-card__role">${role}</span>
      <h3>${name}</h3>
      <p>${bio}</p>
    </div>
  </article>`;
}

function teamSection() {
  return `<section class="section people-section">
    <div class="container">
      ${sectionHeading({
        eyebrowText: 'The people behind the work',
        title: 'Meet the team behind Capital Generations.',
        description: 'Clients do not work with a faceless outsourced sales operation. These are the people who manage the reps, shape the strategy, build the reporting, and keep the day to day work moving.',
        align: 'center',
      })}

      <article class="founder-profile reveal">
        <div class="founder-profile__media">
          <img
            src="/assets/team/john-640.webp"
            srcset="/assets/team/john-320.webp 320w, /assets/team/john-640.webp 640w"
            sizes="(max-width: 800px) 100vw, 42vw"
            width="640"
            height="800"
            loading="lazy"
            decoding="async"
            alt="John Lezcano, Founder and Managing Director of Capital Generations"
          />
        </div>
        <div class="founder-profile__content">
          <span class="founder-profile__role">Founder and Managing Director</span>
          <h3>John Lezcano</h3>
          <p>John leads Capital Generations with a focus on building sales teams that work in the real world. He works closely with clients on strategy, team structure, execution, and growth while overseeing the people and processes behind each engagement. His approach comes from years of building and managing outbound sales teams and understanding firsthand how much work goes into recruiting, training, coaching, and keeping a sales organization accountable.</p>
          <p>He founded Capital Generations around a simple idea: clients should get more than a rep. They should get a team that understands their business, stays close to the work, and takes responsibility for helping create real pipeline.</p>
          <blockquote>Clients should get more than a rep. They should get a team that understands the business and takes responsibility for the work.</blockquote>
        </div>
      </article>

      <div class="team-profile-grid">
        ${teamPhoto({
          slug: 'gustavo',
          name: 'Gustavo Neves',
          role: 'SDR Manager',
          bio: 'Gustavo leads the day to day management of the SDR team, with a focus on coaching, accountability, execution, and continuous improvement. He works closely with reps to review performance, strengthen outreach, and keep campaigns aligned with client goals. His role is to make sure the team has the support, structure, and feedback needed to perform consistently.',
        })}
        ${teamPhoto({
          slug: 'gabriel',
          name: 'Gabriel Aguiar',
          role: 'Client Strategist',
          bio: 'Gabriel works closely with clients to understand what they are trying to accomplish and turn those goals into a clear outreach strategy. He helps shape campaign direction, refine messaging and targeting, and make adjustments as performance data comes in. His role is to keep client objectives connected to the day to day execution so the team stays focused on the right priorities.',
        })}
        ${teamPhoto({
          slug: 'fernanda',
          name: 'Fernanda Monello',
          role: 'Sales Operations & Data Reporting',
          bio: 'Fernanda supports the data and reporting side of Capital Generations, helping turn day to day sales activity into clear, useful information. She organizes and monitors performance data, maintains reporting systems, and helps identify the trends that matter most to each client program. Her work gives the team better visibility into what is happening and where adjustments may be needed.',
        })}
        ${teamPhoto({
          slug: 'nicole',
          name: 'Nicole Ortega',
          role: 'Administrative Support & Reporting',
          bio: 'Nicole helps keep the operational side of Capital Generations organized, accurate, and moving. She supports reporting, documentation, internal coordination, and the day to day workflows that keep client programs on track. She also helps make sure information is updated, processes are followed, and the team has what it needs to stay responsive.',
        })}
        ${teamPhoto({
          slug: 'aline',
          name: 'Aline Santos',
          role: 'Administrative Support',
          bio: 'Aline keeps the day to day administrative side of Capital Generations organized and moving. She supports documentation, coordination, invoicing, internal follow up, and the many small details that help the broader team stay focused on client work. Her role is all about keeping things running smoothly behind the scenes and stepping in wherever extra support is needed.',
        })}
      </div>
    </div>
  </section>`;
}

function aboutPage(site) {
  const faqs = [
    {
      question: 'Where is Capital Generations based?',
      answer: 'Capital Generations is based in New York and supports B2B sales programs with a strong focus on the United States.',
    },
    {
      question: 'What type of company is the best fit?',
      answer: 'The best fit is usually a growing B2B company, often under 100 employees, with a credible offer and a Head of Sales or commercial leader who needs more people doing the work.',
    },
    {
      question: 'What is Capital Generations not?',
      answer: 'We are not a low cost call center, a shared pool of generic appointment setters, a list broker, or a mass outreach tool. We provide managed sellers who are expected to represent the client professionally.',
    },
    {
      question: 'Does Capital Generations work outside education?',
      answer: 'Yes. Education is a major area of experience, but we also work with B2B companies in other markets where targeted outbound and managed sellers make sense.',
    },
  ];

  return {
    path: '/about',
    schemaType: 'AboutPage',
    title: 'About Capital Generations | Managed B2B Sales Teams',
    description: 'Meet the people behind Capital Generations, a New York based outsourced sales company providing dedicated SDR and AE capacity with recruiting, training, management, data, and reporting.',
    faqs,
    body: `${pageHero({
      eyebrowText: 'About Capital Generations',
      title: 'We built Capital Generations to take the hard parts of building a sales team off your plate.',
      description: 'We hire, train, manage, and support dedicated sellers so growing companies can get more sales work done without building every role and process themselves.',
      bullets: ['Real people having real sales conversations', 'Sellers dedicated to your program', 'Management and coaching included', 'Targeting, data, and reporting support'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Talk with our team',
      secondaryHref: '/how-it-works',
      secondaryLabel: 'See how we work',
      visual: aboutVisual(),
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }],
    })}

    <section class="section about-story">
      <div class="container about-story__grid">
        <div>
          ${sectionHeading({ eyebrowText: 'Our point of view', title: 'Hiring a rep is easy to say. Keeping them productive is the hard part.', description: 'Someone still has to find the right person, train them, coach them, keep the data clean, review the calls, track the work, and step in when something is not working.' })}
        </div>
        <div class="about-story__copy reveal">
          <p>That is the work we take on. You get a dedicated seller, and we handle the management and support required to keep the person productive and accountable.</p>
          <p>We have especially strong experience in education and complex B2B sales, where the buyer group, timing, and quality of the conversation really matter.</p>
        </div>
      </div>
    </section>

    <section class="section section--soft values-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'How we work', title: 'What it should feel like to work with us.', description: 'Clear communication, honest feedback, real accountability, and no pretending that sales is automatic.', align: 'center' })}
        <div class="feature-grid feature-grid--four">
          ${featureCard({ iconName: 'message', title: 'Human', description: 'We use technology to support the work, but people still create the conversation and handle the nuance.' })}
          ${featureCard({ iconName: 'shield', title: 'Accountable', description: 'We coach the people we provide and deal with performance issues instead of handing them back to you.' })}
          ${featureCard({ iconName: 'target', title: 'Focused', description: 'We stay focused on the accounts, roles, and business goal that matter to your company.' })}
          ${featureCard({ iconName: 'chart', title: 'Transparent', description: 'You should be able to see what the team is doing, what is happening, and what we think should change.' })}
        </div>
      </div>
    </section>

    ${teamSection()}

    <section class="section section--dark">
      <div class="container team-support">
        <div class="team-support__visual reveal">${teamPodVisual()}</div>
        <div class="team-support__copy reveal">
          ${sectionHeading({ eyebrowText: 'The Capital Generations model', title: 'The seller has people behind them.', description: 'The exact structure depends on the work, but management, client success, data, and reporting stay involved.', tone: 'dark' })}
          ${checkList(['Dedicated SDR and/or AE talent', 'Sales manager', 'Client success', 'Data and list operations', 'Dashboard visibility'], 'check-list--light')}
        </div>
      </div>
    </section>

    <section class="section positioning-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'What we are, and what we are not', title: 'We work like part of your team, not a call center.', description: 'We are built for companies that care about how their brand is represented, how the people are managed, and whether the work is moving.' })}
        <div class="positioning-grid">
          <div class="positioning-card positioning-card--yes reveal"><span>${icon('check')}Capital Generations</span><ul><li>A seller dedicated to your program</li><li>Human led, account aware outreach</li><li>Manager coaching and follow through</li><li>Data and reporting support</li><li>Built around the client’s goals</li></ul></div>
          <div class="positioning-card positioning-card--no reveal"><span>Not the model</span><ul><li>Shared appointment setter pool</li><li>Generic call center scripts</li><li>Automated volume without context</li><li>A list of leads with no ownership</li><li>Another contractor for you to manage</li></ul></div>
        </div>
      </div>
    </section>

    ${faqSection('About the company', 'A few straight answers about fit, location, and how we work.', faqs)}

    ${ctaBand({ title: 'Want to see whether we would work well together?', description: 'Tell us what your team needs. We will have a straightforward conversation about fit.', primaryHref: site.calendlyUrl, primaryLabel: 'Have a real conversation', secondaryLabel: 'Send us a note' })}`,
  };
}

function contactPage(site) {
  const formEndpoint = site.formspreeEndpoint || '';
  const faqs = [
    {
      question: 'What should I bring to the first conversation?',
      answer: 'You do not need a perfect brief. Be ready to talk about what you sell, who you need to reach, how the team works today, and where sales is getting stuck.',
    },
    {
      question: 'Is the first conversation a sales demo?',
      answer: 'No. It is a working conversation about the sales problem and whether an SDR, AE, or connected team would actually help.',
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
      title: 'Tell us what you are trying to build.',
      description: 'Give us the real version. What are you selling, who are you trying to reach, and where is the process getting stuck? We will help figure out whether we are a fit.',
      bullets: ['A practical conversation, not a canned pitch', 'Straight answers about fit and scope', 'SDR, AE, or full team options', 'A clear next step, even if it is not us'],
      primaryHref: site.calendlyUrl,
      primaryLabel: 'Pick a time to talk',
      secondaryHref: `mailto:${site.email}`,
      secondaryLabel: 'Send an email',
      visual: `<div class="contact-visual" role="img" aria-label="Calendar and conversation planning"><div class="contact-visual__calendar">${icon('calendar')}<strong>Book a conversation</strong><span>Choose a time that works</span><div><i></i><i></i><i></i><i></i><i></i></div></div><div class="contact-visual__note">${icon('message')}<span>Tell us what you sell, who you need to reach, and where sales is getting stuck.</span></div></div>`,
      breadcrumbItems: [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }],
    })}

    <section class="section contact-section">
      <div class="container contact-grid">
        <div class="contact-option contact-option--calendar reveal">
          <div class="icon-box">${icon('calendar')}</div>
          <span class="contact-option__label">Fastest option</span>
          <h2>Let’s talk about what you need.</h2>
          <p>Pick a time that works. We will talk about the people you need to reach, the sales work that is not getting done, and what a good outcome would look like.</p>
          ${primaryButton('Pick a time', site.calendlyUrl, { external: true, track: 'book_call_contact' })}
          <small>Calendly opens in a new tab.</small>
          <div class="direct-contact" aria-label="Other ways to contact Capital Generations">
            <span>Or contact us directly</span>
            <a href="${site.phoneUrl}" data-track="phone_contact">${icon('phone')}<span><strong>${site.phoneDisplay}</strong><small>Call Capital Generations</small></span></a>
            <a href="${site.whatsappUrl}" target="_blank" rel="noopener noreferrer" data-track="whatsapp_contact">${icon('whatsapp')}<span><strong>WhatsApp</strong><small>Send us a message</small></span></a>
            <a href="mailto:${site.email}" data-track="email_contact">${icon('mail')}<span><strong>${site.email}</strong><small>Send an email</small></span></a>
            ${site.social?.linkedin ? `<a href="${site.social.linkedin}" target="_blank" rel="noopener noreferrer" data-track="linkedin_contact">${icon('linkedin')}<span><strong>LinkedIn</strong><small>Follow Capital Generations</small></span></a>` : ''}
          </div>
        </div>

        <div class="contact-form-wrap reveal">
          <div class="contact-form-wrap__head">
            ${eyebrow('Send a note')}
            <h2>Prefer to write it out first?</h2>
            <p>Give us a little context and it will go straight to the Capital Generations team.</p>
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
            <label><span>What are you trying to accomplish?</span><textarea name="message" rows="6" placeholder="Tell us what you sell, who you want to reach, and where sales is getting stuck." required></textarea></label>
            <div class="contact-form__footer">
              <button class="button button--primary" type="submit"><span>Send us the details</span>${icon('arrow')}</button>
              <p>By submitting, you agree that Capital Generations may contact you about your inquiry. See our <a href="/privacy">privacy notice</a>.</p>
            </div>
            <div class="form-status" data-form-status role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>

    <section class="section section--soft expectation-section">
      <div class="container">
        ${sectionHeading({ eyebrowText: 'What happens next', title: 'What happens after you reach out.', description: 'We listen first, then decide together whether there is a practical fit.', align: 'center' })}
        <div class="process-grid process-grid--three">
          ${processStep({ number: '01', iconName: 'message', title: 'Listen', description: 'We learn what you sell, who you need to reach, how the team works today, and where sales is getting stuck.' })}
          ${processStep({ number: '02', iconName: 'compass', title: 'Think it through', description: 'We talk through whether an SDR, AE, or full team would actually help.' })}
          ${processStep({ number: '03', iconName: 'arrow', title: 'Decide together', description: 'We agree on the next step, or tell you honestly if we are not the right fit.' })}
        </div>
      </div>
    </section>

    ${faqSection('Before the first call', 'You do not need a polished brief. Just tell us what is happening.', faqs)}`,
  };
}

function privacyPage(site) {
  return {
    path: '/privacy',
    title: 'Privacy Notice | Capital Generations',
    description: 'Privacy notice for the Capital Generations website, contact form, scheduling links, analytics, and information submitted by website visitors.',
    body: `<section class="legal-hero section section--dark"><div class="container"><div class="legal-hero__content">${eyebrow('Privacy notice', 'light')}<h1>How website information is handled.</h1><p>Last updated: August 18, 2026</p></div></div></section>
    <section class="section legal-content"><div class="container legal-content__inner">
      <p class="legal-intro">This notice describes the basic information practices for the Capital Generations website. It should be reviewed by qualified counsel when analytics, form services, or data practices change.</p>
      <h2>Information you submit</h2>
      <p>When you contact Capital Generations, book a meeting, or submit a website form, you may provide information such as your name, work email, company, website, service interest, and message. Capital Generations may use that information to respond to your inquiry, evaluate fit, communicate about services, and maintain business records.</p>
      <h2>Scheduling and form providers</h2>
      <p>The website links to Calendly for scheduling, WhatsApp for messaging, and LinkedIn for company information. The contact form uses Formspree. Information submitted through or shared with those services is also subject to each provider’s privacy and security practices.</p>
      <h2>Analytics</h2>
      <p>The website uses Google Analytics 4 to understand website traffic and usage. Analytics may collect device, browser, approximate location, referral, page view, and interaction information according to Google’s configuration and policies.</p>
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
