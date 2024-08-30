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
        text2: '#0f172a',
        text3: '#1d4ed8',
        accent: '#fffbeb',
        placeholder: '#6b7280',
        error: '#b91c1c',
        btnSecondary: '#f8fafc',
        textInput: '#e4e4e7',
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
