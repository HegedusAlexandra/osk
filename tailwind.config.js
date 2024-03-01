/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'noc':'./assets/pictures/no_cloud_1.png'
      }
    },
  },
  plugins: [],
}

