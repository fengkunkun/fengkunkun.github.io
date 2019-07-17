---
title: JavaScript-Nodejs-08
date: 2017-08-05 17:13:34
categories:
 -  技术
---

##### JavaScript-Nodejs-08

JavaScript-Nodejs

<!--more-->

# 路由模块

## 1 什么是路由

路由（router），就是请求的接口地址，比如 `/index.html` 、 `/add.html` 、 `/addStu` 、 `/login.html` 等

## 2 为什么要拆分

完成学生管理案例之后，我们会发现app.js文件变的很大。

越大的文件越难于维护，所以我们需要将app.js文件进行拆分，让每个文件变的更小，功能更单一，这样就有利于项目的后期维护了。

原则： 让每个文件都更小，功能更单一



## 3 拆分路由一般规则

==将功能相同或相近的功能单独拆分成一个路由文件==。

比如学生管理案例

可以将 和学生表相关的操作，比如 /index.html 、/add.html 、/addStu 接口放到 student.js 中保存；

可以将和管理员表相关的操作, 比如 /login.html 、/checkUser 接口放到 login.js 中

## 4 使用路由语法

在合适的位置创建 路由 文件，它也是一个js文件。比如将登陆和注册功能拆分成一个路由，则可以创建一个 login.js ，用于处理 /login.html 、/checkUser接口；比如再创建一个student.js，用于处理 /index.html 、/add.html 、 /addStu等接口。

在login.js 中使用创建路由对象，将路由挂载到路由对象上

```js
// 1. 加载express
const express = require('express');
// 2. 创建路由对象
const router = express.Router();

// 3. 将接口挂载到路由对象上
router.post('/checkLogin', (req, res) => {
    ....
});

router.get('/login.html', (req, res) => {
    ....
});


// 4. 导出路由模块
module.exports = router;
```

然后在app.js 中加载路由，然后将其注册成中间件即可：

```js
// 5. 加载路由模块，并注册成中间件
const router = require(__dirname + '/login.js');
app.use(router);
```

> 拆分路由后，需要从新整理代码，解决错误。策略是路由文件中使用了什么第三方模块，就需要加载第三方模块，否则报错。

> 按照上述拆分模块的原则，可以将添加留言和获取留言列表的路由也单独保存。

# npm相关

## 1.1 已经学过的

npm（node package manager）是node包管理器，我们之前学习过安装卸载包，**首次==本地==**安装，需要先初始化。

初始化：

```shell
npm init -y
npm init --yes
npm init
```

全局安装：

全局安装的一般都是命令，全局安装之后，在任何文件夹都可以使用这个命令。

全局安装的东西，不能通过require加载。

```shell
# 安装命令
npm i 包名 -g
npm install 包名 -g
# 卸载命令
npm un 包名 -g
npm uninstall 包名 -g
```

本地安装：

```shell
# 安装命令
npm i 包名
npm install 包名
# 卸载命令
npm un 包名
npm uninstall 包名
```

## 1.2 关于安装第三方包的补充

- 安装第三方包

  ```bash
  # 老版本的node安装，后面加 --save,是为了把安装的第三方模块在package.json中做记录，新版不用
  npm install 包名 --save
  # 正常的安装
  npm install 包名
  # 一次安装多个包，名字之间用空格隔开
  npm install 包名1 包名2 包名3
  npm i express mysql art-template
  # 指定包的版本进行安装
  npm install 包名@版本号
  # 简写
  npm i 包名
  ```

- 从缓存目录安装包

  ```bash
  # 查看缓存目录
  npm config get cache
  # 从缓存目录下载包
  # --cache-min 后面跟的是时间，单位是分钟，超过这个时间才去服务器下载
  npm install 包名 --cache-min 9999999
  ```

- 查看全局安装目录

  ```bash
  # 查看全局安装时的安装目录
  npm root -g
  ```

  

## 1.3 切换 npm 镜像源

- npm 存储包文件的服务器在国外，速度很慢，所以我们需要解决这个问题。

- 国内淘宝的开发团队把 npm 在国内做了一个备份，网址是：http://npm.taobao.org/。

  ```bash
  # 查看当前的源
  npm config ls
  # 在上面命令的结果有，有下面一行，该行记录的网站就是我们安装第三方模块的网站
  # registry = "https://registry.npmjs.org/"
  
  # 下载包的时候切换源
  npm install express --registry=https://registry.npm.taobao.org
  # 全局设置
  npm config set registry https://registry.npm.taobao.org
  # 原始的路径
  # https://registry.npmjs.org/
  # nrm 是管理镜像源的模块，通过nrm来管理镜像源
  npm i nrm # 自行查询如何使用 
  ```

## 1.4 package.json

在初始化之后，会生成一个package.json文件

- 创建 `package.json`

  ```bash
  npm init 
  npm init -y
  ```

- main

  main 字段指定了加载的入口文件

- dependencies  依赖(复数)

  - 指定了当前项目所依赖（需要）的包
  - 软件的版本号 jQuery@3.3.1
    1. 大版本.次要版本.小版本
    2. **小版本**：当项目在进行了局部修改或 bug 修正时，修正版本号加 1
    3. **次要版本**：当项目在原有的基础上增加了部分功能时，主版本号不变，子版本号加 1
    4. **大版本**：当项目在进行了重大修改或局部修正累积较多，而导致项目整体发生全局变化时，主版本号加 1

  ```json
  "dependencies": {
      "art-template": "^4.14.2",
      "body-parser": "^1.18.3",
      "express": "^4.16.4",
      "express-art-template": "^1.0.1"
   }
  ```

  - `dependencies` 字段指定了项目运行所依赖的模块
  - **使用 `npm install` 可以安装所有的依赖**
  - 该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。
    - **指定版本**：比如`1.2.2`，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
    - **波浪号（tilde）+指定版本**：比如`~1.2.2`，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
    - **插入号（caret）+指定版本**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x

- scripts

  `scripts`指定了运行脚本命令的 npm **命令行**缩写，比如start指定了运行`npm run start`时，所要执行的命令。

  ```bash
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node app.js",
      "t": "dir c:\\"
   }
  ```

  运行 `scripts`

  ```bash
  npm run t
  npm run start
  # 只有 start 可以简化调用
  npm start
  
  ```

依赖的作用：

- 记录项目必须的包
- 发送给别人的时候，不需要发送比较大的 `node_modules` 文件夹。只需要发送给你 `package.json` 即可，你只需要执行 `npm install` 即可安装所有的包

## 1.5 一个神秘的文件夹 node_modules

- 我们下载第三方包的时候，会自动把下载的第三方包，放到 `node_modules` 中。使用第三方包的时候直接 `require('第三方包的名字')`。

- 我们自己写的包也可以放到此文件夹，**加载的时候直接写包名**即可。

- `require`  的加载顺序

  - 打印 module 对象

  - 包加载的过程，按照 `module.paths` 中的路径一级一级往上查找

    

  - 第一次 `require()` 加载完毕，会把 模块/包 **缓存**起来，再次 `require()` 的时候直接从缓存加载

## 1.6 require 的加载机制

- `require` 优先加载**缓存**中的模块
- 如果缓存中没有模块，优先加载**核心模块（node自带的模块）**，并缓存
- 如果有**相对路径**，则根据路径加载**文件模块**，并缓存
  - `require('./main')`  省略扩展名的情况
  - 先加载 `main.js`，如果没有再加载 `main.json`，如果没有再加载 `main.node`(c/c++编写的模块)
- 如果不是文件模块，也不是核心模块，则加载**第三方模块**
- node 会去 node_modules 目录中找（找跟你引用的名称一样的目录），例如这里 `require('moment')`
- 如果在 node_modules 目录中找到 `moment` 目录，则加载该模块并缓存
- 如果过程都找不到，node 则取上一级目录下找 `node_modules` 目录，规则同上
- 如果一直找到代码文件的根路径还找不到，则报错



# 2. ES6降级处理

因为 ES 6 有浏览器兼容性问题，可以使用一些工具进行降级处理，例如：**babel**

- 降级处理 babel 的使用步骤

  1. 安装 Node.js
  2. 命令行中安装 babel
  3. 配置文件 `.babelrc`
  4. 运行

- 项目初始化(项目文件夹不能有中文)

  ```bash
  npm init -y
  ```

- 在命令行中，安装 babel [babel官网](https://babeljs.io)

  ```bash
  npm install  @babel/core @babel/cli @babel/preset-env
  ```

- 配置文件 `.babelrc` (手工创建这个文件)

  babel 的降级处理配置

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

- 在命令行中，运行

  ```bash
  # 把转换的结果输出到指定的文件
  npx babel index.js -o test.js
  # 把转换的结果输出到指定的目录
  npx babel 包含有js的原目录 -d 转换后的新目录
  ```

# 3. Ajax跨域请求

## 3.1 同源政策

1995年，同源政策由 Netscape（网景） 公司引入浏览器。目前，所有浏览器都实行这个政策。

最初，它的含义是指，A 网站设置的 Cookie，B 网站不能打开，除非这两个网页同源。所谓同源指的是三个相同。

- 协议相同（http https）
- 域名相同
- 端口相同（http默认80端口，https默认443端口）

随着互联网的发展，同源政策越来越严格。目前，如果非同源，共有三种行为受到限制。

- Cookie无法读取。
- DOM 无法获得。
- AJAX 请求无效（可以发送，但浏览器会拒绝接受响应）。

## 3.2 什么是跨域请求

其实，了解了什么是同源政策，就知道什么是跨域请求了。

在发送Ajax请求的时候，请求的地址只要违反了同源政策，那么就属于跨域请求。

## 3.3 实现跨域请求的方案--JSONP

### 1）JSONP简介

**JSON** with **P**adding，是一种借助于 `script` 标签发送跨域请求的技巧。

其原理就是在客户端借助 `script` 标签请求服务端的一个地址，服务端的这个地址返回一段带有调用某个全局函数调用的 JavaScript 脚本（而非一段 HTML），将原本需要返回给客户端的数据通过参数传递给这个函数，函数中就可以得到原本服务端想要返回的数据。

以后绝大多数情况都是采用 JSONP 的手段完成不同源地址之间的跨域请求

### 2）使用JSONP实现跨域请求

1. 首先得创建两个服务器，一个服务器（:3000)向另外一个服务器(:4000)发送请求

2. 在3000里面写一个HTML页面jsonp2.html

3. 在3000里面，3000.js中，返回jsonp2.html

   ```js
   app.get('/j2', (req, res) => {
       res.sendFile(__dirname + '/jsonp2.html');
   })
   ```

   重启服务器，此时，访问127.0.0.1:3000/j2就可以看到页面

4. 在3000中的 jsonp2.html 中，通过script的src属性，请求4000网站中的一个接口

   ```html
   <script src="http://127.0.0.1:4000/jsonp2"></script>
   ```

5. 到4000中，写接口 jsonp2，完成响应

   ```js
   app.get('/jsonp2', (req, res) => {
       // 返回的内容，只要符合JS的语法即可
       res.end('var aa = "hello";');
   })
   ```

   写好之后，4000要重启服务器

6. 在3000中的jsonp2.html中就可以使用4000网站返回的aa变量了

   ```html
   <script src="http://127.0.0.1:4000/jsonp2"></script>
   
   <script>
       // 输出4000网站返回的内容
       console.log(aa);
   </script>
   ```

### 3）实现跨域传输数据

前面实现了跨域请求，4000网站返回一个字符串，3000网站接收到之后，就会执行这个字符串，所以会得到变量aa。

如果4000网站返回一个调用函数的字符串，那么3000网站接收到之后，也会执行一个函数。然后给函数传递一个参数，这个参数就是要传输的数据。

1. 4000网站，返回一个调用函数的字符串

   ```js
   app.get('/jsonp2', (req, res) => {
       // 返回的内容，只要符合JS的语法即可
       // res.end('var aa = "hello";');
       // 要把一个JS数组返回给3000网站
       // res.end('abc();');
       // 告诉3000网站调用abc函数，并且传递给abc函数数据
       res.end('abc(["apple", "banana"]);');
       
   })
   ```

2. 3000网站，要提前准备好一个叫做abc的函数，用于接收4000返回的数据

   ```html
   <script>
       // 输出4000网站返回的内容
       // console.log(aa);
   
       // 为了配合4000网站的要求，所以要定义一个abc函数
       function abc(x) {
           console.log(x);
       }
   </script>
   
   <script src="http://127.0.0.1:4000/jsonp2"></script>
   ```

   这样就可以实现跨域请求了。并且也实现了数据的传输。

   问题是两个网站的函数名字如何统一？大家有一个约定，请求的时候，要把你的函数名传递给4000网站，并且参数名必须是callback。

3. 3000网站中，将函数名以参数的形式，传递过去

   ```html
   <script>
       // 输出4000网站返回的内容
       // console.log(aa);
   
       // 为了配合4000网站的要求，所以要定义一个abc函数
       function abc(x) {
           console.log(x);
       }
   </script>
   
   <script src="http://127.0.0.1:4000/jsonp2?callback=abc"></script>
   ```

4. 4000网站中，获取地址栏的callback参数，值就是函数的名字

   ```js
   app.get('/jsonp2', (req, res) => {
       // 返回的内容，只要符合JS的语法即可
       // res.end('var aa = "hello";');
       // 要把一个JS数组返回给3000网站
       // res.end('abc();');
       // res.end('abc(["apple", "banana"]);');
       // 获取url中的参数callback，参数的值就是函数的名字
       // 下面一行是url模块的老版本用法
       // console.log(url.parse(req.url));
       // 下面一行是url模块的新版用法，要求传递一个完整的url，所以瞎写了一个域名，目的就是为了补全url
       // console.log(new URL(req.url, 'http://www.xx.com').searchParams.get('callback')); // abc
       let fn = new URL(req.url, 'http://www.xx.com').searchParams.get('callback'); // abc
       res.end(fn + '(["apple", "banana"])');
   })
   ```

   

### 4）jQuery封装的ajax方法跨域请求

1. 在3000网站中，jsonp2.html 中引入一个jQuery文件，为了方便（引入自己的jQuery，自己就得写处理静态资源文件的代码），引入的是百度提供的jquery

2. 使用jQuery提供的ajax方法，实现跨域访问

   ```html
   <!-- 使用jQuery提供的ajax方法，实现跨域请求 -->
   <!-- 下面引入百度提供的jQuery，需要联网 -->
   <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
   
   <script>
       $.ajax({
           type: 'GET',
           // data: {}, // 发送给4000网站的数据
           url: 'http://127.0.0.1:4000/jsonp3?callback=?', // ? 可以理解为下面的success方法。
           success: function (result) {
               // result就是4000服务器返回的数据
               console.log(result);
           },
           dataType: 'jsonp' // 必须要指定dataType为jsonp
       });
   </script>
   ```

   

3. 被请求的4000网站中，设置一个 jsonp3 接口，接口的内容和 jsonp2 接口一样。也是获取地址栏的callback参数，并返回调用这个函数的字符串

   ```js
   app.get('/jsonp3', (req, res) => {
       // 获取地址栏的callback参数，值是3000中的一个函数名
       let fn = new URL(req.url, 'http://www.xx.com').searchParams.get('callback');
       // 返回一个调用函数的字符串
       res.end(fn + '(["red", "yellow"])');
   })
   ```

   

## 3.4 实现跨域请求的方案--CORS

通过在**==被==请求的路由中**设置header头，可以实现跨域。不过这种方式只有最新的浏览器（IE10）才支持。

Cross Origin Resource Share，跨域资源共享

```javascript
app.get('/time', (req, res) => {
  // // 允许任意源访问，不安全
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // 允许指定源访问
  res.setHeader('Access-Control-Allow-Origin', 'http://www.xxx.com')
  res.send(Date.now().toString())
})
```

这种方案无需客户端作出任何变化（客户端不用改代码），只是在被请求的服务端响应的时候添加一个 `Access-Control-Allow-Origin` 的响应头，表示这个资源是否允许指定域请求。

