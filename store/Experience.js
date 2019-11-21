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
      .$post('/api/experience/state', params)
      .then((response) => {
        commit('setStateExperience', response)
      })
  }
}

export const mutations = {
  setExperience(state, list) {
    state.experience = list
  },
  setStateExperience(state, list) {
    state.experience = list
  },
  setLoading(state, loading) {
    state.loadingExperience = loading
  }
}
