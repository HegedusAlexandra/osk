/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'paper':'url(./assets/pictures/paper.jpg)'
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'afacad':['Afacad', 'sans-serif'],
        'playfair':['Playfair Display', 'serif'],
        'montserrat':['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [],
}

