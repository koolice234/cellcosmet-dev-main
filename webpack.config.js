const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js', // adjust entry point as per your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '',
  },
  mode: 'development', // or 'production' for minification
  devtool: 'source-map', // generate source maps

  module: {
    rules: [
      // JavaScript/TypeScript files
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // SCSS files
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), // clean 'dist' folder before each build
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // adjust path to your HTML template
      filename: 'index.html', // output HTML filename
    }),
  ],

  devServer: {
    contentBase: './assets', // serve content from 'dist' folder
    hot: true,
    port: 3000,
    open: true,
  },
};
