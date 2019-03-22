const path = require('path'); // Just a utility library from Node
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
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
        test: /\.purs$/, // <-- PureScript files are read using the purs-loader
        loader: 'purs-loader',
        options: {
          // v-- Tell the loader (and hence the compiler) where to find PS dependencies
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
