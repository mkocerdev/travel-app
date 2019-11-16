<template>
  <section class="tours">
    <div class="tours-heading w-full mb-4">
      <h2 class="tours-heading_title font-bold">
        Popüler Seyahatler
      </h2>
      <p>
        Yerel uzmanlar rehberliğinde konaklamalı seyahatler—etkinlikler,
        yemekler ve konaklama dahil
      </p>
    </div>
    <div class="tours-wrapper">
      <div v-for="(tour, index) in tours" :key="index" class="tours-box">
        <div class="tours-box__inner">
          <a class="tours-box__link" href="#">
            <div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img :src="tour.photo" class="tours-box__img" />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">{{ tour.title }}</h3>
                <p class="tours-box__rating">4,5</p>
              </div>
              <p class="tours-box__state float">İzmir</p>
              <p class="tours-box__price">{{ tour.price }} TL</p>
            </div>
          </a>
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
      <div class="tours-box">
        <div class="tours-box__inner">
          <a href="#" class="tours-box__link"
            ><div class="tours-box__img-wrapper">
              <div class="tours-box__img-flex">
                <img
                  src="https://a0.muscache.com/im/pictures/90157089/180b2f6e_original.jpg?aki_policy=large"
                  class="tours-box__img"
                />
              </div>
            </div>
            <div class="tours-box__content">
              <div>
                <h3 class="tours-box__name">İzmir Tarih Turu</h3>
                <p class="tours-box__rating">2,4</p>
              </div>
              <p class="tours-box__state">Şanlıurfa</p>
              <p class="tours-box__price">3105 TL</p>
            </div></a
          >
        </div>
      </div>
    </div>
    <div class="tours-all w-full mb-4">
      <a class="tours-all__button" href="#"
        >Tümünü Göster <i class="tours-all_button-icon el-icon-arrow-right"></i
      ></a>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    tours() {
      return this.$store.state.Tours.tours
    }
  }
}
</script>
