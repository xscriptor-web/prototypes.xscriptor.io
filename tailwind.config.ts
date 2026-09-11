import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D4A3E",
          dark: "#1E332A",
          light: "#4A6B5C",
        },
        background: {
          DEFAULT: "#FFFFFF",
          light: "#FAFAF8",
        },
        text: {
          DEFAULT: "#1E332A",
          muted: "#4A6B5C",
          light: "#7A9A86",
        },
        accent: {
          DEFAULT: "#8B5E3C",
          light: "#C4956A",
        },
        muted: {
          DEFAULT: "#7A9A86",
          light: "#B8C9BD",
        },
        cream: "#FAFAF8",
        parchment: "#F5F2ED",
        wood: {
          dark: "#5C3D2E",
          medium: "#8B5E3C",
          light: "#C4956A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-lora)", "Lora", "Georgia", "serif"],
        accent: ["var(--font-caveat)", "Caveat", "cursive"],
        hub: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        hubmono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
