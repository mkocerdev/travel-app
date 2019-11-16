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
  }
}

export const mutations = {
  setStates(state, list) {
    state.states = list
  },
  setLoading(state, loading) {
    state.loadingStates = loading
  }
}
