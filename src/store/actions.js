import { API_BASE } from '../config';
import Vue from 'vue';
import {
  ALL_FILMS
} from '@/store/mutations_type'

export const filmsActions = {
  allFilms ({commit}) {
    Vue.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q=Warsaw`).then((response) => {
      if (response.status === 200) {
        commit(ALL_FILMS, response.data);
      }
    });
  },
}
