<template>
  <div class="state-heading w-full">
    <h2 class="state-heading__title">
      {{ title }} Deneyimleri için {{ count }} deneyim bulduk
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
</script>
