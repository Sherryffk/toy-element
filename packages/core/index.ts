import {makeInstaller} from '@toy-element/utils'
import{library}from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@toy-element/theme/index.css'  
const installer =makeInstaller(components)
// 把图标引进来
library.add(fas)
// 把所有components的导出从这个入口进行导出
export * from '@toy-element/components'
// 使用者在使用包的时候可以以vue的plugin进行使用
export default installer;