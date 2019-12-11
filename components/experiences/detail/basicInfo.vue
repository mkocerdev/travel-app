<template>
  <div class="w-full">
    <h1 class="experience-info__title">{{ title }}</h1>
    <p class="experience-info__descr">{{ sdescr }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    sdescr: {
      type: String,
      required: true
    }
  }
}
</script>
