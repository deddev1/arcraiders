export const siteConfig = {
	name: 'Rust Hacks',
	url: 'https://rusthacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@rusthacks.net',
	logo: '/images/zadeyo-logo.webp',
	// Raster logo for Google/schema.org (min 112x112 required; the webp is only 64x77)
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 453,
	logoRasterHeight: 551,
	logoAlt: 'Rust Hacks logo',
	checkoutUrl: 'https://zadeyo.com/go/FDI?to=%2Fproducts%2Frust',
	defaultOgImage: '/images/rust-hacks-cover.webp',
} as const;

export const productInfo = {
	name: 'Rust Hacks',
	shortName: 'Rust',
	brand: 'Rust Hacks',
	tagline: 'Undetected rust hacks for PC — ESP, aimbot, and wallhack with EAC updates',
	summary:
		'Rust Hacks is a Windows PC package for ESP, aimbot, and wallhack on Rust. Built for monument fights and wipe-cycle raids, with maintenance after Easy Anti-Cheat patches.',
	game: 'Rust',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Rust or Easy Anti-Cheat (EAC) patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Enemy player ESP across monuments, oil rigs, and wipe-cycle raids',
			'Threat outline cues before squads push your compound',
			'Loot and container markers for faster rotations',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for raids',
		],
		aimbot: [
			'Aim assist for rifles, SMGs, and snipers',
			'Smoothness, FOV, and sensitivity controls',
			'Bone priority and target selection options',
			'Hotkey toggles mid-fight without opening menus',
			'Per-weapon profiles for long-range vs close fights',
		],
		radar: [
			'2D radar for players outside your line of sight',
			'Directional cues for flanks around bases and monuments',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'EAC maintenance notes after Rust patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Rust Hacks is live for Rust on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'EAC maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Rust hacks', href: '/rust-hacks/' },
	{ label: 'Rust ESP', href: '/rust-esp/' },
	{ label: 'Rust Aimbot', href: '/rust-aimbot/' },
	{ label: 'Rust wallhack', href: '/rust-wallhack/' },
	{ label: 'Undetected status', href: '/undetected-rust-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/rust-hacks/' },
	{ label: 'Aimbot', href: '/rust-aimbot/' },
	{ label: 'ESP', href: '/rust-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Rust hack update log', href: '/updates/' },
	{ label: 'Contact Rust Hacks support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Rust hacks', href: '/rust-hacks/' },
	{ label: 'ESP', href: '/rust-esp/' },
	{ label: 'Aimbot', href: '/rust-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
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
		question: 'Does this fit monument and raid play?',
		answer:
			'Yes. ESP and radar help you read nearby players and loot; aimbot covers the firefight. Tuned for PVE and PVP on the island.',
	},
	{
		question: 'What is included?',
		answer:
			'Player ESP, loot markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
	},
	{
		question: 'Where do I check updates after a patch?',
		answer:
			'On the Updates page. That is the fastest place to confirm whether a new build is live after a Rust or EAC patch.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@rusthacks.net with your order details and a clear description of the issue.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
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
		question: 'How does Easy Anti-Cheat (EAC) affect Rust hacks?',
		answer:
			'Facepunch\' Easy Anti-Cheat (EAC) monitors Rust on Windows PC. Rust Hacks publishes maintenance notes after patches that may require a rebuild. Read the EAC bypass guide page for how updates are handled.',
	},
	{
		question: 'Can I buy undetected Rust cheats for Windows PC?',
		answer:
			'Yes — Rust Hacks sells monthly and lifetime licenses for Rust on Windows PC with ESP, radar, and Aimbot (the same stack players call rust cheats). Compare plans on Pricing and review the undetected guide before checkout.',
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
		slug: 'rust-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_FN — 5/5 | Rust Hacks',
		seoDescription:
			'Real Rust soft aim review from @xKrypt0_FN: 5/5 for the hammer AR soft aim in Rust Hacks. How the aimbot menu feels after setup on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	},
	{
		handle: 'buildsR4K',
		rating: 4,
		text: "esp boxes in zero build are actually useful, can see who's holding height before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for the price",
		short: "esp boxes in zero build are actually useful, can see who's holding height before u push. still worth it for the price",
		slug: 'rust-esp-zero-build-review-buildsr4k',
		seoTitle: 'ESP monuments Review by @buildsR4K — 4/5 | Rust Hacks',
		seoDescription:
			'Rust ESP review from @buildsR4K: 4/5 for ESP player boxes in monuments with radar feedback. Honest take on undetected Rust hacks pricing and value.',
		date: '2026-07-19',
		tag: 'monuments',
	},
	{
		handle: 'dma_wizard',
		rating: 5,
		text: 'switched from a kernel only tool last season. cloud dma setup was easier than i expected, support walked me through the dma part on discord. survived the last eac update while my old sub got flagged. lifetime was the move',
		short: 'cloud dma setup was easier than i expected. survived the last eac update while my old sub got flagged',
		slug: 'rust-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA Review by @dma_wizard — 5/5 | Rust Hacks',
		seoDescription:
			'Cloud DMA Rust hacks review from @dma_wizard: 5/5 after surviving an EAC update that flagged a kernel-only cheat. Setup help and lifetime license experience.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	},
	{
		handle: 'ctrl_player99',
		rating: 4,
		text: "finally a fn cheat that doesn't feel like garbage on controller. soft aim with xbox pad works, had to tweak fov a bit. menu navigation with pad is kinda awkward but doable",
		short: "finally a fn cheat that doesn't feel like garbage on controller. soft aim with xbox pad works",
		slug: 'rust-controller-soft-aim-review-ctrl-player99',
		seoTitle: 'Controller Soft Aim by @ctrl_player99 — 4/5 | Rust Hacks',
		seoDescription:
			'Controller Rust cheats review from @ctrl_player99: 4/5 for soft aim on an Xbox pad, FOV tweaks, and menu navigation in the Rust Hacks package.',
		date: '2026-07-11',
		tag: 'Controller',
	},
	{
		handle: 'stormChaser_07',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		slug: 'rust-hack-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | Rust Hacks',
		seoDescription:
			'Honest 3/5 Rust hacks review from @stormChaser_07: ESP and loot markers solid in ranked, but first launch and setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	},
	{
		handle: 'lootGoblinx',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. chest markers + distance readouts = way faster off spawn',
		short: 'loot esp alone pays for monthly imo. chest markers + distance readouts = way faster off spawn',
		slug: 'rust-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | Rust Hacks',
		seoDescription:
			'Rust loot ESP review from @lootGoblinx: 5/5 for chest markers and distance readouts off spawn. Why loot ESP alone justifies the monthly Rust hacks license.',
		date: '2026-08-01',
	},
	{
		handle: 'rankedGrind42',
		rating: 4,
		text: 'been using since chapter 7 s2. soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights. only complaint is updates page could show eta when eac patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights',
		slug: 'rust-soft-aim-ranked-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | Rust Hacks',
		seoDescription:
			'Ranked Rust soft aim review from @rankedGrind42: 4/5 for per-weapon aimbot profiles since Chapter 7 Season 2, with feedback on EAC patch-day updates.',
		date: '2026-07-07',
		tag: 'Ranked',
	},
	{
		handle: 'vanLifeFN',
		rating: 5,
		text: 'radar saved me so many times during monument rotations. seeing the third party before they slide in is huge in squads. boxes + radar combo is clean',
		short: 'radar saved me so many times during monument rotations. boxes + radar combo is clean',
		slug: 'rust-radar-hack-review-vanlifefn',
		seoTitle: 'Radar Hack Review by @vanLifeFN — 5/5 | Rust Hacks',
		seoDescription:
			'Rust radar hack review from @vanLifeFN: 5/5 for 2D radar during monument rotations and spotting third parties in squads with ESP boxes.',
		date: '2026-07-28',
		tag: 'Squads',
	},
	{
		handle: 'patchDayMike',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last patch. was back online next morning. elitefn left me hanging for 4 days once so yeah',
		short: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours',
		slug: 'rust-eac-update-review-patchdaymike',
		seoTitle: 'EAC Patch Review by @patchDayMike — 4/5 | Rust Hacks',
		seoDescription:
			'EAC patch-day review from @patchDayMike: 4/5 for how fast Rust Hacks posts maintenance updates and gets the undetected cheat back online after patches.',
		date: '2026-06-09',
		tag: 'EAC updates',
	},
	{
		handle: 'snipezOnly_',
		rating: 5,
		text: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		short: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		slug: 'rust-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | Rust Hacks',
		seoDescription:
			'Rust sniper soft aim review from @snipezOnly_: 5/5 for the sniper aimbot profile paired with ESP tagging in the Rust Hacks package.',
		date: '2026-08-01',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
