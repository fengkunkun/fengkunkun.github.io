---
title: JavaScript-DOM&BOM-03
date: 2017-06-24 17:13:34
categories:
 -  技术
---

##### JavaScript-DOM&BOM-03

JavaScript-DOM&BOM

<!--more-->

# JavaScript-DOM

## 节点的层次结构

> - hasChildNodes() 【父元素中是否包含子节点】
>
> ```js
> dom.hasChildNodes()
> 总结：
> 	1.该方法返回的是一个布尔类型的结果用来判断当前元素中是否存在子节点。
>  	2.该方法会将元素中所有的节点都获取（包括空格，回车符，文字，标签等）
> ```
>
> - 父节点.chiledren【父元素中的子元素】
>
> ```js
> dom.children
> 总结：
>  	1. chiledren是一个属性，不是一个方法
>     2. 该属性返回父元素中所有子元素（只包含标签），不包括空格，回车符，纯文本等
>     3. 返回一个伪数组
>     4. 通过dom.children.length来判断是否存在子元素
> ```

> - 根据父节点获取子节点【父元素中的子节点】
>
> ```js
> dom.childNodes
> 总结：
> 	1.childNodes是一个属性，不是一个方法
>  	2.该属性将父元素中所有节点返回（包括回车，空格等特殊符号）
>  	3.该属性将回车符看做是一个空的文本
> ```
>
> - 获取父元素中第一个子元素
>
> ```js
> dom.firstElementChild
> 总结：
> 	1. 通过该属性可以将父元素中的第一个子元素获取到【标签】
>     2. 该属性只能获取标签，无法获取文字，空格，回车符等节点
> ```
>
> - 获取父元素中最后一个子元素
>
> ```js
> dom.lastElementChild
> 总结：
> 	1.通过该属性可以将父元素中最后一个子元素获取到【标签】
>  2.该属性只能获取标签，无法获取文字，空格，回车符等节点
> ```
>
> - 获取父元素中第一个节点
>
> ```js
> dom.firstChild
> 总结：
> 	1. 通过该属性可以将父元素中第一个节点得到
>     2. 节点中包括文字，回车符，换行符等
> ```
>
> - 获取父元素中最后一个节点
>
> ```js
> dom.lastChild
> 总结：
> 	1. 通过该属性将父元素中最后一个节点得到
>     2. 节点中包括文字，回车符，换行符等
> ```

## 操作与子元素相关的方法

> - #### 根据子节点获取父节点
>
> ```js
> ☞ dom.parentNode
> 总结：
> 	1.通过该属性可以获取到整个父元素节点
> 	2.包括父元素中的所有文字，回车符等节点
> 
> ☞ 通过 nodeType 获取节点类型
> 	dom.nodeType
> 总结：
>     	1. 如果nodeType返回值是1，那么代表当前节点是一个标签
>         2. 如果nodeType返回值是3，那么代表当前节点是一个文本【回车符】
>         3. 如果nodeType返回值是2，代表标签中的一个属性
>   
> ☞ 通过 nodeName 获取节点名称
> 	dom.nodeName
> 	总结：
>     	1. 如果当前节点是一个标签，那么通过该属性返回该标签的名称
>         2. 如果当前节点是一个文本，那么通过该属性返回 #text
>   
> ☞ 通过 nodeValue 获取文本节点的值
> 	dom.nodeValue
> 	总结：
> 	1.该属性只能获取文本节点中的值，无法获取标签元素中的值【获取标签元素中的值通过innerText】
> ```
>
> - #### 获取兄弟节点
>
>   - 获取下一个节点
>
> ```js
> ☞ node.nextElementSibling 
> 	总结：
>     	1.获取当前元素的下一个兄弟元素，不包括回车符，返回的是一个标签
>     
> ☞ node.nextSibling 
>      总结：
>      	1.获取当前元素的下一个兄弟元素，包括回车符
> ```
>
> ```
> - 获取上一个节点
> ```
>
> ```js
> ☞ node.previousElementSibling  
> 	 总结：
>            	 1. 上一个兄弟元素，不包括回车符
> ☞ node.previousSibline 
> 	 总结：
>            	 1. 上一个兄弟元素，存在兼容性
> ```
>
> 

## 创建元素

- 创建元素

  - document.write()  

    ```js
    注意：
    	如果放到事件中，会将原来的内容覆盖掉
    场景： 聊天窗口
    http://www.ibangkf.com/reg/
    
    例如：
    <a id="ibangkf" href="http://www.ibangkf.com">在线客服系统</a>
    <script type="text/javascript" src="http://c.ibangkf.com/i/c-test123-456.js"></script>
    ```

  - dom.innerHTMl

    ```
     注意：
     	性能有问题
    ```

  - document.createElement()

    ```
     总结：
     	1. createElement()只是在内存中创建了一个元素，无法再页面中显示出来
     	2. 创建完元素后需要通过node.appendChild(子节点)将元素添加到dom树中
     	
     案例：通过数组动态创建列表，鼠标进入高亮显示
      	  var ary = ["张三", "李四", "王五"];
    ```

  - 创建表格【根据数据】-- 父元素.removeChild(node)

    ```
    var heads = ['姓名', '年龄', '性别', '学号', '薪资', '城市', '操作'];
    var datas = [
    {name:'欧阳霸天',age:19,gender:'男',stuId:'1001',salary:'20000',city:'上海'},
    {name:'令狐霸天',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'诸葛霸天',age:19,gender:'男',stuId:'1001',salary:'20000',city:'南京'},
    {name:'西门霸天',age:19,gender:'男',stuId:'1001',salary:'20000',city:'深圳'},
    {name:'鸠摩智',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'段延庆',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'段正淳',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'容子矩',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'崔绿华',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'梅超风',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'鲁有脚',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'焦木和尚',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'韩小莹',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'侯通海',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'欧阳克',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'欧阳峰',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'玄真道人',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'司徒伯雷',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'陈近南',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'张康年',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'吴大鹏',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'西奥图三世',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'任盈盈',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'林远图',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'郑镖头',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'张金鏊',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'陈歪嘴',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'洪人雄',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'余人彦',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'劳德诺',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'玉钟子',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'史镖头',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'},
    {name:'东方不败',age:19,gender:'男',stuId:'1001',salary:'20000',city:'北京'}
    		];
    ```

  - 权限案例

## 动态创建元素的其他方式

- 父节点.insertBefore("新的节点","旧的子节点")

  ```
    注意：
    	 1. 我们通过createElement创建的元素，默认都在元素的末尾添加
    	 2. 通过insertBefore可以在父元素中某一个子元素的前面添加一个新元素
  ```

- 父节点.replaceChild(“新节点”,"旧节点")

  ```
    总结：
    	  1. 通过新节点将原来的节点替换掉
  ```

- 元素.cloneNode(true| false)

  ```
  true: 代表克隆元素内部的所有信息
  false: 默认。只克隆外边的标签
  ```

## 输入框事件

- oninput事件

  ```js
  dom.oninput = function() {}
  总结：
  	1. 用户在输入内容时候触发该事件
  ```

  

## 注册事件

- on方式注册事件

  ```
  问题：
  	使用on的方式给标签注册事件，后面的事件会将前面的事件覆盖掉
  ```

- addEventListener() 给元素注册事件

  ```
  参数介绍：
  	 第一个参数：代表事件类型【click,focus...】
  	 
  	 第二个参数：事件执行函数
  	 
  	 第三个参数：参数，可选，true或者false（默认）
  备注：
  	 1. 存在浏览器兼容性IE9以后
  	 2. 多在移动端使用
  语法：
  	事件源.addEventListener(事件类型,事件处理程序);
  ```

- attachEvent()  给元素注册事件

  ```js
  dom.attachEvent('事件类型'，function(){}) 
  
  注意：
   	 1. 第一个参数： 代表事件类型需要 加 on
   	 2. 该事件注册方式是给IE低版本浏览器使用的
  
   处理兼容性：
   if (el.addEventListener) {
    	el.addEventListener('click', modifyText, false); 
   } else if (el.attachEvent)  {
      el.attachEvent('onclick', modifyText);
   }
  ```

- 移除元素事件

  ```
    1. 如果通过on给元素注册事件，那么移除对应的事件赋值为null即可
    	 例如：  div.onclick = null;
    	 
    2. removeEventListener()
    	 注意：
    	 	 1. 如果需要通过removeEventListener移除事件，那么在使用addEventListener注册事件的时候必须是命名函数，不能是匿名函数
    	 	 
     3. detachEvent() ,移除事件也需要命名函数
  ```

- addEventListener()第三个参数介绍 【事件流】

  ```
    事件冒泡： 如果addEventListener的第三个参数为false
    事件捕获： 如果addEventListener的第三个参数为 true
    总结：
  	☞事件发生的三个阶段：
  		1. 捕获阶段  
  		2. 执行阶段： 执行当前点击的元素
  		3. 冒泡阶段： 
  	☞ on 或者 attachEvent方式注册的事件，无法捕获事件以上三个阶段，只能有事件冒泡，因为不支持第三个参数
  ```

- 委托

  ```
   事件委托： 本质就是利用了事件冒泡
   
   实现步骤：
   	  通过事件对象参数，来捕获当前事件相关的数据。
   	  
   事件参数（对象）： 当事件发生的时候，可以捕获一些和当前事件相关的数据
   
   案例：
   	 点击li获取内容信息
  ```

- 事件对象

  ```
  通过事件对象可以获取到事件发生的时候和事件相关的数据
  
  ☞ 在标准的方式中，在事件处理程序中，通过参数 “e”事件对象获取
  
  ☞ 在IE低版本中， 通过window.event 获取事件对象
  
  e.target : 获取真正触发事件的对象
  e.type： 事件类型
  
  e.clientX: 相对可视区域左上角横坐标【以HTML标签为参照，如果将body8像素去掉，body和html一样】
  e.clientY：相对可视区域左上角纵坐标【以HTML标签为参照，如果将body8像素去掉，body和html一样】
  
  e.offsetX: 横坐标是相对于当前点击元素的左上角
  e.offsetY: 相对当前点击元素的左上角
  
  e.pageX： 相对整个body标签左上角【始终以整个页面最左边为参照】
  e.pageY： 相对整个body标签左上角【始终以整个页面最上面为参照】
  
  e.screenX:  相对整个浏览器的左上角
  e.screenY： 相对整个浏览器的左上角
  
  e.stopPropagation() 阻止事件冒泡
  
  	
  	
  键盘事件： onkeydown： 用户按下任何键盘键（包括系统按钮，如箭头键和功能键）时发生。   
  		 onkeyup  ：  用户放开任何先前按下的键盘键时发生。 
  		 onkeypress： 【这个事件在用户按下并放开任何字母数字键时发生。系统按钮（例如，箭头键,TAB,ctrl等功能键）无法得到识别。 】
  		 
  e.key： 获取按下键的名称
  e.keyCode : 键对应的值 
  ```

  