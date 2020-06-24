#### 如何使用

**1. 通过 npm 安装**

```
npm i vue-canvas-poster --save

```

**2.引用组件库**

方法一 ：`main.js` 中全局注册

```javascript
import Vue from 'vue'
// 导入组件库
import VueCanvasPoster from 'vue-canvas-poster'
// 注册组件库
Vue.use(VueCanvasPoster)
```

方法二 ：在页面里引入

```html
<script>
    import { VueCanvasPoster } from 'vue-canvas-poster'
    export default {
        components: {
            VueCanvasPoster,
        },
    }
</script>
```

**3.使用组件**

```html
<template>
    <div>
        <vue-canvas-poster :widthPixels="1000" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                painting: {
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
                        // ....
                    ],
                },
            }
        },
        methods: {
            success(src) {
                console.log(src)
            },
            fail(err) {
                console.log('fail', err)
            },
        },
    }
</script>
```

### 本地启动项目

```bash

git clone https://github.com/sunniejs/vue-canvas-poster.git

cd vue-canvas-poster

npm install

npm run serve
```
