export const siteConfig = {
	name: 'Fortnite Cheats',
	url: 'https://fortnitecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@fortnitecheats.net',
	logo: '/images/zadeyo-logo.webp',
	logoAlt: 'Zadeyo',
	checkoutUrl: 'https://zadeyo.com/go/FDI?to=%2Fproducts%2Ffortnite',
	defaultOgImage: '/images/fortnite-cheats-cover.webp',
} as const;

export const productInfo = {
	name: 'Fortnite Cheats',
	shortName: 'Fortnite',
	brand: 'Fortnite Cheats',
	tagline: 'Undetected ESP, Aimbot and Wallhack for Fortnite Battle Royale',
	summary:
		'Fortnite Cheats is an undetected Windows PC cheat package built for Fortnite in 2026. It combines ESP wallhack, 2D radar-style awareness, and Aimbot tools so players can spot enemy squads, track loot and chests across Battle Royale island and Zero Build, and stay ready during reboot van rotations and endgame storms — with maintenance after Easy Anti-Cheat (EAC) patches.',
	game: 'Fortnite',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC'],
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
			'Monthly and lifetime licenses for undetected Fortnite Cheats packages',
			'EAC maintenance notes posted when Fortnite updates need rebuilds',
			'Setup, delivery, and billing support for Fortnite licenses',
		],
	},
} as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Fortnite Cheats package is live for Fortnite on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'EAC maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Undetected Fortnite cheats', href: '/undetected-fortnite-cheats/' },
	{ label: 'Fortnite wallhack ESP', href: '/fortnite-wallhack/' },
	{ label: 'Fortnite radar hack', href: '/fortnite-radar-hack/' },
	{ label: 'EAC bypass guide', href: '/eac-bypass-fortnite/' },
	{ label: 'Fortnite cheats 2026', href: '/fortnite-cheats-2026/' },
	{ label: 'Fortnite aimbot', href: '/fortnite-aimbot/' },
	{ label: 'Fortnite ESP', href: '/fortnite-esp/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Aimbot', href: '/fortnite-aimbot/' },
	{ label: 'ESP', href: '/fortnite-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Fortnite cheat update log', href: '/updates/' },
	{ label: 'Contact Fortnite Cheats support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Fortnite Cheats home', href: '/' },
	{ label: 'Undetected Fortnite cheats', href: '/undetected-fortnite-cheats/' },
	{ label: 'Fortnite wallhack ESP', href: '/fortnite-wallhack/' },
	{ label: 'Fortnite radar hack', href: '/fortnite-radar-hack/' },
	{ label: 'EAC bypass guide', href: '/eac-bypass-fortnite/' },
	{ label: 'Fortnite cheats 2026', href: '/fortnite-cheats-2026/' },
	{ label: 'Fortnite Aimbot controls', href: '/fortnite-aimbot/' },
	{ label: 'Fortnite ESP overlays', href: '/fortnite-esp/' },
	{ label: 'Full Fortnite cheat feature list', href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: 'Fortnite cheat setup guide', href: '/setup/' },
	{ label: 'Fortnite cheats FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is Fortnite Cheats?',
		answer:
			'Fortnite Cheats is an undetected cheat package for Fortnite on Windows PC. It includes ESP wallhack for enemy players, vehicles, and loot, 2D radar-style awareness, plus Aimbot controls for Fortnite combat. Packages include EAC maintenance updates and support for setup questions.',
	},
	{
		question: 'Are Fortnite Cheats undetected in 2026?',
		answer:
			'Fortnite Cheats is maintained for Fortnite with rebuilds after Easy Anti-Cheat (EAC) and game patches. Check the Updates page for the latest status before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	{
		question: 'Does this work with Battle Royale and Zero Build modes?',
		answer:
			'Yes. The ESP wallhack, radar overlays, and Aimbot tools are built for Fortnite\'s BR loop: reading enemy squads, spotting loot and chests, and staying aware during reboot van rotations and endgame storms on Battle Royale island and Zero Build.',
	},
	{
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'Fortnite Cheats bundles player ESP wallhack, loot and chest markers, 2D radar-style threat cues, and configurable Aimbot in one license. See the Features, ESP, Aimbot, wallhack, and radar pages for the full control list.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, Fortnite Cheats license details are delivered digitally through Zadeyo checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	{
		question: 'Where do I check updates after a Fortnite or EAC patch?',
		answer:
			'Maintenance notes are posted on the Updates page when a Fortnite patch or Easy Anti-Cheat (EAC) update affects package behavior. That is the fastest place to confirm whether a new Fortnite Cheats build is live.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@fortnitecheats.net. Include your order details, package length, and a clear description of the Fortnite setup issue so replies can be faster.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		question: 'What is a Fortnite wallhack?',
		answer:
			'A Fortnite wallhack is an ESP overlay that shows enemy players, vehicles, and loot through walls and terrain. Fortnite Cheats wallhack includes distance readouts, team colours, and toggleable categories for BR and Zero Build.',
	},
	{
		question: 'Does Fortnite Cheats include a radar hack?',
		answer:
			'Yes. Fortnite Cheats includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during building fights and final-circle rotations.',
	},
	{
		question: 'How does Easy Anti-Cheat (EAC) affect Fortnite cheats?',
		answer:
			'Epic Games\' Easy Anti-Cheat (EAC) monitors Fortnite on Windows PC. Fortnite Cheats publishes maintenance notes after patches that may require a rebuild. Read the EAC bypass guide page for how updates are handled.',
	},
	{
		question: 'Can I buy undetected Fortnite cheats for Windows PC?',
		answer:
			'Fortnite Cheats sells monthly and lifetime licenses for Fortnite on Windows PC with ESP, radar, and Aimbot. Compare plans on Pricing and review the undetected Fortnite cheats page before checkout.',
	},
] as const;
