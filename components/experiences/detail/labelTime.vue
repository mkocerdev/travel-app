<template>
  <div class="label-box w-3/12">
    <div class="label-box__inner w-full">
      <div class="w-4/12 float-left">
        <i class="label-box__icon el-icon-time"></i>
      </div>
      <div class="w-8/12 float-left">
        <p class="label-box__text">Süre</p>
        <p class="label-box__data">{{ time }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    }
  }
}
</script>
