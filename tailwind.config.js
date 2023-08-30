/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#192E59',
        'secondary': '#3DB166',
        'tertiary': '#2B2F3B',
      },
    },
  },
  plugins: [],
}