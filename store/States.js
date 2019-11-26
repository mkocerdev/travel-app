export const state = () => ({
  states: [],
  loadingStates: true
})

export const actions = {
  async fetchAllStates({ commit }) {
    await this.$axios.$get('/api/states/all').then((response) => {
      commit('setStates', response)
      commit('setLoading', false)
    })
  },
  async fetchStateDetail({ commit }, stateId) {
    await this.$axios.$post('/api/state', stateId).then((response) => {
      commit('setStateDetail', response)
    })
  }
}

export const mutations = {
  setStates(state, states) {
    state.states = states
  },
  setStateDetail(state, stateDetail) {
    state.stateDetail = stateDetail
  },
  setLoading(state, loading) {
    state.loadingStates = loading
  }
}
