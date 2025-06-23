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
        blueAccent: "#025F92",
        darkblueAccent: "#5DC2F9",
        darkbg: "#252323",
        darkPrimary: "#3A3939",
        darkInteract: "#484747" /* Lighter shade for hover effect */,
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
      margin: {
        page: "40px",
      },
      animation: {
        scrollInFromTop: "scrollInFromTop 0.5s ease-out",
      },
      screens: {
        "2k-wide": "2400px",
      },
    },
  },
  plugins: [],
};
export default config;
