/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.tsx",
    "./src/Layout/**/*.tsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    // "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    // fontWeight : {},  // overwrite the custom font weightings
    extend: {
      colors: {
        orange: {
          1: "#FEF3EC",
          2: "#FCE4D1",
          100: "#FFE5D5",
          200: "#FEBF96",
          300: "#FEAA73",
          400: "#FE9450",
          500: "#D46A26",
          600: "#F2761B",
          700: "#F48D41",
          800: "#1A56DB",
        },
        blue: {
          1: "#E4E7ED",
          2: "#D0D5DF",
          3: "#B0BACA",
          100: "#D3D8D8",
          200: "#B6BEC4",
          300: "#6C7E88",
          400: "#485D6B",
          500: "#132F61",
          600: "#102751",
          7: "#0A1831",
          8: "#627496",
          11: "#102751",
        },
        yellow: {
          100: "#FEF2D3",
          200: "#FDEA42",
          300: "#FDDCB4",
          400: "#FCD365",
          500: "#FCCA46",
          600: "#D2A83A",
          700: "#CCF926",
        },
        teal: {
          100: "#DFEBE8",
          200: "#B0CDC4",
          300: "#96BCB1",
          400: "#7BAC9D",
          500: "#518173",
          600: "#619B8A",
          700: "#E4E7ED",
        },
        green: {
          6: "#667D13",
          8: "#88A619",
        },
        purple: {
          1: "#ECE7F9",
          8: "#6C5B97",
        },
        cyan: {
          50: "#F48D41",
          100: "#F48D41",
          200: "#F48D41",
          300: "#F48D41",
          400: "#F48D41",
          500: "#F48D41",
          600: "#F48D41",
          700: "#F2761B",
          800: "#D46A26",
          900: "#F48D41",
          950: "#F48D41",
        },
      },
      boxShadow: {
        shadow:
          "-2px -2px 8px rgba(182, 190, 196, 0.15), 4px 4px 8px rgba(182, 190, 196, 0.15)",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
      },
      backgroundImage: {
        hero: "url('/assets/hero.svg')",
      },
      // fontFamily : {
      //   light : 'gilroy-light',
      //   normal : 'gilroy-regular',
      //   semibold : 'gilroy-bold',
      //   bold : 'gilroy-heavy'
      // },
      animation: {
        slideUp: "slideUp .5s ease-in-out ",
        fade: "fade 1s ease-in-out ",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: 0.5 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),

  ],
};
