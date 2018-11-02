import Vue from 'vue'
import Vuex from 'vuex'

import {filmsActions} from './actions'
import {filmsMutations} from './mutations'
import {filmsGetter} from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  user: {
    loggedIn: false,
    accountType: 'USER'
  },
  state: {
    users: [],
//    groups: [],
    films: []
//    languages: []
  },
  getters: Object.assign({}, filmsGetter),
  actions: Object.assign({}, filmsActions),
  mutations: Object.assign({}, filmsMutations)
})
