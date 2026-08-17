# GitHub + Vercel quick start

## 1. Create the GitHub repository

1. In GitHub, select **New repository**.
2. Name it `capital-generations-site`.
3. Choose private or public. Private is recommended while reviewing.
4. Do not initialize it with another framework or template.

## 2. Upload the website

Upload the contents of this `capital-generations-site` folder—not the sibling `private-source-assets` folder from the complete archive.

Using Git on your computer:

```bash
git init
git add .
git commit -m "Initial Capital Generations website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 3. Import into Vercel

1. In Vercel, select **Add New → Project**.
2. Import `capital-generations-site` from GitHub.
3. Vercel will use the settings in `vercel.json`:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Select **Deploy**.

## 4. Review the preview URL

Vercel will give you a temporary URL. Review every page on desktop and mobile before connecting the domain.

## 5. Later integrations

After the preview is approved:

- add the Formspree endpoint in `site.config.mjs`
- add the GA4 measurement ID in `site.config.mjs`
- add the Search Console verification value in `site.config.mjs`
- add the domain in Vercel and follow its DNS instructions

Run `npm run validate` and push after every configuration change.
