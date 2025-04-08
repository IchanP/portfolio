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
        lightHover: "#D1D5DB",
        blueAccent: "#0288D1",
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
        ovo: "var(--font-ovo)",
        outfit: "var(--font-outfit)",
      },
      borderRadius: {
        large: "2rem",
      },
      keyframes: {
        scrollInFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        scrollInFromTop: "scrollInFromTop 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
