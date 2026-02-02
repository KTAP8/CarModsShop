/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        secondary: '#0a0a0a',
        neonRed: '#FF0033',
        neonYellow: '#FAFF00',
      },
      fontFamily: {
        street: ['"Road Rage"', 'cursive'],
        tech: ['"Chakra Petch"', 'sans-serif'],
        sans: ['"Chakra Petch"', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      animation: {
        glitch: 'glitch 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
      },
    },
  },
  plugins: [],
}
