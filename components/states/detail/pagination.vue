<template>
  <el-pagination
    :page-size="2"
    :total="count"
    :current-page.sync="currentPage"
    @current-change="pageChange"
    background
    layout="prev, pager, next"
  >
  </el-pagination>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.stateDetail.experience.page
      },
      set(value) {
        this.$store.commit('stateDetail/setPage', value)
      }
    }
  },

  methods: {
    async pageChange(val) {
      await this.$store.dispatch('stateDetail/fetchStateFilters')
    }
  }
}
</script>
