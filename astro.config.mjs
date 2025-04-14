import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://macedonianwithvilma.com",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "mk"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
