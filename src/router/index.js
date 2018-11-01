import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vuex from 'vuex'
import FilmsRoutes from './films'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    }
  ]
})
