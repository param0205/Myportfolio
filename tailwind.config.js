/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        playfair:["Playfair Display","serif"],
        opensans :["Open Sans",'sans-serif'],
      },
      gridTemplateColumns :{
        '70/30':'70% 28%',
      },
      colors:{
        blue:"#2CBCE9",
        red:"DC4492",
        yellow:"#FDCC49",
        grey:"#ededed",
        "deep-blue":"#010026",
        "dark-gray":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"
      },
      backgroundImage:(theme) =>({
          "gradient-rainbow":
          "linear-gradient(81.66deg,#00B5EE 7.21% ,#FF45A4,45.05% , #FFBA00 78.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg,#24CBFF 14.53% ,#FC59FF 69.36% , #FFBD0C  117.73%)",
      }),
      content:{
        brush:"url('./assests/brush.png')",
        person1:"url('./assests/person-1.png')",
        person2:"url('./assests/person-2.png')",
        person3:"url('./assests/person-3.png')",
      },
      screens:{
        xs:"480px",
        sm:"768px",
        md:"1060px"
      }
    },
  },
  plugins: [],
}