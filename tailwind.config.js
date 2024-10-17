/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        'desktop': {
          min: '376px',
          max: '1440px'
        },
        'mobile': {
          min: '0px',
          max: '375px'
        }
      }
    }
  },
  plugins: []
};
