/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure this matches your project structure
    "./public/index.html",             // Include your HTML template if applicable
  ],
  theme: {
    extend: {
      colors: {
        red: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
          translucent: 'rgba(220, 38, 38, 0.5)', // Red translucent
        },
        black: {
          translucent: 'rgba(0, 0, 0, 0.5)', // Black translucent
        },
      },
    },
  },
  plugins: [],
};
