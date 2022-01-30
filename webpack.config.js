const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./frontend/index.tsx", // path to our input file
  output: {
    filename: "bundle.js", // output bundle file name
    path: path.resolve(__dirname, "./static"), // path to our Django static directory
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //   optimization = {
  //     minimizer: [new TerserWebpackPlugin()],
  //   }
};
