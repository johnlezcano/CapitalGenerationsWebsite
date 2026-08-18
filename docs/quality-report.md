# QA Report: Version 1.5.0

## Build result

- Build command completed successfully
- Validation command completed successfully
- 11 indexable pages generated
- Custom 404 page generated
- 12 HTML files checked
- 38 total generated files checked
- 11 page routes plus sitemap and robots returned HTTP 200 through the local production server

## Google Analytics 4

- Measurement ID is `G-RGYQXFRE1W`
- Standard Google tag loader is present on all 12 HTML files
- Google tag configuration is present on all 12 HTML files
- Existing event hooks remain active for Calendly, phone, email, WhatsApp, LinkedIn, form success, and form error interactions
- The main JavaScript fallback avoids loading the Google tag twice
- Realtime reporting cannot be confirmed until version 1.5.0 is deployed to Vercel

## Search and canonical configuration

- Canonical URLs use `https://www.capitalgenerations.com`
- Structured data URLs use the live primary `www` domain
- Homepage WebPage schema uses a valid single slash identifier
- Sitemap contains 11 URLs on the live primary `www` domain
- robots.txt references `https://www.capitalgenerations.com/sitemap.xml`
- Search Console ownership is already verified through DNS
- Search Console sitemap submission previously returned Success with 11 discovered pages

## Content and privacy

- Privacy notice now states that Google Analytics 4 is active
- Public email remains `contact@capitalgenerations.com`
- Formspree endpoint remains `https://formspree.io/f/xjybazzn`
- Phone and WhatsApp remain connected to `+16318771393`
- Calendly and LinkedIn links remain unchanged
- No client names, raw dashboard files, proposal pricing, or retired private email are present in the public website package
- Public website copy remains free of dash styled prose

## Regression coverage

- Mobile navigation source and styles are retained from version 1.4.0
- Form submission logic is unchanged apart from active analytics event reporting
- Internal link validation passed
- Required generated file validation passed
- Contact integration validation passed
- GA4 tag validation passed

## Remaining live check

After the GitHub push and automatic Vercel deployment, open GA4 Realtime and confirm one active user plus at least one page view or tracked link event. This live check cannot be completed from the local build alone.
