<template>
  <div id="app">
    <router-view class="Abody main" @onbeforeunload="aaa "></router-view>
  </div>

</template>

<script>

  export default {
  }

</script>

<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";

#app{
  overflow-x: hidden;
  min-width: 1366px;
}
</style>
