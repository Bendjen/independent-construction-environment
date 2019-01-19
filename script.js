const gulp = require("gulp");
const path = require("path");
const fs = require("fs");
const webpackStream = require("webpack-stream");

const webpackConfigGenerator = require("./config/webpack.config");
const rmdir = require("./utils/rmdir");

const targetPath = process.argv[process.argv.length - 1];
const pathArray = targetPath.split("/");
const filename = `${pathArray[pathArray.length - 1]}`;

const config = {
  filename: filename,
  entry: targetPath,
  mode: process.env.NODE_ENV
};

const outputPath = path.resolve(__dirname, "dist");
const targetOutputPath = path.resolve(outputPath, filename);
const webpackConfig = webpackConfigGenerator(config);

rmdir(targetOutputPath);
fs.mkdirSync(targetOutputPath);

gulp
  .src(path.resolve(__dirname, targetPath, "index.js"))
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest(targetOutputPath));
