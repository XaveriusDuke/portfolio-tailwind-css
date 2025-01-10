/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: { // Theme akan menimpa yang sudah ada kalau extend menabahkan
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      padding: {
        '53.95px': '53.95px',
      },
    },
  },
  plugins: [],
}


