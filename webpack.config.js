var path = require('path');
 
var config = {
  context: path.join(__dirname, 'app'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'compiled'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  target: 'electron',
};
module.exports = config;