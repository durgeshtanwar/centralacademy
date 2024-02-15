/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#20203E",
        secondary: "#FE9200",
        lightPrimary: "#26335D",
      },
      backgroundImage: {
        school: "url('/dist/images/school-banner.png')",
      },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
