# vue-canvas-poster

vue 组件-简单属性画 Canvas 图
<a href="https://www.npmjs.com/package/vue-canvas-poster">
<img src="https://img.shields.io/npm/v/vue-canvas-poster.svg?style=flat" alt="npm"></a>

## 概述

一个通过 css 属性画 canvas 图片的轻量级的 vue 组件
(A lightweight vue components use canvas draw image by css properties.)

具有如下特性：

- 绘制文本(换行、超出内容省略号、中划线、下划线、文本加粗)
- 绘制图片(圆角、旋转)
- 绘制矩形(圆角、旋转)
- 绘制二维码

## 生成效果

<img width="300" src="https://image-static.segmentfault.com/368/423/3684237441-5d47dc1cebb1f_articlex"/>

## 安装

#### 通过 npm 安装

```

# npm

npm i vue-canvas-poster --save

```

## 使用组件

template

```html
<vue-canvas-poster :painting="painting" @success="success"></vue-canvas-poster>
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

// 直接引入
 script src='../src/lib/index.js'
```

<details><summary>painting（点击展开）</summary><br>

```javascript

     {
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
            left: 136,
            width: 360,
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
            url: 'https://tgoods.top1buyer.com/res/testfile/imgs/20190702180744/MR9600-Pink/3.jpg',
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
            left: 116
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
```

  </details>

## 组件参数解释

###

| 字段   | 类型                     | 必填 | 描述     |
| ------ | ------------------------ | ---- | -------- |
| width  | Number                   | 是   | 画布宽度 |
| height | Number                   | 是   | 画布高度 |
| views  | Object Array（对象数组） | 是   | 看下文   |

### rect(矩形，线条) 字段

| 字段名     | 类型   | 默认值  | 描述                                |
| ---------- | ------ | ------- | ----------------------------------- |
| top        | Number | 0       | 距离顶部的距离                      |
| left       | Number | 0       | 距离左侧的距离                      |
| width      | Number | 0       | 宽度                                |
| height     | Number | 0       | 高度                                |
| background | String | 'white' | 背景颜色                            |
| radius     | Number | 0       | 圆角                                |
| deg        | Number | 0       | 旋转角度 (目前不能跟 radius 一起用) |

### text (文本) 字段

| 字段名         | 类型    | 默认值 | 描述                                                        |
| -------------- | ------- | ------ | ----------------------------------------------------------- |
| top            | Number  | 0      | 距离顶部的距离                                              |
| left           | Number  | 0      | 距离左侧的距离                                              |
| content        | String  | ''     | 文本内容                                                    |
| fontSize       | Number  | 0      | 文字大小                                                    |
| color          | String  | black  | 颜色                                                        |
| lineHeight     | Number  | 20     | 行高，多行起作用                                            |
| breakWord      | Boolean | false  | 换行                                                        |
| MaxLineNumber  | Int     | 2      | 根据宽度换行 ,需要设置 breakWord: true ,超出行隐藏显示为... |
| width          | Number  |        | 文本宽度                                                    |
| bolder         | String  | false  | 加粗                                                        |
| textDecoration | String  | none   | underline(下划线)、line-through(贯穿线)                     |

### image (图片) 字段

| 字段   | 类型   | 默认值 | 描述                                      |
| ------ | ------ | ------ | ----------------------------------------- |
| top    | Number | 0      | 距离顶部的距离                            |
| left   | Number | 0      | 距离左侧的距离                            |
| url    | String | ''     | 图片地址,也支持本地图片如：/images/1.jpeg |
| width  | Number | 0      | 宽度                                      |
| height | Number | 0      | 高度                                      |
| radius | Number | 0      | 圆角                                      |
| deg    | Number | 0      | 旋转角度 (目前不能跟 radius 一起用)       |

### qrcode (二维码) 字段

| 字段       | 类型   | 默认值 | 描述           |
| ---------- | ------ | ------ | -------------- |
| top        | Number | 0      | 距离顶部的距离 |
| left       | Number | 0      | 距离左侧的距离 |
| content    | String | ''     | 链接地址       |
| width      | Number | 0      | 宽度           |
| height     | Number | 0      | 高度           |
| background | String | ''     | 背景色         |
| color      | String | black  | 二维码颜色     |

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

## 问题反馈

有什么问题可以提 issue 或扫描微信二维码跟我联系，项目持续优化，加群获取最新更新消息

[提 issue](https://github.com/sunnie1992/vue_canvas_poster/issues/new)

## 关于我

您可以扫描添加下方的微信并备注 Soul 加交流群，给我提意见，交流学习。

<p>
  <img src="https://tweapp.top1buyer.com/mine.jpg" width="256" style="display:inline;">
</p>
 
如果对你有帮助送我一颗小星星（づ￣3￣）づ╭❤～
