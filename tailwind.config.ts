import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B1454",
          foreground: "#FFFFFF"
        },
        accent: {
          DEFAULT: "#FF7A1A",
          foreground: "#1A1A1A"
        },
        surface: "#F6F5FA",
        muted: "#ECEAF4"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 20px 40px -20px rgba(43, 20, 84, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
