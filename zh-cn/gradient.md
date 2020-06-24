## 设置渐变 gradient

你可以在画布的 background 属性或者 rect 的 color 属性中使用以下方式实现 css 3 的渐变色，其中 radial-gradient 渐变的圆心为 view 中点，半径为最长边，目前不支持自己设置。

```
linear-gradient(-135deg, blue 0%, rgba(18, 52, 86, 1) 20%, #987 80%)

radial-gradient(rgba(0, 0, 0, 0) 5%, #0ff 15%, #f0f 60%)
```

**！！！注意：颜色后面的百分比一定得写。**

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
        width: '250px',
        height: '150px',
        right: '50px',
        top: '60px',
        shadow: '10px 10px 5px #888888',
        color: 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)'
      }
    }
  ]
}
```

</details>

#### 效果

![iamge](../_images/gradient.png)
