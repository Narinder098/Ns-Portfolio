/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   bounce: 'bounce 3s infinite',
      //   'zoom-in': 'zoomIn 1.2s ease-in-out backwards',
      //   'text-up': 'textUp 1.2s ease-out forwards',
      //   'bottom-up': 'bottomUp 3s ease-in-out',
      //   'slide': 'slide 15s ease-in-out infinite forwards',
      //   'scroll': 'scroll 10s ease-in-out infinite forwards'

      // },
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      //   amatic: ['"Amatic SC"', 'cursive'],  // Add Amatic SC font here
      // },
      // keyframes: {
      //   bounce: {
      //     '0%, 100%': { transform: 'translateY(-15px)' },
      //     '50%': { transform: 'translateY(25px)' },
      //   },
      //   zoomIn: {
      //     '0%': { transform: 'scale(1.1)' },
      //     '100%': { transform: 'scale(1)' },
      //   },
      //   textUp: {
      //     '0%': { transform: 'translateY(50px)', opacity: '0' },
      //     '100%': { transform: 'translateY(0)', opacity: '1' },
      //   },
      //   bottomUp: {
      //     '0%': { opacity: '0', transform: 'translateY(50px)' },
      //     '100%': { opacity: '1', transform: 'translateY(0)' },
      //   },
      //   slide: {
      //     '0%': { transform: 'translateX(0)', opacity: '1' },
      //     '25%': { transform: 'translateX(-25%)' },
      //     '50%': { transform: 'translateX(0)' },
      //     '75%': { transform: 'translateX(25%)' },
      //     '100%': { transform: 'translateX(0%)', opacity: '1' },
      //   },
      //   scroll: {
      //     '0%': { transform: 'translateX(0)' },
      //     '50%': { transform: 'translateX(-100%)' },
      //     '100%': { transform: 'translateX(0)' },
      //   }


      // },
    },
  },
  plugins: [],
}
