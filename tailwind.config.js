/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00263e',
        secondary: '#e63946',
        gray: {
          light: '#f2f2f2',
          DEFAULT: '#666666',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Primary font for body text
        serif: ['Merriweather', 'serif'], // Accent font for headings or special text
      },
    },
  },
  plugins: [],
}