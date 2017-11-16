<template>
  <div id="app">
    <!-- <h1>nav daohang</h1> -->
    <router-view id="Abody"></router-view>
    <div v-show="false" > </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
</style>
