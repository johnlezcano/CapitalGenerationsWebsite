# Deploy Capital Generations version 1.5.0

The GitHub repository, Vercel project, production domain, Squarespace DNS records, HTTPS, Search Console, Formspree, and Microsoft 365 email records are already connected and working.

## 1. Use only the deployable website folder

Upload or copy the contents of:

```text
capital-generations-site/
```

Do not upload the sibling `private-source-assets/` folder to a public repository. It contains the original proposal and dashboard screenshots.

## 2. Replace the repository files

From the local Git repository, copy in the updated files and run:

```bash
git add -A
git commit -m "Add GA4 tracking"
git push origin main
```

Version 1.5.0 includes:

- Google Analytics 4 Measurement ID `G-RGYQXFRE1W`
- the standard Google tag on every page
- event tracking for Calendly, phone, email, WhatsApp, LinkedIn, and form outcomes
- an updated privacy notice for active analytics
- canonical and sitemap output aligned to `https://www.capitalgenerations.com`
- the version 1.4.0 mobile navigation overlay fix
- all existing Formspree, phone, WhatsApp, Calendly, email, LinkedIn, SEO, domain, and website assets retained

## 3. Let Vercel deploy automatically

The existing Vercel project should detect the push and run:

```text
Build command: npm run build
Output directory: dist
```

Open the new deployment and confirm it is marked **Ready**.

## 4. Confirm production health

- open `https://www.capitalgenerations.com`
- open `https://capitalgenerations.com` and confirm it redirects correctly
- confirm HTTPS has no certificate warning
- confirm the mobile navigation opens above the page and every link remains reachable
- confirm Microsoft 365 email continues to send and receive
- confirm the contact form still reaches `contact@capitalgenerations.com`

## 5. Confirm Google Analytics Realtime

1. Open Google Analytics.
2. Open Reports, then Realtime.
3. Visit the production website in another browser tab.
4. Navigate between several pages.
5. Click LinkedIn, Calendly, phone, email, or WhatsApp once.
6. Confirm the active user and event appear in Realtime.

Analytics can take a short period to appear. Disable browser tracking protection or test in another browser if the first visit is blocked.

## 6. Search Console status

Search Console is already verified through DNS. The sitemap is already submitted successfully at:

```text
https://www.capitalgenerations.com/sitemap.xml
```

It reported 11 discovered pages.

Run `npm run validate` before each future push.
