import {
  USER_INFO,
  INIT_USER_INFO,
  INIT_SHOP_CART,
  ADD_TO_CART,
  ADD_GOODS
} from './mutation-types'
import { getLocalStore, setLocalStore } from './../public/global'
import router from './../router/index'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  // 1.添加商品
  [ADD_GOODS] (state, {
    goodsID,
    goodsName,
    smallImage,
    goodsPrice
  }) {
    let shopCart = state.shopCart
    // 1.1 判断商品是否存在
    if (shopCart[goodsID]) {
      // 让数量goodsID里面的num +1
      shopCart[goodsID]['num']++
    } else {
      // 1.2 不存在则设置默认值
      shopCart[goodsID] = {
        'num': 1,
        'id': goodsID,
        'name': goodsName,
        'price': goodsPrice,
        'smallImage': smallImage,
        'checked': true
      }
      // 1.3 给shopCart产生新对象
      state.shopCart = {
        ...shopCart
      }
    }
    // 1.4 将数据存储到本地
    setLocalStore('shopCart', state.shopCart)
  },
  // 2.页面初始化,获取本地购物车的数据
  [INIT_SHOP_CART] (state) {
    // 2.1 先存本地取购物车数据
    let initShopCart = getLocalStore('shopCart')
    if (initShopCart) {
      // 2.1 如何购物车有数据那么就把它通过对象的方式赋值给store
      state.shopCart = JSON.parse(initShopCart)
    }
  },
  // 7.保存用户信息到本地
  [USER_INFO] (state, {
    userInfo
  }) {
    // 7.1 把外界传来的userInfo保存到state中的userInfo
    state.userInfo = userInfo
    // 7.2 保存到本地缓存中
    setLocalStore('userInfo', state.userInfo)
  },
  //  8.初始化获取用户信息
  [INIT_USER_INFO] (state) {
    // 8.1 先存本地用户数据
    let initUserInfo = getLocalStore('userInfo')
    if (initUserInfo) {
      state.userInfo = JSON.parse(initUserInfo)
    }
  },
  // 添加商品进购物车
  [ADD_TO_CART] (state, goods) {
    // 判断是否有用户登录
    let token = getLocalStore('userInfo')
    if (token) {
      // 1.3 添加数据
      // 延迟900毫秒等待动画结束
      setTimeout(() => {
        this.commit('ADD_GOODS', {
          goodsID: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        })
        Toast({
          message: '成功加入购物车',
          duration: 800
        })
      }, 900)
    } else {
      // 1.4 如何没有登录跳转到登录界面
      router.push('/login')
    }
  }
}
