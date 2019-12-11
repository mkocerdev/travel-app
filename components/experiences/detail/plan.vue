<template>
  <div>
    {{ descr }}
  </div>
</template>
<script>
export default {
  props: {
    descr: {
      type: String,
      required: true
    }
  }
}
</script>
