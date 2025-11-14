/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#240046',
        'purple': '#5A189A',
        'bright-violet': '#7B2CBF',
        'accent-yellow': '#EDF67D',
        'deep-black': '#100028',
      },
      fontFamily: {
        'heading': ['Poppins', 'Inter', 'sans-serif'],
        'body': ['Open Sans', 'Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #240046, #5800AC)',
        'gradient-2': 'linear-gradient(to right, #7512D2, #3C096C, #11021E)',
      },
      fontSize: {
        'h1': ['36px', '48px'],
        'h2': ['28px', '32px'],
        'paragraph': ['16px', '18px'],
      }
    },
  },
  plugins: [],
}