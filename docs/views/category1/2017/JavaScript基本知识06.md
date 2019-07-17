---
title: JavaScript基本知识-06
date: 2017-06-20 17:13:34
categories:
 -  技术
---

##### JavaScript基本知识-06

JavaScript入门常识

<!--more-->

## 06JavaScript

## 对象其他扩展部分

### 简单数据类型在内存中的存储

```javascript
 ☞ 简单数据类型（值类型） 存储在内存的 栈 上
  
 ☞ Number  String   Boolean  Null Undefined
  
 ☞ 分析简单数据类型在内存中的存储方式
  	var  n1 = 10;
	var  n2 = n1;
	 	 n2 = 30;
```

### 复杂数据类型在内存中的存储

```javascript
 ☞ 复杂数据类型（引用类型） 存储在内存的 堆 上
  
  ☞  Object | Array | 函数
```

### 简单数据类型作为函数的参数在内存存储

```javascript
 ☞  分析案例代码
 
 function  fn ( a, b ) {
      a = a+1;
      b = b+1;
      console.log( a );
      console.log( b );
 }

 var  x = 10；
 var  y = 5;

 fn(x, y);

 console.log( x, y );   思考：x ， y 的值是多少？
```

### 复杂数据类型作为函数的参数在内存存储

```javascript
 function Person ( name, age ) {
       this.name =  name; 
       this.age = age;
       this.sayHi = function () {
          console.log( "你好" );
       }
  }

   var p1 = new Peron( "张三", 18 );

    function getperson ( person ) {
		
          person.name = "李四";
        
    }

	getperson( p1 );

    console.log( p1.name );   思考： p1 的name值是什么？
```

### 测试练习

```javascript
function Person ( name, age ) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log( "你好" );
    }
}

var p1 = new Person(" 张三 ", 18);
function getperson ( person ) {
    person.name = "李四";
    person = new Person("王五",20);
    console.log(person.name);  
}

getperson(p1);
console.log(p1.name);    思考： p1.name 输出的结果是什么？
```

## 内置对象介绍

```javascript
☞  JavaScript组成：   ECMAScript  |   DOM   |  BOM

☞  ECMAScript：  变量 ， 函数， 数据类型 ，流程控制，内置对象。。。

☞  js中的对象： 自定义对象 ， 内置对象 ， 浏览器对象（不属于ECMAScript）

☞  Math对象，Array对象，Date对象。。。。
 
☞ 通过查文档学习内置对象   MDN  (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
```

## MDN介绍

```javascript
 MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
```

## Math对象

```javascript
  ☞ 提供了一系列与数学相关的方法或属性  ( 静态  |  实例)
  
  ☞ Math.PI          获取圆周率【属性】 
  ☞ Math.random()    返回大于等于0小于1之间的随机数
  
  
  ☞ Math.floor() 	 向下取整，返回一个小于当前数字的整数
  ☞ Math.ceil()	     向上取整，返回一个大于当前数字的整数
  
  
  ☞ Math.round()     四舍五入（小数如果小于0.5,返回小于当前数字的整数，如果小数部分大于0.5返回大于当前数字的一个整数）
  ☞ Math.abs()		取绝对值（返回当前数字的绝对值，正整数）
  
  ☞ Math.max()       返回一组数中的最大值 （可以设置多个参数，返回其中最大值，参数不可以是数组）
  ☞ Math.min()       返回一组数中的最小值 （可以同时设置多个参数，与最大值效果一样）
  
  ☞ Math.sin(x)	     返回一个正弦的三角函数 ( 注意： x 是一个以弧度为单位的角度)
  ☞ Math.cos(x)	     返回一个余弦的三角函数 （注意： x 参数是一个以弧度为单位的角度）
  
  ☞ Math.pow(x,y)	 返回x的y次幂
```

### 测试练习

```javascript
1. 求 1 到 10之间的随机整数

2. 求 20 到 50 之间的随机整数

3. 封装一个生成m到n之间的随机整数 （公式）
	function get_random (min, max) {
	  		return	Math.floor(Math.random()*(max-min+1)+min);
	}
4. 随机生成RGB颜色
   
5. 模拟实现 max()/ min()

```

## 静态成员和实例成员

```javascript
 ☞静态成员：  
 	    1. 不需要通过构造函数创建对象且能访问对象中的属性或方法
        
 ☞实例成员： 
    	1.  首先必须通过构造函数创建对象
        2.  通过构造函数创建对象并访问的属性或方法[实例成员]

```

## Date对象

```javascript
☞ Date是一个构造函数，必须通过 new Date() 创建一个实例成员才能使用

☞ 用法一：空构造函数
   var d = new Date();
   ☞GMT 格林威治时间（0时区）

☞ 用法二：在构造函数中传入毫秒值
   var d = new Date(d.valueOf());

☞ 用法三： 传入日期格式的字符串
  var  d = new Date("1988-8-8")

☞ 用法四： 传入数字
  var  d = new Date(year, month[,day,time,second]);  //必须设置年和月
  备注： 月份从0 开始， 0 代表1月


☞ 获取当前时间的毫秒值：
	d.valueOf()  
    d.getTime()  // 推荐使用
    Date.now()   //H5 新方法 有兼容信息

```

### Date中的方法

```javascript
☞ 日期格式化方法
var d = new Date();
    d.toString();  //转化成字符串
    d.toDateString();  //转换成日期字符串
    d.toTimeString();  //转换成时间字符串
    d.toLocaleDateString();   //返回本地的日期格式  （不同浏览器不同效果）
    d.toLocaleTimeString();   //返回本地的时间格式  （不同浏览器不同效果）


☞ 获取日期其他部分
	d.getSeconds()  //获取秒
    d.getMinutes()  //获取分钟
    d.getHours()    //获取小时
    d.getDay()      //返回周几   （0表示周日）
    d.getDate()     //返回当前月的第几天
    d.getMonth()    //返回月份   （从0开始）
    d.getFullYear()  //返回年份

```

### Datea案例

```javascript
 ☞ 写一个函数，格式化日期对象，返回 yyyy-mm-dd HH:mm：ss 形式
 
 ☞ 写一个函数计算时间差，返回相差的天/时/分/秒  【求 2008年8月8日到今天】

```

## 数组对象

```javascript
☞ 字面量创建数组
   var  ary = []
☞ 通过构造函数创建数组
   var ary = new Array();

☞ 数组中的属性 length

☞ 判断变量是不是数组    数组变量名 instanseOf  Array

☞ 判断变量是不是一个数组    Array.isArray(ary)   //存在浏览器兼容 （H5）中的新方法

```

### 数组中常用的方法

```javascript
☞ toString()   // 把数组转换为字符串，使用逗号分隔
☞ valueOf()   //  返回数组对象本身

var ary = [];
    ary.toString()
    ary.valueOf();


☞ 栈方法（先进后出）
	ary.push()   // 该方法有一个返回值，表示数组最新的长度，该方法中可以设置多个参数
	ary.pop()    //返回数组中最后一个字，且会修改数组的长度

☞ 队列（先进先出）
	ary.push()
    ary.shift()  //取出数组中的第一个元素，修改数组的长度
    ary.unshift(number)   //在数组中最开始位置添加一个值


☞ 排序方法
	 ary.reverse()  // 翻转数组
     ary.sort()	//数组排序  默认是从字符编码排序的

☞ 数组的sort方法

```

