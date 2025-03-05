import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbg: "#f5f5f5",
        lightPrimary: "#e2e0e0",
        lightSecondary: "rgba(173, 170, 173, 0.4)",
        lightHover: "#D1D5DB",
        darkbg: "#020305",
        darkPrimary: "#1d1c1c",
        darkSecondary: "rgba(65, 61, 61, 0.75)",
        darkHover: "#262c36",
      },
      fontFamily: {
        emoji: [
          "Twemoji Country Flags",
          "Apple Color Emoji",
          "Noto Color Emoji",
          "sans-serif",
        ],
        "courier-prime": "var(--font-courier)",
      },
    },
  },
  plugins: [],
};
export default config;
