# Changelog

## 1.7.0: More Than an SDR operating team section

- Added a new responsive “More Than an SDR” section to the homepage
- Replaced the earlier generic support feature grid with the four part operating team model
- Added SDR Manager, Client Success, Data, and Administrative Support as the core support functions behind the dedicated seller
- Added the key responsibilities and “What you get” benefits for each support function
- Added a People, Process, Performance, and Outcomes summary strip
- Replaced the previous SDR page support pod with a deeper version of the same operating team model
- Added the finalized presentation diagram to the website asset package without using it as a small unreadable mobile screenshot
- Preserved the existing humanized copy, conversational calls to action, mobile navigation fix, GA4, Search Console, Formspree, Calendly, WhatsApp, LinkedIn, SEO, and production domain settings
- Did not add founder, leadership, biography, photograph, or placeholder people sections

## 1.6.0: Human copy and conversational calls to action

- Rewrote the existing website copy to sound more direct, natural, and personal while preserving the service positioning and SEO structure
- Replaced corporate phrasing with plain language about hiring, training, management, outreach, follow up, and reporting
- Added varied conversational calls to action across page heroes, closing sections, navigation, footer, and contact flows
- Kept the current page structure and visual layout unchanged
- Did not add founder, leadership, team biography, photo, or placeholder sections
- Retained GA4, Search Console, Formspree, Calendly, WhatsApp, LinkedIn, mobile navigation, domain, SEO, and Microsoft 365 configuration
- Preserved the site rule against dash styled public copy

## 1.5.0: Google Analytics 4 production tracking

- Added the production Google tag with Measurement ID `G-RGYQXFRE1W` to every generated page
- Retained and activated existing event tracking for Calendly, phone, email, WhatsApp, LinkedIn, and contact form outcomes
- Added a fallback loader in the main script without duplicating the standard Google tag
- Updated the privacy notice to describe active Google Analytics 4 usage
- Aligned canonical URLs, schema, Open Graph URLs, robots output, and sitemap entries with the live primary `www` domain
- Recorded Search Console DNS verification and successful sitemap submission with 11 discovered pages
- Added validation that rejects a missing or incorrect GA4 Measurement ID or missing page tags
- Retained the mobile navigation fix, contact integrations, Formspree endpoint, domain settings, and all generated website assets

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
