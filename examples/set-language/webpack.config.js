// NOTE: To use this example standalone (e.g. outside of repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const webpack = require('webpack');

const BABEL_CONFIG = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-class-properties'
  ]
};

module.exports = {
  mode: 'development',

  entry: {
    app: './app.js'
  },

  output: {
    library: 'App'
  },

  module: {
    rules: [{
      // Compile ES2015 using babel
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: BABEL_CONFIG
      }]
    }]
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [
    new webpack.EnvironmentPlugin(['MapboxAccessToken'])
  ]
};