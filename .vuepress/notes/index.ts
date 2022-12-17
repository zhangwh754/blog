import { definePlumeNotesConfig } from '@vuepress-plume/vuepress-theme-plume'
import studyNote from './study-note'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/note',
  notes: [studyNote]
})
