<template>
  <div class="header-inner w-full float-left py-2">
    <div class="header-logo w-1/12 float-left">
      <nuxt-link to="/"><Logo :type="true"/></nuxt-link>
    </div>
    <div class="header-search w-3/12">
      <input
        class="header-search__input w-full"
        placeholder="Tur Adı, Şehir, Ülke ve Tema Giriniz"
      />
      <i class="header-search__icon el-icon-search"></i>
    </div>
    <div class="header-menu w-8/12 float-left">
      <ul class="header-menu__ul float-right">
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item" href="#">Deneyimler</a>
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item" href="#">Deneyim Düzenle</a>
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item" href="#">Giriş Yap</a>
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item" href="#">Üye Ol</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
