<template>
  <div>
    <div v-for="(item, index) in rating" :key="index" class="rating-box w-full">
      <div class="rating-box__header w-full">
        <div class="rating-box__avatar">
          <el-avatar :size="50"> MK </el-avatar>
        </div>
        <div class="rating-box__user-info">
          <p class="rating-box__user-name">Mehmet Koçer</p>
          <p class="rating-box__date">{{ item.formatDate }}</p>
          <p class="rating-box__rate">
            <el-rate
              :value="item.star"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
              class="experience-info__rate"
              disabled
              disabled-void-color="#b9b9b9"
            >
            </el-rate>
          </p>
        </div>
      </div>
      <div class="rating-box__content w-full">
        <p class="rating-box__title">{{ item.title }}</p>

        <p class="rating-box__descr">{{ item.descr }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: Array,
      required: true
    }
  }
}
</script>
