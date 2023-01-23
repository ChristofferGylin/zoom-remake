/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'open-sans': ['"Open Sans"'],
        'handwriting': ['Pacifico'],
      },
      colors: {
        'zoom-blue': '#0B5CFF',
        'make-work-blue': '#00053d'
      },
      screens: {
        'sm': '760px',
        'md': '932px'
      }
    },
  },
  plugins: [],
}
