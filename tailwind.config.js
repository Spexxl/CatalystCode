/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cinza-escuro': '#141414',
      },
      fontFamily: {
        sans: ["Roboto", 'sans-serif'],
        display: ["Roboto Serif", 'serif'],
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(calc(-100% - 55px))' },
        },
      },
      animation: {
        scrollRight: 'scrollRight 12s linear infinite',
      },
    },
  },
  plugins: [],
}

