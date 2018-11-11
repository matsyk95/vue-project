import { API_BASE } from '../config'
import Vue from 'vue'
import {
  ALL_FILMS,
  ALL_USERS,
  LOG_IN_USER
} from '@/store/mutations_type'

export const filmsActions = {
  allFilms ({commit}) {
    Vue.http.get(`${API_BASE}/films`).then((response) => {
      if (response.status === 200) {
        commit(ALL_FILMS, response.data)
      }
    })
  }
}
//  Vue.http.get(`${API_BASE}/films`).then((response)
// users
export const userActions = {
  allUsers ({commit}) {
    Vue.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q=Warsaw`).then((response) => {
      if (response.status === 200) {
        commit(ALL_USERS, response.data)
      }
    })
  },
  logIn ({ commit }, payload) {
    return Vue.http.post(`${API_BASE}/login`, {}, {
      headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, Authorization',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Type': 'application/json'
      },
      credentials: true,
      params: {
        username: payload.username,
        password: payload.password
      }
    }).then((response) => {
      if (response.status === 200) {
        commit(LOG_IN_USER)
      }
    })
  }
}
