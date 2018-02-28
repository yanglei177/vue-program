import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false,
    applyNum: 0,
    deadline: '3'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateApplyNum (state, payload) {
      state.applyNum = payload.applyNum
    },
    updateDeadline (state, payload) {
      state.deadline = payload.deadline
    }
  }
})

export default store
