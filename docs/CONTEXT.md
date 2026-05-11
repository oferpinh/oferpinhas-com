# oferpinhas.com — fresh-session context

One-page ramp-up for a Claude session picking this project up cold. Read first; everything else (`launch-plan.md`, `content-source.md`) is supporting material.

---

## What this is

Personal site for **Ofer Pinhas** — Israeli composer, arranger, musical director. Lives outside the Pinhas & Sons band site (`pinhasons.com`) but heavily features the band as the main project. Bilingual: HE default at `/`, EN at `/en/`.

**Audience tension** (drives every design call):
- Formal — orchestra bookers, theatre directors, grant panels. Want CV-grade.
- Wild — listeners, festival programmers, fellow musicians. Want groove + color.

Resolution: **structure formal, voice wild.** Not a faculty page.

---

## Stack & infra

- Plain HTML/CSS/JS, no build step, no framework
- Hosted on Vercel (`oferpinhas-com.vercel.app`)
- Domain `oferpinhas.com` **NOT yet attached** — still on Wix; cutover later
- Auto-deploy on push to `main` (GitHub→Vercel webhook live since 2026-05-10)
- Repo: `oferpinh/oferpinhas-com` on GitHub

Dev:
```bash
cd /Users/opinhas/sources/site-p
python3 -m http.server 8000
# open http://localhost:8000  (HE)
# open http://localhost:8000/en/  (EN)
```

Push to deploy:
```bash
git push origin main   # → deploys to oferpinhas-com.vercel.app within ~30s
```

---

## Design direction

**Cinema / Spotlight (Direction A)** — picked from 3 prototypes. Branches `design-b` (editorial magazine) and `design-c` (bold concert-poster) preserved for revert.

Palette:
- `--bg` `#0E1024` midnight indigo
- `--bg-soft` `#16182E`, `--bg-deep` `#07081A`
- `--ink` `#F2EAD3` cream
- `--saffron` `#F5B23A` primary accent
- `--teal` `#4FB1B8` secondary (upcoming-show CTA, date)
- `--magenta` `#E8407A` defined, mostly unused

Type:
- Display: **Karantina** (HE) + **Cormorant Garamond italic** (EN, via `.italic-en`)
- Body serif: **Karantina 300 light** (HE) / **EB Garamond** (EN, via `:lang(en)`)
- UI: **Inter** (EN/numerals) + **Assistant** (HE body sans)
- Frank Ruhl Libre is the HE serif fallback

---

## Page structure (current)

```
<header>             — fixed nav (logo + 5 links + lang toggle + mobile hamburger)
.hero                — full-bleed PINHAS_with_photo composite + saffron subtitle
#upcoming            — single show item (Pinhas & Sons w/ Guy Mintus, 2026-07-08)
#works               — concertina list of 9 expandable projects (see below)
#discography         — 8 album tiles (4 studio, 4 live, no labels, visual row split)
#songbook            — single magazine card with Bandcamp cover image + CTA
#contact             — 6 circular icons (Email/Instagram/Facebook/YouTube/Bandcamp/Spotify)
#lightbox            — fixed modal player (one global iframe)
```

Each `#works` `<li class="project">` is a native `<details>` with:
- `<summary>` = closed row (project-meta kicker, project-title big, project-tagline, rotating arrow). Background-image = poster (YouTube thumbnail or photo). Optional `bg-top`/`bg-bottom` class OR inline `background-position` for crop control.
- `<div class="project-body">` = open panel with `featured-grid` of `feature-card` buttons that open the lightbox.

Lightbox = single `#lightbox-iframe` toggled by JS via `data-vid`/`data-title` attrs on each `.media-trigger`. ESC + backdrop close.

---

## Content

Source of truth: `docs/content-source.md` (drift-prone — verify against `index.html` if in doubt).

**9 projects in #works (HE order top→bottom):**
1. פנחס ובניו — 6 vids; band-bg.webp cover; saffron CTA → pinhasons.com
2. מי בעד — Cameri; trailer
3. העיקר זה המילים — Revolution Orchestra × Yoni Rechter
4. (How do I Get a) Visa to Germany — oneMusic / Beethovenfest
5. התקווה מתה אחרונה — Ensemble Meitar; 3 vids
6. אוונגרד תימני — Meitar × Yossi Tsabari; 2 vids
7. שירים (לא) פשוטים — 3 vids (ערב של יום בהיר / שיר ללא שם / הנה הנה)
8. Enlightened Octopus — 3 vids (Just The Same / Nick Drake / RUSH)
9. נוספים — Chorole / Little Fugue / Orphaned Land at Heichal HaTarbut

**Albums (8):** Cheap Metaphors / About an Album / What Will Become of Us / Enlightened Octopus / Mazig live / Gronich live / Eder Zappa / Shaban TA Museum.

**Songbook:** "כן זה חסר סיכוי, אבל למה לא לנסות" — Bandcamp merch link.

**Contact:** `pinhasymphony@gmail.com` (NOT ofer.pinhas@gmail.com — switched 2026-05-10).

---

## Working preferences (Ofer)

- **Caveman mode**: terse output, drop articles, fragments OK, no fluff. Active continuously. Code stays normal.
- HE-first tone for all decisions; EN parity required after each HE change.
- Real edits only — no placeholders or TODO comments unless explicitly asked.
- One-step-at-a-time when iterating UI; multi-step when batching fixes.
- Pushes go through `git push origin main` directly — auto-deploy is wired.
- Vercel CLI avoided unless needed (auto-deploy preferred).

---

## Branches

- **`main`** — production, auto-deploys
- **`design-a`** — frozen reference for chosen direction
- **`design-b`** — editorial magazine (alternate, preserved)
- **`design-c`** — concert-poster bold-graphic (alternate, preserved)
- **`design-expandable`** — original branch where concertina was built; merged into `main` 2026-05-11

Don't delete the alt branches without asking — they're the revert path.

---

## Performance baseline (post-optimization)

PageSpeed mobile (2026-05-10):
- Performance **80** (was 68)
- Accessibility 98, Best Practices 100, SEO 100
- LCP 4.3s (was 10.9s)
- TBT 0ms, CLS 0
- Image bytes 2.45MB → ~600KB after WebP conversion + tighter compression

---

## Outstanding

- **Domain cutover** `oferpinhas.com` from Wix — depends on band repo `docs/wix-cutover.md`
- **EPK / CV PDFs** deferred (T4.1–T4.3 in launch-plan)
- **Press section** deferred (T4.4)

Everything else complete.

---

## Where to look

| Question | File |
|---|---|
| Site code (HE) | `index.html` |
| Site code (EN) | `en/index.html` |
| Styles | `assets/site.css` |
| JS (header, nav, lightbox, reveal) | `assets/site.js` |
| Photos / album covers / hero | `assets/photos/` (WebP) |
| Logo / favicon variants | `assets/logo*.png`, `assets/favicon*` |
| Sitemap / robots | `sitemap.xml`, `robots.txt` |
| Content source of truth | `docs/content-source.md` |
| Phase plan (with status) | `docs/launch-plan.md` |
| Original task list | `docs/tasks.md` (deprecated; launch-plan supersedes) |
| Design direction options | `docs/expansion-plan.md` |

---

## How to ramp into a new session

Tell Claude:

> Read `/Users/opinhas/sources/site-p/docs/CONTEXT.md` first. Site is on `main` branch, auto-deploys on push, lives at `oferpinhas-com.vercel.app`. Currently on Direction A (Cinema/Spotlight). Caveman mode terse output. I want to do X.

That's enough.
