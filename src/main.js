import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClipboard from 'vue-clipboard2'
import axios from './utils/axios';
import './assets/css/style.css';
import './assets/css/iconfont.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueClipboard)

import MovieModel from "./api/MovieModel.js";
const api = new MovieModel();
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
