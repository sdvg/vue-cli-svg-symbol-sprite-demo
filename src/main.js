import Vue from 'vue'
import App from './App.vue'
import './load-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
