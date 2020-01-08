<template>
  <div>
    <van-tabbar v-model="active" active-color="#49c75b" inactive-color="#999" route>
      <van-tabbar-item replace to="/index">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/classify">
        <span>分类</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon1.active : icon1.inactive" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/like">
        <span>吃什么</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon2.active : icon2.inactive" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopCar" :info='number'>
        <span>购物车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon3.active : icon3.inactive" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon4.active : icon4.inactive" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Footer',
  data () {
    return {
      active: 0,
      number: '',
      icon: {
        active: require('../assets/images/nav1-1.png'),
        inactive: require('../assets/images/nav1.png')
      },
      icon1: {
        active: require('../assets/images/nav2-1.png'),
        inactive: require('../assets/images/nav2.png')
      },
      icon2: {
        active: require('../assets/images/nav3-1.png'),
        inactive: require('../assets/images/nav3.png')
      },
      icon3: {
        active: require('../assets/images/nav4-1.png'),
        inactive: require('../assets/images/nav4.png')
      },
      icon4: {
        active: require('../assets/images/nav5-1.png'),
        inactive: require('../assets/images/nav5.png')
      }
    }
  },
  computed: {
    ...mapState(['shopCart'], ['userInfo'])
  },
  created () {
    this.goodsNum()
  },
  watch: {
    deep: true
  },
  mounted () {
    this._initData()
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    goodsNum () {
      let num = 0
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num
      })
      this.number = num
    },
    // 2.初始化购物车数据
    _initData () {
      this.INIT_SHOP_CART()
      this.INIT_USER_INFO()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
