#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'fortnite-esp'],
	['warzone-aimbot', 'fortnite-aimbot'],
	["'ricochet'", "'eac-bypass'"],
	['ricochet-bypass', 'eac-bypass-fortnite'],
	['undetected-warzone-cheats', 'undetected-fortnite-cheats'],
	['warzone-wallhack', 'fortnite-wallhack'],
	['warzone-radar-hack', 'fortnite-radar-hack'],
	['warzone-cheats-2026', 'fortnite-cheats-2026'],
	['call-of-duty-warzone-cheats', 'fortnite-cheats'],
	['call-of-duty-warzone', 'fortnite'],
	['Call of Duty: Warzone', 'Fortnite'],
	['Call of Duty Warzone', 'Fortnite'],
	['Warzone Cheats', 'Fortnite Cheats'],
	['Warzone cheats', 'Fortnite cheats'],
	['Warzone cheat', 'Fortnite cheat'],
	['Warzone ESP', 'Fortnite ESP'],
	['Warzone Aimbot', 'Fortnite Aimbot'],
	['Warzone wallhack', 'Fortnite wallhack'],
	['Warzone radar', 'Fortnite radar'],
	['Warzone firefights', 'Fortnite firefights'],
	['Warzone combat', 'Fortnite combat'],
	['Warzone patches', 'Fortnite patches'],
	['Warzone updates', 'Fortnite updates'],
	['Warzone setup', 'Fortnite setup'],
	['Warzone license', 'Fortnite license'],
	['Warzone licenses', 'Fortnite licenses'],
	['Warzone sessions', 'Fortnite sessions'],
	['in Warzone', 'in Fortnite'],
	['for Warzone', 'for Fortnite'],
	['Warzone on', 'Fortnite on'],
	['Warzone or', 'Fortnite or'],
	['Warzone\'s', 'Fortnite\'s'],
	['Warzone ', 'Fortnite '],
	['Ricochet anti-cheat', 'Easy Anti-Cheat (EAC)'],
	['Ricochet maintenance', 'EAC maintenance'],
	['Ricochet bypass', 'EAC bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet', 'Easy Anti-Cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@fortnitecheats.xyz'],
	['Verdansk, Urzikstan, and Rebirth Island', 'Battle Royale island, Zero Build, and competitive lobbies'],
	['Verdansk, Urzikstan and Rebirth Island', 'Battle Royale island, Zero Build and competitive lobbies'],
	['gulag fights', 'reboot van rotations'],
	['gulag fight', 'reboot van fight'],
	['gulag rounds', 'respawn rounds'],
	['gulag', 'reboot van'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and Battle Royale', 'Zero Build and Battle Royale'],
	['BR and Resurgence', 'BR and Zero Build'],
	['BR & Resurgence', 'BR & Zero Build'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Fortnite combat pace'],
	['COD', 'Fortnite'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Fortnite Cheats',
	game: 'Fortnite',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Battle Royale island, Zero Build, and competitive lobbies'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
