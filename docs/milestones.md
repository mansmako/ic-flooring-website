# Milestones & Step‑by‑Step Plan

## 0) Repo & Local
- [ ] Create GitHub repo `ic-flooring-website`
- [ ] `git init && git add -A && git commit -m "chore: bootstrap"`
- [ ] `git branch -M main && git remote add origin <repo-url> && git push -u origin main`
- [ ] `npm install && npm run dev` (sanity check)

## 1) Brand & Content
- [ ] Replace hero/project images with neutral industrial photos (no picsum)
- [ ] Verify copy: Services, Process, Call‑out inclusions
- [ ] Update contact details (email/phone) everywhere
- [ ] SEO: titles, descriptions, sitemap/robots later

## 2) Quote Form
- [ ] Decide on Formspree/Netlify/mailto
- [ ] Insert endpoint in `/src/components/QuoteForm.astro`
- [ ] Test submission

## 3) Projects & Blog
- [ ] Add real case studies (photos + metrics)
- [ ] Write 3–5 short blog posts (SEO value)

## 4) Deploy
- [ ] Add SFTP secrets to GitHub
- [ ] Update `remote_path` in workflow
- [ ] Push to `main` → auto build & deploy
- [ ] DNS and domain point to hosting (if needed)

## 5) Polish
- [ ] Performance pass (images compressed, lazy load if needed)
- [ ] Accessibility pass (alts, contrast)
- [ ] Analytics (optional: Plausible/Cloudflare Web Analytics)
- [ ] Branch protection & CI checks
