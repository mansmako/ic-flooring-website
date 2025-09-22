# IC Flooring — Static Website (Astro + Tailwind)

Apple‑clean aesthetic with industrial credibility. Static, fast, and deployable to Afrihost/xneelo shared hosting via SFTP.

## Quick Start

```bash
npm install
npm run dev
# open the printed localhost URL
```

## Build

```bash
npm run build
# outputs to ./dist (upload to public_html/ on Afrihost)
```

## Deploy via GitHub Actions (SFTP)

1. In GitHub → Settings → Secrets and variables → Actions, add:
   - `SFTP_HOST`
   - `SFTP_PORT` (often 22)
   - `SFTP_USER`
   - `SFTP_PASS`

2. Update `remote_path` in `.github/workflows/deploy-sftp.yml` to your account path (e.g. `/home/USERNAME/public_html`).

3. Push to `main` to auto‑deploy.

## Branding

- Company name: **IC Flooring** (standardized)
- Accent color: `#B31217` (adjust to match logo)
- Replace hero image and project cards with real photos in `/public/images/`.

## Forms

For static hosting, connect `/quote` form to **Formspree** or **Netlify Forms**, or change the CTA to `mailto:` for now.
Update the placeholder attribute `data-formspree` or `action` accordingly.

## Chatbot

`public/chatbot.js` is a placeholder widget (client‑only). Swap with your provider later.

## License

Private, IC Flooring.
