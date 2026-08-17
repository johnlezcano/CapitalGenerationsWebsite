# Capital Generations Website

A production-ready, responsive marketing website for Capital Generations.

The site is built as a **zero-dependency static website** with a small Node.js build script. It does not use WordPress, a database, or a CMS. The generated `dist/` directory can be deployed directly, and `vercel.json` configures GitHub-to-Vercel deployment.

## Complete ZIP structure

The complete delivery archive contains two top-level folders:

- `capital-generations-site/` — upload this folder to GitHub and Vercel
- `private-source-assets/` — original supplied dashboards and proposal; do not deploy publicly

Custom generated SVG and PNG assets are included in `public/assets/generated/`.

## What is included

- Responsive desktop, tablet, and mobile layouts
- 11 indexable pages plus a custom 404 page
- Dedicated service pages for SDR teams, AE teams, and full sales teams
- Education-industry landing page
- Anonymized results and case-study content
- Sanitized dashboard-style reporting visuals with no private client data
- Calendly calls to action throughout the site
- Formspree-ready contact form
- GA4-ready event tracking
- Google Search Console verification placeholder
- SEO titles, descriptions, canonicals, Open Graph tags, schema, sitemap, and robots file
- Accessibility basics: semantic structure, keyboard navigation, focus states, reduced-motion support, and skip navigation
- Redirects for the main URLs on the existing website
- No published pricing, client logos, or client names

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

The local server does not rebuild automatically. Run `npm run build` after editing content or styles.

## Validation

```bash
npm run validate
```

The validation script rebuilds the site and checks:

- required files
- page titles and descriptions
- one H1 per page
- canonical tags
- broken internal links
- accidental client names
- accidental pricing publication
- prohibited nationality-based positioning language

## Project structure

```text
capital-generations-website/
├── dist/                    # Generated deployable site
├── docs/                    # Strategy, launch notes, and previews
├── public/                  # Static source assets
├── scripts/
│   ├── build.mjs            # Generates every page and SEO file
│   ├── check.mjs            # Validates generated output
│   └── serve.mjs            # Local static server
├── src/
│   ├── components.mjs       # Reusable HTML components and visuals
│   ├── content.mjs          # Website copy and page composition
│   ├── main.js              # Navigation, animation, forms, analytics
│   ├── styles.css           # Full responsive visual system
│   └── template.mjs         # Global HTML, header, footer, metadata
├── site.config.mjs          # URLs and post-launch integrations
├── vercel.json              # Vercel build, redirects, and headers
└── package.json
```

## Main configuration

Edit `site.config.mjs`:

```js
export const site = {
  url: 'https://capitalgenerations.tech',
  email: 'contact@capitalgenerations.com',
  calendlyUrl: 'https://calendly.com/capitalgenerations/conversation',
  formspreeEndpoint: '',
  gaMeasurementId: '',
  searchConsoleVerification: '',
};
```

After every configuration change:

```bash
npm run validate
```

Commit and push the regenerated `dist/` files along with the source changes.

## GitHub setup

Create a new empty GitHub repository, then run from this project folder:

```bash
git init
git add .
git commit -m "Launch Capital Generations website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel setup

1. Sign in to the new Vercel account.
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Deploy.

`vercel.json` already sets:

- build command: `npm run build`
- output directory: `dist`
- clean URLs
- legacy URL redirects
- static asset and security headers

## Formspree

1. Create a Formspree form.
2. Copy the full endpoint, such as `https://formspree.io/f/abcdwxyz`.
3. Paste it into `formspreeEndpoint` in `site.config.mjs`.
4. Run `npm run validate`.
5. Commit and push.
6. Submit a real test inquiry from the deployed site and verify delivery.

Until an endpoint is added, the form displays a clear fallback message directing visitors to email or Calendly.

## Google Analytics 4

1. Create the GA4 property and web data stream.
2. Copy the measurement ID, such as `G-XXXXXXXXXX`.
3. Add it to `gaMeasurementId` in `site.config.mjs`.
4. Rebuild and deploy.
5. Verify page views and these events in GA4 DebugView or Realtime:
   - `book_call_header`
   - `book_call_hero`
   - `book_call_cta`
   - `book_call_footer`
   - `book_call_contact`
   - `form_submit_success`
   - `form_submit_error`

## Google Search Console

For URL-prefix verification by HTML meta tag:

1. Add the property in Search Console.
2. Choose the HTML-tag verification method.
3. Copy only the `content` value.
4. Paste it into `searchConsoleVerification` in `site.config.mjs`.
5. Rebuild and deploy.
6. Complete verification.
7. Submit `https://capitalgenerations.tech/sitemap.xml`.

Domain-property verification can be completed later through DNS instead.

## Domain and DNS

Do this after the Vercel deployment is live and reviewed:

1. Add the final domain in the Vercel project.
2. Copy the DNS records Vercel provides.
3. Update DNS at the domain registrar or DNS provider.
4. Confirm the production domain redirects correctly.
5. Recheck canonicals, sitemap, forms, analytics, and Search Console.

The current canonical domain is `https://capitalgenerations.tech`. Change `site.url` before launch if the final website will use another domain.

## Content editing

- Page copy: `src/content.mjs`
- Header, footer, metadata, schema: `src/template.mjs`
- Reusable cards and visuals: `src/components.mjs`
- Styling and responsive behavior: `src/styles.css`
- Interaction and integrations: `src/main.js`

## Important launch review

Before making the website public:

- have counsel review the privacy notice
- confirm every performance claim can be used publicly
- confirm the canonical production domain
- connect and test Formspree
- connect and test GA4
- verify Search Console
- test the Calendly link
- review spelling, service scope, and contact details
- confirm that client names and logos remain excluded
