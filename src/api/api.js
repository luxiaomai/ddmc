export default (instance) => {
  return {
    sendMsg: params => { return instance.get('/ddmc/sms', { params }) }, // 获取登录验证码
    wechatLogin: params => { return instance.post('/ddmc/login', params) } // 登录
  }
}
