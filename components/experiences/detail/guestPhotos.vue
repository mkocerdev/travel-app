<template>
  <div>
    <div
      v-for="(item, index) in photos"
      :key="index"
      class="photos-content__item w-4/12 float-left"
    >
      <img :src="item.photo" class="photos-content__photo" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
}
</script>
