const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
    join(__dirname, '{components,data,pages}/**/*!(*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: colors.transparent,
        current: colors.current,
        black: colors.black,
        white: colors.white,
        background: withOpacityValue('--color-background'),
        foreground: withOpacityValue('--color-foreground'),
        primary: withOpacityValue('--color-primary'),
        accent: withOpacityValue('--color-accent'),
        warning: withOpacityValue('--color-warning'),
        success: withOpacityValue('--color-success'),
        cta: withOpacityValue('--color-cta'),
        neutral: colors.neutral,
      },
      screens: {
        'sm-max-h': {
          raw: `(max-height: ${defaultTheme.screens.sm})`,
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
