<template>
  <div class="w-full">
    <strong>{{ price }} TL</strong>
    <span>Kişi başı</span>
  </div>
</template>
<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  }
}
</script>
