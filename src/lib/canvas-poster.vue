<script>
import Painter from './painter'
import { equal } from './util'
export default {
  name: 'VueCanvasPoster',
  props: {
    painting: {
      type: Object,
      default: function() {
        return {}
      }
    },
    dirty: {
      type: Boolean,
      default: false
    },
    widthPixels: {
      type: Number,
      default: 750
    }
  },
  watch: {
    painting: {
      handler(newVal, oldVal) {
        if (this.isNeedRefresh(newVal, oldVal)) {
          this.paintCount = 0
          this.startPaint()
        }
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      paintCount: 0,
      painterStyle: '',
      canvasWidthInPx: 375,
      canvasHeightInPx: 375,
      width: 100,
      height: 100,
      canvas: null,
      ctx: null
    }
  },
  render(h) {
    return h('div', [
      h('canvas', {
        ref: 'canvas',
        class: 'canvas',
        style: this.painterStyle
      })
    ])
  },
  mounted() {
    this.$nextTick(() => {
      this.canvas = this.$refs.canvas // 指定canvas
      this.ctx = this.canvas.getContext('2d') //设置2D渲染区域
    })
  },
  methods: {
    /**
     * 判断一个 object 是否为 空
     * @param {object} object
     */
    isEmpty(object) {
      for (const i in object) {
        return false
      }
      return true
    },
    isNeedRefresh(newVal, oldVal) {
      if (!newVal || this.isEmpty(newVal) || (this.dirty && equal(newVal, oldVal))) {
        return false
      }
      return true
    },
    // 开始绘画
    startPaint() {
      if (this.isEmpty(this.painting)) {
        return
      }
      setStringPrototype(1)
      // 下载图片
      this.downloadImages()
        .then(res => {
          const { width, height } = res
          if (!width || !height) {
            console.error(`You should set width and height correctly for painter, width: ${width}, height: ${height}`)
            return
          }
          this.canvasWidthInPx = width.toPx()
          if (this.widthPixels) {
            // 重设宽度，高度
            setStringPrototype(this.widthPixels / this.canvasWidthInPx)
            this.canvasWidthInPx = this.widthPixels
          }
          this.canvasHeightInPx = height.toPx()
          this.painterStyle = `width:${this.canvasWidthInPx}px;height:${this.canvasHeightInPx}px;`
          this.canvas = this.$refs.canvas // 指定canvas
          this.canvas.width = this.canvasWidthInPx
          this.canvas.height = this.canvasHeightInPx
          const ctx = this.canvas.getContext('2d') //设置2D渲染区域
          const pen = new Painter(ctx, res)
          pen.paint(() => {
            var imageBase64 = this.canvas.toDataURL('image/png')
            this.$emit('success', imageBase64)
          })
        })
        .catch(err => {
          this.$emit('fail', err)
        })
    },
    // 下载所有图片
    downloadImages() {
      return new Promise((resolve) => {
        let preCount = 0
        let completeCount = 0
        const paintCopy = JSON.parse(JSON.stringify(this.painting))
        if (paintCopy.background) {
          preCount++
          this.loadImage(paintCopy.background).then(
            image => {
              paintCopy.background = image
              completeCount++
              preCount === completeCount && resolve(paintCopy)
            },
            err => {
              completeCount++
              preCount === completeCount && resolve(paintCopy)
              console.log(err)
            }
          )
        }
        if (paintCopy.views) {
          for (const view of paintCopy.views) {
            if (view && view.type === 'image' && view.url) {
              preCount++
              /* eslint-disable no-loop-func */
              this.loadImage(view.url).then(
                image => {
                  completeCount++
                  view.url = image
                  // 获得一下图片信息，供后续裁减使用
                  view.sWidth = image.width
                  view.sHeight = image.height
                  preCount === completeCount && resolve(paintCopy)
                },
                err => {
                  completeCount++
                  preCount === completeCount && resolve(paintCopy)
                  console.log(err)
                }
              )
            }
          }
        }
        preCount === 0 && resolve(paintCopy)
        // if (preCount !== completeCount) {
        //   reject('paintCopy');
        // }
      })
    },
    // 下载图片
    loadImage(src) {
      return new Promise((resolve, reject) => {
        if (src.startsWith('#')) {
          resolve(src)
          return
        }
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => reject(`下载图片失败 ${src}`)
        img.crossOrigin = 'anonymous'
        img.src = src
        if (img.complete === true) {
          // Inline XML images may fail to parse, throwing an Error later on
          setTimeout(() => resolve(img), 500)
        }
      })
    }
  }
}
function setStringPrototype(scale) {
  /* eslint-disable no-extend-native */
  /**
   * 是否支持负数
   * @param {Boolean} minus 是否支持负数
   */
  String.prototype.toPx = function toPx(minus, baseSize) {
    if (this === '0') {
      return 0
    }
    let reg
    if (minus) {
      reg = /^-?[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g
    } else {
      reg = /^[0-9]+([.]{1}[0-9]+){0,1}(px|%)$/g
    }
    const results = reg.exec(this)
    const unit = results[2]
    const value = parseFloat(this)
    let res = 0
    if (unit === 'px') {
      res = Math.round(value * (scale || 1))
    } else if (unit === '%') {
      res = Math.round((value * baseSize) / 100)
    }
    return res
  }
}
</script>
<style scoped>
.canvas {
  position: fixed;
  top: 2000px;
}
</style>
