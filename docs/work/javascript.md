# javascript规范
## 通用约定
### 命名
变量、函数名使用 Camel 命名法(首字母小写、后面首字母大写)

### 少使用全局变量
代码块使用!function(){}()包裹，不污染全局

### 每个页面基本模块js
```
//初始化
!function(){
	var app = {
		init:function(){
			this.fetchData();
			this.bindEvent();
		},
		bindEvent:function(){
		},
		fetchData:function(){
			this.renderData();
		},
		renderData:function(){
		}
	}
	app.init();
}();
```
### 高效使用
推荐使用三元运算符、||、&&
可以可参考：[传送门](https://github.com/airbnb/javascript)

## js优化
### 节流函数和防抖
使用节流函数优化滚动事件
使用防抖优化多次点击问题

### 解绑事件
一旦元素不需要再次执行事件，或者隐藏过渡掉可以解绑事件removeEventListener或者使用off，提高性能
```
function handler(e){
  //操作
  console.log(e)
}
ele.addEventListener('click', handler);//绑定
ele.removeEventListener('click', handler);//解绑
```
### 事件委托
```
document.querySelector('.xxx').onclick = function(ev){
	var ev = ev || window.event;
	var target = ev.target || ev.srcElement;
	if(target.nodeName.toLocaleLowerCase() == 'xx'){
		var index = Array.prototype.indexOf.call(xx,target)//获取索引
	}
}
```

## jQuery(zepto)优化
### 保存jQuery 变量
存放 jQuery 对象的变量以 $ 开头

将 jQuery 选择器返回的对象缓存到本地变量中复用

### 使用id寻找dom
尽可能的使用 ID 选择器，因为它会调用浏览器原生方法 document.getElementById 查找元素,比class快

### dom操作
$('#xx').find('li') 速度优先于 $('#xx li') 尽可能不使用find直接绑定元素上

### 链式写法
```
$("#myDiv").addClass("error").show();
```
### 减少浏览器的回流和重绘
改变元素的样式直接用class替换 除了改变颜色之类会重绘，布局之类会影响回流，回流一定会重绘

优化方案：
+ 通过class增加引发一次重绘
+ 使用translate 替代top
+ 不要使用 table 布局
+ 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。
一下可以生成一个图层
3D 变换：translate3d、translateZ
will-change
video、iframe 标签
通过动画实现的 opacity 动画转换
position: fixed



