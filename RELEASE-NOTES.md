# Capital Generations Website 1.5.0

## Purpose

This release activates Google Analytics 4 and prepares the current website as the final working version for now.

## Production analytics

- Measurement ID: `G-RGYQXFRE1W`
- Standard Google tag included in every page head
- Page views enabled through the Google tag
- Existing event tracking retained for Calendly, phone, email, WhatsApp, LinkedIn, and contact form outcomes
- Privacy notice updated to reflect active analytics

## Search and domain alignment

- Canonicals use `https://www.capitalgenerations.com`
- Sitemap URLs use the primary `www` domain
- robots.txt references the primary sitemap URL
- Structured data and social metadata use the primary `www` domain
- Search Console remains verified through DNS
- Search Console sitemap status remains recorded as Success with 11 discovered pages

## Retained functionality

- Version 1.4.0 mobile navigation fix
- Formspree contact form
- `contact@capitalgenerations.com`
- Phone and WhatsApp number
- Calendly scheduling
- LinkedIn links
- Responsive layouts and generated website assets
- Privacy separation between public website files and private source assets

## Deployment

Upload the contents of `capital-generations-site/` to the existing GitHub repository. Commit and push. Vercel should deploy automatically.

After deployment, confirm GA4 Realtime activity. That is the only remaining live verification for this release.
