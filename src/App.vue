<template>
  <div id="app">
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
