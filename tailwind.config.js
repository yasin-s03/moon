/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        rp: {
          dark: '#0B0F19',   
          card: '#151C2C',   
          border: '#232D42', 
          primary: '#D4AF37',
          accent: '#E11D48', 
          light: '#F8FAFC',  
          muted: '#94A3B8',  
        }
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'], 
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(212, 175, 55, 0.15)',
        'glow-accent': '0 0 20px rgba(225, 29, 72, 0.15)',
      }
    },
  },
  plugins: [],
}

