import Vue from 'vue'
import store from './store/'
import FastClick from 'fastclick'
import router from 'router'
import infiniteScroll from 'vue-infinite-scroll'

import App from './App'
require('common/js/util')

FastClick.attach(document.body)
Vue.use(infiniteScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
