import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Invisible from '@/components/Invisible'
import Critique from '@/components/Critique'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/invisible',
      name: 'Invisible',
      component: Invisible
    },
    {
      path: '/critique',
      name: 'Critique',
      component: Critique
    }
  ]
})
