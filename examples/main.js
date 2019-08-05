import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import vueCanvasPoster from '../src/lib/index'
// 注册组件库
Vue.use(vueCanvasPoster)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
