---
title: JSON按某个key来合并
createTime: 2022/12/18 07:34:39
author: djdg626
permalink: /article/lvazb44n/
---
```javascript
const arr = [
  { code: '2007', a: 4, key: 1 },
  { code: '2007', b: 8, key: 2 },
  { code: '2008', a: 6, key: 3 },
  { code: '2008', b: 6, key: 4 },
  { code: '2008', b: 13, key: 5 }
]

const fn = () => {
  const codes = [...new Set(arr.map(item => item.code))]
  const res = codes.map(code =>
    arr.filter(item => item.code === code).reduce((pre, cur) => Object.assign(pre, cur), {})
  )
  console.log(res)
}

fn()

/**
 * [
 *   { code: '2007', a: 4, key: 2, b: 8 },
 *   { code: '2008', a: 6, key: 5, b: 13 }
 * ]
 */
```
