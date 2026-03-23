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
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#60A5FA',
        },
        background: {
          dark: '#0F172A',
          light: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#22C55E',
          dark: '#15803D',
          light: '#4ADE80',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'system-ui'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
