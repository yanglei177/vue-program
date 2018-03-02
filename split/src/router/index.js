import Vue from 'vue'
import store from '../store/'
import Router from 'vue-router'

const Home = (resolve) => {
  import('../views/Home').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requireLogin: true }
    }
  ]
})

// router.afterEach(function (to) {
//   setTimeout(function () {
//     store.commit('updateLoadingStatus', {isLoading: false})
//   }, 100)
// })

// router.beforeEach((to, from, next) => {
//   store.commit('updateLoadingStatus', {isLoading: true})
//   next()
//   if (to.meta.requireLogin) {
//     let wallettel = localStorage.getItem('wallettel')
//     if (wallettel) {
//       next()
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
