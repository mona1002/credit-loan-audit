<template>
  <div id="app">
    <!-- <myHead></myHead> -->
   <keep-alive> <router-view class="Abody"></router-view>    </keep-alive>
    <!-- ======测试page================ -->
    <!-- {{ $route.meta}}
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="Abody"><slot>dafsdf</slot></router-view>
    </keep-alive> 
     <p v-if="!$route.meta.keepAlive" class="ccc"> 无内容 </p>
    <router-view v-if="!$route.meta.keepAlive" class="ccc"> </router-view> -->
<!-- ================================================================================================== -->
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
      window.onbeforeunload = this.loadpage(); //刷新跳转
    }
  }

</script>
<style>
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
  .fottt {
    position: absolute;
    left: 0;
    bottom: 1px;
    background: #e0eeff;
    height: 39px;
    z-index: 2;
  }

</style>
