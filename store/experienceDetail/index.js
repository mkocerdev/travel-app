export const state = () => ({
  id: null,
  experience: null,
  rateInfo: null,
  stateInfo: null,
  gallery: [],
  guestPhotos: [],
  needs: [],
  program: [],
  rating: [],
  resevation: [],
  category: null
})

export const actions = {
  async fetch({ commit, dispatch, state }, id) {
    commit('setId', id)
    await Promise.all([
      dispatch('fetchExperience', state.id),
      dispatch('fetchExperienceState', state.id),
      dispatch('fetchExperienceGallery', state.id),
      dispatch('fetchExperienceGuestPhotos', state.id),
      dispatch('fetchExperienceNeeds', state.id),
      dispatch('fetchExperienceProgram', state.id),
      dispatch('fetchExperienceRating', state.id),
      dispatch('fetchExperienceRateInfo', state.id),
      dispatch('fetchExperienceCategory', state.id)
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
  async fetchExperienceGallery({ commit }, experience) {
    await this.$axios
      .$post('/api/experience/gallery', { id: experience.id, type: 1 })
      .then((response) => {
        commit('setGallery', response)
      })
  },
  async fetchExperienceGuestPhotos({ commit }, experience) {
    await this.$axios
      .$post('/api/experience/gallery', { id: experience.id, type: 2 })
      .then((response) => {
        commit('setGuestPhotos', response)
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
  },
  async fetchExperienceRating({ commit }, id) {
    await this.$axios.$post('/api/experience/rating', id).then((response) => {
      commit('setRating', response)
    })
  },
  async fetchExperienceRateInfo({ commit }, id) {
    await this.$axios.$post('/api/experience/RateInfo', id).then((response) => {
      commit('setRateInfo', response)
    })
  },
  async fetchExperienceCategory({ commit }, id) {
    await this.$axios.$post('/api/experience/category', id).then((response) => {
      commit('setCategory', response)
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
  setGuestPhotos(state, guestPhotos) {
    state.guestPhotos = guestPhotos
  },
  setNeeds(state, needs) {
    state.needs = needs
  },
  setProgram(state, program) {
    state.program = program
  },
  setRating(state, rating) {
    state.rating = rating
  },
  setRateInfo(state, rateInfo) {
    state.rateInfo = rateInfo
  },
  setCategory(state, category) {
    state.category = category
  }
}
