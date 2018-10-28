import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  store,  //stejné jako store: store
  render: h => h(App)
})
