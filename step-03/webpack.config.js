const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + "/dist"
  },

  module: {
    // Rules allow us to specify Webpack loaders for particular filetypes
    rules: [
      {
        test: /\.css$/, // <-- Match all files with the .css extension
        use: [
          'style-loader', // 2. Inject the CSS into our bundle
          'css-loader', // 1. Enable Webpack to read CSS files
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
