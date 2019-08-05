# vue-canvas-poster

vue 组件-简单属性画 Canvas 图
<a href="https://www.npmjs.com/package/vue-canvas-poster">
<img src="https://img.shields.io/npm/v/vue-canvas-poster.svg?style=flat" alt="npm"></a>

## 概述

一个通过 css 属性画 canvas 图片的轻量级的 vue 组件
(A lightweight vue components use canvas draw image by css properties.)

## 生成效果

<img width="300" src="https://github.com/sunnie1992/vue_canvas_poster/tree/master/examples/assets/demo.png"/>

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
import vueCanvasPoster from 'vue-canvas-poster'

components: {
  vueCanvasPoster
}

// or Global Install
import Vue from 'vue'
import vueCanvasPoster from 'vue-canvas-poster'
Vue.use(vueCanvasPoster)
```

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

## 问题反馈

有什么问题可以提 issue 或扫描微信二维码跟我联系

[提 issue](https://github.com/sunnie1992/vue_canvas_poster/issues/new)

## 关于我

您可以扫描添加下方的微信并备注 Soul 加交流群，给我提意见，交流学习。

<p>
  <img src="https://tweapp.top1buyer.com/mine.jpg" width="256" style="display:inline;">
</p>
 
如果对你有帮助送我一颗小星星（づ￣3￣）づ╭❤～
