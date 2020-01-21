<template>
  <section class="home-search">
    <div class="home-search-inner w-8/12 m-auto">
      <div class="home-search__box w-full">
        <div class="home-search__wrapper w-full float-left">
          <form @submit.prevent="(event) => submitForm(event)" method="post">
            <div class="home-search__tour w-4/12 float-left">
              <el-select
                v-model="value"
                :remote-method="remoteMethod"
                :loading="loading"
                class="w-full"
                filterable
                remote
                placeholder="Şehir Seçiniz"
              >
                <el-option
                  v-for="item in defaultStates"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <i class="home-search__tour-icon el-icon-location-outline"></i>
            </div>
            <div class="home-search__period w-6/12 float-left">
              <el-input v-model="searchQuery" placeholder="Deneyim arayın" />
              <i class="home-search__date-icon el-icon-search"></i>
            </div>
            <div class="home-search__button-wrapper w-2/12 float-left">
              <button class="home-search__button">Ara</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    states: {
      type: Array,
      required: true
    },
    popularStates: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      date: '',
      defaultStates: [],
      value: [],
      list: [],
      loading: false,
      searchQuery: ''
    }
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: item.id, label: item.name, seoLink: item.seoLink }
    })
    this.defaultStates = this.popularStates.map((item) => {
      return { value: item.id, label: item.name, seoLink: item.seoLink }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.defaultStates = this.list.filter((item) => {
            return item.label
              .toLocaleLowerCase('tr')
              .includes(query.toLocaleLowerCase('tr'))
          })
        }, 200)
      } else {
        this.defaultStates = []
      }
    },
    submitForm(e) {
      e.preventDefault()
      if (!this.value) {
        this.$message({
          message: 'Lütfen arama yapmak şehir seçiniz.',
          type: 'warning'
        })
        return
      }
      const stateName = this.list.find((item) => item.value === this.value)
        .seoLink
      this.$router.push('/' + stateName + '/deneyimler/' + this.value)
    }
  }
}
</script>
