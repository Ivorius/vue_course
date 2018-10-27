import Vue from 'vue'
import App from './App.vue'


export const eventBus = new Vue({
  methods: {
    changeHand(hand) {
      this.$emit('handWasEdited', hand);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
