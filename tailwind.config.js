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
        primary:"#c50124",
        secondary:"#6b7280",
        background:"FFFCF8",
        White:"#FBFBFB"
      },
      backgroundImage:{
       'gradient-primary': "linear-gradient(to right, #c50124, #ff7b00)",
      },
      fontFamily: {
        pacifico:["Pacifico","cursive"]
      }
    },
  },
  plugins: [],
}

