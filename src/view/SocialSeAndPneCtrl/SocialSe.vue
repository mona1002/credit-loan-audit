<template>
  <div class="SocialSe">
    <!-- 大数据风控 -->
    <div class="outside">
      <div class="title">
        <ul>
          <li v-for="(item,index) in titles" class="tabdefault" :key='index' :class="{tab:ind==index}" @click="swiching(index)">{{item}} </li>
        </ul>
      </div>
      <div class="wrap">
        <div class="content">
          <SocialSeComponents v-if="ind==0"></SocialSeComponents>
          <AccumulationFund v-if="ind==1"></AccumulationFund>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SocialSeComponents from './SocialSeComponents/SocialSecurity.vue'
  import AccumulationFund from './SocialSeComponents/AccumulationFund.vue'
  export default {
    data() {
      return {
        ind: 0,
        titles: ['社保详情', '公积金详情']
      }
    },
    methods: {
      swiching(index) {
        this.ind = index;
      }
    },
    components: {
      SocialSeComponents,
      AccumulationFund
    }

  }

</script>
<style scoped>
  .tab {
    color: white;
    border-bottom: 1px solid white;
  }
</style>
