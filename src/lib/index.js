import VueCanvasPoster from './canvas-poster.vue'

export function install(app) {
  app.component('VueCanvasPoster', VueCanvasPoster)
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
