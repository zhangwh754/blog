---
title: Mock多次调用返回不同数据
createTime: 2022/12/18 07:40:09
author: djdg626
permalink: /article/j0fl6ajr/
---
## 错误示例
这样子写多次调用/api/getUser接口，返回的数据不变
```typescript
// test.js 仅做示例: 通过GET请求返回一个对象数组，包含人名和年龄
import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'
const data = mock({
  'list|10': [
    {
      name: '@cname',
      'age|1-100': 100
    }
  ]
})

export default [
  {
    url: "/api/getUser",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data
      };
    }
  }
] as MockMethod[]

```
## 正确示例
将mock随机封装为一个函数，或者在response里面随机
```typescript
// test.js 仅做示例: 通过GET请求返回一个对象数组，包含人名和年龄
import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'

function randomData() {
  return mock({
    'list|10': [
      {
        name: '@cname',
        'age|1-100': 100
      }
    ]
  })
}

export default [
  {
    url: "/api/getUser",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: randomData()
      };
    }
  }
] as MockMethod[]

```
