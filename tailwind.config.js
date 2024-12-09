/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        'app-mobile': '375px',
        'app-desktop': '1440px'
      },
      colors: {
        'app-lignt-pink':'#F8EEFF',
        'app-dark-purple':'#301534',
        'app-pale-purple':'#8B6990'
      },
    },
  },
  plugins: [],
}

