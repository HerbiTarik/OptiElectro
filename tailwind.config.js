/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#074C4E",
        secondary: "#f59e0b",
        // accent: ""
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }


    },
  },
  plugins: [],
}

