// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static Cloudflare Pages site — no deployment adapter.
// Do not add @astrojs/cloudflare; sitemaps and HTML must emit to dist/ root.
// https://astro.build/config
export default defineConfig({
	site: 'https://fortnitecheats.net',
	trailingSlash: 'always',
	compressHTML: true,
	devToolbar: { enabled: false },
	build: {
		inlineStylesheets: 'auto',
		format: 'directory',
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: true,
			minify: 'esbuild',
			assetsInlineLimit: 4096,
			target: 'es2022',
		},
	},
});
