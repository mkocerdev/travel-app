<template>
  <div class="label-box w-3/12">
    <div class="label-box__inner w-full">
      <div class="w-4/12 float-left">
        <i class="label-box__icon el-icon-chat-line-round"></i>
      </div>
      <div class="w-8/12 float-left">
        <p class="label-box__text">Dil</p>
        <p class="label-box__data">
          {{ language }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    language: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      languageName: {
        0: 'Türkçe',
        1: 'İngilizce'
      }
    }
  }
}
</script>
