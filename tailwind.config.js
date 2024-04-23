/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ["Rancho", "cursive"],
      'body': ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: '#50C4ED',
        secondary: '#333A73',
        dark: '#082f49',
        light: '#030712B2',
      }
    },
  },
  plugins: [],
}

