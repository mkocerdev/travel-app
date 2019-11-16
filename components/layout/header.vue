<template>
  <div class="header-inner w-full float-left py-4">
    <div class="w-3/12 float-left">
      <Logo :type="false" />
    </div>
    <div class="header-menu w-9/12 float-left">
      <ul class="header-menu__ul float-right">
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item" href="#">Seyahatler</a>
        </li>
        <li class="header-menu__li float-left px-5">
          <a class="header-menu__item" href="#">Seyahat Düzenle</a>
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
