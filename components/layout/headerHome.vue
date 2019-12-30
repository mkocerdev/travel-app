<template>
  <div class="header-inner w-full float-left py-4 px-16">
    <div class="header-logo w-3/12 float-left">
      <nuxt-link to="/"><Logo :type="false"/></nuxt-link>
    </div>
    <div class="header-menu w-9/12 float-left">
      <ul class="header-menu__ul float-right">
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item header-menu__item--white" href="#"
            >Deneyimler</a
          >
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item header-menu__item--white" href="#"
            >Deneyim Düzenle</a
          >
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item header-menu__item--white" href="#"
            >Giriş Yap</a
          >
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item header-menu__item--white" href="#"
            >Üye Ol</a
          >
        </li>
      </ul>
    </div>
    <home-search :states="states" :popularStates="popularStates" />
    <div class="header-bg">
      <img class="home-bg__img" src="@/assets/images/slide.jpg" />
    </div>
  </div>
</template>

<script>
import HomeSearch from '~/components/home/searchContainer.vue'
export default {
  name: 'HeaderComponent',
  components: {
    HomeSearch
  },
  computed: {
    states() {
      return this.$store.state.States.states
    },
    popularStates() {
      return this.$store.state.States.popularStates
    }
  }
}
</script>
