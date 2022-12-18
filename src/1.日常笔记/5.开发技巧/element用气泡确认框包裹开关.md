---
title: element用气泡确认框包裹开关
createTime: 2022/12/18 07:34:30
author: djdg626
permalink: /article/lbzajc33/
---
## 使用
使用:value替换v-model，在el-popconfirm的confirm回调手动修改绑定的属性值
```vue
<el-popconfirm
  title="确定切换状态？"
  @confirm="updateStatus(scope.row)"
  >
  <template #reference>
    <el-switch
    :value="scope.row.status"
    :active-value="1"
    :inactive-value="0"
    />
  </template>
</el-popconfirm>
```
```vue
// 修改状态
updateStatus: async function (row) {
  // 进行网络请求
  row.status = row.status ? 1 : 0
},
```
