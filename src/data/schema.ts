import { productInfo, siteConfig } from './site';
import type { PageId } from './i18n/routing';

const priceValidUntil = '2027-12-31';

export function buildAggregateOffer(canonicalURL: string) {
	return {
		'@type': 'AggregateOffer',
		lowPrice: Math.min(...productInfo.plans.map((p) => p.price)).toFixed(2),
		highPrice: Math.max(...productInfo.plans.map((p) => p.price)).toFixed(2),
		priceCurrency: productInfo.currency,
		offerCount: productInfo.plans.length,
		url: canonicalURL,
		offers: productInfo.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${productInfo.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: productInfo.currency,
			priceValidUntil,
			availability: 'https://schema.org/InStock',
			url: siteConfig.checkoutUrl,
			seller: { '@id': `${siteConfig.url}/#organization` },
		})),
	};
}

export function buildSoftwareApplicationSchema(canonicalURL: string, heroImage: string) {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${canonicalURL}#software`,
		name: productInfo.name,
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description: productInfo.summary,
		url: canonicalURL,
		image: heroImage,
		brand: { '@type': 'Brand', name: productInfo.brand },
		offers: buildAggregateOffer(canonicalURL),
	};
}

export function buildFaqSchemaNode(
	canonicalURL: string,
	faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
	return {
		'@type': 'FAQPage',
		'@id': `${canonicalURL}#faq`,
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: item.answer },
		})),
	};
}

/** Page-specific FAQ clusters for FAQ rich results on pillar landing pages. */
export const pageFaqClusters: Partial<
	Record<PageId, ReadonlyArray<{ question: string; answer: string }>>
> = {
	hacks: [
		{
			question: 'What are Rust Hacks?',
			answer:
				'Rust Hacks is a Windows PC package for Rust with ESP, wallhack, and aimbot controls. Licenses include EAC maintenance updates and setup support.',
		},
		{
			question: 'Are rust hacks permanently undetected?',
			answer:
				'No package can promise that. We rebuild after Easy Anti-Cheat and game patches and post status on Updates. Check there before you load in.',
		},
		{
			question: 'What is included in the rust hacks package?',
			answer:
				'Player ESP, loot markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
	],
	'rust-esp': [
		{
			question: 'What is a Rust wallhack?',
			answer:
				'A Rust wallhack is an ESP overlay that shows enemy players, vehicles, and loot through walls and terrain. Rust Hacks wallhack includes distance readouts, team colours, and toggleable categories for PVE and PVP.',
		},
		{
			question: 'Does Rust Hacks include a radar hack?',
			answer:
				'Yes. Rust Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during building fights and final-circle rotations.',
		},
		{
			question: 'Does this fit monument and raid play?',
			answer:
				'Yes. ESP and radar help you read nearby players and loot; aimbot covers the firefight. Tuned for PVE and PVP on the island.',
		},
	],
	'rust-aimbot': [
		{
			question: 'What is Rust soft aim?',
			answer:
				'Rust soft aim is configurable aim assist with smoothness, FOV, and bone priority controls. It ships bundled with ESP and radar in the Rust Hacks license for Windows PC.',
		},
		{
			question: 'Can I use Rust aimbot with a controller?',
			answer:
				'Yes. Rust Hacks supports controller play on Windows PC. Tune FOV and smoothness per weapon profile after setup.',
		},
		{
			question: 'Are rust hacks permanently undetected?',
			answer:
				'No package can promise that. We rebuild after Easy Anti-Cheat and game patches and post status on Updates. Check there before you load in.',
		},
	],
	pricing: [
		{
			question: 'How are rust hacks licenses delivered?',
			answer:
				'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
		},
		{
			question: 'What does the $35/month plan include?',
			answer:
				'The monthly license includes ESP, wallhack overlays, radar, and aimbot controls with EAC maintenance updates for Rust on Windows PC.',
		},
		{
			question: 'Is the $150 lifetime license worth it?',
			answer:
				'Lifetime pays off if you play Rust across multiple wipe cycles. It includes the same feature stack as monthly with long-term maintenance after EAC patches.',
		},
	],
	features: [
		{
			question: 'What is included in Rust Hacks?',
			answer:
				'Player ESP, loot markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
		{
			question: 'Does Rust Hacks work on Windows PC?',
			answer:
				'Yes — Rust Hacks is built for Rust on Windows 10 and 11 with in-client toggles for ESP, radar, and aimbot.',
		},
		{
			question: 'How does Easy Anti-Cheat (EAC) affect Rust hacks?',
			answer:
				'Facepunch Easy Anti-Cheat (EAC) monitors Rust on Windows PC. Rust Hacks publishes maintenance notes after patches that may require a rebuild. Read the EAC bypass guide page for how updates are handled.',
		},
	],
};

const schemaRichPages = new Set<PageId>([
	'hacks',
	'rust-esp',
	'rust-aimbot',
	'pricing',
	'features',
	'faq',
]);

export function buildPageExtraGraph(
	pageId: PageId,
	canonicalURL: string,
	heroImage: string,
	allFaqs: ReadonlyArray<{ question: string; answer: string }>,
): Record<string, unknown>[] {
	if (!schemaRichPages.has(pageId)) return [];

	const nodes: Record<string, unknown>[] = [];

	if (pageId !== 'faq') {
		nodes.push(buildSoftwareApplicationSchema(canonicalURL, heroImage));
	}

	const faqs =
		pageId === 'faq' ? allFaqs : (pageFaqClusters[pageId] ?? []);
	if (faqs.length > 0) {
		nodes.push(buildFaqSchemaNode(canonicalURL, faqs));
	}

	return nodes;
}
