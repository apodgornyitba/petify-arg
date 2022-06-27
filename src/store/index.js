import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import refugee from './module/refugee'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isRefugee: false,
  },
  getters: {
    isRefugee(){
      return this.state.isRefugee
    }
  },
  mutations: {
    setIsRefugee(){
      this.state.isRefugee = !this.state.isRefugee
    }
  },
  actions: {
  },
  modules: {
    user,
    refugee,
  }
})
