---
title: JavaScript进阶知识-04
date: 2017-07-09 17:13:34
categories:
 -  技术
---

##### JavaScript进阶知识-04

JavaScript进阶知识

<!--more-->

# 04-面向对象继承-笔记

## 函数基础复习

### 创建和调用函数

- 函数声明：`function 函数名(形参){ //函数体 }`
- 函数表达式：`var 函数名 = function(形参){ //函数体 };`
- 调用：`函数名(实参)`

### 函数的参数

- 形参：函数定义时，小括号中的标识符。
- 实参：函数调用时，小括号中的实际数据。
- 关系：实参传递给形参，形参在函数内部使用；

### 函数的返回值

- 关键字：return
- 作用：返回结果；终止函数
- 注意：一个函数内部没有写return时，默认返回undefined。

### 作用域

- 全局作用域
  - 函数之外的执行环境
  - 全局变量：在全局作用域中用var关键字创建的变量。可以在程序的任何地方使用。
- 局部作用域
  - 函数体内部执行环境
  - 局部变量：在函数体内用var关键字创建的变量，仅仅是本函数体内
  - 注意：形参可以理解为局部变量
- 作用域链：
  - 先从本作用域总查找，若查找不到
  - 则向上层作用域中查找。



### 变量提升

- 在代码执行之前，要把用var关键字创建的变量名（仅仅是变量名），提升到当前作用域顶部。
- 函数声明在预解析时，函数整体会提升。



### 匿名函数和自调用函数

- 匿名函数
  - 没有名字的函数，要运算符配合使用
- 自调用或执行函数
  - 函数定义好后，直接调用
  - 匿名函数和有名字函数都可以自调用。
- 匿名函数的作用：
  - 可以实现避免全局变量污染。
  - 可以模拟块级作用域。



## 一. 函数也是对象【了解】

- 函数的另外一种创建方式

  - 语法：

    > ==var 变量名 = new Function('参数1'，'参数2'，...,'函数体中的代码');== 

  - 代码：

    > ```javascript
    >  // 函数是一种数据类型吗？
    >  // 是，Function
    >  
    >  // 函数声明创建函数
    >  // function fn(a,b) {
    >  //   console.log(a + b);
    >  // }
    >  // fn(10,20);
    > 
    >  // new 关键字创建函数
    >  // var fn = new Function('a','b','console.log(a + b)');
    >  // fn(10,20);
    > 
    >  // 扩展：
    >  // eval('字符串代码'); 把字符串代码解析成真正意义的js代码，并执行
    >  // 'alert(1 + 1)';
    >  eval('alert(1 + 1)')
    > ```
    >
    > 



## 二. 函数内部this的指向【重点】

### 2.1 普通函数中this的指向

this指向window

```javascript
   // 【在普通函数中this指向window】
    // function fn() {
    //   console.log(this);
    // }
    // fn();

    // var fn = function() {
    //   console.log(this);
    // };
    // fn();

    // (function(){
    //   console.log(this);
    // })();

    
    // function fn1() {
    //   function fn2() {
    //     console.log(this);
    //   }
    //   fn2();
    // }
    // fn1();


```



### 2.2 定时器中this的指向

this指向window

```javascript
    // 【在定时器中this指向windnow】
    // setTimeout(function(){
    //   console.log(this);
    // },5000);
```



### 2.3 构造函数中this指向

this指向当前创建的对象-在内存中开辟的空间

```javascript
   // 【在构造函数中this指向当前创建的对象】
    function Student(name,age) {
      this.name = name;
      this.age =age;
    }

    Student.prototype.sayHi = function() {
      console.log('我叫' + this.name);
    };

    var stu1 = new Student('张三',10);
    var stu2 = new Student('李四',10);
```



### 2.4 方法中this指向

对象.方法名();   指向调用者

```javascript
    // 【在方法中，this指向调用者。  对象.方法（）】
    stu1.sayHi();
    stu2.sayHi();
```



### 2.5 事件处理程序中this指向

this指向事件源

```javascript
    // 【在事件处理程序中，this指向事件源】
    document.onclick = function() {
      console.log(this);
    };
```



## 三. 改变this的指向【重点】

### 3.1 call方法

- 语法：==函数名.call(调用者,参数1...)== 

- 作用：函数被借用时，会立即执行，并且函数体内的this会指向借用者或调用者

- 代码：

  > ```javascript
  >  function fn(name, age) {
  >    this.name = name;
  >    this.age = age;
  >  }
  > 
  >  // 对象字面量
  >  var obj = {};
  >  fn.call(obj, '李四', 11);
  > ```
  >
  > 

### 3.2 apply方法

- 语法：==函数名.apply(调用者,[参数1...])== 

- 作用：函数被借用时，会立即执行，并且函数体内的this会指向借用者或调用者

- 代码：

  > ```javascript
  >  function fn(name, age) {
  >    this.name = name;
  >    this.age = age;
  >  }
  > 
  >  // 对象字面量
  >  var obj = {};
  >  fn.apply(obj, ['李四', 11]);
  > ```
  >
  > 

### 3.3 bind方法

- 语法：==函数名.bind(调用者,参数1...)== 

- 作用：函数被借用时，不会立即执行，而是返回一个新的函数。需要自己手动调用新的函数。

- 代码：

  > ```javascript
  >  function fn(name, age) {
  >    this.name = name;
  >    this.age = age;
  >  }
  > 
  >  // 对象字面量
  >  var obj = {};
  >  fn.bind(obj, '李四', 11);
  > ```
  >
  > 



### 3.4 案例

1. 伪数组借用数组的push方法实现增加

2. 使用Math对象max方法取出数组中的最大数字

3. 作业：伪数组借用数组的pop实现删除、splice实现任意位置的删除

    



## 四.函数的其他成员【了解】

- 函数名.arguments

  > 获取用户传入的实参

- 函数名.length

  > 获取函数形参的个数

- 函数名.name

  > 函数的名字