# oferpinhas.com — expansion plan

Plan for turning the skeleton at `oferpinhas.com` into a site that serves two audiences at once:

- **Formal** — orchestra bookers, theater directors, grant panels, academic commissions. Want credentials, clear work list, downloadable CV/EPK, sober presentation.
- **Wild** — collaborators, festivals, listeners, future bandmates. Want groove, color, personality.

**Resolution**: structure formal, voice wild. Grid + typography disciplined; language, palette, motion energetic. Reference point: ECM album covers, Jacob Collier circa 2019 — serious typography, playful content.

Tagline candidates (pick / rewrite):
- HE: `מלחין · מעבד · מחבר בין עולמות`
- HE: `כותב שירים, כותב לתזמורות, כל מה שביניהם`
- EN: `Composer & arranger — from bandstand to orchestra pit`
- EN: `Songs, scores, and everything in between`

Sibling doc: `docs/tasks.md` (launch blockers). This doc is about *what the site becomes* after the skeleton ships.

---

## Phase 0 — decisions (blocking, answer first)

These gate Phase 1. No code until answered.

### Q1. Work categories
Proposed 5-category split. Confirm / rename / merge / split:
- **Orchestral & Ensemble** — commissions, pieces for chamber/orchestra
- **Theater & Film** — incidental music, scores
- **Arrangements** — for other artists, choirs, ensembles
- **Songs & Solo** — singer-songwriter output outside Pinhas & Sons
- **Collaborations** — guest, session, featured

### Q2. Bio voice & source
Two tiers:
- Short (3 lines) — wild-spirited
- Long (CV-grade) — degree, teachers/institutions, ~3 career highlights, 1 line on aesthetic

Decide: Ofer drafts and Claude edits, or Claude drafts from bullets Ofer provides?

### Q3. Hero treatment
- Typographic only (current)
- Static photo
- Muted video loop (conductor silhouette / pen on score / band shot — 3–5 sec)

### Q4. Default language
- HE at `/`, EN at `/en/` (current). Keeps local-work priority.
- EN at `/`, HE at `/he/`. Better for orchestra/festival applications abroad.

### Q5. Media embeds
YouTube / Bandcamp / Spotify iframes — OK, or self-host all audio/video for aesthetic control?

### Q6. EPK / CV PDFs
Existing PDFs to link, or author as part of Phase 4?

---

## Phase 1 — content-true skeleton

Replace placeholders. No new features, no new sections. Just truth instead of `YYYY` / `שם פרויקט`.

### T1.1. Write real bio (HE + EN, both tiers)
Short tier (3 lines) + long tier (CV-grade). Hebrew first, English adapted (not literal-translated — adjust voice per language).

### T1.2. Gather works — 8–12 entries
Each entry = structured object. Define shape in HTML comments / data attributes so future CMS migration is cheap:

```
title, title_en, year, category, role, ensemble, venue_or_label,
duration, instrumentation, program_note_he, program_note_en,
media_links: [{type: youtube|bandcamp|spotify|score_pdf, url}],
featured: bool
```

Gather across all 5 categories (per Q1). Empty categories hide at render time.

### T1.3. Replace placeholder cards with real entries
Populate `.works-grid` in both `index.html` and `en/index.html`. Preserve pattern — keep pages in sync.

### T1.4. Categorize works in markup
Add `data-category` attribute to each `<article class="work-card">`. Render-time grouping comes in Phase 3; markup-ready now so nothing re-authored later.

### T1.5. Confirm contact email + socials
`ofer@oferpinhas.com` — confirm mailbox works. Add Instagram and/or LinkedIn if relevant (see `docs/tasks.md` C3).

---

## Phase 2 — visual differentiation

Keep current palette as spine. Layer in signals for range and personality without fragmenting identity.

### T2.1. Add body-serif font pair for long-form
Current: Karantina display + Assistant UI + Bellefair tagline. Missing: a serious reading serif for long bios / program notes.
- Hebrew long-form: **Frank Ruhl Libre** or **David Libre**
- English long-form: **EB Garamond** or keep **Cormorant Garamond**

Adds to Google Fonts preconnect block in both `index.html` files.

### T2.2. Paper-grain texture overlay
SVG noise, 2–4% opacity, fixed to body. Counters flat-corporate feel without going kitsch.

### T2.3. Per-section accent weighting
Same palette, redistributed:
- Orchestral / Theater sections lean **concrete/ink** (cooler, formal)
- Songs / band callout lean **terracotta/mustard** (hot)

Signals range within one identity.

### T2.4. Decide hero treatment (per Q3) and implement
Typographic / static photo / muted video loop.

### T2.5. Restrained motion — one rhythmic touch
Kicker labels or section dividers animate in with slight syncopation (staggered, not uniform). One nod to groove. No more.

---

## Phase 3 — depth

Work entries become browsable, not just listed.

### T3.1. Per-work detail — pick one approach
- **Inline expansion**: click card → expand panel below with embed + program note + credits
- **Dedicated pages**: `/works/<slug>.html` with full detail

Tradeoff: inline = single-page flow (simpler, better for casual browsers). Pages = shareable URLs (better for sending a specific work to an orchestra).

Recommendation: dedicated pages. Orchestra admins need to forward a URL.

### T3.2. Media embeds
YouTube / Bandcamp / Spotify iframes on detail pages (pending Q5).

### T3.3. Category filter on works grid
Buttons above grid filter by `data-category`. Vanilla JS, no framework. Markup already categorized in T1.4.

---

## Phase 4 — formal kit

What orchestra admins download and forward. Missing these = amateur to that audience regardless of site polish.

### T4.1. EPK one-pager PDF
Photo, short bio, selected works, contact. Authored outside repo, committed to `/assets/press/epk.pdf`.

### T4.2. CV PDF
Longer: education, commissions, performances, teaching, press. Committed to `/assets/press/cv.pdf`.

### T4.3. Press folder
`/press/` with high-res photos, logo/wordmark, bio HE+EN as `.txt`. Direct-linkable for journalists.

### T4.4. Press / selected performances section (if material exists)
Logos/venues/festivals, reviews pullquotes. Conditional on actual press existing.

### T4.5. OG image
Resolves `docs/tasks.md` T2. Cannot author until hero photo exists (Phase 2 / `docs/tasks.md` B3).

---

## Phase 5 — polish & launch

### T5.1. `robots.txt` + `sitemap.xml`
Resolves `docs/tasks.md` T1.

### T5.2. Lighthouse baseline
Resolves `docs/tasks.md` T3.

### T5.3. a11y audit — RTL especially
Resolves `docs/tasks.md` T4.

### T5.4. Domain cutover
Resolves `docs/tasks.md` B4. Depends on Wix cutover plan in band repo.

---

## Execution order

Strict sequence. Each phase gates the next.

1. Phase 0 — answer Q1–Q6
2. Phase 1 — content
3. Phase 2 — visual
4. Phase 3 — depth
5. Phase 4 — formal kit
6. Phase 5 — launch

Pick phase → work task-by-task → mark done → move on.
