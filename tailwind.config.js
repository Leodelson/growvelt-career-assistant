/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7c3aed",   // main purple
          light: "#faf5ff",     // soft background
          dark: "#5b21b6",      // deep purple
        },
      },
    },
  },
  plugins: [],
};