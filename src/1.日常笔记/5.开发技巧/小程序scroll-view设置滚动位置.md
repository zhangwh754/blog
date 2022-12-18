---
title: 小程序scroll-view设置滚动位置
createTime: 2022/12/18 07:34:53
author: djdg626
permalink: /article/fsg3tcjt/
---
小程序可以通过直接设置scrollTop属性，设置scroll-view当前的滚动位置
```javascript
data: {
  // 滚动条距离顶部的距离
  scrollTop: 0
}
```
```javascript
<!-- 右侧的滚动视图区域 -->
<scroll-view
  class="right-scroll-view"
  scroll-y
  :style="{height: wh + 'px'}"
  :scroll-top="scrollTop"
>
</scroll-view>
```
scrollTop必须有改动，可以直接重置滚动的高度，也可以直接设置需要跳转的滚动高度
```javascript
// 选中项改变的事件处理函数
change(i) {
  // 让 scrollTop 的值在 0 与 1 之间切换
  this.scrollTop = this.scrollTop === 0 ? 1 : 0

  // 可以简化为如下的代码：
  // this.scrollTop = this.scrollTop ? 0 : 1
}
```
