<template>
  <div>
    <div :class="'state-filter-' + price.filterType" class="state-filter-box">
      <div class="state-filter-box__title">
        {{ price.label }}
      </div>
      <el-slider
        :disabled="price.data[0].minPrice == price.data[0].maxPrice"
        :show-tooltip="price.data[0].minPrice != price.data[0].maxPrice"
        :class="{ disabled: price.data[0].minPrice == price.data[0].maxPrice }"
        :min="price.data[0].minPrice"
        :max="price.data[0].maxPrice"
        :step="100"
        @change="selectedPrice"
        class="price-range"
        range
      ></el-slider>
      <div class="price-range-marks">
        <span class="price-range-marks__item price-range-marks__item--min">
          {{ price.data[0].minPrice }} TL
        </span>
        <span class="price-range-marks__item price-range-marks__item--max">
          {{ price.data[0].maxPrice }} TL
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      required: true
    }
  },
  methods: {
    async selectedPrice(price) {
      await this.$store.dispatch('stateDetail/selectedFilter', {
        filterType: this.price.filterType,
        filter: [...price]
      })
    }
  }
}
</script>
