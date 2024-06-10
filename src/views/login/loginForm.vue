<template>
  <el-row class="login-form" justify="center" align="middle">
    <div class="login-title">
      欢迎回来
      <br />
      {{ title }}
    </div>
    <loginFormInner />
  </el-row>
</template>

<script lang="ts" setup name="">
import loginFormInner from './loginFormInner.vue'

interface Props {
  height?: number
  width?: number
}

const title = import.meta.env.VITE_PRO_TITLE
const { height, width } = withDefaults(defineProps<Props>(), {
  height: 570,
  width: 480
})

const iheight = height + 'px'
const iwidth = width + 'px'
</script>

<style lang="less">
.login-form {
  width: v-bind(iwidth);
  height: v-bind(iheight);
  flex-flow: column nowrap;
  .login-title {
    font-size: 30px;
    font-weight: bold;
    line-height: 42px;
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>
