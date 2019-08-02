import canvas from './canvas-poster'
const myPlugin = {
  install(Vue, options) {
    Vue.component('canvas-poster', canvas)
  }
}

export default myPlugin
