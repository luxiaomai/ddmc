<template>
  <div>
    <!-- 移动端腾讯地图选址组件引入iframe -->
    <div class="map"
          v-if="isMap">
      <iframe id="mapPage"
              width="100%"
              height="100%"
              frameborder=0
              :src="`https://apis.map.qq.com/tools/locpicker?search=1&type=1&coord=${lat},${lng}&key=UJ2BZ-FNWWI-GMBGL-5ELOB-J5Z67-NVBF4&referer=myapp`">
      </iframe>
    </div>
    <div class="warp" v-else>
      <div class="header">
        <div class="poiaddress">
          <div><img src="../assets/images/a.png"></div>
          <div @click="selMap">{{addr}}</div>
        </div>
        <Search />
        <Swiper/>
      </div>
      <div class="text">
        <ul>
          <li>
            <img src="../assets/images/transport.png">
            最快29分钟送达
          </li>
          <li>
            <img src="../assets/images/money.png">
            0起送费 0配送费
            </li>
          <li>
            <img src="../assets/images/seal.png">
            安心退
          </li>
        </ul>
      </div>
      <Nav />
      <div class="payCar">
        <div class="left"><img src="../assets/images/b.png">加入绿卡会员·每年预计节省806元</div>
        <div class="right">5折开卡></div>
      </div>
      <GoodsTimeBuy></GoodsTimeBuy>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './index/nav'
import Search from './index/search'
import Swiper from './index/swiper'
import GoodsTimeBuy from './index/goodsTimeBuy'
import Footer from '../components/footer'

import { mapMutations } from 'vuex'
import { ADD_TO_CART } from './../store/mutation-types'
export default {
  data () {
    return {
      isMap: false,
      lat: 24.44579,
      lng: 118.08243,
      addr: '选择地址'
    }
  },
  methods: {
    // Vuex中的方法
    ...mapMutations(['ADD_TO_CART']),
    selMap () {
      console.log(ADD_TO_CART)
      this.isMap = true
      let that = this
      window.addEventListener('message', function (event) {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data
        if (loc && loc.module === 'locationPicker') { // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          that.addr = loc.poiname === '我的位置' ? loc.addr : loc.poiname
          that.lat = loc.latlng.lat
          that.lng = loc.latlng.lng
          that.isMap = false
        }
      }, false)
    }
  },
  components: {
    Nav,
    Search,
    Swiper,
    GoodsTimeBuy,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 290px;
  background: #49c75b;
}
.text {
  color: #49c75b;
  font-size: 12px;
  padding: 10px 20px 0;
  height: 30px;
  line-height: 30px;
  background: #fff;
  li {
    float: left;
    margin-right: 15px;
    img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-right: 5px;
    float: left;
    }
  }
}
.payCar {
  height: 40px;
  line-height: 40px;
  width: 330px;
  padding: 0 10px;
  font-size: 12px;
  border-radius: 5px;
  margin: 10px auto;
  color: #fff;
  background: #49c75b;
  .left {
    float: left;
    img {
      width: 20px;
      height: 20px;
      float: left;
      margin-top: 10px;
      margin-right: 5px;
    }
  }
  .right {
    float: right;
  }
}
.poiaddress {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  padding: 0 10px;
  div {
    float: left;
  }
  img {
    width: 16px;
    height: 16px;
    margin: 7px 3px 0 0;
  }
}
.map {
  height: calc(100vh);
  z-index: 99;
}
</style>
