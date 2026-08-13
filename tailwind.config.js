/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Drop.io Theme (Flat, No transparency)
        obsidian: '#101010',
        canvas: '#ffffff',
        carbon: '#1a1a1a',
        'mint-cream': '#e5ede4',
        'sage-mist': '#c7d8c5',
        'ash-gray': '#9b9b9b',
        'lavender-mist': '#b8afda',
        'ember-orange': '#eb652b',
        'electric-yellow': '#f6f361',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'pill': '1440px',
        'card': '16px',
        'card-lg': '24px',
        'card-xl': '40px',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
      }
    },
  },
  plugins: [],
}
