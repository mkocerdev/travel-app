<template>
  <div class="w-full">
    <strong>{{ price }} TL</strong>
    <span>kişi başı</span>
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
