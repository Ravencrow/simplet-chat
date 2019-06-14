import Vue from 'vue'
import { MdButton, MdField, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'

// Vue Material config
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdCard)

// App setup
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
