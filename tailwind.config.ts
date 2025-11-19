import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151617",
        primary: "#F5F5F5",
        secondary: "#A1A1A1",
        border: "#2A2C2F",
        accent: "#D2D2D2",
        // Extended palette for project detail pages
        "bg-main": "#151617",
        "bg-card": "#1A1C1D",
        "text-primary": "#FFFFFF",
        "text-secondary": "#D0D0D0",
        "text-body": "#C7C7C7",
        "text-meta-label": "#7D7D7D",
        "text-meta-value": "#EDEDED",
        "placeholder": "#707070",
        "white-pure": "#FFFFFF",
        "white-soft": "#F5F5F5",
        "white-off": "#E8E8E8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

