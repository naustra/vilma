import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://naustra.github.io",
  base: "vilma",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "mk"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
