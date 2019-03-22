const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// v-- Import the new plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          MiniCssExtractPlugin.loader, // <-- This plugin also exports a loader that we need to use
          "css-loader",
          "sass-loader"
        ]
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
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin(),

    // v-- Initialise the plugin and tell it how to name the files it outputs
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ]
};
