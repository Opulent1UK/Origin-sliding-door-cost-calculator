/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#1a1a1a',
          darker: '#111111',
          gold: '#bf953f',
          'gold-light': '#fcf6ba',
        }
      },
      boxShadow: {
        'gold': '0 0 15px rgba(191, 149, 63, 0.3)',
      }
    },
  },
  plugins: [],
};