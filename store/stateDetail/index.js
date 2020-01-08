export const state = () => ({
  stateId: null,
  stateDetail: null,
  filters: {
    price: {},
    filter: {}
  },
  experience: null
})
export const actions = {
  async fetch({ commit, dispatch, state }, stateId) {
    commit('setStateId', stateId)
    await Promise.all([
      dispatch('fetchStateDetail', state.stateId),
      dispatch('fetchStateExperience', state.stateId),
      dispatch('fetchStateFilters', state.stateId),
      dispatch('fetchStatePrice', state.stateId)
    ])
  },
  async fetchStateDetail({ commit }, stateId) {
    await this.$axios.$post('/api/state', stateId).then((response) => {
      commit('setStateDetail', response)
    })
  },
  async fetchStateExperience({ commit }, params) {
    await this.$axios
      .$post('/api/state/experience', params)
      .then((response) => {
        commit('setExperience', response)
      })
  },
  async fetchStateFilters({ commit }, params) {
    await this.$axios.$post('/api/state/filter', params).then((response) => {
      commit('setFilters', response)
    })
  },
  async fetchStatePrice({ commit }, params) {
    await this.$axios
      .$post('/api/state/filter/price', params)
      .then((response) => {
        commit('setPrice', response)
      })
  }
}
export const mutations = {
  setStateId(state, id) {
    state.stateId = id
  },
  setStateDetail(state, stateDetail) {
    state.stateDetail = stateDetail
  },
  setExperience(state, experience) {
    state.experience = experience
  },
  setFilters(state, filters) {
    state.filters.filter = filters
  },
  setPrice(state, price) {
    state.filters.price = price
  }
}
