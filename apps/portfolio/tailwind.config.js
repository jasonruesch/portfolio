const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../tailwind-workspace.js');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, '{components,pages}/**/*!(*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    colors: {
      // Explicity include shared config colors here for the stylesheet to recognize
      ...sharedTailwindConfig.theme.colors,
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
      backgroundColor: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        button: {
          primary: {
            DEFAULT: 'var(--color-button-primary)',
            hover: 'var(--color-button-primary-hover)',
            disabled: 'var(--color-button-primary-disabled)',
          },
          secondary: {
            DEFAULT: 'var(--color-button-secondary)',
            hover: 'var(--color-button-secondary-hover)',
            disabled: 'var(--color-button-secondary-disabled)',
          },
        },
        input: {
          DEFAULT: 'var(--color-input)',
          focus: 'var(--color-input-focus)',
        },
      },
      textColor: {
        on: {
          primary: 'var(--color-on-primary)',
          secondary: 'var(--color-on-secondary)',
          background: 'var(--color-on-background)',
          surface: 'var(--color-on-surface)',
          error: 'var(--color-on-error)',
          success: 'var(--color-on-success)',
        },
        button: {
          primary: {
            DEFAULT: 'var(--color-text-button-primary)',
            hover: 'var(--color-text-button-primary-hover)',
            disabled: 'var(--color-text-button-primary-disabled)',
          },
          secondary: {
            DEFAULT: 'var(--color-text-button-secondary)',
            hover: 'var(--color-text-button-secondary-hover)',
            disabled: 'var(--color-text-button-secondary-disabled)',
          },
        },
        input: {
          focus: 'var(--color-text-input-focus)',
          error: {
            DEFAULT: 'var(--color-text-input-error)',
            icon: 'var(--color-text-input-error-icon)',
            message: 'var(--color-text-input-error-message)',
          },
        },
        link: {
          DEFAULT: 'var(--color-text-link)',
          hover: 'var(--color-text-link-hover)',
        },
      },
      placeholderColor: {
        input: {
          DEFAULT: 'var(--color-placeholder-input)',
          focus: 'var(--color-placeholder-input-focus)',
          error: 'var(--color-placeholder-input-error)',
        },
      },
      borderColor: {
        surface: 'var(--color-surface)',
        button: {
          primary: 'var(--color-border-button-primary)',
          secondary: 'var(--color-border-button-secondary)',
        },
        input: {
          DEFAULT: 'var(--color-border-input)',
          focus: 'var(--color-border-input-focus)',
          error: {
            DEFAULT: 'var(--color-border-input-error)',
            focus: 'var(--color-border-input-error-focus)',
          },
        },
      },
      ringOffsetColor: {
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        button: {
          primary: {
            focus: 'var(--color-ring-offset-button-primary-focus)',
          },
          secondary: {
            focus: 'var(--color-ring-offset-button-secondary-focus)',
          },
        },
      },
      ringColor: {
        button: {
          primary: {
            focus: 'var(--color-ring-button-primary-focus)',
          },
          secondary: {
            focus: 'var(--color-ring-button-secondary-focus)',
          },
        },
        input: {
          focus: 'var(--color-ring-input-focus)',
          error: {
            focus: 'var(--color-ring-input-error-focus)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
