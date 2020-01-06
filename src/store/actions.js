import { USER_INFO } from './mutation-types'
import { getLocalStore } from './../public/global'

export default {
  // 同步用户信息
  syncuserInfo ({
    commit
  }, userInfo) {
    commit(USER_INFO, {
      userInfo
    })
  },
  // 如果本地存在token就自动登录
  autoLogin ({
    commit
  }) {
    // 从本地取出
    let userInfo = getLocalStore('userInfo')
    if (userInfo) {
      commit(USER_INFO, {
        userInfo
      })
    }
  }
}
