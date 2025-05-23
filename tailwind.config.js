import { WiHot } from 'react-icons/wi';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors
      colors:{
        primary:"#F6A64F",
        secondary:"#b56141",
        background:"FFFCF8",
        White:"#FBFBFB"
      },
      backgroundImage:{
        'gradient-primary':"linear-gradient(to right, #f4a44f, #ac573f)",
      },
      fontFamily: {
        pacifico:["Pacifico","cursive"]
      }
    },
  },
  plugins: [],
}

