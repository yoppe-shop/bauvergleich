const webpack = require('webpack');
var webpackStream = require('webpack-stream');
const path = require('path');
const srcPath = './assets/js/';

const alias = {
    // 'history': path.resolve(__dirname, srcPath + 'commonweb/historyjs/jquery.history.js'),
    // 'jquery': path.resolve(__dirname, srcPath + 'commonweb/jquery-3.2.1/jquery.min.js')
};

var PROD = JSON.parse(process.env.PROD_ENV || '1');

module.exports = {
  entry: {
      'app': './assets/js/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `vue-loader` options
        }
      }
    ]
  }
};
