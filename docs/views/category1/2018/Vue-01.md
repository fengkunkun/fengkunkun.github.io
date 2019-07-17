---
title: Vue-01
date: 2018-01-15 17:13:34
categories:
 -  技术
---

##### Vue-01

Vue

<!--more-->

## 基础-vue 是什么之前端现状

> **`目标`**: 了解Vue是什么 
>
> - Vue是一个优秀的**前端框架**
> - 开发者按照Vue的**规范**进行开发
>
> 

## 基础-为什么学vue

> **`目标:`**坚定学习Vue的信心
>
> - 目前前端**`必备`**技能
> - 传统方式已经不能适应目前越来越**`复杂`**的开发需求
> - 前端发展**`日新月异`**



## 基础-vue 能做什么

> **`目标`**了解Vue能做什么
>
> 1. 和DOM**解耦**
> 2. 适应当前**SPA**的项目开发 Single Page Application
> 3. 传统网站开发 落伍
> 4. 当下各种新框架都采用了类Vue或者类React的语法去作为主语法, 微信小程序/MpVue/uni-app  
>
> **`结论`**掌握Vue的开发语法 相当于掌握了新的开发模式,可以适应目前绝大多数的技术环境

## 基础-vue 特点

> **`目标`**了解Vue的特点  结合PPT
>
> 1. 数据驱动视图 数据决定了视图的变化
> 2. MVVM 双向绑定  解除dom的耦合度
> 3. 通过**`指令`**增强了html功能
> 4. 组件化  复用代码
> 5. 开发者一般只需要关注数据

## 基础-一些链接

> **`目标`** 知道如何查阅文档
>
> [Vue官方文档](https://cn.vuejs.org/)
>
> [Vue开源项目汇总](https://github.com/opendigg/awesome-github-vue)
>
> [Vue.js中文社区](https://www.vue-js.com/)
>
> - 所有关于Vue的问题都可以通过**查阅文档**解决
>
> **`任务`** 学会Vue官网官方文档 查阅资料



## 基础-vue 三种安装方式

> **`目标`**: 了解采用几种方式安装vue
>
> 1. 采用本地文件引入的方式
> 2. 采用 在线cdn引入的方式
>
> - cdn相当于把一个文件放在了全国各地,然后你离哪里近,就从哪里调拨给你
>
> 1. 采用 你npm 安装的方式 
> 2. 现状: 都会采用npm的方式来进行正式项目开发
>
> **`任务`**: 
>
> 1. 下载一个vue.js
> 2. 新建一个html页面
> 3. 在页面中引入vue.js
>
> **`路径`**



## 基础-HelloWorld

> **`目标`** 掌握如何在页面中实例化 一个Vue对象	
>
> **`步骤`**:
>
> ```html
> 1. body中,设置Vue管理的视图<div id="app"></div>
> 2. 引入vue.js
> 3. 实例化Vue对象 new Vue();
> 4. 设置Vue实例的选项:如el、data...     
> 	new Vue({选项:值});
> 5. 在<div id='app'></div>中通过{{ }}使用data中的数据
> ```
>
> **`任务`**:  
>
> 1. 在一个html页面中实现 将hello world显示在页面上
>
> 

## 基础-实例选项-el

> **`目标`**:了解 Vue实例中el选项的含义
>
> - 作用:当前Vue实例所管理的html视图  一个vue实例只能对应一个视图
> - 值:通常是id选择器(或者是一个 HTMLElement 实例)
> - 不要让el所管理的视图是html或者body!
>
> **`任务`**
>
> 1. 尝试用 id选择器 设置el 页面显示hello world
> 2. 尝试用class选择器 设置el 页面显示hello world
> 3. 尝试 用 dom对象 设置el 页面显示hello  world
> 4. 尝试设置 html 或者body为el 查看效果
>
> **`路径`**
>
> ```js
> new Vue({
> // el: '#app' ,  id选择器
> // el: '.app',   class选择器
> el: document.getElementById("#app") // dom对象
> })
> ```
>
> 

## 基础-实例选项-data

> **`目标`**: 掌握响应式数据的操作方式 和更新方法
>
> - Vue 实例的数据对象，是响应式数据(数据驱动视图)
> - 可以通过 `vm.$data` 访问原始数据对象
> - Vue 实例也代理了 data 对象上所有的属性，因此访问 `vm.a` 等价于访问 `vm.$data.a`
> - 视图中绑定的数据必须**`显式`**的初始化到 data 中
> - 数据对象的更新方式 直接 采用 **实例.属性 = 值**
>
> **`任务`**
>
> 1. 将数据对象中count初始值设置为 1, showMessage为false, list为 数组[1,2,3]
> 2. 通过vm.属性的方式打印 以上三个属性
> 3. 通过 {{ 变量名 }} 的方式 将以上三个属性显示在页面上
> 4. 通过vm.属性 = 赋值的方式 改变 count 为 2 showMessage 为 true 数组为 [1,2,3,4]
>
> **`路径`**
>
> ```js
> var vm = new Vue({
> el:"#app",
> data:{
>    count: 1,  
>    showMessage: false,
>    list: [1,2,3]
> }
> })
> console.log(vm.count)
> console.log(vm.showMessage)
> console.log(vm.list)
> vm.count = 2
> vm.showMessage = true
> vm.list = [1,2,3,4]
> ```

## 基础-实例选项-methods

> **`目标`**: 掌握 实例选项methods中方法的使用及注意事项
>
> - methods是一个对象
> - 可以直接通过 VM 实例访问这些方法，或者在**指令表达式中使用**。
> - 方法中的 `this` 自动绑定为 Vue 实例。
> - methods中所有的方法 同样也被代理到了 Vue实例对象上,都可通过this访问
> - 注意，**不应该使用箭头函数来定义 method 函数** (例如 `plus: () => this.a++`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined
>
> ```js
> new Vue({
> el:"#app",
> data:{
>    name:"Hello world",
>    name2:"Hello world2"
> },
> methods:{
>    fn1:function(){
>        // 常规写法
>        console.log(this.name)
>        this.fn2() // 调用方法2
>    },
>    fn2() {
>        // es6 写法
>        console.log(this.name2)
>    }
> }
> })
> ```
>
> **`任务:`** 
>
> 1. 实例化一个Vue实例, 
> 2. 定义两个属性 name1 name2 初始值分别为  Hello world  Hello world2
> 3. 定义两个方法 fn1 fn2  两个方法中分别输出 name1 和 name2的值
>
> **注意** 可以在控制台中 分别调用 fn1 和 fn2方法 调用
>
> **`路径`**  参照代码示例

## 基础-术语解释-插值表达式(重要)

> **`目标`**: 理解和使用插值表达式

> 作用:会将绑定的数据实时的显示出来:
>
> 形式: 通过 **`{{ 插值表达式 }}`**包裹的形式 
>
> - a 
> - a > 0 
> - a = 0 
> - a == 0
> - a + b + c 
> - a + b + "123"
> - a > 0 ? "成功" : "失败"
> - 方法调用
>
> 通过任何方式修改所绑定的数据,所显示的数据都会被实时替换(响应式数据)

{{js表达式、三元运算符、方法调用等}}

**`注意`**:不能写 `var a = 10; 分支语句 循环语句`

```html
<!-- js表达式 -->
<p>{{ 1 + 2 + 3 }}</p>
<p>{{ 1 > 2 }}</p>
<!-- name为data中的数据 -->
<p>{{ name + ':消息' }}</p> 
<!-- count 为data中的数据 -->
<p>{{ count === 1 }}</p>
<!-- count 为data中的数据 -->
<p>{{ count === 1 ? "成立" : "不成立" }}</p>
```

```html
<!-- 方法调用 -->
<!-- fn为methods中的方法 -->
<p>{{ fn() }}</p>
<!-- list为data中的数据 数组类型 -->
<p>{{ list.reverse() }}</p>
```

> **`任务`**
>
> 1. 初始化一个Vue实例
> 2. 在data中定义 name: "张三"  count: 2 , list: [1,2,3]
> 3. 要求根据data中的数据用插值表达式输出 张三真棒,  3,   321
>
> **`路径`** 参照代码示例

## 基础-术语解释-指令(重要)

> **`目标:`**了解指令的基本含义 并应用一个指令
>
> - 指令 (Directives) 是带有 `v-` 前缀的特殊特性。
> - 指令特性的值预期是**单个 JavaScript 表达式**(`v-for` 是例外情况，稍后我们再讨论)。
> - 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
> - 指令位置:  起始标签
>
> 代码示例
>
> ```html
> <p v-text="'我是p标签的内容'"></p>
> ```
>
> **`任务`**: 
>
> 1. 初始化一个Vue实例
> 2. 定义一个data属性 name: 我是text内容
> 3. 使用v-text指令将data内容显示在p标签上
>
> **`路径`** 参照代码示例

## 基础-系统指令-v-text 和 v-html

> **`目标`**:掌握如何使用v-text 和 v-html
>
> > 很像innerText和innerHTML
>
> - v-text:更新标签中的内容
> - v-text和插值表达式的区别
>   - v-text  更新整个标签中的内容
>   - 插值表达式: 更新标签中局部的内容
> - v-html:更新标签中的内容/标签
> - 可以渲染内容中的HTML标签
> - 注意:尽量避免使用，容易造成危险 (XSS跨站脚本攻击)
>
> ```html
> <div id="app">
>      <!-- v-text指令的值会替换标签内容 -->
>      <p>{{str}}</p>
>      <p v-text="str"></p>
>      <p v-text="str">我是p标签中的内容</p>
>      <p v-text="strhtml">我是p标签中的内容</p>
>      <p v-html="str"></p>
>      <!-- v-html指令的值(包括标签字符串)会替换掉标签的内容 -->
>      <p v-html="strhtml">我是p标签中的内容</p>
>  </div>
>  <script src="./vue.js"></script>
>  <script>
>      new Vue({
>          el: '#app',
>          data: {
>              str: 'abc',
>              strhtml: '<span>content</span>'
>          }
>      });
>  </script>
> ```
>
> 
>
> **`任务`**
>
> 1. 初始化一个vue实例
> 2. 定义一个 数据对象 name: 张三
> 3. 分别使用v-text和插值表达式将张三显示在p标签上
> 4. 定义一个数据对象 nameHtml: 内容,使用v-html将内容显示在p标签上,并且内容为红色
>
> **`路径`** 参照代码示例

## 基础-系统指令-v-if 和 v-show

> **`目标`**:掌握条件渲染指令的两种方式
>
> - 场景:  需要根据条件决定 元素是否显示  使用以上指令
> - 使用: v-if 和 v-show 后面的表达式返回的布尔值 来决定 该元素显示隐藏
> - **注意** :   v-if 是直接决定元素 的 添加 或者删除  而 v-show 只是根据样式来决定 显示隐藏
>
> ```html
> <div id="app">
>   <!-- 如果isShow的值是true ,就显示p标签 -->
>   <p v-if="isShow">我是p标签中的内容</p>
>   <p v-show="isShow">我是p标签中的内容</p>
>   <!-- 如果标签显示与隐藏切换频繁, 就使用v-show 
>       v-show本质是通过修改标签的display值
>   -->
> </div>
> <script src="./vue.js"></script>
> <script>
>   new Vue({
>       el: '#app',
>       data: {
>           isShow: false
>       }
>   });
> </script>
> ```
>
> `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。
>
> 因此，如果需要非常频繁地切换，则使用 `v-show` 较好；
>
> 如果在运行时条件很少改变，则使用 `v-if` 较好。
>
> 如果 切换频繁 前者 开销更大  
>
> **`任务`**:
>
> 1. 定义一个Vue实例
> 2. 定义一个布尔型变量showMessage 
> 3. 分别使用v-if 和 v-show来条件渲染 P标签内容
>
> **`路径`** 参照代码示例

## 基础-系统指令-v-on绑定事件

> **`目标:`**掌握vue绑定事件的方式
>
> - 场景:  使用v-on指令给元素绑定事件
> - 使用: 绑定 v-on:事件名.修饰符="方法名"   可使用 @事件名="方法名的方式"
> - **注意** 方法名 中 可以采用$event的方式传形参  也可以直接写事件名 默认第一个参数为event事件参数
> - 修饰符(可不写)
>
> - `.once` - 只触发一次回调。
> - `.prevent` - 调用 `event.preventDefault()`。
>
> ```html
> <div id="app">
>    <!-- v-on:xx事件名='当触发xx事件时执行的语句' -->
>    <!-- 执行一段js语句:可以使用data中的属性 -->
>    <button v-on:click="count += 1">增加 1</button>
>    <!-- v-on的简写方法 -->
>    <button @click="count += 1">增加 1</button>
>    <!-- 执行一个方法 -->
>    <button @click="add">增加 1</button>
>    <!-- 执行一个方法、这种写法可以传形参 -->
>    <button @click="fn1(count)">执行fn1方法</button>
>    <!-- 执行一个方法、这种写法可以传形参,特殊的形参$event -->
>    <button @click="fn2($event)">执行fn2方法</button>
>    <hr>
>    <!-- v-on修饰符 如 once: 只执行一次 -->
>    <button @click.once="fn4">只执行一次</button>
> 
>    <p>上面的按钮被点击了 {{ count }} 次。</p>
> </div>
> <script src="./vue.js"></script>
> <script>
>    new Vue({
>        el: '#app',
>        data: {
>            count: 0,
>            items: ['a', 'b', 'c']
>        },
>        methods: {
>            add: function() {
>                this.count += 1;
>            },
>            fn1: function(count) {
>                console.log(count);
>                console.log('fn1方法被执行');
>            },
>            fn2: function(e) {
>                console.log(e);
>                console.log('fn2方法被执行');
>            },
>            fn3: function(index) {
>                console.log(index);
>                console.log('fn3方法被执行');
>            },
>            fn4: function() {
>                console.log('fn4方法被执行了');
>            }
>        }
>    });
> </script>
> ```
>
> **`任务`**: 
>
> 1. 初始化一个Vue实例, 定义data中name  为hello world
> 2. 添加一个 input  button , 
> 3. 注册input值改变事件 值改变时获取 文本框内容
> 4. 注册botton点击事件 值改变时 获取当前data对象中的name值 输出 

> **`路径`**参照代码示例

## 基础-系统指令-v-for-数组

> **`目标`**:掌握v-for循环数组的用法 
>
> - 根据一组数组或对象的选项列表进行渲染。
> - `v-for` 指令需要使用 `item in items` 或者 `item of items` 形式的特殊语法，
> - `items` 是源数据数组 /对象
>
> 当要渲染相似的标签结构时用v-for
>
> ```js
> item in items   // item为当前遍历属性数组项的值
> (item,index) in items   //item为当前遍历属性数组项的值 index为数组的索引
> 
> ```
>
> **注意** v-for写的位置 应该是重复的标签上  不是其父级元素上 需要注意
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> 
>    <head>
>        <meta charset="UTF-8">
>        <meta name="viewport" content="width=device-width, initial-scale=1.0">
>        <meta http-equiv="X-UA-Compatible" content="ie=edge">
>        <title>Document</title>
>    </head>
> 
>    <body>
>        <div id="app">
>            <!-- v-for作用:列表渲染,当遇到相似的标签结构时,就用v-for去渲染
>                v-for="数组中的元素 in data中的数组名"
>            -->
>            <!-- 数组 -->	
>            <p v-for="item in list">{{item}}</p>
>        </div>
>        <script src="./vue.js"></script>
>        <script>
>            new Vue({
>                el: '#app',
>                data: {
>                    list: ['a', 'b', 'c'],
>                },
>                methods: {
> 
>                }
>            })
>        </script>
>    </body>
> 
> </html>
> ```
>
> **`任务`**: 
>
> 1. 初始化一个Vue实例
> 2. 定义data对象中list:['北京','上海','天津']
> 3. 将list中的内容 v-for循环在li标签上显示
>
> **`路径`**参照代码示例

## 基础-系统指令-v-for-对象

> **`目标`**:掌握v-for循环对象的用法 
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> 
>    <head>
>        <meta charset="UTF-8">
>        <meta name="viewport" content="width=device-width, initial-scale=1.0">
>        <meta http-equiv="X-UA-Compatible" content="ie=edge">
>        <title>Document</title>
>    </head>
> 
>    <body>
>        <div id="app">
>            <!-- v-for作用:列表渲染,当遇到相似的标签结构时,就用v-for去渲染
>                v-for="元素 in 容器(数组和对象)"
>                v-for="对象中的属性值 in data中的对象名"
>            -->
>            <!-- 对象 -->
>            <!-- (v,k,i)in 对象
>                v:值
>                k:键
>                i:对象中每对key-value的索引 从0开始
>                注意: v,k,i是参数名,见名知意即可!
>            -->
>            <p v-for="value in per">{{value}}</p>
>            <hr>
>            <p v-for="(value,key) in per">{{value}}----{{key}}</p>
>            <hr>
>            <p v-for="(value,key,i) in per">{{value}}----{{key}}--{{i}}</p>
> 
>        </div>
>        <script src="./vue.js"></script>
>        <script>
>            new Vue({
>                el: '#app',
>                data: {
>                    per: {
>                        name: '老王',
>                        age: 38,
>                        gender: '男'
>                    }
>                },
>                methods: {
> 
>                }
>            })
>        </script>
>    </body>
> 
> </html>
> ```
>
> 
>
> 语法:
>
> ```js
> item in items  // item为当前遍历属性对象的值
> (item, key, index) in  items //item为当前遍历属性对象的值 key为当前属性名的值  index为当前索引的值
> ```
>
> **`任务`**: 
>
> 1. 初始化一个Vue实例
> 2. 定义data对象中 person: { name: '张三', sex:'男',age: 18 }
> 3. 将person中的内容 v-for循环在li标签上显示
>
> **`路径`**参照代码示例

## 基础-系统指令-v-for-key

> **`目标`**: 掌握在 v-for循环中给循环项赋值key
>
> - 场景:列表数据变动会导致 视图列表重新更新 为了 提升性能 方便更新 需要提供 一个属性 key
> - 使用: 通常是给列表数据中的唯一值 也可以用索引值
>
> ```html
> <div id="app">
> 
>    <!-- v-for 
>        key属性: 值通常是一个唯一的标识
>        key是一个可选属性
>        养成好习惯:建议在写v-for时 设置:key="唯一值"
>    -->
>    <ul>
>        <li v-for="(item,index) in list" :key="index">{{item}}---{{index}}</li>
>    </ul>
> </div>
> <script src="./vue.js"></script>
> <script>
>    new Vue({
>        el: '#app',
>        data: {
>            list: ['a', 'b', 'c']
>        },
>        methods: {
> 
>        }
>    });
> </script>
> ```
>
> **`任务`**
>
> 1. 初始化一个Vue实例
> 2. 定义data对象中list:['北京','上海','天津']
> 3. 将list中的内容 v-for循环在li标签上显示
> 4. 给每个li标签赋值key

## 当v-if和v-for相遇

> **`目标`**: 了解v-if 和v-for的层级关系及使用
>
> - v-for循环元素时,标签可使用item属性, 如果这个时候用v-if来进行操作 会产生什么效果?
>
> ```html
> <p v-if="index>1" v-for="(item,index) in list"></p>
> ```
>
> 以上代码执行: 会将数组中前两个元素忽略掉
>
> 说明一个问题: v-for 的优先级大于v-if ,所有v-if才能使用v-for的变量
>
> **`任务`**: 
>
> 1. 初始化一个Vue实例
> 2. 定义一个 list:[ 4,4,3,2,22,2,4643,443,44,34,5,3 ]
>
> 3 将大于10 的列表渲染出来 使用v-for 和v-if
>
> **`路径`**参照代码示例

## 基础-表格案例-效果演示

> **`目标`**通过分析页面需求,提取案例功能点
>
> 功能点:  
>
> 1. 添加商品
> 2. 删除商品
> 3. 搜索商品
> 4. 列表循环 
> 5. 数据不存在 显示不存在数据
> 6. 时间格式

## 基础-表格案例-列表渲染

> **`目标-任务`**-完成表格案例的列表渲染
>
> **`路径`**
>
> 1. 静态页面 准备
> 2. 实例化一个Vue
> 3. 定义表格数据
> 4. 采用v-for 循环将静态内容切换为动态内容
> 5. 采用v-if控制提示消息
>
> 具体参考代码实现

