import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.08)",
        primaryText: "#F5F5F7",
        secondaryText: "#A1A1AA",
        accent: "#7C3AED",
        accent2: "#00D4FF",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
