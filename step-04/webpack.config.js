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
          'sass-loader', // <-- Enable Webpack to read SASS files
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
