const path = require("path");
// using the plugin to not have to include bundle.js in html file
// also add second rule & dev-tool
const HtmlWebpackPlugin = require("html-webpack-plugin");

// use this plugin to load sass style
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './src/styles',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename:"style.css"
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  }
}