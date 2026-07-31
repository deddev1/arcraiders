import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

/** Hero LCP asset — responsive widths for srcset */
const HERO_WIDTHS = [640, 960, 1400];

async function optimizeHero() {
	const source = path.join(imagesDir, 'fortnite-cheats-hero.webp');
	const meta = await sharp(source).metadata();
	const results = [];

	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const file = `fortnite-cheats-hero-${width}w.webp`;
		const dest = path.join(imagesDir, file);
		const buffer = await sharp(source)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: 78, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		results.push({ file, width, bytes: buffer.length });
		console.log(`Wrote ${file} (${buffer.length} bytes)`);
	}

	return results;
}

const results = await optimizeHero();
console.log(`Done — ${results.length} responsive hero variants.`);
