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
        url: 'https://imgs.solui.cn/avatar.png',
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
      // 本地图片
      {
        type: 'image',
        url: require('./assets/slogen.png'),
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
