export const state = () => ({
  states: [],
  popularStates: [],
  loadingStates: true,
  stateDetail: null
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
  }
}

export const mutations = {
  setStates(state, states) {
    state.states = states
  },
  setPopularStates(state, popular) {
    state.popularStates = popular
  },
  setLoading(state, loading) {
    state.loadingStates = loading
  }
}
