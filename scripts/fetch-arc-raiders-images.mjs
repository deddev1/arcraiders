import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');

const SOURCES = [
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/80/31/x2fzulsskksosc4gog04c.webp?p=ancient-arc-s1.webp&s=s3',
		file: 'rust-hacks-hero.webp',
		alt: 'Arc Raiders hacks gameplay — extraction combat overview',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/75/fz/c1f82mos8g4ww8owgg40k.webp?p=ancient-arc-s2.webp&s=s3',
		file: 'rust-esp-overlay.webp',
		alt: 'Arc Raiders ESP overlay showing enemy ARC units and raiders',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/68/es/jdt3yccg4ssok4c0ggc4g.webp?p=ancient-arc-s3.webp&s=s3',
		alt: 'Arc Raiders wallhack view through industrial ruins',
		file: 'rust-esp-bots.webp',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/1r/df/28idk3wg4wcwwgkwo80wo.webp?p=ancient-arc-s4.webp&s=s3',
		file: 'rust-esp-hitbox.webp',
		alt: 'Arc Raiders aimbot targeting ARC machines in combat',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/z6/4o/gzmcbfkkksgcw4gsgcks.webp?p=ancient-arc-s5.webp&s=s3',
		file: 'rust-aimbot-menu.webp',
		alt: 'Arc Raiders cheat menu with ESP and aimbot toggles',
	},
	{
		url: 'https://cdn.wh-satano.ru/ancient-arc-s6.webp',
		file: 'rust-recoil-trainer.webp',
		alt: 'Arc Raiders hacks squad push through collapsed city zone',
	},
];

const VARIANT_WIDTHS = [480, 640, 960, 1400];

async function download(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function writeMaster(buffer, file) {
	const masterPath = join(outDir, file);
	await writeFile(masterPath, buffer);
	return masterPath;
}

async function writeVariants(buffer, file) {
	const base = file.replace(/\.webp$/i, '');
	for (const width of VARIANT_WIDTHS) {
		const variantPath = join(outDir, `${base}-${width}w.webp`);
		await sharp(buffer)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: 82 })
			.toFile(variantPath);
	}
}

await mkdir(outDir, { recursive: true });

for (const item of SOURCES) {
	console.log(`Fetching ${item.file}…`);
	const buffer = await download(item.url);
	await writeMaster(buffer, item.file);
	await writeVariants(buffer, item.file);
	console.log(`  ✓ ${item.file} (+ variants)`);
}

console.log('Done — 6 Arc Raiders images installed.');
