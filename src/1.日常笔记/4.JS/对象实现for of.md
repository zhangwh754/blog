---
title: 对象实现for of
createTime: 2022/12/18 07:35:08
author: djdg626
permalink: /article/8ymd6ifk/
---
for of使用的是迭代器，只要在对象上实现迭代器规范即可

- 实现Symbol.iterator，返回一个对象
- 返回的对象上有一个next对象
- next对象返回包含有value和done属性

当done属性为true时，for of会自动结束
```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    let i = 0
    return {
      next() {
        const keys = Object.keys(obj)
        const value = obj[keys[i++]]
        if (value) {
          return { value, done: false }
        } else {
          return { value, done: true }
        }
      }
    }
  }
}


for (let i of obj) {
  console.log(i)
}

// AAAAA
// BBBBB
// CCCCC
```
