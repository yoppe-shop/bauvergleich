const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundleExtractPlugin = new ExtractTextPlugin({
filename: 'css/bundle.css',
});

module.exports =
{
  mode: 'development',
  name: 'sass',
  entry: {
      'main': './assets/scss/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public/css'),
    filename: '[name].css'
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
;

