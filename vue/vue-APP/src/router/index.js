import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components copy/goods/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Goods',
      name: Goods,
      component: Goods
    }
  ]
})
