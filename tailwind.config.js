module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#1E1E1E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
