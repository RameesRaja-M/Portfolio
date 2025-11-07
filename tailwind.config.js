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
        primary:"#174834",
        secondary:"#3FA56B",
        background:"FFFCF8",
        White:"#FBFBFB"
      },
      backgroundImage:{
       'gradient-primary': "linear-gradient(to right, #174834, #00C853)",
      },
      fontFamily: {
        pacifico:["Pacifico","cursive"]
      }
    },
  },
  plugins: [],
}

