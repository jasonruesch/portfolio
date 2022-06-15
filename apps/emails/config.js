/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

import { join } from 'path';

module.exports = {
  build: {
    templates: {
      source: join(__dirname, 'src/templates'),
      destination: {
        path: join(__dirname, '../../dist/apps/emails'),
      },
      assets: {
        source: join(__dirname, 'src/images'),
        destination: join(__dirname, '../../dist/apps/emails/images'),
      },
    },
  },
};
