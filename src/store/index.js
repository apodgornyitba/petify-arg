import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import shelter from './module/shelter'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isRefugee: false,
    isLoggedIn: false,
  },
  getters: {
    isRefugee(state){
      return state.isRefugee
    },
    isLoggedIn(state){
      return state.isLoggedIn
    }
  },
  mutations: {
    setIsRefugee(state){
      state.isRefugee = !state.isRefugee
    },
    setIsLoggedIn(state){
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
  },
  modules: {
    user,
    shelter,
  }
})
