# Update the existing GitHub and Vercel deployment

The GitHub repository, Vercel account, repository connection, and first deployment already exist. Push this release into that existing setup.

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
git commit -m "Refine website copy and typography"
git push origin main
```

Version 1.3.0 includes:

- public copy without dash punctuation or hyphenated style phrases
- smaller desktop hero and section heading type
- a light supporting type adjustment on tablet and mobile
- canonical URLs prepared for `https://capitalgenerations.com`
- `contact@capitalgenerations.com`
- displayed phone number `(631) 877 1393`
- Formspree, WhatsApp, Calendly, and LinkedIn integrations
- Established 2020 in the footer and organization schema

## 3. Let Vercel deploy automatically

The existing Vercel project should detect the push and run:

```text
Build command: npm run build
Output directory: dist
```

Open the new Vercel deployment URL and confirm the build is marked **Ready**.

## 4. Test before domain work

Before changing DNS:

1. Open the homepage and compare desktop and mobile typography.
2. Open `/contact` on the deployed site.
3. Test Calendly, phone, WhatsApp, email, and LinkedIn links.
4. Submit one real Formspree inquiry.
5. Confirm delivery to `contact@capitalgenerations.com`.
6. Check navigation and calls to action on desktop and mobile.

## 5. Domain preparation

The build now uses `https://capitalgenerations.com` for canonical tags, structured data, Open Graph URLs, robots output, and sitemap entries. This is intentional even while the Vercel preview URL is used.

When ready:

1. Confirm Squarespace DNS access.
2. Add the `.com` and `www` domains in Vercel.
3. Use the exact DNS records Vercel provides.
4. Preserve business email MX and TXT records.
5. Confirm HTTPS and the preferred domain version.

## 6. Remaining integrations

After this release is deployed and tested:

- add the GA4 Measurement ID
- verify Google Search Console
- submit `https://capitalgenerations.com/sitemap.xml`
- complete final real device QA
- connect the domain and DNS

Run `npm run validate` before each push.
