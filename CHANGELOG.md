# Changelog

## 1.4.0: Mobile navigation overlay fix

- Reworked the mobile navigation as a full viewport overlay anchored below the sticky header
- Removed the clipped fixed positioning behavior that allowed page content to cover or hide menu items
- Added reliable vertical scrolling for shorter phone screens, dynamic viewport height support, safe area padding, and overscroll containment
- Ensured all four service links plus How it works, Results, Education, About, Contact, and Book a call remain reachable
- Reset the mobile menu scroll position whenever it opens or closes
- Close the Services submenu when the main menu closes and update the accessible menu button label
- Verified the open Services menu at 360 by 640, 375 by 667, 390 by 844, and 768 by 1024 viewport sizes

## 1.3.0: Copy and typography refinement

- Rewrote public page copy, metadata, accessibility copy, interface messages, and generated SVG text to remove dash punctuation and hyphenated style phrases
- Added validation that rejects dash styled public copy while allowing technical URLs and machine values
- Reduced desktop homepage hero type and page hero type for a more refined visual scale
- Reduced desktop section heading type and made a smaller supporting adjustment on tablet and mobile
- Changed the canonical site URL from `capitalgenerations.tech` to `capitalgenerations.com`
- Updated canonical tags, structured data, sitemap entries, robots output, and Open Graph URLs for the final `.com` domain
- Changed the displayed phone format to `(631) 877 1393` while retaining the same telephone and WhatsApp destinations
- Regenerated public PNG previews for the edited SVG assets
- Added version 1.3 desktop and mobile preview images

## 1.2.0: Contact email and established year

- Replaced every public and source level reference to the retired personal mailbox with `contact@capitalgenerations.com`
- Updated contact page, footer, privacy, form fallback, `humans.txt`, and structured data email values
- Added “Established 2020” to the global footer
- Added `foundingDate: 2020` to organization schema
- Updated validation to reject the retired personal email and require the established year footer
- Recorded the user confirmed Formspree delivery test as complete
- Kept GA4, Search Console, final real device QA, and domain or DNS as later tasks

## 1.1.0: Production contact integrations

- Connected Formspree endpoint `https://formspree.io/f/xjybazzn`
- Added the original public contact email, phone, WhatsApp, LinkedIn, and Calendly integrations
- Added analytics event hooks for phone, email, WhatsApp, LinkedIn, Calendly, and forms
- Added version 1.1 automated QA and responsive screenshots

## 1.0.0: Initial website build

- Complete responsive static website
- Service, industry, results, about, contact, privacy, and 404 pages
- SEO metadata, sitemap, robots file, schema, Open Graph assets, and redirects
- Sanitized generated reporting visuals
- Original private discovery assets separated from the deployable website
