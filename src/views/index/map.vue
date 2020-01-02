<template>
  <div class="warp">
    <div @click="selMap">选择地址: {{addr}}</div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMap: false,
      lat: 24.44579,
      lng: 118.08243,
      addr: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
