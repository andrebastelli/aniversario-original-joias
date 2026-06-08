import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        'gold-pale': '#F5E8C0',
        cream: '#F5F0E8',
        'cream-dark': '#EDE5D5',
        ivory: '#F0EBE0',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
