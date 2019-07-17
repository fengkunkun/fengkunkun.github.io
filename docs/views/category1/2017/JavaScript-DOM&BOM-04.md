---
title: JavaScript-DOM&BOM-04
date: 2017-06-25 17:13:34
categories:
 -  技术
---

##### JavaScript-DOM&BOM-04

JavaScript-DOM&BOM

<!--more-->

# JavaScript

## BOM介绍

> ### 概念
>
> ```
> BOM（Browser Object Model）即浏览器对象模型。
> 本质： 通过对象抽象浏览器中的一些功能 例如：（刷新页面，alert,confirm,pormpt,跳转 ...）
> ```
>
> ### BOM顶级对象
>
> ```
> window对象是js中的顶级对象，定义在全局作用域中的变量、函数都会变成window对象的属性和方法，在调用的时候可以省略window。
> 
> ☞备注：
> 	  1.文档document也属于window对象中的一个
> 	  2.window代表整个窗口
> ```
>
> ### 页面加载事件
>
> ```
> 1. 
> window.onload = function() {}   ===> 页面加载完成：页面上的所有元素都创建完成，并且引用的外部资源都下载完毕（js,css）
> ```
>
> ### 定时器
>
> - #### setTimeout()
>
> ```
> 隔一段时间执行，只执行一次  ==》定时炸弹
> 
> ☞ 使用
> 	window.setTimeout(function, time)；
> 	function： 处理程序，可以是匿名函数
> 	time： 间隔时间，毫秒
> 	
> ☞ 清除定时器
>     	 1. setTimeout有一个返回值,代表当前定时器的标识
>     	 2. clearTimeOut(定时器标识)
> 	 
> 案例：
> 	 删除提示效果
> 	 过程：
> 	 	 点击按钮，显示一个层，3秒以后自动消失
> ```
>
> - #### setInterval()
>
> ```js
> 隔一段时间执行，并且会重复执行 ===》 类似于闹钟
> 
> ☞ 使用
> window.setInterval(function, time);
> function: 处理程序，可以是匿名函数
> time：时间，毫秒
> 
> ☞ 清除定时器
> 	clearInterval(定时器id)；
> 	
> ☞ 练习：	
> 1.倒计时案例
> 2.动画效果 
> 	 offsetLeft: 水平偏移量相对HTML
> 	 offsetTop： 垂直偏移量相对HTML
> ```
>
> ### location对象
>
> ```js
> location对象是window对象下的一个属性，使用location可以设置或者获取浏览器地址栏中的url
> ```
>
> #### 属性
>
> ```js
> href：实现页面跳转
> 获取地址 ：location.href
> 设置地址 ：location.href = "http://www.baidu.com"
> 
> 如果希望在新窗口中打开页面：
> 	 window.open('url路径');
> ```
>
> #### 方法
>
> ```js
> ☞ assign()  委派 ： 作用于href的作用一样，可以实现页面跳转
> location.assign("http://www.baidu.com")
> 
> ☞ replace() 替换： 跳转页面，浏览器不记录历史，浏览器中后退按钮无法使用
> location.replace("http://www.baidu.com")
> 
> ☞ reload() 重新加载： 类似于 F5
> 备注：
> 	  location.reload(true)  强制从服务器获取页面
> 	  location.reload(false) 从浏览器本地缓存中获取页面
> 	  
> 	  F5，刷新页面从缓存中加载
> 	  Ctrl + F5 强制刷新页面（从服务器获取页面）
> ```
>
> ### 其他属性

> - #### url组成
>
> ```js
> 统一资源定位符（网站地址）
> 
> scheme://host:port/path?query#fragment
> 例如：
> 	http://www.baidu.com:port/index.html?name=zs&age=18#bottom
> ```
>
> - #### 详解
>
> - #### scheme
>
> ```
> 通信协议，常用的http，ftp,maito等
> ```
>
> - ##### host
>
> ```
> 主机，服务器域名系统（DNS）或者IP地址
> ```
>
> - ##### port
>
> ```
> 端口号，默认端口号 8080
> ```
>
> - ##### path
>
> ```
> 路径，代表一个具体的文件目录或者一个文件夹
> ```
>
> #### 属性介绍
>
> ```js
> location.host   --> 主机名(域名)
> location.pathname   ---> 文件路径
> location.protocol   ---> 协议
> location.port  ----> 端口
> ```

## offset【获取元素位置和大小】

```js
☞ dom.offsetLeft  ---> 水平偏移
☞ dom.offsetTop   ---> 垂直偏移
备注：
   1.offsetLeft默认是相对整个HTML标签，如果其父元素是一个定位元素那么就相对其父元素（类似于css中的绝对定位）

☞ dom.offsetWidth  ---> 获取当前元素在浏览器中的实际宽度（内容+边框+内边距）   
☞ dom.offsetHeight ---> 获取当前元素在浏览器中的实际高度（内容+边框+内边距）   

```

![1552133513970](E:/%E9%BB%91%E9%A9%AC%E5%AD%A6%E4%B9%A0/%E5%B0%B1%E4%B8%9A%E7%8F%AD/wap%20API/05/05/01-%E8%AF%BE%E5%A0%82%E7%AC%94%E8%AE%B0/img/1552133513970.png)

## client【获取元素位置和大小】

```
☞ dom.clientLeft  --> 获取元素边框的左边框的宽度
☞ dom.clientTop --->  获取元素上边框的宽度

☞ dom.clientWidth   -->  元素宽度【不包括边框，但是包括内边距】
☞ dom.clientHeight  -->  元素高度【不包括边框，但是包括内边距】

总结：
     clientHeight = 内容区域 + padding
     clientWidth = 内容区域 + padding
```

![1552133599545](E:/%E9%BB%91%E9%A9%AC%E5%AD%A6%E4%B9%A0/%E5%B0%B1%E4%B8%9A%E7%8F%AD/wap%20API/05/05/01-%E8%AF%BE%E5%A0%82%E7%AC%94%E8%AE%B0/img/1552133599545.png)

## scroll【获取元素位置和大小】

```
☞ dom.scrollLeft   --->
☞ dom.scrollTop    --->滚动条向上滚动的距离【内容滚出去的距离】  [滚动事件 onscroll]

☞ dom.scrollWidth   ---> 
	 1. 如果内容区域小于当前元素，那么scrollWidth就代表当前元素大小【算内边距，不算边框】
	 2. 如果内容区域大于当前元素，那么scrollWidth就等于内容区域大小 + 左内边距
	 
☞ dom.scrollHeight  --->
```

![1552133556593](E:/%E9%BB%91%E9%A9%AC%E5%AD%A6%E4%B9%A0/%E5%B0%B1%E4%B8%9A%E7%8F%AD/wap%20API/05/05/01-%E8%AF%BE%E5%A0%82%E7%AC%94%E8%AE%B0/img/1552133556593.png)



## 练习

- ### 拖拽

  ```
  鼠标按下事件： onmousedown
  
  鼠标抬起事件： onmouseup
  
  鼠标移动事件： onmousemove
  
  案例思路：
   1. 鼠标按下时候的位置和鼠标离开时候的位置是相同的
   2. 鼠标按下时候的位置 =  鼠标在页面中的位置（e.pagex） - 当前元素在页面中的位置（offsetLeft）
   3. 元素最后移动的位置 = 鼠标移动后的位置 - 鼠标按下时候的位置
  ```

  ### 

- ### 放大镜

  ```js
   1. onmouseenter 和 onmouseleave 属于一组，不会有事件冒泡
   2. onmouseover 和 onmouseout 属性一组，有事件冒泡
  ```

  #### 