/* eslint import/no-extraneous-dependencies:0 */
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'build'),
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
    ],
  },
};
