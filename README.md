# fromBuilder

> 一个基于vue的可拖拽生成表单工具

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 使用库
* [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable) - 拖拽操作
* [https://github.com/vuejs/vue-router](https://github.com/vuejs/vue-router) - 路由跳页
* ~~使用野狗云进行数据存储(已经停止免费服务，不能获取以及上传表单模板)~~
* localStorage模拟数据库，每个字段模拟表，本地实现一个简单的增删改查方法以完全取代野狗云
## 功能
* 可以通过拖拽生成一份完整表单，并且配置表单元素内容，包含大部分常见表单元素
* 能够对表单进行保存或删除
* 增加细节操作，如快捷键（↑、↓、ctrl+↑、ctrl+↓）
