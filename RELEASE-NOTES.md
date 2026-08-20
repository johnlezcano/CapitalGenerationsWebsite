# Capital Generations Website 1.8.0

## Purpose

This release adds the approved real team profiles to the About page. The goal is to make Capital Generations feel more personal and show the people behind the managed sales model without adding more content to the homepage.

## About page changes

- Added a new section titled “Meet the team behind Capital Generations”
- Added a featured founder profile for John Lezcano, Founder and Managing Director
- Added team profiles in the approved order: Gustavo, Gabriel, Fernanda, Nicole, and Aline
- Used first names only for everyone except John Lezcano
- Added cleaned, conversational biographies based on the supplied role descriptions
- Retained the existing About page operating model section beneath the new real team profiles
- Kept the existing About page story, operating values, positioning section, FAQs, and calls to action

## Team image treatment

All six approved photographs were prepared specifically for the website.

- Consistent four by five portrait crops
- 320 pixel and 640 pixel WebP versions for responsive delivery
- Lazy loading and responsive image source sets
- Original photographs are not placed in the public deployable folder
- A team crop review sheet is stored at `docs/previews/team-photo-crops-v1.8.jpg`

## Structured data

- The About page now uses the `AboutPage` schema type
- Organization schema now identifies John Lezcano as Founder and Managing Director

## Production settings retained

- Primary domain: `https://www.capitalgenerations.com`
- GA4 Measurement ID: `G-RGYQXFRE1W`
- Formspree endpoint: `https://formspree.io/f/xjybazzn`
- Contact email: `contact@capitalgenerations.com`
- Phone and WhatsApp: `+1 631 877 1393`
- Calendly, LinkedIn, Search Console, sitemap, canonical URLs, and Microsoft 365 email configuration remain unchanged

## Deployment

Replace the existing GitHub repository files with the contents of the GitHub ready package, commit, and push. Vercel should rebuild automatically.
