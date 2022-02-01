const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    open: true,
    port: 9000,
    stats: 'errors-only',
  },
};
