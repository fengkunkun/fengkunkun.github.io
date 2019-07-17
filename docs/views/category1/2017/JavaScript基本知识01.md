---
title: JavaScript基本知识-01
date: 2017-06-15 17:13:34
categories:
 -  技术
---

##### JavaScript基本知识-01

JavaScript入门常识

<!--more-->

# 01-JavaScript基础

## 序言

> ### JavaScript发展历史(js)

```javascript
1.  1994年，网景公司(Netscape)发布了Navigator浏览器0.9版，这是世界上第一款比较成熟的网络浏览器，
	轰动一时。但是这是一款名副其实的浏览器--只能浏览页面，浏览器无法与用户互动,当时解决这个问题有两个办		法，一个是采用现有的语言,许它们直接嵌入网页。另一个是发明一种全新的语言。

2. 1995年Sun公司将Oak语言改名为Java，正式向市场推出。Sun公司大肆宣传，许诺这种语言可以"一次编写，到处运	 行"(Write Once, Run Anywhere)，它看上去很可能成为未来的主宰。

3. 网景公司动了心，决定与Sun公司结成联盟

4. 34岁的系统程序员Brendan Eich登场了。1995年4月，网景公司录用了他,他只用10天时间就把Javascript设计出来了。  （多肽语言）

5. (1)借鉴C语言的基本语法; (2)借鉴Java语言的数据类型和内存管理; (3)借鉴Scheme语言，将函数提升到"第一等公民"(first class)的地位; (4)借鉴Self语言，使用基于原型(prototype)的继承机制。
```

> ### JavaScript是什么？

```javascript
JavaScript： 基于对象和事件驱动，运行在浏览器客户端的脚本语言。[js]
     ✔ js的运行环境： 运行在浏览器端的一种语言
     ✔ 最后将所有的js代码都要以对象的形式去执行，都要通过事件的方式去触发执行【DOM】
	
 对象： 
	 现实世界中的对象：  将任何一个具体的事物都是一个对象【万事万物皆对象】
     编程中的对象： 对现实中对象的抽象描述
     
     面向对象特征：   封装    继承   多肽
 
 编程思想：
 
 ✔面向对象：【推荐】
 	   代码执行都要以一个具体的对象为整体去执行
 ✔面向过程：
 	   代码执行的时候，一行一行执行的。
```

> ### JavaScript能干什么？

```javascript
  ☞ 常见的网页效果【表单验证，轮播图。。。】
  ☞ 与H5配合实现游戏【水果忍者： http://www.jq22.com/demo/html5-fruit-ninja/】
  ☞ 实现应用级别的程序【 http://naotu.baidu.com】
  ☞ 实现统计效果【http://echarts.baidu.com/examples/】
  ☞ 地理定位等功能【http://lbsyun.baidu.com/jsdemo.htm#i4_5】
  ☞ 在线学编程【https://codecombat.163.com/play/】
  ☞ js可以实现人工智能  【面部识别】
  ☞ 可以实现服务端功能  nodejs
```

> ### JavaScript组成

```javascript
  ☞ ECMASCRIPT    定义了javascript的语法规范,描述了语言的基本语法和数据类型
  
  ☞ BOM （Browser Object Model） 即浏览器对象模型。
	浏览器对象模型,一套操作浏览器功能的API,通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等
    
  ☞ DOM (Document Object Model) 文档对象模型,一套操作页面元素的API,DOM可以把HTML看做是文档树，通过	      DOM提供的API可以对树上的节点进行操作 【js+HTMl+css】
```

## JavaScript书写位置

> ### 内嵌式写法

```javascript
 ☞  在html页面内部设置
    <script type="text/javascript">
		 js
	</script>

  注意：
  	  该标签可以放到head标签中或者body标签中
```

> ### 外联式写法[推荐写法]

```javascript
 ☞ 
 	1. 新建js文件
    2. 通过script标签引用到当前页面中
    <script type="text/javascript" src="test.js"></script>

注意：
	1. 不能将代码写到外联式标签中。
    2. 一个网页中可以同时调用多个外部js文件
    <script type="text/javascript" src="test.js"></script>
	<script type="text/javascript" src="test.js"></script>
	<script type="text/javascript" src="test.js"></script>
	<script type="text/javascript" src="test.js"></script>
```

> ### 行内式写法（不推荐）

```javascript
☞  将js代码写到标签内部
<div onclick="js代码"></div>

注意：
	 onclick 是一个点击事件： 当点击div的时候，会触发该事件，执行该事件中的代码
```

## JavaScript中输入消息方式

```javascript
alert();

document.write('<h1>我是一段文字</h1>');   在网页中输出信息

prompt("请输入姓名","测试");   //接收用户输入的

confirm("确定不听课么");

console.log("adsadsfafds");	 //在控制台中输出消息

总结：
	 1. 在js中如果希望输出一个具体的文本信息，必须带引号
     2. 在使用document.write();的时候，可以在方法内输出html标签，加引号。
```

## 变量（重点）

> ### 变量概念

```javascript
 ☞ 变量：  变量指的是在程序中保存数据的一个容器
```

> ### 定义变量及赋值

```javascript
 ☞ 定义变量
 	 var  变量名；
 ☞ 赋值
 	  变量名 = 值;

 ☞ 总结：
	   1. 一个变量一次只能保存一个值
       2. 最后一次的赋值结果
       3. 变量是区分大小写（js区分大小写）
```

> ### 变量命名规范

```javascript
☞ 规则    必须遵守的，不遵守的话 JS引擎 发现并报错 
    1. 由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号( $ )组成，如：var usrAge, num01, _name
    2. 区分大小写 强调：JS 严格区分大小写 ，var app; 和 var App; 是两个变量
    3. 不能 以数字开头，或者汉字定义变量名
    4. 不能 是关键字、保留字 和 代码符号，例如：var、for、while、&, class
    5. 不能出现空格
        
☞ 规范  建议遵守的，不遵守的话 JS引擎 也不会报错
	1. 变量名必须有意义
    2. 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。
```

> ### 测试练习

```javascript
1.下面四个变量声明语句中，哪一个变量的命名是正确的？
    A．var for               B．var txt_name               
    C．var myname myval      D．var 2s
    
   
2.下面哪一个语句定义了一个名为 Myval 的变量并将它的值赋为2205？
    A．var myval=2205         B．var MyVal=2205
    C．var Myval=2205         D．Myval=2205 【不规范】
    

3. 气温表示方式有两种：摄氏度和华氏度

	   华氏度=9/5*摄氏度+32

   请使用代码完成：让用户输入任意的摄氏度，得到对应的华氏度。
   
4. 定义两个变量，求和

5. 交换两个变量的值
```

## 数据类型（重点）

> ### 数据类型
>
> ```javascript
> ☞ 数据类型：  数据类型指的是变量的数据类型
> ```

> ### 简单数据类型
>
> - 数字类型(number)
>
> ```javascript
> ☞ 凡是数字都属于该类型【整数，小数，负数】
> 
> ☞ 只要变量的值是一个具体的数字，那么当前变量的数据类型就是数值类型
> 
> ☞ number类型表示的数字大小：
> 	  最大值是±1.7976931348623157乘以10的308次方    Number.MAX_VALUE
> 最小值是±5 乘以10的-324次方				  Number.MIN_VALUE
> ```
>
> - 字符串类型(string)
>
> ```javascript
> ☞ 字符串可以是引号中的任意文本。可以使用单引号或双引号
> 
> ☞ 在js中一般写字符串类型的变量时候，推荐使用单引号。
> 
> ☞ 注意：
> 	 1. 单引号和双引号之间的嵌套
> 	例如： 输出    我是"高帅富"程序猿;  
>   
>      2. 转义字符
> 	 \n        换行
>   \\		   斜杠
>    \'		   单引号
> 	  \"	   双引号
> 	  \r 	   回车符
>   
>   例如：
>   var strMsg = 'I'm the GOD of my world ~!';   //输出：I'm the GOD of my world ~!
>   var strMsg2 = "I"m the GOD of my world ~!";  //输出：I"m the GOD of my world ~!
>   var strMsg3 = '反斜杠是这个 \\，神奇！';  //输出：反斜杠是这个 \，神奇！
> ```
>
> - 布尔类型(boolean)
>
> ```javascript
> ☞ true  和 false 
> ```
>
> - undefined类型（了解）
>
> ```javascript
> 		//如果一个变量没有赋值，该变量的默认是undefined
> 		var n1;
> 		//如果一个变量的值是undefined，那么该变量的数据类型就是undefined类型
> ```
>
> - null 空对象类型（了解）
>
> ```javascript
> ◆ null类型被看做空对象指针.只有一个值，即 null 值
> ◆ null 空比如一个变量原先有值 可以将变量的值设置为null 代表清空变量容器中的数据 
> ◆ 作用为了清空对象。
> ```

> ### 复杂数据类型（目前不讲）
>
> - object类型
>
> ### 测试练习

```javascript
请说出如下变量分别对应的数据类型是什么？
	var  a1=123;    var a2="123";    var a3=true;  var a4="false";   var a5="1.63";
	var  a6; 		var a7=null;	 var a8="null"
```

## 数据类型判断

```javascript
 ☞ 使用  typeof 变量  可以得到对应变量的数据类型
 ☞ 例如：
	   var n1 = 123;
		//获取n1的数据类型
		console.log(typeof n1);
		var n2 = '123';
		console.log(typeof n2);
		var n3 = true;
		console.log(typeof n3);
```

## 判断一个变量是不是数字

```javascript
isNaN(x) 方法

例如：
	var usrAge = 21;
    var isOk = isNaN(usrAge);
    console.log(isNum); // false ，21 不是一个 非数值

    var usrName = "James";
    console.log(isNaN(usrName));//true ，"James"是一个 非数值
```

## 数据类型转换

- 转数值类型

```javascript
 ☞Number(变量)：
  	 总结：
     	  1. 可以通过该方法将数据类型转换为数值类型
            var n1 = '123';
            console.log(typeof n1);
            //方法一：通过Number()
                n1 = Number(n1);
            console.log(typeof n1);
          2. 在转换的过程中可以将原来的值保留，遇到小数直接保留下来，不会舍去
          3. 如果变量无法转换为数值类型，那么返回的结果是NaN； 对应的数据类型依然是数值类
          4. 如果将布尔类型转换为数值类型，true 转化后的结果是 1  false 转化后的结果是0
          
  ☞parseInt(变量)
  	var num1 = parseInt("12.3abc");   // 返回12，如果第一个字符是数字会解析知道遇到非数字结束
    var num2 = parseInt("abc123");   // 返回NaN，如果第一个字符不是数字或者符号就返回NaN
    备注：
        1  只会保留整数部分，通过该方式进行数据类型转换后得到就是一个整数
        2. 如果一个变量中的值无法转换为具体数字，那么返回的结果是一个 NaN 的值
        3. NaN (not  a  number)   ----NaN对应的数据类型是数值类型
        4. 通过该方法可以将其他数据类型转为数值类型
        
  ☞parseFloat(变量)
	总结：
    	 1. 通过该方法可以将其他数据类型转换为数值类型
         2. 在转换过程中，如果遇到小数，那么会直接将小数部分保留
         3. 如果转化不成功过，返回的结果NaN
         
	parseFloat()把字符串转换成浮点数
```

- 转字符串类型

```javascript
 ☞  变量.toString()
 		var num = 5;
		console.log(num.toString());

 ☞  String(变量)
    	
	备注：
	String()函数存在的意义：有些值没有toString()，这个时候可以使用String()。比如：undefined和null
```

- 转布尔类型

```javascript
 ☞ Boolean() 
 备注：
	 0  |''(空字符串) | null | undefined | NaN  会转换成false  其它都会转换成 true
```

### 测试练习

```javascript
 1. 让用户输入一个三位数【整数】，使用代码分别获取到这个三位数字百位，十位，个位上的数字。
  	 例如：
  	 	用户输入： 456， 最后在浏览中分别弹出 4,5,6
  	 	
 2. 用户任意输入一个三位数，求这个三位数字百位，十位，个位之和。 
```

## 算数运算符

```javascript
 + 运算
	总结：
       1. 如果是数值类型的变量相加，结果就是一个数值类型的结果
       2. 如果是一个字符串类型的变量相加，最后的结果就是字符串（加号起到的作用就是拼接字符串的功能）
    	
 -运算
	 总结：
     	1. 如果是数值类型的变量相减，结果就是一个数值类型的结果
        2. 如果是数字的字符串相减，得到的结果也是一个数值类型结果（发生了隐式类型转化）
            var n1 = '123';
            var n2 = '123';
    	3. 如果是非数字的字符串相减，得到的结果是NaN
 *运算
	
 /运算
	   1.如果是数值类型的变量相除，结果就是一个数值类型的结果
       2. 如果是数字的字符串相除，得到的结果也是一个数值类型结果（发生了隐式类型转化）
       3. 如果是非数字的字符串相除，得到的结果是NaN
       4. 如果除数是0 ，得到的结果是 Infinity （无穷大的值）
	 
 %取余（获取余数）  
```

### 测试练习

```javascript
 请使用代码完成：
  1. 如果今天是周六，那么100天以后是周几？
  
  
  2. 写一个程序，要求用户输入鸡蛋数，如果20个鸡蛋放一盒，判断要多少个盒子。
```

## 赋值运算符

```javascript
 += |  -=   |  *=  |  /=  |   %= 

var  a += b ;    =====> 等价于        a = a+b;
```

## 一元运算符

- 前置++  和 后置 ++

- 前置-- 和 后置--

### 测试练习

```javascript
1.
    var    a;
    var    b=6;
    a=++b;
    请问：a的值是多少，b的值是多少。
    a=b++;
    请问：a的值是多少，b的值是多少。
2.
var a = 1; var b = ++a + ++a;   console.log(b);    
var a = 1; var b = a++ + ++a;   console.log(b);    
var a = 1; var b = a++ + a++;   console.log(b);    
var a = 1; var b = ++a + a++;   console.log(b); 
```

## 比较运算符

```javascript
1.   >  
    
2.   <
    
3.   >=     大于 或者 等于，只要有一个满足即可
    
4.   <=     小于 或者 等于，只要满足一个即可

5.  ==      只用来比较变量中的值是否相等，不考虑数据类型
    
6.  ===     用来判断值和数据类型必须同时相等
    
7.  !=	    判断值是否不相等，不考虑数据类型
 
8.  !==      判断值和数据类型
    
    
☞ 总结：
	  ✔ 通过比较运算符得到的结果只有两个结果，一个是正确的，一个是错误的
      ✔ 通过比较运算符得到的结果 只有 true[正确] 和 false[错误]
```

## 逻辑运算符

```javascript
 1.   ||  或： 条件只要有一个满足即可
      总结：
      	  1. 如果条件中有一个结为true(代表有一个条件满足了)，那么通过或运算后最后的结果为true
          2. 如果条件中结果都不满足，那么通过或运算后结果为false
     
 2.   &&  且： 要求所有的条件都必须满足才可以
 	  总结：
	      1. 如果条件都为真（true），那么通过且运算后最后的结果也是真（true）
          2. 如果条件中自少有一个条件不满足（false），那么通过且运算后的结果为false
     
 3.   !	  非（取反） : 
```

## 运算符优先级（了解）

```javascript
优先级从高到底
	1. ()  优先级最高
	2. 一元运算符  ++   --   !
	3. 算数运算符  先*  /  %   后 +   -
	4. 关系运算符  >   >=   <   <=
	5. 相等运算符   ==   !=    ===    !==
	6. 逻辑运算符 先&&   后||
	7. 赋值运算符
 思考：
	var num = 10;
    var sum = num++ + num + ++num;
    console.log(sum);//?
    console.log(num);//?
```

