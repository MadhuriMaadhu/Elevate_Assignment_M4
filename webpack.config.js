// webpack.config.js
const path = require('path');

module.exports = {
  // Your existing configuration
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // your module rules
    ],
  },
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      // Add other necessary fallbacks
    },
  },
  // Avoid adding unnecessary polyfills that might cause issues
};