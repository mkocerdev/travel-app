export const state = () => ({
  experience: [],
  loadingExperience: true
})

export const actions = {
  async fetchAllExperience({ commit }) {
    await this.$axios.$get('/api/experience/all').then((response) => {
      commit('setExperience', response)
      commit('setLoading', false)
    })
  },
  async fetchStateExperience({ commit }, params) {
    await this.$axios
      .$post('/api/state/experience', params)
      .then((response) => {
        commit('setExperience', response)
      })
  }
}

export const mutations = {
  setExperience(state, list) {
    state.experience = list
  },
  setLoading(state, loading) {
    state.loadingExperience = loading
  }
}
