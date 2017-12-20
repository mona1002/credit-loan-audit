<template>
  <div id="app">

       <!-- <myHead></myHead> -->
       <!-- <img src="../static/img/20171122102421.png" width="100%"> -->
<!-- <el-row class="header"></el-row> -->
    <router-view class="Abody"></router-view>
    <div v-show="false" > </div>
  </div>

</template>

<script>
// import myHead from "./view/header"
  export default {

    mounted(){
      // console.log(this.$refs.ddd)
      
// taskNodeName:

// 初审审批
// creditApp_firstTrial   

// 终审审批
// creditApp_finalTrial_one
// creditApp_finalTrial_two
// creditApp_finalTrial_three
// creditApp_finalTrial_four
// creditApp_finalTrial_five

    },
    mounted(){

      
      //    this.post("/smUser/login", {
      //   userCode: "02103C3003",
      //   loginPassword: "111111"
      // }).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   reject(err)
      // });
    },
// components:{
//   myHead
// }
}

</script>

<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
  /* .header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
  } */
</style>
