# 移动端优化
## 移动端适配
应用rem,使用[lib-flexible](https://github.com/amfe/lib-flexible),不过浏览器在处理小数像素的时候并不是全部舍入处理的,了浏览器小数像素的原理，使用雪碧图每个小图标四周留白2px空间

## 移动端兼容
参考:[自己项目总结](/docs/blog/css/)

## css体验优化
+ 加大按钮的点击热区
```
.btn:before{
  content:"";
  position:absolute;
  top:-10px;
  right:-10px;
  bottom:-10px;
  left:-10px;
}
```
+ 图片未加载撑开布局,如图片比例为1:1
```
.image-box{
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    overflow:hidden;
}
```
## chrome devtools测试性能
