<template>
  <div>
    <label>Seyahat Tarihleri</label>
    <el-select v-model="value" placeholder="Lütfen tarih seçin">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  /* props: {
    dates: {
      type: Array,
      required: true
    }
  }, */
  data() {
    return {
      options: [
        {
          value: '08.12.2019-11.12.2019',
          label: '08 Aralık - 11 Aralık 2019'
        },
        {
          value: '09.12.2019-12.12.2019',
          label: '09 Aralık - 12 Aralık 2019'
        },
        {
          value: '10.12.2019-13.12.2019',
          label: '10 Aralık - 13 Aralık 2019'
        },
        {
          value: '11.12.2019-14.12.2019',
          label: '11 Aralık - 14 Aralık 2019'
        },
        {
          value: '13.12.2019-16.12.2019',
          label: '13 Aralık - 16 Aralık 2019'
        }
      ],
      value: ''
    }
  }
}
</script>
