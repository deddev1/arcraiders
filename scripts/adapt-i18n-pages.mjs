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
	['warzone-esp', 'rust-esp'],
	['warzone-aimbot', 'rust-aimbot'],
	["'ricochet'", "'eac-bypass'"],
	['ricochet-bypass', 'eac-bypass-rust'],
	['undetected-warzone-cheats', 'undetected-rust-cheats'],
	['warzone-wallhack', 'rust-wallhack'],
	['warzone-radar-hack', 'rust-radar-hack'],
	['warzone-cheats-2026', 'rust-cheats-2026'],
	['call-of-duty-warzone-cheats', 'rust-cheats'],
	['call-of-duty-warzone', 'rust'],
	['Call of Duty: Warzone', 'Rust'],
	['Call of Duty Warzone', 'Rust'],
	['Warzone Cheats', 'Rust Cheats'],
	['Warzone cheats', 'Rust cheats'],
	['Warzone cheat', 'Rust cheat'],
	['Warzone ESP', 'Rust ESP'],
	['Warzone Aimbot', 'Rust Aimbot'],
	['Warzone wallhack', 'Rust wallhack'],
	['Warzone radar', 'Rust radar'],
	['Warzone firefights', 'Rust firefights'],
	['Warzone combat', 'Rust combat'],
	['Warzone patches', 'Rust patches'],
	['Warzone updates', 'Rust updates'],
	['Warzone setup', 'Rust setup'],
	['Warzone license', 'Rust license'],
	['Warzone licenses', 'Rust licenses'],
	['Warzone sessions', 'Rust sessions'],
	['in Warzone', 'in Rust'],
	['for Warzone', 'for Rust'],
	['Warzone on', 'Rust on'],
	['Warzone or', 'Rust or'],
	['Warzone\'s', 'Rust\'s'],
	['Warzone ', 'Rust '],
	['Ricochet anti-cheat', 'Easy Anti-Cheat (EAC)'],
	['Ricochet maintenance', 'EAC maintenance'],
	['Ricochet bypass', 'EAC bypass'],
	['Ricochet Bypass', 'EAC Bypass'],
	['Ricochet', 'Easy Anti-Cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@rusthacks.net'],
	['Verdansk, Urzikstan, and Rebirth Island', 'monuments, oil rigs, and wipe-cycle raids'],
	['Verdansk, Urzikstan and Rebirth Island', 'monuments, oil rigs and wipe-cycle raids'],
	['gulag fights', 'monument rotations'],
	['gulag fight', 'oil rig fight'],
	['gulag rounds', 'respawn rounds'],
	['gulag', 'monument'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and survival', 'monuments and raids'],
	['BR and Resurgence', 'PVE and PVP'],
	['BR & Resurgence', 'PVE & PVP'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Facepunch\''],
	['Call of Duty combat pace', 'Rust combat pace'],
	['COD', 'Rust'],
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
	product: 'Rust Cheats',
	game: 'Rust',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'monuments, oil rigs, and wipe-cycle raids'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
