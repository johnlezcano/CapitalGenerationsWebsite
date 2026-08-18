# QA Report: Version 1.4.0

## Automated validation

- `npm run validate`: passed
- Generated pages: 11 indexable pages plus custom 404
- HTML files checked: 12
- Required generated files: present
- Broken internal references: 0
- Private client names in public output: 0
- Published proposal pricing in public output: 0
- Retired personal email references in the deployable project: 0
- Dash styled public copy findings: 0
- Canonical domain: `https://capitalgenerations.com`
- Contact email: `contact@capitalgenerations.com`
- Displayed phone: `(631) 877 1393`
- Formspree, telephone, WhatsApp, Calendly, and LinkedIn integrations: retained

## Mobile navigation regression test

The open Services menu was tested through Chromium mobile emulation at:

- 360 by 640
- 375 by 667
- 390 by 844
- 768 by 1024

All four Services links were present. How it works, Results, Education, About, Contact, and Book a call were reachable. The navigation filled the viewport below the sticky header, overlaid page content, and scrolled on shorter screens.

## Fix implemented

- Replaced the clipped fixed mobile navigation with a header anchored full viewport overlay
- Added dynamic viewport height, vertical scrolling, mobile safe area padding, and overscroll containment
- Added a menu scroll reset on open and close
- Close the Services submenu when the mobile menu closes
- Update the accessible menu button label between Open navigation and Close navigation

## Still pending after deployment

- Push version 1.4.0 to GitHub and confirm the Vercel deployment
- Repeat the mobile navigation test on the production domain
- Complete final real device testing on Safari, iPhone, Android, and tablet
- Configure GA4 and confirm Realtime tracking
- Verify Google Search Console and submit the sitemap

Automated validation and browser emulation do not replace final production testing on real devices.
