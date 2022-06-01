const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      heading: ['Alegreya Sans SC', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      red: colors.red,
      green: colors.green,
      // Brand colors
      cyan: colors.cyan,
      amber: colors.amber,
      violet: colors.violet,
      teal: colors.teal,
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
      medium: defaultTheme.fontWeight.medium,
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
  plugins: [],
};
