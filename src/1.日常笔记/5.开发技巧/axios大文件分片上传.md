---
title: axios大文件分片上传
createTime: 2022/12/18 07:36:11
author: djdg626
permalink: /article/xf8f74vx/
---
## 思路
1. 获取上传的input Dom元素
2. 获取上传的文件，拿到名字和文件大小
3. 设置每个分片大小
4. 循环上传，用slice截取文件
5. 每个分片用formData包起来调用上传接口
6. 可以用已上传大小比对总大小计算上传进度
```javascript
<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
const percent = ref(0)
const change = async (e: Event): Promise<void> => {
  const target = e.target as HTMLInputElement
  if (target.files) {
    const file = target.files[0]
    const { name, size } = file
    let index = 0,
      start = 0,
      chunkSize = 10 * 1024 * 1024 // 以10m分割
    while (start < size) {
      let blob = null
      blob = file.slice(start, Math.min(start + chunkSize, size))
      const formData = new FormData()
      const blobFile = new File([blob], `${name}${index}`)
      formData.append('file', blobFile)
      formData.append('index', index++ + '')
      await axios.post('/api/upload', formData) // 避免上传太快，等待每次上传成功再上传下一个
      percent.value = (start / size) * 100
    }
    // 上传完毕通知后端合并文件，可以对文件名进行md5加密
    await axios.get('/api/upload/merge?name=' + name)
    percent.value = 100
  }
}
</script>
```
