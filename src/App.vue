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
data(){
return{
  // 标识：01 初审-工作台 ；  02  终审-工作台； 03 初审-内部匹配 ； 04 终审-内部匹配；
  // localstorage字段：  judge：{flag：01 }  （示例）
}
},
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
updated () {
  // this.$nextTick(function () {
  //   // Code that will run only after the
  //   // entire view has been re-rendered
  //     var k=document.getElementsByClassName("el-select-dropdown el-popper")
  //     console.log(document.getElementsByClassName("el-select-dropdown el-popper") )
  //     console.log(k)
  // })
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
