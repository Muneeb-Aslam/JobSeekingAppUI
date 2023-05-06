/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./main.js",],
  theme: {
    extend: {
      colors:{
        green:"#0E4846",
        bkg:"#F2F2F2",
        gray:"#818888",
        lightgray:"#717171",
      }
    },
    fontFamily:{
      'sans':"Inter"
    },
    boxShadowColor:{
      white:" 0px 40px 21px rgba(0, 0, 0, 0.0597957)",
    }
  },
  plugins: [],
}

