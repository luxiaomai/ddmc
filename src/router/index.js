import Vue from 'vue'
import VueRouter from 'vue-router'
// import state from '../store/state'
import { getLocalStore } from './../public/global'

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
    path: '/classify',
    name: 'classify',
    meta: { title: '商品分类', auth: false, keepAlive: false },
    component: () => import(/* webpackChunkName: "classify" */ '../views/classify/classify.vue')
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
    meta: { title: '商品详情', auth: false, keepAlive: false },
    component: () => import(/* webpackChunkName: "goods" */ '../views/goods/goodsDetail.vue')
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

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let token = getLocalStore('userInfo')
  let auth = to.meta.auth
  // 验证是否需要token
  if (auth) {
    if (!token) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
