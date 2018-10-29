const path = require('path');
const webpack = require('webpack');
const srcPath = './src/assets/js/';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
{
  mode: 'development',
  name: 'js',
  entry: {
      'app': './assets/js/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [{
            test: /\.js$/
    }]
  }
},
{
  mode: 'development',
  name: 'sass',
  entry: {
      'main': './assets/scss/main.scss'
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, 'public/css')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
               loader: 'css-loader',
               options: {
                 root: path.resolve(__dirname, 'assets/scss')
               }
           }, {
               loader: 'sass-loader'
           }]
        })
    }]
  },
  plugins: [
      new ExtractTextPlugin({
          filename: './assets/scss/main.scss'
      })
  ]
}
]
;
