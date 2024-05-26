import { createStore } from 'vuex'
const state = {
  loggedInUser: null
}
const mutations = {
  addLoggedInUser(state, user) {
    state.loggedInUser = user
  },
  clearLoggedInUser(state) {
    state.loggedInUser = null
  }
}

const actions = {
  addLoggedInUser: ({ commit }, user) => commit('addLoggedInUser', user),
  clearLoggedInUser: ({ commit }) => commit('clearLoggedInUser')
}

const getters = {
  loggedInUser: (state) => state.loggedInUser
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})
