<template>
  <div class="experience-detail">
    <div class="experience-spot">
      <div class="experience-inner">
        <div class="experience-breadcrumb mb-4">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >Anasayfa</el-breadcrumb-item
            >
            <el-breadcrumb-item
              :to="`/${stateInfo.seoLink}/deneyimler/${experience.stateId}`"
              >{{ stateInfo.name }}</el-breadcrumb-item
            >
            <el-breadcrumb-item>Kamp ve Macera</el-breadcrumb-item>
            <el-breadcrumb-item>{{ experience.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="experience-gallery">
          <div class="experience-gallery__item">
            <img :src="experience.photo" class="experience-gallery__img" />
          </div>
          <div
            v-for="(item, index) in gallery"
            :key="index"
            class="experience-gallery__item"
          >
            <img :src="item.photo" class="experience-gallery__img" />
          </div>
        </div>
        <div class="experience-header w-full float-left mt-4">
          <div class="experience-info w-9/12 float-left">
            <div class="experience-info__inner w-full">
              <h1 class="experience-info__title">{{ experience.title }}</h1>
              <p class="experience-info__descr">{{ experience.sdescr }}</p>
              <el-rate
                :value="experience.difficulty"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                class="experience-info__rate"
                disabled
                disabled-void-color="#b9b9b9"
              >
              </el-rate>
              <nuxt-link
                :to="`/${stateInfo.seoLink}/deneyimler/${experience.stateId}`"
                class="experience-info__location"
                ><i
                  class="experience-location__icon el-icon-location-outline"
                ></i
                >{{ stateInfo.name }}, Türkiye</nuxt-link
              >
            </div>
          </div>
          <div class="experience-reservation w-3/12 float-left">
            <div class="experience-reservation__price">
              <strong>{{ experience.price }} TL</strong> / kişi başı
            </div>
            <button class="experience-reservation__button">
              Tarihleri Gör
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="experience-content">
      <div class="experience-inner">
        <div class="experience-labels">
          <div class="label-box w-3/12">
            <div class="label-box__inner w-full">
              <div class="w-3/12 float-left">
                <i class="label-box__icon el-icon-set-up"></i>
              </div>
              <div class="w-9/12 float-left">
                <p class="label-box__text">Zorluk Düzeyi</p>
                <p
                  :style="{
                    color: difficultyTitle[experience.difficulty].color
                  }"
                  class="label-box__data"
                >
                  {{ difficultyTitle[experience.difficulty].title }}
                </p>
              </div>
            </div>
          </div>
          <div class="label-box w-3/12">
            <div class="label-box__inner w-full">
              <div class="w-3/12 float-left">
                <i class="label-box__icon el-icon-chat-line-round"></i>
              </div>
              <div class="w-9/12 float-left">
                <p class="label-box__text">Dil</p>
                <p class="label-box__data">
                  {{ languageName[experience.languageId] }}
                </p>
              </div>
            </div>
          </div>
          <div class="label-box w-3/12">
            <div class="label-box__inner w-full">
              <div class="w-3/12 float-left">
                <i class="label-box__icon el-icon-time"></i>
              </div>
              <div class="w-9/12 float-left">
                <p class="label-box__text">Süre</p>
                <p class="label-box__data">{{ experience.time }} gün</p>
              </div>
            </div>
          </div>
          <div class="label-box w-3/12">
            <div class="label-box__inner w-full">
              <div class="w-3/12 float-left">
                <i class="label-box__icon el-icon-user"></i>
              </div>
              <div class="w-9/12 float-left">
                <p class="label-box__text">Misafir Sayısı</p>
                <p class="label-box__data">{{ experience.capacity }} kişi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="experience-plan">
          <h2>
            <span class="experience-plan__title experience-detail__subtitle"
              >Seyahat Planı</span
            >
          </h2>
          <div class="experience-plan__descr">
            {{ experience.descr }}
          </div>
        </div>
        <div class="experience-needs">
          <h2>
            <span class="experience-needs__title experience-detail__subtitle"
              >Seyahat için gerekenler</span
            >
          </h2>
          <div class="needs-content">
            <div
              v-for="(item, index) in needs"
              :key="index"
              class="needs-content__item"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class="experience-program">
          <h2>
            <span class="experience-program__title experience-detail__subtitle"
              >Seyahat Programı</span
            >
          </h2>
          <div class="program-content">
            <el-timeline>
              <el-timeline-item
                v-for="(item, index) in program"
                :key="index"
                :timestamp="item.day + '. gün'"
                placement="top"
              >
                <div class="program-box">
                  <div class="program-box__photo w-3/12">
                    <img :src="item.photo" />
                  </div>
                  <div class="program-box__content w-9/12">
                    <h4 class="program-box__title">{{ item.title }}</h4>
                    <p class="program-box__descr">
                      {{ item.descr }}
                    </p>
                  </div>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <div class="experience-includedprice">
          <h2>
            <span
              class="experience-includedprice__title experience-detail__subtitle"
              >Fiyata Dahil Olanlar</span
            >
          </h2>
          <div class="includedprice-content">
            {{ experience.includedPrice }}
          </div>
        </div>
        <div class="experience-excludedprice">
          <h2>
            <span
              class="experience-excludedprice__title experience-detail__subtitle"
              >Fiyata Dahil Olmayanlar</span
            >
          </h2>
          <div class="excludedprice-content">
            {{ experience.excludedPrice }}
          </div>
        </div>
        <div class="experience-guest-photos">
          <h2>
            <span
              class="experience-guest-photos__title experience-detail__subtitle"
              >Misafir Fotoğrafları</span
            >
          </h2>
          <div class="photos-content">
            <div
              v-for="(item, index) in guestPhotos"
              :key="index"
              class="photos-content__item w-4/12 float-left"
            >
              <img :src="item.photo" class="photos-content__photo" />
            </div>
          </div>
        </div>
        <div class="experience-rating">
          <h2>
            <span class="experience-rating__title experience-detail__subtitle"
              >Misafir Değerlendirmeleri</span
            >
          </h2>
          <div class="rating-content">
            <div
              v-for="(item, index) in rating"
              :key="index"
              class="rating-box w-full"
            >
              <div class="rating-box__header w-4/12">
                <div class="rating-box__avatar">
                  <el-avatar :size="50"> MK </el-avatar>
                </div>
                <div class="rating-box__user-info">
                  <p class="rating-box__user-name">Mehmet Koçer</p>
                  <p class="rating-box__date">{{ item.createDate }}</p>
                  <p class="rating-box__rate">
                    <el-rate
                      :value="item.star"
                      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                      class="experience-info__rate"
                      disabled
                      disabled-void-color="#b9b9b9"
                    >
                    </el-rate>
                  </p>
                </div>
              </div>
              <div class="rating-box__content w-8/12">
                <p class="rating-box__title">{{ item.title }}</p>

                <p class="rating-box__descr">{{ item.descr }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="experience-guest-photos">
          <h2>
            <span
              class="experience-guest-photos__title experience-detail__subtitle"
              >Konum</span
            >
          </h2>
          <div class="photos-content">
            konumda ha buraya gelecek
          </div>
        </div>
        <div class="experience-guest-photos">
          <h2>
            <span
              class="experience-guest-photos__title experience-detail__subtitle"
              >Dikkat edilmesi gerekenler</span
            >
          </h2>
          <div class="photos-content">
            {{ experience.note }}
          </div>
        </div>
        <div class="experience-guest-photos">
          <h2>
            <span
              class="experience-guest-photos__title experience-detail__subtitle"
              >Benzer Seyahatler</span
            >
          </h2>
          <div class="photos-content">
            Ha burayada benzer seyatler gelecek
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficultyTitle: {
        1: {
          title: 'Çok Kolay',
          color: '#72de84'
        },
        2: {
          title: 'Kolay',
          color: '#1baf34'
        },
        3: {
          title: 'Orta',
          color: '#ff8822'
        },
        4: {
          title: 'Zor',
          color: '#e86464'
        },
        5: {
          title: 'Çok Zor',
          color: '#ec0404'
        }
      },
      languageName: {
        1: 'Türkçe',
        2: 'İngilizce'
      }
    }
  },
  computed: {
    experience() {
      return this.$store.state.experienceDetail.experience
    },
    stateInfo() {
      return this.$store.state.experienceDetail.stateInfo
    },
    gallery() {
      return this.$store.state.experienceDetail.gallery
    },
    program() {
      return this.$store.state.experienceDetail.program
    },
    needs() {
      return this.$store.state.experienceDetail.needs
    },
    guestPhotos() {
      return this.$store.state.experienceDetail.guestPhotos
    },
    rating() {
      return this.$store.state.experienceDetail.rating
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
