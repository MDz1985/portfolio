/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'tertiary': 'var(--color-tertiary)',
      'bg': 'var(--color-bg)',
      'on-bg': 'var(--color-on-bg)',
    },
    fontSize: {
      headline: '2rem',
      body: '1.2rem',
    },
    extend: {},
  },
  plugins: [],
}

