// 1. 定义基础路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'
export default (instance) => {
  return {
    getHomeData: params => { return instance.get(BASE_URL + 'homeApi', { params }) }, // 首页数据
    sendMsg: params => { return instance.get(BASE_URL + 'send_code', { params }) }, // 获取登录验证码
    wechatLogin: params => { return instance.post(BASE_URL + 'login_code', params) } // 登录
  }
}
