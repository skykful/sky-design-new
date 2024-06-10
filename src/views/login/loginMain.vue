<template>
  <el-row class="login-main" justify="space-between" align="middle">
    <loginSwiper />
    <loginForm />
  </el-row>
</template>

<script lang="ts" setup name="">
import loginSwiper from './loginSwiper.vue'
import loginForm from './loginForm.vue'
</script>

<style lang="less">
.login-main {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  width: 1000px;
  height: 600px;
  padding: 15px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 0 20px #ccc;
  overflow: hidden;
}
</style>
