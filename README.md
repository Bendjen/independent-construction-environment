# quick-cook

本项目为自配式脚手架，用于快速构建一些零散的项目，如编辑某个多页项目中某一页的静态资源。
基于webpack4+babel7,可以灵活配置自己所用的技术架构


## 新建项目

### npm run make taskA
将自动在 /src/taskA 下快速构建起基于vue的项目模板
### npm run make ./taskA/moduleA
将自动在 /src/taskA/moduleA 下快速构建起基于vue的项目模板


## 开发环境编译项目

### npm run dev taskA
快速编译 /src/taskA 形成静态资源在 /build/taskA，并启动watch监听更改自动构建
### npm run dev /taskA/moduleA
快速编译 /src/taskA/moduleA 形成静态资源 /build/taskA/moduleA，并启动watch监听更改自动构建


## 正式环境打包项目

### npm run dist taskA
快速打包 /src/taskA 形成静态资源在 /build/taskA，并进行代码压缩
### npm run dist /taskA/moduleA
快速编译 /src/taskA/moduleA 形成静态资源 /build/taskA/moduleA，并进行代码压缩