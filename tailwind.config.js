/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jxs,ts,tsx}",
  ],
  theme: {
   
    extend: {
      margin: {
        '2.5': '0.625rem',
        '7.5': '1.875rem',
      },
      padding: {
        '2.5': '0.625rem',
        '7.5': '1.875rem',
      },
    },
  },
  plugins: [],
}
