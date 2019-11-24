export const state = () => ({
  experience: null,
  stateInfo: null,
  gallery: [],
  needs: [],
  program: [],
  resevation: []
})

export const actions = {
  async fetch({ commit, dispatch }, params) {
    await this.$axios.$post('/api/experience', params).then((response) => {
      commit('setExperience', response)
      Promise.all([
        dispatch('fetchExperienceState', {
          id: response.stateId
        })
      ])
    })
  },
  async fetchExperienceState({ commit }, stateId) {
    await this.$axios.$post('/api/state', stateId).then((response) => {
      commit('setState', response)
    })
  }
}

export const mutations = {
  setExperience(state, experience) {
    state.experience = experience
  },
  setState(state, stateInfo) {
    state.stateInfo = stateInfo
  }
}
