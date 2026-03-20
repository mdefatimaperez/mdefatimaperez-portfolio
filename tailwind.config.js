/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos
        'bg-primary':    '#0D0D14',
        'bg-surface':    '#12101E',
        'bg-elevated':   '#1A1030',
        'border-subtle': '#1E1640',
        // Violetas
        'violet-cta':    '#7B4FD4',
        'violet-hover':  '#9D72F0',
        'violet-mid':    '#BBA9FF',
        'violet-light':  '#D8CFFF',
        // Texto
        'text-primary':  '#EDE9FF',
        'text-muted':    '#4D4273',
        'text-white':    '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
