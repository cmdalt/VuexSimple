import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bilgi: 1
  },
  mutations: {
    arti : (state) => state.bilgi++,
    eksi : (state) => state.bilgi--,
  },
  actions: {
  },
  modules: {
  }
})
