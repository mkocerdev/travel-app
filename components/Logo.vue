<template>
  <div class="header__logo">
    <img v-if="type" src="@/assets/images/logo.png" />
    <img v-if="!type" src="@/assets/images/logo-white.png" />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
