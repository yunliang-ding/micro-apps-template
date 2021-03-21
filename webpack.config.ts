const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], //表示在import 文件时文件后缀名可以不写
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "../image",
            outputPath: "image",
            limit: 1024 * 10, //图片大于阈值 不会转base64,小于会转base64
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "../", // 资源路径需要从css文件夹跳出去
          },
        },
      }
    ],
  },
  devServer: {
    contentBase: "./dist",
    // open: true,
    port: 3000,
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.join(__dirname, `./view/index.html`),
      filename: `index.html`,
      chunks: "index",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ]
};
