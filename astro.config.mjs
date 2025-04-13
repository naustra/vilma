import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://naustra.github.io",
  base: "/vilma",
  integrations: [],
  i18n: {
    defaultLocale: "mk",
    locales: ["mk", "en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
