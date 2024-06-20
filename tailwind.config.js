/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B0D17",
        blue: "#D0D6F9",
      },
      fontFamily: {
        default: ["Bellefair"],
        nav: ['Barlow'],
      },
      backgroundImage: {
        "destination-desktop":
          'url("./src/assets/destination/background-destination-desktop.jpg")',
        "destination-tablet":
          'url("./src/assets/destination/background-destination-tablet.jpg")',
        "destination-mobile":
          'url("./src/assets/destination/background-destination-mobile.jpg")',

        "crew-desktop": 'url("./src/assets/crew/background-crew-desktop.jpg")',
        "crew-tablet": 'url("./src/assets/crew/background-crew-tablet.jpg")',
        "crew-mobile": 'url("./src/assets/crew/background-crew-mobile.jpg")',

        "home-desktop": 'url("./src/assets/home/background-home-desktop.jpg")',
        "home-tablet": 'url("./src/assets/home/background-home-tablet.jpg")',
        "home-mobile": "url('./src/assets/home/background-home-mobile.jpg')",
        "technology-desktop":
          'url("./src/assets/technology/background-technology-desktop.jpg")',
        "technology-tablet":
          'url("./src/assets/technology/background-technology-tablet.jpg")',
        "technology-mobile":
          'url("./src/assets/technology/background-technology-mobile.jpg")',
      },
    },
  },
  plugins: [],
};
