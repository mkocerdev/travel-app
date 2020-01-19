<template>
  <div class="state-result-sort">
    <div class="state-result-count">
      <p class="state-result-count__title">
        <span class="state-result-count__title-number">{{ totalCount }}</span>
        sonuçtan
        <span class="state-result-count__title-number">{{ listCount }}</span>
        tanesi listeniyor
      </p>
    </div>
    <div class="state-result-sorting">
      <button @click="price" class="state-result-sorting__item">
        <p class="result-sorting-price">
          Fiyata Göre
          <span
            v-if="priceSort"
            class="result-sorting-price__item result-sorting-price--low"
            >Azalan</span
          >
          <span
            v-else
            class="result-sorting-price__item result-sorting-price--high"
            >Artan</span
          >
        </p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalCount: {
      type: Number,
      required: true
    },
    listCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      priceSort: true,
      sortString: 'ep.price ASC'
    }
  },
  watch: {
    async sortString(val) {
      await this.$store.dispatch('stateDetail/selectedSort', val)
    }
  },
  methods: {
    price() {
      this.priceSort = !this.priceSort
      if (this.priceSort) {
        this.sortString = 'ep.price ASC'
      } else {
        this.sortString = 'ep.price DESC'
      }
    }
  }
}
</script>
