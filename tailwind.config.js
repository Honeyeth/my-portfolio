
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Optional: Add custom light gradients or accent colors
        lightBlue: '#a5d8ff',
        softPurple: '#c3aed6',
      },
    },
  },
  plugins: [],
}
