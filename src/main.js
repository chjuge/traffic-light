import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Vue.use(VueRouter),
}).$mount('#app')
