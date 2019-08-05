<template>
  <div>
    <canvas ref="canvas" :width="width" :height="height" class="canvas"></canvas>
  </div>
</template>
<script>
const QR = require('./qrcode.js');
export default {
  name: 'CanvasPoster',
  components: {},
  props: {
    painting: {
      type: Object,
      value: {}
    }
  },
  computed: {
  },
  watch: {
    painting: {
      handler: 'handlePaint',
      deep: true,
      immediate: true
    },
  },
  data() {
    return {
      showCanvas: false,
      width: 100,
      height: 100,
      imageList: [],
      isPainting: false,
      canvas: null,
      ctx: null
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.canvas = this.$refs.canvas // 指定canvas
      this.ctx = this.canvas.getContext("2d")//设置2D渲染区域
    })
  },
  methods: {
    // 开始绘图
    handlePaint(newVal, oldVal) {
      const { width, height, views } = this.painting
      this.width = width
      this.height = height
      const inter = setInterval(() => {
        if (this.ctx) {
          clearInterval(inter)
          // 重新绘图
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
          this.ctx.save()
          this.getImages(views)
        }
      }, 100)
    },
    //加载图片
    loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossorigin', 'anonymous');
        img.onload = () => resolve(img)
        img.onerror = () => reject(`下载图片失败 ${url}`)
        img.src = url
      })
    },
    // 加载图片
    getImages(views) {
      const imageList = []
      for (let i = 0; i < views.length; i++) {
        if (views[i].type === 'image') {
          imageList.push(this.loadImage(views[i].url))
        }
      }
      Promise.all(imageList).then(res => {
        this.imageList = res
        this.startPainting()
      })
    },
    startPainting() {
      const { views } = this.painting
      for (let i = 0, imageIndex = 0; i < views.length; i++) {
        if (views[i].type === 'image') {
          this.drawImage({
            ...views[i],
            img: this.imageList[imageIndex]
          })
          imageIndex++
        } else if (views[i].type === 'text') {
          this.drawText(views[i])
        } else if (views[i].type === 'rect') {
          this.drawRect(views[i])
        } else if (views[i].type === 'qrcode') {
          this.drawQRCode(views[i])
        }
      }
      var imageBase64 = this.canvas.toDataURL("image/png")
      this.$emit('success', imageBase64)

    },
    /**
      * 根据 radius 进行裁减
     */
    _doClip(left, top, width, height, radius) {
      this.ctx.beginPath()
      // 左上角 
      this.ctx.arc(left + radius, top + radius, radius, Math.PI, Math.PI * 1.5)
      // border-top
      this.ctx.moveTo(left + radius, top)
      this.ctx.lineTo(left + width - radius, top)
      this.ctx.lineTo(left + width, top + radius)
      // 右上角
      this.ctx.arc(left + width - radius, top + radius, radius, Math.PI * 1.5, Math.PI * 2)
      // border-right 
      this.ctx.lineTo(left + width, top + height - radius)
      this.ctx.lineTo(left + width - radius, top + height)
      // 右下角 
      this.ctx.arc(left + width - radius, top + height - radius, radius, 0, Math.PI * 0.5)
      // border-bottom
      this.ctx.lineTo(left + radius, top + height); this.ctx.lineTo(left, top + height - radius)
      // 左下角 
      this.ctx.arc(left + radius, top + height - radius, radius, Math.PI * 0.5, Math.PI)
      // border-left
      this.ctx.lineTo(left, top + radius);
      this.ctx.lineTo(left + radius, top)
      // 这里是使用 fill 还是 stroke都可以，二选一即可，但是需要与上面对应
      this.ctx.fill()
      this.ctx.closePath()

    },
    _doRoate(left, top, height, width, deg) {
      this.ctx.translate(left + width / 2, top + height / 2)
      this.ctx.rotate(deg * Math.PI / 180)
    },
    drawImage(params) {
      this.ctx.save()
      const { img, top = 0, left = 0, width = 0, height = 0, radius = 0, deg = 0 } = params
      if (radius) {
        this._doClip(left, top, width, height, radius)
        this.ctx.clip()
        this.ctx.drawImage(img, left, top, width, height)
      } else {
        if (deg !== 0) {
          this._doRoate(left, top, height, width, deg)
          this.ctx.drawImage(img, -width / 2, -height / 2, width, height)
        } else {
          this.ctx.drawImage(img, left, top, width, height)
        }
      }
      this.ctx.restore()
    },
    drawQRCode(params) {
      this.ctx.save()
      const { width = 0, height = 0, left = 0, top = 0, content, background, color } = params
      console.log(width, height, content, background, color)
      QR.api.draw(content, this.ctx, left, top, width, height, background, color)
      this.ctx.restore()
    },

    // 写字
    drawText(params) {
      this.ctx.save()
      const {
        MaxLineNumber = 2,
        breakWord = false,
        color = 'black',
        content = '',
        fontSize = 16,
        top = 0,
        left = 0,
        lineHeight = 20,
        textAlign = 'left',
        width,
        bolder = false,
        textDecoration = 'none'
      } = params

      this.ctx.beginPath()
      this.ctx.textBaseline = 'top'
      this.ctx.textAlign = textAlign
      this.ctx.fillStyle = color
      //  this.ctx.font = "normal 36px Arial";
      this.ctx.font = `normal ${fontSize}px Arial`;
      if (!breakWord) {
        this.ctx.fillText(content, left, top)
        this.drawTextLine(left, top, textDecoration, color, fontSize, content)
      } else {
        let fillText = ''
        let fillTop = top
        let lineNum = 1
        for (let i = 0; i < content.length; i++) {
          fillText += [content[i]]
          if (this.ctx.measureText(fillText).width > width) {
            if (lineNum === MaxLineNumber) {
              if (i !== content.length) {
                fillText = fillText.substring(0, fillText.length - 1) + '...'
                this.ctx.fillText(fillText, left, fillTop)
                this.drawTextLine(left, fillTop, textDecoration, color, fontSize, fillText)
                fillText = ''
                break
              }
            }
            this.ctx.fillText(fillText, left, fillTop)
            this.drawTextLine(left, fillTop, textDecoration, color, fontSize, fillText)
            fillText = ''
            fillTop += lineHeight
            lineNum++
          }
        }
        this.ctx.fillText(fillText, left, fillTop)
        this.drawTextLine(left, fillTop, textDecoration, color, fontSize, fillText)
      }
      this.ctx.restore()
      if (bolder) {
        this.drawText({
          ...params,
          left: left + 0.3,
          top: top + 0.3,
          bolder: false,
          textDecoration: 'none'
        })
      }
    },
    // 画直线
    drawTextLine(left, top, textDecoration, color, fontSize, content) {
      if (textDecoration === 'underline') {
        this.drawRect({
          background: color,
          top: top + fontSize * 1.2,
          left: left - 1,
          width: this.ctx.measureText(content).width + 3,
          height: 1
        })
      } else if (textDecoration === 'line-through') {
        this.drawRect({
          background: color,
          top: top + fontSize * 0.4,
          left: left - 1,
          width: this.ctx.measureText(content).width + 3,
          height: 1
        })
      }
    },
    _getAngle(angle) {
      return Number(angle) * Math.PI / 180;
    },
    // 画矩形
    drawRect(params) {
      this.ctx.save()
      const { background = 'white', top = 0, left = 0, width = 0, height = 0, radius = 0, deg = 0 } = params
      this.ctx.fillStyle = background
      if (radius) {
        this._doClip(left, top, width, height, radius)
      } else {
        if (deg !== 0) {
          this._doRoate(left, top, height, width, deg)
          this.ctx.fillRect(-width / 2, -height / 2, width, height)
        } else {
          this.ctx.fillRect(left, top, width, height)
        }
        // this.ctx.fillRect(left, top, width, height)
      }
      this.ctx.restore()
    },

  }
}

</script>
<style  scoped>
.canvas {
  position: fixed;
  top: 2000px;
}
</style>