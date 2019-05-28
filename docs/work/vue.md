# vue开发
>使用vue-cli3.x来搭建基础项目的架构，便于快速进行项目开发

[vue代码风格指南](https://cn.vuejs.org/v2/style-guide/)
## vue优化
+ 利用Object.freeze()提升性能
大量数据展示的情况下不改变的数据，这能够很明显的减少组件初始化的时间
+ 按需加载组件
```
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index')
```
+ 扁平化 Store 数据结构
+ 去除多余的样式，使用purgecss

## pc搭建项目
### 技术栈
+ vue2.6.x
+ vue-router
+ vuex
+ axios

### 完成功能
+ 基础架构开发

[下载项目地址](https://github.com/ymblog/vue-template)

## 移动端搭建项目

+ 在pc项目基础上加入lib-flexible移动端自适应和postcss-px2rem设置px到rem的转换
+ 移动端可以使用[vux](https://vux.li/),可用于轮播等插件
### 技术栈
+ vue2.6.x
+ vue-router
+ vuex
+ axios

### 完成功能
+ 基础架构开发

[下载项目地址](https://github.com/ymblog/vue-h5-template)

## 搭建后台系统项目

### 技术栈
+ vue2.6.x
+ vue-router
+ vuex
+ axios
+ element-ui

### 完成功能
+ 基础架构开发
+ 简单验证登录和退出登录
+ 管理员管理
+ 权限设置

[下载项目地址](https://github.com/ymblog/vue-admin-template)

[访问项目](http://lktop.coding.me/project/vue-admin/dist)

### 其他
预渲染解决spa的seo问题：使用[prerender-spa-plugin](phttps://github.com/chrisvfritz/prerender-spa-plugin)
