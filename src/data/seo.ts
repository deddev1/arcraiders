/**
 * Site-wide SEO keyword cluster — optimized for arcraidershacks.net
 */
export const primaryKeyword = 'Arc Raiders Hacks';

export const siteBrand = 'ArcRaiders Hacks';
export const siteDomain = 'arcraidershacks.net';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Arc Raiders Hacks',
	'arc raiders cheats',
	'arc raiders esp',
	'arc raiders aimbot',
	'arc raiders wallhack',
	'undetected arc raiders hacks',
	'arc raiders hacks 2026',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Arc Raiders Hacks 2026 | Undetected ESP & Aimbot';
export const defaultDescription =
	'Arc Raiders hacks for PC — undetected ESP, aimbot, and wallhack at arcraidershacks.net. Monthly and lifetime plans, setup guides, and anti-cheat update status.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Arc Raiders Hacks`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | arcraidershacks.net`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('arc raiders')) return lead.slice(0, 160);
	return `Arc Raiders hacks — ${lead}`.slice(0, 160);
}
