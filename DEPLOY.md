# Deploy fortnitecheats.net

Step-by-step guide to deploy the Fortnite Cheats static site to **fortnitecheats.net** on Cloudflare Pages, configure DNS, and submit to Google Search Console.

## Prerequisites

- Node.js **≥ 22.12.0**
- Cloudflare account with access to **fortnitecheats.net** DNS
- Wrangler CLI (included as dev dependency): `npx wrangler login`

## 1. Build and validate locally

From the project root:

```bash
npm install
npm run build:validate
```

`build:validate` runs `astro build` then `scripts/validate-sitemaps.mjs`. All sitemap checks must pass before deploying.

Expected output: **550** indexable HTML pages (25 English + 21 locales × 25 pages each).

## 2. Cloudflare Pages project

### Option A — Git-connected (recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this repository.
3. Configure build settings:
   - **Project name:** `fortnitecheats`
   - **Production branch:** `master` (or your default branch)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 22 (set via environment variable `NODE_VERSION=22` if needed)
4. Save and deploy. Cloudflare runs the build on each push.

### Option B — Direct upload / Wrangler CLI

```bash
npm run build:validate
npm run pages:deploy
```

This runs `wrangler pages deploy dist --project-name=fortnitecheats` (see `wrangler.toml`).

## 3. Custom domain and DNS

Add **fortnitecheats.net** as the primary custom domain on the Pages project.

### Apex (fortnitecheats.net)

In **Cloudflare DNS** for the zone:

| Type  | Name | Content              | Proxy |
|-------|------|----------------------|-------|
| CNAME | `@`  | `<pages-subdomain>.pages.dev` | Proxied (orange cloud) |

Cloudflare CNAME flattening handles apex records automatically.

### www → apex redirect

1. Add a DNS record for `www` pointing to the same Pages project (proxied CNAME or A record).
2. In **Rules** → **Redirect Rules** (or Bulk Redirects), create:
   - **Source:** `www.fortnitecheats.net/*`
   - **Target:** `https://fortnitecheats.net/${1}`
   - **Status:** 301

The deployed `functions/_middleware.js` also enforces apex canonical host and legacy path redirects.

### SSL / HTTPS

1. **SSL/TLS** → **Overview** → set mode to **Full (strict)**.
2. **Edge Certificates** → enable **Always Use HTTPS**.
3. After enabling, **Caching** → **Configuration** → **Purge Everything** once.

## 4. Post-deploy smoke test

Verify these URLs return **200** with correct content:

- `https://fortnitecheats.net/`
- `https://fortnitecheats.net/es/`
- `https://fortnitecheats.net/fortnite-aimbot/`
- `https://fortnitecheats.net/sitemap-index.xml`
- `https://fortnitecheats.net/robots.txt`

Verify redirects:

- `http://fortnitecheats.net` → `https://fortnitecheats.net` (301)
- `https://www.fortnitecheats.net` → `https://fortnitecheats.net` (301)
- Legacy paths (e.g. `/warzone-aimbot/`) → Fortnite equivalents (301)

## 5. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **Domain** → enter `fortnitecheats.net`.
3. Verify ownership via the **DNS TXT record** Cloudflare provides (add in Cloudflare DNS, wait for propagation, then confirm in GSC).
4. After verification, open **Sitemaps** and submit:
   ```
   https://fortnitecheats.net/sitemap-index.xml
   ```
5. Use **URL Inspection** to request indexing for:
   - Homepage (`/`)
   - Key landing pages (`/fortnite-aimbot/`, `/fortnite-esp/`, `/best-fortnite-cheats/`, etc.)
   - A sample of locale homepages (`/es/`, `/de/`, `/fr/`)
6. Monitor **Pages** (Coverage), **Core Web Vitals**, and **International targeting** (hreflang) over the following weeks.

## 6. Ongoing maintenance

| Task | Command / action |
|------|------------------|
| Regenerate i18n content | `npm run generate:i18n` (after editing `scripts/i18n-data/*`) |
| Full build + SEO validation | `npm run build:validate` |
| Refresh images from IGN | `npm run fetch:images` then `npm run optimize:images` |
| Redeploy | Push to Git (auto) or `npm run pages:deploy` |

## Checklist

- [ ] `npm run build:validate` passes locally
- [ ] Cloudflare Pages project `fortnitecheats` created
- [ ] Custom domain `fortnitecheats.net` attached and active
- [ ] `www` redirects to apex
- [ ] Always Use HTTPS enabled
- [ ] `robots.txt` and sitemaps serve from `https://fortnitecheats.net`
- [ ] Google Search Console domain verified
- [ ] `sitemap-index.xml` submitted in GSC
- [ ] Homepage and key pages requested for indexing
