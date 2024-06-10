<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in route.matched" :key="item.name">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
