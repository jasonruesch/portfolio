const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
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
      screens: {
        md: { raw: `(min-width: 640px) and (min-height: 640px)` },
      },
    },
  },
  plugins: [],
};
