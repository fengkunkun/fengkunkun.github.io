---
title: JavaScript-jQuery-01
date: 2017-07-01 17:13:34
categories:
 -  技术
---

##### JavaScript-jQuery-01

JavaScript-jQuery

<!--more-->

# jQuery初步

## 基础目标

> 能够说出什么是 jQuery 
>
> 能够说出 jQuery 的优点
>
> 能够简单使用 jQuery
>
> 能够说出 DOM 对象和 jQuery 对象的区别
>
> jQuery 选择器
>
> jQuery 样式操作

## jQuery概念：

jQuery 是一个快速、简洁的 JavaScript 库

​	JavaScript****库：**即 library，是一个封装好的特定的集合（方法和函数）。

​	学习jQuery本质： 就是学习调用这些函数（方法）。

【方法：对象.方法名()】

```
简单理解： 就是一个JS 文件，里面对我们原生js代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了。

其设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。

j 就是 JavaScript；   Query 查询； 意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。
```

------

**JavaScript** **库**

> jQuery
>
> Prototype
>
> YUI
>
> Dojo
>
> Ext JS
>
> 移动端的zepto
>
> 这些库都是
>
> ```
> 对原生 JavaScript 的封装，内部都是用JavaScript 实现的，我们主要学习的是 jQuery。
> ```

------

## **jQuery** **的优点**

> l轻量级。核心文件才几十kb，不会影响页面加载速度
>
> l链式编程、隐式迭代
>
> l对事跨浏览器兼容。基本兼容了现在主流的浏览器
>
> l件、样式、动画支持，大大简化了DOM操作
>
> l支持插件扩展开发。有着丰富的第三方的插件，例如：树形菜单、日期控件、轮播图等
>
> l免费、开源

## **jQuery** **的下载**

官网地址： https://jquery.com/

------

版本：

> 1x ：兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 2x ：不兼容 IE 678 等低版本浏览器， 官网不再更新
>
> 3x ：不兼容 IE 678 等低版本浏览器， 是官方主要更新维护的

其他版本：https://code.jquery.com/

## **jQuery** **的使用步骤**

> 1. 下载jQuery
> 2. 引入 jQuery 文件
> 3. 使用即可

# jQuery入门

## **jQuery** **的入口函数**

### 第一种：

```
$(function () {   

​    ...  // 此处是页面 DOM 加载完成的入口

 }) ;
```

### 第二种：

```
$(document).ready(function(){
   ...  //  此处是页面DOM加载完成的入口
});       
```

> 注意点：
>
> 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。
>
> 不同于原生 js 中的 load 事件是等页面文档、外部的js 文件、css文件、图片加载完毕才执行内部代码。
>
> 更推荐使用第一种方式。

## **jQuery** **的基本****使用**

### **jQuery** **的顶级对象** $

> 1.$ 是 jQuery 的别称，在代码中可以使用 jQuery 代替 $，但一般为了方便，通常都直接使用 $ 。
>
> 2.$ 是jQuery 的顶级对象， 相当于原生JavaScript中的 window。把元素利用$包装成jQuery对象，就可以调用jQuery 的方法。

### **jQuery** **对象和** **DOM** **对象**

$('div').css('属性', '值')     小知识点 

目的：学会区分【练习】

> 用原生 JS 获取来的对象就是 DOM 对象【document.getElement等方法】
>
> jQuery 方法获取的元素就是 jQuery 对象【$('div')等】
>
> jQuery 对象本质是： 利用$对DOM 对象包装后产生的对象（伪数组形式存储）

#### 特别注意

> 只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。

#### 相互转换

> DOM 对象与 jQuery 对象之间是可以相互转换的。

```
因为原生js 比 jQuery 更大，原生的一些属性和方法 jQuery没有给我们封装. 要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用。
```

> DOM 对象转换为 jQuery 对象： $(DOM对象)
>
> jQuery 对象转换为 DOM 对象（两种方式）
>
> ​	$('div') [index]       index 是索引号 
>
> ​	$('div') .get(index)    index 是索引号               

# **jQuery** 常用API

目标

> 1. jQuery 选择器
> 2. jQuery 样式操作
> 3. jQuery 效果
> 4. jQuery 属性操作
> 5. jQuery 文本属性值
> 6. jQuery 元素操作
> 7. jQuery 尺寸、位置操作

## **jQuery** **选择器**

```
原生 JS 获取元素方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标准
```

**$(“选择器”)   // 里面选择器直接写 CSS 选择器即可，但是要加引号**     

```
$('#id')==》指定id元素

$('*')==》所有元素

$('.class')==》指定class元素

$('div')==》根据标签获取元素

$('div,p,li')==》获取多个

$('li.class')==>交集获取

$('ul>li')==>子代

$('ul li')==>后代
```

### **隐式迭代**

> 遍历内部 DOM 元素（伪数组形式存储）的过程就叫做**隐式迭代****。**

```
简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用。
```

小练习：

​	给一组li修改样式

### **jQuery** **筛选选择器**

> $('li:first')：第一个
>
> $('li:last')：最后一个
>
> $('li:eq(2)')==》索引为2
>
> $('li:odd')==》索引为奇数
>
> $('li:even')==》索引为偶数
>
> 索引从0开始

### **jQuery** **筛选方法（重点）**

> $('li').parent()父级
>
> $('ul').children('li');子集
>
> $('ul').find('li')后代
>
> $('li').siblings('li')兄弟
>
> $('li'),nextAll();后面的
>
> $('li').prevAll();前面的
>
> 判断是否具有某个类名：$('div').hasClass('aaa')
>
> $('div').eq(index);指定索引方法

> ```
> 重点记住： parent()  children()  find()  siblings()  eq()
> ```
>
> 小知识点：添加事件，show方法，hide方法，toggle方法
>
> ***案例下拉菜单***

### **jQuery** **里面的排他思想**

案例：多个按钮点击改变当前按钮颜色，其他的不变 

> 想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。
>
> ```
> $(this).css(“color”,”red”);
> 
> $(this).siblings(). css(“color”,””); 
> ```

***案例：淘宝服饰精品案例***【index()获取索引值】

```
①核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相对应图片显示，其余的图片隐藏。

②需要得到当前小li 的索引号，就可以显示对应索引号的图片

③jQuery 得到当前元素索引号 $(this).index()  

④中间对应的图片，可以通过  eq(index) 方法去选择 

⑤显示元素 show()   隐藏元素 hide()
```

### **链式****编程**

> $(this).css('color', 'red').sibling().css('color', '');   
>
> 按钮案例 

## **jQuery** **样式操作**

> jQuery 可以使用 css 方法来修改简单元素样式； 也可以操作类，修改多个样式。
>
> ### **操作** **css** **方法**

```
参数只写属性名，则是返回属性值【$(this).css(''color'');】

参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号【$(this).css(''color'', ''red'');】

参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开， 属性可以不用加引号，
【$(this).css({ "color":"white","font-size":"20px"});】

```

### **设置类样式方法

> 作用等同于以前的 classList，可以操作类样式，注意操作类里面的参数不要加点
>
> ```
> 添加类【$(“div”).addClass(''current'');】
> 
> 移除类【$(“div”).removeClass(''current'');】
> 
> 切换类【$(“div”).toggleClass(''current'');】
> 
> 
> 原生 JS 中 className 会覆盖元素原先里面的类名。
> jQuery 里面类操作只是对指定类进行操作，不影响原先的类名
> ```
>
> ***案例：****tab栏切换***
>
> ```
> 点击上部的li，当前li 添加current类，其余兄弟移除类。
> 点击的同时，得到当前li 的索引号
> 让下部里面相应索引号的item显示，其余的item隐藏
> ```
>
> JQuery含义，入口函数，jQuery选择器【筛选方法】,jQuery样式【css，类名】

### **jQuery** **效果**

#### **显示隐藏效果**

```
show([speed,[easing],[fn]])
hide([speed,[easing],[fn]])
toggle([speed,[easing],[fn]])


（1）参数都可以省略， 无动画直接显示。
（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
（3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
（4）fn:  回调函数，在动画完成时执行的函数，每个元素执行一次。

```

#### **滑动效果**

```
slideDown([speed,[easing],[fn]])
slideUp([speed,[easing],[fn]])
slideToggle([speed,[easing],[fn]])


（1）参数都可以省略。
（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
（3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
（4）fn:  回调函数，在动画完成时执行的函数，每个元素执行一次
```

#### **事件切换**

**hover([over,]out)**

```
（1）over:鼠标移到元素上要触发的函数（相当于mouseenter）

（2）out:鼠标移出元素要触发的函数（相当于mouseleave）

（3）如果只写一个函数，则鼠标经过和离开都会触发它
```

#### **动画队列及其停止排队方法**

```
动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。

停止排队:stop()

(1）stop() 方法用于停止动画或效果。
(2)  注意： stop() 写到动画或者效果的前面， 相当于停止结束上一次的动画


```



#### **淡入淡出效果**

```
fadeIn([speed,[easing],[fn]])
fadeOut([speed,[easing],[fn]])
fadeToggle([speed,[easing],[fn]])
fadeTo([[speed],opacity,[easing],[fn]])


（1）参数都可以省略。
（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
（3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
（4）fn:  回调函数，在动画完成时执行的函数，每个元素执行一次。

```







