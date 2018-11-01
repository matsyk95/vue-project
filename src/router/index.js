import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Films from './Films'
import VueResource from 'vue-resource'
Vue.use(Router)
Vue.use(VueResource)
Vue.use(Vuex)

import MoviesRoutes from './films';
import HomeRoutes from './home';
import AdminRoutes from './admin';
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Films',
      component: Films

    }
  ]
})
