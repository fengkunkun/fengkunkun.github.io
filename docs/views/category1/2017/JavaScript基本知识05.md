---
title: JavaScript基本知识-05
date: 2017-06-19 17:13:34
categories:
 -  技术
---

##### JavaScript基本知识-05

JavaScript入门常识

<!--more-->

# 05JavaScript基础

## 函数其他部分

### arguments

```javascript
 ☞  arguments 对象，里面保存了所有参数信息
 
 ☞  注意使用：
 	    ✔ 如果一个函数的参数列表个数不确定（形参不确定），可以通过arguments获取
        ✔ 如果一个函数能够确定参列表，还是推荐使用固定的参数列表
```

### arguments案例

```javascript
 1. 求任意个数中的最大值
 
 2. 求任意个数的和
```

### 作用域

```javascript
 ☞ 概念：  变量或者函数可以起作用的区域
```

#### 全局作用域

```javascript
☞ 函数外部的区域就是全局作用域
```

#### 局部作用域

```javascript
☞ 函数内部就是一个局部作用域
```

### 作用域链

```javascript
 ☞ 当访问一个变量时，会先从本作用域中去找这个变量，若找不到则向上一级作用域中去找，依次类推，就形成了一个作用域链。
```

### 作用域链面试题分析

```javascript
 ☞ 分析代码执行结果
 	var a = 1;
    function fn1(){
      var a = 2;
      function fn2(){
          console.log(a);   //a的值 
      }
      fn2()
    }
    f1();

 ☞ 分析代码执行结果
 	function  f1 () {
        var num = 123;
        function f2 () {
            console.log( num );
        }
        f2 ();
    } 
    var  num = 456;
	f1();
```

### 预解析

```javascript
☞ 代码在执行前会进行预解析。
	1. 变量声明提升，把变量提升到当前作用域的最上面，不包括赋值
    2. 函数声明提升，把函数提升到当前作用域的最上名，不包括函数的调用
```

### 预解析面试题分析

```javascript
 ☞ 
 	var  a  = 25;
    function abc () {
        alert(a);
        var a = 10;
    }
    abc();

  ☞ 
  	var sum = 10;
    fun ();
    function fun () {
        console.log( num );
        var num = 20;
    }

   ☞
   	    f1();
        console.log(c);
        console.log(b);
        console.log(a);
        function f1 () {
            var a = b = c = 9;
            console.log(a);
            console.log(b);
            console.log(c);
       }
```

## 对象

> ```javascript
> 思考： 如何通过js函数将人的信息输出？
> ```
>
> ### 什么是对象？
>
> ```javascript
> ☞现实世界： 万事万物皆对象。
> 
> ✔对象： 必须是一个具体的事物。 （手机，汽车不是对象，属于一类对象）
> 	      ◆ 对象是由 特征（名词）【属性】 和 行为（动词）【方法】
>        
> ☞程序中的对象： 对现实对象的抽象
> 
> 
> ☞ 总结：
> 	  1. 程序中的对象：
>    		✔ 对象必须有对应的属性【描述对象的特点，在程序中一般使用名词描述】
>          
>          ✔ 对象必须有行为动作方法 【方法用来描述具体对象的行为动作，一般方法使用动词】
>    	
> ```
>
> ### 对象字面量创建对象
>
> ```javascript
> ☞ 通过字面量方式创建对象
> 	
> 	 var  变量名  =  {  key: value, key: value,  key: functon () {}  };
> 
> 
> 备注：
> 	1. 创建对象，必须要确定具体的事物
>     2. 创建对象，必须要确定对象有哪些属性【特征】或者方法【动作，行为】
>     3. 如果一次想要输出多个对象，那么可以将每一个对象放到一个数组中。
>  
>   
> ☞ 访问对象属性    （对象.属性   |  对象['属性名']）
> ☞ 访问对象方法    （对象.方法名）
> 
> 注意：
> 	 1、 如果通过  对象['属性名']访问对象的属性时候，必须保证使用字符串格式
> 
> 
> ☞ 函数：独立存在的函数
> 
> ☞ 方法： 属于对象的函数（匿名函数）
> ```
>
> ### 课堂练习
>
> ```javascript
> 1. 创建一个英雄对象
> ```
>
> ### 通过Object创建对象
>
> ```javascript
> ☞   var  变量  =  new Object();
> 
>      1. Object 是一个构造函数
>      2. 通过new调用构造函数
>   
>   
> ☞ 添加属性：
> 	 对象变量.属性名 = 值;
> 
> ☞ 添加方法：
>   对象变量.方法名 =  function () {}
> ```
>
> ### 工厂方式创建对象
>
> ```javascript
>  1. 思考如何创建多个游戏对象？
> 
>  2. 例如：
> function  create ( name, age, height ) {
>   var  Ob = new Object()
>   	  Ob.name = name;
>   	  Ob.age = age;
>   	  Ob.height = height;
>   	  Ob.eat = function () {}
>   
>    return Ob;
> }
> ```
>
> ### 自定义构造函数创建对象
>
> ```javascript
> ☞ 使用帕斯卡命名法 （每个单词首字母大写）
> 
> ☞ 例如：
>  function  CreateHero ( name, age, height ) {
>       this.name = name;
>       this.age = age;
>       this.height = height;
>  }
> 
> ☞ 课堂案例：
> 1. 使用自定义构造函数方式创建3个对象，并添加到数组中 【对象基本的属性有： name， age, gender】
> ```
>
> ### new 关键字执行过程
>
> ```
> 1. 在内存中创建一个空对象
> 2. this指向创建的对象
> 3. 执行函数
> 4. 返回当前对象
> 
> 注意：
> 	 1. 在构造函数中，默认的返回值就是当前创建的对象
> ```
>
> ### this关键字
>
> ```
> 1. 函数中的this         指向Window
> 2. 在方法中的this	   指向当前方法所属的对象
> 3. 在构造函数的this	  指向创建的对象
> 
> 总结：
> 	 谁调用函数，this就指向谁
> ```
>
> ### 遍历对象删除对象属性
>
> ```javascript
> ☞ 通过   for   in  遍历 对象的成员
> 
> ☞ 遍历对象中的属性
> 
> ☞ 遍历对象中的值
> ```
>
> ### 对象案例
>
> ```javascript
> 1. 通过构造函数创建3个对象，并将3个对象放到数组中，最后再将数组中每一个对象的信息输出。
> 备注：
> 	1. 对象的基本属性有  name ， gender , age
>     2. 对象的信息需要从用户输入中获取
> ```
>
> ### 检测对象的数据类型
>
> ```javascript
> 对象  instanceof  构造函数
> ```

## 对象总结

```javascript
 1. 程序中的对象： 在程序中对具体事物的抽象
 2. 对象的基本的组成：  属性【描述对象特征特点】  |  方法 【描述对象行为动作功能】
 3. 创建对象方式：
 		✔ 字面量方式
        var  obj = {
            key ： 值,
            key ： function () {
            
        	}
        }
        
        ✔ 通过构造函数
        var  obj = new Object();	
			 obj.自定义属性名 = 值;
             obj.自定义方法名 = function () {

             }
             
        ✔ 工厂模式创建对象（本质就是对第二种方式的封装，创建多个对象）
        function people (name) {
            var obj = new Object();
            	obj.自定义属性名 = name;
            return obj
        }

	  	var zs = people('zs');

		✔ 自定义构造函数创建对象（确定对象的类型）
        function People (name) {
             this.自定义属性名 = name;
        }

		var zs  = new People('zs');
        
 4. 对象的基本操作
 		✔ 获取对象的属性或方法
        
        1.  对象.自定义属性名  ||  对象['属性名']

		2.  对象.自定义方法名()
 		
 	
 5. 判断对象的具体类型
  	  对象名称  instanceOf  构造函数
```

## 其他扩展部分

### 简单数据类型在内存中的存储

```javascript
  ☞ 简单数据类型（值类型） 存储在内存的 栈 上
  
  ☞ Number  String   Boolean  Null Undefined
  
  ☞ 分析简单数据类型在内存中的存储方式
  	var  n1 = 10;
	var  n2 = n1;

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
  ☞ 
  
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

## 课堂案例

```javascript 
☞ 
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


☞  数组作为参数

function getary ( ary ) {
    ary[0] = -1;
}

var newary = [1,2,3];

getary( newary );

console.log( newary[0] );
```

