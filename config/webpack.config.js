const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = ({ entry, filename, mode }) => {
  const devMode = mode !== "production";
  return {
    mode: mode,
    watch: devMode,
    entry: path.resolve(__dirname, "../", entry, "index.js"),
    output: {
      path: path.resolve(__dirname, `../dist/${filename}/`),
      filename: `${filename}.all.js`
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${filename}.all.css`,
        chunkFilename: "[id].css"
      })
    ],
    module: {
      rules: [
        { test: /\.vue$/, use: "vue-loader" },
        { test: /\.tpl|xtpl$/, use: "raw-loader" },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader"
          },
          exclude: "/node_modules/"
        },
        {
          test: /\.css|scss$/,
          use: [
            // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    }
  };
};
