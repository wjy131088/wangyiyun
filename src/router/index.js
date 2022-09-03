import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from 'views/Layout'
import Play from 'views/Play'
import Home from 'views/Second/Home'
import Search from 'views/Second/Search'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: LayOut,
    children: [
      { path: '/layout/home', component: Home },
      { path: '/layout/search', component: Search }
    ]
  },
  {
    path: '/play',
    component: Play
  }
]

const router = new VueRouter({
  routes
})

export default router
