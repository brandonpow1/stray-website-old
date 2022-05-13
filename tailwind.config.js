module.exports = {
  content: [
    "*.{html,js,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'boogaloo': ['"Boogaloo"','regular']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
