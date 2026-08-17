# Content and Privacy Decisions

## Intentionally excluded

- Client logos
- Client names
- Raw Power BI screenshots
- School, district, contact, and campaign details visible in the supplied dashboards
- Published service pricing
- Proposal-specific pricing
- Nationality- or ethnicity-based competitor language
- The 35-million-account database claim, pending confirmation that it remains current and supportable
- Month-to-month contract language, pending confirmation that it applies to every current engagement

## Anonymized proof used

The site uses selected outcome claims from the supplied proposal without naming the client:

- 600% increase in meetings held by month three
- 3× as many meetings as internal staff
- 200+ meetings scheduled in H1 2023
- $3.5M pipeline generated in 2023
- 250% private-school growth during a seasonal ramp
- 3:1 meeting advantage over an internal team in a selected engagement

These claims should receive one final internal review before the production domain is connected.

## Dashboard treatment

The site does not publish the supplied screenshots. Instead, it contains an illustrative dashboard component that communicates the categories of reporting available:

- activity
- contactability
- qualification
- meeting status
- conversion trends
- target-market performance

The component is labeled illustrative and contains no client-specific values.

## Confirmed public contact details

- Email: `jlezcano@capitalgenerations.com`
- Phone: `631-877-1393`
- Telephone link: `tel:+16318771393`
- WhatsApp: `https://wa.me/16318771393`
- Calendly: `https://calendly.com/capitalgenerations/conversation`
- LinkedIn: `https://www.linkedin.com/company/capital-generations`
- Location: New York, NY

## Lead form

The site uses the confirmed Formspree endpoint:

- `https://formspree.io/f/xjybazzn`

The endpoint is wired into the source and generated contact page. Formspree account settings still need to be tested to confirm notifications arrive at `jlezcano@capitalgenerations.com` and that spam handling is acceptable.

## Domain

The canonical domain is currently configured as:

- `https://capitalgenerations.tech`

Domain and DNS work remains last. Change `site.url` only if the final production domain differs.

## Remaining integrations

Still intentionally blank until the relevant Google properties are created:

- GA4 Measurement ID
- Search Console HTML verification value
