# vue-canvas-poster

vue 组件-简单属性画 Canvas 图
<a href="https://www.npmjs.com/package/vue-canvas-poster">
<img src="https://img.shields.io/npm/v/vue-canvas-poster.svg?style=flat" alt="npm"></a>

## 概述

一个通过 css 属性画 canvas 图片的轻量级的 vue 组件
(A lightweight vue component that draws canvas images via css properties.)

具有如下特性：

- 绘制文本(换行、超出内容省略号、中划线、下划线、文本加粗)
- 绘制图片(圆角、旋转、边框)
- 绘制矩形(圆角、旋转、边框)
- 绘制二维码
- 渐变

## 升级说明

V1.0.0 增加了很多特性，新老版本不兼容，请谨慎升级，老版本不在维护，如果你用的是老版本的请移步 [0.1.16](https://github.com/sunniejs/vue_canvas_poster/tree/0.1.16)

### 运行例子

git clone https://github.com/sunniejs/vue_canvas_poster.git

npm i

npm run serve

## 生成效果

<img width="300" src="https://github.com/sunniejs/vue_canvas_poster/blob/master/examples/assets/demo.png"/>
 

## 安装

#### 通过 npm 安装

```

# npm

npm i vue-canvas-poster --save

```

## 使用组件

template

```html
 <vue-canvas-poster  :widthPixels="1000" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
```

```javascript
// 页面
import { vueCanvasPoster } from 'vue-canvas-poster'

components: {
  vueCanvasPoster
}

// 全局注册
import Vue from 'vue'
import CanvasPoster from 'vue-canvas-poster'
Vue.use(CanvasPoster)

```
<details><summary>例子代码（点击展开）</summary><br>

```
   return {
        width: '550px',
        height: '876px',
        background: '#f4f5f7',
        views: [
            {
                type: 'image',
                url: require('./assets/avatar.jpg'),
                css: {
                    top: '20px',
                    left: '36px',
                    borderRadius: '40px',
                    width: '80px',
                    height: '80px',
                },
            },

            {
                type: 'text',
                text: '乖摸摸头的小店,我设置了maxLines为1',
                css: {
                    top: '48px',
                    left: '136px',
                    width: '360px',
                    maxLines: 1,
                    fontSize: '26px',
                },
            },
            {
                type: 'rect',
                css: {
                    top: '120px',
                    left: '12px',
                    color: '#fff',
                    width: '526px',
                    height: '540px',
                    borderRadius: '10px',
                },
            },
            {
                type: 'image',
                url: require('./assets/1.jpg'),
                css: {
                    top: '150px',
                    left: '25px',
                    width: '332px',
                    height: '332px',
                },
            },
            {
                type: 'image',
                url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-Pink/2.jpg',
                css: {
                    top: '150px',
                    left: '364px',
                    width: '160px',
                    height: '160px',
                },
            },
            {
                type: 'image',
                url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-Pink/3.jpg',
                css: {
                    top: '320px',
                    left: '364px',
                    width: '160px',
                    height: '160px',
                },
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
                    lineHeight:'33px',
                    maxLines: 2
                },
            },
            {
                type: 'text',
                text: '劲爆价:',
                css: {
                    top: '608px',
                    left: '26px',
                    color: '#666666',
                    fontSize: '24px',
                },
            },
            {
                type: 'text',
                text: '¥39.00',
                css: {
                    top: '601px',
                    left: '116px',
                    color: '#E5463E',
                    fontSize: '36px',
                    fontWeight: 'bold',
                },
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
                    textDecoration: 'line-through',
                },
            },
            {
                type: 'rect',
                css: {
                    top: '647px',
                    left: '439px',
                    color: '#fff',
                    width: '28px',
                    height: '28px',
                    rotate: 45,
                },
            },
            {
                type: 'text',
                text: '长按或扫描二维码',
                css: {
                    fontSize: '18px',
                    color: '#999999',
                    bottom: '22px',
                    left: '385px',
                },
            },
            // 本地图片
            {
                type: 'image',
                url: require('./assets/slogen.png'),
                css: {
                    left: '26px',
                    bottom: '22px',
                    width: '218px',
                    height: '24px',
                },
            },
            {
              type: 'qrcode',
              content: 'https://github.com/sunniejs/vue_canvas_poster',
              css: {
                  bottom: '50px',
                  right: '26px',
                  color: '#000',
                  width: '130px',
                  height: '130px',
              },
          },
        ],
    }
```
</details>


## 规范

Canvas  需要根据一定的规范来进行图片绘制，当然比直接画canvas简单的多。 

### 调色板属性

一个调色板首先需要给予一些整体属性

```
background: 可以是颜色值，也可以为网络图片的链接，默认为白色，支持渐变色
width: 宽度
height: 高度
borderRadius: 边框的圆角（该属性也同样适用于子 view）
views: 里面承载子 view
```

### View 属性

当我们把整体的调色板属性构建起来后，里面就可以添加子 View 来进行绘制了。

| type   | 内容    | description                    | 自有css                                                      |
| ------ | ------- | ------------------------------ | ------------------------------------------------------------ |
| image  | url     | 表示图片资源的地址，本地或网络 | 见 image 小节                                                |
| text   | text    | 文本的内容                     | 见 text 小节                                                 |
| rect   | 无      | 矩形                           | color: 颜色，支持渐变色                                      |
| qrcode | content | 画二维码                       | background:  背景颜色（默认为透明色）color: 二维码颜色（默认黑色） |

#### image

   image 可以设置成本地图片或者网络图片， 本地用require()引入图片。
   并且如果未设置 image 的长宽，则长宽的属性值会默认设为auto。 

| 属性名称 | 说明                 | 默认值     |
| -------- | -------------------- | ---------- |
| width    | image的宽度        | auto       |
| height   | image的高度        | auto       |
| mode     | 图片裁剪、缩放的模式 | aspectFill |

**scaleToFill**：不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素

**aspectFill**：保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。

**注：mode 属性和小程序 image 的 mode 属性功能一致，只是支持的类型只有两种，且默认值不同。 当 width 或 height 属性设置为 auto 时，mode 属性失效**

#### text

因为 text 的特殊性，此处对 text 进行单独说明。

| 属性名称       | 说明                                                         | 默认值              |
| -------------- | ------------------------------------------------------------ | ------------------- |
| fontSize       | 字体大小                                                     | 20px               |
| color          | 字体颜色                                                     | black               |
| maxLines       | 最大行数                                                     | 不限，根据 width 来 |
| lineHeight     | 行高（上下两行文字baseline的距离）                           | fontSize 大小       |
| fontWeight     | 字体粗细。仅支持 normal, bold                                | normal              |
| textDecoration | 文本修饰，支持 underline、 overline、 line-through，也可组合使用 | 无效果              |
| textStyle      | fill： 填充样式，stroke：镂空样式                            | fill                |
| fontFamily     | 字体  | sans-serif          |
| background     | 文字背景颜色                                               | 无       |
| padding        | 文字背景颜色边际与文字间距                                       | 0px      |
| textAlign | 文字的对齐方式，分为 left, center, right，view 的对齐方式请看 align 属性 | left |

当文字设置 width 属性后，则文字布局的最大宽度不会超过该 width 。如果内容超过 width，则会进行换行，如果此时未设置 maxLines 属性，则会把所有内容进行换行处理，行数由内容和 width 决定。如果此时设置了 maxLines 属性，则最大展示所设置的行数，如果还有多余内容未展示出来，则后面会带上 ... 。


### 布局属性

以上 View ，除去自己拥有的特别属性外，还有以下的通用布局属性

| 属性                     | 说明                                           | 默认                  |
| ------------------------ | ---------------------------------------------- | --------------------- |
| rotate                   | 旋转，按照顺时针旋转的度数                     | 不旋转                |
| width、height            | view 的宽度和高度，其中 image 和 text 可不设置 |                       |
| top、right、bottom、left | 如 css 中为 absolute 布局时的作用，可为 负值   | 默认 top 和 left 为 0 |


#### 相对布局方法

很多人有获得文本宽度的需求，因为文本宽度随着字数不同而动态变化，如果想在文本后面加个图标，那么我们就需要获得文本宽度。 解决方案如下：

```
1，首先你需要为检测长度的文本添加一个 id。如下
{
  id: 'my-text-id',
  type: 'text',
  
2，然后在后面的 view 中，你可以在 left 和 right 属性中使用这个id。如下
left: ['10px', 'my-text-id', 比例] 
表示布局在距离左边（10px + 该text文本宽度 * 比例） 的距离，比例默认为 1，可省去，你也可以使用负数或小数来做计算，最终的 left 会加上文本宽度乘以该数的值。

注意：比例一定为一个 number
```
如果想获得高度，top 也支持上述用法，并且除文本外，你可以对任何 view 设置一个 id，然后使用上述方法进行相对布局。

**注：相对布局的那个 view 代码一定需要在被相对的 view 的下面。**

#### border 类型

| 属性         | 说明                                                         | 默认                   |
| ------------ | ------------------------------------------------------------ | ---------------------- |
| borderRadius | 边界圆角程度，如果是正方形布局，该属性为一半宽或高时，则为圆形 | 0                      |
| borderWidth  | 边界宽度，外边界                                             | 必设值，否则无边框效果 |
| borderColor  | 边框颜色                                                     | black                  |


#### align

Painter 的 align 类型与 css 中的 align 有些许不同。在 Painter 中 align 表示 view 本身的对齐方式，而不像 css 中表示对其子 view 的操作。align 可以作用在 Painter 支持的所有 view 上。它以设置的 left、top、right、bottom 的位置为基准，然后做不同的对齐操作。并且 align 在文字多行情况下，会影响多行文字的对齐方式。

**注意：如果布局使用了 right 确定位置，则该 view 会默认右对齐布局，但此时文字还是从左边绘制。**


### CSS3 支持

#### shadow

 shadow 可以同时修饰 image、rect、text、qrcode 等 。在修饰 text 时则相当于 text-shadow；修饰 image 和 rect 时相当于 box-shadow；修饰 qrcode 时，则相当于二维码有效区域的投影。



使用方法：

```
shadow: 'h-shadow v-shadow blur color';
h-shadow: 必需。水平阴影的位置。允许负值。
v-shadow: 必需。垂直阴影的位置。允许负值。
blur: 必需。模糊的距离。
color: 必需。阴影的颜色。
```
#### 渐变色支持

你可以在画布的 background 属性或者 rect 的 color 属性中使用以下方式实现 css 3 的渐变色，其中 radial-gradient 渐变的圆心为 view 中点，半径为最长边，目前不支持自己设置。

```
linear-gradient(-135deg, blue 0%, rgba(18, 52, 86, 1) 20%, #987 80%)

radial-gradient(rgba(0, 0, 0, 0) 5%, #0ff 15%, #f0f 60%)
```

**！！！注意：颜色后面的百分比一定得写。**

## 事件

### success

返回生成 base64 图片的本地 url,设置 src

```javascript
  methods: {
    success(src) {
      // 设置img的src
      this.src = src
    }
  }
```

### fail

返回失败信息

```javascript
 fail(err) {
      console.log('fail', err)
    }
```
## Thanks

感谢 [Painter](https://github.com/Kujiale-Mobile/Painter) 是根据该项目进行修改的，文档有不明白的可以查看 [Painter](https://github.com/Kujiale-Mobile/Painter)

## 问题反馈

有什么问题可以提 issue 或扫描微信二维码跟我联系，项目持续优化，加群获取最新更新消息

[提 issue](https://github.com/sunniejs/vue_canvas_poster/issues/new)

## 关于我

获取更多技术相关文章，关注公众号”前端女塾“。
回复加群，即可加入”前端仙女群“
 <p>
  <img src="./static/gognzhonghao.jpg" width="256" style="display:inline;">
</p>
扫描添加下方的微信并备注 Sol 加交流群，交流学习，及时获取代码最新动态。

<p>
  <img src="./static/me.png" width="256" style="display:inline;">
</p>
 
 
如果对你有帮助送我一颗小星星（づ￣3￣）づ╭❤～
