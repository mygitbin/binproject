import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newsman',
      name: 'newsman',
      component: () => import('./views/newsman.vue'),
    },
    {
      path: '/newsadd',
      name: 'newsadd',
      component: () => import('./views/newsadd.vue')
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: () => import('./views/newsDetail.vue')
    }
  ]
})
