---
title: 微信小程序代码片段
createTime: 2022/12/17 16:35:00
tags: 
  - 开发
author: djdg626
permalink: /note/study-note/7u96vo5t/
---

### 代码

#### 获取顶部导航栏胶囊信息

```js
export const getNavCapsuleInfo = () => {
  //获取当前设备信息
  const systemInfo = wx.getSystemInfoSync()
  // 胶囊按钮位置信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
  // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
  const navCapsuleInfo = {
    navBarHeight: systemInfo.statusBarHeight + 44, // 导航栏高度 = 状态栏高度 + 44
    menuRight: systemInfo.screenWidth - menuButtonInfo.right, // 胶囊距右方间距（方保持左、右间距一致）
    menuTop: menuButtonInfo.top, // 胶囊距顶部间距
    menuHeight: menuButtonInfo.height // 胶囊高度（自定义内容可与胶囊高度保证一致）
  }
  return navCapsuleInfo
}
```

#### 获取底部安全区域信息

```js
export const getSafeArea = () => {
  //获取当前设备信息
  const systemInfo = wx.getSystemInfoSync()
  // 获取底部安全区高度
  const safeArea = systemInfo.screenHeight - systemInfo.safeArea.bottom
  return safeArea
}
```

#### 获取用户当前经纬度

```js
export function getLocation() {
  return new Promise(resolve => {
    wx.authorize({
      scope: 'scope.userLocation', // 位置授权
      success: _res => {
        wx.getLocation({
          type: 'wgs84', // wgs84 返回 gps 坐标
          success: res => {
            resolve({
              longitude: res.longitude,
              latitude: res.latitude
            })
          },
          fail: _err => {
            wx.getSetting({
              success: res => {
                if (!res.authSetting['scope.userLocation']) {
                  wx.showModal({
                    title: '打开定位授权',
                    success: res => {
                      if (res.confirm) {
                        wx.openSetting({
                          success: _open => {
                            wx.getLocation({
                              type: 'gcj02', // gcj02的准度高于wgs84
                              success: res => {
                                resolve(res.longitude, res.latitude)
                              }
                            })
                          }
                        })
                      }
                    }
                  })
                } else {
                  wx.showModal({
                    title: '您手机定位功能没有开启',
                    content: '请在系统设置中打开定位服务',
                    showCancel: false,
                    success: () => {}
                  })
                }
              }
            })
          }
        })
      },
      fail: _err => {
        wx.showModal({
          title: '提示',
          content: '您拒绝了位置的授权，将无法使用地图功能',
          showCancel: false,
          success: function (_res) {
            wx.openSetting({
              complete() {
                getLocation()
              }
            })
          }
        })
      }
    })
  })
}
```

#### 比较当前版本和最低需要的基础库版本

```js
export function compareVersion(lowestVersion) {
  const curVersion = getApp().globalData.version.split('.')
  // console.log(curVersion)
  // eslint-disable-next-line no-param-reassign
  lowestVersion = lowestVersion.split('.')
  const len = Math.max(curVersion.length, lowestVersion.length)

  while (curVersion.length < len) {
    curVersion.push('0')
  }
  while (lowestVersion.length < len) {
    lowestVersion.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(curVersion[i])
    const num2 = parseInt(lowestVersion[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

```

