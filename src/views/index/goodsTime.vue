<template>
  <div>
     <div id="flashFood">
    <div class="flashItemwrapper">
      <ul class="itemWrapper"
          ref="ulWrapper">
        <li class="itemInCovers"
            v-for="(product,index) in product_list"
            :key="index"
            ref="productItem"
            @click="goToGoodsDetail(product)">
          <img v-lazy="product.small_image"
               class="itemImage">
          <span class="title">{{product.name}}</span>
          <div class="price">
            <p class="nowPrice">￥{{product.price}}</p>
            <p class="originPrice">￥{{product.origin_price}}</p>
            <div class="buyCar" @click.stop="addToCart(product,index)">
              <img src="../../assets/images/car.png">
            </div>
          </div>
        </li>
      </ul>
      <transition appear
                  @after-appear='afterEnter'
                  @before-appear="beforeEnter"
                  v-for="(item,index) in showMoveDot"
                  :key="index.id">
        <div class="move_dot"
             ref="ball"
             v-if="item">
          <!-- 小球图片 -->
          <img :src="dropImage"
               alt="">
        </div>
      </transition>
    </div>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex'
// import { ADD_TO_CART } from './../../store/mutation-types'
export default {
  props: {
    goods_time_list: Array
  },
  data () {
    return {
      showMoveDot: [], // 控制下落的小圆点显示隐藏
      product_list: [],
      dropImage: ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.dropBalls = []
  },
  methods: {
    // 添加到购物车
    ...mapMutations(['ADD_TO_CART']),
    addToCart (product, num) {
      this.ADD_TO_CART(product)
      // 取出商品的图片
      this.dropImage = product.small_image
    },
    getHomeData () {
      let param = {}
      this.$api.getHomeData(param).then(res => {
        let data = res.data.data
        this.product_list = this.product_list.concat(data.list[3].product_list)
      })
    },
    // 商品详情页面
    goToGoodsDetail (goods) {
      // 跳转到商品详情页面并且传值
      this.$router.push({
        name: 'goodsDetail',
        query: {
          id: goods.id,
          name: goods.name,
          small_image: goods.small_image,
          price: goods.price,
          spec: goods.spec,
          total_sales: goods.total_sales,
          origin_price: goods.origin_price,
          isFlash: true
        }
      })
    }
  },
  mounted () {
    this.getHomeData()
  },
  updated () {
    this.$nextTick(() => {
      let contentWrapperWidth = 0
      let el = this.$refs.productItem
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth
      }
      // 给ul设置值
      this.$refs.ulWrapper.style.width = contentWrapperWidth + 'px'
      if (!this.scroll) {
        // 名字一定要唯一 和父组件独立
        this.scroll = new BScroll('.flashItemwrapper', {
          probeType: 2,
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#flashFood {
  .flashItemwrapper {
    width: 100%;
    background: #fff;
    overflow: hidden;
    position: relative;
    padding-bottom: 20px;
    .move_dot {
      position: fixed;
      z-index: 100;
      top: 1rem;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      img {
        animation: 0.88s mymove ease-in-out;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
    }
    .itemWrapper {
      display: flex;
      justify-content: flex-start;
      padding: 0 10px;
    }

    .itemInCovers {
      // 设置子li的宽度
      flex: 0 0 4rem;
      align-items: center;
      padding-right: 0.5rem;
      .itemImage {
        width: 100%;
        // border-radius: 50%;
        // 等比缩小图片来适应元素的尺寸
        background-size: contain;
        background-image: url("../../assets/images/product-img-load.png");
      }
      .title {
        padding: 5px;
        display: inline-block;
        font-size: 14px;
        height: 30px;
        line-height: 15px;
        word-break: break-all;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        position: relative;
        .nowPrice {
          color: #f37078;
          font-size: 14px;
          font-weight: bold;
          margin-top: 10px;
        }
        .originPrice {
          font-size: 12px;
          color: #999999;
          text-decoration: line-through;
        }
        .buyCar {
          position: absolute;
          right: 0;
          top: 0;
          width: 30px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
  @-moz-keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
  @-webkit-keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
  @-o-keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
}
</style>
