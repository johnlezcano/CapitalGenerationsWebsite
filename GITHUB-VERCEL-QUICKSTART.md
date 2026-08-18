# Deploy Capital Generations version 1.6.0

The GitHub repository, Vercel project, production domain, Squarespace DNS records, HTTPS, Search Console, GA4, Formspree, and Microsoft 365 email records are already connected and working.

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
git commit -m "Humanize website copy and calls to action"
git push origin main
```

Version 1.6.0 includes:

- more direct and conversational copy across the existing website
- varied calls to action tied to pipeline, team needs, sales gaps, and goals
- no new founder, leadership, biography, photo, team, or placeholder sections
- the existing GA4, Search Console, Formspree, phone, WhatsApp, Calendly, email, LinkedIn, SEO, domain, and website configuration
- the mobile navigation overlay fix
- the rule against dash styled public copy

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
- confirm GA4 Realtime continues to receive visits

## 5. Search Console status

Search Console is already verified through DNS. The sitemap is already submitted successfully at:

```text
https://www.capitalgenerations.com/sitemap.xml
```

It reported 11 discovered pages.

Run `npm run validate` before each future push.
