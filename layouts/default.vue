<template>
  <div>
    <div class="header px-16">
      <Header />
    </div>
    <div class="main">
      <nuxt />
    </div>
    <div class="footer px-16">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/layout/header.vue'
import Footer from '~/components/layout/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
