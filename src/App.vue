<template>
  <div id="app">
    <router-view class="Abody app_content"></router-view>
       <!-- <tag class="fottt"></tag> -->
  </div>
</template>
<script>
 import tag from './view/tag.vue';
 import appConstant from './util/constant'
  export default {
      components: {
     tag,
   }
  }
</script>
<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
.fottt{
  position: absolute;
  width:100%;
/* position: relative; */
bottom:0;
background: #e0eeff;
}
</style>
