/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B0D17',
        blue: '#D0D6F9',
      },
      fontFamily: {
        default: ['Bellefair']
      }
    },
  },
  plugins: [],
}