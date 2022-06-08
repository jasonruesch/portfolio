const defaultColors = require('tailwindcss/colors');
const globalConfig = require('../../tailwind-workspace.js');

module.exports = {
  presets: [globalConfig],
  content: ['src/**/*.html'],
  darkMode: 'media',
  theme: {
    colors: {
      // Explicity include global config colors here for the stylesheet to recognize
      ...globalConfig.theme.colors,
      // Theme colors
      primary: defaultColors.cyan,
      secondary: defaultColors.amber,
      dark: {
        primary: defaultColors.violet,
        secondary: defaultColors.teal,
      },
    },
    extend: {
      backgroundColor: {
        background: defaultColors.neutral[100],
        surface: defaultColors.neutral[50],
        error: defaultColors.red[500],
        success: defaultColors.green[500],
        button: {
          primary: {
            DEFAULT: defaultColors.cyan[600],
            hover: defaultColors.cyan[700],
            disabled: defaultColors.cyan[300],
          },
          secondary: {
            DEFAULT: defaultColors.white,
            hover: defaultColors.neutral[50],
            disabled: defaultColors.neutral[300],
          },
        },
        input: {
          DEFAULT: defaultColors.white,
          focus: defaultColors.white,
        },
        dark: {
          background: defaultColors.neutral[900],
          surface: defaultColors.neutral[800],
          error: defaultColors.red[400],
          success: defaultColors.green[400],
          button: {
            primary: {
              DEFAULT: defaultColors.violet[500],
              hover: defaultColors.violet[600],
              disabled: defaultColors.violet[300],
            },
            secondary: {
              DEFAULT: defaultColors.neutral[600],
              hover: defaultColors.neutral[700],
              disabled: defaultColors.neutral[300],
            },
          },
          input: {
            DEFAULT: defaultColors.neutral[700],
            focus: defaultColors.neutral[400],
          },
        },
      },
      textColor: {
        on: {
          primary: defaultColors.black,
          secondary: defaultColors.black,
          background: defaultColors.black,
          surface: defaultColors.black,
          error: defaultColors.white,
          success: defaultColors.black,
        },
        button: {
          primary: {
            DEFAULT: defaultColors.black,
            hover: defaultColors.white,
            disabled: defaultColors.neutral[600],
          },
          secondary: {
            DEFAULT: defaultColors.neutral[700],
            hover: defaultColors.neutral[700],
            disabled: defaultColors.neutral[600],
          },
        },
        input: {
          focus: defaultColors.neutral[900],
          error: {
            DEFAULT: defaultColors.red[500],
            icon: defaultColors.red[500],
            message: defaultColors.red[600],
          },
        },
        link: {
          DEFAULT: defaultColors.cyan[500],
          hover: defaultColors.cyan[600],
        },
        dark: {
          on: {
            primary: defaultColors.black,
            secondary: defaultColors.white,
            background: defaultColors.white,
            surface: defaultColors.white,
            error: defaultColors.black,
            success: defaultColors.black,
          },
          button: {
            primary: {
              DEFAULT: defaultColors.black,
              hover: defaultColors.white,
              disabled: defaultColors.neutral[600],
            },
            secondary: {
              DEFAULT: defaultColors.white,
              hover: defaultColors.white,
              disabled: defaultColors.neutral[600],
            },
          },
          input: {
            focus: defaultColors.neutral[900],
            error: {
              DEFAULT: defaultColors.red[500],
              icon: defaultColors.red[400],
              message: defaultColors.red[500],
            },
          },
          link: {
            DEFAULT: defaultColors.violet[400],
            hover: defaultColors.violet[500],
          },
        },
      },
      placeholderColor: {
        input: {
          DEFAULT: defaultColors.neutral[500],
          focus: defaultColors.neutral[400],
          error: defaultColors.red[300],
        },
        dark: {
          input: {
            DEFAULT: defaultColors.neutral[400],
            focus: defaultColors.neutral[500],
            error: defaultColors.red[300],
          },
        },
      },
      borderColor: {
        surface: defaultColors.neutral[50],
        button: {
          primary: defaultColors.transparent,
          secondary: defaultColors.neutral[300],
        },
        input: {
          DEFAULT: defaultColors.neutral[300],
          focus: defaultColors.cyan[500],
          error: {
            DEFAULT: defaultColors.red[300],
            focus: defaultColors.red[500],
          },
        },
        dark: {
          surface: defaultColors.neutral[800],
          button: {
            primary: defaultColors.transparent,
            secondary: defaultColors.transparent,
          },
          input: {
            DEFAULT: defaultColors.transparent,
            focus: defaultColors.white,
            error: {
              DEFAULT: defaultColors.red[300],
              focus: defaultColors.red[400],
            },
          },
        },
      },
      ringOffsetColor: {
        error: defaultColors.red[500],
        success: defaultColors.green[500],
        button: {
          primary: {
            focus: defaultColors.white,
          },
          secondary: {
            focus: defaultColors.white,
          },
        },
        dark: {
          error: defaultColors.red[400],
          success: defaultColors.green[400],
          button: {
            primary: {
              focus: defaultColors.neutral[800],
            },
            secondary: {
              focus: defaultColors.neutral[800],
            },
          },
        },
      },
      ringColor: {
        button: {
          primary: {
            focus: defaultColors.cyan[500],
          },
          secondary: {
            focus: defaultColors.cyan[500],
          },
        },
        input: {
          focus: defaultColors.cyan[500],
          error: {
            focus: defaultColors.red[500],
          },
        },
        dark: {
          button: {
            primary: {
              focus: defaultColors.violet[500],
            },
            secondary: {
              focus: defaultColors.violet[500],
            },
          },
          input: {
            focus: defaultColors.white,
            error: {
              focus: defaultColors.red[400],
            },
          },
        },
      },
      fillColor: {
        primary: defaultColors.cyan[500],
        dark: {
          primary: defaultColors.violet[400],
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
    backgroundOpacity: false,
    borderOpacity: false,
    boxShadow: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  plugins: [
    require('tailwindcss-mso'),
    require('tailwindcss-box-shadow'),
    require('tailwindcss-email-variants'),
  ],
};
