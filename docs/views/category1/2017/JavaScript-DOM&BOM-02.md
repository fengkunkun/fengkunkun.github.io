---
title: JavaScript-DOM&BOM-02
date: 2017-06-22 17:13:34
categories:
 -  技术
---

##### JavaScript-DOM&BOM-02

JavaScript-DOM&BOM

<!--more-->

# JavaScript-DOM操作

## innerText 和 innerHMTL

```js
1.innerText 和 innerHTML

//获取方式
通过innerText获取,仅仅包含文本
通过innerHTML获取，若有子标签时，会包含文本和子标签

备注：
	 1. 在老版本火狐浏览器中不支持innerText
     2. 在老版本火狐浏览器中使用textContent设置获取标签内容信息
     3. 2016年将innerText正式纳入标准属性
     

//设置结果
通过innerText设置,若设置中包含了子标签，该标签不会被渲染而是当做普通文本显示
通过innerHTML设置,若设置中包含了子标签，该标签会被渲染显示
```

## textContent

```js
1. textContent和 innerText

相同点：获取的都是文本，将html标签过滤掉

不同点：
textContent在获取内容的时候，将空格和换行效果都显示
innerText 在获取内容的时候，没有空格和换行效果
```

## 操作元素样式

> ```js
> 语法：
> 	1.dom.className = '类名';
> 	2.dom.style.属性 = 值;
> 备注：
> 	1.通过style属性方式设置背景色 backgroundColor
> ```
>
> #### 
>
> ```
> H5中新增的方式：
> 	 Dom.classList.add()       添加类名
>	 Dom.classList.remove()    移除类名
> 	 Dom.classList.toggle()    切换类名
> 	 Dom.classList.contains()  是否包含
> 	 
> 案例：
> 	1. 使用className方式实现tab栏切换
> 	2. 使用classListf方式实现tab栏切换
> ```

## 操作表单属性

> - value属性【购物车案例】
>
> ```js
>   1. 获取表单控件中的值
> <input type = 'text' value = '123'>
> <script type="text/javascript">
> 		var input = document.querySelector('input');
>        alert(input.value);
> </script>
> 
>   2. 设置表单控件的值
> <script type="text/javascript">
> 		var input = document.querySelector('input');
>        input.value = '值';
> </script>
> ```
>
> - disabled属性 readOnly属性【同意完成注册案例】
>
> ```js
>   1. 获取当前控件是否被禁用
>   dom.disabled  --> 如果返回false，代表没有被禁用，否则被禁用
>   dom.readOnly  --> 如果返回false，代表没有被禁用，否则被禁用
> 
>   2. 设置控件是否禁用
>   dom.disabled = true | false;
>   dom.readOnly = true | false;
> ```
>
> - checked属性
>
> ```js
>   1. 获取控件是否被选中
>   dom.checked   ---> true （选中）   | false  (未选中)
> 
>   2. 设置控件是否被选中
>   dom.checked = true | false;
> ```
>
> - selected属性
>
> ```js
>   1. 获取下拉列表是否被选中
>   dom.selected  ---> true (选中)  | false (未选中)
> 
>   2. 设置控件是否被选中
> 	dom.selected  = true (选中) | false (未选中)
> 备注：
>   	1. 下拉列表默认是从第一项开始显示的，默认第一项是被选中的状态
> ```

## 文本框事件

> - onfocus 获取焦点
>
> ```js
> dom.onfocus  ---> 获取焦点时候触发事件
> ```
>
> - onblur 失去焦点
>
> ```js
> dom.onblur    ---> 失去焦点触发事件
> ```

## 鼠标事件

> - onmouseenter 鼠标进入事件【没有事件冒泡】
>
> ```js
> dom.onmouseenter = function() {}
> ```
>
> - onmouseleave 鼠标离开事件
>
> ```js
> dom.onmouseleave = function() {}
> 备注：
> onmouseenter 和 onmouseleave 是对应的一组
> ```
>
> - onmouseover   鼠标放到标签之上【会有事件冒泡，少用】
>
> ```js
> dom.onmouseover = function() {}
> ```
>
> - onmouseout    鼠标离开
>
> ```js
> dom.onmouseout = function() {}
> ```
>
> - 多个标签注册事件，获取索引方式
>
> ```html
> 实现的功能：
> 	  用户点击（鼠标悬停）到标签上，获取该标签对应的索引方式：
> 
>    1. 通过给标签（对象）动态添加一个表示索引的属性，并赋值
>    2. 通过代码获取该索引值即可
> ```

## 标签属性操作方式

> - 系统属性
>
> ```js
> ☞ 获取属性的值：
> dom.getAttribute(属性名)；
> 备注：
>    	   1. 通过getAttribute可以获取标签属性对应的值
>        2. 如果标签没有对应的属性，那么getAttribute返回null
> ☞ 设置
> dom.setAttribute(属性名,值);
>  备注：
>  	1.通过setAttribute可以给标签添加新的属性
>      2.如果该标签已经存在某个属性，是对该属性值得修改
> ☞ 删除
> dom.removeAttribute(属性名)；
> 	 备注：
>      	1. 通过removeAttribute可以将属性移除  	
> ```
>
> - 自定义属性
>
> ```js
> 概念：以  data-* 开始的属性，为自定义属性
> 
> 作用：  保存数据(处理业务中的数据)
> 
> ☞ 获取
> 	dom.dataset     --->  返回自定义属性的对象【该属性只能获取自定义属性】    
>  dom.dataset.属性名称  
> 	dom.dataset["属性名称"]
> ☞ 设置
> 	 Dom.dataset.自定义属性名称=值;
> 备注：
> 	getAttribute()也可以用来获取自定义属性
> ```
>
> #### 