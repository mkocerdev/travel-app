<template>
  <div class="experience-info__rate">
    <el-rate
      :value="rating"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
      class="experience-info__rate-number"
      disabled
      disabled-void-color="#b9b9b9"
    >
    </el-rate>
    <span v-if="count" class="experience-info__rate-count"
      >{{ count }} Değerlendirme</span
    >
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
</script>
