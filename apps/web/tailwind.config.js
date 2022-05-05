const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      primary: 'var(--color-primary)',
      accent: 'var(--color-accent)',
      'logo-primary': 'var(--color-logo-primary)',
      'logo-base': 'var(--color-logo-base)',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
