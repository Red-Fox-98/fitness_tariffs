/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fill: ({ theme }) => ({
      "01B9C5": theme("colors.01B9C5"),
      FD4D35: theme("colors.FD4D35")
    }),
    extend: {
      screens: {
        xs: {
          min: "0px",
          max: "375px"
        },
        xl: {
          min: "376px",
          max: "1440px"
        },
        xxl: {
          min: "1441px"
        }
      },
      fontFamily: {
        ptRootUI: "PT RootUI",
        bebasNeue: "Bebas Neue"
      },
      fontSize: {
        small: "30px",
        large: "60px"
      },
      colors: {
        "2D3242": "#2D3242",
        EBEBEB: "#EBEBEB",
        "01B9C5": "#01B9C5",
        818798: "#818798",
        FD4D35: "#FD4D35"
      },
      animation: {
        flashing: "flashing 2s linear infinite"
      },
      keyframes: {
        flashing: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      }
    }
  },
  plugins: []
};
