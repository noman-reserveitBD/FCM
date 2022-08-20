const path = require("path");
const Dotenv = require("dotenv-webpack");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "inline-source-map",
  plugins: [
    new Dotenv(),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(gif|svg|ico|img|jpg|jpeg|png)/,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
    ],
  },
};
