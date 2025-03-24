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
        darkbg: "rgb(18, 18, 18)" /* Slightly adjusted dark background */,
        darkPrimary: "rgb(80, 11, 64)" /* Deep purple primary color */,
        darkSecondary: "rgb(70, 68, 69)" /* Complementary neutral dark color */,
        darkHover: "rgb(109, 30, 105)" /* Lighter shade for hover effect */,
      },
      fontFamily: {
        emoji: [
          "Twemoji Country Flags",
          "Apple Color Emoji",
          "Noto Color Emoji",
          "sans-serif",
        ],
        lexend: "var(--font-lexend)",
        roboto: "var(--font-roboto)",
        "courier-prime": "var(--font-courier)",
      },
      borderRadius: {
        large: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
