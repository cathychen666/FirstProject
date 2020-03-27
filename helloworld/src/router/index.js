import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: '1-1',
    component: Home
  },
  {
    path: '/about',
    name: '1-2',
    component: About
  },
  {
    path: '/index',
    name: '1-3',
    component: Index
  },
]

const router = new VueRouter({
  routes
})

export default router
