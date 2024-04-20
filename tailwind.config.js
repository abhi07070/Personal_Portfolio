/** @type {import('tailwindcss').Config}*/
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        qwitch: ['Qwitcher Grypen', 'cursive'],
      },
      colors: {
        whiteGray: "#adb5bd"
      }
    },
  },
  variants: {},
  plugins: [],
};
