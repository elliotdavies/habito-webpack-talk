const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// v-- Import the new plugin...
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "[name].[contenthash].js",
    path: __dirname + "/dist"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.png$/,
        use: "file-loader"
      },
      {
        test: /\.purs$/,
        loader: "purs-loader",
        options: {
          src: [
            path.join(
              "bower_components",
              "purescript-*",
              "src",
              "**",
              "*.purs"
            ),
            path.join("src", "**", "*.purs")
          ]
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(), // <-- ... and initialise it here

    new HtmlWebpackPlugin()
  ]
};
