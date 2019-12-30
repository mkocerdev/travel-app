<template>
  <div>
    <label>Seyahat Tarihleri</label>
    <el-select v-model="value" placeholder="Lütfen tarih seçin">
      <el-option
        v-for="item in reservations"
        :key="item.startDate"
        :label="item.startDate"
        :value="item.startDate"
      >
        <span style="float: left">{{ item.startDate }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px"
          >{{ item.capacity }} kişi</span
        >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  props: {
    reservations: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
