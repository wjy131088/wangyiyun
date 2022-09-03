import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 开启插件
import plugins from '@/plugins'
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
