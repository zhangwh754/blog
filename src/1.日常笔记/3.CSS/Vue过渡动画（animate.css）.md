---
title: Vue过渡动画（animate.css）
createTime: 2022/12/18 07:38:46
author: djdg626
permalink: /article/rjdnambv/
---
## animate.css官网
## 基础使用
### 安装
```bash
npm install animate.css --save
```
### 引入
在app.vue引入
```bash
import 'animate.css';
```
### 使用
```vue
<template>
  <router-view #default="{ route, Component }">
    <transition
      name="custom-classes"
      :enter-active-class="`animate__animated ${route.meta.transition}`"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
```
### 路由中定义
```typescript
/* 声明meta的属性类型 */
declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    transition: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: ['/login'],
    component: () => import('src/views/Login.vue'),
    meta: {
      title: '登录页面',
      transition: 'animate__fadeInRight'
    },
  },
  {
    path: '/home',
    component: () => import('src/views/Home.vue'),
    meta: {
      title: '首页',
      transition: 'animate__fadeInRight'
    },
  },
]
```
## 更多
