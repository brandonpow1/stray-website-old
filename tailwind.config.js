module.exports = {
  content: [
    "*.{html,js,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'boogaloo': ['"Boogaloo"', 'regular']
      },
      backgroundImage: {
        'beach': "url('img/bg/beach.webp');",
        'beach1': "url('img/bg/beach1.webp');",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
