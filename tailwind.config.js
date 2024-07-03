/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroun-broad': 'linear-gradient(90deg, rgba(64, 42, 49, 1) 0%, rgba(32, 23, 94, 0.87) 50%, rgba(51, 11, 52, 0.86) 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}