## 绘制二维码 qrcode

设置 类型 `type` ,内容 `content` 链接。  
同样二维码可以设置颜色，边框等属性。

| CSS 属性名称 | 属性   | 说明       | 默认值 |
| ------------ | ------ | ---------- | ------ |
| color        | String | 二维码颜色 | black  |
| width        | String | 二维码宽度 | 无     |
| height       | String | 二维码高度 | 无     |

#### 举例

<details><summary>例子代码（点击展开）</summary><br>

```javascript
return {
  width: '654px',
  height: '1000px',
  background: '#eee',
  views: [
    {
      type: 'qrcode',
      content: 'https://github.com/sunniejs/vue-canvas-poster',
      css: {
        top: '50px',
        left: '26px',
        color: '#000',
        width: '130px',
        height: '130px'
      }
    }
  ]
}
```

</details>
