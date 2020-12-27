## 绘制文本

| CSS 属性名称   | 属性   | 说明                                                                                                            | 默认值              |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| fontSize       | String | 字体大小                                                                                                        | 20px                |
| color          | String | 字体颜色                                                                                                        | black               |
| width          | String | 换行宽度，当文字长度大于 width，换行                                                                            | 无                  |
| maxLines       | Number | 最大行数                                                                                                        | 不限，根据 width 来 |
| lineHeight     | String | 行高（上下两行文字 baseline 的距离）                                                                            | fontSize 大小       |
| fontWeight     | String | 字体粗细。 'normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900' | normal         |
| textDecoration | String | 文本修饰，支持 underline、 overline、 line-through，也可组合使用                                                | 无效果              |
| textStyle      | String | fill： 填充样式，stroke：镂空样式                                                                               | fill                |
| fontFamily     | String | 字体，需引入字体                                                                                                | sans-serif          |
| background     | String | 文字背景颜色                                                                                                    | 无                  |
| padding        | String | 文字背景颜色边际与文字间距                                                                                      | 0px                 |
| textAlign      | String | 文字的对齐方式，分为 left, center, right，view 的对齐方式请看 align 属性                                        | left                |
| textIndent     | String | 文字首行缩进                                                                                                  | 0px           |

**注意：**

设置 `maxLines`属性同时需要设置`width`属性,样式按照文本溢出处理， 未展示内容...

#### 举例

<details><summary>例子代码（点击展开）</summary><br>

```javascript
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
                    fontSize: '40px',
                    textIndent: '20px'
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
```

</details>

#### 效果

![text](../_images/text.png)
