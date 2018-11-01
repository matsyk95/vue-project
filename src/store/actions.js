import { API_BASE } from '../config';

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
