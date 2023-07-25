/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#f54242",
      primaryLight: "#fa6e6e",
      secondary: "#faf5ef",
      white: "#fff",
      black: "#000",
      gray: "#ccc",
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
