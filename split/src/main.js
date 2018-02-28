import Vue from 'vue'
import store from './store/'
import FastClick from 'fastclick'
import router from 'router'

import App from './App'

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
