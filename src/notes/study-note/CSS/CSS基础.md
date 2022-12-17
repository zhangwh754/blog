---
title: CSS基础
createTime: 2022/12/14 11:22:40
tags: 
  - CSS
author: djdg626
permalink: /note/study-note/kpipz3z4/
---
### 浮动

#### 行内块元素的缺陷

布局时可以把多个块元素转换成行内块元素，但是行内块元素默认两两之间存在间隙，难以控制，浮动布局就是解决这个问题的。

#### 浮动概念

浮动可以让一个元素移动，直到左边缘或右边缘或另一个浮动元素的边框

#### 浮动的特性

- 浮动元素会脱离标准流
- 同一行的浮动的元素以顶部对齐
- 浮动的元素会具有类似行内块元素的特性
  1. 块元素添加浮动，如果没有设置宽度，宽度会根据内容的宽度
  2. 行内元素添加浮动后，可以设置宽度或高度





### 定位

#### 相对定位

- 不脱标
- 相当于自身位置进行移动
- 移动后可能会和别的元素重叠

#### 绝对定位

- 会脱标
- 相当于最近的非static定位的父元素进行移动
- 移动后可能会和别的元素重叠

#### 固定定位

- 相当于一种特殊的绝对定位
- 相对于浏览器进行定位

#### 粘性定位

- 相当于相对定位和固定定位的混合
- 必须至少添加一个top、bottom、left、right
- 到达特定位置后自动变为固定布局

#### 绝对定位进行水平/垂直居中

- 宽高已知，设置外边距为负，值为宽高的一半即可
- 宽高位置，使用transform: translate(-50%, -50%)代替即可

```css
#box {
  position: absolute;
  left: 50%;
  top: 50%;
  /* margin-left: -50px;
  margin-top: -50px; */
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #bfc;
}
```

#### 固定定位相当于版心右侧

用于如右侧的回到顶部按钮，希望不是相对于页面，而是相对于内容区域

```css
#box {
  width: 800px;
  margin: 0 auto;
  height: 1200px;
  background-color: #bfc;
}

#box2 {
  position: fixed;
  left: 50%;
  margin-left: 400px;
  top: 200px;
  width: 100px;
  height: 100px;
  background-color: red;
}
```

#### 定位的特点

类似于浮动

1. 行内元素被添加绝对或固定定位后，可以设置宽度和高度
2. 块元素被添加绝对或固定定位后，如果不设置宽度，默认宽度会变成内容的宽度