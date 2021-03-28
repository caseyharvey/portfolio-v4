module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#1E1E1E",
        darkHover: "#F59E0B",
        lightHover: "#9A9A9A",
      },
      fontFamily: {
        sans: ["Questrial", "system-ui"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
