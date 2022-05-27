const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
      neutral: colors.neutral,
      red: colors.red,

      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      primary: 'var(--color-primary)',
      accent: 'var(--color-accent)',
      warning: 'var(--color-warning)',
      success: 'var(--color-success)',
      cta: 'var(--color-cta)',
      'cta-50': 'var(--color-cta-50)',
      divider: 'var(--color-divider)',
      overlay: 'var(--color-overlay)',
      sidebar: {
        background: 'var(--color-sidebar-background)',
        link: {
          DEFAULT: 'var(--color-sidebar-link)',
          active: 'var(--color-sidebar-link-active)',
          hover: 'var(--color-sidebar-link-hover)',
          icon: 'var(--color-sidebar-link-icon)',
        },
      },
      search: {
        text: 'var(--color-search-text)',
      },
      card: {
        border: 'var(--color-card-border)',
      },
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
