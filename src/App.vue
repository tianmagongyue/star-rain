<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view/>
  </div>
</template>

<script>
import vNav from './components/Home/vnav'
export default {
  name: 'App',
  components:{
    vNav
  }
}
</script>

<style lang="scss" scoped>
@import "../style/app";
</style>
