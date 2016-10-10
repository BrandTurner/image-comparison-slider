var webpack = require('webpack');
var path = require('path');

var PROD = process.argv.indexOf('-p') !== -1

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: PROD ? 'image-comparison-slider.min.js' : 'image-comparison-slider.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel'
      },
      { 
        test: /\.scss$/, 
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};

module.exports = config;