/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-cobalt': '#0047AB',
        'electric-orange': '#FF6600',
        'soft-light-gray': '#F8F8F8',
        'near-black': '#212121',
        'emerald-green': '#28A745',
        'crimson-red': '#DC3545'
      }
    },
  },
  plugins: [],
}