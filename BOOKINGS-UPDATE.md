# Capital Generations 1.11.0

Complete replacement repository, including source, public assets, generated dist pages, existing team, and the original brand video.

## Changes
- New /book page with the approved banner composition: approved abstract blue banner with no people or personal caption; readable live text on phones.
- Existing scheduling buttons now open /book/ in the same tab.
- Microsoft Bookings initializes only when View Availability is clicked.
- Phones up to 640px wide receive a prominent direct scheduling link.
- A direct Microsoft scheduling fallback remains visible on all screen sizes.
- Added introduction, what happens next, metadata, and sitemap entry.
- Existing form endpoint, analytics, contact information, team, video, Vercel configuration, and robots rules retained.
- Abstract banner optimized to a 96 KB WebP file.
- Updated scheduling references in source and documentation. Older QA reports are historical, not evidence for this release.

## Verification
Passed the production build and existing repository validator: 13 HTML documents, 57 generated files, internal asset/link checks, and GA4 checks.
Passed JavaScript syntax and focused calendar-handler checks: no initial iframe, correct URL after click, explicit height, accessible expanded state, no duplicate iframe.
Confirmed the original public assets and video handler are unchanged, along with Vercel configuration and robots.txt.
Validated JSON files, sitemap XML, booking metadata, and same-tab scheduling CTA targets.
Repository-wide search found no references to the previous scheduling provider.

Browser launch was blocked by this environment. Desktop/mobile visual rendering and the real Microsoft embed were not browser-verified. No appointment, confirmation email, or Teams invitation was submitted or tested.

## Deploy with GitHub Desktop
1. Extract the ZIP. Its root contains package.json, src, public, dist, and vercel.json.
2. In GitHub Desktop choose the existing Capital Generations repository and Show in Explorer or Finder.
3. Copy the extracted contents into that repository, replacing matching files. Keep the repository's .git folder.
4. Commit with the summary "Add Microsoft booking page".
5. Click Push origin. The existing Vercel project should build automatically.

## Live check after deployment
Open /book on desktop and phone. Confirm it starts at the top, the desktop calendar appears only after View Availability, and the phone scheduling button opens the correct calendar. Complete a test appointment and verify the confirmation and meeting details, then cancel it if appropriate.
