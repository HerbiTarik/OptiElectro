/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom-folder>/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#074C4E',
        secondary: '#292524',
        btnColor: '#fcd34d',
        txt: '#fffbeb',
        accent: '#fffbeb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '40px',
      },
    },
  },
  plugins: [],
};
