/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ['"Rancho"', "cursive"],
      body: ['"Raleway"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#E3B577",
        secondary: "#333A73",
        dark: "#082f49",
        light: "#030712B2",
      },
      backgroundImage: {
        "header-bg": "url('./src/assets/images/more/15.jpg')",
        "banner-bg": "url('./src/assets/images/more/6.jpeg')",
      }
    },
  },
  plugins: [],
};
