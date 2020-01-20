<template>
  <div class="experience-detail">
    <div class="experience-spot">
      <div class="experience-inner">
        <div class="experience-breadcrumb mb-4">
          <breadcrumb :items="breadcrumbs" />
        </div>
        <gallery :gallery="gallery" :photo="experience.photo" />
        <div class="experience-header w-full float-left mt-4">
          <div class="experience-info w-9/12 float-left">
            <div class="experience-info__inner w-full">
              <basicInfo
                :title="experience.title"
                :sdescr="experience.sdescr"
              />
              <div class="w-full float-left">
                <rating
                  v-if="rating.length > 0"
                  :count="rateInfo.totalRate"
                  :rating="rateInfo.avgRate"
                />
                <stateTag
                  :seoLink="stateInfo.seoLink"
                  :stateName="stateInfo.name"
                  :stateId="experience.stateId"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="experience-content">
      <div class="experience-inner">
        <div class="experience-reservation w-3/12 float-right">
          <div class="experience-reservation__date">
            <reservationDate :reservations="reservations" />
          </div>
          <div class="experience-reservation__person-number">
            <reservationPerson />
          </div>
          <div class="experience-reservation__price">
            <pricing :price="experience.price" />
          </div>
          <button class="experience-reservation__button">
            Rezervasyon Yap
          </button>
        </div>
        <div class="experience-content-wrapper w-9/12 float-left">
          <div class="experience-labels">
            <labelDifficulty :difficulty="experience.difficulty" />
            <labelLanguage :language="experience.language" />
            <labelTime :time="experience.time" />
            <labelCapacity :capacity="experience.capacity" />
          </div>
          <div class="experience-plan">
            <subtitle title="Seyahat Planı" />
            <div class="experience-plan__descr">
              <plan :descr="experience.descr" />
            </div>
          </div>
          <div v-if="needs.length > 0" class="experience-needs">
            <subtitle title="Seyahat için gerekenler" />
            <div class="needs-content">
              <needs :needs="needs" />
            </div>
          </div>
          <div v-if="program.length > 0" class="experience-program">
            <subtitle title="Seyahat Programı" />
            <div class="program-content">
              <program :program="program" />
            </div>
          </div>
          <div
            v-if="experience.includedPrice.length > 0"
            class="experience-includedprice"
          >
            <subtitle title="Fiyata Dahil Olanlar" />
            <div class="includedprice-content">
              <includedPrice :content="experience.includedPrice" />
            </div>
          </div>
          <div
            v-if="experience.excludedPrice.length > 0"
            class="experience-excludedprice"
          >
            <subtitle title="Fiyata Dahil Olmayanlar" />
            <div class="excludedprice-content">
              <excludedPrice :content="experience.excludedPrice" />
            </div>
          </div>
          <div v-if="guestPhotos.length > 0" class="experience-guest-photos">
            <subtitle title="Misafir Fotoğrafları" />
            <div class="">
              <guestPhotos :photos="guestPhotos" class="photos-content" />
            </div>
          </div>
          <div v-if="rating.length > 0" class="experience-rating">
            <subtitle
              class="experience-rating__title"
              title="Misafir Değerlendirmeleri"
            />
            <rating
              :count="rateInfo.totalRate"
              :rating="rateInfo.avgRate"
              class="experience-rating__rateInfo"
            />
            <div class="rating-content">
              <comments :rating="rating" />
            </div>
          </div>
          <div class="experience-location">
            <subtitle title="Konum" />
            <div class="location-content">
              <location />
            </div>
          </div>
          <div v-if="experience.note.length > 0" class="experience-notes">
            <subtitle title="Dikkat edilmesi gerekenler" />
            <div class="notes-content">
              <notes :content="experience.note" />
            </div>
          </div>
          <div class="experience-similar">
            <subtitle title="Benzer Seyahatler" />
            <div class="similar-content">
              <similar-experience :experiences="similar" :boxSize="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '~/components/shared/breadcrumb.vue'
import gallery from '~/components/experiences/detail/gallery.vue'
import basicInfo from '~/components/experiences/detail/basicInfo.vue'
import rating from '~/components/experiences/detail/rating.vue'
import stateTag from '~/components/experiences/detail/stateTag.vue'
import pricing from '~/components/experiences/detail/pricing.vue'
import labelDifficulty from '~/components/experiences/detail/labelDifficulty.vue'
import labelLanguage from '~/components/experiences/detail/labelLanguage.vue'
import labelTime from '~/components/experiences/detail/labelTime.vue'
import labelCapacity from '~/components/experiences/detail/labelCapacity.vue'
import reservationDate from '~/components/experiences/detail/reservationDate.vue'
import reservationPerson from '~/components/experiences/detail/reservationPerson.vue'
import plan from '~/components/experiences/detail/plan.vue'
import needs from '~/components/experiences/detail/needs.vue'
import program from '~/components/experiences/detail/program.vue'
import includedPrice from '~/components/experiences/detail/includedPrice.vue'
import excludedPrice from '~/components/experiences/detail/excludedPrice.vue'
import guestPhotos from '~/components/experiences/detail/guestPhotos.vue'
import comments from '~/components/experiences/detail/comments.vue'
import location from '~/components/experiences/detail/location.vue'
import notes from '~/components/experiences/detail/notes.vue'
import subtitle from '~/components/experiences/detail/subtitle.vue'
import similarExperience from '~/components/experiences/experiencesList.vue'
export default {
  components: {
    breadcrumb,
    gallery,
    basicInfo,
    rating,
    stateTag,
    pricing,
    labelDifficulty,
    labelLanguage,
    labelTime,
    labelCapacity,
    reservationDate,
    reservationPerson,
    plan,
    needs,
    program,
    includedPrice,
    excludedPrice,
    guestPhotos,
    comments,
    location,
    notes,
    subtitle,
    similarExperience
  },
  computed: {
    breadcrumbs() {
      return [
        {
          link:
            '/' +
            this.stateInfo.seoLink +
            '/deneyimler/' +
            this.experience.stateId,
          label: this.stateInfo.name
        },
        {
          link:
            '/' +
            this.stateInfo.seoLink +
            '/deneyim/' +
            this.experience.seoLink +
            '/' +
            this.experience.id,
          label: this.experience.title
        }
      ]
    },
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
    },
    rateInfo() {
      return this.$store.state.experienceDetail.rateInfo
    },
    primaryCategory() {
      return this.$store.state.experienceDetail.category
    },
    reservations() {
      return this.$store.state.experienceDetail.reservations
    },
    similar() {
      return this.$store.state.experienceDetail.similar
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
        message: e
      })
    }
  }
}
</script>
