<template>
  <div id="app">
    <img
      :src="src"
      alt=""
      class="share-image"
    >
    <vue-canvas-poster
      :width-pixels="1000"
      :painting="painting"
      @success="success"
      @fail="fail"
    />
  </div>
</template>
<script>
  
import { drawPoster } from './painter';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      src: '',
      painting: {}
    }
  },
  mounted() {
    const params = {
      type: 'pro' // 尝试换一下text,image
    }
    drawPoster(params).then(res => {
      this.painting = res
    })
  },
  methods: {
    // 保存
    success(src) {
      alert('生成成功')
      this.src = src
    },
    fail(err) {
      console.log('fail', err)
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.share-image {
  width: 100%;
  height: auto;
}
</style>
