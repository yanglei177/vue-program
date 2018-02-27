import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false,
    gdInfo: {}
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateGdInfo (state, payload) {
      state.gdInfo = payload
    }
  }
})

export default store
