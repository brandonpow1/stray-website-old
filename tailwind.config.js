module.exports = {
  content: ["./src/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        'boogaloo': ['"Boogaloo"','regular']
      }
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
