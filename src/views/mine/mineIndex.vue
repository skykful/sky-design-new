<template>
  <el-container class="mine-container">
    <el-header>
      <headerIndex />
    </el-header>
    <el-container>
      <leftsideIndex />
      <el-main>
        <routeTags />
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup name="">
import leftsideIndex from '@/views/leftside/leftsideIndex.vue'
import routeTags from '@/components/routeTags.vue'
import headerIndex from '@/views/header/headerIndex.vue'
</script>

<style lang="less">
.mine-container {
  @bb: 1px solid #eee;
  .el-header {
    border-bottom: @bb;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .el-container {
    height: calc(~'100vh' - 60px);

    .el-aside,
    .el-main {
      height: 100%;
    }
    .el-main {
      overflow-y: auto;
      position: relative;
      padding-top: 45px;
    }
  }
}
</style>
