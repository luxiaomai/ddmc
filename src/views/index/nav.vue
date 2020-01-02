<template>
  <div>
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="item in list"
        :key="item.id"
        :icon="item.url"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    nav_list: Array
  },
  data () {
    return {
      list: [
        { id: 1, url: 'https://img.ddimg.mobi/faed0c89b1ac61561979943620.jpg', name: '安心蔬菜' },
        { id: 2, url: 'https://img.ddimg.mobi/a79822f496ec71561980537120.jpg', name: '豆制品' },
        { id: 3, url: 'https://img.ddimg.mobi/febc9219e5f061561980283162.jpg', name: '水果' },
        { id: 4, url: 'https://img.ddimg.mobi/57742da7f00ab1562725189267.jpg', name: '肉禽蛋' },
        { id: 5, url: 'https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg', name: '海鲜水产' },
        { id: 6, url: 'https://img.ddimg.mobi/a19a8501bf4041561980956934.jpg', name: '乳品烘焙' },
        { id: 7, url: 'https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg', name: '营养早餐' },
        { id: 8, url: 'https://img.ddimg.mobi/cc39ecee3cee51564386403745.jpg', name: '叮咚心选' },
        { id: 9, url: 'https://img.ddimg.mobi/67260446df1451561980456552.jpg', name: '米面粮油' },
        { id: 10, url: 'https://img.ddimg.mobi/17964fae5012d1561980650167.jpg', name: '调味品' }
      ]
    }
  }
}
</script>
