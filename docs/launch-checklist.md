# Launch Checklist

## 1. Repository and preview deployment

- [ ] Create a new GitHub repository.
- [ ] Push the complete project.
- [ ] Create the Vercel account.
- [ ] Import the GitHub repository into Vercel.
- [ ] Confirm the build command is `npm run build`.
- [ ] Confirm the output directory is `dist`.
- [ ] Review the Vercel preview URL on desktop, tablet, and mobile.

## 2. Content review

- [ ] Confirm SDR service scope.
- [ ] Confirm AE service scope.
- [ ] Confirm full-team service scope.
- [ ] Confirm education buyer-role language.
- [ ] Confirm every anonymized performance claim is approved for public use.
- [ ] Confirm no client logo or name should be added.
- [ ] Confirm `contact@capitalgenerations.com` is the preferred public inbox.
- [ ] Decide whether a public phone number should be added.
- [ ] Have counsel review the privacy notice.

## 3. Formspree

- [ ] Create the Formspree form.
- [ ] Add the endpoint to `site.config.mjs`.
- [ ] Run `npm run validate`.
- [ ] Push the update.
- [ ] Submit a real inquiry from the deployed site.
- [ ] Confirm email delivery and spam handling.
- [ ] Confirm the success message and error fallback.

## 4. Google Analytics 4

- [ ] Create the GA4 property.
- [ ] Create the web data stream.
- [ ] Add the measurement ID to `site.config.mjs`.
- [ ] Deploy the update.
- [ ] Verify Realtime page views.
- [ ] Verify Calendly click events.
- [ ] Verify form success and error events.
- [ ] Mark the most important conversion events in GA4.

## 5. Search Console

- [ ] Add the domain or URL-prefix property.
- [ ] Complete verification by HTML meta tag or DNS.
- [ ] Submit `/sitemap.xml`.
- [ ] Confirm the homepage is indexable.
- [ ] Inspect service, education, results, about, and contact URLs.
- [ ] Monitor indexing and coverage after launch.

## 6. Domain and DNS

- [ ] Add the production domain in Vercel.
- [ ] Copy the DNS records Vercel provides.
- [ ] Update DNS at the domain provider.
- [ ] Confirm HTTPS is active.
- [ ] Confirm the preferred domain redirects correctly.
- [ ] Update `site.url` if the final canonical domain changes.
- [ ] Rebuild and redeploy after changing the canonical domain.

## 7. Final quality assurance

- [ ] Run `npm run validate`.
- [ ] Test all navigation links.
- [ ] Test all Calendly buttons.
- [ ] Test the contact form.
- [ ] Test the mobile menu.
- [ ] Review desktop at 1440px and 1920px.
- [ ] Review tablet around 768–1024px.
- [ ] Review mobile around 375–430px.
- [ ] Review Chrome, Safari, Firefox, and Edge.
- [ ] Confirm the 404 page works.
- [ ] Confirm legacy redirects work.
- [ ] Confirm Open Graph sharing image.
- [ ] Confirm favicon and mobile icon.
- [ ] Confirm analytics and Search Console.
- [ ] Confirm the privacy notice reflects the services actually enabled.
