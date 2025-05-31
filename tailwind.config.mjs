/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "mk-red": "#D20000",
        "mk-yellow": "#FFE600",
      },
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
