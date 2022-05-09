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
      brand: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        charcoal: 'var(--color-charcoal)',
        alabaster: 'var(--color-alabaster)',
        'bright-aqua': 'var(--color-bright-aqua)',
        grapefruit: 'var(--color-grapefruit)',
        'bright-turquoise': 'var(--color-bright-turquoise)',
        'fire-bush': 'var(--color-fire-bush)',
        malachite: 'var(--color-malachite)',
        'bright-cyan': 'var(--color-bright-cyan)',
        'electric-purple': 'var(--color-electric-purple)',
        'mango-orange': 'var(--color-mango-orange)',
        'neon-yellow': 'var(--color-neon-yellow)',
        'bleu-de-france': 'var(--color-bleu-de-france)',
        'coral-red': 'var(--color-coral-red)',
        cantaloupe: 'var(--color-cantaloupe)',
        'ocean-green': 'var(--color-ocean-green)',
      },
      transparent: 'transparent',
      current: 'currentColor',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      primary: 'var(--color-primary)',
      accent: 'var(--color-accent)',
      warning: 'var(--color-warning)',
      success: 'var(--color-success)',
      'logo-primary': 'var(--color-logo-primary)',
      'logo-base': 'var(--color-logo-base)',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm-max-h': {
          raw: `(max-height: ${defaultTheme.screens.sm})`,
        },
      },
    },
  },
  plugins: [],
};
