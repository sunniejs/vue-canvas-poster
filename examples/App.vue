<template>
  <div id="app">
    <img :src="src" alt="" class="share-image">
    <vue-canvas-poster class="poster" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
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
        width: 550,
        height: 876,

        views: [
          {
            type: 'rect',
            top: 0,
            left: 0,
            background: '#f4f5f7',
            width: 550,
            height: 876
          },
          {
            type: 'image',
            url: 'https://avatars0.githubusercontent.com/u/35954879?s=460&v=4',
            left: 36,
            top: 20,
            width: 80,
            height: 80,
            radius: 40
          },
          {
            type: 'text',
            content: '乖摸摸头的小店',
            fontSize: 26,
            bolder: true,
            top: 48,
            textAlign: 'center',
            left: 275, // 图片宽度一半，居中需要设置
            width: 300, // 设置字体最大宽度
            breakWord: true,
            MaxLineNumber: 1,
          },
          {
            type: 'rect',
            top: 120,
            left: 12,
            background: '#FFFFFF',
            width: 526,
            height: 540,
            radius: 10
          },
          // 本地图片
          {
            type: 'image',
            url: require('./assets/1.jpg'),
            left: 25,
            top: 150,
            width: 332,
            height: 332,
          },
          // 网络图片
          {
            type: 'image',
            url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-Pink/2.jpg',
            left: 364,
            top: 150,
            width: 160,
            height: 160
          },
          {
            type: 'image',
            url: 'https://pic2.zhimg.com/v2-7f2a92f872a846897792af75801117b3_1200x500.jpg',
            left: 364,
            top: 320,
            width: 160,
            height: 160
          },
          {
            type: 'text',
            content: `18987、安奈儿童装上衣条纹童装上衣条纹童装上衣 条纹童装上衣`,
            color: '#666666',
            fontSize: 22,
            top: 507,
            left: 25,
            width: 450,
            lineHeight: 33,
            MaxLineNumber: 2,
            breakWord: true
          },

          {
            type: 'text',
            content: `劲爆价:`,
            fontSize: 24,
            top: 608,
            left: 26,
          },
          {
            type: 'text',
            content: `¥39.00`,
            color: '#E5463E',
            fontSize: 36,
            border: true,
            top: 601,
            left: 116,
            textDecoration: 'underline'
          },
          {
            type: 'text',
            content: `¥259.00`,
            color: '#999999',
            fontSize: 26,
            border: true,
            top: 609,
            left: 243,
            textDecoration: 'line-through'
          },
          {
            type: 'rect',
            top: 647,
            left: 439,
            background: '#fff',
            width: 28,
            height: 28,
            deg: 45
          },
          {
            type: 'text',
            content: `长按或扫描二维码`,
            fontSize: 18,
            color: '#999999',
            top: 829,
            left: 385
          },
          // 本地图片
          {
            type: 'image',
            url: require('./assets/slogen.png'),
            left: 26,
            top: 821,
            width: 218,
            height: 24
          },
          {
            type: 'qrcode',
            content: 'https://github.com/sunnie1992/vue_canvas_poster',
            background: '#fff',
            color: '#000',
            left: 392,
            top: 690,
            width: 130,
            height: 130
          },
        ]
      }
    }
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
.share-image {
  border: 1px solid red;
  /* width: 270px;
  height: 438px; */
}
</style>
