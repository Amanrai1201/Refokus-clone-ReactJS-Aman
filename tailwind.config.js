/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monter: ['Montserrat', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      }
    },
  },
  plugins: [],
}