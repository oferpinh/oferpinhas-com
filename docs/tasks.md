# Tasks — oferpinhas.com (solo site)

Open items for the solo-artist landing page.

---

## 🚧 Blockers before launch

### B1. Hook up GitHub → Vercel auto-deploy
`vercel` CLI first-run reported: `Error: Failed to connect oferpinh/oferpinhas-com to project`. Vercel GitHub App probably not authorized on the personal account for this repo.

**Fix:** Vercel dashboard → project `oferpinhas-com` → Settings → **Git** → Connect Git Repository → `oferpinh/oferpinhas-com`. Install / authorize the Vercel GitHub App when prompted.

Until fixed, only manual `vercel --prod` from inside `site-p/` deploys.

### B2. Replace placeholder content
`index.html` + `en/index.html` currently ship placeholder copy (`YYYY` years, `שם פרויקט` / `Project title`, generic bio). Needs:
- Real bio (HE + EN)
- Real works list with titles, years, notes, links
- Real contact email (currently `ofer@oferpinhas.com` — confirm works)

### B3. Supply photos
Ofer said he'll share solo photos independently — none in repo yet. Needs at minimum:
- Hero portrait (landscape or portrait? TBD)
- Optional: one image per work card

Decide image path convention. Suggest `/assets/hero.jpg`, `/assets/works/<slug>.jpg`.

### B4. Attach domain `oferpinhas.com` to this Vercel project
Not done yet — domain still on Wix. Part of the Wix cutover (see band repo `docs/wix-cutover.md` Phase 2).

Pre-reqs before attaching:
- Site content complete (B2, B3)
- Registrar transfer Wix → Cloudflare done
- DNS records swapped to point at this Vercel project

---

## ✨ Content & design

### C1. Bio copy
Write short HE bio (2-3 sentences). Then translate to EN — do not literal-translate; adjust voice per language.

### C2. Works list
Gather: collaborations, session credits, composition work, arrangements, guest appearances. Each entry needs:
- Title
- Year
- Short note (1-2 sentences)
- Optional external link (Bandcamp / YouTube / Spotify / credit page)

Sort chronological (newest first) or thematic? TBD.

### C3. Contact
Current: email + YouTube + Bandcamp links. Consider adding:
- Instagram (if personal, separate from band's)
- LinkedIn (if relevant for session work bookings)
- Phone number? (probably not)

### C4. Decide typography / visual differentiation from band site
Current: solo site reuses band's fonts + palette. Deliberate design question — reinforce unified "Ofer Pinhas world" OR differentiate to signal "this is solo, not band"?

Options:
- **Keep current** (unified) — same fonts, same palette
- **Subtle diff** — same fonts, different accent color (e.g. mustard primary instead of terracotta)
- **Strong diff** — different type family (e.g. all Bellefair / italic-en, no Karantina)

Decide before content lock.

---

## 🔧 Tech

### T1. Add `robots.txt` + `sitemap.xml`
Currently missing. Both small files. Add once real content settled.

### T2. Add Open Graph image
Currently no `og:image` — social shares will show a generic preview. Add once hero photo exists.

### T3. Lighthouse baseline
Run `lighthouse` skill against `https://oferpinhas-com.vercel.app` — record baseline scores. Re-run after content added.

### T4. a11y audit
Run `a11y-check` skill. RTL Hebrew handling should be clean (carried over from band site patterns) but verify.

### T5. Favicon
Currently uses band site's favicon (`assets/favicon.png`). Decide: same favicon for both sites (Ofer-as-brand), OR distinct solo favicon?

### T6. Consider removing unused CSS
`site.css` is trimmed but may still contain rules not used by the skeleton. Audit after content lock.

---

## 🔮 Future / maybe

### F1. Add section for teaching / lessons
Only if Ofer wants to take on private students. If yes, add CTA block with contact + scheduling.

### F2. Blog / writing section
Only if Ofer wants to write. Likely skipped.

### F3. Press / reviews
If accumulates.

### F4. Add `he_IL` + `en_US` proper hreflang + canonical
Basic `hreflang` already in place. Verify Google accepts both variants once live.

---

## ✅ Done

- [x] Repo scaffolded (HE + EN)
- [x] Deployed to `https://oferpinhas-com.vercel.app`
- [x] GitHub repo created: `oferpinh/oferpinhas-com`
- [x] Local folder renamed `site-p`

---

## Related docs

- `docs/vercel-deploy-plan.md` — solo-site specific deploy plan
- Band repo: `/Users/opinhas/sources/site/docs/oferpinhas-solo-site-plan.md` — original scoping doc
- Band repo: `/Users/opinhas/sources/site/docs/wix-cutover.md` — the DNS cutover plan
- Band repo: `/Users/opinhas/sources/site/docs/hosting-status.md` — shared infrastructure state
