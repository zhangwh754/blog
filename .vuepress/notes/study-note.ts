import { definePlumeNotesItemConfig } from '@vuepress-plume/vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  link: '/study-note/',
  text: '学习笔记',
  dir: 'study-note',
  sidebar: [
    '',
    {
      text: 'HTML',
      dir: 'HTML',
      children: ['HTML标签']
    },
    {
      text: 'CSS',
      dir: 'CSS',
      children: ['CSS基础', '行高的构成']
    },
    {
      text: '开发',
      dir: 'Develop',
      children: ['移动端适配']
    }
  ]
})
