---
title: JavaScript-Nodejs-05
date: 2017-07-27 17:13:34
categories:
 -  技术
---

##### JavaScript-Nodejs-05

JavaScript-Nodejs

<!--more-->

# 一、搭建Web服务器

## 1 留言板使用的三个接口

使用的工具还是express。

目的是完成留言板的三个接口

- GET       /message.html
  - 浏览器的目的是看到页面
  - 服务器将 message.html 页面响应给浏览器
- GET       /getMsg
  - 浏览器的目的是 获取到所有的留言数据
  - 服务器响应所有的留言数据
- POST     /addMsg
  - 浏览器的目的是，让服务器保存新的留言
  - 服务器接收新的留言数据，并保存；最后做出响应，告诉浏览器保存成功了还是失败了

## 2 搭建Web服务器

具体步骤：

1. 创建code文件夹
2. 将昨天的node_modules文件夹和package-lock.json复制到code文件夹中。
3. 将留言板的模板文件夹public和db.json复制到code中
4. 在code中，创建app.js，用于创建Web服务器

app.js中写搭建最基本的web服务器，编写三个留言板使用的接口：

```js
// 1. 加载express
const express = require('express');
// 2. 创建app对象
const app = express();
// 3. 监听端口，开启服务
app.listen(4000, () => console.log('开启服务了'));
// 4. 处理浏览器的请求


// 编写留言板使用的三个接口

// 完成 响应message.html 页面的工作
app.get('/message.html', (req, res) => {

});

// 完成 响应留言数据
app.get('/getMsg', (req, res) => {

});

// 完成 添加留言工作 
app.post('/addMsg', (req, res) => {

});
```

## 3 完成/message.html接口

```js
// 完成 响应message.html 页面的工作
// 该接口，建议使用浏览器来测试，
// 因为message.html中包含了css等资源，使用浏览器可以方便的查看到css等文件是否加载成功
// 处理 GET /message.html 接口
app.get('/message.html', (req, res) => {
    // 服务器端应该服务器message.html文件，将读取的结果响应
    // 方式一：fs.readFile(); ,但是代码量比较大
    // 方式二：使用新方法sendFile
    // __dirname  ====== E:\Study\76\Node\day06\code
    res.sendFile(__dirname + '/public/message.html');
});
```

## 4 使用中间件处理静态资源文件



自己定义中间件，处理静态资源文件：

```js
// 定义中间件，处理静态资源文件
// app.use([请求的url的开头],  函数);
app.use((req, res, next) => {
    // console.log(req.url);
    if (req.url.startsWith('/assets/')) {
        // 进入到这个区间，表示是静态资源文件。然后读取他们并做出响应
        res.sendFile(__dirname + '/public' + req.url);
    } else {
        next(); // 当前的中间件已经处理完毕了，让程序向后走
    }
});
```

小结：

- 只要有请求，就会进入到上面定义的中间件，只不过有的请求满足中间件的条件，那么就处理这次请求；有的请求不满足中间件的条件，那么就next，交给后面的程序处理。

## 5 使用另外的中间件来处理静态资源文件

中间件的使用，是要把中间件函数放到app.use()里面。

app.use() 方法还有一个可选参数，表示请求的url的开头部分。

```js
app.use(url的开头部分,  中间件函数);
```

我们可以使用这个语法，再次定义中间件，完成对静态资源的处理。

```js
// app.use([请求的url的开头],  函数);
app.use('/assets/', (req, res, next) => {
    // console.log(req.url);  // /bootstrap.css   /avatar.png
    // 进入到这个中间件，说明请求的url满足开头是 /assets/ 这个条件
    // 所以直接响应结果
    res.sendFile(__dirname + '/public/assets' + req.url);
});
```

小结：

上面的代码，意思是，如果请求的url的开头是 `/assets/` ，则会进入到这个中间件；否则不会进入这个中间件。

## 6 使用express.static方法处理静态资源文件

```js
// 使用express自带的方法，处理静态资源文件
app.use('/assets/', express.static(__dirname + '/public/assets/'));
```

## 7 完成 /getMsg 接口

浏览器要留言数据，服务器就返回留言数据即可。

```js
// 完成 响应留言数据
// 该接口建议使用postman来测试，因为postman可以看到带格式的json数据
app.get('/getMsg', (req, res) => {
    // 服务器端响应db.json中的数据
    let data = require('./db.json'); // 读取json文件之后，会自动将结果处理成JS数据
    // console.log(data); // JS数组
    // 下面将得的JS数组响应给浏览器
    // 方式一：使用JSON.stringify，将JS数组转成JSON格式，然后使用res.end响应
    // 方式二：使用res.json方法，直接响应JS数据，res.json()方法会自动将JS数组处理成JSON格式
    res.json(data);
});
```

## 8 使用自己定义的中间件处理POST类型的数据

```js
// 定义一个中间件，来接收浏览器提交的POST类型的数据
const querystring = require('querystring');
app.use((req, res, next) => {
    // 判断请求是否是POST类型的
    if (req.method === 'POST') {
        // 接收浏览器提交的数据
        let str = '';
        req.on('data', (chunk) => {
            str += chunk;
        });
        req.on('end', () => {
            // 将接收到的数据，赋值给req.body
            req.body = querystring.parse(str);
            next();
        });
    } else {
        next();
    }
});

// 完成 添加留言工作 
app.post('/addMsg', (req, res) => {
    // 接收浏览器提交的数据
    /* let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    });
    req.on('end', () => {
        // 将接收到的数据，添加到db.json中
    }); */
    console.log(req.body);
});
```

使用postman工具，来测试一下这个接口，看是否能够输出结果：



## 9 完成addMsg接口

经过前面的中间件处理，可以通过req.body来获取浏览器提交的数据，addMsg中，就可以完成添加数据。

```js
const fs = require('fs');

// 处理添加接口  POST  /addMsg
// 使用postman来测试
app.post('/addMsg', (req, res) => {
    // 接收提交的数据，并保存
    // console.log(req.body); // { name: 'cc', content: 'dd' }
    // 服务器端应该将接收到的数据放到db.json中存储
    let data = require('./db.json'); // 得到JS数组
    data.push(req.body); // 使用push方法，向data中添加新的留言
    // 把所有的留言，写入到db.json
    fs.writeFile('./db.json', JSON.stringify(data), (err) => {
        if (err) {
            res.json(false);
        } else {
            res.json(true);
        }
    })
});
```

## 10 使用body-parser来处理POST类型的数据

使用之前，要 执行 `npm install body-parser` 安装。因为我们是复制昨天的node_modules文件夹，所以不用再次下载安装了。

```js
// 定义一个中间件，来接收浏览器提交的POST类型的数据
const bodyParser = require('body-parser');
// 这里使用urlencoded方法，它能够处理的POST类型的数据，编码格式为 x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// 上面的中间件，做了一件事   req.body = 接收到数据；
```

到此为止，服务端的三个接口全部写完了。



# 二、完成前端的代码

## 1 发送Ajax请求到getMsg，并将数据显示到页面上

message.html 里面添加代码：

```html
<!-- 使用jquery完成ajax请求
  使用template-web.js完成模板的处理 -->
<script src="./assets/jquery.js"></script>
<script src="./assets/template-web.js"></script>

<script id="moban" type="text/html">
    {{each arr}}
    <li class="media">
      <img class="mr-3" src="./assets/avatar.png" />
      <div class="media-body">
        <h4>{{$value.name}}</h4>
        <p>{{$value.content}}</p>
    </div>
    </li>
    {{/each}}
</script>

<script>
    // 刷新页面，页面加载到这里，发送ajax请求到 /getMsg 接口，获取所有的留言数据
    // 使用模板引擎将数据显示到页面中
    // $.get(请求的接口地址, [发送给服务器的数据], [处理响应结果的函数], [预期服务器返回数据的类型]);
    $.get('/getMsg', function (result) {
        // console.log(result);
        // 调用template函数
        var html = template('moban', {
            arr: result
        });
        // 将html放到id为messages的ul中
        $('#messages').html(html);
    }, 'json');
</script>
```

## 2 点击提交按钮，完成添加留言

```js
// 点击按钮的时候，收集表单中的数据，发送给addMsg接口
$('#btn_send').click(function () {
    // 收集表单数据
    var name = $('#txt_name').val();
    var content = $('#txt_content').val();
    $.post('/addMsg', {name: name, content: content}, function (result) {
        // 因为指定了预期服务器返回的是json格式的数据，所以jquery会自动将json格式的数据处理成js格式
        if (result) {
            // 添加成功，将li追加到ul中
            var li = `
                <li class="media">
                    <img class="mr-3" src="./assets/avatar.png" />
                    <div class="media-body">
                        <h4>${name}</h4>
                        <p>${content}</p>
                    </div>
                </li>
                `;
            $('#messages').append(li);
            // 清空输入框的内容
            $('#txt_name').val('');
            $('#txt_content').val('');
        } else {
            alert('添加失败');
        }
    }, 'json');
});
```

# 三、express新增方法render方法

创建一个code的副本，名字叫做 render

在render文件夹中，将message.html里面的代码恢复到初始状态。

命令行工具，切换到render目录中。



使用render方法，必须下载两个第三方模块：

```bash
npm install art-template
npm install express-art-template
```

- art-template
  - 它和之前使用的template-web.js是一个产品，模板的写法都是一样的
  - 使用npm安装的 art-template 是node版本的模板引擎，需要使用node来解析
- express-art-template
  - 它是为了配合express框架，能够更方便的使用art-template，出现的一个第三方模块
  - 它的目的就是将express和art-template综合到一起，使用起来更加方便

==在Node中使用模板引擎的步骤==：

1. 加载express-art-template

2. 配置模板使用模板引擎来解析   app.engine('html',  template);

   - 加入这个配置之后，模板中的所有{{xxx}}都将有template来解析

3. 读取html的时候，直接使用render方法将数据分配到模板即可

   ```js
   app.get('/message.html', (req, res) => {
       // render方法，第一个参数依旧是模板的url
       // render方法，第二个参数可选，表示分配到模板的数据，数据必须是一个js对象
       // res.render(模板的url, {
       //     分配到模板的数据
       // });
       let data = require('./db.json');
       res.render(__dirname + '/public/message.html', {
           arr: data
       });
   });
   ```

4. 模板message.html中，在哪里输出，在哪里写 {{xxx}}，不用单独定义模板

   ```html
   <ul id="messages" class="list-unstyled">
       {{each arr}}
       <li class="media">
           <img class="mr-3" src="./assets/avatar.png" />
           <div class="media-body">
               <h4>{{$value.name}}</h4>
               <p>{{$value.content}}</p>
           </div>
       </li>
       {{/each}}
   </ul>
   ```

   

   为了明确render是如何使用的，可以创建render.js，充当服务器文件；代码如下：

   ```js
   const express = require('express');
   const template = require('express-art-template');
   
   const app = express();
   
   app.listen(4000, () => console.log('演示render和模板引擎'));
   
   // 配置后缀为html的模板，使用template来处理
   app.engine('html', template);
   
   app.get('/abc.html', (req, res) => {
       // res.sendFile(__dirname + '/public/abc.html');
       res.render(__dirname + '/public/abc.html', {
           title: 'hello world',
           age: 20,
           arr: ['apple', 'orange', 'banana', 'xigua']
       });
   });
   ```

   在public文件夹中，创建abc.html。页面中使用模板标签展示数据即可：

   ```html
   <h2>{{title}}</h2>
   
   {{if age >= 18}}
   <p>欢迎来玩</p>
   {{else}}
   <p>禁止未成年人来玩</p>
   {{/if}}
   
   <ul>
       {{each arr}}
       <li>{{$value}}</li>
       {{/each}}
   </ul>
   ```

   当浏览器请求abc.html的时候，服务器返回的HTML已经是编译好的结果了。