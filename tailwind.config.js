/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0C',
        surface: '#141416',
        surface2: '#1B1B1E',
        ink: '#F2F0EA',
        muted: '#8A8A8E',
        accent: '#E8A33D',
        accent2: '#3F6B64',
        line: '#2A2A2D',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
