# QA Report — Version 1.2.0

- Source configuration updated to `contact@capitalgenerations.com`
- All generated public pages checked for the new email and `mailto:` value
- All generated public pages checked for the “Established 2020” footer text
- Organization schema checked for the new contact email and 2020 founding date
- Existing Formspree, phone, WhatsApp, Calendly, and LinkedIn integrations retained
- `npm run validate` passes
- Automated failures: 0

The Formspree endpoint remains unchanged. Formspree controls the actual receiving inbox, so its dashboard recipient should also be set to `contact@capitalgenerations.com`. GA4, Search Console, final domain/DNS, and final production-device checks remain launch-stage tasks.
