const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      black: withOpacityValue('--color-black'),
      white: withOpacityValue('--color-white'),
      'light-gray': withOpacityValue('--color-light-gray'),
      // Example of providing opacity value up front
      // Note: Does not work with the "/opacity" syntax
      'light-gray-15': withOpacityValue('--color-light-gray')({
        opacityValue: '.15',
      }),
      // Another example of providing opacity value up front
      'light-gray-30': 'rgb(var(--color-light-gray) / .3)',
      gray: withOpacityValue('--color-gray'),
      'dark-gray': withOpacityValue('--color-dark-gray'),
      brand: {
        charcoal: withOpacityValue('--color-charcoal'),
        alabaster: withOpacityValue('--color-alabaster'),
        'bright-aqua': withOpacityValue('--color-bright-aqua'),
        grapefruit: withOpacityValue('--color-grapefruit'),
        'bright-turquoise': withOpacityValue('--color-bright-turquoise'),
        'fire-bush': withOpacityValue('--color-fire-bush'),
        malachite: withOpacityValue('--color-malachite'),
        'bright-cyan': withOpacityValue('--color-bright-cyan'),
        'electric-purple': withOpacityValue('--color-electric-purple'),
        'mango-orange': withOpacityValue('--color-mango-orange'),
        'neon-yellow': withOpacityValue('--color-neon-yellow'),
        'bleu-de-france': withOpacityValue('--color-bleu-de-france'),
        'coral-red': withOpacityValue('--color-coral-red'),
        cantaloupe: withOpacityValue('--color-cantaloupe'),
        'ocean-green': withOpacityValue('--color-ocean-green'),
      },
      transparent: 'transparent',
      current: 'currentColor',
      background: withOpacityValue('--color-background'),
      foreground: withOpacityValue('--color-foreground'),
      primary: withOpacityValue('--color-primary'),
      accent: withOpacityValue('--color-accent'),
      warning: withOpacityValue('--color-warning'),
      success: withOpacityValue('--color-success'),
      'logo-primary': withOpacityValue('--color-logo-primary'),
      'logo-base': withOpacityValue('--color-logo-base'),
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
