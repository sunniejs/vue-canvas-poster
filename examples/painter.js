// 海报图
export function drawPoster(data) {
  return new Promise(function(resolve) {
    switch (data.type) {
      case 'pro':
        resolve(poster(data))
        break
      case 'base':
        resolve(drawBasePoster(data))
        break
      case 'image':
        resolve(drawImgPoster(data))
        break
      case 'text':
        resolve(drawText(data))
        break
      default:
        resolve(poster(data))
    }
  })
}
// demo 微信分享图
function poster() {
  return {
    width: '550px',
    height: '876px',
    background: '#f4f5f7',
    views: [
      {
        type: 'image',
        url: 'https://www.sunniejs.cn/assets/avatar.png',
        css: {
          top: '20px',
          left: '36px',
          borderRadius: '40px',
          width: '80px',
          height: '80px'
        }
      },

      {
        type: 'text',
        text: '乖摸摸头的小店,我设置了maxLines为1',
        css: {
          top: '48px',
          left: '136px',
          width: '360px',
          maxLines: 1,
          fontSize: '26px'
        }
      },
      {
        type: 'rect',
        css: {
          top: '120px',
          left: '12px',
          color: '#fff',
          width: '526px',
          height: '540px',
          borderRadius: '10px'
        }
      },
      {
        type: 'image',
        url: require('./assets/1.jpg'),
        css: {
          top: '150px',
          left: '25px',
          width: '332px',
          height: '332px'
        }
      },
      {
        type: 'image',
        url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-Pink/2.jpg',
        css: {
          top: '150px',
          left: '364px',
          width: '160px',
          height: '160px'
        }
      },
      {
        type: 'image',
        url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-Pink/3.jpg',
        css: {
          top: '320px',
          left: '364px',
          width: '160px',
          height: '160px'
        }
      },
      {
        type: 'text',
        text: '18987、安奈儿童装上衣条纹童装上衣条纹童装上衣 条纹童装上衣',
        css: {
          top: '507px',
          left: '25px',
          color: '#666666',
          fontSize: '22px',
          width: '450px',
          lineHeight: '33px',
          maxLines: 2
        }
      },
      {
        type: 'text',
        text: '劲爆价:',
        css: {
          top: '608px',
          left: '26px',
          color: '#666666',
          fontSize: '24px'
        }
      },
      {
        type: 'text',
        text: '¥39.00',
        css: {
          top: '601px',
          left: '116px',
          color: '#E5463E',
          fontSize: '36px',
          fontWeight: 'bold'
        }
      },
      {
        type: 'text',
        text: '¥259.00',
        css: {
          top: '609px',
          left: '243px',
          color: '#999999',
          fontSize: '26px',
          fontWeight: 'bold',
          textDecoration: 'line-through'
        }
      },
      {
        type: 'rect',
        css: {
          top: '647px',
          left: '439px',
          color: '#fff',
          width: '28px',
          height: '28px',
          rotate: 45
        }
      },
      {
        type: 'text',
        text: '长按或扫描二维码',
        css: {
          fontSize: '18px',
          color: '#999999',
          bottom: '22px',
          left: '385px'
        }
      },
      // base64
      {
        type: 'image',
        url:
          'data:image/png;base64,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',
        css: {
          left: '26px',
          bottom: '22px',
          width: '218px',
          height: '24px'
        }
      },
      {
        type: 'qrcode',
        content: 'https://github.com/sunniejs/vue-canvas-poster',
        css: {
          bottom: '50px',
          right: '26px',
          color: '#000',
          width: '130px',
          height: '130px'
        }
      }
    ]
  }
}
// image demo
function drawImgPoster() {
  return {
    width: '654px',
    height: '1000px',
    background: '#eee',
    views: [
      {
        type: 'image',
        url: require('./assets/avatar.png')
      },
      {
        type: 'text',
        text: '未设置height、width时',
        css: {
          left: '270px',
          top: '60px',
          fontSize: '30px'
        }
      },
      {
        type: 'image',
        url: require('./assets/avatar.png'),
        css: {
          width: '200px',
          height: 'auto',
          top: '250px'
        }
      },
      {
        type: 'text',
        text: '设置height为auto',
        css: {
          left: '270px',
          top: '280px',
          fontSize: '30px'
        }
      },
      {
        type: 'image',
        url: require('./assets/avatar.png'),
        css: {
          width: '200px',
          height: '200px',
          top: '430px'
        }
      },
      {
        type: 'text',
        text: "mode: 'aspectFill' 或 无",
        css: {
          left: '270px',
          fontSize: '30px',
          top: '490px'
        }
      },
      {
        type: 'image',
        url: require('./assets/avatar.png'),
        css: {
          width: '200px',
          height: '200px',
          mode: 'scaleToFill',
          top: '650px'
        }
      },
      {
        type: 'text',
        text: "mode: 'scaleToFill'",
        css: {
          left: '270px',
          top: '710px',
          fontSize: '30px'
        }
      }
    ]
  }
}
// text demo
function drawText() {
  return {
    width: '654px',
    height: '1000px',
    background: '#eee',
    views: [
      {
        type: 'text',
        text: 'overline',
        css: [
          {
            top: '50px',
            textDecoration: 'overline',
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: 'underline',
        css: [
          {
            top: '120px',
            textDecoration: 'underline',
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: 'line-through',
        css: [
          {
            top: '190px',
            textDecoration: 'line-through',
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: 'overline underline line-through',
        css: [
          {
            top: '260px',
            color: 'red',
            textDecoration: 'overline underline line-through',
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: "fontWeight: 'bold'",
        css: [
          {
            top: '330px',
            fontWeight: 'bold',
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: '我是把width设置为300px后，我就换行了',
        css: [
          {
            top: '400px',
            width: '400px',
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: '我设置了maxLines为1，看看会产生什么效果',
        css: [
          {
            top: '540px',
            width: '400px',
            maxLines: 1,
            left: '20px',
            fontSize: '40px'
          }
        ]
      },
      {
        type: 'text',
        text: "textStyle: 'stroke'",
        css: [
          {
            top: '610px',
            textStyle: 'stroke',
            fontWeight: 'bold',
            left: '20px',
            fontSize: '40px'
          }
        ]
      }
    ]
  }
}
