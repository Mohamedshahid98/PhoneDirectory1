/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#9C6FE4",
        white: "#ffff",
        red: "#CB1E1E",
        blue:"#0927CF",
        assGray:"#707175",
        green :"#0D2602"
      }, fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
      },
    },

  },
  plugins: [],
}

