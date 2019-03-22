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
        test: /\.png$/, // <-- Tell Webpack to read .png files using the file-loader
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
