<template>
  <div id="app">
    <!-- <myHead></myHead> -->
    <router-view class="Abody"></router-view>
    <tag class="fottt"></tag>
  </div>
</template>
<script>
  import myHead from './view/header.vue';
  import tag from './view/tag.vue';
  export default {
    components: {
      tag,
      myHead
    },
    methods: {
      addfdf() {
        // get    location.reload()
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
        this.post("/", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      loadpage() {
        this.$store.state.visitedViews = [{
          name: '工作台',
          path: '/',
          flag: '',
          params: '',
          StatefullPath: "/"
        }];
        this.$router.push({
          path: '/',
        });
      },
    },
    mounted() {
      // window.onbeforeunload = this.loadpage(); //刷新跳转
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
