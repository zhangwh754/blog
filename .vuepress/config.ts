import { path, getDirname } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import theme from './theme'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'djdg的博客',
  description: '',
  dest: 'docs',
  public: path.resolve(__dirname, '../public'),
  temp: path.resolve(__dirname, '.temp'),
  cache: path.resolve(__dirname, '.cache'),
  head: [
    ['link', { rel: 'icon', href: '/images/avatar.jpg' }],
    ['meta', { name: 'keywords', content: 'djdg,前端' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'id=edg' }]
  ],
  shouldPrefetch: false,
  theme: theme as any
})
