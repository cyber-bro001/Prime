/** @type {import('tailwindcss@3').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E1E1E',
        accent: '#D4AF37',
        secondary: '#F5F5F5',
        highlight: '#E6C9A8',
      },
    },
  },
  plugins: [],
}