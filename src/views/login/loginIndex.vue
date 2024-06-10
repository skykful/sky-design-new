<template>
  <el-container class="loginIndex">
    <el-header><logo /></el-header>
    <el-main><loginMain /></el-main>
    <el-footer>
      <small> skykful@github.com — 18268210372 — 1048210674 </small>
    </el-footer>
    <div class="ball ball1"></div>
    <div class="ball ball2"></div>
    <div class="ball ball3"></div>
    <div class="ball ball4"></div>
  </el-container>
</template>

<script lang="ts" setup name="">
import logo from '@/components/logo.vue'
import loginMain from './loginMain.vue'
</script>

<style lang="less">
.loginIndex {
  overflow: hidden;
  position: relative;
  background-color: #d5eeef;
  .el-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .el-main {
    height: calc(~'100vh - 60px * 2');
  }
  .el-footer {
    text-align: center;
    line-height: 60px;
  }
  .ball {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    z-index: 1;
  }
  .ball1 {
    width: 400px;
    height: 400px;
    top: 60px;
    right: -60px;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    z-index: 1;
  }
  .ball2 {
    width: 280px;
    height: 280px;
    top: 320px;
    right: -70px;
    background: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    z-index: 2;
  }
  .ball3 {
    width: 360px;
    height: 360px;
    bottom: -60px;
    left: -20px;
    background: linear-gradient(
      to right,
      #ff8177 0%,
      #ff867a 0%,
      #ff8c7f 21%,
      #f99185 52%,
      #cf556c 78%,
      #b12a5b 100%
    );
    z-index: 3;
  }
  .ball4 {
    width: 230px;
    height: 230px;
    bottom: 110px;
    left: 300px;
    background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
    z-index: 4;
  }
}
</style>
