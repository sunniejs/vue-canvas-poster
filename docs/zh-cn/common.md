## view 属性

当我们把整体的画布属性构建起来后，里面就可以添加子 `view` 来进行绘制了。  
你可以在画布上添加文本 `text`,图片 `image`, 矩形 `rect`,二维码 `qrcode`,绘制一幅`canvas`图

| type 类型 | 内容    | 说明                           | 默认值         |
| --------- | ------- | ------------------------------ | -------------- |
| text      | text    | 文本的内容                     | 见 text 小节   |
| image     | url     | 表示图片资源的地址，本地或网络 | 见 image 小节  |
| rect      | 无      | 矩形                           |                |
| qrcode    | content | 二维码                         | 见 qrcode 小节 |

可以通过以上几种类型绘制不同元素，通过 `css` 属性设置具体样式

#### 举例

```javascript
{
  // ...
  views: [
    {
      type: 'text',
      text: 'https://imgs.solui.cn/avatar.png',
      css: {}
    },
    {
      type: 'image',
      url: 'https://imgs.solui.cn/avatar.png',
      css: {}
    },
    {
      type: 'rect',
      css: {}
    },
    {
      type: 'qrcode',
      content: 'https://imgs.solui.cn/avatar.png',
      css: {}
    }
  ]
  // ...
}
```

### 布局属性

以上 `text`,图片 `image`, 矩形 `rect`,二维码 `qrcode` 元素 view ，除去自己拥有的特别属性外，还有以下的通用布局属性

| 属性                     | 说明                                           | 默认                  |
| ------------------------ | ---------------------------------------------- | --------------------- |
| rotate                   | 旋转，按照顺时针旋转的度数                     | 不旋转                |
| width、height            | view 的宽度和高度，其中 image 和 text 可不设置 |                       |
| top、right、bottom、left | 如 css 中为 absolute 布局时的作用，可为 负值   | 默认 top 和 left 为 0 |

### 相对布局方法

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
