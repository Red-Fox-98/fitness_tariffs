/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 100%)',
      }
    }
  },
  plugins: []
};
