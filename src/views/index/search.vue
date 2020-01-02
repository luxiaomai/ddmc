<template>
  <div>
    <form action="/">
      <van-search placeholder="请输入搜索关键词"
                  v-model="value"
                  input-align="center"
                  style="clear:both;"
                  background="none;"
      />
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.van-search {
  padding: 0 10px;
}
.van-search__content {
  border-radius: 50px;
}
</style>
