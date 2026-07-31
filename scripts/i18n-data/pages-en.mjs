import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Fortnite Cheats 2026 | Undetected ESP, Wallhack & Aimbot',
		description: 'Undetected Fortnite cheats for Fortnite on Windows PC. ESP wallhack, radar hack, and Aimbot with EAC maintenance. Instant digital delivery.',
		h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot',
		intro: 'Fortnite Cheats is an undetected Windows PC package for Fortnite. ESP wallhack, 2D radar-style awareness, and Aimbot controls — with EAC maintenance after every major patch.',
		imageAlt: 'Fortnite cheats hero with ESP wallhack and Aimbot for undetected PC package',
		galleryTitle: 'Fortnite Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Fortnite Cheats in 2026',
				'Fortnite rewards map awareness. Fortnite Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on Battle Royale island, Zero Build, and competitive lobbies.',
				'Licenses ship digitally through Zadeyo checkout after payment confirmation. Monthly and lifetime plans include EAC maintenance rebuilds when anti-cheat or game patches require updates.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Fortnite Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for BR and Zero Build.',
				'Browse the <a href="/fortnite-esp/">ESP</a>, <a href="/fortnite-aimbot/">Aimbot</a>, <a href="/fortnite-wallhack/">wallhack</a>, and <a href="/fortnite-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly ($35) and lifetime ($150) options.',
			),
		],
	},
	'fortnite-esp': {
		title: 'Fortnite ESP 2026 | Undetected Wallhack for Fortnite',
		description: 'Fortnite ESP wallhack for Fortnite. Player outlines, loot markers, distance readouts. Undetected Windows PC cheat with EAC maintenance.',
		h1: 'Fortnite ESP — Undetected Wallhack for Fortnite',
		intro: 'Visibility tools for Fortnite. Read enemy squads, vehicles, loot, chests, and distance before you commit to a fight — with toggleable ESP wallhack overlays for BR and Zero Build.',
		imageAlt: 'Fortnite cheats ESP wallhack player overlay — fortnite-cheats visibility preview',
		galleryTitle: 'Fortnite ESP overlay visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Fortnite wallhack guide',
		ctaSecondaryHref: '/fortnite-wallhack/',
		sections: [
			section(
				'What Fortnite ESP solves in battle royale',
				'Fortnite maps punish incomplete information. Fortnite Cheats ESP wallhack helps you spot enemy squads early, notice vehicles before they push your position, and mark chests or loot chests worth the detour.',
				'On Battle Royale island, Zero Build, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP is bundled with radar overlays and Aimbot in one license.',
			),
			section(
				'Player, vehicle, and loot ESP wallhack categories',
				'Toggle enemy player outlines, vehicle threat cues, supply drop-style awareness markers, and loot or chest pins so only BR-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Zero Build and Battle Royale lobbies alike.',
			),
			section(
				'Undetected ESP with EAC maintenance',
				'Fortnite Cheats ESP wallhack is maintained for Fortnite with rebuilds after Easy Anti-Cheat (EAC) patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				'Checkout runs through Zadeyo with instant digital delivery for Windows 10 and 11 PCs.',
			),
		],
	},
	'fortnite-aimbot': {
		title: 'Fortnite Aimbot 2026 | Undetected Aim Assist for Fortnite',
		description: 'Fortnite Aimbot for Fortnite on Windows PC. Smooth aim assist, FOV, bone priority and hotkeys. Undetected package with EAC maintenance.',
		h1: 'Fortnite Aimbot — Undetected Aim Assist Controls',
		intro: 'Configurable Aimbot tools for Fortnite firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Fortnite cheats Aimbot combat — undetected aim assist for Fortnite PC',
		galleryTitle: 'Fortnite Aimbot combat previews',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/fortnite-esp/',
		sections: [
			section(
				'Aimbot tuned for Fortnite combat pace',
				'Fortnite mixes long-range AR fights with close-quarters SMG pushes. Fortnite Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and respawn rounds.',
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for assault rifles, SMGs, and snipers. Switch between long-range long-range AR beams and close-quarters room clears without reopening menus every spawn.',
				'Aimbot ships alongside ESP wallhack and 2D radar overlays in the same Fortnite Cheats license — checkout via Zadeyo.',
			),
			section(
				'EAC maintenance for undetected Aimbot',
				'Fortnite Cheats rebuilds Aimbot behavior when Easy Anti-Cheat (EAC) or major Fortnite patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				'Responsible settings and patch awareness matter — undetected status requires ongoing maintenance, not set-and-forget configs.',
			),
		],
	},
	features: {
		title: 'Fortnite Cheats Features | ESP, Radar, Aimbot & More',
		description: 'Full Fortnite Cheats feature list: ESP wallhack, radar hack, Aimbot, loot markers, and toggles. Undetected package for Fortnite on Windows PC.',
		h1: 'Fortnite Cheats Features — Full Control List',
		intro: 'Every ESP wallhack, radar hack, and Aimbot control included in the Fortnite Cheats package for Fortnite on Windows PC — with EAC maintenance and Zadeyo checkout.',
		imageAlt: 'Fortnite cheats package features — fortnite-cheats ESP wallhack and Aimbot bundle',
		galleryTitle: 'Fortnite Cheats feature gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, vehicle and supply drop threat cues, loot and chest markers, distance readouts, snaplines, and toggleable ESP categories for BR-critical overlays only.',
				'Team and enemy colour coding supports Zero Build and Battle Royale across Battle Royale island, Zero Build, and competitive lobbies.',
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and final circles, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Fortnite sessions.',
			),
			section(
				'Licensing, delivery, and EAC maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery through Zadeyo. EAC maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				'Setup and billing support is available through the <a href="/support/">Support page</a> and support@fortnitecheats.net.',
			),
		],
	},
	pricing: {
		title: 'Fortnite Cheats Pricing | $35/mo or $150 Lifetime',
		description: 'Fortnite Cheats pricing: $35/month or $150 lifetime for undetected ESP wallhack, radar hack, and Aimbot. Instant checkout for Fortnite PC.',
		h1: 'Fortnite Cheats Pricing — Monthly & Lifetime',
		intro: 'Choose monthly or lifetime access to undetected Fortnite Cheats — ESP wallhack, radar hack, and Aimbot for Fortnite on Windows PC. Checkout via Zadeyo with instant digital delivery.',
		imageAlt: 'Fortnite cheats pricing cover — fortnite-cheats package ESP and Aimbot',
		galleryTitle: 'Fortnite Cheats package visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Fortnite Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with EAC maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Fortnite Cheats package — ideal if you play Fortnite regularly across seasons.',
			),
			section(
				'What every plan includes',
				'Both plans include player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat (EAC) or major Fortnite patches.',
				'Digital delivery starts after Zadeyo payment confirmation. Keep your order reference for Support requests.',
			),
			section(
				'Refund and billing questions',
				'Review the Refund Policy before purchase. For billing or delivery issues, contact Support with your Zadeyo order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
			),
		],
	},
	setup: {
		title: 'Fortnite Cheats Setup Guide | Install on Windows PC',
		description: 'Fortnite Cheats setup for Fortnite on Windows PC. License activation, ESP toggles, Aimbot profiles, and Easy Anti-Cheat (EAC) update checks before queueing.',
		h1: 'Fortnite Cheats Setup — Windows PC Guide',
		intro: 'Install and configure Fortnite Cheats for Fortnite on Windows 10 or 11. Activate your Zadeyo license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before queueing.',
		imageAlt: 'Fortnite cheats setup loadout builder — fortnite-cheats install guide',
		galleryTitle: 'Fortnite Cheats setup visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Fortnite Cheats',
				'Confirm your Zadeyo order email and license details. Check the Updates page for the latest EAC maintenance build before launching Fortnite.',
				'Fortnite Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, loot, and vehicles — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match without opening menus during reboot van rotations or endgame circles.',
			),
			section(
				'After Fortnite or Easy Anti-Cheat (EAC) patches',
				'When Epic Games ships a major Fortnite update or Easy Anti-Cheat (EAC) patch, revisit the Updates page before queueing. Download maintenance rebuilds when posted.',
				'Contact Support with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Fortnite Cheats Updates | Easy Anti-Cheat (EAC) Maintenance Log',
		description: 'Fortnite Cheats update log for Fortnite. Easy Anti-Cheat (EAC) maintenance, ESP wallhack rebuilds, and Aimbot patch notes for Windows PC cheats.',
		h1: 'Fortnite Cheats Updates — Maintenance Log',
		intro: 'Track EAC maintenance and Fortnite patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'Fortnite cheats updates header — fortnite-cheats EAC maintenance log',
		galleryTitle: 'Fortnite patch and maintenance visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/undetected-fortnite-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Fortnite and Easy Anti-Cheat (EAC) receive frequent patches. Fortnite Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				'Checking this log before you queue reduces surprises after game days or seasonal launches on Battle Royale island and Zero Build.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat (EAC) compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and Zadeyo delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				'For urgent status questions after a Easy Anti-Cheat (EAC) update, contact Support with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Fortnite Cheats FAQ | ESP, Aimbot & Easy Anti-Cheat (EAC) Answers',
		description: 'Fortnite Cheats FAQ: undetected ESP wallhack, Aimbot, radar hack, EAC maintenance, and Windows PC requirements for Fortnite.',
		h1: 'Fortnite Cheats FAQ — Common Questions',
		intro: 'Answers about undetected Fortnite Cheats — ESP wallhack, radar hack, Aimbot, EAC maintenance, Zadeyo checkout, and Fortnite compatibility on Windows PC.',
		imageAlt: 'Fortnite cheats FAQ squad fight — fortnite-cheats ESP and Aimbot answers',
		galleryTitle: 'Fortnite Cheats FAQ visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Fortnite Cheats?',
				'Fortnite Cheats is an undetected cheat package for Fortnite on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with EAC maintenance updates.',
				'Packages cover Battle Royale and Zero Build on Battle Royale island, Zero Build, and competitive lobbies.',
			),
			section(
				'Are Fortnite Cheats undetected in 2026?',
				'Fortnite Cheats is maintained with rebuilds after Easy Anti-Cheat (EAC) and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally through Zadeyo after payment confirmation. Monthly is $35; lifetime is $150 USD.',
				'Contact support@fortnitecheats.net or the Support page with order details for setup or billing help.',
			),
		],
	},
	support: {
		title: 'Fortnite Cheats Support | Help & Contact',
		description: 'Contact Fortnite Cheats support for Fortnite licenses. Setup help, billing, ESP wallhack, Aimbot profiles, and EAC maintenance on Windows PC.',
		h1: 'Fortnite Cheats Support — Contact Us',
		intro: 'Get help with Fortnite Cheats licenses, Zadeyo checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for Fortnite on Windows PC.',
		imageAlt: 'Fortnite cheats support package — fortnite-cheats help and contact',
		galleryTitle: 'Fortnite Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for Zadeyo order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Fortnite Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Epic Games bans.',
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated Easy Anti-Cheat (EAC) page.',
				'Email: support@fortnitecheats.net',
			),
		],
	},
	undetected: {
		title: 'Undetected Fortnite Cheats 2026 | Easy Anti-Cheat (EAC) Safe ESP',
		description: 'Undetected Fortnite cheats for Fortnite. ESP wallhack, radar hack, Aimbot with EAC maintenance rebuilds. Windows PC package.',
		h1: 'Undetected Fortnite Cheats — Easy Anti-Cheat (EAC) Maintenance',
		intro: 'How Fortnite Cheats stays maintained for Fortnite after Easy Anti-Cheat (EAC) patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Undetected Fortnite cheats battle royale — fortnite-cheats ESP wallhack status',
		galleryTitle: 'Undetected Fortnite Cheats visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/eac-bypass-fortnite/',
		sections: [
			section(
				'What undetected means for Fortnite Cheats',
				'Undetected Fortnite Cheats means the package is actively maintained against Easy Anti-Cheat (EAC) and major Fortnite patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Epic Games security updates.',
			),
			section(
				'EAC maintenance workflow',
				'When Easy Anti-Cheat (EAC) or Fortnite updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active Zadeyo licenses.',
				'Check maintenance notes before queueing on patch days — especially after seasonal map rotations.',
			),
			section(
				'Responsible use',
				'Combine maintenance with conservative in-game settings. Read the FAQ and Updates log regularly — undetected status is an ongoing process, not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms.',
			),
		],
	},
	wallhack: {
		title: 'Fortnite Wallhack 2026 | ESP Visibility for Fortnite',
		description: 'Fortnite wallhack ESP for Fortnite. Player outlines, loot markers, vehicle cues. Undetected Windows cheat with EAC maintenance.',
		h1: 'Fortnite Wallhack — ESP Visibility Guide',
		intro: 'Fortnite wallhack ESP for Fortnite — see players, loot, vehicles, and chests through toggleable wallhack overlays built for BR and Zero Build.',
		imageAlt: 'Fortnite wallhack ESP preview — fortnite-cheats player visibility overlay',
		galleryTitle: 'Fortnite wallhack ESP gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Fortnite ESP page',
		ctaSecondaryHref: '/fortnite-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Fortnite wallhack focuses on information — player outlines, loot pins, vehicle threat cues — rather than automatic aiming. Fortnite Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and endgame circles.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support Battle Royale island, Zero Build, and competitive lobbies layouts with distance readouts and snaplines for engagement control.',
				'Contract, buy-station, and loot chest markers speed up BR loot paths without guessing spawn routes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat (EAC) patches. Follow the Updates page and checkout via Zadeyo for instant license delivery on Windows PC.',
				'Pair wallhack awareness with radar hack cues for flanks during building and rooftop fights.',
			),
		],
	},
	radar: {
		title: 'Fortnite Radar Hack 2026 | 2D Threat Overlay for Fortnite',
		description: 'Fortnite radar hack for Fortnite. 2D overlay, directional cues, configurable range. Bundled with ESP wallhack and Aimbot on Windows PC.',
		h1: 'Fortnite Radar Hack — 2D Threat Awareness',
		intro: '2D radar-style overlay for Fortnite — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Fortnite radar hack player ESP — fortnite-cheats 2D threat overlay',
		galleryTitle: 'Fortnite radar hack visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/fortnite-esp/',
		sections: [
			section(
				'Why radar hack matters in Fortnite',
				'Battle royale fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Fortnite Cheats radar complements ESP wallhack markers during squad pushes and final-circle scrims.',
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight endgame circles. Directional cues highlight flanks during building clears and vehicle pushes across Battle Royale island and Zero Build.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive EAC maintenance rebuilds with the full Fortnite Cheats package. Monthly and lifetime licenses checkout through Zadeyo with digital delivery.',
				'Check Updates after major Fortnite patches before relying on previous radar configs.',
			),
		],
	},
	'eac-bypass': {
		title: 'EAC Bypass Guide | Fortnite Cheats Maintenance',
		description: 'EAC bypass maintenance for Fortnite Cheats. How ESP wallhack, radar, and Aimbot rebuild after Fortnite anti-cheat patches on Windows PC.',
		h1: 'EAC Bypass — Fortnite Cheats Maintenance',
		intro: 'Understand Easy Anti-Cheat (EAC) maintenance for Fortnite Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Fortnite security updates.',
		imageAlt: 'EAC bypass Fortnite reboot van fight — fortnite-cheats maintenance guide',
		galleryTitle: 'EAC maintenance visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat (EAC) overview',
				'Easy Anti-Cheat (EAC) is Epic Games\'s anti-cheat for Fortnite on PC. Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.',
				'Fortnite Cheats monitors Easy Anti-Cheat (EAC) patch notes and Fortnite seasonal updates to schedule module reviews.',
			),
			section(
				'What happens after a Easy Anti-Cheat (EAC) patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on Updates, and ships rebuilt packages to active Zadeyo licenses.',
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance — not a permanent free pass. Read the undetected guide, FAQ, and Updates log before every session.',
				'Contact Support if activation fails immediately after a posted rebuild.',
			),
		],
	},
	'cheats-2026': {
		title: 'Fortnite Cheats 2026 | Best Undetected ESP & Aimbot',
		description: 'Best Fortnite cheats 2026 for Fortnite. Undetected ESP wallhack, radar hack, Aimbot package with EAC maintenance.',
		h1: 'Fortnite Cheats 2026 — Best Undetected Package',
		intro: 'The 2026 Fortnite Cheats package for Fortnite — undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance, Zadeyo checkout, and Windows PC support.',
		imageAlt: 'Fortnite cheats 2026 hero — fortnite-cheats ESP wallhack Aimbot package',
		galleryTitle: 'Fortnite Cheats 2026 gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Fortnite Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat (EAC) updates. Fortnite Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale 2024 build.',
				'Monthly ($35) and lifetime ($150) plans cover Battle Royale island, Zero Build, and competitive lobbies BR loops.',
			),
			section(
				'Full feature stack',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Instant digital delivery through Zadeyo after checkout confirmation worldwide.',
			),
			section(
				'Before you buy',
				'Read Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Support is available at support@fortnitecheats.net for license questions.',
			),
		],
	},
	hacks: {
		title: 'Fortnite Hacks 2026 | Undetected ESP, Radar & Aimbot',
		description: 'Fortnite hacks for Fortnite on Windows PC. Undetected ESP wallhack, radar hack, and Aimbot in one package with EAC maintenance.',
		h1: 'Fortnite Hacks — Undetected PC Package',
		intro: 'Fortnite hacks for Fortnite combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat (EAC) patches.',
		imageAlt: 'Fortnite hacks battle royale combat — fortnite-cheats ESP wallhack and Aimbot package',
		galleryTitle: 'Fortnite hacks gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/undetected-fortnite-cheats/',
		sections: [
			section(
				'What Fortnite hacks include in 2026',
				'Players searching for Fortnite hacks usually want visibility and combat tools without stacking separate downloads. Fortnite Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package.',
				'Coverage spans Battle Royale and Zero Build on Battle Royale island, Zero Build, and competitive lobbies — with in-client toggles for live matches.',
			),
			section(
				'Fortnite hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Fortnite Cheats maps the full BR loop: read enemy squads, track vehicles and chests, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/fortnite-esp/">ESP</a>, <a href="/fortnite-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly ($35) and lifetime ($150) licenses.',
			),
			section(
				'Undetected Fortnite hacks with EAC maintenance',
				'Fortnite hacks require rebuilds after Easy Anti-Cheat (EAC) and major Fortnite patches. Check the <a href="/updates/">Updates page</a> before queueing — maintenance notes confirm when a new build is live.',
				'Digital delivery runs through Zadeyo checkout for Windows 10 and 11 PCs worldwide.',
			),
		],
	},
	'cheat-download': {
		title: 'Fortnite Cheat Download 2026 | Instant Digital Delivery',
		description: 'Fortnite cheat download for Fortnite. Instant digital license delivery — ESP wallhack, radar hack, and Aimbot for Windows PC.',
		h1: 'Fortnite Cheat Download — Instant License Delivery',
		intro: 'How Fortnite cheat download works for Fortnite — digital license delivery after Zadeyo payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Fortnite cheat download package — fortnite-cheats ESP wallhack Aimbot license',
		galleryTitle: 'Fortnite cheat download visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Fortnite cheat download delivery works',
				'After Zadeyo checkout confirms payment, Fortnite Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
			),
			section(
				'What your download unlocks',
				'Every Fortnite cheat download includes player ESP wallhack, loot and chest markers, 2D radar overlays, Aimbot profiles, and in-client toggles for BR and Zero Build.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow the Setup guide to activate ESP wallhack and Aimbot on Windows 10 or 11. When Fortnite or Easy Anti-Cheat (EAC) patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact Support with your Zadeyo order ID if delivery or activation fails within 24 hours of purchase.',
			),
		],
	},
	'mod-menu': {
		title: 'Fortnite Mod Menu 2026 | In-Client ESP & Aimbot Toggles',
		description: 'Fortnite mod menu for Fortnite. In-client toggles for ESP wallhack, radar hack, and Aimbot — undetected Windows PC package with EAC maintenance.',
		h1: 'Fortnite Mod Menu — In-Client Control Panel',
		intro: 'Fortnite mod menu controls for Fortnite — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Fortnite session on Windows PC.',
		imageAlt: 'Fortnite mod menu loadout builder — fortnite-cheats in-client ESP and Aimbot toggles',
		galleryTitle: 'Fortnite mod menu gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Fortnite mod menu controls',
				'A Fortnite mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Fortnite Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Fortnite.',
			),
			section(
				'Mod menu categories for BR and Zero Build',
				'Separate ESP wallhack categories for players, loot, chests, and vehicles let you reduce overlay noise during rotations and endgame circles.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — see the <a href="/fortnite-esp/">ESP</a> and <a href="/fortnite-aimbot/">Aimbot</a> pages for control details.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat (EAC) patches',
				'Fortnite mod menu behavior is rebuilt when Easy Anti-Cheat (EAC) or major Fortnite updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/eac-bypass-fortnite/">EAC bypass guide</a> before queueing on patch days.',
				'Checkout via Zadeyo with instant digital delivery for monthly and lifetime licenses.',
			),
		],
	},
	'soft-aim': {
		title: 'Fortnite Soft Aim 2026 | Smooth Aim Assist Controls',
		description: 'Fortnite soft aim for Fortnite. Smooth Aimbot with FOV, bone priority, and hotkeys — undetected Windows PC package with EAC maintenance.',
		h1: 'Fortnite Soft Aim — Smooth Aimbot Settings',
		intro: 'Fortnite soft aim settings for Fortnite — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Fortnite soft aim combat — fortnite-cheats smooth Aimbot settings preview',
		galleryTitle: 'Fortnite soft aim gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/fortnite-aimbot/',
		sections: [
			section(
				'What Fortnite soft aim means',
				'Fortnite soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Fortnite Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights and respawn rounds.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for assault rifles, SMGs, and snipers. Switch between long-range long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				'Soft aim ships alongside ESP wallhack and 2D radar overlays — read the full <a href="/fortnite-aimbot/">Aimbot page</a> for every control.',
			),
			section(
				'Undetected soft aim with EAC maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat (EAC) patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout through Zadeyo with digital delivery on Windows PC.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Fortnite Cheats 2026 | ESP, Wallhack & Aimbot',
		description: 'Best Fortnite cheats for Fortnite in 2026. Undetected ESP wallhack, radar hack, Aimbot, EAC maintenance for Windows PC.',
		h1: 'Best Fortnite Cheats — 2026 Buyer Guide',
		intro: 'Compare the best Fortnite cheats for Fortnite in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat (EAC) rebuilds and Zadeyo delivery.',
		imageAlt: 'Best Fortnite cheats 2026 hero — fortnite-cheats ESP wallhack Aimbot package',
		galleryTitle: 'Best Fortnite cheats gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Fortnite cheats in 2026',
				'The best Fortnite cheats combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Fortnite Cheats covers Battle Royale island, Zero Build, and competitive lobbies BR loops with in-client toggles and post-patch rebuilds.',
			),
			section(
				'Best Fortnite cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Fortnite patches.',
				'Review <a href="/features/">Features</a>, <a href="/undetected-fortnite-cheats/">undetected status</a>, and <a href="/fortnite-cheats-2026/">Fortnite cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
			),
			section(
				'Buying the best Fortnite cheats safely',
				'Purchase through Zadeyo checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
			),
		],
	},
	'aimbot-hack': {
		title: 'Fortnite Aimbot Hack 2026 | Undetected Aim Assist',
		description: 'Fortnite aimbot hack for Fortnite. Smooth aim assist, FOV, bone priority, hotkeys — undetected Windows PC cheat with EAC maintenance.',
		h1: 'Fortnite Aimbot Hack — Undetected Aim Assist',
		intro: 'Fortnite aimbot hack tools for Fortnite — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Fortnite aimbot hack combat — fortnite-cheats undetected aim assist preview',
		galleryTitle: 'Fortnite aimbot hack gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/fortnite-aimbot/',
		sections: [
			section(
				'Fortnite aimbot hack vs visibility tools',
				'A Fortnite aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Fortnite Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Fortnite combat pace across BR and Zero Build.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during reboot van rotations or final circles.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings — details on the <a href="/fortnite-aimbot/">Aimbot page</a>.',
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat (EAC) updates. Follow the <a href="/updates/">Updates page</a> and <a href="/eac-bypass-fortnite/">EAC bypass guide</a> before queueing after patch days.',
				'Checkout via Zadeyo with instant digital delivery for Windows 10 and 11.',
			),
		],
	},
	'esp-hack': {
		title: 'Fortnite ESP Hack 2026 | Player & Loot Wallhack',
		description: 'Fortnite ESP hack for Fortnite. Player outlines, loot markers, distance readouts — undetected wallhack with EAC maintenance on Windows PC.',
		h1: 'Fortnite ESP Hack — Wallhack Visibility Guide',
		intro: 'Fortnite ESP hack overlays for Fortnite — player outlines, vehicle threat cues, loot and chest markers with distance readouts across Battle Royale island, Zero Build, and competitive lobbies.',
		imageAlt: 'Fortnite ESP hack wallhack — fortnite-cheats player visibility overlay',
		galleryTitle: 'Fortnite ESP hack gallery',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/fortnite-esp/',
		sections: [
			section(
				'What a Fortnite ESP hack shows',
				'A Fortnite ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
			),
			section(
				'ESP hack categories for battle royale',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only BR-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Zero Build and Battle Royale — compare with the dedicated <a href="/fortnite-wallhack/">wallhack</a> and <a href="/fortnite-esp/">ESP pages</a>.',
			),
			section(
				'Undetected ESP hack with EAC maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat (EAC) and Fortnite patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/fortnite-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally through Zadeyo checkout on Windows PC.',
			),
		],
	},
	'unlock-all': {
		title: 'Fortnite Unlock All 2026 | Loadout & Cosmetic Access',
		description: 'Fortnite unlock all guide for Fortnite players. What unlock-all means vs ESP wallhack, radar, and Aimbot tools in the Fortnite Cheats package.',
		h1: 'Fortnite Unlock All — What Players Search For',
		intro: 'Fortnite unlock all is a common search term for Fortnite — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Fortnite Cheats actually provides on Windows PC.',
		imageAlt: 'Fortnite unlock all player ESP — fortnite-cheats loadout and visibility tools',
		galleryTitle: 'Fortnite unlock all guide visuals',
		ctaPrimary: 'Buy Fortnite Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Fortnite unlock all usually means',
				'Fortnite unlock all searches often refer to instant access to weapons, camos, players, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Fortnite Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, vehicles, and loot chests during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and chest markers speed BR rotations — see the <a href="/fortnite-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
			),
			section(
				'Buying Fortnite Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Fortnite on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat (EAC) patches — maintenance rebuilds publish for active Zadeyo licenses.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Fortnite Cheats',
		description: 'Privacy policy for Fortnite Cheats. How we handle support emails, order data, site usage, and checkout for Fortnite licenses on fortnitecheats.net.',
		h1: 'Privacy Policy',
		intro: 'How Fortnite Cheats handles information when you browse fortnitecheats.net or contact support about a Fortnite license.',
		imageAlt: 'Fortnite cheats privacy policy — fortnite-cheats legal page',
		galleryTitle: 'Fortnite Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve Zadeyo support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by Zadeyo — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Fortnite Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@fortnitecheats.net with your request details.',
				'Policy updates publish on this page. Continued use of fortnitecheats.net after updates means you accept the revised policy.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Fortnite Cheats',
		description: 'Refund policy for Fortnite Cheats. Digital delivery terms, eligibility rules, and support for Fortnite cheat packages.',
		h1: 'Refund Policy',
		intro: 'Refund terms for Fortnite Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through Zadeyo checkout for Fortnite.',
		imageAlt: 'Fortnite cheats refund policy — fortnite-cheats billing terms',
		galleryTitle: 'Fortnite Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Fortnite Cheats licenses deliver digitally after Zadeyo payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your Zadeyo order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation.',
			),
			section(
				'How to request a refund',
				'Email support@fortnitecheats.net with subject "Refund Request", your order ID, purchase date, and issue summary.',
				'Approved refunds process back to the original Zadeyo payment method when possible.',
			),
		],
	},
	terms: {
		title: 'Terms of Use | Fortnite Cheats',
		description: 'Terms of use for Fortnite Cheats website and Fortnite cheat licenses. Usage rules, checkout terms, anti-cheat risk, and liability limits.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of fortnitecheats.net and Fortnite Cheats licenses for Fortnite on Windows PC.',
		imageAlt: 'Fortnite cheats terms of use — fortnite-cheats legal agreement',
		galleryTitle: 'Fortnite Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Fortnite Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Fortnite on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				'Using cheats in Fortnite may violate Epic Games terms and result in account penalties. Fortnite Cheats provides maintenance but does not guarantee undetected status or account safety.',
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@fortnitecheats.net for questions. Disputes are handled under applicable consumer law in your jurisdiction where required.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
