# Update the existing GitHub and Vercel deployment

The GitHub repository, Vercel project, production domain, Squarespace DNS records, HTTPS, and Microsoft 365 email records are already connected and working.

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
git commit -m "Fix mobile navigation overlay"
git push origin main
```

Version 1.4.0 includes:

- a full viewport mobile navigation overlay
- all four Services links visible and reachable
- How it works, Results, Education, About, Contact, and Book a call reachable on short phone screens
- vertical menu scrolling with mobile safe area padding
- menu scroll reset and improved accessible toggle labeling
- all existing Formspree, phone, WhatsApp, Calendly, email, LinkedIn, SEO, and domain settings retained

## 3. Let Vercel deploy automatically

The existing Vercel project should detect the push and run:

```text
Build command: npm run build
Output directory: dist
```

Open the new deployment and confirm it is marked **Ready**.

## 4. Test the mobile navigation on production

1. Open the homepage on a phone.
2. Open the main menu.
3. Open Services.
4. Confirm all four Services options appear.
5. Confirm the menu can scroll on shorter screens.
6. Confirm How it works, Results, Education, About, Contact, and Book a call are clickable.
7. Close and reopen the menu and confirm it starts at the top.

## 5. Confirm production health

- open `https://capitalgenerations.com`
- open `https://www.capitalgenerations.com`
- confirm HTTPS has no certificate warning
- confirm Microsoft 365 email continues to send and receive
- confirm the contact form still reaches `contact@capitalgenerations.com`

## 6. Remaining integrations

- configure GA4
- verify Google Search Console
- submit `https://capitalgenerations.com/sitemap.xml`
- complete final real device QA

Run `npm run validate` before each push.
