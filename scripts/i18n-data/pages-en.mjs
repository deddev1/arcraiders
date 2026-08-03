import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Rust Hacks 2026 | Undetected ESP & Aimbot',
		description:
			'Undetected rust hacks for PC with ESP, aimbot, and wallhack overlays. Compare monthly and lifetime plans, features, setup, and EAC update status before you buy.',
		h1: 'Rust Hacks — ESP, Aimbot & Wallhack for PC',
		intro:
			'A focused Windows PC package for Rust: player ESP, aimbot controls, and wallhack overlays with EAC maintenance after major patches.',
		imageAlt: 'Rust hacks aimbot holographic sight with ESP skeleton and red head lock',
		galleryTitle: 'Rust Hacks visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for wipe pressure',
				'Rust punishes incomplete information. Rust Hacks puts ESP, wallhack, and aimbot in one license so you can read monuments, oil-rig pushes, and compound fights before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when EAC or game updates require them.',
				'Compare the <a href="/rust-hacks/">rust hacks guide</a>, <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/undetected-rust-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get player ESP, loot markers, radar cues, and aimbot profiles in a single package aimed at PVE and PVP play.',
				'Details live on the <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'rust-esp': {
		title: 'Rust ESP 2026 | Player Boxes & Wallhack',
		description:
			'Rust ESP for PC and controllers — player boxes, loot markers, and distance readouts. Part of our undetected rust hacks with cloud DMA support.',
		h1: 'Rust ESP — Player Boxes & Wallhack',
		intro:
			'Visibility tools for Rust. Read enemy squads, vehicles, loot, chests, and distance before you commit to a fight — with toggleable ESP wallhack overlays for PVE and PVP.',
		imageAlt: 'Rust ESP with green skeleton, bounding box, loot labels, and distances',
		galleryTitle: 'Rust ESP overlay visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Rust wallhack guide',
		ctaSecondaryHref: '/rust-wallhack/',
		sections: [
			section(
				'What Rust ESP solves in survival',
				'Rust maps punish incomplete information. Rust Cheats ESP wallhack helps you spot enemy squads early, notice vehicles before they push your position, and mark chests worth the detour.',
				'On survival, monuments, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Rust’s live seasons and map updates are published by ${EXT.epic}. When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, vehicle, and loot ESP wallhack categories',
				'Toggle enemy player outlines, vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports monuments and raids lobbies alike.',
				'Compare category detail on the <a href="/rust-wallhack/">wallhack page</a> and pair visibility with the <a href="/rust-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and chest markers for faster rotations',
					'Vehicle and supply-drop threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with EAC maintenance',
				'Rust Cheats ESP wallhack is maintained for Rust with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/eac-bypass-rust/">EAC bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first ranked block.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/rust-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/best-rust-cheats/">best Rust cheats guide</a> and <a href="/rust-cheats-2026/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'rust-aimbot': {
		title: 'Rust Aimbot 2026 | Soft Aim for PC & Controllers',
		description:
			'Rust aimbot with soft aim tuning for PC and controllers. FOV, bone priority, and hotkeys bundled with ESP boxes in our rust hacks package.',
		h1: 'Rust Aimbot — Soft Aim for PC & Controllers',
		intro:
			'Configurable Aimbot tools for Rust firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Rust aimbot menu with red skeleton ESP, silent aim, and feature toggles',
		galleryTitle: 'Rust Aimbot combat previews',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Aimbot tuned for Rust combat pace',
				'Rust mixes long-range AR fights with close-quarters SMG pushes. Rust Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and reboot rounds.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for assault rifles, SMGs, and snipers. Switch between long-range AR beams and close-quarters room clears without reopening menus every spawn.',
				'Prefer softer tracking? Read the <a href="/rust-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/rust-aimbot-hack/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/rust-esp/">ESP wallhack</a> and <a href="/rust-radar-hack/">2D radar</a> in the same Rust Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / sniper',
				],
			),
			section(
				'EAC maintenance for undetected Aimbot',
				'Rust Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Rust patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/eac-bypass-rust/">EAC maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Rust Hacks Features | ESP, Soft Aim, Cloud DMA',
		description:
			'Full rust hacks feature list: ESP boxes, soft aim, radar, cloud DMA, and toggles for PC and controllers. Review controls before checkout.',
		h1: 'Rust Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Rust Cheats package for Rust on Windows PC — with EAC maintenance after major patches.',
		imageAlt: 'Rust ESP boxes, weapon labels, and distances on UKN practice bots',
		galleryTitle: 'Rust Cheats feature gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, vehicle and supply-drop threat cues, loot and chest markers, distance readouts, snaplines, and toggleable ESP categories for BR-critical overlays only.',
				'Team and enemy colour coding supports monuments and raids. Deep-dive the <a href="/rust-esp/">ESP page</a> and <a href="/rust-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and final circles, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Rust sessions. See <a href="/rust-radar-hack/">radar</a> and <a href="/rust-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/rust-mod-menu/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and EAC maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@rusthacks.net.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/undetected-rust-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Rust Hacks Pricing | $35/mo or $150 Life',
		description:
			'Rust hacks pricing: $35/month or $150 lifetime for ESP, soft aim, boxes, and cloud DMA on PC and controllers. Instant delivery — pick a plan.',
		h1: 'Rust Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Rust Cheats — ESP wallhack, radar hack, and Aimbot for Rust on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Rust ESP overlay with skeleton ESP and loot inventory labels',
		galleryTitle: 'Rust Cheats package visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Rust Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with EAC maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Rust Cheats package — ideal if you play Rust regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Rust patches.',
				`Season calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/best-rust-cheats/">best Rust cheats</a>, <a href="/undetected-rust-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Rust Hacks Setup | PC & Controller Guide',
		description:
			'Set up rust hacks on PC and controllers — activate ESP boxes, soft aim profiles, and cloud DMA. Check EAC updates before your first queue.',
		h1: 'Rust Hacks Setup — PC & Controller Guide',
		intro:
			'Install and configure Rust Cheats for Rust on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before queueing.',
		imageAlt: 'Rust aimbot cheats menu with red skeleton ESP and hotkey toggles',
		galleryTitle: 'Rust Cheats setup visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Rust Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest EAC maintenance build before launching Rust.',
				`Also glance at ${EXT.status} if Epic services look unstable on patch day — a platform outage is not a license fault.`,
				'Rust Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, loot, and vehicles — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for each module live on <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/rust-mod-menu/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/rust-soft-aim/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Rust or Easy Anti-Cheat patches',
				'When Facepunch ships a major Rust update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/eac-bypass-rust/">EAC bypass page</a> and <a href="/undetected-rust-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Rust Hacks Updates | EAC Maintenance Log',
		description:
			'Rust hacks update log: EAC rebuilds for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before queueing after patches.',
		h1: 'Rust Hacks Updates — Maintenance Log',
		intro:
			'Track EAC maintenance and Rust patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'Rust ESP green hitbox wallhack on a hazmat-suited player',
		galleryTitle: 'Rust patch and maintenance visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/undetected-rust-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Rust and Easy Anti-Cheat receive frequent patches. Rust Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Epic platform health and this page for Rust Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on survival and monuments.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/eac-bypass-rust/">EAC bypass guide</a> and <a href="/undetected-rust-cheats/">undetected Rust cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.rust}, then confirm our rebuild is live before ranked.`,
				'For urgent status questions after an EAC update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Rust Hacks FAQ | ESP, Soft Aim & EAC Answers',
		description:
			'Rust hacks FAQ: ESP boxes, soft aim, cloud DMA, controller support, EAC maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Rust Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected Rust Cheats — ESP wallhack, radar hack, Aimbot, EAC maintenance, checkout, and Rust compatibility on Windows PC.',
		imageAlt: 'Rust ESP boxes and distance labels on UKN practice bots',
		galleryTitle: 'Rust Cheats FAQ visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Rust Cheats?',
				'Rust Cheats is an undetected cheat package for Rust on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with EAC maintenance updates.',
				'Packages cover survival and monuments. Explore <a href="/features/">Features</a> for the full control list and <a href="/rust-esp/">ESP</a> / <a href="/rust-aimbot/">Aimbot</a> for module detail.',
				`Rust itself is published by ${EXT.epic}. Cheats are third-party tools and may violate Epic’s rules — use is at your own risk.`,
			),
			section(
				'Are Rust Cheats undetected in 2026?',
				'Rust Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/undetected-rust-cheats/">undetected Rust cheats</a> and the <a href="/eac-bypass-rust/">EAC guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@rusthacks.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Rust Hacks Support | Help & Contact',
		description:
			'Contact rust hacks support for licenses, ESP setup, soft aim profiles, and cloud DMA on PC and controllers. Include your order ID for faster help.',
		h1: 'Rust Hacks Support — Contact Us',
		intro:
			'Get help with Rust Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for Rust on Windows PC.',
		imageAlt: 'Rust hacks aimbot sight with ESP skeleton and red head lock',
		galleryTitle: 'Rust Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Rust Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Facepunch bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href="/eac-bypass-rust/">Easy Anti-Cheat page</a>.',
				'Email: support@rusthacks.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Rust Hacks 2026 | EAC Safe',
		description:
			'Undetected rust hacks with EAC maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
		h1: 'Undetected Rust Hacks — EAC Maintenance',
		intro:
			'How Rust Cheats stays maintained for Rust after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Rust wallhack green hitbox ESP on a hazmat suit player',
		galleryTitle: 'Undetected Rust Cheats visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/eac-bypass-rust/',
		sections: [
			section(
				'What undetected means for Rust Cheats',
				'Undetected Rust Cheats means the package is actively maintained against Easy Anti-Cheat and major Rust patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Facepunch security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Rust client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'EAC maintenance workflow',
				'When Easy Anti-Cheat or Rust updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Epic outages that can look like product failures.`,
				'Deep technical workflow: <a href="/eac-bypass-rust/">EAC bypass Rust guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/rust-cheats-2026/">Rust cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Rust Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Rust wallhack ESP with player boxes and loot markers for PC and controllers. Undetected rust cheats with cloud DMA — learn overlays and buy.',
		h1: 'Rust Wallhack — ESP Boxes & Visibility',
		intro:
			'Rust wallhack ESP for Rust — see players, loot, vehicles, and chests through toggleable wallhack overlays built for PVE and PVP.',
		imageAlt: 'Rust wallhack ESP green hitbox around a hazmat-suited player',
		galleryTitle: 'Rust wallhack ESP gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Rust ESP page',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Rust wallhack focuses on information — player outlines, loot pins, vehicle threat cues — rather than automatic aiming. Rust Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and endgame circles.',
				'For the broader ESP keyword page see <a href="/rust-esp/">Rust ESP</a>; for combat assist see <a href="/rust-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support survival, monuments, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/rust-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/undetected-rust-cheats/">undetected Rust cheats</a> and <a href="/eac-bypass-rust/">EAC bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/rust-esp-hack/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Rust Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Rust radar hack for flank awareness on PC and controllers. Bundled with ESP boxes, soft aim, and cloud DMA in our rust hacks package.',
		h1: 'Rust Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Rust — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Rust ESP distance markers and weapon labels on UKN practice bots',
		galleryTitle: 'Rust radar hack visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'Why radar hack matters in Rust',
				'Battle royale fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Rust Cheats radar complements <a href="/rust-esp/">ESP wallhack</a> markers during squad pushes and final-circle scrims.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight endgame circles. Directional cues highlight flanks during building clears and vehicle pushes across survival and monuments.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/rust-mod-menu/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/rust-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive EAC maintenance rebuilds with the full Rust Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Rust patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/undetected-rust-cheats/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'EAC Bypass Rust | Hack Maintenance Guide',
		description:
			'How rust hacks rebuild after EAC patches — ESP boxes, soft aim, and cloud DMA maintenance for PC and controllers. Read before queueing.',
		h1: 'EAC Bypass — Rust Hacks Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for Rust Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Rust security updates.',
		imageAlt: 'Rust ESP green hitbox wallhack used for EAC maintenance status pages',
		galleryTitle: 'EAC maintenance visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Facepunch’ anti-cheat for Rust on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Rust Cheats monitors EAC patch notes and Rust seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an EAC patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Epic service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/undetected-rust-cheats/">undetected Rust cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Rust Cheats 2026 | Hacks with ESP & Cloud DMA',
		description:
			'Best rust cheats 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected rust hacks with EAC maintenance — compare and buy.',
		h1: 'Rust Cheats 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 Rust Cheats package for Rust — undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'Rust hacks aimbot holographic sight with ESP skeleton and red head lock',
		galleryTitle: 'Rust Cheats 2026 gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Rust Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Rust Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover survival and monuments loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/rust-hacks/">Rust hacks pillar</a>, <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-wallhack/">wallhack</a>, <a href="/rust-radar-hack/">radar</a>, <a href="/undetected-rust-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/rust-hacks/">Rust hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/best-rust-cheats/">best Rust cheats</a> checklist, <a href="/blog/rust-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@rusthacks.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Rust Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'Rust hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance. Compare rust cheats options and buy the full package.',
		h1: 'Rust Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Rust hacks for survival and monuments combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for rust hacks in 2026.',
		imageAlt: 'Rust hacks aimbot sight with ESP skeleton and red head lock',
		galleryTitle: 'Rust hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/undetected-rust-cheats/',
		sections: [
			section(
				'What Rust hacks include in 2026',
				'Players searching for Rust hacks usually want visibility and combat tools without stacking separate downloads. Rust Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called rust cheats.',
				'Coverage spans survival and monuments with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Rust hacks vs rust cheats — same stack, clear pages',
				'Searchers use rust hacks and rust cheats interchangeably. This pillar focuses on hacks language; the <a href="/rust-cheats-2026/">rust cheats 2026</a> and <a href="/best-rust-cheats/">best Rust cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/rust-esp/">Rust ESP</a>, <a href="/rust-aimbot/">Rust Aimbot</a>, <a href="/rust-wallhack/">wallhack</a>, <a href="/rust-radar-hack/">radar hack</a>, and <a href="/rust-soft-aim/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/rust-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/rust-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-rust-hacks-eac/">undetected EAC notes</a>.',
			),
			section(
				'Rust hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Rust Hacks maps the full BR loop: read enemy squads, track vehicles and chests, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/rust-cheat-download/">cheat download</a>, <a href="/rust-mod-menu/">mod menu</a>, <a href="/rust-aimbot-hack/">aimbot hack</a>, <a href="/rust-esp-hack/">ESP hack</a>.',
			),
			section(
				'Undetected Rust hacks with EAC maintenance',
				'Undetected Rust hacks require rebuilds after Easy Anti-Cheat and major Rust patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/eac-bypass-rust/">EAC bypass guide</a> for the practical workflow. Pair with <a href="/undetected-rust-cheats/">undetected Rust cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Rust Hack Download 2026 | Instant Access',
		description:
			'Rust hack download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'Rust Hack Download — Instant License Delivery',
		intro:
			'How Rust cheat download works for Rust — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Rust ESP overlay with skeleton ESP and loot inventory labels',
		galleryTitle: 'Rust cheat download visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Rust cheat download delivery works',
				'After checkout confirms payment, Rust Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Epic services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Rust cheat download includes player ESP wallhack, loot and chest markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PVE and PVP.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Rust or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/undetected-rust-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Rust Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Rust mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected rust hacks package.',
		h1: 'Rust Mod Menu — In-Client Control Panel',
		intro:
			'Rust mod menu controls for Rust — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Rust session on Windows PC.',
		imageAlt: 'Rust mod menu / aimbot overlay with red skeleton ESP and hotkeys',
		galleryTitle: 'Rust mod menu gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Rust mod menu controls',
				'A Rust mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Rust Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Rust.',
				'Control deep-dives: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for PVE and PVP',
				'Separate ESP wallhack categories for players, loot, chests, and vehicles let you reduce overlay noise during rotations and endgame circles.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.rust} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/rust-soft-aim/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after EAC patches',
				'Rust mod menu behavior is rebuilt when Easy Anti-Cheat or major Rust updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/eac-bypass-rust/">EAC bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Rust Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Rust soft aim settings for natural tracking on PC and controllers. Smoothness, FOV, and bone priority — included in our rust hacks with ESP boxes.',
		h1: 'Rust Soft Aim — Smooth Aimbot Controls',
		intro:
			'Rust soft aim settings for Rust — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Rust soft aim ESP boxes and FOV circle on UKN practice bots',
		galleryTitle: 'Rust soft aim gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/rust-aimbot/',
		sections: [
			section(
				'What Rust soft aim means',
				'Rust soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Rust Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/rust-aimbot/">Rust Aimbot</a>. Alternate wording: <a href="/rust-aimbot-hack/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for assault rifles, SMGs, and snipers. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/rust-esp/">ESP wallhack</a> and <a href="/rust-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with EAC maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Rust Hacks 2026 | Buyer Guide',
		description:
			'Best rust hacks for 2026: ESP boxes, soft aim, cloud DMA, and EAC maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best Rust Hacks — 2026 Buyer Guide',
		intro:
			'Compare the best Rust cheats for Rust in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: 'Rust ESP overlay with skeleton ESP and loot inventory labels',
		galleryTitle: 'Best Rust cheats gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Rust cheats in 2026',
				'The best Rust cheats combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Rust Cheats covers survival and monuments with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Rust cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Rust patches.',
				'Review <a href="/features/">Features</a>, <a href="/undetected-rust-cheats/">undetected status</a>, and <a href="/rust-cheats-2026/">Rust cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/rust-esp/">ESP</a>, <a href="/rust-aimbot/">Aimbot</a>, <a href="/rust-hacks/">hacks</a>.',
			),
			section(
				'Buying the best Rust cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate ${EXT.epic} terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Rust Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Rust aimbot hack with soft aim for PC and controllers. FOV, bone priority, and hotkeys — bundled with ESP boxes in our rust hacks package.',
		h1: 'Rust Aimbot Hack — Soft Aim Assist',
		intro:
			'Rust aimbot hack tools for Rust — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Rust aimbot hack menu with red skeleton ESP and silent aim toggles',
		galleryTitle: 'Rust aimbot hack gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/rust-aimbot/',
		sections: [
			section(
				'Rust aimbot hack vs visibility tools',
				'A Rust aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Rust Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Rust combat pace across PVE and PVP.',
				'Prefer softer tracking language? See <a href="/rust-soft-aim/">soft aim</a>. Full settings: <a href="/rust-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or final circles.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/eac-bypass-rust/">EAC bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/rust-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Rust ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Rust ESP hack with player boxes and loot markers for PC and controllers. Undetected rust cheats with cloud DMA — see overlays and buy.',
		h1: 'Rust ESP Hack — Player Boxes Guide',
		intro:
			'Rust ESP hack overlays for Rust — player outlines, vehicle threat cues, loot and chest markers with distance readouts across survival and monuments.',
		imageAlt: 'Rust ESP hack with green skeleton, box, and loot visibility labels',
		galleryTitle: 'Rust ESP hack gallery',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/rust-esp/',
		sections: [
			section(
				'What a Rust ESP hack shows',
				'A Rust ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/rust-esp/">Rust ESP</a>. Wallhack wording: <a href="/rust-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for survival',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only BR-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports monuments and raids.',
				`POI and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with EAC maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Rust patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/rust-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/undetected-rust-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Rust Unlock All 2026 | What It Really Means',
		description:
			'Rust unlock all explained vs real rust hacks — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'Rust Unlock All — What Players Search For',
		intro:
			'Rust unlock all is a common search term for Rust — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Rust Cheats actually provides on Windows PC.',
		imageAlt: 'Rust ESP boxes and distances on UKN bots for unlock-all context',
		galleryTitle: 'Rust unlock all guide visuals',
		ctaPrimary: 'Buy Rust Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Rust unlock all usually means',
				'Rust unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Rust Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Battle Pass items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, vehicles, and loot chests during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and chest markers speed BR rotations — see the <a href="/rust-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/rust-hacks/">Rust hacks</a> and <a href="/best-rust-cheats/">best Rust cheats</a>.',
			),
			section(
				'Buying Rust Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Rust on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Rust Hacks',
		description:
			'Privacy policy for Rust Hacks. How we handle support emails, order data, and checkout for rust cheats licenses on rusthacks.net.',
		h1: 'Privacy Policy',
		intro: 'How Rust Hacks handles information when you browse rusthacks.net or contact support about a Rust license.',
		imageAlt: 'Rust ESP overlay visual for privacy policy page',
		galleryTitle: 'Rust Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Rust Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@rusthacks.net with your request details.',
				'Policy updates publish on this page. Continued use of rusthacks.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Rust Hacks',
		description:
			'Refund policy for Rust Hacks. Digital delivery terms and eligibility for rust hacks packages with ESP, soft aim, and cloud DMA.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Rust Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Rust.',
		imageAlt: 'Rust ESP overlay visual for refund policy page',
		galleryTitle: 'Rust Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Rust Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@rusthacks.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Rust Hacks Rules',
		description:
			'Terms of use for rusthacks.net and Rust Hacks licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of rusthacks.net and Rust Hacks licenses for Rust on Windows PC.',
		imageAlt: 'Rust ESP overlay visual for terms of use page',
		galleryTitle: 'Rust Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Rust Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Rust on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Rust may violate ${EXT.epic} terms and result in account penalties. Rust Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/undetected-rust-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@rusthacks.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
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
