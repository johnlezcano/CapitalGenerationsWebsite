# Update the existing GitHub + Vercel deployment

The GitHub repository, Vercel account, repository connection, and first deployment already exist. This release should be pushed into that existing setup.

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
git commit -m "Update public contact email and established year"
git push origin main
```

The updated release includes:

- Formspree endpoint
- `contact@capitalgenerations.com`
- `631-877-1393`
- click-to-call links
- WhatsApp links and floating button
- LinkedIn links
- updated contact and privacy copy
- Established 2020 in the global footer and organization schema

## 3. Let Vercel deploy automatically

The existing Vercel project should detect the push and run:

```text
Build command: npm run build
Output directory: dist
```

Open the new Vercel deployment URL and confirm the build is marked **Ready**.

## 4. Test before domain work

Before changing DNS:

1. Open `/contact` on the deployed site.
2. Test Calendly, phone, WhatsApp, email, and LinkedIn links.
3. Submit one real Formspree inquiry.
4. Confirm the visible email links use `contact@capitalgenerations.com`.
5. Confirm the Formspree recipient remains `contact@capitalgenerations.com`.
6. Check desktop and mobile layouts.

## 5. Remaining integrations

After this release is deployed and tested:

- add the GA4 Measurement ID
- add Search Console verification
- complete final QA
- connect the domain and DNS last

Run `npm run validate` before each push.
