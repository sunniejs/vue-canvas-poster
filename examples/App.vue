<template>
  <div id="app">
    <img :src="src" alt="" class="share-image">
    <canvas-poster class="poster" :painting="painting" @success="success"></canvas-poster>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      src: '',
      painting: {
        width: 320,
        height: 410,
        views: [
          {
            type: 'rect',
            top: 0,
            left: 0,
            background: '#ffffff',
            width: 320,
            height: 320,
            // radius: 160
          },
          {
            type: 'image',
            url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-white/1.jpg',
            left: 0,
            top: 0,
            width: 320,
            height: 320,
            deg: 90
          },


          {
            type: 'text',
            content: 'breakWordbreakWordbreakWordbreakWordbreakWordbreakWordbreakWordbreakWordbreakWordbreakWordbreakWord',
            fontSize: 15,
            bolder: true,
            top: 12,
            left: 12,
            width: 270, // 大于270换行
            breakWord: true,
            MaxLineNumber: 1,
          },
          {
            type: 'text',
            content: `商品款号:1234商品款号:1234商品款号`,
            fontSize: 15,
            top: 40,
            left: 12,
            width: 270, // 大于540换行
            MaxLineNumber: 1,// 最多两行
            textDecoration: 'underline'
          },
          {
            type: 'text',
            content: `尺码/规格:xs`,
            fontSize: 12,
            top: 100,
            left: 12,
            width: 270, // 大于540换行
            MaxLineNumber: 1,// 最多两行
            textDecoration: 'line-through'
          }
        ]
      }
    }
  },
  methods: {
    // 保存
    success(src) {
      this.src = src
    },
  }
}
</script>

<style>
.share-image {
  width: 320px;
  height: 410px;
}
</style>
