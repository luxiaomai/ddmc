import axios from 'axios'
// import Qs from 'qs'
import api from './api'
// import { getToken } from '../utils/auth'
// import router from '@/router'
// import { getToken, delToken } from '@/utils/auth'
// import { Dialog } from 'vant'

let baseURL = process.env.VUE_APP_BASE_API

const instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

// 通过url判断是否是某个接口生效
let contains = (arr, url) => {
  let i = arr.length
  while (i--) {
    if (url.indexOf(arr[i]) !== -1) {
      return true
    }
  }
  return false
}

// 不需要提示错误的接口
let noNoticeApi = ['/park/app/parking/pay/querystate'] // 免密支付接口不提示

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 把token带上请求头
  // let token = getToken()
  // if (token) {
  //   config.headers['Authorization'] = token
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log(response)
  // 请求错误返回登录页
  // let res = response.data
  let notNotice = contains(noNoticeApi, response.config.url)
  if (notNotice) {
    return response
  }
  // if (res.code === 0) {
  //   Dialog.alert({
  //     title: '温馨提示',
  //     message: res.message
  //   })
  // }
  return response
}, function (error) {
  // if (error.response.status === 401) {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('code')
  //   router.push({ path: '/login' })
  // }
  return Promise.reject(error)
})

export default api(instance)
