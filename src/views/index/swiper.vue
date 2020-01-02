<template>
  <div>
    <div class="warp">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swiper_list: Array
  },
  data () {
    return {
      images: [
        'https://img.ddimg.mobi/0ec4a32cbd84b1575892960355.jpg',
        'https://img.ddimg.mobi/d3d83d40395221575808767181.jpg',
        'https://img.ddimg.mobi/0ec4a32cbd84b1575892960355.jpg',
        'https://img.ddimg.mobi/d3d83d40395221575808767181.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.warp {
  padding: 0 10px;
  margin-top: 10px;
}
.van-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
</style>
