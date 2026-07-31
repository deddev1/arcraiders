// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static Cloudflare Pages site — no deployment adapter.
// Do not add @astrojs/cloudflare; sitemaps and HTML must emit to dist/ root.
// https://astro.build/config
export default defineConfig({
	site: 'https://fortnitecheats.xyz',
	trailingSlash: 'always',
	compressHTML: true,
	devToolbar: { enabled: false },
	build: {
		// Inline CSS to eliminate render-blocking stylesheets (validated higher than 'auto' on mobile)
		inlineStylesheets: 'always',
		format: 'directory',
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: true,
			minify: 'terser',
			assetsInlineLimit: 4096,
			target: 'es2022',
			rollupOptions: {
				output: {
					manualChunks: undefined,
				},
			},
		},
	},
});
