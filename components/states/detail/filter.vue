<template>
  <div>
    <div
      v-for="(filter, i) in filters"
      :key="i"
      :class="'state-filter-' + filter.filterType"
      class="state-filter-box"
    >
      <div class="state-filter-box__title">
        {{ filter.label }}
      </div>
      <div class="state-filter-box__content">
        <el-checkbox-group
          v-for="item in filter.data"
          :key="item.value"
          v-model="checkedFilters"
          class="state-filter-box__item"
        >
          <el-checkbox
            :label="filter.filterType + '_' + item.value"
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
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checkedFilters: []
    }
  }
}
</script>
