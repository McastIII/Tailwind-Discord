/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        primary:'#404eed',
        grey: '#E8EDF0',
      },


      backgroundImage: {
        'hmBG': 'url("./img/background.svg")',
      },
    },  
  },
  plugins: [],
}

