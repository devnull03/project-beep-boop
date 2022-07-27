import { sveltekit } from "@sveltejs/kit/vite";
import { VitePWA } from "vite-plugin-pwa";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), VitePWA({ registerType: "autoUpdate", scope: "/project-beep-boop" })],
  base: "/project-beep-boop",
};

export default config;
