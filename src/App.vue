<template>
  <div id="app">
    <myHead></myHead>
   <keep-alive> <router-view class="Abody"></router-view></keep-alive>
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

  @import "../static/css/base.css";
  @import "../static/css/common.css";
  @import "../static/css/element_UI.css";
  @import "../static/css/pagePublic.css";
  
  .fottt {
    position: absolute;
    left: 0;
    bottom: 1px;
    background: #e0eeff;
    height: 39px;
    z-index: 2;
  }
</style>
