<template>
  <el-carousel class="login-swiper" :height="iheight">
    <el-carousel-item><img src="/f1.png" alt="" /></el-carousel-item>
    <el-carousel-item><img src="/f2.png" alt="" /></el-carousel-item>
    <el-carousel-item><img src="/f3.png" alt="" /></el-carousel-item>
    <el-carousel-item><img src="/f4.png" alt="" /></el-carousel-item>
    <el-carousel-item><img src="/f5.png" alt="" /></el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup name="">
interface Props {
  height?: number
  width?: number
}

const { height, width } = withDefaults(defineProps<Props>(), {
  height: 570,
  width: 480
})

const iheight = height + 'px'
const iwidth = width + 'px'
</script>

<style lang="less">
.el-carousel {
  width: v-bind(iwidth);
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
