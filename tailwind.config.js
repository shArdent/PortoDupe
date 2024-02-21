/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      color : {
        background : "#0F172A",
        highlight : "#E2E8F0",
        lowerlight : "#C4D0EC",
        paragpraph : "#808EA3",
        bubble : "#00915c",
        bubleText : "#9cf0cb",
      }
    }
  },
  plugins: [],
}

