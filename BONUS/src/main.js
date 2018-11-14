import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vue-axios-4931e.firebaseio.com';
//další možnosti nastavení
//axios.defaults.headers.common['Authorization'] = 'Ivo';
//axios.defaults.headers.get['Accepts'] = 'application/json';

//pro každý request
const reqInterceptors = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config
});

//pro každý response
const resInterceptors = axios.interceptors.response.use(response => {
  console.log('Response Interceptor', response);
  return response;
});

//zrušení předchozích interceptorů
axios.interceptors.request.eject(reqInterceptors);
axios.interceptors.response.eject(resInterceptors);



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
