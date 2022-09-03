// 自动注册vant组件
import { Button, Cell, Image as VanImage } from 'vant'

const components = [Button, Cell, VanImage]

const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component))
}

export default registerVant
