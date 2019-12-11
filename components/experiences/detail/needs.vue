<template>
  <div>
    <div
      v-for="(item, index) in needs"
      :key="index"
      class="needs-content__item"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    needs: {
      type: Array,
      required: true
    }
  }
}
</script>
