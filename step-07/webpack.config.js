const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    // v-- By changing these Webpack options we can hash the output
    // filenames - no other work required!
    filename: '[name].[contenthash].js',
    path: __dirname + "/dist"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.png$/,
        use: 'file-loader'
      },
      {
        test: /\.purs$/,
        loader: 'purs-loader',
        options: {
          src: [
            path.join('bower_components', 'purescript-*', 'src', '**', '*.purs'),
            path.join('src', '**', '*.purs')
          ]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
