// In reality you would probably specify two Webpack configurations, one
// for prod and one for dev, but for this demo we can use the same one

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
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
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.png$/,
        use: [
          "file-loader",
          'image-webpack-loader',
        ]
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

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ]
};
