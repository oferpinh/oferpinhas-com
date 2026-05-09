# oferpinhas.com — unified launch plan

Merges `docs/tasks.md` (launch blockers + tech hygiene) with `docs/expansion-plan.md` (content/design depth) into one ordered path from skeleton → live.

Two audiences, one site:
- **Formal** — orchestra bookers, theater directors, grant panels. Want credentials, clear work list, downloadable CV/EPK, sober presentation.
- **Wild** — collaborators, festivals, listeners. Want groove, color, personality.

Resolution: structure formal, voice wild. ECM-cover feel, not faculty page.

---

## Phase 0 — decisions (LOCKED)

All decided 2026-05-06. Ofer deferred to Claude's recommendations pending final review at project end.

### D1. Work categories — renamed to 5
- **Concert music** (chamber / orchestra / choir originals)
- **Stage & screen** (theater + film)
- **Arrangements**
- **Songs** (solo, outside P&S)
- **Collaborations**

### D2. Bio voice & source
Ofer supplies bullets (degree, teachers, 3 highlights, aesthetic line, 5 short-tier keywords). Claude drafts short + long, HE + EN. Ofer edits.

### D3. Hero treatment
Typographic only for v1. Static photo added in Phase 2 once T1.5 lands. No video loop.

### D4. Default language
HE at `/`, EN at `/en/` (current). Preserves Hebrew SEO; EN one click away.

### D5. Media embeds
Iframe (YouTube / Bandcamp / Spotify). Lazy-load + CSS wrapper for aesthetic control.

### D6. EPK / CV PDFs
Author fresh in Phase 4 from bio (T1.1) + works (T1.2).

### D7. Typography differentiation from band site
Subtle diff. Keep Karantina + Assistant. Hero accent swaps terracotta → mustard. Add body-serif (Frank Ruhl Libre HE / EB Garamond EN) for long-form only.

### D8. Favicon
Distinct solo favicon — monogram (`ע` or `OP`) in paper-on-concrete. Signals two projects across tabs.

---

## Phase 1 — content (blockers B2, C1, C2, C3)

Replace placeholder skeleton with truth. No new features yet.

### T1.1. Real bio — HE + EN, both tiers
Covers `tasks.md` C1 + B2-bio.

### T1.2. Gather 8–12 works into structured shape
Shape:
```
title, title_en, year, category, role, ensemble, venue_or_label,
duration, instrumentation, program_note_he, program_note_en,
media_links: [{type, url}], featured: bool
```
Covers `tasks.md` C2 + B2-works.

### T1.3. Replace placeholder cards (both `index.html` + `en/index.html`)
Wire T1.2 entries into `.works-grid`. Add `data-category` per card (markup-ready for Phase 3 filter). Keeps pages in sync.

### T1.4. Confirm contact email + finalize socials
`ofer@oferpinhas.com` works? Add Instagram / LinkedIn per `tasks.md` C3. Covers B2-contact + C3.

### T1.5. Supply photos
Hero portrait + optional one-per-work. Decide path: `/assets/hero.jpg`, `/assets/works/<slug>.jpg`. Covers `tasks.md` B3.

---

## Phase 2 — visual differentiation (tasks.md C4, T5)

Palette stays. Layer in range signals.

### T2.1. Body-serif font pair for long-form
- HE long: Frank Ruhl Libre / David Libre
- EN long: EB Garamond / keep Cormorant
Add to Google Fonts preconnect in both pages. Informed by D7.

### T2.2. Paper-grain texture overlay
SVG noise, 2–4% opacity, fixed to body. Warmth without kitsch.

### T2.3. Per-section accent weighting
Orchestral/Theater → concrete/ink (cool). Songs/band callout → terracotta/mustard (hot). Same palette redistributed.

### T2.4. Implement hero treatment (per D3)

### T2.5. One rhythmic motion touch
Staggered kicker / divider reveal. Subtle, not uniform. One gesture only.

### T2.6. Favicon decision + asset
Per D8. Covers `tasks.md` T5.

---

## Phase 3 — depth

Works browsable, not just listed.

### T3.1. Per-work detail pages — `/works/<slug>.html`
Recommended over inline expansion: orchestra admins need shareable URLs. One HTML template, repeated.

### T3.2. Media embeds on detail pages
Per D5.

### T3.3. Category filter on works grid
Vanilla JS, filters by `data-category` from T1.3. Buttons above grid.

---

## Phase 4 — formal kit

What orchestra admins download. Missing = amateur to that audience.

### T4.1. EPK one-pager PDF → `/assets/press/epk.pdf`
Photo, short bio, selected works, contact.

### T4.2. CV PDF → `/assets/press/cv.pdf`
Education, commissions, performances, teaching, press.

### T4.3. Press folder `/press/`
High-res photos, wordmark, bio HE+EN `.txt`. Direct-linkable for journalists.

### T4.4. Press / selected performances section (conditional)
If real logos/venues/pullquotes exist. Skip otherwise.

### T4.5. Open Graph image
Covers `tasks.md` T2. Depends on hero photo (T1.5).

---

## Phase 5 — tech hygiene & launch (tasks.md B1, B4, T1, T3, T4, T6)

### T5.1. `robots.txt` + `sitemap.xml`
Covers `tasks.md` T1.

### T5.2. CSS audit — remove unused rules
Covers `tasks.md` T6.

### T5.3. Lighthouse baseline
`https://oferpinhas-com.vercel.app` before + after content. Covers `tasks.md` T3.

### T5.4. a11y audit (RTL focus)
Covers `tasks.md` T4.

### T5.5. Fix GitHub → Vercel auto-deploy
Vercel dashboard → project → Settings → Git → connect `oferpinh/oferpinhas-com`. Covers `tasks.md` B1.

### T5.6. Attach `oferpinhas.com` domain to Vercel project
Depends on Wix cutover (band repo `docs/wix-cutover.md` Phase 2). Covers `tasks.md` B4.

### T5.7. Final `hreflang` + canonical verification
Covers `tasks.md` F4 (promoted — launch-gating).

---

## Future / maybe (deferred)

- F1 — teaching/lessons section (only if Ofer wants students)
- F2 — blog (likely skipped)
- F3 — press/reviews (accumulates over time; T4.4 seeds it)

---

## Dependency map

```
D1..D8 ──▶ Phase 1 ──▶ Phase 2 ──▶ Phase 3 ──▶ Phase 4 ──▶ Phase 5 ──▶ LIVE
                              │
                              └─ T1.5 (photos) blocks T4.5 (og:image) + T2.4 (hero)
                              └─ T5.5 (GitHub→Vercel) independent, can run anytime
                              └─ T5.6 (domain) depends on external Wix cutover
```

Strict phase sequence otherwise. Work task-by-task, mark done, move on.

---

## Related

- `docs/tasks.md` — original launch-blocker list (this doc supersedes it)
- `docs/expansion-plan.md` — content/design deep-dive (this doc integrates it)
- Band repo `docs/wix-cutover.md` — external DNS dependency for T5.6

---

## Status snapshot — 2026-05-09

Site lived through major redesign mid-build. Plan above is the original arc; reality:

**Direction**: design A "Cinema / Spotlight" chosen over editorial B + bold-graphic C (siblings preserved as `design-b`, `design-c` branches). Midnight indigo + cream + saffron + teal. Three branches retained for revert safety.

**Current page structure** (one-page, no detail pages yet):
1. Hero — full-bleed PINHAS_with_photo composite + cream tagline + teal/saffron subtitle
2. Upcoming — single show item, P&S × Guy Mintus, TA Museum 2026-07-08
3. Pinhas & Sons — title + filled-saffron CTA "לאתר ההרכב" → opens new tab; 5 video cards (last spans full row)
4. Other Projects ("פרויקטים נוספים" / "Beyond the Band") — 9 video cards in collage grid (mi-bead, main-thing-lyrics, hope-dies-last, visa-germany, yemeni-avant-garde, simple-songs, fugue, chorole, enlightened-octopus, orphaned-land)
5. Albums — 4 studio + 4 live (visual row split, no labels)
6. Songbook — single magazine-style card with bandcamp cover image
7. Contact — circular icon row (Email / Instagram / Facebook / YouTube / Bandcamp / Spotify)

**Lightbox player** — single fixed iframe, click any video card opens fullscreen modal.

**Phase status (real)**:
- Phase 0 — ✅ done (D1–D8)
- Phase 1 — ✅ done
- Phase 2 — ✅ done (paper-grain dropped; replaced by midnight-cinema palette)
- Phase 3 — partial. T3.3 category filter dropped (works grid restructured). T3.1/T3.2 detail pages **deferred** — single-page model works for current scope. Can revisit if individual work URLs become needed for orchestra applications.
- Phase 4 — formal-kit deferred. T4.5 og:image done (logo on midnight). T4.1/T4.2/T4.3/T4.4 still pending — need user to provide PDFs/press material.
- Phase 5 — mostly done. T5.5 (GitHub→Vercel auto-deploy) + T5.6 (domain attach) need dashboard action by user. T5.3 Lighthouse not run (requires Chrome headless).

**Review patches applied 2026-05-09** (see `git log` for individual commits):
- D-1..D-7 design fixes (hero h1, P&S grid, focus rings, accent variety)
- C-1, C-6, C-9 content + microcopy
- S-1..S-8 SEO/a11y/perf (og:image, robots, sitemap, hreflang, JSON-LD enrich, logo resize, skip link, CSS audit)
- User polish: drop years from feature-tags; stronger card overlay gradient; section-cta filled-button + new-tab; favicon swapped to OP_Feather
- Site nav menu added (6-link bar, mobile hamburger).

**Branches**: `main` is canonical. `design-a/b/c` preserved for design comparisons.

**Pre-launch waiting on user**: T4.x formal-kit PDFs, T5.5 Vercel auto-deploy auth, T5.6 domain cutover after Wix transition.
