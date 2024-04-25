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
        secondary: "#ECEAE3",
        dark: "#331A15",
        light: "#5C5B5B",
      },
      backgroundImage: {
        "header-bg": "url('./src/assets/images/more/15.jpg')",
        "banner-bg": "url('./src/assets/images/more/6.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
