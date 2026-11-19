# Portfolio — Khaidir Maulana

    npm install
    npm run dev

- Put your CV at `public/documents/Khaidir-Maulana-CV.pdf`. The Download CV buttons only appear when the file exists.
- Edit content in `src/data/*`. Set `available` in `profile.ts` to false to hide the availability line.
- Deploy: push to GitHub, import in Vercel.

## Confirm before publishing
- Phone / WhatsApp: `showPhone`, `showWhatsapp` in `src/data/profile.ts` (both off).
- Availability line: `available` in `profile.ts` (off).
- Sentinel repository link: remove `hidden: true` in `src/data/projects.ts` once the repo is public.
- TransitNearMe report: add `{ label: "Project report (PDF)", href: "/documents/transitnearme-report.pdf" }` to its `links` once you decide to publish it.
- Screenshots: none are used. Add an `images` field only with real screenshots.

## Deploy to GitHub Pages
1. Create a public repo named `khaidirm5.github.io` and push this project to `main`.
2. In the repo: Settings > Pages > Source: **GitHub Actions**.
3. Each push to `main` builds and publishes to https://khaidirm5.github.io.
(Using a different repo name serves the site under /repo-name and needs `basePath` in `next.config.ts`; internal links would need updating too.)
