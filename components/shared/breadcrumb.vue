<template>
  <div class="breadcrumb">
    <span class="breadcrumb__item"
      ><nuxt-link class="breadcrumb__inner is-link" to="/">Anasayfa</nuxt-link
      ><i class="breadcrumb__separator el-icon-arrow-right"></i
    ></span>
    <template v-for="(item, index) in items">
      <template v-if="index < items.length - 1">
        <span :key="index" class="breadcrumb__item"
          ><nuxt-link :to="item.link" class="breadcrumb__inner">{{
            item.label
          }}</nuxt-link
          ><i class="breadcrumb__separator el-icon-arrow-right"></i
        ></span>
      </template>

      <template v-else>
        <span :key="index" class="breadcrumb__item"
          ><nuxt-link :to="item.link" class="breadcrumb__inner">{{
            item.label
          }}</nuxt-link></span
        >
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
