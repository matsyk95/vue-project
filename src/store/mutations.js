import {
  ALL_FILMS,
  ALL_USERS,
  LOG_IN_USER
} from './mutations_type'
export const filmsMutations = {
  [ALL_FILMS] (state, payload) {
    state.films = payload
  }
}
export const userMutations = {
  [ALL_USERS] (state, payload) {
    state.users = payload
  },
  [LOG_IN_USER]: (state) => {
    state.user.loggedIn = true
  }
}
