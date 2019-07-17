---
title: JavaScript-DOM&BOM-05
date: 2017-06-26 17:13:34
categories:
 -  技术
---

##### JavaScript-DOM&BOM-05

JavaScript-DOM&BOM

<!--more-->

# JavaScript

## 移动端事件介绍

- ### touch事件类型

  ```js
  移动设备上无法使用鼠标，当手指按下屏幕的时候会触发 click,mousedown,mouseup事件，但是在移动设备上有专门的事件： touch
  备注：
  	在移动端touch事件需要通过事件监听的方式添加
  ```

  - #### touchstart   手指按下触发事件

  - #### touchmove  手指移动触发的事件

  - #### touchend    手指离开时候触发的事件

    ```
     备注：
         1. 在移动端touch事件速度比click事件更快
         2. 移动端推荐使用touch事件
    ```

- ### touch事件对象

  - 属性

    - ##### 事件对象.touches    [位于屏幕上手指列表]

      ```js
       ☞ touches 用来获取位于屏幕上的手指信息【手指个数】
      ```

    - ##### 事件对象.targetTouches[位于该元素上的手指列表]

      ```
       ☞ 用来获取当前点击元素时候，手指信息【手指个数,手指唯一标识ID】
      ```

    - ##### 事件对象.changedTouches[当手指离开屏幕时候的信息，在touchend事件中使用该属性获取手指列表]

      ```
       ☞ changedTouches 用来获取当手指离开屏幕时候的手指信息，一般在touchend事件中使用该属性获取手指信息
      ```

  - 手指位置

    - ##### 手指对象.clientX/Y 手指相对于视口的水平/垂直距离【参照可视区域】

    - ##### 手指对象.pageX/Y  手指相当于视口的水平/垂直距离【如果有滚动条，包括滚动条滚动后的距离】

  - ##### click延时

    ```
       1. click 比 touch 延时约300毫秒 【时间不标准】
    ```

- ### 手势封装

  - ##### 模拟点击（tap）

    ```js
     核心：（touchstart + touchend ）
     	手指按下的位置和手指离开的位置没有发生改变
        
     思路：
     	1 判断离开时候的位置 - 开始时候的位置  < 合理的范围值 
    ```

  - ##### 模拟轻滑

    ```
     核心：(touchstart + touchend)
     	手指按下 + 手指离开
     	
     思路：
     	 水平距离大于垂直距离  -- 》 水平方向移动
     	 	  1. 开始位置在结束位置左侧，向右移动
     	 	  2. 开始位置在结束位置右侧，向左移动
     	 		
     	 水平距离小于垂直距离  --》 垂直方向
     	 	  1. 开始位置在结束位置上，向下移动
     	 	  2. 开始位置在结束位置下，向上移动
    ```

- #### transitionend事件

  ```
     1. transitionend  ： 当过度动画效果完成后，要触发该事件
     2. webkitTransitionEnd[兼容写法]
  ```

- #### 移动端轮播图实现

  ```
   resize事件： 监听窗口改变时候
   
   window对象绑定该事件
  ```

  