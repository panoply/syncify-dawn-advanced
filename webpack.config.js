const { resolve } = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const bundle = {
  entry: resolve(process.cwd(), 'src/scripts/spawn.js'),
  mode: 'development',
  output: {
    path: resolve(process.cwd(), 'theme/assets'),
    filename: 'webpack-bundle.js'
  },
  infrastructureLogging: {
    level: 'verbose',
    colors: true // Ensure logging has color
  }
};

module.exports = bundle;
