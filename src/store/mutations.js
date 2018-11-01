import {
  ALL_FILMS,
  ALL_USERS,
  LOG_IN_USER,
  CHECK_LOGIN
}from './mutation_types';
//films mutattion
export const filmsMutations = {
  [ALL_FILMS] (state, payload) {
    state.films = payload;
  }
}

//user mutatuon
export const userMutations = {
  [ALL_USERS](state, payload) {
    state.users = payload;
  },
  [LOG_IN_USER]: (state) => {
    state.user.loggedIn = true;
  },
  [CHECK_LOGIN]: (state, payload) => {
    if (payload instanceof Object) {
      state.user.accountType = payload.authorities[0].authority;
      state.user.name = payload.name;
      state.user.loggedIn = true;
    }
  },
  /*
  [LOG_OUT_USER]: (state) => {
    state.user.loggedIn = false;
    state.user.accountType = 'USER';
    state.user.name = '';
    state.user.reservations = [];
  },*/

};
