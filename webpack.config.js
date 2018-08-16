const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: "ts-loader"
    }]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true
    })
  ]
}