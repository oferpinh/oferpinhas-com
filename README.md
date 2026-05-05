# oferpinhas.com — solo artist site

Ofer Pinhas's personal site. Landing page for works outside of פנחס ובניו, with a link through to the band.

## Stack

- Plain HTML / CSS / JS — no build step
- Hosted on Vercel (static)
- DNS on Cloudflare
- Domain: `oferpinhas.com` (currently on Wix — migration planned)

## Structure

- `index.html` — Hebrew landing page (default)
- `en/index.html` — English landing page
- `assets/` — CSS, JS, images

## Deploy

Connected to Vercel. Push to `main` → auto-deploys to production.

Manual CLI deploy:

```bash
vercel --prod
```

## Related

- Band site: `pinhasons.com` (repo: `pinhas-and-sons`)
- Migration from Wix planned — see band repo `docs/wix-cutover.md`
