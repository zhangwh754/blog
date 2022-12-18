---
title: 通过SCSS变量修改ElementUI样式
createTime: 2022/12/18 07:39:18
author: djdg626
permalink: /article/z59zfjo6/
---
### 全局引入

#### 修改样式

查阅文件，可以修改其中的变量

```
node_modules/element-ui/packages/theme-chalk/src/common/var.scss
```

新建element-variables.scss文件，前两行为固定必须添加，再添加var.scss如下的两个button样式，可以覆盖默认的样式

```
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import '~element-ui/packages/theme-chalk/src/index';

$--button-font-size: 64px;
$--button-default-font-color: red;
```

在plugin/element.js引入element-variables.scss文件

```javascript
//plugin/element.js
import '@/plugin/element-variables.scss'
```

效果如图
![image-20220721111853982.png](https://cdn.nlark.com/yuque/0/2022/png/21620018/1658380931058-8c8862c5-1305-47c7-b5c0-f404fb35cda4.png#clientId=u40114a02-77fc-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u1c8c5913&margin=%5Bobject%20Object%5D&name=image-20220721111853982.png&originHeight=360&originWidth=625&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17542&status=done&style=none&taskId=u8a525293-e202-4264-8617-e5d5b5ba741&title=)
### 按需引入

注释掉babel.config.js文件中的plugins的值

```javascript
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // [
    //   "component",
    //   {
    //     libraryName: "element-ui",
    //     styleLibraryName: "theme-chalk",
    //   },
    // ],
  ],
}
```

将plugin/element.js引入组件改为

```javascript
//import { Button } from 'element-ui'

import Button from 'element-ui/lib/button'
```

新建element-variables.scss文件，第一行为固定必须添加，第二行开始为要引入的组件的css

```
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import './components/button-variables.scss';  //放修改的组件变量
@import '~element-ui/packages/theme-chalk/src/button';
@import './components/button';  //放修改的scss语句
```

推荐新建components文件夹，里面放要各个覆盖的组件的scss文件

```
//plugin/components/button.scss
.el-button--primary {
  border-color: red
}
```

```
//plugin/components/button-variables.scss
$--button-font-size: 64px;
$--button-primary-background-color: blue;
$--button-primary-font-color: #fff;
```

效果如图
![image-20220721131729570.png](https://cdn.nlark.com/yuque/0/2022/png/21620018/1658380937188-8a670fa9-c0ba-4010-8bb1-167305381b18.png#clientId=u40114a02-77fc-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=uec9f2a82&margin=%5Bobject%20Object%5D&name=image-20220721131729570.png&originHeight=106&originWidth=276&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4084&status=done&style=none&taskId=ue2c2face-ac3a-4a6c-b4bf-a12e189b93d&title=)
