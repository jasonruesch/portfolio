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
    join(__dirname, '{components,pages}/**/*!(*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      'alegreya-sans-sc': ['Alegreya Sans SC', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
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
      red: colors.red,
    },
    boxShadow: {
      DEFAULT: defaultTheme.boxShadow.DEFAULT,
      md: defaultTheme.boxShadow.md,
      lg: defaultTheme.boxShadow.lg,
    },
    dropShadow: {
      DEFAULT: defaultTheme.dropShadow.DEFAULT,
      md: defaultTheme.dropShadow.md,
      lg: defaultTheme.dropShadow.lg,
    },
    fontSize: {
      xs: defaultTheme.fontSize.xs,
      sm: defaultTheme.fontSize.sm,
      base: defaultTheme.fontSize.base,
      lg: defaultTheme.fontSize.lg,
      xl: defaultTheme.fontSize.xl,
      '2xl': defaultTheme.fontSize['2xl'],
      '3xl': defaultTheme.fontSize['3xl'],
      '4xl': defaultTheme.fontSize['4xl'],
    },
    fontWeight: {
      normal: defaultTheme.fontWeight.normal,
      bold: defaultTheme.fontWeight.bold,
    },
    extend: {
      screens: {
        'sm-max-h': {
          raw: `(max-height: ${defaultTheme.screens.sm})`,
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
