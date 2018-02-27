import Vue from 'vue'
import store from '../store/'
import Router from 'vue-router'
import {isWeixin} from '../common/js/util'

const Login = (resolve) => {
  import('views/Login').then((module) => {
    resolve(module)
  })
}

const Auth = (resolve) => {
  import('views/Auth').then((module) => {
    resolve(module)
  })
}

const Home = (resolve) => {
  import('views/Home').then((module) => {
    resolve(module)
  })
}

const CxbjAddcar = (resolve) => {
  import('views/Cxbj_addcar').then((module) => {
    resolve(module)
  })
}

const CxbjComfirm = (resolve) => {
  import('views/Cxbj_comfirm').then((module) => {
    resolve(module)
  })
}

const Uploadcar = (resolve) => {
  import('views/Uploadcar').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/auth',
      name: 'auth',
      component: Auth
    }, {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requireLogin: true }
    }, {
      path: '/cxbj_addcar',
      component: CxbjAddcar
    }, {
      path: '/cxbj_comfirm',
      component: CxbjComfirm
    }, {
      path: '/uploadcar',
      component: Uploadcar
    }
  ]
})

router.afterEach(function (to) {
  setTimeout(function () {
    store.commit('updateLoadingStatus', {isLoading: false})
  }, 100)
})

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
  if (to.meta.requireLogin) {
    let wallettel = localStorage.getItem('proxy_uid')
    if (wallettel) {
      next()
    } else {
      if (isWeixin()) {
        next({
          path: '/auth'
        })
      } else {
        next({
          path: '/login'
        })
      }
    }
  } else {
    next()
  }
})

export default router
