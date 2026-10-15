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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#faf6f7",
          100: "#f4eaec",
          200: "#e8d4d8",
          300: "#d5b4bb",
          400: "#bd8f99",
          500: "#a97e88",
          600: "#966873",
          700: "#7d5560",
          800: "#67474f",
          900: "#563d44",
          950: "#2f2125",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
