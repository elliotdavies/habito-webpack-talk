const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + "/dist"
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
