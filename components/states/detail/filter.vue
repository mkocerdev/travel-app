<template>
  <div>
    <template v-if="filter.filterType !== 'price'">
      <div
        :class="'state-filter-box--' + filter.filterType"
        class="state-filter-box"
      >
        <div class="state-filter-box__title">
          {{ filter.label }}
        </div>
        <div class="state-filter-box__content">
          <el-checkbox-group
            v-for="(item, index) in filter.data"
            :key="index"
            @change="updateRoute"
            v-model="selectedFilters"
            class="state-filter-box__item"
          >
            <el-checkbox
              :label="item.value"
              size="medium"
              class="state-filter-box__check"
              ><span class="state-filter-box__label">{{ item.label }}</span
              ><span class="state-filter-box__count"
                >({{ item.count }})</span
              ></el-checkbox
            >
          </el-checkbox-group>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedFilters: []
    }
  },
  methods: {
    async updateRoute() {
      await this.$store.dispatch('stateDetail/selectedFilter', {
        filterType: this.filter.filterType,
        filter: [...this.selectedFilters]
      })
    }
  }
}
</script>
