<template>
  <div class="w-full">
    <h2>
      <span class="experience-detail__subtitle">{{ title }}</span>
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
