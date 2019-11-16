<template>
  <div class="main-inner">
    <home-search />
    <state-list class="px-64 my-8" />
    <tour-list class="px-64 mb-8 mt-16" />
    <div style="height:1500px"></div>
  </div>
</template>

<script>
import HomeSearch from '~/components/home/searchContainer.vue'
import StateList from '~/components/states/statesList.vue'
import TourList from '~/components/tours/toursList.vue'

export default {
  components: {
    HomeSearch,
    StateList,
    TourList
  },
  async asyncData({ error, store }) {
    try {
      await store.dispatch('Tours/fetchAllTours')
      await store.dispatch('States/fetchAllStates')
    } catch (e) {
      error({ status: 500, message: e.message })
    }
  }
}
</script>
