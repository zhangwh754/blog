import { themePlume } from '@vuepress-plume/vuepress-theme-plume'
import notes from './notes'

export default themePlume({
  logo: '/images/avatar.jpg',
  darkMode: true,
  hostname: 'https://zhangwh754.cn/',
  avatar: {
    name: 'djdg',
    url: '/images/avatar.jpg',
    description: '好好学习，天天向上'
  },
  social: {
    email: 'zhangwh754@163.com',
    github: 'zhangwh754',
    QQ: '1840863933'
  },
  footer: {
    copyright: 'Copyright © 2022-present zhangwh754',
    content: ''
  },
  notes,
  navbar: [{ text: '学习笔记', link: '/note/study-note/' }],
  themePlugins: {
    copyCode: {
      selector: '.page-content div[class*="language-"] pre',
      locales: {
        '/': {
          copy: '复制成功',
          hint: '复制代码'
        }
      }
    }
  }
})
