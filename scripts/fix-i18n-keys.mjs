#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Warzone Cheats', 'Fortnite Cheats'],
	['Warzone cheats', 'Fortnite cheats'],
	['Warzone Cheats', 'Fortnite Cheats'],
	['Call of Duty: Warzone', 'Fortnite'],
	['Call of Duty Warzone', 'Fortnite'],
	['Call of Duty', 'Fortnite'],
	['Warzone PC', 'Fortnite PC'],
	['for Warzone', 'for Fortnite'],
	['Warzone ', 'Fortnite '],
	['warzone ', 'fortnite '],
	['Ricochet maintenance', 'EAC maintenance'],
	['Ricochet anti-cheat', 'Easy Anti-Cheat (EAC)'],
	['Ricochet', 'Easy Anti-Cheat (EAC)'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Battle Royale island'],
	['Verdansk', 'Battle Royale island'],
	['Resurgence', 'Zero Build'],
	['gulag', 'reboot van'],
	['warzonescheats.net', 'fortnitecheats.xyz'],
	['Trucos Warzone', 'Trucos Fortnite'],
	['Triches Warzone', 'Triches Fortnite'],
	['Cheats Warzone', 'Cheats Fortnite'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'eac-bypass': {");
pagesEn = pagesEn.replace(/Fortnite Warzone/g, 'Fortnite');
pagesEn = pagesEn.replace(/for Fortnite Warzone/g, 'for Fortnite');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'ricochet'/g, "'eac-bypass'");
pagesI18n = pagesI18n.replace(/ricochet:/g, "'eac-bypass':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
