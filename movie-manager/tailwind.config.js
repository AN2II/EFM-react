/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d253f',    // Dark blue
        secondary: '#01b4e4',  // Light blue
        tertiary: '#90cea1',   // Light green
      },
    },
  },
  plugins: [],
}
