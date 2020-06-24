## 画布属性

首先我们需要为画布设置一些基础属性

| 属性名称     | 属性   | 说明                                           | 默认值 |
| ------------ | ------ | ---------------------------------------------- | ------ |
| background   | String | 背景 ： 可以是颜色值或者图片的链接，支持渐变色 | 白色   |
| width        | String | 画布的宽度，单位 px                            |        |
| height       | String | 画布的高度，单位 px                            |        |
| borderRadius | String | 边框的圆角                                     | '0px'  |
| views        | Array  | 数组，包含一系列对象，见下一节 元素 view       |        |

#### 举例

```javascript
 {
    width: '550px',
    height: '876px',
    background: '#f4f5f7',
    views: [
      // ...
    ]
 }
```
