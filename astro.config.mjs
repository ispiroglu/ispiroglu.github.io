import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

	// https://astro.build/config
export default defineConfig({
	srcDir: "./app",
	output: "server",
	session: false,
	integrations: [react(), mdx()],
	adapter: cloudflare(),
	vite: {
		plugins: [tailwindcss()],
		// Match the previous react-router build (vite 7): esbuild CSS minification
		// with the vite 7 baseline target, so the emitted CSS stays byte-identical
		// to the old build (vite 8 defaults to lightningcss + newer targets).
		// vite 8 resolves "esbuild" from node_modules (hoisted 0.28.2 from astro).
		// vite 7 set no esbuild legalComments default, so esbuild's own
		// behavior applied: /*! banners stay inline. vite 8 defaults to
		// "none", which would strip the tailwind banner — restore inline.
		esbuild: {
			legalComments: "inline",
		},
		build: {
			cssMinify: "esbuild",
			// vite 7 default cssTarget: esbuild's baseline-widely-available
			// expansion (chrome107/edge107/firefox104/safari16) — strips
			// obsolete vendor prefixes (-moz-tab-size, -webkit-appearance).
			cssTarget: ["chrome107", "edge107", "firefox104", "safari16"],
		},
	},
	redirects: {
		// /home was a legacy alias for the index page (302, matching React Router redirect())
		"/home": { status: 302, destination: "/" },
		// /writing routes were replaced by /logs (301 permanent redirects).
		// The /writing/[slug] -> /logs/[slug] rule lives in public/_redirects:
		// the adapter appends "/index.html" to dynamic [slug] destinations,
		// which 404s — the file-based rule redirects to the clean path.
		"/writing": { status: 301, destination: "/logs" },
	},
});
