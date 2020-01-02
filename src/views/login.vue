<template>
  <div>
    <div class="logo"><img src="../assets/logo.png"></div>
      <van-field v-model="phoneNum" clearable border label="手机号" placeholder="请输入手机号" />
      <van-field v-model="sms" maxlength="6" center clearable label="验证码" placeholder="请输入验证码">
        <van-button class="smsButton" slot="button" size="small" v-show="show" @click="smsButton()">获取验证码</van-button>
        <van-button class="smsButton" slot="button" size="small" v-show="!show" @click="count">{{count}}秒后可重发</van-button>
      </van-field>
    <van-checkbox class="checked" v-model="checked" shape="square" icon-size="13px">我已阅读并同意<span>《服务协议及隐私条款》</span></van-checkbox>
    <van-button  class="btn" type="info" size="large" @click="commitButton()" :disabled="!phoneNum || !sms || !checked">登录</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      show: true,
      count: '',
      sms: '',
      phoneNum: ''
    }
  },
  methods: {
    commitButton () {
      if (!(/^1[3|4|5|7|8|9]\d{9}$/.test(this.phoneNum))) {
        this.$toast('手机号码错误')
      } else {
        let phoneNum = this.phoneNum
        let code = this.sms
        let param = { code, phoneNum }
        this.$api.wechatLogin(param).then(res => {
          let data = res.data.data
          if (data.code === '1') {
            this.$toast({
              message: data.message,
              duration: 2000,
              onClose: () => {
                this.$router.push({
                  path: '/index'
                })
              }
            })
          }
        })
      }
    },
    smsButton () {
      if (!(/^1[3|4|5|7|8|9]\d{9}$/.test(this.phoneNum))) {
        this.$toast('手机号码错误')
      } else {
        let phoneNum = this.phoneNum
        let param = {
          phoneNum
        }
        this.$api.sendMsg(param).then(res => {
          let data = res.data.data
          console.log(data)
          this.$toast(data.message)
          this.getCode()
        })
      }
    },
    // 倒计时
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  },
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#fff')
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 70px;
  width: 70px;
  margin: 65px auto 50px;
  img {
    width: 100%;
    height: 100%;
  }
}
.smsButton {
  border:none;
  color:#008eff;
  font-size:16px;
}
.btn {
  width: 325px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  font-size: 18px;
  margin-top:33px;
}
.van-cell {
  width: 95%;
  font-size: 16px;
  margin-top: 10px;
  color: #333;
  padding: 0.3125rem 0 0.3125rem 0.5rem;
}
.checked {
  margin-left: 0.5rem;
  font-size: 12px;
  color: #333;
  margin-top: 13px;
  span {
    color: #008eff;
  }
}
</style>
