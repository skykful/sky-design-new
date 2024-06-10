<template>
  <span class="logo">
    <img src="../assets/admin-logo.png" alt="sky-admin logo" />
    <h2>{{ title }}</h2>
  </span>
</template>

<script lang="ts" setup name="">
const title = import.meta.env.VITE_PRO_TITLE
</script>

<style lang="less">
.logo {
  display: inline-flex;
  flex-flow: row no-wrap;
  align-items: center;
  justify-content: center;
  img {
    height: 50px;
  }
  h2 {
    margin-left: 15px;
    font-size: 32px;
    font-weight: bold;
  }
}
</style>
