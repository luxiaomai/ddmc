<template>
  <div>
    <div class="title">
      <i></i>
      限时抢购
      <van-count-down :time="time" style="display: inline-block;">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div class="more">更多</div>
    </div>
    <GoodsTime></GoodsTime>
  </div>
</template>

<script>
import GoodsTime from './goodsTime'
export default {
  props: {
    goods_time_list: Array
  },
  data () {
    return {
      time: 30 * 60 * 60 * 1000
    }
  },
  components: {
    GoodsTime
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
  border-radius: 5px;
}
.title {
  background: #fff;
  padding: 10px;
  height: 40px;
  line-height: 40px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  i {
    height: 16px;
    width: 4px;
    background: #49c75b;
    float: left;
    margin-top: 12px;
    margin-right: 5px;
  }
  .more {
    float: right;
    color: #49c75b;
    font-size: 14px;
  }
}
</style>
