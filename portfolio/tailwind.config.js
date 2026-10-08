/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        parchment: 'var(--parchment)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        'ink-subtle': 'var(--ink-subtle)',
        link: 'var(--link)',
        action: 'var(--action)',
        hairline: 'var(--hairline)',
        'hairline-soft': 'var(--hairline-soft)',
      },
      fontFamily: {
        sans: ['var(--font-text)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        content: '980px',
        wide: '1200px',
      },
    },
  },
  plugins: [],
}
