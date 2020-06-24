import VueCanvasPoster from './canvas-poster'

export function install(Vue) {
  Vue.component('vue-canvas-poster', VueCanvasPoster)
}

export { VueCanvasPoster }

const myPlugin = {
  install
}

export default myPlugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(myPlugin)
}
