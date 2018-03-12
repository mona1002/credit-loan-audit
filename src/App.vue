<template>
  <div id="app">
    <router-view class="Abody main" @onbeforeunload="aaa "></router-view>
    <!-- <tag class="fottt"></tag> -->
  </div>

</template>

<script>
  // import myHead from "./view/header"
  // import tag from './view/tag.vue'
  // import appConstant from './util/constant'

  export default {
    data() {
      return {
        // 标识：01 初审-工作台 ；  02  终审-工作台； 03 初审-内部匹配 ； 04 终审-内部匹配；
        // localstorage字段：  judge：{flag：01 }  （示例）
      }
    },
    methods: {
      aaa() {
        console.log("刷新");
        // this.$created(function(){
        //   console.log("页面刷新啦啦啦啦")
        // })

        // 方法1
        //  this.$router.push({
        //         path: '/',
        //       });
        // 方法2
        // window.location.href = appConstant.path;
      },
      reload() {
        // location.reload()
      }
    },
    created() {
      // 存在 localStorage 的缓存内容
      // console.log("页面刷新")
      // if (localStorage.data) {
      //   this.myData = JSON.parse(localStorage.data)
      // }
      // else {
      //   // 页面无缓存内容时，初始化数据并写入缓存
      //   this.initData()
      // }
    },
    mounted() {
      // this.$router.push({
      //   path: '/',
      // });
      // 初审审批
      // creditApp_firstTrial    

      // 终审审批
      // creditApp_finalTrial_one
      // creditApp_finalTrial_two
      // creditApp_finalTrial_three
      // creditApp_finalTrial_four
      // creditApp_finalTrial_five
    },
    components: {
      // tag,
    }
  }

</script>

<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
  .main{
  height: 800px;
  overflow: hidden;
  background: #000;
}

  .fottt {
    position: absolute;
    bottom: 0;
  }
#app{
  overflow-x: hidden;
  min-width: 1366px;
}
</style>
