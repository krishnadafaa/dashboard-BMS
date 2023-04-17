/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '110px': '110px',
        '70px' : '70px',
      },
      maxWidth: {
        '300px': '300px',
      },
      borderRadius: {
        'buled' : '50%',
      },
      height: {
        '130px': '130px',
      },
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}

