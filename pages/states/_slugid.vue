<template>
  <div class="main-inner">
    <home-search />
    <section class="experience px-64 mb-8 mt-16">
      <div class="experience-heading w-full mb-4">
        <h2 class="experience-heading_title font-bold">
          Popüler Deneyimler
        </h2>
        <p>
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
import experiencesList from '~/components/experiences/experiencesList.vue'

export default {
  components: {
    HomeSearch,
    experiencesList
  },
  computed: {
    experiences() {
      return this.$store.state.Experience.experience
    }
  },
  async fetch({ route, params, error, store }) {
    try {
      await store.dispatch('Experience/fetchStateExperience', {
        id: params.slugid.split('-')[2]
      })
    } catch (e) {
      error({
        statusCode: 404,
        message: 'Bir Hata Oluştu. Lütfen daha sonra tekrar deneyiniz'
      })
    }
  }
}
</script>
