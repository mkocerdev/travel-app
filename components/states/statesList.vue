<template>
  <section class="states">
    <div class="states-heading w-full mb-4">
      <h2 class="states-heading_title font-bold">
        Sizin için önerilen lokasyonlar
      </h2>
    </div>
    <section class="states-wrapper">
      <div v-for="(state, index) in states" :key="index" class="states-box">
        <div class="states-box__inner">
          <nuxt-link
            :to="`/${state.seoLink}/deneyimler/${state.id}`"
            class="states-box__link"
          >
            <div class="states-box__img-wrapper">
              <img
                :src="require('@/assets/images/' + state.photo)"
                class="states-box__img"
              />
            </div>
            <div class="states-box__content">
              <h3 class="states-box__name">{{ state.name }}</h3>
              <p class="states-box__experienceSum">28 seyahat</p>
            </div></nuxt-link
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    states() {
      return this.$store.state.States.states
    }
  }
}
</script>
