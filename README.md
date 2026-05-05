# oferpinhas.com — solo artist site

Ofer Pinhas's personal site. Landing page for work outside פנחס ובניו (the band, at [pinhasons.com](https://pinhasons.com)).

## Stack

- Plain HTML / CSS / JS — no build step, no framework
- Hosted on Vercel (static)
- DNS on Cloudflare (planned — domain currently on Wix, migration pending)
- Fonts via Google Fonts (Karantina, Bellefair, Assistant, Inter, Cormorant Garamond)

## Structure

```
site-p/
├── index.html          # Hebrew landing page (default at /)
├── en/index.html       # English landing page (at /en/)
├── assets/
│   ├── site.css        # All styles
│   ├── site.js         # Tiny scroll-state toggle for header
│   └── favicon.png
└── docs/
    └── tasks.md        # Open work items
```

## Run locally

No build step. Two options:

**Option 1 — any static file server**
```bash
python3 -m http.server 8000
```
Open http://localhost:8000.

**Option 2 — Vercel dev server** (matches prod behavior incl. redirects)
```bash
vercel dev
```
Open http://localhost:3000.

**Option 3 — just open the file**
```bash
open index.html
```
Works for quick checks but some features (relative URLs, service workers if ever added) behave slightly different than served-over-HTTP.

## Deploy

### Production (manual, via CLI)
```bash
vercel --prod
```

### Production (auto, via git push)
Once Vercel ↔ GitHub connection is wired up (see `docs/tasks.md` B1), any push to `main` auto-deploys to production.

```bash
git add <files>
git commit -m "..."
git push
```

### Preview (branch deploys)
Any non-`main` branch auto-creates a preview URL on push (once GitHub integration works).

Current production URL: https://oferpinhas-com.vercel.app
Custom domain `oferpinhas.com`: not yet attached (see `docs/tasks.md` B4).

## Edit content

Two parallel files — keep them in sync:
- `index.html` — Hebrew (`lang="he" dir="rtl"`)
- `en/index.html` — English (`lang="en" dir="ltr"`)

Any copy change needs both. The structure mirrors: hero, about, works grid, band callout, contact, footer.

Both pages reference the same `/assets/site.css` + `/assets/site.js`.

## Adding a work

Each work is one `<article class="work-card">` inside `.works-grid`. Pattern:

```html
<article class="work-card">
  <div class="work-year">2025</div>
  <h3 class="work-title">שם הפרויקט</h3>
  <p class="work-note">תיאור קצר.</p>
  <a href="https://..." class="work-link" rel="noopener">להאזנה ←</a>
</article>
```

Add in both `index.html` and `en/index.html`.

## Related

- Band site repo: [`pinhas-and-sons`](https://github.com/oferpinh/pinhas-and-sons) at `/Users/opinhas/sources/site/`
- Original scoping doc: band repo `docs/oferpinhas-solo-site-plan.md`
- DNS cutover plan: band repo `docs/wix-cutover.md`
- Shared infra state: band repo `docs/hosting-status.md`

## Open work

See `docs/tasks.md` for the current task list.
