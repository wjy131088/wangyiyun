// 自动注册vant组件
import { NavBar, Tabbar, TabbarItem } from 'vant'

const components = [NavBar, Tabbar, TabbarItem]

const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component))
}

export default registerVant
