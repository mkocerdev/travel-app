<template>
  <nuxt-link
    :to="`/${seoLink}/deneyimler/${stateId}`"
    class="experience-info__location"
    ><i class="experience-location__icon el-icon-location-outline"></i
    >{{ stateName }}, Türkiye</nuxt-link
  >
</template>
<script>
export default {
  props: {
    seoLink: {
      type: String,
      required: true
    },
    stateId: {
      type: Number,
      required: true
    },
    stateName: {
      type: String,
      required: true
    }
  }
}
</script>
