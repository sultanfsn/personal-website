const { relative } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files:[
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",]
    },
    theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'white': '#FCFCFC',
        'grey': '#C5C5C5',
        'grey-dark':'#A7A5A5',
        'blue':'#006BD3',
        'blue-light':'#4A9AE8',
        'blue-dark':'#004F9C',
        'sand-white':'#D1CEC7',
        'blurry-white':'#F3F3F3'
      },
      boxShadow: {
        'basic': 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
      }
    }
  },
  plugins: [
  ],
}
