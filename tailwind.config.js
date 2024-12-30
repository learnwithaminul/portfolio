/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      colors:{
        "primary":"#FD6F00",
        "footerBG": "#f8f8f8",
        "borderColor": "#AFAFAF",
        "secondaryBG": "#545454"
      },
      fontFamily: {
      
        'body': ['"Poppins"'],
      },
   
      container: {
        center: true,
        padding: '2rem',
      },
    },
    
  },
  plugins: [],
}

