var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR +  "/app/",
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: "babel-loader" },
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + "/app/index.html"
    })
  ]
};
