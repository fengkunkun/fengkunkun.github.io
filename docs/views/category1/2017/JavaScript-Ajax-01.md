---
title: JavaScript-Ajax-01
date: 2017-07-15 17:13:34
categories:
 -  技术
---

##### JavaScript-Ajax-01

JavaScript-Ajax

<!--more-->

# 服务器介绍

## 客户端和服务器

- 客户端：
  - 当你使用自己的计算机来访问（留言板）网站的时候，你的计算机就是客户端
  - 你使用的浏览器来访问网站的，所以也可以认为浏览器就是客户端。
- 服务器：
  - 你访问的留言板网站搭建在老师的计算机上，老师的计算机就是服务器

> 客户端比较好理解，就是自己的计算机，接下来着重了解一下什么是服务器。

## 什么是服务器

- Q1：留言板这个HTML页面在你自己的计算机上吗？它在哪里？

  - 不在自己的计算机上，在服务器上。

- Q2：大家发的留言（数据），在哪里保存着呢？

  - 在服务器上

  服务器能够保存网页，能够保存网页中使用的数据。

- Q3：为什么要用服务器？

  - 有了服务器，网页才能够被所有人访问；
  - 有了服务器，数据也能够永久保存

- Q4：老师的电脑为什么能当做服务器？我自己的电脑能不能当服务器用？

  - 因为老师的电脑上安装了服务器软件
  - 同学们的电脑也可以当服务器，只需要安装服务器软件即可

- Q5：常用的服务器软件有什么？我们选择哪个软件来学习？

  - Apache 
  - Tomcat
  - app-win.exe  --  windows系统用     /     app-macos --- 苹果系统用

小结：

1. 服务器就是一个安装了服务器软件的计算机；
2. 服务器可以永久保存数据；
3. 服务器上的资源（html、css、js、图片、数据）可以被所有人访问。

------

## 请求响应过程

了解了什么是客户端和服务器，那么问题来了，在自己的计算机（客户端）的浏览器上输入老师的IP地址，按下回车，直至看到留言板网站。这个过程是怎样的呢？

要理解这个过程，先看一个生活中的场景：

你去商场买东西的过程

- 从家出发，通过地图找到商店的位置
- 你走到商场，并买了一个mac电脑
- 抱着mac电脑一路跑回家
- 到家，在家可以看到mac电脑，玩电脑



客户端浏览器如何访问服务器

- 在浏览器中输入IP地址，告诉客户端服务器的位置(找商场的位置)
- 浏览器通过web这条路(网络)，走到服务器去向服务器要数据(网页/留言数据)   (买了一个电脑)
- 服务器知道你要的数据后，把数据通过web这条路(网络)给你   (抱着电脑回家)
- 客户端浏览器接收到数据后把数据(网页/数据)显示出来    (家里能看到这个电脑，可以玩电脑)



上述，**从浏览器输入IP地址，到看到留言板页面，这一整个过程称之为==请求响应==过程**。

- 请求，指浏览器向服务器发出的请求（请求HTML页面和留言数据）；
- 响应，指服务器接收到浏览器的请求后，做出的回应（把请求的东西给你）；

> 有的时候，为了看到一个页面，也许会向服务器发很多次请求。

# 浏览器工具

## 浏览器工具

如果需要了解请求及响应过程。也可以使用浏览器工具，而且多数情况都是通过浏览器工具来分析学习的

## 请求类型(Type)

通过浏览器工具，可以查看到请求的类型，我们将请求类型分为两类即可：

- Ajax类型的请求：通过浏览器工具，查看请求的Type列，标注为xhr的，就是Ajax请求
- 非Ajax类型的请求：通过浏览器工具，查看请求的Type列，标注为document、stylesheet等，就是Ajax请求

## 请求方式(Request Method)

浏览器在向服务器发送请求的时候，也分为不同的请求方式。

请求方式共有数十种，但是主要的请求方式就两种，一种为GET方式，一种为POST方式。

- GET 得到，意思浏览器的目的是希望从服务器得到一些东西
- POST 投递，提交，意思是浏览器希望将数据提交给服务器



## 查看响应结果(Response)

当浏览器向服务器发送了一个请求后，服务器会根据请求，做出响应。

响应，即将浏览器请求的内容返回给浏览器。

# Ajax简介

简单来说，Ajax是一种技术、是能够使浏览器和服务器进行交互的一种技术。

Ajax也是一套内置在浏览器端的API，核心对象是 `XMLHttpRequest` ，通过这些API的调用，可以实现发送Ajax类型的请求和收取服务器端响应的数据。

# 搭建服务器环境

前面说，Ajax是一种能够实现浏览器和服务器交互数据的技术。

要学习Ajax，则必须有服务器，所以在学习Ajax之前，需要搭建一个服务器环境，简单来说，就是需要将你自己的计算机变成和老师的计算机一样，也能够充当服务器。然后才能够学习Ajax。

**搭建服务器的具体步骤**：

1. 将app-win.exe软件复制到随便一个文件夹（文件夹路径最好不要包含中文）
2. 在app-win.exe同级目录中，创建public文件夹（public文件夹里面的内容就是服务器上的资源）
3. 双击打开app-win.exe软件。苹果电脑使用终端打开软件（如果提示权限问题，则需要取得软件所在文件夹的管理员权限）

测试：

1. 可以在public文件夹中，创建一个test.html文件，然后通过浏览器向服务器发送请求，来请求这个html文件

   

2. 可以直接在浏览器上输出一个接口地址，向服务器发送请求，请求接口提供的数据

   时间戳：从1970年01月01日00:00:00 到当前 所经过的事件，一般来说，单位是秒。我们的 /time 接口返回的是毫秒。

3. 软件还提供了其他一些数据接口

   | 请求方式 | 接口地址    | 参数                                | 返回值                              |
   | -------- | ----------- | ----------------------------------- | ----------------------------------- |
   | GET      | /time       |                                     | 时间戳 [string]                     |
   | GET      | /query-get  | 任意                                | 发送给服务器的参数 [string]         |
   | POST     | /query-post | 任意                                | 提交给服务器的数据 [string]         |
   | POST     | /checkUser  | username:[string]                   | true或false                         |
   | GET      | /big-data   |                                     | 返回一百万次时间戳 [string]         |
   | GET      | /getMsg     |                                     | 返回所有留言[JSON]                  |
   | POST     | /addMsg     | name:[string]<br />content:[string] | 添加成功：true<br />添加失败：false |
   | POST     | /fd         | FormData对象                        | 提交给服务器的数据 [JSON]           |

# 发送 Ajax 请求

## 初体验

Ajax的核心是内置在浏览器中的 `XMLHttpRequest` 对象。我们可以通过调用这套API，实现发送Ajax请求。

在public文件夹中，创建01-获取时间.html ，代码如下：

```html
<p>当前的时间：</p>
<p id="time"></p>

<script>
    // 页面刷新，发送Ajax请求
    // 1. 创建 XMLHttpRequest 对象
    var xhr = new XMLHttpRequest();
    // 2. 设置请求方式、请求的接口地址
    // xhr.open(请求方式, 请求的接口地址);
    xhr.open('GET', 'http://192.168.97.36:3000/time');
    // 3. 发送请求
    xhr.send();
    // 4. 当请求-响应整个过程结束，才获取服务器响应的结果
    xhr.onload = function () {
        // 通过xhr.response 来接收服务器响应的结果
        // console.log(xhr.response);
        document.getElementById('time').innerText = xhr.response;
    }
</script>
```



## 难点

Q1：01-获取时间.html 为什么要通过IP地址来访问，能不能双击打开？

​	不能双击打开。html文件在public文件夹中，public文件夹就是服务器。访问服务器上的资源必须使用服务器的IP地址才行。

Q2：刷新01-获取时间.html 是如何看到时间戳的？

1. 当地址栏输入 01-获取时间.html  按回车，表示向服务器请求该html页面
2. 服务器收到请求后，会做出响应，即把html代码返回给浏览器
3. 浏览器接收到html代码后，解析这些html代码
4. 当解析都js代码的时候，发现又是一次Ajax请求，所以又发送了Ajax请求
5. 服务器收到Ajax请求，然后会把时间戳返回给浏览器，浏览器将接收到的时间戳放到页面中



# Ajax 发送 GET 方式的请求

## Ajax发送 GET 请求及简化URL

- get 请求

  - get 字面意思获取，一般用户从服务器获取数据

- 一个通用的IP地址

  - 127.0.0.1  始终可以访问到本机的服务器

  - localhost  始终可以访问到本机的服务器

    ==注意问题：访问html页面使用的是哪个IP，代码中发送Ajax请求的时候也必须使用这个IP==

- 如果访问的HTML页面和请求的数据接口是同一个服务器上的资源，IP地址可以省略

  ```js
  // 省略前的写法
  xhr.open('GET', 'http://127.0.0.1:3000/time');
  xhr.open('GET', 'http://localhost:3000/time');
  // 省略后的写法
  xhr.open('GET', '/time');
  ```

- 代码实现

  ```js
  // 1. 创建一个 xhr 对象
  var xhr = new XMLHttpRequest();
  // 2. 设置请求的方式和路径
  xhr.open('GET', 'http://127.0.0.1:3000/time');
  // 3. 发送请求
  xhr.send(null);
  // 4. 注册事件，请求响应过程完全结束，会触发xhr.onload事件
  xhr.onload = function () {
      // 通过 xhr 的 responseText 获取到响应的响应体
    	console.log(this.responseText)
  }
  ```

在发送Ajax请求的时候，比如A、B两个网页文件或接口地址都属于同一个服务器上的资源，则请求URL可以省略前面的IP和端口，直接用`/time` 即可。浏览器在解释 `/time` 的时候，会自动补充完整的URL。

```js
// 1. 创建一个 xhr 对象
var xhr = new XMLHttpRequest();
// 2. 设置请求的方式和路径

//////////////////////////////  注意，下面的URL接口就是简化后的写法。
xhr.open('GET', '/time');

// 3. 发送请求
xhr.send(null);
// 4. 注册事件
xhr.onload = function () {
    // 通过 xhr 的 responseText 获取到响应的响应体
  	console.log(this.responseText)
}
```

## GET 请求传参

- 什么时候需要带请求参数

  - 请求参数又叫做查询字符串
  - 一般用于告诉服务器此次请求的详细目的，比如查询什么、删除哪条记录等

- URL 携带查询字符串

  - 格式：http://www.baidu.com/s?q=word&sug=5017
  - 查询字符串(querystring)：
    - URL中==问号后面==携带的就是 get 请求传参的数据，叫做查询字符串
    - 格式：aa=xxx&bb=yyyy
    - 查询字符串只适合传输少量数据

- 代码演示：

  ```js
  // 1. 创建一个 xhr 对象
  var xhr = new XMLHttpRequest();
  // 2. 设置请求的方式和路径
  xhr.open('GET', '/query-get?id=2&name=zhangsan&age=23');
  // 3. 发送请求
  xhr.send(null);
  // 4. 注册事件
  xhr.onload = function () {
      // 通过 xhr 的 responseText 获取到响应的响应体
    	console.log(this.responseText);
  }
  ```

## 缓存问题(了解)

- 只有IE浏览器会有缓存问题，所以作为了解内容
- 缓存问题指的是：两次或多次 AJAX GET 请求**同一个** URL ，IE浏览器在第二次请求的时候，并不会从新向服务器发请求，而是直接使用上次请求的结果。

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/time')
xhr.send(null)
xhr.onload = function () {
  console.log(this.responseText)
  // => 每次得到的结果都是相同的
}
```

- 解决方案

> 让每次请求的URL都不同
>
> 不同的查询字符串会被浏览器认为是不同的地址，浏览器会忽略客户端缓存。

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/time?t=' + Date.now())
xhr.send(null)
xhr.onload = function () {
  console.log(this.responseText)
  // =>
}
```

# Ajax 发送 POST 方式的请求

post 把传递的数据封装在 HTTP 请求数据中，以键/值的形式出现，可以传输大量数据，对数据量没有限制，也不会显示在 URL 中。

- 字面意思是把数据提交给服务器
- post 请求，**必须调用setRequestHeader方法设置 Content-Type**
  - 请求头中的 Content-Type，告诉服务器发送过去的数据的格式
- 发送的数据
  - send方法的参数就是post方式发送给服务器的数据。（和get不同）
- 代码演示

```js
var xhr = new XMLHttpRequest()
// open 方法的第一个参数的作用就是设置请求的 method
xhr.open('POST', '/query-post')
// 设置 Content-Type 为 application/x-www-form-urlencoded，这行代码不用死记硬背，去复制即可
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 需要提交到服务端的数据可以通过 send 方法的参数传递
// 格式：name=zhangsan&age=18
xhr.send('name=zhangsan&age=18')
xhr.onload = function () {
    console.log(this.responseText)
}
```

# 课堂案例-验证用户名

```js
<input type="text" id="txt_user">
    <span></span>

<script>
    // 当输入框失去焦点，获取输入的值，将它发送给服务器接口 /checkUser
    // document.getElementById('txt_user').onblur = function () {
    document.getElementById('txt_user').onkeyup = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/checkUser');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + this.value);
    xhr.onload = function () {
        // console.log(this.response)
        if (this.response === 'true') {
            // 用户名不可用
            document.querySelector('span').innerHTML = '<font color="red">sorry，用户名已被占用</font>';
        } else if (this.response === 'false') {
            // 用户名可用
            document.querySelector('span').innerHTML = '<font color="green">恭喜，用户名可用</font>';
        }
    }
}
</script>
```

