export const siteConfig = {
	name: 'Arc Raiders Hacks',
	url: 'https://arcraidershacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@arcraidershacks.net',
	logo: '/images/zadeyo-logo.webp',
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 453,
	logoRasterHeight: 551,
	logoAlt: 'Arc Raiders Hacks logo',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Farc-raiders-cheats',
	defaultOgImage: '/images/arc-raiders-esp-overlay.webp',
} as const;

export const productInfo = {
	name: 'Arc Raiders Hacks',
	shortName: 'Arc',
	brand: 'Arc Raiders Hacks',
	tagline: 'Undetected Arc Raiders hacks for PC — ESP, aimbot, and wallhack with anti-cheat updates',
	summary:
		'Arc Raiders Hacks is a Windows PC package for ESP, aimbot, and wallhack in Arc Raiders. Built for extraction runs, ARC machine fights, and squad pushes with maintenance after anti-cheat patches.',
	game: 'Arc Raiders',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Arc Raiders or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Enemy raider ESP across extraction zones and collapsed districts',
			'ARC machine threat outlines before they breach your position',
			'Loot and container markers for faster extractions',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for squad fights',
		],
		aimbot: [
			'Aim assist for rifles, SMGs, and precision weapons',
			'Smoothness, FOV, and sensitivity controls',
			'Bone priority and target selection options',
			'Hotkey toggles mid-fight without opening menus',
			'Per-weapon profiles for long-range vs close fights',
		],
		radar: [
			'2D radar for raiders outside your line of sight',
			'Directional cues for flanks around ARC patrol routes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Arc Raiders patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Arc Raiders Hacks is live for Arc Raiders on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Arc Raiders Hacks', href: '/arc-raiders-hacks/' },
	{ label: 'Arc Raiders ESP', href: '/arc-raiders-esp/' },
	{ label: 'Arc Raiders Aimbot', href: '/arc-raiders-aimbot/' },
	{ label: 'Arc Raiders wallhack', href: '/arc-raiders-wallhack/' },
	{ label: 'Undetected status', href: '/arc-raiders-hacks/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/arc-raiders-hacks/' },
	{ label: 'Aimbot', href: '/arc-raiders-aimbot/' },
	{ label: 'ESP', href: '/arc-raiders-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Arc Raiders update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Arc Raiders Hacks', href: '/arc-raiders-hacks/' },
	{ label: 'ESP', href: '/arc-raiders-esp/' },
	{ label: 'Aimbot', href: '/arc-raiders-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is Arc Raiders Hacks?',
		answer:
			'Arc Raiders Hacks is a Windows PC package for Arc Raiders with ESP, wallhack, and aimbot controls. Licenses include anti-cheat maintenance updates and setup support.',
	},
	{
		question: 'Is Arc Raiders Hacks permanently undetected?',
		answer:
			'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
	},
	{
		question: 'Does this fit extraction and PvP runs?',
		answer:
			'Yes. ESP and radar help you read nearby raiders, ARC machines, and loot; aimbot covers the firefight. Tuned for solo and squad extraction play.',
	},
	{
		question: 'What is included?',
		answer:
			'Raider ESP, loot markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
	},
	{
		question: 'Where do I check updates after a patch?',
		answer:
			'On the Updates page. That is the fastest place to confirm whether a new build is live after an Arc Raiders or anti-cheat patch.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@arcraidershacks.net with your order details and a clear description of the issue.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		question: 'What is an Arc Raiders wallhack?',
		answer:
			'An Arc Raiders wallhack is an ESP overlay that shows enemy raiders and ARC threats through cover. Arc Raiders Hacks wallhack includes distance readouts, team colours, and toggleable categories for extraction and PvP.',
	},
	{
		question: 'Does Arc Raiders Hacks include a radar hack?',
		answer:
			'Yes. Arc Raiders Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during extraction pushes.',
	},
	{
		question: 'How does anti-cheat affect Arc Raiders Hacks?',
		answer:
			'Anti-cheat monitors Arc Raiders on Windows PC. Arc Raiders Hacks publishes maintenance notes after patches that may require a rebuild. Read the maintenance guide page for how updates are handled.',
	},
	{
		question: 'Can I buy undetected Arc Raiders hacks for Windows PC?',
		answer:
			'Yes — Arc Raiders Hacks sells monthly and lifetime licenses for Arc Raiders on Windows PC with ESP, radar, and aimbot. Compare plans on Pricing and review the undetected guide before checkout.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'xKrypt0_ARC',
		rating: 5,
		text: 'soft aim feels clean on smgs in arc raids. took me like 20 mins to figure out the menu tho lol. once u get it its smooth',
		short: 'soft aim feels clean on smgs in arc raids. once u get the menu its smooth',
		slug: 'arc-raiders-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_ARC — 5/5 | Arc Raiders Hacks',
		seoDescription:
			'Real Arc Raiders soft aim review from @xKrypt0_ARC: 5/5 for soft aim feel after setup on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	},
	{
		handle: 'extractR4K',
		rating: 4,
		text: "esp boxes in extraction zones are actually useful, can see who's holding rooftops before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for the price",
		short: "esp boxes in extraction zones are actually useful, can see who's holding rooftops before u push. still worth it for the price",
		slug: 'arc-raiders-esp-zero-build-review-buildsr4k',
		seoTitle: 'ESP Extraction Review by @extractR4K — 4/5 | Arc Raiders Hacks',
		seoDescription:
			'Arc Raiders ESP review from @extractR4K: 4/5 for ESP player boxes in extraction zones with radar feedback.',
		date: '2026-07-19',
		tag: 'Extraction',
	},
	{
		handle: 'dma_wizard',
		rating: 5,
		text: 'switched from a kernel only tool last season. cloud dma setup was easier than i expected, support walked me through the dma part on discord. survived the last patch while my old sub got flagged. lifetime was the move',
		short: 'cloud dma setup was easier than i expected. survived the last patch while my old sub got flagged',
		slug: 'arc-raiders-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA Review by @dma_wizard — 5/5 | Arc Raiders Hacks',
		seoDescription:
			'Cloud DMA Arc Raiders Hacks review from @dma_wizard: 5/5 after surviving a patch that flagged a kernel-only cheat.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	},
	{
		handle: 'ctrl_player99',
		rating: 4,
		text: "finally arc raiders hacks that don't feel like garbage on controller. soft aim with xbox pad works, had to tweak fov a bit. menu navigation with pad is kinda awkward but doable",
		short: "finally arc raiders hacks that don't feel like garbage on controller. soft aim with xbox pad works",
		slug: 'arc-raiders-controller-soft-aim-review-ctrl-player99',
		seoTitle: 'Controller Soft Aim by @ctrl_player99 — 4/5 | Arc Raiders Hacks',
		seoDescription:
			'Controller Arc Raiders hacks review from @ctrl_player99: 4/5 for soft aim on an Xbox pad with FOV tweaks.',
		date: '2026-07-11',
		tag: 'Controller',
	},
	{
		handle: 'stormChaser_07',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and loot markers solid in ranked, just wish setup docs were clearer upfront',
		slug: 'arc-raiders-hack-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | Arc Raiders Hacks',
		seoDescription:
			'Honest 3/5 Arc Raiders Hacks review from @stormChaser_07: ESP and loot markers solid in ranked, but setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	},
	{
		handle: 'lootGoblinx',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. container markers + distance readouts = way faster extractions',
		short: 'loot esp alone pays for monthly imo. container markers + distance readouts = way faster extractions',
		slug: 'arc-raiders-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | Arc Raiders Hacks',
		seoDescription:
			'Arc Raiders loot ESP review from @lootGoblinx: 5/5 for container markers and distance readouts on extraction runs.',
		date: '2026-08-01',
	},
	{
		handle: 'rankedGrind42',
		rating: 4,
		text: 'been using since early access. soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights. only complaint is updates page could show eta when patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights',
		slug: 'arc-raiders-soft-aim-ranked-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | Arc Raiders Hacks',
		seoDescription:
			'Ranked Arc Raiders soft aim review from @rankedGrind42: 4/5 for per-weapon aimbot profiles with patch-day update feedback.',
		date: '2026-07-07',
		tag: 'Ranked',
	},
	{
		handle: 'vanLifeARC',
		rating: 5,
		text: 'radar saved me so many times during extraction rotations. seeing the third party before they slide in is huge in squads. boxes + radar combo is clean',
		short: 'radar saved me so many times during extraction rotations. boxes + radar combo is clean',
		slug: 'arc-raiders-radar-hack-review-vanlifefn',
		seoTitle: 'Radar Hack Review by @vanLifeARC — 5/5 | Arc Raiders Hacks',
		seoDescription:
			'Arc Raiders radar hack review from @vanLifeARC: 5/5 for 2D radar during extraction rotations and spotting third parties in squads.',
		date: '2026-07-28',
		tag: 'Squads',
	},
	{
		handle: 'patchDayMike',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last patch. was back online next morning.',
		short: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours',
		slug: 'arc-raiders-eac-update-review-patchdaymike',
		seoTitle: 'Patch Day Review by @patchDayMike — 4/5 | Arc Raiders Hacks',
		seoDescription:
			'Patch-day review from @patchDayMike: 4/5 for how fast Arc Raiders Hacks posts maintenance updates after Arc Raiders patches.',
		date: '2026-06-09',
		tag: 'Updates',
	},
	{
		handle: 'snipezOnly_',
		rating: 5,
		text: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		short: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		slug: 'arc-raiders-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | Arc Raiders Hacks',
		seoDescription:
			'Arc Raiders sniper soft aim review from @snipezOnly_: 5/5 for the sniper aimbot profile paired with ESP tagging.',
		date: '2026-08-01',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
