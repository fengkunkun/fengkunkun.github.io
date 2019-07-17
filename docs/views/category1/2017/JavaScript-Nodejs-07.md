---
title: JavaScript-Nodejs-07
date: 2017-07-30 17:13:34
categories:
 -  技术
---

##### JavaScript-Nodejs-07

JavaScript-Nodejs

<!--more-->

# multer第三方模块

## 1、简介

- multer 是基于express框架的一个实现文件上传功能的中间件。
- multer在GitHub仓库地址是：<https://github.com/expressjs/multer>，里面有中文文档

## 2、配置

使用multer，主要用于文件上传。那么文件上传到哪里？保存到哪里？上传后的文件名是否需要重命名等等问题，都可以通过multer来进行配置。

下面介绍一种非常简单的配置，一般网站使用此配置即可。

```js
// 加载模块
const multer  = require('multer');

// 配置
/*
1. 调用multer函数，需要给他传递一个对象，来对上传的文件进行配置
2. dest：表示目标，在这里表示文件上传的保存位置。下面设置上传的文件保存在当前文件夹的myup子文件夹中
3. 设置dest为一个目录后，如果该目录不存在，还可以自行创建该文件夹。
4. 得到的myupload是一个对象，该对象的几个方法都可以当做中间件，可以在添加或注册的时候使用
*/
const myupload = multer({
  dest: __dirname + '/myup'
});
```

如果需要更加复杂的配置，则看下面的代码

```js
// 加载模块
const multer  = require('multer');

// 配置
/*
1. 仍然是调用multer函数，给它传递一个对象进行配置
2. storage：文件的存储引擎，multer内置了磁盘存储(DiskStorage)和内存存储(MemoryStorage)
3. 下面使用的是diskStorage磁盘存储引擎，及它的配置
4. destination表示上传文件的存储路径，可以是一个函数，也可以是一个字符串
   如果用函数设置此项，函数的三个形参，分别表示请求的req对象、表示上传文件的file对象和一个回调函数
   无论使用函数还是字符串设置destination，都不会自动创建文件夹
5. filename 用于确定文件夹中的文件名的确定。 如果没有设置 filename，每个文件将设置为一个随机文件    名，并且是没有扩展名的。
6. 下面配置中，回调函数中的file形参表示上传的文件对象，对象的属性见后面的表
*/
const myupload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb是回调函数，用它设置上传路径，null的位置可以写成err，用于获取错误，使用null表示不获取错误
      cb(null, __dirname + '/abcd')
    },
    // destination: __dirname + '/cdef',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
});
```

上面配置 destination和filename函数的file参数表示上传的文件对象，该对象具有以下属性：

| Key            | Description                     |
| -------------- | ------------------------------- |
| `fieldname`    | Field name 由表单指定           |
| `originalname` | 用户计算机上的文件的名称        |
| `encoding`     | 文件编码                        |
| `mimetype`     | 文件的 MIME 类型                |
| `size`         | 文件大小（字节单位）            |
| `destination`  | 保存路径                        |
| `filename`     | 保存在 `destination` 中的文件名 |
| `path`         | 已上传文件的完整路径            |



## 3、使用

在有文件上传的请求处理中，使用中间件即可

```js
/////////////////////////////// 1. 单文件上传 ////////////////////////
// 单文件上传使用方式（形如：<input type="file" name="pic" />）
/*
在下面的 /abc 接口中，使用myupload.single() 方法作为该接口的中间件
myupload.single() 的参数 pic 为 表单项的name值
因为是单文件上传，所以在函数内部可以通过req.file 来获取上传的文件对象
*/
app.post('/abc', myupload.single('pic'), (req, res) => {
  console.log(req.file); // 上传的文件对象
  console.log(req.body); // 表单的文本信息
  res.send('文件上传成功');
});

/////////////////////////////// 2. 多文件上传 ////////////////////////
// 一个可以多文件上传的文件域（形如：<input type="file" multiple name="pic" />）
/*
在下面的 /abc 接口中，使用myupload.array() 方法作为该接口的中间件
myupload.array() 的参数 pic 为 表单项的name值， 2 表示允许上传的文件个数不能超过2个
因为是多文件上传，所以在函数内部可以通过req.files 来获取上传的文件对象
*/
app.post('/abc', myupload.array('pic', 2), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('文件上传成功');
});


/////////////////////////////// 3. 多个文件域 ////////////////////////
// 有多个文件域 (形如：<input type="file" multiple name="pic1" /><input type="file" multiple name="pic2" />)
/*
在下面的 /abc 接口中，使用myupload.fields() 方法作为该接口的中间件
myupload.fields() 的参数 为一个数组，数组中的每个单元对应着一个文件域，name为文件域name属性值，maxCount表示该文件域可以选择的文件个数最大值
因为是多文件上传，所以在函数内部可以通过req.files 来获取上传的文件对象
*/
let up = upload.fields([
    { name: 'pic1', maxCount: 1 }, 
    { name: 'pic2', maxCount: 8 }
]);
app.post('/abc', up, (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('文件上传成功');
});
```

# 1. 会话技术概况

## 1.1 http协议的缺陷

http是无状态的，就是无记忆，不能让同一浏览器和服务器进行多次数据交换时，产生业务的连续性。

目前，每次请求都是独立的，没有关系的。所以服务器和客户端都不知道是否是登录过的。

## 1.2 什么是会话控制

会话控制就是弥补http无记忆的缺陷的。能够将数据持久化的保存在客户端(浏览器)或者服务器端，从而让浏览器和服务器进行多次数据交换时，产生连续性。



## 1.3 会话控制的分类

- cookie： 将数据持久化保存到**客户端**（浏览器）
- session： 将数据持久化保存到**服务器端**



# 2. cookie技术

## 2.1 什么是cookie

- cookie是将数据持久化存储到客户端的一种技术。
- 网站可以将数据写到浏览器中， 一个网站最多能在一个浏览器写20个cookie。现在的浏览器能写的更多
- 一个浏览器能够设置的总cookie数最多为300个，每个不能超过4kb。
- cookie既能保存在文件中，也能保存在内存中。
- 可以通过浏览器查看某个网站的cookie

## 2.2 设置cookie

- 核心： cookie是服务端设置的，随着响应头返回给浏览器的信息，浏览器要将这些信息记录下来
- 如何设置cookie
  - 使用 res.setHeader
  - 使用res.writeHead
  - 如果使用的是express框架，可以使用res.set()方法
- cookie设置格式：`key=value;expires=time`
  - key: cookie的名称
  - value： 名称对应的值
  - expires： 有效期

```js
// 所有的设置cookie，都必须写到一个请求中

//1. 使用 http模块中的setHeader 方法，它可以和sendFile一起使用
res.setHeader('set-cookie', 'id=101');                   //设置单个cookie
res.setHeader('set-cookie', ['id=101', 'name=zs']);      //设置多个cookie

//2. 使用 http模块中的writeHead 方法，它不能和sendFile及send一起使用
res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8',
    'set-cookie': ['type=10', 'name=my']
})；

//3. 使用 express模块中的set 方法，该方法是express封装的方法，它可以和sendFile一起使用
res.set({
    'set-cookie':['goodsName=xiaomi 6', 'goodsPrice=3999']
})；

//4. 设置cookie时，指定有效期
//注意：要使用UTC时间，使用 toUTCString()方法转换
//设置有效期为 1小时
const expiresTime = new Date(Date.now() + 3600000).toUTCString();
res.set({
    'set-cookie':['goodsName=xiaomi 6;expires=' + expiresTime, 'goodsPrice=3999']
})
```

## 2.3 读取cookie

一旦网站在浏览器设置好cookie之后，浏览器**再访**问网站（任何页面）时，浏览器会将cookie信息随着请求头一起发送给服务器。所以我们在服务器端通过 `req.headers.cookie` 可以获取到cookie的信息。

```js
// 监视浏览器的请求
app.get('/get', (req, res) => {
    // 这里获取cookie
    console.log(req.headers.cookie);
    res.send('你又来了，我上次给你的cookie你带来了吗');
});

app.get('/test', (req, res) => {
    // 这里获取cookie
    console.log(req.headers.cookie);
    res.send('你又来了，我上次给你的cookie你带来了吗');
});

app.get('/test2', (req, res) => {
    // 这里获取cookie
    console.log(req.headers.cookie);
    res.send('你又来了，我上次给你的cookie你带来了吗');
});
```



## 2.4 cookie有效期

- 默认情况是，当关闭浏览器，cookie即消失
- 如果设置了cookie的有效期（expires），则cookie会在指定的有效期内一直存在，无论浏览器是否关闭



```js
// 设置cookie的有效期为1小时
// 方式: 先找到一小时之后的时间戳，再转为utc时间
// Date.now()： 获取当前时间点的时间戳 （毫秒数）
// Date.now() + 3600000： 一小时之后的毫秒数
// new Date(Date.now() + 3600000).toUTCString(): 将时间戳转为时间格式（UTC时间格式）
let time = new Date(Date.now() + 3600000).toUTCString();
// 设置cookie，有效期为1个小时
res.set({
    'set-cookie': ['name=zs;expires='+time]
});
```

# 3. session技术

## 3.1 session介绍

- 因为cookie是保存在客户端的数据，不够安全，所以出现了session。
- session会将数据保存到服务器端（保存在文件、内存服务器或数据表中），安全性就可以得到保证。



## 3.2 设置/读取session

express设置session时，需要使用第三方模块 --- express-session

```shell
npm i express-session
```



使用步骤：

1) 加载 express-session 模块

2) 将session注册为中间件（这样，当有请求过来的时候，都会先经过中间件）

3) 使用 `req.session` 对象设置/读取session

```js
//1. 加载 express-session 模块
const session = require('express-session');
//2. 配置项
let conf = {
    secret: '4ey32erfyf3fgpg',   //加密字符串。 使用该字符串来加密session数据，自定义
    resave: false,               //强制保存session即使它并没有变化
    saveUninitialized: false     //强制将未初始化的session存储。当新建了一个session且未
    							 //设定属性或值时，它就处于未初始化状态。
};
//3. 注册为express-session中间件
app.use(session(conf));

//4. 在一个测试请求中，设置session 
// 方法：  req.session.属性 = 值
app.get('/sets', (req, res) => {
    // session的值可以是任何的数据类型，比如布尔，数组，对象等
    req.session.isLogin = true;
    req.session.userInfo = {user_id:10001, user_name:"zs"};
    //注意：一定要将数据发回给浏览器，否则session无法生效
    res.send('设置session');
});

//设置好之后，req.session中的结构如下，当再次向服务器上任何页面或接口发请求时，我们可以获取到刚刚设置的session值
// req.session = {
//    isLogin: true,
//    userInfo: {user_id:10001, user_name:"zs"}
//}
```

## 3.3 session有效期

- 当服务器关闭后，session消失
- express-session会将session保存在内存中，每次重启服务器时即使没有关闭浏览器session也会消失

> 学习阶段都是开发环境，服务器一会关闭了，一会开启了。
>
> 开发环境中，session是保存在内存中的，所以关闭服务器，session就消失了
>
> 生产环境中session的有效期要设置在配置项中，`cookie: {maxAge: 3600000}`，session应该保存到内存服务器中

## 3.4 删除session

核心： req.session.destroy()    销毁所有session

```js
// 删除所有session
req.session.destroy();
```



## 3.5 session 的有效范围

在一个网站中设置了session，则整个网站都能找到这个session

# 4. cookie、session原理

cookie原理：



session原理：

服务器端会为每个用户（浏览器）各自保存一个session（文件）

下次用户再来访问的时候，就不能确定该用户的session是哪一个了

所以当服务器保存session之后，会以cookie的形式告诉浏览器，你的session是哪一个

下次再来访问服务器的时候，浏览器就会带着它自己的session号去访问，服务器就可以找到对应的session了



# 5、cookie和session的优缺点

cookie：优点是节省服务器空间，缺点不安全。

session：优点是安全，缺点需要服务器空间。





