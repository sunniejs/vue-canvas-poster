## 事件

| 方法名  | 属性     | 说明                           | 默认值 |
| ------- | -------- | ------------------------------ | ------ |
| success | Function | 成功回调 ,返回图片 base64 链接 |        |
| fail    | Function | 失败回调 ,返回错误信息         |        |

### 举例

```html
<template>
  <div>
    <vue-canvas-poster :widthPixels="1000" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
  </div>
</template>
<script>
  export default {
    methods: {
      // 返回生成 base64 图片的本地 url,设置 src
      success(src) {
        // 设置img的src
        console.log(src)
      },
      // 返回失败信息
      fail(err) {
        console.log('fail', err)
      }
    }
  }
</script>
```
