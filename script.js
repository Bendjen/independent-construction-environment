const gulp = require("gulp");
const path = require("path");
const webpackStream = require("webpack-stream");
const webpackConfigGenerator = require("./config/webpack.config");

const targetPath = process.argv[process.argv.length - 1];
const pathArray = targetPath.split("/");
const filename = `${pathArray[pathArray.length - 1]}`;

const config = {
  filename: filename,
  entry: targetPath,
  mode:process.env.NODE_ENV
};

const webpackConfig = webpackConfigGenerator(config);

gulp
  .src(path.resolve(__dirname, targetPath, "index.js"))
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest(path.resolve(__dirname, "dist")));
