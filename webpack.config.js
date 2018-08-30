const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000
  },
  mode: "development",
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: "ts-loader"
    }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true
    })
  ]
}