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
          DEFAULT: '#6366f1', // Indigo 500
          dark: '#4f46e5',   // Indigo 600
          light: '#a5b4fc',  // Indigo 300
        },
        background: {
          dark: '#0a0a0b',   // Deeper black
          light: '#fcfcfd',  // Clean light
        },
        accent: {
          DEFAULT: '#10b981', // Emerald 500
          dark: '#059669',   // Emerald 600
          light: '#6ee7b7',  // Emerald 300
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Violet 500
          dark: '#7c3aed',   // Violet 600
          light: '#c4b5fd',  // Violet 300
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
