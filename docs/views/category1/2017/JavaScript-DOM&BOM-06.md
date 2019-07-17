---
title: JavaScript-DOM&BOM-06
date: 2017-06-27 17:13:34
categories:
 -  技术
---

##### JavaScript-DOM&BOM-06

JavaScript-DOM&BOM

<!--more-->

# JavaScript

## H5中操作JSAPI 【扩展】

> - 文件读取
>
> ```
>    	 1.  首先需要一个上传控件用来获取上传的文件
>        2.  点击上传按钮的时候通过onchange
>        3.  通过files获取上传文件    
>        4.  创建读取器  new FileReader();
>        5.  读取器中的方法，属性及事件
> 
> 方法：  readAsText(file)            读取成文本形式
>  readAsDataURL(file)         读取成文件路径形式
> 属性：  reader.result                获取读取结果
> 
> 事件：  onload                       当读取操作完成后
> 备注：获取读取结果的时候，一定要在读取操作结束后执行（在onload事件中完成）
> 
> 练习：
>    1. 完成读取图片显示到页面标签中
>    2. 完成读取文件实现换肤效果
> ```
>
> - 地理定位
>
> ```
>    1. 获取当前地理位置信息(一次)
> 
> window.navigator.geolocation.getCurrentPosition(success,error)
> 
> success ：当能够获取地理位置信息的回调函数
> error：当不能获取地理位置信息的回调函数
> 
> 地理位置信息：
> 
> position.coords.latitude   纬度
> 
> position.coords.longitude  经度
> 
>    2. 实时获取当前地理位置信息（实时获取）
> 
> window.navigator.geolocation.watchPosition(success,error);
> 
> 
> 百度秘钥： DGr4upIYwrKhhf73RkQHMvhV2OW1NBXh   | rFwb7Ow6y08zThgDXpGoovvtNIKkQIQO
> 
> 应用：百度地图应用（http://lbsyun.baidu.com/）
> ```
>
> - 多媒体
>
> ```
> http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
> 
> canplay     事件
> 
> paused      播放状态
> 
> duration    获取总时长（秒）
> 
> currentTime 当前播放时间（秒）
> 
> play()      播放
> 
> pause()     暂停
> 
> 注意： 存在一定的兼容信息
> video.webkitRequestFullScreen() 全屏
> video.webkitExitFullScreen();  退出全屏
> 
> 案例： 自定义视频播放器
> ```
>
> - 本地存储
>
> ```
> 1. sessionStorage（保存数据）
> 
> 特点：
>               1. 数据只能在同一个页面中数据，不能跨页面访问
> 
>               2. 页面关闭后数据随之销毁
> 
>               3. 不属于持久性本地存储
> 
>               4. 大小为5M
> 
> 使用：
> 
> 设置值：
> window.sessionStorage.setItem(k,value);
> 
> 获取值：
> window.sessionStorage.getItem(k);
> 
> 删除值：
> window.sessionStorage.removeItem(k);
> 
> 清空：
> window.sessionStorage.clear();
> 
> 2.localStorage(保存数据)
> 
> 特点：
> 
>               1. 数据可以实现不同页面之间的相互访问
> 
>               2. 数据需要手动删除，属于持久化存储
> 
>               3. 大小为约20M
> 
> 使用：
> 
> 设置：
> 
> localStorage.setItem(k,value);
> 
> 获取：
> localStorage.getItem(k);
> 
> 移除：
> localStorage.removeItem(k);
> 
> 清空：
> localStorage.clear();
> 
> ```

