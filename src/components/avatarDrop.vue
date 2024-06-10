<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <el-row align="middle">
      <el-avatar :icon="UserFilled" :size="32" />
      <span class="user-name">skykful</span>
    </el-row>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="changeRole">切换角色</el-dropdown-item>
        <el-dropdown-item command="userCenter">用户中心</el-dropdown-item>
        <el-dropdown-item command="userConfig">用户设置</el-dropdown-item>
        <el-dropdown-item command="exitLogin">退出登录</el-dropdown-item>
        <el-dropdown-item divided command="superAdmin">超级管理员</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'

const handleCommand = (cmd: string) => {
  ElNotification({
    title: cmd,
    message: 'This is a success message',
    type: 'success'
  })
}
</script>

<style lang="less">
.el-dropdown {
  .el-row {
    .user-name {
      margin-left: 8px;
    }
  }
}
</style>
