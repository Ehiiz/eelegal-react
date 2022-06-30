/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        legalBlue : "#05546D",
        lilBlue: "#C3E8F1",
        navGrey : "#2D2F30",
        bioText: "#8B8C8C",
        footBlue: "#0F6E8C",
        heroBack: "#F2FCFF",
        footStrong: "#027794",
        featBrown: "#363940",
        footFill: "#D9DBE1"
        // 094B72,
      },
      fontFamily:{
        poppins : ["Poppins"],
        playfair:["Playfair"],
        montserrat:["Montserrat"],
        rubik:["Rubik"],
        shippori:["Shippori Antique"]
      } 
    },
  },
  plugins: [],
}
