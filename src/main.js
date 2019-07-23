import Vue from 'vue'
import App from './App.vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VueKonva from 'vue-konva'

Vue.config.productionTip = false
Vue.use(Viewer)
Vue.use(VueKonva)

new Vue({
  render: h => h(App),
}).$mount('#app')
