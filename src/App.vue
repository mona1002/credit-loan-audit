<template>
  <div id="app">
    <!-- <myHead></myHead> -->
    <!-- <router-view class="Abody" @onbeforeunload="aaa"></router-view> -->
    <router-view class="Abody"></router-view>
    <!-- <tag class="fottt"></tag> -->
  </div>
</template>
<script>
  import myHead from './view/header.vue';
  import tag from './view/tag.vue';
  import appConstant from './util/constant'
  export default {
    components: {
      tag,
      myHead
    },
    methods: {
      addfdf(){
        // get
        this.get("/credit/queryCityCounty", {
          parentCode: this.checkData.workProvince,
        }).then(res => {
          if (res.statusCode == 200) {
            this.hireProvincd = res.data;
            this.checkData.workCounty = "";
            this.checkData.workCountyName = "";
            this.hireTown = "";
          } else {
            this.$message.error(res.msg);
          }
        });
        //post
         this.post("/workFlowTaskQuery/getTaskProfile", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      aaa() {
        console.log("刷新");
        //  this.$created(function(){
        //    console.log("页面刷新啦啦啦啦")
        //  })
        this.$store.dispatch('delAllViews')
        // 方法1
        this.$router.push({
          path: '/',
        });
        // 方法2
        // window.location.href = appConstant.path;

      },
      reload() {
        console.log("刷新");

        location.reload()

      },
      beDestory() {
        // 在此同样可对 localStorage 做一些处理
        console.log('aaaaaaaaaaaaaa')
        this.$store.dispatch('delAllViews')
        // 方法1
        this.$router.push({
          path: '/',
        });
      },
    },
    mounted() {
      // window.onbeforeunload = this.aaa(); //刷新跳转
      // window.history.back()=this.beDestory()
    }
  }

</script>
<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
  /* .Abody{
   width: 100%;
    height: calc( 100% - 70px);
  } */

  .fottt {
    position: absolute;
    bottom: 0;
    background: #e0eeff;
    height: 39px;
  }

</style>
