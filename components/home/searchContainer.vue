<template>
  <section class="home-search">
    <div class="home-search-inner w-8/12 m-auto">
      <div class="home-search__box w-full">
        <div class="home-search__head w-full">
          <h1 class="home-search__heading">
            Binlerce deneyim içerisinde arama yapın
          </h1>
        </div>
        <div class="home-search__wrapper mb-3 w-full float-left">
          <form @submit.prevent="(event) => submitForm(event)" method="post">
            <div class="home-search__tour w-5/12 float-left">
              <el-select
                v-model="value"
                :remote-method="remoteMethod"
                :loading="loading"
                class="w-full"
                filterable
                style="height:60px"
                remote
                reserve-keyword
                placeholder="Tur Adı, Şehir ve Tema Giriniz"
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
            <div class="home-search__period w-5/12 float-left">
              <el-select
                v-model="value2"
                class="w-full"
                multiple
                collapse-tags
                placeholder="Dönem Seçiniz"
              >
                <el-option label="Herhangi bir dönem" value="all"> </el-option>
                <el-option
                  :label="moment(date).format('MMMM YYYY')"
                  :value="moment(date).format('l')"
                >
                </el-option>
                <el-option
                  v-for="i in 11"
                  :key="i"
                  :label="
                    moment(date)
                      .add(i, 'months')
                      .format('MMMM YYYY')
                  "
                  :value="
                    moment(date)
                      .add(i, 'months')
                      .format('l')
                  "
                >
                </el-option>
              </el-select>
              <i class="home-search__date-icon el-icon-date"></i>
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
import moment from 'moment'
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
      moment,
      date: '',
      defaultStates: [],
      value: [],
      list: [],
      loading: false,
      period: [],
      value2: []
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
  created() {
    moment.locale('tr')
    this.getNow()
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
    getNow() {
      this.date = moment()
    },
    submitForm(e) {
      e.preventDefault()
      if (!this.value || !this.value2) {
        this.$message({
          message: 'Lütfen arama yapmak için Şehir, Ülke veya Tema Giriniz.',
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
