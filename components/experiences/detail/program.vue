<template>
  <div>
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in program"
        :key="index"
        :timestamp="item.day + '. gün'"
        placement="top"
      >
        <div class="program-box">
          <div class="program-box__photo w-4/12">
            <img :src="item.photo" />
          </div>
          <div class="program-box__content w-8/12">
            <h4 class="program-box__title">{{ item.title }}</h4>
            <p class="program-box__descr">
              {{ item.descr }}
            </p>
          </div>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  props: {
    program: {
      type: Array,
      required: true
    }
  }
}
</script>
