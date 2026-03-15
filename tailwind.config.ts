import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        acid: '#CCFF00',
        'acid-dark': '#AADD00',
        bg: '#0D0D0D',
        card: '#1A1A1A',
        'card-border': '#2A2A2A',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.9' }],
        '10xl': ['10rem', { lineHeight: '0.85' }],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
}
export default config
