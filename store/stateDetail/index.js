export const state = () => ({
  stateId: null,
  stateDetail: null,
  filters: {
    filter: {},
    loading: true
  },
  selectedFilters: {
    filter: [],
    sort: 'ep.price ASC'
  },
  experience: {
    page: 1,
    totalCount: 0,
    data: []
  }
})
export const actions = {
  async fetch({ commit, dispatch, state }, stateId) {
    commit('setStateId', stateId)
    await Promise.all([
      commit('clearAllFilters'),
      dispatch('fetchStateDetail', state.stateId),
      dispatch('fetchStateExperience'),
      dispatch('fetchStateFilters')
    ])
  },
  async fetchStateDetail({ commit }, stateId) {
    await this.$axios.$post('/api/state', stateId).then((response) => {
      commit('setStateDetail', response)
    })
  },
  async selectedFilter({ commit, state, dispatch }, params) {
    commit('setSelectedFilter', params)
    await Promise.all([
      commit('setPage', 1),
      dispatch('fetchStateExperience'),
      dispatch('fetchStateFilters')
    ])
  },
  async selectedSort({ commit, state, dispatch }, params) {
    commit('setSort', params)
    await Promise.all([dispatch('fetchStateExperience')])
  },
  async fetchStateFilters({ commit, state }) {
    await this.$axios
      .$post('/api/state/filter', {
        filter: state.selectedFilters.filter,
        ...state.stateId
      })
      .then((response) => {
        commit('setFilters', response)
        commit('setFiltersLoading', false)
      })
  },
  async fetchStateExperience({ commit, state }) {
    await this.$axios
      .$post('/api/state/filter/experience', {
        filter: state.selectedFilters.filter,
        ...state.stateId,
        page: state.experience.page,
        sort: state.selectedFilters.sort
      })
      .then((response) => {
        commit('setExperience', {
          data: response.data,
          totalCount: response.totalCount
        })
      })
  }
}
export const mutations = {
  setStateId(state, id) {
    state.stateId = id
  },
  clearAllFilters(state) {
    state.selectedFilters.filter = []
    state.experience.page = 1
    state.experience.totalCount = 0
  },
  setStateDetail(state, stateDetail) {
    state.stateDetail = stateDetail
  },
  setExperience(state, experience) {
    state.experience.data = experience.data
    state.experience.totalCount = experience.totalCount
  },
  setPage(state, page) {
    state.experience.page = page
  },
  setSort(state, sort) {
    state.selectedFilters.sort = sort
  },
  setFilters(state, filters) {
    state.filters.filter = filters
  },
  setSelectedFilter(state, filters) {
    const r = state.selectedFilters.filter.some((item) => {
      return item.filterType === filters.filterType
    })
    if (!r) {
      state.selectedFilters.filter.push(filters)
    } else {
      state.selectedFilters.filter.filter(function(item) {
        if (item.filterType === filters.filterType) {
          if (filters.filter.length > 0) {
            item.filter = filters.filter
          } else {
            state.selectedFilters.filter.splice(
              state.selectedFilters.filter.indexOf(item),
              1
            )
          }
        }
      })
    }
  },
  setFiltersLoading(state, loading) {
    state.filters.loading = loading
  }
}
