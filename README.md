# Portfolio — Khaidir Maulana

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Configuration

- **CV:** Place your CV at `public/documents/Khaidir-Maulana-CV.pdf`. Download CV buttons will only appear when the file exists.
- **Content:** Edit portfolio information in `src/data/*`.
- **Availability:** Set `available` in `src/data/profile.ts` to `true` to display availability for professional opportunities.
- **Contact privacy:** Control phone and WhatsApp visibility using `showPhone` and `showWhatsapp` in `src/data/profile.ts`.

## Featured Projects

- **Sentinel:** Development on Hold. Backend functionality is mostly implemented, while the frontend still contains placeholder UI.
- **TransitNearMe:** Academic Prototype — Not Currently Functional. A final-year academic project developed during an internship at the Applied Information Systems Laboratory, Telkom University.

Project descriptions reflect their documented development status. Neither project should be presented as currently production-ready.

## Before Publishing

- Phone and WhatsApp visibility: currently disabled.
- Professional availability: enabled (`available: true`).
- Sentinel repository link: keep hidden until the repository is ready for public viewing.
- TransitNearMe report: publish only after reviewing the PDF and confirming it is suitable for public access.
- Screenshots: only add authentic screenshots from the original projects.

## Deployment — GitHub Pages

This project is configured for static export using Next.js.

1. Create a public GitHub repository named `khaidirm5.github.io`.
2. Push the project to the `main` branch.
3. Open **Settings → Pages**.
4. Set the deployment source to **GitHub Actions**.
5. GitHub Actions will build and deploy the website after each push to `main`.

Website: [https://khaidirm5.github.io](https://khaidirm5.github.io)
