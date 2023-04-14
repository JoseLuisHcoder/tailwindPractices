
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pri:'#0D1117',
        sec:'#E6E6E6',
        tre:'#FF4D00',
        for:'#3178C6'
      },
      fontFamily:['Lato', ...defaultTheme.fontFamily.sans]
    },
     },
  plugins: [],
}