<template>
  <div class="vnav">
    <router-link to="/">问卷管理</router-link>
    <router-link to="/answer">问卷结果</router-link>
  </div>
</template>

<script>
  export default {
    name: 'vnav'
  }
</script>

<style lang="scss" scoped>
@import '../../../style/vnav';
</style>