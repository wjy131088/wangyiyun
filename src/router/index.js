import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from 'views/Layout'
import Play from 'views/Play'

Vue.use(VueRouter)

const routes = [
  { path: '/layout', component: LayOut },
  { path: '/play', component: Play }
]

const router = new VueRouter({
  routes
})

export default router
