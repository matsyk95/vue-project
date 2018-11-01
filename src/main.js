// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import films from './pages/Films'
import Message from './HellowWorld.vue';
import Vuex from 'vuex';
import store from './store/store';



new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  'app-films': films,
  render: h => h(App)
});
