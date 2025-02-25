/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'], // Use the CSS variable
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paleBlack: "#333333",
        pink: "#E81540",
        paleWhite: "#f4f4f4",
        paleBlue: "#0a6ca9",
        paleGreen: "#2cb34a",
      },
    },
  },
  plugins: [],
};
