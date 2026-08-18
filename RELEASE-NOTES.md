# Capital Generations Website 1.7.0

## Purpose

This release adds the approved “More Than an SDR” value story to the website. The section shows that a client is not simply paying for one SDR. The dedicated seller is backed by management, client success, data, reporting, technical integrations, and administrative support.

## Homepage changes

- Added a responsive “More Than an SDR” section after the services section and before the operating process
- Replaced the previous generic five card support section to avoid repeating the same idea twice
- Added four operating team cards: SDR Manager, Client Success, Data, and Administrative Support
- Added responsibilities beneath each support function
- Added a concise “What you get” summary for each function
- Added a bottom summary around People, Process, Performance, and Outcomes
- Added a link from the homepage section to the SDR services page for the deeper explanation

## SDR services page changes

- Replaced the previous small team pod section with a deeper responsive version of the “More Than an SDR” model
- Expanded management benefits to cover accountability, training, coaching, call reviews, performance management, and active manager support
- Expanded client success around strategy, copy and templates, campaign management, reporting, and ongoing improvement
- Expanded data around custom Power BI dashboards, CRM and API integrations, and custom workflow support
- Added administrative support around invoicing and ad hoc operational help

## Presentation asset

The finalized “More Than an SDR” graphic supplied by the user is included unchanged at:

`public/assets/images/more-than-an-sdr.png`

A review copy is also stored at:

`docs/reference-assets/more-than-an-sdr.png`

The live website uses native HTML and CSS instead of relying on the full graphic, so the content remains readable, searchable, accessible, and responsive on phones.

## Production settings retained

- Primary domain: `https://www.capitalgenerations.com`
- GA4 Measurement ID: `G-RGYQXFRE1W`
- Formspree endpoint: `https://formspree.io/f/xjybazzn`
- Contact email: `contact@capitalgenerations.com`
- Phone and WhatsApp: `+1 631 877 1393`
- Calendly, LinkedIn, Search Console, sitemap, canonical URLs, and Microsoft 365 email configuration remain unchanged

## Intentionally not added

The founder and leadership section remains deferred until the approved photograph and biography are supplied. No placeholder founder content was added.

## Deployment

Replace the existing GitHub repository files with the contents of this package, commit, and push. Vercel should rebuild automatically.
