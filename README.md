# Capital Generations Website

Version **1.4.0** of the production ready Capital Generations marketing website.

The site is a zero dependency static Node.js build. It does not use WordPress, a database, or a CMS. The source generates a deployable `dist/` directory, and `vercel.json` is configured for the existing GitHub to Vercel deployment.

## Complete package structure

The complete delivery archive contains two main folders:

- `capital-generations-site/`: website repository content to upload to GitHub and deploy with Vercel
- `private-source-assets/`: original dashboard screenshots and proposal supplied for the project; do not publish this folder or place it in a public repository

Custom generated website assets are included in `public/assets/generated/` and are safe to deploy.

## Included in this release

- Responsive desktop, tablet, and mobile layouts
- 11 indexable pages plus a custom 404 page
- SDR, AE, and full sales team service pages
- Education industry landing page
- Anonymized results and sanitized reporting visuals
- Calendly calls to action
- Formspree contact form integration
- Public phone and click to call links
- WhatsApp links plus a global floating WhatsApp button
- LinkedIn links on the contact page and in the footer
- GA4 ready event tracking
- Google Search Console verification placeholder
- SEO titles, descriptions, canonicals, Open Graph tags, schema, sitemap, and robots file
- Accessibility basics, responsive navigation, reduced motion support, and keyboard focus states
- Legacy redirects from the old website structure
- No published pricing, client logos, client names, or raw dashboards
- Public copy rewritten without dash punctuation or hyphenated style phrases
- Refined desktop hero and section heading scale
- Final canonical URL prepared for `capitalgenerations.com`
- Mobile navigation overlay fix with scrollable access to every menu item

## Current production configuration

The main settings are in `site.config.mjs`:

```js
export const site = {
  url: 'https://capitalgenerations.com',
  email: 'contact@capitalgenerations.com',
  phoneDisplay: '(631) 877 1393',
  phoneE164: '+16318771393',
  phoneUrl: 'tel:+16318771393',
  whatsappUrl: 'https://wa.me/16318771393',
  location: 'New York, NY',
  foundedYear: 2020,
  calendlyUrl: 'https://calendly.com/capitalgenerations/conversation',
  formspreeEndpoint: 'https://formspree.io/f/xjybazzn',
  gaMeasurementId: '',
  searchConsoleVerification: '',
  social: {
    linkedin: 'https://www.linkedin.com/company/capital-generations',
  },
};
```

The Formspree endpoint is connected in code. Formspree controls the receiving inbox, and live delivery has been confirmed. Keep the Formspree recipient set to `contact@capitalgenerations.com`.

## Local use

Requirements: Node.js 20.9 or newer. Node 22 is recommended.

```bash
npm run build
npm run start
```

Then open:

```text
http://127.0.0.1:4173
```

The local server does not rebuild automatically. Run `npm run build` after editing source content or styles.

## Validation

```bash
npm run validate
```

The validation script rebuilds the site and checks:

- required generated files
- page titles and descriptions
- one H1 per page
- canonical tags using `https://capitalgenerations.com`
- broken internal links
- required Formspree, phone, WhatsApp, email, and LinkedIn values
- global WhatsApp button output
- public copy and metadata for dash styled writing
- accidental client names
- accidental pricing publication
- prohibited nationality based positioning language

## Project structure

```text
capital-generations-site/
├── dist/                    # Generated deployable website
├── docs/                    # Strategy, checklist, previews, launch notes, and QA documentation
├── public/                  # Static source assets
├── scripts/
│   ├── build.mjs            # Generates pages and SEO files
│   ├── check.mjs            # Validates generated output
│   └── serve.mjs            # Local static server
├── src/
│   ├── components.mjs       # Reusable HTML components and visuals
│   ├── content.mjs          # Website copy and page composition
│   ├── main.js              # Navigation, form submission, analytics
│   ├── styles.css           # Responsive visual system
│   └── template.mjs         # Header, footer, metadata, schema
├── site.config.mjs          # Contact details and integrations
├── vercel.json              # Vercel build, redirects, and headers
└── package.json
```

## Update the existing GitHub and Vercel deployment

Use the existing connected repository and Vercel project:

```bash
git add -A
git commit -m "Fix mobile navigation overlay"
git push origin main
```

Vercel should automatically build and deploy the pushed commit using:

- build command: `npm run build`
- output directory: `dist`

Review the new Vercel deployment on the connected production domain.

## Formspree verification

The lead flow has already been confirmed. After this update is deployed, perform one quick regression check:

1. Open the deployed `/contact` page.
2. Submit one real test inquiry.
3. Confirm the success message appears.
4. Confirm delivery to `contact@capitalgenerations.com`.
5. Reply to the test inquiry to confirm the sender address is available.
6. Review Formspree spam filtering and notification settings.

Do not submit automated test messages repeatedly to the production endpoint.

## Google Analytics 4

GA4 is not connected yet. After the GA4 property and web data stream exist:

1. Copy the Measurement ID, such as `G-XXXXXXXXXX`.
2. Add it to `gaMeasurementId` in `site.config.mjs`.
3. Run `npm run validate`.
4. Commit and push.
5. Confirm Realtime traffic and conversion events.

Tracked events include Calendly, phone, email, WhatsApp, LinkedIn, and form success or error interactions.

## Google Search Console

Search Console is not connected yet. The site supports HTML meta tag verification through `searchConsoleVerification` in `site.config.mjs`. DNS verification can also be completed after Squarespace DNS access is confirmed.

After the final domain is connected and verified, submit:

```text
https://capitalgenerations.com/sitemap.xml
```

## Domain and DNS

The intended final domain is `capitalgenerations.com`, registered at Squarespace. The site already generates canonical URLs, structured data, Open Graph URLs, robots instructions, and the sitemap for that domain.

The production domain is already connected through Squarespace DNS and Vercel. After the version 1.4.0 deployment is ready:

1. Confirm `capitalgenerations.com` and `www.capitalgenerations.com` still show valid configuration in Vercel.
2. Confirm HTTPS and the preferred redirect behavior remain healthy.
3. Recheck the mobile navigation on the production domain.
4. Recheck canonicals, sitemap, forms, analytics, and Search Console.

The old `.tech` domain can later redirect to `.com` or be retired after important old links have been considered.

## Content editing locations

- Page copy: `src/content.mjs`
- Header, footer, metadata, schema: `src/template.mjs`
- Reusable visuals and icons: `src/components.mjs`
- Styling and responsive behavior: `src/styles.css`
- Interaction and integrations: `src/main.js`

## Important launch review

Before final project signoff:

- verify the new Vercel deployment
- verify the Formspree delivery inbox
- connect and test GA4 when ready
- verify Search Console when ready
- test phone, WhatsApp, LinkedIn, Calendly, and all forms
- confirm the public email, established year, and phone number
- confirm client names, dashboards, proposal pricing, and original source assets remain private
- complete final testing on real desktop, phone, and tablet devices
- have qualified counsel review the privacy notice
