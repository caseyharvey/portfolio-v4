module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#1E1E1E",
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
