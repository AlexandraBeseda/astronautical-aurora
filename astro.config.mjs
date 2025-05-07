import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  integrations: [svelte(), tailwind()],
  adapter: node({
    mode: "standalone",
  }),
});
