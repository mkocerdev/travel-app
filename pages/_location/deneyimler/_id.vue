<template>
  <div class="state">
    <div class="state-inner">
      {{ loading }}
      <section class="state-wrapper">
        <div class="state-breadcrumb">
          <breadcrumb :items="breadcrumbs" />
        </div>
        <state-head :title="stateDetail.name" :count="experiencesCount" />
        <div class="state-filter w-3/12">
          <div class="state-filter-inner">
            <div class="state-filter__heading">
              <span>Sonuçları Filtrele</span>
            </div>
            <template v-for="(filter, i) in stateFilters">
              <state-filter-price
                :key="i"
                v-if="filter.filterType === 'price'"
                :price="filter"
                class="state-filter-price"
              />
              <state-filter
                :key="i"
                v-if="filter.filterType !== 'price'"
                :filter="filter"
                class="state-filter-property"
              />
            </template>
          </div>
        </div>
        <div class="state-result w-9/12">
          <state-sort
            :listCount="experiences.length"
            :totalCount="experiencesCount"
          />
          <experiences-list :boxSize="3" :experiences="experiences" />
          <pagination :count="experiencesCount" class="experience-pagination" />
        </div>
      </section>
      <div style="height:1500px"></div>
    </div>
  </div>
</template>

<script>
import experiencesList from '~/components/experiences/experiencesList.vue'
import breadcrumb from '~/components/shared/breadcrumb.vue'
import stateHead from '~/components/states/detail/head.vue'
import stateSort from '~/components/states/detail/sort.vue'
import stateFilter from '~/components/states/detail/filter.vue'
import stateFilterPrice from '~/components/states/detail/filterPrice.vue'
import pagination from '~/components/states/detail/pagination.vue'
export default {
  components: {
    experiencesList,
    breadcrumb,
    stateFilter,
    stateFilterPrice,
    stateHead,
    stateSort,
    pagination
  },
  computed: {
    experiences() {
      return this.$store.state.stateDetail.experience.data
    },
    experiencesCount() {
      return this.$store.state.stateDetail.experience.totalCount
    },
    currentPage: {
      get() {
        return this.$store.state.stateDetail.experience.page
      },
      set(value) {
        this.$store.commit('stateDetail/setPage', value)
      }
    },
    loading() {
      return this.$store.state.stateDetail.filters.loading
    },
    stateDetail() {
      return this.$store.state.stateDetail.stateDetail
    },
    stateFilters() {
      return this.$store.state.stateDetail.filters.filter
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
