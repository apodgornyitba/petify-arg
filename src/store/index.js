import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import shelter from './module/shelter'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isShelter: false,
    isLoggedIn: false,
    petId: '',
  },
  getters: {
    isShelter(state){
      return state.isShelter
    },
    isLoggedIn(state){
      return state.isLoggedIn
    },
    getPetId(state){
      return state.petId;
    },
  },
  mutations: {
    setIsShelter(state, bool){
      state.isShelter = bool;
    },
    setIsLoggedIn(state){
      state.isLoggedIn = !state.isLoggedIn;
    },
    setPetId(state, id){
      state.petId = id;
    },
  },
  actions: {
  },
  modules: {
    user,
    shelter,
  }
})
