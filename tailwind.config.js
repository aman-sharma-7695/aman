/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange' : '#A44F0C',
        'fed-orange': '#FD6F00',
        'dark-black': '#1E1E1E',
        'skin-color' : "#FFEBDB"
       },
      fontSize: {
        'custom-1xl': "19px",
        'custom-xl': "21px",
        'custom-xxl': "35px",
        '10xl': "40px",
        '11xl': "65px",
        '12xl': "72px",
        '13xl': "50px"
      },
      borderRadius: {
        'custom-xl': '5px',
        'custom-2xl': '14px',
      },
      padding: {
        10: "10px",
        15: "15px",
        17: "17px",
        19: "19px",
        22: "22px",
        26: "26px",
        39: "39px",
        42:"42px",
        50: "50px",
        57: "57px",
        60: "60px",
        100: "100px",
        280: "280px",
        },
      maxWidth:{
        '8xl': "1240px"

      },
      fontFamily:{
        montserrat:"Montserrat, sans-serif",

      },
      backgroundImage:{
        backgroundborder: "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 50.78%, hsla(0, 0%, 100%, 0));"

      },
      lineHeight: {
        100: "100%",
        130: "130%",
        145: "145%",
        147: "147%",
        149: "149%",
        150: "150%",

      }
    },
  },
  plugins: [],
}

