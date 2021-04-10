import Vue from 'vue'
import App from './App.vue'
import router from './vue-router/router'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
