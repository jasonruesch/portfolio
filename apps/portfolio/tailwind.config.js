const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../tailwind-workspace.js');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'pages/**/*!(*.spec).{ts,tsx}'),
    join(__dirname, 'components/**/*!(*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
