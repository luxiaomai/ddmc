<template>
  <div>
    <img :src="goodsInfo.small_image"
             alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsInfo: this.$route.query,
      // eslint-disable-next-line no-useless-escape
      goodsImage: 'https:\/\/img.ddimg.mobi\/3f280ff77ab3d1571213379189.jpg?width=750&height=1869'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
