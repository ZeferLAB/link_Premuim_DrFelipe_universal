/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-dark': '#0F172A',
        'luxury-light': '#1E293B',
        'luxury-gold': '#D4AF37',
        'luxury-white': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
