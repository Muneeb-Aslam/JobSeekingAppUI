/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./main.js",
  "./src/**/*.html"],
  theme: {
    extend: {
      colors:{
        green:"#0E4846",
        bkg:"#F2F2F2",
        gray:"#818888",
        lightgray:"#717171",
        bordercolor:"#DDDDDD",
        optionBackground:"rgba(0, 0, 0, 0.9)"
      }
    },
    fontFamily:{
      'sans':"Inter"
    },
    boxShadowColor:{
      white:"0px 40px 21px rgba(0, 0, 0, 0.0597957)",
      search:"0px 29px 22px #0E4846"
    }
  },
  plugins: [],
}

