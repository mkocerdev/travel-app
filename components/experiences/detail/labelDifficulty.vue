<template>
  <div class="label-box w-3/12">
    <div class="label-box__inner w-full">
      <div class="w-4/12 float-left">
        <i class="label-box__icon el-icon-set-up"></i>
      </div>
      <div class="w-8/12 float-left">
        <p class="label-box__text">Zorluk Düzeyi</p>
        <p class="label-box__data">
          {{ difficulty }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    difficulty: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      difficultyTitle: {
        0: {
          title: 'Çok Kolay',
          color: '#72de84'
        },
        1: {
          title: 'Kolay',
          color: '#1baf34'
        },
        2: {
          title: 'Orta',
          color: '#ff8822'
        },
        3: {
          title: 'Zor',
          color: '#e86464'
        },
        4: {
          title: 'Çok Zor',
          color: '#ec0404'
        }
      }
    }
  }
}
</script>
