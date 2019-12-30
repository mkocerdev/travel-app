export const state = () => ({
  states: [],
  popularStates: [],
  loadingStates: true
})

export const actions = {
  async fetchAllStates({ commit }) {
    await this.$axios.$get('/api/states/all').then((response) => {
      commit('setStates', response)
      commit('setLoading', false)
    })
  },
  async fetchPopularStates({ commit }) {
    await this.$axios.$get('/api/states/popular').then((response) => {
      commit('setPopularStates', response)
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
  setPopularStates(state, popular) {
    state.popularStates = popular
  },
  setStateDetail(state, stateDetail) {
    state.stateDetail = stateDetail
  },
  setLoading(state, loading) {
    state.loadingStates = loading
  }
}
