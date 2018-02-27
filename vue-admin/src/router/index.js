import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import Index from 'views/Index'
import ReportFroms from 'views/ReportFroms'
import CarManage from 'views/CarManage'
import IndexHome from 'views/IndexHome'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          component: IndexHome
        },
        {
          path: 'carmanage',
          component: CarManage
        },
        {
          path: 'reportfroms',
          component: ReportFroms
        }
      ]
    }
  ]
})
