import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [],
  i18n: {
    defaultLocale: "en",
    locales: ["mk", "en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
