export const state = () => ({
  stateId: null,
  stateDetail: null,
  experience: {
    page: 1,
    totalCount: 0,
    data: []
  },
  filters: {
    filter: {},
    loading: true
  },
  selectedFilters: {
    filter: [],
    sort: 'ep.price ASC'
  }
})
export const actions = {
  async fetch({ commit, dispatch, state }, stateId) {
    commit('setStateId', stateId)
    await Promise.all([
      commit('clearAllFilters'),
      dispatch('fetchStateDetail', state.stateId),
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
    await Promise.all([commit('setPage', 1), dispatch('fetchStateFilters')])
  },
  async selectedSort({ commit, state, dispatch }, params) {
    commit('setSort', params)
    await Promise.all([dispatch('fetchStateFilters')])
  },
  async fetchStateFilters({ commit, state }) {
    commit('setFiltersLoading', true)
    await this.$axios
      .$post('/api/state/filter', {
        filter: state.selectedFilters.filter,
        ...state.stateId,
        page: state.experience.page,
        sort: state.selectedFilters.sort
      })
      .then((response) => {
        commit('setFilters', response)
        commit('setFiltersLoading', false)
      })
  }
}
export const mutations = {
  setStateId(state, id) {
    state.stateId = id
  },
  clearAllFilters(state) {
    state.selectedFilters.filter = []
    state.selectedFilters.sort = 'ep.price ASC'
    state.experience.page = 1
    state.experience.totalCount = 0
  },
  setStateDetail(state, stateDetail) {
    state.stateDetail = stateDetail
  },
  setPage(state, page) {
    state.experience.page = page
  },
  setSort(state, sort) {
    state.selectedFilters.sort = sort
  },
  setFilters(state, filterResult) {
    state.filters.filter = filterResult.filters
    state.experience.data = filterResult.experience
    state.experience.totalCount = filterResult.experienceCount
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
