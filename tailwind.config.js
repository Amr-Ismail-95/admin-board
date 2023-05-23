/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '26': '100px',
        '65': '17rem'
      },
      height: {
        34: '34px',
        35: '38px',
        70: '70%'
      }

    },
  },
  plugins: [],
}