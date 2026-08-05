const CANONICAL_ORIGIN = 'https://arcraidershacks.net';
const APEX_HOST = 'arcraidershacks.net';
const WWW_HOST = 'www.arcraidershacks.net';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/rust-cheats': '/',
	'/rust-cheats/': '/',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/arc-raiders-hacks/',
	'/fortnite-hacks/': '/arc-raiders-hacks/',
	'/fortnite-aimbot': '/arc-raiders-aimbot/',
	'/fortnite-aimbot/': '/arc-raiders-aimbot/',
	'/fortnite-esp': '/arc-raiders-esp/',
	'/fortnite-esp/': '/arc-raiders-esp/',
	'/fortnite-wallhack': '/arc-raiders-wallhack/',
	'/fortnite-wallhack/': '/arc-raiders-wallhack/',
	'/undetected-fortnite-cheats': '/arc-raiders-hacks/',
	'/undetected-fortnite-cheats/': '/arc-raiders-hacks/',
	'/eac-bypass-fortnite': '/arc-raiders-hacks/',
	'/eac-bypass-fortnite/': '/arc-raiders-hacks/',
	'/eac-bypass': '/arc-raiders-hacks/',
	'/eac-bypass/': '/arc-raiders-hacks/',
	'/warzone-aimbot': '/arc-raiders-aimbot/',
	'/warzone-aimbot/': '/arc-raiders-aimbot/',
	'/warzone-esp': '/arc-raiders-esp/',
	'/warzone-esp/': '/arc-raiders-esp/',
	'/ricochet-bypass': '/arc-raiders-hacks/',
	'/ricochet-bypass/': '/arc-raiders-hacks/',
	// Legacy rust-* URLs → focused arc-raiders-* pattern
	'/rust-hacks': '/arc-raiders-hacks/',
	'/rust-hacks/': '/arc-raiders-hacks/',
	'/rust-esp': '/arc-raiders-esp/',
	'/rust-esp/': '/arc-raiders-esp/',
	'/rust-aimbot': '/arc-raiders-aimbot/',
	'/rust-aimbot/': '/arc-raiders-aimbot/',
	'/rust-wallhack': '/arc-raiders-wallhack/',
	'/rust-wallhack/': '/arc-raiders-wallhack/',
	'/rust-radar-hack': '/arc-raiders-radar/',
	'/rust-radar-hack/': '/arc-raiders-radar/',
	// Thin keyword duplicates → canonical pages
	'/undetected-rust-cheats': '/arc-raiders-hacks/',
	'/undetected-rust-cheats/': '/arc-raiders-hacks/',
	'/eac-bypass-rust': '/arc-raiders-hacks/',
	'/eac-bypass-rust/': '/arc-raiders-hacks/',
	'/rust-cheats-2026': '/arc-raiders-hacks/',
	'/rust-cheats-2026/': '/arc-raiders-hacks/',
	'/best-rust-cheats': '/arc-raiders-hacks/',
	'/best-rust-cheats/': '/arc-raiders-hacks/',
	'/rust-cheat-download': '/pricing/',
	'/rust-cheat-download/': '/pricing/',
	'/rust-mod-menu': '/features/',
	'/rust-mod-menu/': '/features/',
	'/rust-soft-aim': '/arc-raiders-aimbot/',
	'/rust-soft-aim/': '/arc-raiders-aimbot/',
	'/rust-aimbot-hack': '/arc-raiders-aimbot/',
	'/rust-aimbot-hack/': '/arc-raiders-aimbot/',
	'/rust-esp-hack': '/arc-raiders-esp/',
	'/rust-esp-hack/': '/arc-raiders-esp/',
	'/rust-unlock-all': '/features/',
	'/rust-unlock-all/': '/features/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
