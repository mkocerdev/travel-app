<template>
  <div class="main-inner">
    <home-search :states="states" :popularStates="popularStates" />
    <state-list :states="popularStates" class="my-8" />
    <section class="experience mb-8 mt-16">
      <div class="experience-heading w-full mb-4">
        <h2 class="experience-heading__title">
          Popüler Deneyimler
        </h2>
        <p class="experience-heading__descr">
          Yerel uzmanlar rehberliğinde konaklamalı seyahatler-etkinlikler,
          yemekler ve konaklama dahil
        </p>
      </div>
      <experiences-list :experiences="experiences" />
      <div class="experience-all w-full mb-4">
        <a class="experience-all__button" href="#"
          >Tümünü Göster
          <i class="experience-all_button-icon el-icon-arrow-right"></i
        ></a>
      </div>
    </section>
    <div style="height:1500px"></div>
  </div>
</template>

<script>
import HomeSearch from '~/components/home/searchContainer.vue'
import StateList from '~/components/states/statesList.vue'
import experiencesList from '~/components/experiences/experiencesList.vue'

export default {
  layout: 'home',
  components: {
    StateList,
    experiencesList,
    HomeSearch
  },
  computed: {
    experiences() {
      return this.$store.state.Experience.experience
    },
    states() {
      return this.$store.state.States.states
    },
    popularStates() {
      return this.$store.state.States.popularStates
    }
  },
  async asyncData({ error, store }) {
    try {
      await store.dispatch('Experience/fetchAllExperience')
      await store.dispatch('States/fetchPopularStates')
      await store.dispatch('States/fetchAllStates')
    } catch (e) {
      error({ status: 500, message: e.message })
    }
  }
}
</script>
