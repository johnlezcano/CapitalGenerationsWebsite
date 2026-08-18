# Capital Generations Website

Version **1.7.0** of the production Capital Generations marketing website.

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
- Google Analytics 4 with Measurement ID `G-RGYQXFRE1W`
- Analytics events for Calendly, phone, email, WhatsApp, LinkedIn, and contact form outcomes
- Google Search Console domain verification completed through Squarespace DNS
- Search Console sitemap submitted successfully with 11 discovered pages
- SEO titles, descriptions, canonicals, Open Graph tags, schema, sitemap, and robots file
- Canonical and sitemap output aligned to the live primary URL at `https://www.capitalgenerations.com`
- Accessibility basics, responsive navigation, reduced motion support, and keyboard focus states
- Mobile navigation overlay with scrollable access to every menu item
- Legacy redirects from the old website structure
- No published pricing, client logos, client names, or raw dashboards
- Public copy rewritten without dash punctuation or hyphenated style phrases
- Existing copy humanized with direct language and conversational calls to action
- New responsive “More Than an SDR” operating team section on the homepage
- Expanded “More Than an SDR” section on the SDR services page
- Final presentation diagram included as a deployable brand asset and review reference
- No founder, leadership, biography, photo, or placeholder people sections added in this release

## Current production configuration

The main settings are in `site.config.mjs`:

```js
export const site = {
  url: 'https://www.capitalgenerations.com',
  email: 'contact@capitalgenerations.com',
  phoneDisplay: '(631) 877 1393',
  phoneE164: '+16318771393',
  phoneUrl: 'tel:+16318771393',
  whatsappUrl: 'https://wa.me/16318771393',
  location: 'New York, NY',
  foundedYear: 2020,
  calendlyUrl: 'https://calendly.com/capitalgenerations/conversation',
  formspreeEndpoint: 'https://formspree.io/f/xjybazzn',
  gaMeasurementId: 'G-RGYQXFRE1W',
  searchConsoleVerification: '',
  social: {
    linkedin: 'https://www.linkedin.com/company/capital-generations',
  },
};
```

The Search Console verification field stays blank because ownership was verified through DNS. The Formspree endpoint is connected in code, and live delivery has been confirmed. Keep the Formspree notification recipient set to `contact@capitalgenerations.com`.

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
- canonical tags using `https://www.capitalgenerations.com`
- Google Analytics tag loader and configuration on every page
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
|-- dist/                    # Generated deployable website
|-- docs/                    # Strategy, checklist, previews, launch notes, and QA documentation
|-- public/                  # Static source assets
|-- scripts/
|   |-- build.mjs            # Generates pages and SEO files
|   |-- check.mjs            # Validates generated output
|   `-- serve.mjs            # Local static server
|-- src/
|   |-- components.mjs       # Reusable HTML components and visuals
|   |-- content.mjs          # Website copy and page composition
|   |-- main.js              # Navigation, form submission, analytics events
|   |-- styles.css           # Responsive visual system
|   `-- template.mjs         # Header, footer, metadata, schema, and Google tag
|-- site.config.mjs          # Contact details and integrations
|-- vercel.json              # Vercel build, redirects, and headers
`-- package.json
```

## Update the existing GitHub and Vercel deployment

Use the existing connected repository and Vercel project:

```bash
git add -A
git commit -m "Humanize website copy and calls to action"
git push origin main
```

Vercel should automatically build and deploy the pushed commit using:

- build command: `npm run build`
- output directory: `dist`

Review the new Vercel deployment on the connected production domain.

## Google Analytics 4

Version 1.6.0 retains the production Google tag for Measurement ID:

```text
G-RGYQXFRE1W
```

The standard Google tag is generated in the document head on every page. The existing event hooks report these interactions when GA4 is active:

- header and footer Calendly links
- phone links
- email links
- WhatsApp links
- LinkedIn links
- successful contact form submissions
- contact form submission errors

After deployment:

1. Open Google Analytics.
2. Open Reports, then Realtime.
3. Visit the production website in a separate browser tab.
4. Navigate between several pages.
5. Click one non destructive tracked link, such as LinkedIn or Calendly.
6. Confirm the active user and event appear in Realtime.

Do not submit repeated production form tests solely to generate analytics events.

## Google Search Console

Search Console is configured as a Domain property for `capitalgenerations.com` and verified through a Squarespace DNS TXT record.

The sitemap was submitted successfully at:

```text
https://www.capitalgenerations.com/sitemap.xml
```

Search Console reported 11 discovered pages. Indexing can continue over time after discovery.

## Domain and DNS

The production domain is registered at Squarespace and connected to Vercel. The live primary URL is:

```text
https://www.capitalgenerations.com
```

The apex domain redirects to the primary `www` domain. HTTPS is active. The Microsoft 365 MX, SPF, DKIM, DMARC, and Autodiscover records were preserved during the website DNS update.

The old `.tech` domain can later redirect to `.com` or be retired after important old links have been considered.

## Formspree verification

The lead flow has already been confirmed. After any future website update, perform one quick regression check:

1. Open the deployed `/contact` page.
2. Submit one real test inquiry only when needed.
3. Confirm the success message appears.
4. Confirm delivery to `contact@capitalgenerations.com`.
5. Review Formspree spam filtering and notification settings periodically.

## Content editing locations

- Page copy: `src/content.mjs`
- Header, footer, metadata, schema, and Google tag: `src/template.mjs`
- Reusable visuals and icons: `src/components.mjs`
- Styling and responsive behavior: `src/styles.css`
- Interaction and analytics events: `src/main.js`
- Production values: `site.config.mjs`

## Final review after this deployment

- confirm the Vercel deployment is Ready
- confirm both domain variants resolve correctly
- confirm the mobile navigation remains fixed
- confirm the contact form still reaches `contact@capitalgenerations.com`
- confirm GA4 Realtime receives page views and events
- confirm the Search Console sitemap remains successful
- confirm Microsoft 365 email continues to send and receive
