<template>
  <div class="label-box w-3/12">
    <div class="label-box__inner w-full">
      <div class="w-4/12 float-left">
        <i class="label-box__icon el-icon-set-up"></i>
      </div>
      <div class="w-8/12 float-left">
        <p class="label-box__text">Zorluk Düzeyi</p>
        <p
          :style="{
            color: difficultyTitle[difficulty].color
          }"
          class="label-box__data"
        >
          {{ difficultyTitle[difficulty].title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    difficulty: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      difficultyTitle: {
        1: {
          title: 'Çok Kolay',
          color: '#72de84'
        },
        2: {
          title: 'Kolay',
          color: '#1baf34'
        },
        3: {
          title: 'Orta',
          color: '#ff8822'
        },
        4: {
          title: 'Zor',
          color: '#e86464'
        },
        5: {
          title: 'Çok Zor',
          color: '#ec0404'
        }
      }
    }
  }
}
</script>
