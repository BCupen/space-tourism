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
        sub: ['Barlow Condensed'],
        body: ['Barlow']
      },
      backgroundImage: {
        "destination-desktop":
          `url("/space-tourism/background-destination-desktop.jpg")`,
        "destination-tablet":
          `url("/space-tourism/background-destination-tablet.jpg")`,
        "destination-mobile":
          `url("/space-tourism/background-destination-mobile.jpg")`,

        "crew-desktop": `url("/space-tourism/background-crew-desktop.jpg")`,
        "crew-tablet": `url("/space-tourism/background-crew-tablet.jpg")`,
        "crew-mobile": `url("/space-tourism/background-crew-mobile.jpg")`,

        "home-desktop": `url("/space-tourism/background-home-desktop.jpg")`,
        "home-tablet": `url("/space-tourism/background-home-tablet.jpg")`,
        "home-mobile": `url("/space-tourism/background-home-mobile.jpg")`,
        "technology-desktop":
          `url("/space-tourism/background-technology-desktop.jpg")`,
        "technology-tablet":
          `url("/space-tourism/background-technology-tablet.jpg")`,
        "technology-mobile":
          `url("/space-tourism/background-technology-mobile.jpg")`,
      },
    },
  },
  plugins: [],
};
