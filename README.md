# Fortnite Cheats — Marketing Site

Static Astro 7 site for [fortnitecheats.xyz](https://fortnitecheats.xyz), adapted from the Warzone Cheats template.

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

Fetch fresh IGN Fortnite WebP images (optional):

```bash
npm run fetch:images
npm run optimize:images
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **fortnitecheats**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **fortnitecheats.xyz** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**
7. DNS: proxied A/AAAA or CNAME for apex + www

CLI deploy:

```bash
npm run pages:deploy
```

Requires `wrangler` auth (`wrangler login`).

## Environment

- Node.js >= 22.12.0
- Checkout URL: Zadeyo Fortnite product (`siteConfig.checkoutUrl` in `src/data/site.ts`)

## Project structure

| Path | Purpose |
|------|---------|
| `src/data/site.ts` | Brand, checkout, nav, FAQs |
| `src/data/fortnite.ts` | Keyword-named image map |
| `src/data/i18n/` | Routing, locales, generated content |
| `src/pages/` | English page routes |
| `src/pages/[lang]/` | Localized dynamic routes |
| `scripts/generate-i18n-content.mjs` | Regenerate `content.generated.ts` |
| `scripts/fetch-ign-fortnite-images.mjs` | IGN → WebP image pipeline |
| `scripts/validate-sitemaps.mjs` | Post-build SEO validation |
| `functions/_middleware.js` | www redirect, HTTPS, security headers |

## SEO

- Meta titles/descriptions per page and locale
- JSON-LD: FAQPage, SoftwareApplication, Organization, WebPage (via layouts)
- hreflang on all 22 locales + x-default
- Sitemaps: index, English, per-locale, images
- Canonical URLs on `https://fortnitecheats.xyz`

## Google Search Console

After deploy:

1. Verify domain property for `fortnitecheats.xyz`
2. Submit `https://fortnitecheats.xyz/sitemap-index.xml`
3. Request indexing for homepage and key landing pages
4. Monitor Coverage and Core Web Vitals

## License

Private — for fortnitecheats.xyz deployment only.
