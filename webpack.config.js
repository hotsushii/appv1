const path = require('path');

const config = {
  entry: ['babel-polyfill', './lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.css$/, use: 'css-loader'}
    ]
  },
};

module.exports = config;
