#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts with Fortnite Intel posts.
 * English content is the SEO source of truth for /blog/ routes.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');

const LOCALES = ['en'];

const EXT = {
	epic: '<a href="https://www.epicgames.com/fortnite" target="_blank" rel="noopener noreferrer">Epic Games Fortnite</a>',
	fortnite: '<a href="https://www.fortnite.com/" target="_blank" rel="noopener noreferrer">Fortnite.com</a>',
	status: '<a href="https://status.epicgames.com/" target="_blank" rel="noopener noreferrer">Epic Games Status</a>',
	competitive: '<a href="https://www.fortnite.com/competitive" target="_blank" rel="noopener noreferrer">Fortnite Competitive</a>',
};

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, sections: Section[] }} SourcePost */

/** @type {SourcePost[]} */
const sources = [
	{
		id: 'patch-notes-breakdown',
		imageKey: 'squadFight',
		published: '2026-07-29',
		updated: '2026-08-01',
		category: 'Patch Notes Breakdown',
		featured: false,
		slug: 'patch-notes-buffs-nerfs-vaults',
		title: 'Patch Notes Breakdown: Buffs, Nerfs & Vaults That Matter',
		metaDescription:
			'Plain-English Fortnite patch notes guide — how buffs, nerfs, and vaults reshape loadouts in Chapter 7 Season 3. Read, then adapt ranked priorities.',
		h1: 'Patch Notes Breakdown: Buffs, Nerfs, and Vaults',
		intro:
			'Stop skimming patch notes. Here is how buffs, nerfs, and vaults actually reshuffle the loot pool and your ranked loadout priorities.',
		keywords: ['fortnite patch notes', 'buffs', 'nerfs', 'vaults', 'loot pool', 'fortnite intel'],
		imageAlt: 'Fortnite patch notes breakdown of buffs nerfs and vaults for Chapter 7 Season 3',
		sections: [
			{
				h2: 'Read patches like a player, not a spectator',
				paragraphs: [
					'Most players misread patch notes by chasing the loudest bullet point. A small SMG nerf gets a rant video while a quiet mobility tweak silently rewires mid-game. The best ranked grinders treat patches like accountants — what changed in expected value?',
					`Official notes publish through ${EXT.fortnite} and ${EXT.epic}. Use those primary sources first, then translate each line into inventory decisions for your playlist.`,
					'Pro Tip — Three-question filter: For every note ask: (1) Does this change my drop path? (2) Does this change my 5-slot priority? (3) Does this change my fight distance? If all three are no, ignore the drama.',
				],
			},
			{
				h2: 'Buff, nerf, and vault framework',
				paragraphs: [
					'Vaults are binary — remove the item from your mental loot pool immediately. Heavy nerfs demote a weapon from core to flex. Light nerfs keep a gun if your accuracy is above lobby average. Buffs deserve a 10-game test before full buy-in. New items need spawn rate and best distance learning first.',
					'If Hammer AR takes a minor bloom or damage trim, it can still be S-tier on expected value — see our <a href="/blog/hammer-ar-s-tier-data-analysis/">Hammer AR tier analysis</a>. If a shotgun loses substantial headshot multiplier, close-range TTK windows shift the same day.',
				],
			},
			{
				h2: 'How notes reshuffle loadout priority',
				paragraphs: [
					'When mid-range ARs are strong, prioritize rarity on AR earlier in loot routes. When mobility is nerfed or vaulted, uncontested chains with shorter hops beat hot drops that require escapes. When heals are buffed, aggressive third-parties become safer — which powers strategies in our <a href="/blog/zero-build-meta-broken-aggressive-strategies/">Zero Build aggression guide</a>.',
					'Also separate balance patches from cosmetic and shop notes. Skin leaks are fun; they do not change TTK. Keep patch-day focus on weapons, healing, movement, and map POI changes.',
				],
			},
			{
				h2: 'Late-season checklist and next steps',
				paragraphs: [
					'Post-patch checklist: skim official notes for vaults first, update your shotgun/AR/mobility/heals spine, play 10 intentional test games, revisit tier-list assumptions, and adjust drop routes if mobility or loot changed.',
					`On big update mornings, confirm ${EXT.status} is healthy before blaming your settings. If you also use information tools in-match, check <a href="/updates/">Fortnite Cheats Updates</a> after Easy Anti-Cheat patches.`,
					'Try This Today: Open the latest official patch notes and highlight vaults. Rewrite your 5-slot priority on paper. Queue a focused 5-game test block and note which fights felt different at 30–60m vs 0–15m.',
				],
			},
		],
	},
	{
		id: 'skin-leaks-c7s3',
		imageKey: 'headerArt',
		published: '2026-07-27',
		updated: '2026-08-01',
		category: 'Skin Leaks & Cosmetics',
		featured: false,
		slug: 'chapter-7-season-3-skin-leaks-vbucks',
		title: 'Chapter 7 Season 3 Skin Leaks: V-Bucks Worth Buying',
		metaDescription:
			'Chapter 7 Season 3 Fortnite skin leaks and shop advice — which cosmetics are worth V-Bucks before Season 4. Save smart and skip FOMO bundles today.',
		h1: 'Chapter 7 Season 3 Skin Leaks Worth Your V-Bucks',
		intro:
			'Season 4 is coming. Here is which leaked and rotating cosmetics are actually worth buying before the shop resets hard.',
		keywords: ['fortnite skin leaks', 'vbucks', 'cosmetics', 'item shop', 'season 4', 'fortnite intel'],
		imageAlt: 'Fortnite Chapter 7 Season 3 skin leaks and V-Bucks shopping guide',
		sections: [
			{
				h2: 'Stop impulse buying before Season 4',
				paragraphs: [
					'Most players blow V-Bucks the week before a new season and then cannot buy the Battle Pass. Controversial take: most Item Shop impulse buys do not improve your win rate or locker happiness a month later.',
					`Shop rotations and Battle Pass exclusives are official through ${EXT.fortnite}. Leaks are entertainment — not a shopping list. Use them to decide what to skip.`,
					'Pro Tip — Locker performance: Pros pick clean silhouettes. Busy outfits can hide enemy outlines in chaotic Zero Build endgames. Style is cool; readability wins games.',
				],
			},
			{
				h2: 'Worth-it criteria every shop reset',
				paragraphs: [
					'Green: unique collab or ripple you will still wear in 90 days. Yellow: cool but overlaps three skins you already own. Red: FOMO bundle with fillers you will never equip. Always reserve Pass or next-season buffer first.',
					'Check bundle math. A 2,800 bundle with two fillers is often worse than waiting for the 1,500 standalone. If the leaked wrap or pickaxe is the only piece you want, skip the full set unless the discount is real.',
				],
			},
			{
				h2: 'Leak watchlist and shop ritual',
				paragraphs: [
					'Treat late-season leak waves as theme previews, not confirmed shop dates. If a high-demand collab leaks, decide budget before it hits — not during the five-minute panic.',
					'Daily reset ritual: open shop for 60 seconds, check wishlist, leave. Liquidity is power at season transitions. For competitive readability tips, pair this with our <a href="/blog/bugha-settings-pro-setup/">pro settings breakdown</a>.',
					'Try This Today: Write a 5-skin wishlist max. Set a V-Bucks floor you will not spend below until Season 4. Skip one FOMO bundle on purpose this week.',
				],
			},
		],
	},
	{
		id: 'hammer-ar-tier-list',
		imageKey: 'aimbotCombat',
		published: '2026-07-25',
		updated: '2026-08-01',
		category: 'Weapon Tier Lists',
		featured: true,
		slug: 'hammer-ar-s-tier-data-analysis',
		title: 'Weapon Tier List: Why Hammer AR Is Actually S-Tier',
		metaDescription:
			'Data-backed Fortnite weapon tier list: why Hammer AR is S-tier — TTK windows, bloom control, and loadout pairings for Chapter 7 Season 3 ranked.',
		h1: 'Weapon Tier List: Why the Hammer AR Is S-Tier',
		intro:
			'Community tier lists underrate the Hammer AR. The damage-per-mag and mid-range TTK numbers say otherwise.',
		keywords: ['hammer ar', 'fortnite tier list', 'weapons', 'ttk', 'fortnite intel'],
		imageAlt: 'Fortnite Hammer AR S-tier weapon tier list data analysis Chapter 7 Season 3',
		sections: [
			{
				h2: 'Why the Hammer AR belongs in S-tier',
				paragraphs: [
					"Creator tier lists are entertainment, not science. They rank flashy mythics while the Hammer AR quietly prints mid-range eliminations because damage-per-second consistency beats higher-ceiling guns average players cannot control.",
					'S-tier means best expected value across 100 ranked fights. Hammer wins at 30–70 meters — the distances where Zero Build and endgame actually happen. Shotguns own 0–15m. Snipers own 80m+. Everything between is AR country.',
					`Confirm live values after patches on ${EXT.fortnite}. Hierarchy logic stays useful even when decimals nudge.`,
					'Pro Tip — Spray discipline: Pros tap or micro-burst until bloom settles, then commit. Treat Hammer like a laser until the enemy wide-peeks — then dump.',
				],
			},
			{
				h2: 'Damage, TTK, and peek theory',
				paragraphs: [
					'Working purple/gold Hammer-style numbers: body ~33–36, head ~50–58, 6-bullet controlled spray ~198–216, 8-bullet dump ~264–288. The real metric is damage before disengage — magazine pressure forgives a whiffed first burst.',
					'First-shot accuracy is the hidden S-tier stat. Cadence: peek → 3–4 bullets → jiggle back → re-peek. Do not stand still for ego sprays unless the enemy is healing.',
					'Pair this mid-range plan with loot discipline from our <a href="/blog/secret-loot-routes-full-gold/">secret loot routes guide</a>.',
				],
			},
			{
				h2: 'Loadout pairings, mistakes, and practice',
				paragraphs: [
					'Core: Hammer AR + high-burst shotgun + mobility + heals. In Zero Build, this supports the laddering strategies in our <a href="/blog/zero-build-meta-broken-aggressive-strategies/">aggression guide</a>.',
					'Common mistakes: full-spraying from 80m+, re-peeking the same pixel, swapping to SMG at 40m out of habit, never practicing crouch-spray in Creative.',
					'Try This Today: Prioritize Hammer for 10 games. Count your first four bullets in every mid fight. If you die inside 15m without shotgun out, fix loadout timing — not the AR.',
					'Players who also use aim-assist tooling can review <a href="/fortnite-aimbot/">Fortnite Aimbot</a> profiles after they lock a sens — mechanics first, tools second.',
				],
			},
		],
	},
	{
		id: 'zero-build-meta-broken',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-22',
		updated: '2026-08-01',
		category: 'Zero Build',
		featured: true,
		slug: 'zero-build-meta-broken-aggressive-strategies',
		title: 'Zero Build Meta Broken: 5 Aggressive Pro Strategies',
		metaDescription:
			'Break the passive Zero Build meta with 5 aggressive Fortnite strategies — timings, damage windows, and fight paths that win ranked in Chapter 7 Season 3.',
		h1: 'The Zero Build Meta Is Broken: 5 Aggressive Strategies',
		intro:
			'Passive third-partying is dead weight. These five aggressive Zero Build strategies flip mid-game fights before the lobby even rotates.',
		keywords: ['zero build', 'fortnite ranked', 'aggressive strategies', 'pro tips', 'fortnite intel'],
		imageAlt: 'Fortnite Zero Build aggressive fight meta strategies Chapter 7 Season 3',
		sections: [
			{
				h2: 'Why the Zero Build meta feels soft',
				paragraphs: [
					'Most Zero Build players wait behind a rock for the last two teams to trade, then spray into a mess. That soft meta is why ranks stall. Strong fighters manufacture first-shot advantage and leave before the third party arrives.',
					'A clean first-shot AR spray at 40–55 meters can delete 80–120 HP before the opponent ads. That window is the game. Information tools like <a href="/fortnite-esp/">Fortnite ESP</a> help — but aggression still needs cover discipline.',
					'Pro Tip — Decide your exit before you swing. Take a 150+ damage window, then hard disengage with mobility before the usual 4–7 second third-party clock.',
				],
			},
			{
				h2: 'Five aggressive strategies that still work',
				paragraphs: [
					'1) Pre-aim rotations — hold upper-chest crosshair on every cover hop; clear angles in 0.4–0.6s. 2) Mobility wedge entries — land 8–12m past the target for a clean shotgun angle, not a panic 180. 3) Double-peek shotgun timing — fake left, finish right when their chamber is weak.',
					'4) Natural cover laddering — never more than 8–12m from hard cover. 5) Zone edge pressure — spray late rotates silhouetted on storm tint, then hold the angle instead of ego-chasing.',
					`Mode rules evolve with ${EXT.epic} seasons; the geometry of first-shot advantage does not.`,
				],
			},
			{
				h2: 'Warmup checklist and next guides',
				paragraphs: [
					'Before ranked: 10 minutes aim or peek maps, loadout priority AR + shotgun + mobility + heals, two POIs with strong cover ladders, and a 10-game first-shot aggression block.',
					'Pair this article with <a href="/blog/secret-loot-routes-full-gold/">loot routes</a>, <a href="/blog/hammer-ar-s-tier-data-analysis/">Hammer AR tiers</a>, and <a href="/blog/creative-warmup-maps-pros-use/">Creative warmups</a>.',
					'Try This Today: Queue Zero Build and force first contact when you have shield + AR. Track whether you disengaged before the 7-second third-party window.',
				],
			},
		],
	},
	{
		id: 'fncs-meta-watch',
		imageKey: 'rebootFight',
		published: '2026-07-20',
		updated: '2026-08-01',
		category: 'Esports & Tournaments',
		featured: false,
		slug: 'fncs-meta-watch-tournament-drops',
		title: 'FNCS Meta Watch: What Tournament Winners Drop',
		metaDescription:
			'FNCS meta watch for Chapter 7 Season 3 — what tournament winners drop, how they loot, and which mid-game habits translate to your ranked climb.',
		h1: 'FNCS Meta Watch: What Tournament Winners Drop and Why',
		intro:
			'Tournament winners are not lucky drop gods. Here is what their POIs, loadouts, and mid-game habits actually optimize for.',
		keywords: ['fncs', 'fortnite esports', 'tournament drops', 'meta', 'fortnite intel'],
		imageAlt: 'FNCS Fortnite tournament meta watch drop spots Chapter 7 Season 3',
		sections: [
			{
				h2: 'Watch tournament film like a coach',
				paragraphs: [
					`Most FNCS drop threads name a POI without contest rate, zone percent, split potential, or exit paths. Pros pick drops like investors pick assets — expected value over vibes. Start with ${EXT.competitive} schedules and VODs, then tag habits.`,
					'Pro Tip — Tag the VOD: landing plan, first heal, first rotate, first voluntary fight, and endgame key move. Five tags beat a full passive watch.',
				],
			},
			{
				h2: 'Drop EV and loadout patterns',
				paragraphs: [
					'Score every POI on contest rate, loot quality by ~2:00, zone pain, exit path, and split potential. Edge POIs with clean exits often beat sexy mid POIs that look good on stream.',
					'Expect shotgun + mid AR (often Hammer-class) + mobility + heals as the spine. Mythics are taken when free, not forced — matching our <a href="/blog/hammer-ar-s-tier-data-analysis/">Hammer AR analysis</a>.',
				],
			},
			{
				h2: 'What translates to ranked',
				paragraphs: [
					'Translate loot-timer discipline, loadout spine, early rotates, and selective fights. Do not blindly mirror a trio drop in solo queue.',
					'Winners rotate early enough to choose sides. Zone edge pressure from our <a href="/blog/zero-build-meta-broken-aggressive-strategies/">Zero Build guide</a> shows up constantly in endgames.',
					'Try This Today: Watch 15 minutes of a winner VOD with five timestamps. Steal one mid-game habit only. Run it for a 6-game ranked block.',
				],
			},
		],
	},
	{
		id: 'secret-loot-routes',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-07-18',
		updated: '2026-08-01',
		category: 'Battle Royale Meta',
		featured: true,
		slug: 'secret-loot-routes-full-gold',
		title: 'Secret Loot Routes: Leave Spawn Full Gold Every Game',
		metaDescription:
			'High-percentage Fortnite loot routes that leave spawn with gold guns, full shields, and mobility — Chapter 7 Season 3 drop paths that win mid-game.',
		h1: 'Secret Loot Routes: How to Leave Spawn with Full Gold',
		intro:
			'Winning starts before the first fight. These loot routes consistently convert drops into gold loadouts and full heals.',
		keywords: ['fortnite loot routes', 'drops', 'gold loot', 'ranked', 'fortnite intel'],
		imageAlt: 'Fortnite secret loot routes full gold spawn guide Chapter 7 Season 3',
		sections: [
			{
				h2: 'The real ranked bottleneck is early inventory',
				paragraphs: [
					'Most ranked deaths before first zone happen because players loot randomly. Pros treat the first 90 seconds like a speedrun with a shopping list — not a deathmatch.',
					'Controversial take: drop spot matters less than loot sequence. A mediocre POI with discipline beats a stacked POI with panic looting.',
					'Pro Tip — Secure shotgun, AR, and heals before hunting kills. Early ego chases keep hot-drop players hardstuck.',
				],
			},
			{
				h2: 'Three route archetypes that print Elo',
				paragraphs: [
					'Route A — contested edge POI (3–6 players): land outer roof loot, snake inward, leave before late third parties (~2 minutes). Route B — uncontested three-POI chain: sacrifice early kills for purple/gold inventory by minute three. Route C — mid-map surge: loot vacuum piles 90–150 seconds after hot drops empty.',
					'Timing targets: 0–20s first gun, 20–50s clear cluster, 50–80s chests + minis, 80–120s upgrade or leave. Slot priority: shotgun, AR, mobility, heals, flex.',
					`POI names rotate with ${EXT.fortnite} seasons — keep the geometry, not the landmark brand.`,
				],
			},
			{
				h2: 'Convert gold guns into wins',
				paragraphs: [
					'Pair these routes with <a href="/blog/zero-build-meta-broken-aggressive-strategies/">Zero Build aggression</a> and <a href="/blog/hammer-ar-s-tier-data-analysis/">Hammer AR tiers</a>. Leave spawn rich so mid-game becomes a skill check.',
					'If you use loot ESP markers in practice, read <a href="/fortnite-esp/">Fortnite ESP</a> for category toggles — then still run the timer so habits stay sharp without overlays.',
					'Try This Today: Run one uncontested chain for 8 games. Screenshot inventory at 2:30 and compare rarities before adding a contested edge day.',
				],
			},
		],
	},
	{
		id: 'bugha-settings',
		imageKey: 'cheatsPackage',
		published: '2026-07-12',
		updated: '2026-08-01',
		category: 'Pro Player Setups',
		featured: false,
		slug: 'bugha-settings-pro-setup',
		title: "Bugha's Settings: Copy a Champion Setup That Works",
		metaDescription:
			'Bugha-inspired Fortnite settings guide — sensitivity ranges, binds philosophy, and practice routines that still work in Chapter 7 Season 3 ranked.',
		h1: "Bugha's Sensitivity & Settings: Champion-Inspired Setup",
		intro:
			'You do not need exact pro digits — you need champion settings philosophy. Here is a setup you can adapt today.',
		keywords: ['bugha settings', 'fortnite sensitivity', 'binds', 'pro setup', 'fortnite intel'],
		imageAlt: 'Bugha Fortnite sensitivity settings pro player setup guide',
		sections: [
			{
				h2: 'Settings remove friction — they are not magic',
				paragraphs: [
					"Copying a world champion's settings will not make you a world champion. Copying stable sens, low clutter, reachable binds, and a ruthless warmup removes friction so aim and decisions can improve.",
					'Pro Tip — Change one variable at a time. Never retune sens, binds, and HUD the same night.',
				],
			},
			{
				h2: 'Sensitivity, binds, and performance',
				paragraphs: [
					'Use an eDPI band that lets you 180 with a controlled swipe without over-flicking shotguns. If you overshoot close targets, lower slightly. If you cannot track strafers at 40m with Hammer AR, raise cautiously — then lock settings for 14 days.',
					'Put edit, crouch, and mobility on keys you can hit while still aiming. Make slot 1 shotgun and slot 2 AR muscle memory. Prefer performance clarity over cinema settings; motion blur off.',
					`Hardware and competitive context evolve, but fundamentals stay — see ${EXT.competitive} for high-level play standards.`,
				],
			},
			{
				h2: 'Champion-style practice routine',
				paragraphs: [
					'0–10 minutes aim tracker, 10–20 peek or edit drills, 20–30 realistic fights, then ranked. Pair with our <a href="/blog/creative-warmup-maps-pros-use/">Creative warmup map categories</a>.',
					'If you later configure Aimbot smoothness for practice tooling, start from <a href="/fortnite-soft-aim/">soft aim</a> after your raw sens is locked — never chase both variables at once.',
					'Try This Today: Write dpi + sens, adjust at most once by a small percent, then play 5 games without touching settings again.',
				],
			},
		],
	},
	{
		id: 'creative-warmup-maps',
		imageKey: 'playerEsp',
		published: '2026-07-08',
		updated: '2026-08-01',
		category: 'Creative Mode',
		featured: false,
		slug: 'creative-warmup-maps-pros-use',
		title: '10 Creative Warmup Maps Pros Use Before Ranked',
		metaDescription:
			'Ten Fortnite Creative warmup map categories and a 25-minute routine pros use before ranked — aim, peeks, edits, and Zero Build fight reps now.',
		h1: '10 Creative Mode Maps Pros Use to Warm Up Before Ranked',
		intro:
			'Stop freezing in first fight. These Creative warmup categories get your mechanics hot before you touch ranked.',
		keywords: ['fortnite creative', 'warmup maps', 'aim trainers', 'ranked', 'fortnite intel'],
		imageAlt: 'Fortnite Creative Mode warmup maps pros use before ranked',
		sections: [
			{
				h2: 'Warmups win Elo before the queue starts',
				paragraphs: [
					'Your first two ranked fights often decide whether a session tilts. Pros arrive sharp from Creative — another 40 pub stomps is a worse warmup than 20 focused minutes.',
					`Find current island codes in Creative via ${EXT.fortnite}. We list durable categories because brittle codes die every season update.`,
					'Pro Tip — Keep a sticky core playlist. Swap one map per week, not every day.',
				],
			},
			{
				h2: '25-minute routine and ten map categories',
				paragraphs: [
					'0–8 min aim tracker. 8–15 min edit course or Zero Build peek map. 15–22 min realistic fight / box fight / zone wars. 22–25 min reset, then ranked.',
					'Categories: pure aim tracker, shotgun scenarios, mid-range AR tracking (Hammer practice), piece control/edits, Zero Build cover peeks, realistic 1v1s, zone wars, reload/swap timing, movement tech, scrim-style multi-fight maps.',
					'Zero Build mains should replace edit courses with double-peek ladders from our <a href="/blog/zero-build-meta-broken-aggressive-strategies/">aggression guide</a>.',
				],
			},
			{
				h2: 'Mistakes that waste warmup time',
				paragraphs: [
					'Only melting easy bots, ignoring mid-range, warming up 90 minutes then playing two tilted games, and changing binds mid-warmup all waste Elo.',
					'After mechanics are hot, information tools like <a href="/fortnite-radar-hack/">radar hack</a> or <a href="/fortnite-esp/">ESP</a> are optional overlays — they do not replace a cold shotgun timing.',
					'Try This Today: Favorite four maps across aim, peeks, fights, and endgame. Run the 25-minute block, then play only six ranked games.',
				],
			},
		],
	},
];

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	const translations = LOCALES.map((code) => `\t\t${code}: ${translationBlock(src)},`).join('\n');
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
${translations}
		},
	}`;
}

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);

for (const src of sources) {
	const tLen = src.title.length;
	const dLen = src.metaDescription.length;
	if (tLen > 70) console.warn(`WARN title ${src.id}: ${tLen} chars`);
	if (dLen > 160) console.warn(`WARN meta ${src.id}: ${dLen} chars`);
	if (dLen < 140) console.warn(`WARN short meta ${src.id}: ${dLen} chars`);
}

console.log(`Wrote ${sources.length} posts → ${OUT}`);
