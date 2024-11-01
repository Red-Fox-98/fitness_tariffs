/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fill: ({theme}) => ({
      "01B9C5100": theme("colors.01B9C5100"),
      "FD4D35": theme("colors.FD4D35")
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
        "ptRootUIRegular": "PT RootUI Regular",
        "ptRootUIBold": "PT RootUI Bold",
        "ptRootUIMedium": "PT RootUI Medium",
        "bebasNeue": "Bebas Neue",
        "rubikBold": "Rubik Bold",
        "rubikMedium": "Rubik Medium",
        "bebasNeueCyrillic": "Bebas Neue Cyrillic",
      },
      fontSize: {
        "small": "30px",
        "medium": "40px",
        "large": "50px",
        "huge": "60px"
      },
      colors: {
        "FFFFFF": "#FFFFFF",
        "F5F7F7": "#F5F7F7",
        "2D3242": "#2D3242",
        "EBEBEB": "#EBEBEB",
        "818798": "#818798",
        "D3D6DD": "#D3D6DD",
        "687078": "#687078",
        "E7EAF1": "#E7EAF1",
        "95979F": "#95979F",
        "FD4D35": "#FD4D35",
        "01B9C5100": "#01B9C5",
        "2D97F9": "#2D97F9",
        "12191D": "#12191D",
        "01B9C55": "rgba(1,185,197,0.05)",
        "0000005": "rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        'starLarge': "url('../shared/uikit/icons/StarLarge.svg')",
        'starMedium': "url('../shared/uikit/icons/StarMedium.svg')",
        'starSmall': "url('../shared/uikit/icons/StarSmall.svg')",
      },
      animation: {
        "flashing": "flashing 2s linear infinite"
      },
      keyframes: {
        flashing: {
          "0%, 100%": {opacity: 1},
          "50%": {opacity: 0}
        }
      }
    }
  },
  plugins: []
};
