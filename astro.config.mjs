// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://gridforesight.com",
	output: "static",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
