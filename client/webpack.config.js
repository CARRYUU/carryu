const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
  mode: "production",
};
