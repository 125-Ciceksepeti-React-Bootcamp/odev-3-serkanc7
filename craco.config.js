/* craco.config.js */
const path = require(`path`);
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/assets/scss/main.scss',
      },
    },
  ],
};