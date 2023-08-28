/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'logo-font' : ['Island Moments', 'cursive'],
        'quotes' : ['Fasthand', 'cursive']
      }
    },
  },
  plugins: [],
}