import Vue from 'vue'
import App from './App.vue'

//globální filtr
Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('countText', function(value) {
  return value + '(' + value.length + ')';
});

Vue.mixin({
  created() {
    console.log('Global Mixin - created Hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
