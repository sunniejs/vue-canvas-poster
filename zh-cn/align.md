## 设置对齐方式

你可以为文字，图片，矩形，二维码设置边框。

| 属性         | 属性   | 说明                                                           | 默认                   |
| ------------ | ------ | ------------------------------------------------------------ | --------------------- |
| align        | String | 对齐方式，`left` `center` 'right`                              | 非必填，默认为 `left`   |

#### 举例

<details><summary>例子代码（点击展开）</summary><br>

```javascript
return {
    width: '654px',
    height: '1000px',
    background: '#eee',
    views: [
        {
            type: 'rect',
            css: {
                top: '40px',
                left: '327px',
                color: 'rgba(255, 0, 0, 0.5)',
                width: '5px',
                height: '500px'
            }
        },
        {
            type: 'image',
            url: 'https://www.sunniejs.cn/static/avatar.png',
            css: {
                top: '40px',
                left: '327px',
                width: '100px',
                height: '100px'
            }
        },
        {
            type: 'qrcode',
            content: 'https://github.com/sunniejs/vue-canvas-poster',
            css: {
                top: '180px',
                left: '327px',
                width: '120px',
                height: '120px'
            }
        },
        {
            type: 'text',
            text: "align: 'left' 或者不写",
            css: {
                top: '320px',
                left: '327px',
                fontSize: '30px'
            }
        },
        {
            type: 'text',
            text: "align: 'right'",
            css: {
                top: '370px',
                left: '327px',
                align: 'right',
                fontSize: '30px'
            }
        },
        {
            type: 'text',
            text: "align: 'center'",
            css: {
                top: '420px',
                left: '327px',
                align: 'center',
                fontSize: '30px'
            }
        },
        {
            type: 'text',
            text: "在多行的情况下，align 会影响内部 text 的对齐，比如这边设置 align: 'center'",
            css: {
                top: '480px',
                right: '327px',
                width: '400px',
                align: 'center',
                fontSize: '30px'
            }
        }
    ]
}
```

</details>

#### 效果

![iamge](../_images/align.png)
