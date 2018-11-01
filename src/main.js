// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router/index';


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router,
  render: h => h(App)
});
