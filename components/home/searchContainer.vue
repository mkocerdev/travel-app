<template>
  <section class="home-slide">
    <img class="home-slide__img" src="@/assets/images/slide.jpg" />
    <div class="home-slide-inner w-8/12 m-auto">
      <div class="home-slide__search-box w-full">
        <div class="home-slide__search-head w-full">
          <h1 class="home-slide__seach-heading">
            Binlerce tur içerisinde arama yapın
          </h1>
        </div>
        <div class="home-slide__search-wrapper mb-3 w-full float-left">
          <div class="home-slide__search-tour w-5/12 float-left">
            <input
              class="home-slide__tour-input"
              placeholder="Tur Adı, Şehir, Ülke ve Tema Giriniz"
            />
          </div>
          <div class="home-slide__search-period w-5/12 float-left">
            <div class="block">
              <input
                class="home-slide__period-input"
                placeholder="Dönem Seçiniz"
              />
            </div>
          </div>
          <div class="home-slide__search-button w-2/12 float-left">
            <button class="home-slide__button">Ara</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
