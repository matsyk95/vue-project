import {
  ALL_FILMS,
}from './mutations_type';
export const filmsMutations = {
  [ALL_FILMS] (state, payload) {
    state.films = payload;
  }
}
