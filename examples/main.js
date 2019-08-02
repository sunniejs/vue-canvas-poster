import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import CanvasPoster from '../src/lib/index'
// 注册组件库
Vue.use(CanvasPoster)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
