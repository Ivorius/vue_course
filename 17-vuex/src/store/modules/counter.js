const state = {
  counter: 0
};

const getters = {
  getCounter: state => {
    return state.counter;
  },
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + 'clicks';
  },
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
};

const actions = {
  //po staru
  // increment: context => {
  //   context.commit('increment');
  // },

  //nově es6
  increment: ({commit}, payload) => {
    commit('increment', payload);
  },
  decrement: ({commit}, payload) => {
    commit('decrement', payload);
  },
  asyncIncrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration)
  },
  asyncDecrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration)
  },

};

export default {
  //state: state,
  state,
  mutations,
  actions,
  getters
}