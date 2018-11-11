import Vue from 'vue'
import Vuex from 'vuex'

import {filmsActions, userActions} from './actions'
import {filmsMutations, userMutations} from './mutations'
import {filmsGetter, userGetter, userGetters} from './getters'

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
  getters: Object.assign({}, filmsGetter, userGetter, userGetters),
  actions: Object.assign({}, filmsActions, userActions),
  mutations: Object.assign({}, filmsMutations, userMutations)
})
