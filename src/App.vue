<template>
  <div id="app">

       <myHead></myHead>
       <!-- <img src="../static/img/20171122102421.png" width="100%"> -->
<!-- <el-row class="header"></el-row> -->
    <router-view id="Abody" ref="ddd"></router-view>
    <div v-show="false" > </div>
  </div>

</template>

<script>
import myHead from "./view/header"
  export default {
    mounted(){
      console.log(this.$refs.ddd)

    },
components:{
  myHead
}
}

</script>

<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
  .header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
  }
</style>
