import Vue from 'vue'
import App from './App.vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VueKonva from 'vue-konva'
import VueZoomer from 'vue-zoomer'
import 'vue-zoomer/dist/vue-zoomer.css'

Vue.config.productionTip = false
Vue.use(Viewer)
Vue.use(VueKonva)
Vue.use(VueZoomer)

new Vue({
  render: h => h(App),
}).$mount('#app')
