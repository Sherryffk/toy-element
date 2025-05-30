import {makeInstaller} from '@toy-element/utils'
import components from './components'
import '@toy-element/theme/index.css'  
const installer =makeInstaller(components)

// 把所有components的导出从这个入口进行导出
export * from '@toy-element/components'
// 使用者在使用包的时候可以以vue的plugin进行使用
export default installer;