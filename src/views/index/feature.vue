<template>
  <div>
    <div class="title">
      <i></i>
      特色专区
    </div>
    <div class="mainWarp">
      <div class="newItem"
            v-for="newItem in newItemList" :key="newItem.id">
        <span class="
           itemTitle">{{newItem.title}}</span>
        <p class="itemSubTitle">{{newItem.subtitle}}</p>
        <img class="itemImg"
             v-lazy="newItem.imageOne"
             alt="">
        <img class="itemImg"
             v-lazy="newItem.imageTwo"
             alt="">
      </div>
      <div class="hotItem"
            v-for="hotItem in hotItemList" :key="hotItem.id">
        <span class="itemTitle hotItemTitle">{{hotItem.title}}</span>
        <p class="itemSubTitle">{{hotItem.subtitle}}</p>
        <img class="itemImg"
             v-lazy="hotItem.imageOne"
             alt="">
        <img class="itemImg"
             v-lazy="hotItem.imageTwo"
             alt="">
      </div>
      <div class="vipItem"
           v-for="vipItem in vipItemList"
           :key="vipItem.id">
        <span class="itemTitle vipItemTitle">{{vipItem.title}}</span>
        <p class="itemSubTitle">{{vipItem.subtitle}}</p>
        <img class="itemImg"
             v-lazy="vipItem.imageOne"
             alt="">
        <img class="itemImg"
             v-lazy="vipItem.imageTwo"
             alt="">
      </div>
      <div class="otherItem"
           v-for="otherItem in otherItemList"
           :key="otherItem.id">
        <p class="otherTitle">{{otherItem.title}}</p>
        <p class="otherSubTitle">{{otherItem.subtitle}}</p>
        <img class="otherImage"
             src="../../assets/images/peanut.jpeg"
             alt="">
      </div>
      <div class="lowPrice"
           v-for="lowPriceItem in lowPriceItemList"
           :key="lowPriceItem.id">
        <p class="otherTitle">{{lowPriceItem.title}}</p>
        <p class="otherSubTitle">{{lowPriceItem.subtitle}}</p>
        <img class="otherImage"
             :src="lowPriceItem.image"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newItemList: [],
      hotItemList: [],
      vipItemList: [],
      otherItemList: [],
      lowPriceItemList: []
    }
  },
  methods: {
    getHomeData () {
      let param = {}
      this.$api.getHomeData(param).then(res => {
        let data = res.data.data
        this.newItemList = this.newItemList.concat(data.special_zone.newItemList)
        this.hotItemList = this.hotItemList.concat(data.special_zone.hotItemList)
        this.vipItemList = this.vipItemList.concat(data.special_zone.vipItemList)
        this.otherItemList = this.otherItemList.concat(data.special_zone.otherItemList)
        this.lowPriceItemList = this.lowPriceItemList.concat(data.special_zone.lowPriceItemList)
      })
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style lang="scss" scoped>
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
}
.mainWarp {
  width: 95%;
  height: 260px;
  margin-left: 2.5%;
  background: #fff;
  border: 1px solid #f2f3f5;
  .newItem {
    float: left;
    width: 49.5%;
    height: 130px;
    border-right: 1px solid #f2f3f5;
    border-bottom: 1px solid #f2f3f5;
    .itemTitle {
      width: 100%;
      font-size: 14px;
      background-image: linear-gradient(135deg, red, orange);
      background-clip: text;
      color: transparent;
      padding: 0 0 0 10px;
    }
    .itemSubTitle {
      font-size: 12px;
      color: grey;
      padding: 0 0 0 10px;
      margin: 10px 0;
    }
    .itemImg {
      width: 60px;
      height: 60px;
      margin-left: 10px;
    }
  }
  .hotItem {
    float: left;
    width: 49.5%;
    height: 130px;
    border-bottom: 1px solid #f2f3f5;
    .itemTitle {
      width: 100%;
      font-size: 14px;
      background-image: linear-gradient(150deg, #b2233f, #f70d3c);
      background-clip: text;
      color: transparent;
      padding: 0 0 0 10px;
    }
    .itemSubTitle {
      font-size: 12px;
      color: grey;
      padding: 0 0 0 10px;
      margin: 10px 0;
    }
    .itemImg {
      width: 60px;
      height: 60px;
      margin-left: 10px;
    }
  }
  .vipItem {
    float: left;
    width: 49.9%;
    height: 130px;
    border-right: 1px solid #f2f3f5;
    .itemTitle {
      width: 100%;
      font-size: 14px;
      background-image: linear-gradient(150deg, #0e9e09, #51b14d);
      background-clip: text;
      color: transparent;
      padding: 0 0 0 10px;
    }
    .itemSubTitle {
      font-size: 12px;
      color: grey;
      padding: 0 0 0 10px;
      margin: 10px 0;
    }
    .itemImg {
      width: 60px;
      height: 60px;
      margin-left: 10px;
    }
  }
  .otherItem {
    float: left;
    width: 25%;
    height: 130px;
    border-right: 1px solid #f2f3f5;
    .otherTitle {
      width: 100%;
      font-size: 14px;
      background-image: linear-gradient(150deg, #10180f, #091f08);
      background-clip: text;
      color: transparent;
      padding: 15px 0 0 10px;
    }
    .otherSubTitle {
      font-size: 12px;
      padding: 0 0 0 10px;
      margin: 10px 0;
      color: grey;
    }
    .otherImage {
      width: 60px;
      height: 60px;
      margin-left: 10px;
      border-radius: 50%;
    }
  }
  .lowPrice {
    float: left;
    width: 24.5%;
    height: 130px;
    .otherTitle {
      width: 100%;
      font-size: 14px;
      background-image: linear-gradient(150deg, #10180f, #091f08);
      background-clip: text;
      color: transparent;
      padding: 15px 0 0 10px;
    }
    .otherSubTitle {
      font-size: 12px;
      padding: 0 0 0 10px;
      margin: 10px 0;
      color: grey;
    }
    .otherImage {
      width: 60px;
      height: 60px;
      margin-left: 10px;
      border-radius: 50%;
    }
  }
}
</style>
