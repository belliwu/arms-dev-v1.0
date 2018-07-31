import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/layout/Home'
import TestPage from '@/components/TestPage'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
