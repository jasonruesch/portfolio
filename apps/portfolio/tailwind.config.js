const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const globalConfig = require('../../tailwind-workspace.js');

module.exports = {
  presets: [globalConfig],
  content: [
    join(__dirname, '{components,pages}/**/*!(*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      // Explicity include global config colors here for the stylesheet to recognize
      ...globalConfig.theme.colors,
      // Theme colors
      primary: {
        50: 'var(--color-primary-50)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
        DEFAULT: 'var(--color-primary)',
      },
      secondary: {
        50: 'var(--color-secondary-50)',
        100: 'var(--color-secondary-100)',
        200: 'var(--color-secondary-200)',
        300: 'var(--color-secondary-300)',
        400: 'var(--color-secondary-400)',
        500: 'var(--color-secondary-500)',
        600: 'var(--color-secondary-600)',
        700: 'var(--color-secondary-700)',
        800: 'var(--color-secondary-800)',
        900: 'var(--color-secondary-900)',
        DEFAULT: 'var(--color-secondary)',
      },
    },
    extend: {
      textColor: {
        on: {
          primary: 'var(--color-on-primary)',
          secondary: 'var(--color-on-secondary)',
          background: 'var(--color-on-background)',
          surface: 'var(--color-on-surface)',
          error: 'var(--color-on-error)',
        },
      },
      backgroundColor: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        error: 'var(--color-error)',
      },
      borderColor: {
        ...defaultTheme.borderColor,
        surface: 'var(--color-surface)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
