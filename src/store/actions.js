import { API_BASE } from '../config';
import Vue from 'vue';

import {
  ALL_FILMS,
  ALL_USERS,
  LOG_IN_USER,
  CHECK_LOGIN,
}from './mutation-types';

//film action
export const filmsActions = {
  allFilms ({commit}) {
    Vue.http.get(`${API_BASE}/films/`).then((response) => {
      if (response.status === 200) {
        console.log(response.data())
        commit(ALL_FILMS, response.data);
      }
    });
  },
}

//user action
export const userActions = {
  allUsers({ commit }) {
    Vue.http.get(`${API_BASE}/users`).then((response) => {
      if (response.status === 200) {
        commit(ALL_USERS, response.data);
      }
    });
  },
  logIn({ commit }, payload) {
    return Vue.http.post(`${API_BASE}/users`, {}, {
      headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, Authorization',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Type': 'application/json',
      },
      credentials: true,
      params: {
        username: payload.username,
        password: payload.password,
      },
    }).then((response) => {
      if (response.status === 200) {
        commit(LOG_IN_USER);
      }
    });
  },

 /* amILoggedIn({ commit }) {
    return Vue.http.get(`${API_BASE}/accounts/my`, {
      credentials: true,
    }).then((response) => {
      if (response.status === 200) {
        commit(CHECK_LOGIN, response.data);
      }
    });
  },
  /*
  logOut({ commit }) {
    return Vue.http.post(`${API_BASE}/users`, {}, {
      credentials: true,
    }).then((response) => {
      if (response.status === 200) {
        commit(LOG_OUT_USER);
      }
    });
  },*/

};
