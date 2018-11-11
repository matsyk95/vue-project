import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Films from '../pages/Films'
import VueResource from 'vue-resource'
Vue.use(Router)
Vue.use(VueResource)
Vue.use(Vuex)
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Films',
      component: Films

    }
  ]
})
