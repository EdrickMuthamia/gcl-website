/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'slide-1': 'slideShow1 15s infinite',
        'slide-2': 'slideShow2 15s infinite',
        'slide-3': 'slideShow3 15s infinite',
      },
      keyframes: {
        slideShow1: {
          '0%, 33.33%': { opacity: '1' },
          '33.34%, 100%': { opacity: '0' },
        },
        slideShow2: {
          '0%, 33.33%': { opacity: '0' },
          '33.34%, 66.66%': { opacity: '1' },
          '66.67%, 100%': { opacity: '0' },
        },
        slideShow3: {
          '0%, 66.66%': { opacity: '0' },
          '66.67%, 100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}