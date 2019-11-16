export const state = () => ({
  tours: [],
  loadingTours: true
})

export const actions = {
  async fetchAllTours({ commit }) {
    await this.$axios.$get('/api/tours/all').then((response) => {
      commit('setTours', response)
      commit('setLoading', false)
    })
  }
}

export const mutations = {
  setTours(state, list) {
    state.tours = list
  },
  setLoading(state, loading) {
    state.loadingTours = loading
  }
}
