---
title: JavaScript-Ajax-04
date: 2017-07-20 17:13:34
categories:
 -  技术
---

##### JavaScript-Ajax-04

JavaScript-Ajax

<!--more-->

# 封装Ajax

封装的目的是为了提高编程能力，锻炼逻辑思维能力。另外封装Ajax还能体会到回调函数的作用，即使用回调函数来处理异步请求的结果。

- 封装成函数之后，应该能够发送GET和POST方式的请求
- 能够请求不同的url
- 能够向服务器发送数据
- 服务器返回的结果，处理方式也是不一样的

```js
function ajax(type, url, data, fn) {
    var xhr = new XMLHttpRequest();

    // 统一转换type为大写
    type = type.toUpperCase()

    // 如果data是对象，则将其处理成字符串  {id: 123, age: 456}  ====>  id=123&age=456
    if (typeof data === 'object') {
        var arr = []; // 空数组，用于保存变量的结果
        for (var i in data) {
            // i 表示 键值，比如 id/age
            // data[i] 表示值， 比如123、456
            arr.push(i + '=' + data[i]); // i + '=' + data[i]   ==> id=123
        }
        // 循环结束，arr = ['id=123', 'age=456'];
        data = arr.join('&'); // id=123&age=456
    }

    if (type === 'GET') {
        // 重置url，让url等于原来的url+data
        url = url + '?' + data; // /query-get?id=345&age=789
        data = null;
    }
    xhr.open(type, url);

    // 定义一个保存数据的变量
    if (type === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.send(data);

    xhr.onload = function () {
        fn(this.response);
    }
}

// 调用
ajax('GET', '/query-get', {id: 222, age: 333}, function (result) {
    // result 就是服务器返回的结果
});
```



# Ajax综合案例

## 1. 用到的接口列表

#### GET /api/member-list

获取会员数据列表，返回数组

##### 参数

- page: 如果传递 page，则分页获取指定页的 6 条数据
- last: 如果传递 last，则获取指定 ID 之后的 6 条数据

#### GET /api/member-detail

获取指定 ID 对应的数据

##### 参数

- id: 需要获取的数据 ID

#### GET /api/member-delete

根据id删除数据

##### 参数

- id: 需要根据id删除

#### POST /api/member-add

添加一个新的会员信息

##### 参数

- name: 会员名称
- bio: 会员简介
- avatar: 头像文件

#### GET /api/member-list-last

获取下拉分页数据

##### 参数

- last: 最后一条数据的id，如果为null，默认获取第一页数据

## 2. 实现会员列表功能

创建一个新文件夹 members，在members里面创建public文件夹，将会员管理案例模板全部复制到项目中，即public文件夹中。不要把案例的代码和学习封装的代码放在一起。



1. 页面加载，发送Ajax请求到对应的接口`/api/member-list-last`，获取6个会员
2. 通过模板引擎将响应数据渲染到页面中

- 模板代码

```html
<script id="list" type="text/html">
    {{each arr}}
    <div class="col-lg-4 col-md-6">
        <div class="card mb-4">
          <div class="card-img-top py-4 bg-dark text-center">
            <img class="img-thumbnail mb-2 rounded-circle" src="{{$value.avatar}}" alt="heima" width="128">
            <h3 class="card-title text-light">{{$value.name}}</h3>
    </div>
          <div class="card-body">
            <p class="card-text">{{$value.bio}}</p>
            <a href="#" class="card-link">View</a>
            <a href="#" class="card-link text-danger">Delete</a>
    </div>
    </div>
    </div>
      {{/each}}
</script>
```

- ajax代码

```js
    $.get('/api/member-list-last', function (result) {
      // console.log(result); // 得到6条数据
      // 调用template函数
      var str = template('list', {
        // key: value
        arr: result
      });
      // 将组合好的结果，放到id为members的div中
      $('#members').append(str);
    });
```

> 调用 `/api/menber-list` 接口获取的是全部会员，加载的时候非常慢，所以可以使用 `/api/member-list-last`接口，该接口只获取6个会员，这样刷新页面后，只会看到最新的6个会员，加载速度比较快。

## 3. 实现查看会员详细信息



1. 点击 “View” 超链接，跳转到 `/detail.html` ，跳转时**一定要携带**该会员的id

   ```html
   <!--index.html页面中，循环模板的时候，给每个View都挂这个超链接-->
   <a href="/detail.html?id={{$value.id}}" class="card-link">View</a>
   ```

2. 点击View，会跳转到detail.html中，并且还带有id参数

   

3. 到detail.html中，获取地址栏的id值

   ```js
   var id = location.search;  // ?id=498
   ```

4. `detail.html` 中获取到会员id后，调用接口`/api/member-detail`获取该会员的信息

5. 将获取到的信息展示在页面中

```html
<!-- detail.html 页面中的模板 --->
	<script id="detail" type="text/html">
    <div class="container">
      <img class="img-thumbnail mb-2 rounded-circle" src="{{avatar}}" alt="heima" width="128">
      <h1 class="display-4">{{name}}</h1>
      <p class="lead text-muted">{{bio}}</p>
      <div>
        <a href="#" class="btn btn-primary my-2">Edit</a>
        <a href="#" class="btn btn-danger my-2">Delete</a>
      </div>
    </div>
  </script>
```

```js
//////////////////////////////////////////////
    // 会员详情页
    // 1. 先获取id值
    // console.log(location);
    // console.log(location.search);
    var id = location.search; // ?id=489
    // 2. 发送ajax请求到 /api/member-detail 接口，并传递id。可以获取到该会员的详情
    $.get('/api/member-detail' + id, function (result) {
      // console.log(result); // 得到一个对象
      var html = template('detail', result);
      $('section').html(html);
    });
```



## 4. 实现删除会员功能

1. 点击超链接不能跳转，设置href属性为javascript:;

2. 为了好找删除超链接，自己加了一个delete类

   ```html
   <a href="javascript:;" class="card-link text-danger delete">Delete</a>
   ```

3. 使用事件委托的方式来注册单击事件（给body注册单击事件，委托给 delete标签）

4. 提示是否要删除（因为删除是敏感操作，必须要提示）

5. 在delete标签上设置自定义属性 data-id ，值就是当前这个会员的id

   ```html
   <a href="javascript:;" data-id="{{$value.id}}" class="card-link text-danger delete">Delete</a>
   ```

6. 调用接口 `/api/member-delete` ，并携带id参数，完成删除

7. 删除成功后，将当前的会员移除掉即可（为了能够准确找到当前的会员，给每个会员所在的div加了一个aaa类）。



```js
///////////////////////////////////////////////////////////////
    // 删除功能
    // 点击delete超链接的时候，向 /api/member-delete 发送请求，并传递id参数。然后完成删除操作
    // 单击事件的绑定，必须使用事件委托，因为会员列表是后来添加到页面上的
    // 下面给所有的会员的父级或祖先级（body）添加单击事件，委托给delete（.delete）
    $('body').on('click', '.delete', function () {
      // 1. 先询问是否要删除
      // confirm返回值是true或false。当为false的时候，终止后续代码执行
      if (confirm('你确定要删除吗？你想好了？') === false) {
        return;
      }
      var that = $(this); // that就是点击的delete标签
      // 2. 获取当前会员的id
      var id = that.attr('data-id');
      // 3. 发送请求删除
      $.get('/api/member-delete', {id: id}, function (result) {
        if (result.message === '数据删除成功') {
          // that.parent().parent().parent().remove();
            that.parents('.aaa').remove();
        }
      });
    });
```



## 5. 实现新增会员功能

1. 点击index.html中的“New Member”超链接，跳转到add.html

   ```html
   <a href="/add.html" class="btn btn-primary my-2">New member</a>
   ```

2. 新增会员,图片预览功能。

- 图片预览

  - input:file 标签属性介绍

    - accept：限制上传文件的文件类型
      - accept=".jpg,.png,.gif"       一个一个后缀指定
      - accept="image/*"    表示允许任何的图片类型
    - multiple：多选

  - 如何实现图片预览

    - 获取文件的dom对象 `var fileObj = document.getElementById('').files[0]`;
    - 使用h5新增对象URL.createObjectURL(fileObj)，创建临时图片地址，用于预览
    - 设置预览图片的src属性为临时图片地址

    ```js
    	// 根 #input_avatar 添加 change 事件，当文件域的内容发生变化的时候，会触发
        $('#input_avatar').change(function () {
          // 完成文件预览功能
          // 1. 找到文件对象
          var fileObj = this.files[0]; // 文件对象，直接使用this，因为this是DOM对象
          // 2. 使用URL.createObjectURL方法，可以为图片临时生成一个连接，通过这个链接可以查看到图片
          var url = URL.createObjectURL(fileObj);
          // console.log(url);
          // 3. 设置预览图片的src属性为上面的链接即可
          $('.img-thumbnail').attr('src', url);
        });
    
    ```

    

- 提交 FormData

  > 注意事项：接口需要的三个参数分别为name/bio/avatar
  >
  > 表单中的input需要设置name值，否则FormData是收集不到数据的
  >
  > name值要和接口指定的参数对应。否则不能添加成功

  ```js
  ////////////////////////////////////////////////////////
      // 点击save，完成添加
      $('.btn-block').click(function () {
        // 收集表单信息
        var fd = new FormData($('form')[0]);
        // 调用接口完成添加
        $.ajax({
          url: '/api/member-add',
          type: 'POST',
          data: fd,
          success: function (result) {
            // console.log(result);
            if (result.message === '数据保存成功') {
                alert('添加成功');
              // 跳转到index.html
              location.href = '/index.html';
            }
          },
          contentType: false,  // 不让jquery添加默认的content-type, 'application/x-www-form-urlencoded'，由formData自己来处理
          processData: false // 不让jquery将对象形式的data转成字符串
        });
      });
  ```

## 6. 实现加载更多功能

1. 接口/api/member-list-last，分页加载会员

   会员较多，一次性加载耗时，可以分页加载，每页有6条数据，即6个会员。该功能通过接口 `/api/member-list-last` 可以实现。

2. 计算出，当滚动条快接近底部的时候，再次调用接口 `/api/member-list-last` ，通过改变参数，获取下一页的6个会员。

   - $(document).height()		     文档的高度

   - $(window).height()                    窗口的高度

   - $(document).scrollTop()           文档滚动出去的距离

     

3. 设置标识，当正在处理当前页数据的时候，不允许再次请求下一页的数据

**具体做法**：

1. 绑定滚动事件，找到何时加载另外的数据那个点

   ```JS
   /////////////////////////////////////////////////////
       // 懒加载
       // 当滚动条滚动的时候，计算卷曲出去的距离、浏览器的高度、文档的高度
       // 当 卷曲出去的距离 + 浏览器的高度 + 100 >= 文档的高度 ，说明滚动条快接近底部
       $(window).scroll(function () {
         var scrollTop = $(document).scrollTop();
         var winHeight = $(window).height();
         var documentHeight = $(document).height();
         if (scrollTop + winHeight + 100 >= documentHeight) {
           // 此时说明 滚动条快接近底部，此时可以去加载另外的数据了
           // 这个判断，非常有可能触发多次
           console.log(124124);
         }
       });
   ```

2. 封装获取6条数据的代码为loadData函数，函数内部在处理数据的时候，重置lastId为当前数据中的最后一个id

   ```js
   	var lastId = null;
   
       // 封装一个函数，实现加载6条数据
       function loadData() {
         $.get('/api/member-list-last', { last: lastId }, function (result) {
           console.log(result); // 得到6条数据
           // 重置lastId为当前这组中的最后一个id，以便下次loadData调用时使用
           lastId = result[result.length - 1].id;
           // 调用template函数
           var html = template('list', {
             // key: value
             arr: result
           });
           // 将组合好的结果，放到id为members的div中
           $('#members').append(html);
           // 此时，当前这6条数据处理完毕，此时允许去加载另外的数据了
         });
       }
       // 页面刷新，首先调用一次loadData
       loadData();
   ```

3. 当滚动条快接近底部的时候，去调用loadData即可

4. 加入flag，控制何时允许去加载6条数据

   ```js
   var flag = true; // 全局变量，控制此时是否可以去加载更多数据了。默认true表示允许加载
   
   // 在loadData函数中，改变flag的值
   function loadData() {
         flag = false; // 此时正在发送请求，处理数据，不允许在这个时候去加载另外的数据
         $.get('/api/member-list-last', { last: lastId }, function (result) {
           console.log(result); // 得到6条数据
           // 重置lastId为当前这组中的最后一个id，以便下次loadData调用时使用
           lastId = result[result.length - 1].id;
           // 调用template函数
           var html = template('list', {
             // key: value
             arr: result
           });
           // 将组合好的结果，放到id为members的div中
           $('#members').append(html);
           // 此时，当前这6条数据处理完毕，此时允许去加载另外的数据了
           flag = true;
         });
       }
   
   
   
   //////////////////////////////////////////////////////////////////////////////
   	// 滚动条滚动时，加入flag判断
   	$(window).scroll(function () {
         var scrollTop = $(document).scrollTop();
         var winHeight = $(window).height();
         var documentHeight = $(document).height();
         if (scrollTop + winHeight + 100 >= documentHeight && flag) {
           // 此时说明 滚动条快接近底部，此时可以去加载另外的数据了
           // 这个判断，非常有可能触发多次
           // console.log(124124);
           // setTimeout(function () {
           //   loadData();
           // }, 300);
           // if (flag) {
           //   loadData();
           // }
           loadData();
         }
       });
   ```

   