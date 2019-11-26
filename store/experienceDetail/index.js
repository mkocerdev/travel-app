export const state = () => ({
  id: null,
  experience: null,
  stateInfo: null,
  gallery: [],
  needs: [],
  program: [],
  resevation: []
})

export const actions = {
  async fetch({ commit, dispatch, state }, id) {
    commit('setId', id)
    await Promise.all([
      dispatch('fetchExperience', state.id),
      dispatch('fetchExperienceState', state.id),
      dispatch('fetchExperienceGallery', state.id),
      dispatch('fetchExperienceNeeds', state.id),
      dispatch('fetchExperienceProgram', state.id)
    ])
  },
  async fetchExperience({ commit, dispatch }, id) {
    await this.$axios.$post('/api/experience', id).then((response) => {
      commit('setExperience', response)
    })
  },
  async fetchExperienceState({ commit }, id) {
    await this.$axios.$post('/api/experience/state', id).then((response) => {
      commit('setState', response)
    })
  },
  async fetchExperienceGallery({ commit }, id) {
    await this.$axios.$post('/api/experience/gallery', id).then((response) => {
      commit('setGallery', response)
    })
  },
  async fetchExperienceNeeds({ commit }, id) {
    await this.$axios.$post('/api/experience/needs', id).then((response) => {
      commit('setNeeds', response)
    })
  },
  async fetchExperienceProgram({ commit }, id) {
    await this.$axios.$post('/api/experience/program', id).then((response) => {
      commit('setProgram', response)
    })
  }
}

export const mutations = {
  setId(state, id) {
    state.id = id
  },
  setExperience(state, experience) {
    state.experience = experience
  },
  setState(state, stateInfo) {
    state.stateInfo = stateInfo
  },
  setGallery(state, gallery) {
    state.gallery = gallery
  },
  setNeeds(state, needs) {
    state.needs = needs
  },
  setProgram(state, program) {
    state.program = program
  }
}
