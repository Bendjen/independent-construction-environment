const path = require("path");
const fs = require("fs");

const copydir = require("./utils/copydir");
const rootDir = path.resolve(__dirname, "../");

const scriptPath = process.argv[process.argv.length - 1];
const templatePath = path.resolve(__dirname, "template");
const output = path.resolve(rootDir, "src", scriptPath);

if (fs.existsSync(output)) {
  console.error(`已存在文件夹：${output},请删除后重试`);
} else {
  copydir(templatePath, output);
}
