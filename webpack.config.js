const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './public/ex/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: {
        "presets": ["env", "react"]
      }
    }]
  }
}