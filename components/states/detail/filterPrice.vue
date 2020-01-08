<template>
  <div>
    <div :class="'state-filter-' + price.filterType" class="state-filter-box">
      <div class="state-filter-box__title">
        {{ price.label }}
      </div>
      <el-slider
        v-model="value2"
        :min="price.data.minPrice"
        :max="price.data.maxPrice"
        :step="100"
        range
      ></el-slider>
      <div class="price-slider-marks">
        <span class="price-range-marks__item price-range-marks__item--min">
          {{ price.data.minPrice }} TL
        </span>
        <span class="price-range-marks__item price-range-marks__item--max">
          {{ price.data.maxPrice }} TL
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
  data() {
    return {
      value2: this.price.data.minPrice
    }
  }
}
</script>
