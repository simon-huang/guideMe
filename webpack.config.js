var webpack = require('webpack');
var path = require('path');



module.exports = {
  context: __dirname,

  entry: {
    javascript: './src/index.js',
    html: './public/index.html'
  },

  output: {
    filename: 'index.js',
    path: __dirname + '/public/src'
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  }

};