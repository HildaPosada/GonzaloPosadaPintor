/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
      spacing: {
        slim: '2px', // For slim borders and padding
      },
      boxShadow: {
        'overlay': '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow for overlays
      },
      backdropFilter: {
        blur: 'blur(8px)', // For applying blur to translucent backgrounds
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: Tailwind forms plugin
    require('@tailwindcss/typography'), // Optional: Tailwind typography plugin
  ],
};
