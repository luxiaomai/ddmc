import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录', auth: false, keepAlive: false },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    meta: { title: '鹿鹿买菜', auth: false, keepAlive: false },
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
  },
  {
    path: '/index/map',
    name: 'index-map',
    meta: { title: '获取位置', auth: false, keepAlive: false },
    component: () => import(/* webpackChunkName: "index" */ '../views/index/map.vue')
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
