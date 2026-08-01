export const siteConfig = {
	name: 'Fortnite Hacks',
	url: 'https://fortnitehack.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@fortnitehack.net',
	logo: '/images/zadeyo-logo.webp',
	// Raster logo for Google/schema.org (min 112x112 required; the webp is only 64x77)
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 453,
	logoRasterHeight: 551,
	logoAlt: 'Zadeyo',
	checkoutUrl: 'https://zadeyo.com/go/FDI?to=%2Fproducts%2Ffortnite',
	defaultOgImage: '/images/fortnite-cheats-cover.webp',
} as const;

export const productInfo = {
	name: 'Fortnite Hacks',
	shortName: 'Fortnite',
	brand: 'Fortnite Hacks',
	tagline: 'Undetected Fortnite hacks — ESP, soft aim, boxes and cloud DMA for PC and controllers',
	summary:
		'Fortnite Hacks is an undetected package for PC and controllers in 2026. ESP player boxes, soft aim, 2D radar, and cloud DMA help you read enemy squads, track loot across Battle Royale and Zero Build, and stay ready during reboot rotations — with EAC maintenance after patches. Also searched as fortnite cheats and fortnite cheats 2026.',
	game: 'Fortnite',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Fortnite or Easy Anti-Cheat (EAC) patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Enemy player ESP wallhack for squads across Battle Royale island, Zero Build, and competitive lobbies',
			'Vehicle, supply drop, and threat outline cues before enemy squads push your position',
			'Loot, chest, and loot chest markers for faster BR rotations',
			'Distance readouts and snapline options for engagement range control',
			'Toggleable ESP categories so only BR-critical wallhack overlays stay active',
			'Team and enemy colour coding for Zero Build and Battle Royale lobbies',
		],
		aimbot: [
			'Undetected-style aim assist for assault rifles, SMGs, and snipers in Fortnite firefights',
			'Smoothness, FOV, and sensitivity controls tuned for Fortnite combat pace',
			'Bone priority and target options for closest, lowest health, or highest-threat players',
			'Hotkey toggles to enable or disable Aimbot mid-match without opening menus',
			'Per-weapon profile slots for long-range AR versus close-quarters SMG fights',
		],
		radar: [
			'2D radar overlay for nearby players outside your direct line of sight',
			'Directional threat cues to read flanks during building and rooftop fights',
			'Configurable radar range for early rotation and final-circle positioning',
		],
		general: [
			'In-client toggles for ESP, radar, and Aimbot during live Fortnite sessions',
			'Monthly and lifetime licenses for undetected Fortnite hacks packages',
			'EAC maintenance notes posted when Fortnite updates need rebuilds',
			'Setup, delivery, and billing support for Fortnite licenses',
		],
	},
} as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Fortnite Hacks package is live for Fortnite on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'EAC maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Fortnite hacks', href: '/fortnite-hacks/' },
	{ label: 'Undetected Fortnite hacks', href: '/undetected-fortnite-cheats/' },
	{ label: 'Fortnite wallhack ESP', href: '/fortnite-wallhack/' },
	{ label: 'Fortnite radar hack', href: '/fortnite-radar-hack/' },
	{ label: 'EAC bypass guide', href: '/eac-bypass-fortnite/' },
	{ label: 'Fortnite cheats 2026', href: '/fortnite-cheats-2026/' },
	{ label: 'Fortnite aimbot', href: '/fortnite-aimbot/' },
	{ label: 'Fortnite ESP', href: '/fortnite-esp/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/fortnite-hacks/' },
	{ label: 'Aimbot', href: '/fortnite-aimbot/' },
	{ label: 'ESP', href: '/fortnite-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Fortnite hack update log', href: '/updates/' },
	{ label: 'Contact Fortnite Hacks support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Fortnite Hacks home', href: '/' },
	{ label: 'Fortnite hacks pillar', href: '/fortnite-hacks/' },
	{ label: 'Undetected Fortnite hacks', href: '/undetected-fortnite-cheats/' },
	{ label: 'Fortnite wallhack ESP', href: '/fortnite-wallhack/' },
	{ label: 'Fortnite radar hack', href: '/fortnite-radar-hack/' },
	{ label: 'EAC bypass guide', href: '/eac-bypass-fortnite/' },
	{ label: 'Fortnite cheats 2026', href: '/fortnite-cheats-2026/' },
	{ label: 'Fortnite Aimbot controls', href: '/fortnite-aimbot/' },
	{ label: 'Fortnite ESP overlays', href: '/fortnite-esp/' },
	{ label: 'Full Fortnite hack feature list', href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: 'Fortnite hack setup guide', href: '/setup/' },
	{ label: 'Fortnite hacks FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What are Fortnite Hacks?',
		answer:
			'Fortnite Hacks is an undetected cheat package for Fortnite on Windows PC — also searched as fortnite cheats. It includes ESP wallhack for enemy players, vehicles, and loot, 2D radar-style awareness, plus Aimbot controls for Fortnite combat. Packages include EAC maintenance updates and support for setup questions.',
	},
	{
		question: 'Are Fortnite hacks undetected in 2026?',
		answer:
			'Fortnite Hacks is maintained for Fortnite with rebuilds after Easy Anti-Cheat (EAC) and game patches. Check the Updates page for the latest status before you queue. No hack or cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	{
		question: 'Does this work with Battle Royale and Zero Build modes?',
		answer:
			'Yes. The ESP wallhack, radar overlays, and Aimbot tools are built for Fortnite\'s BR loop: reading enemy squads, spotting loot and chests, and staying aware during reboot van rotations and endgame storms on Battle Royale island and Zero Build.',
	},
	{
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'Fortnite Hacks bundles player ESP wallhack, loot and chest markers, 2D radar-style threat cues, and configurable Aimbot in one license. See the Features, ESP, Aimbot, wallhack, hacks, and radar pages for the full control list.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, Fortnite Hacks license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	{
		question: 'Where do I check updates after a Fortnite or EAC patch?',
		answer:
			'Maintenance notes are posted on the Updates page when a Fortnite patch or Easy Anti-Cheat (EAC) update affects package behavior. That is the fastest place to confirm whether a new Fortnite Hacks build is live.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@fortnitehack.net. Include your order details, package length, and a clear description of the Fortnite setup issue so replies can be faster.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		question: 'What is a Fortnite wallhack?',
		answer:
			'A Fortnite wallhack is an ESP overlay that shows enemy players, vehicles, and loot through walls and terrain. Fortnite Hacks wallhack includes distance readouts, team colours, and toggleable categories for BR and Zero Build.',
	},
	{
		question: 'Does Fortnite Hacks include a radar hack?',
		answer:
			'Yes. Fortnite Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during building fights and final-circle rotations.',
	},
	{
		question: 'How does Easy Anti-Cheat (EAC) affect Fortnite hacks?',
		answer:
			'Epic Games\' Easy Anti-Cheat (EAC) monitors Fortnite on Windows PC. Fortnite Hacks publishes maintenance notes after patches that may require a rebuild. Read the EAC bypass guide page for how updates are handled.',
	},
	{
		question: 'Can I buy undetected Fortnite cheats for Windows PC?',
		answer:
			'Yes — Fortnite Hacks sells monthly and lifetime licenses for Fortnite on Windows PC with ESP, radar, and Aimbot (the same stack players call fortnite cheats). Compare plans on Pricing and review the undetected guide before checkout.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	/** Full review body — shown on the review detail page and used for schema.org reviewBody. */
	text: string;
	/** Trimmed 1–2 sentence version shown on homepage cards. Same tone as `text`. */
	short: string;
	/** URL slug for the review detail page: /reviews/{slug}/ */
	slug: string;
	/** Unique <title> for the review detail page. */
	seoTitle: string;
	/** Unique meta description for the review detail page. */
	seoDescription: string;
	/** ISO date (YYYY-MM-DD) — used as-is for schema.org datePublished; UI formats it for display. */
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'xKrypt0_FN',
		rating: 5,
		text: 'soft aim on hammer ar feels cracked ngl. took me like 20 mins to figure out the menu tho lol. once u get it its smooth',
		short: 'soft aim on hammer ar feels cracked ngl. once u get the menu its smooth',
		slug: 'fortnite-soft-aim-review-xkrypt0',
		seoTitle: 'Fortnite Soft Aim Review by @xKrypt0_FN — 5/5 Hammer AR | Fortnite Hacks',
		seoDescription:
			'Real Fortnite soft aim review from @xKrypt0_FN: 5/5 for the hammer AR soft aim in Fortnite Hacks. How the aimbot menu feels after setup on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	},
	{
		handle: 'buildsR4K',
		rating: 4,
		text: "esp boxes in zero build are actually useful, can see who's holding height before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for the price",
		short: "esp boxes in zero build are actually useful, can see who's holding height before u push. still worth it for the price",
		slug: 'fortnite-esp-zero-build-review-buildsr4k',
		seoTitle: 'Fortnite ESP Review by @buildsR4K — 4/5 Zero Build Boxes | Fortnite Hacks',
		seoDescription:
			'Fortnite ESP review from @buildsR4K: 4/5 for ESP player boxes in Zero Build with radar feedback. Honest take on undetected Fortnite hacks pricing and value.',
		date: '2026-07-19',
		tag: 'Zero Build',
	},
	{
		handle: 'dma_wizard',
		rating: 5,
		text: 'switched from a kernel only tool last season. cloud dma setup was easier than i expected, support walked me through the dma part on discord. survived the last eac update while my old sub got flagged. lifetime was the move',
		short: 'cloud dma setup was easier than i expected. survived the last eac update while my old sub got flagged',
		slug: 'fortnite-cloud-dma-review-dma-wizard',
		seoTitle: 'Fortnite Cloud DMA Review by @dma_wizard — 5/5 Undetected | Fortnite Hacks',
		seoDescription:
			'Cloud DMA Fortnite hacks review from @dma_wizard: 5/5 after surviving an EAC update that flagged a kernel-only cheat. Setup help and lifetime license experience.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	},
	{
		handle: 'ctrl_player99',
		rating: 4,
		text: "finally a fn cheat that doesn't feel like garbage on controller. soft aim with xbox pad works, had to tweak fov a bit. menu navigation with pad is kinda awkward but doable",
		short: "finally a fn cheat that doesn't feel like garbage on controller. soft aim with xbox pad works",
		slug: 'fortnite-controller-soft-aim-review-ctrl-player99',
		seoTitle: 'Fortnite Controller Soft Aim Review by @ctrl_player99 — 4/5 | Fortnite Hacks',
		seoDescription:
			'Controller Fortnite cheats review from @ctrl_player99: 4/5 for soft aim on an Xbox pad, FOV tweaks, and menu navigation in the Fortnite Hacks package.',
		date: '2026-07-11',
		tag: 'Controller',
	},
	{
		handle: 'stormChaser_07',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		slug: 'fortnite-hack-setup-review-stormchaser07',
		seoTitle: 'Fortnite Hack Setup Review by @stormChaser_07 — 3/5 Honest Take | Fortnite Hacks',
		seoDescription:
			'Honest 3/5 Fortnite hacks review from @stormChaser_07: ESP and loot markers solid in ranked, but first launch and setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	},
	{
		handle: 'lootGoblinx',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. chest markers + distance readouts = way faster off spawn',
		short: 'loot esp alone pays for monthly imo. chest markers + distance readouts = way faster off spawn',
		slug: 'fortnite-loot-esp-review-lootgoblinx',
		seoTitle: 'Fortnite Loot ESP Review by @lootGoblinx — 5/5 Chest Markers | Fortnite Hacks',
		seoDescription:
			'Fortnite loot ESP review from @lootGoblinx: 5/5 for chest markers and distance readouts off spawn. Why loot ESP alone justifies the monthly Fortnite hacks license.',
		date: '2026-08-01',
	},
	{
		handle: 'rankedGrind42',
		rating: 4,
		text: 'been using since chapter 7 s2. soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights. only complaint is updates page could show eta when eac patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights',
		slug: 'fortnite-soft-aim-ranked-review-rankedgrind42',
		seoTitle: 'Fortnite Ranked Soft Aim Review by @rankedGrind42 — 4/5 | Fortnite Hacks',
		seoDescription:
			'Ranked Fortnite soft aim review from @rankedGrind42: 4/5 for per-weapon aimbot profiles since Chapter 7 Season 2, with feedback on EAC patch-day updates.',
		date: '2026-07-07',
		tag: 'Ranked',
	},
	{
		handle: 'vanLifeFN',
		rating: 5,
		text: 'radar saved me so many times during reboot van rotations. seeing the third party before they slide in is huge in squads. boxes + radar combo is clean',
		short: 'radar saved me so many times during reboot van rotations. boxes + radar combo is clean',
		slug: 'fortnite-radar-hack-review-vanlifefn',
		seoTitle: 'Fortnite Radar Hack Review by @vanLifeFN — 5/5 Squads | Fortnite Hacks',
		seoDescription:
			'Fortnite radar hack review from @vanLifeFN: 5/5 for 2D radar during reboot van rotations and spotting third parties in squads with ESP boxes.',
		date: '2026-07-28',
		tag: 'Squads',
	},
	{
		handle: 'patchDayMike',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last patch. was back online next morning. elitefn left me hanging for 4 days once so yeah',
		short: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours',
		slug: 'fortnite-eac-update-review-patchdaymike',
		seoTitle: 'Fortnite EAC Update Review by @patchDayMike — 4/5 Patch Days | Fortnite Hacks',
		seoDescription:
			'EAC patch-day review from @patchDayMike: 4/5 for how fast Fortnite Hacks posts maintenance updates and gets the undetected cheat back online after patches.',
		date: '2026-06-09',
		tag: 'EAC updates',
	},
	{
		handle: 'snipezOnly_',
		rating: 5,
		text: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		short: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		slug: 'fortnite-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Fortnite Sniper Soft Aim Review by @snipezOnly_ — 5/5 ESP Combo | Fortnite Hacks',
		seoDescription:
			'Fortnite sniper soft aim review from @snipezOnly_: 5/5 for the sniper aimbot profile paired with ESP tagging in the Fortnite Hacks package.',
		date: '2026-08-01',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
