<template>
  <div class="experience-gallery">
    <div class="experience-gallery__item">
      <img :src="photo" class="experience-gallery__img" />
    </div>
    <div
      v-for="(item, index) in gallery"
      :key="index"
      class="experience-gallery__item"
    >
      <img :src="item.photo" class="experience-gallery__img" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gallery: {
      type: Array,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  }
}
</script>
