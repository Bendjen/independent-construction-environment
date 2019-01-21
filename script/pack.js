const gulp = require("gulp");
const path = require("path");
const fs = require("fs");
const webpackStream = require("webpack-stream");

const webpackConfigGenerator = require("../config/webpack.config");
const removeFolder = require("./utils/removeFolder");
const rootDir = path.resolve(__dirname, "../");

const scriptPath = process.argv[process.argv.length - 1];
const pathArray = scriptPath.split("/");
const entry = path.resolve(rootDir, "src", scriptPath);
const filename = `${pathArray[pathArray.length - 1]}`;

const outputPublicPath = path.resolve(rootDir, "dist");
const outputDetailPath = path.resolve(outputPublicPath, filename);

const config = {
  filename: filename,
  entry: entry,
  output: outputDetailPath,
  mode: process.env.NODE_ENV
};
const webpackConfig = webpackConfigGenerator(config);

//这里需要加一个判断是否存在dist文件夹，否则会报错，目前需要手动配置

removeFolder(outputDetailPath);
fs.mkdirSync(outputDetailPath);

gulp
  .src(path.resolve(entry, "index.js"))
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest(outputDetailPath));
