const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lustra: ["Lustra", "sans-serif"],
      },
    },
  },
  plugins: [],
}
