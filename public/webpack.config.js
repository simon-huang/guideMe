'use strict';

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
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }]
  }

};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIndlYnBhY2siLCJyZXF1aXJlIiwicGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZXh0IiwiX19kaXJuYW1lIiwiZW50cnkiLCJqYXZhc2NyaXB0IiwiaHRtbCIsIm91dHB1dCIsImZpbGVuYW1lIiwicmVzb2x2ZSIsImV4dGVuc2lvbnMiLCJsb2FkZXJzIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJQyxPQUFPRCxRQUFRLE1BQVIsQ0FBWDs7QUFJQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxXQUFTQyxTQURNOztBQUdmQyxTQUFPO0FBQ0xDLGdCQUFZLGdCQURQO0FBRUxDLFVBQU07QUFGRCxHQUhROztBQVFmQyxVQUFRO0FBQ05DLGNBQVUsVUFESjtBQUVOVCxVQUFNSSxZQUFZO0FBRlosR0FSTzs7QUFhZk0sV0FBUztBQUNQQyxnQkFBWSxDQUFDLEVBQUQsRUFBSyxLQUFMLEVBQVksTUFBWixFQUFvQixPQUFwQjtBQURMLEdBYk07O0FBaUJmVixVQUFRO0FBQ05XLGFBQVMsQ0FDUDtBQUNFQyxZQUFNLFNBRFI7QUFFRUMsZUFBUyxjQUZYO0FBR0VGLGVBQVMsQ0FBQyxjQUFEO0FBSFgsS0FETyxFQU1QO0FBQ0VDLFlBQU0sU0FEUjtBQUVFRSxjQUFRO0FBRlYsS0FOTztBQURIOztBQWpCTyxDQUFqQiIsImZpbGUiOiJ3ZWJwYWNrLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29udGV4dDogX19kaXJuYW1lLFxuXG4gIGVudHJ5OiB7XG4gICAgamF2YXNjcmlwdDogJy4vc3JjL2luZGV4LmpzJyxcbiAgICBodG1sOiAnLi9wdWJsaWMvaW5kZXguaHRtbCdcbiAgfSxcblxuICBvdXRwdXQ6IHtcbiAgICBmaWxlbmFtZTogJ2luZGV4LmpzJyxcbiAgICBwYXRoOiBfX2Rpcm5hbWUgKyAnL3B1YmxpYy9zcmMnXG4gIH0sXG4gIFxuICByZXNvbHZlOiB7XG4gICAgZXh0ZW5zaW9uczogWycnLCAnLmpzJywgJy5qc3gnLCAnLmpzb24nXVxuICB9LFxuXG4gIG1vZHVsZToge1xuICAgIGxvYWRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLmpzeD8kLyxcbiAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXG4gICAgICAgIGxvYWRlcnM6IFtcImJhYmVsLWxvYWRlclwiXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLmh0bWwkLyxcbiAgICAgICAgbG9hZGVyOiAnZmlsZT9uYW1lPVtuYW1lXS5bZXh0XScsXG4gICAgICB9XG4gICAgXVxuICB9XG5cbn07Il19