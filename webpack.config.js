const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
};
