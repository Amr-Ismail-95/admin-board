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
        70: '70%',
        '11/12': '91.666667%' ,
        '3/25' : '12%'
      },
      minHeight: {
        '3/4': '75%',
        '11/12': '91.666667%',
        '16': '4rem',
        '1/2': '50%',
        '22': '21.6rem',
        '96': '24rem',
        '20': '5rem'
      },
      minWidth: {
        '8': '8rem',
      },
      maxWidth: {
        '9/10': '90%',
      },
      inset: {
        'N25': '-25px',
        'N50': '-50px',
      }
  

    },
  },
  plugins: [],
}