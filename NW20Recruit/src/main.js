import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios 
axios.defaults.baseURL = 'http://47.97.90.33:3000';
Vue.prototype.$baseUrl = 'http://47.97.90.33:3000';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
