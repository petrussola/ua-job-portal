// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";
const { URL } = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: URL ?? "",
  integrations: [tailwind(), partytown(), sitemap()],
});
