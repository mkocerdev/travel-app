<template>
  <div class="experience-detail">
    <div class="experience-spot">
      <div class="experience-inner">
        <div class="experience-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >Anasayfa</el-breadcrumb-item
            >
            <el-breadcrumb-item
              :to="`/${experience.seoLink}/deneyimler/${experience.stateId}`"
              >İzmir</el-breadcrumb-item
            >
            <el-breadcrumb-item>Kamp ve Macera</el-breadcrumb-item>
            <el-breadcrumb-item>{{ experience.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="experience-header w-full float-left pb-4">
          <div class="experience-info w-10/12 float-left">
            <h1 class="text-2xl font-medium">{{ experience.title }}</h1>
          </div>
          <div class="experience-reservation w-2/12 float-left">
            <button class="experience-reservation__button">
              Tarihleri Gör
            </button>
          </div>
        </div>
        <div class="experience-gallery">
          <img :src="experience.photo" class="experience-gallery__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    experience() {
      return this.$store.state.experienceDetail.experience
    }
  },
  async fetch({ route, params, error, store }) {
    try {
      await store.dispatch('experienceDetail/fetch', {
        id: params.id
      })
    } catch (e) {
      error({
        statusCode: 404,
        message: 'Bir Hata Oluştu. Lütfen daha sonra tekrar deneyiniz'
      })
    }
  }
}
</script>
