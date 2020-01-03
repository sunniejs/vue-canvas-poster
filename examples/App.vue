<template>
  <div id="app">
    <img :src="src" alt="" class="share-image">
    <vue-canvas-poster class="poster"  :widthPixels="1000" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
  </div>
</template>
<script>
import { drawPoster } from './painter';
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      src: '',
      painting:{}
    }
  },
  mounted(){
    const params={
      type:'home'
    }
    drawPoster(params).then(res=>{
        this.painting = res
    })
  },
  methods: {
    // 保存
    success(src) {
      this.src = src
    },
    fail(err) {
      console.log('fail', err)
    }
  }
}
</script>

<style>

.header{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.share-image {
  width: 270px;
  height: 438px;
}
</style>
