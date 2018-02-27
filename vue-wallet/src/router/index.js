import Vue from 'vue'
import store from '../store/'
import Router from 'vue-router'

const Home = (resolve) => {
  import('views/Home').then((module) => {
    resolve(module)
  })
}

const Login = (resolve) => {
  import('views/Login').then((module) => {
    resolve(module)
  })
}

const News = (resolve) => {
  import('views/News').then((module) => {
    resolve(module)
  })
}

const Person = (resolve) => {
  import('views/Person').then((module) => {
    resolve(module)
  })
}

const Realname = (resolve) => {
  import('views/Realname').then((module) => {
    resolve(module)
  })
}

const Infoperfect = (resolve) => {
  import('views/Infoperfect').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/realname',
      component: Realname
    }, {
      path: '/infoperfect',
      component: Infoperfect
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/person',
      name: 'person',
      component: Person,
      meta: { requireLogin: true }
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
    let wallettel = localStorage.getItem('wallettel')
    if (wallettel) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
