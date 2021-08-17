import { createApp } from 'vue'
import App from './App.vue'
// 导入组件库
import VueCanvasPoster from '../src/lib/index'
// 注册组件库
const app = createApp(App)
app.use(VueCanvasPoster)
app.mount('#app')
