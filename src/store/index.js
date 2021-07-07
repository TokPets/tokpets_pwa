
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)


const state = {
  USER: {},
  PET: {
    name: '',
    type: 'CAT',
    gender: '',
    birthday: '',
    breed: '',
  },
  TRACKER: {
    CODE: 'XX-XXXXX-XXXX-XXXXX'
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept(['./getters', './actions', './mutations'], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store