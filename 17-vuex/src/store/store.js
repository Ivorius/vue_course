import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  // getters: {
  //   value: state => {
  //     return state.value;
  //   }
  // },
  getters,
  mutations,
  actions,

  modules: {
    counter
  }
});