<template>
  <div class="state">
    <div class="state-inner">
      <section class="state-wrapper">
        <div class="state-breadcrumb">
          <breadcrumb :items="breadcrumbs" />
        </div>
        <div class="state-heading w-full">
          <h2 class="state-heading__title">
            {{ stateDetail.name }} Deneyimleri için
            {{ experiences.length }} deneyim bulduk
          </h2>
        </div>
        <div class="state-filter w-3/12">
          <div class="state-filter-inner">
            <div class="state-filter__heading">
              <span>Sonuçları Filtrele</span>
            </div>
            <state-filter-price :price="statePrice" />
            <state-filter :filters="stateFilters" />
          </div>
        </div>
        <div class="state-result w-9/12">
          <experiences-list :boxSize="3" :experiences="experiences" />
        </div>
      </section>
      <div style="height:1500px"></div>
    </div>
  </div>
</template>

<script>
import experiencesList from '~/components/experiences/experiencesList.vue'
import breadcrumb from '~/components/shared/breadcrumb.vue'
import stateFilter from '~/components/states/detail/filter.vue'
import stateFilterPrice from '~/components/states/detail/filterPrice.vue'
export default {
  components: {
    experiencesList,
    breadcrumb,
    stateFilter,
    stateFilterPrice
  },
  computed: {
    experiences() {
      return this.$store.state.stateDetail.experience
    },
    stateDetail() {
      return this.$store.state.stateDetail.stateDetail
    },
    stateFilters() {
      return this.$store.state.stateDetail.filters.filter
    },
    statePrice() {
      return this.$store.state.stateDetail.filters.price
    },
    breadcrumbs() {
      return [
        {
          link:
            '/' +
            this.stateDetail.seoLink +
            '/deneyimler/' +
            this.stateDetail.id,
          label: this.stateDetail.name + ' deneyimleri'
        }
      ]
    }
  },
  async fetch({ route, params, error, store }) {
    try {
      await store.dispatch('stateDetail/fetch', {
        id: params.id
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
