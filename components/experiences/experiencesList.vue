<template>
  <div class="experience-wrapper">
    <div v-if="experiences.length > 0">
      <div
        v-for="(item, index) in experiences"
        :key="index"
        :class="'box-size-' + boxSize"
        class="experience-box"
      >
        <div class="experience-box__inner">
          <nuxt-link :to="`/deneyim/${item.seoLink}/${item.id}`">
            <div class="experience-box-img">
              <div class="experience-box-img__wrapper">
                <img :src="item.photo" class="experience-box-img__item" />
              </div>
            </div>
            <div class="experience-box-content">
              <div>
                <h3 class="experience-box-content__name">{{ item.title }}</h3>
                <p class="experience-box-content__rating">
                  4,5
                  <i class="el-icon-star-on"></i>
                </p>
              </div>
              <p class="experience-box-content__state float">İzmir</p>
              <p class="experience-box-content__price">{{ item.price }} TL</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>
      Sonuç bulunamadı
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experiences: {
      type: Array,
      required: true
    },
    boxSize: {
      type: Number,
      required: false,
      default: 4
    }
  }
}
</script>
