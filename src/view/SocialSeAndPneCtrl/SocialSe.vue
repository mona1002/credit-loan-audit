<template>
  <div class="SocialSe">
    <!-- 社保公积金 -->
    <myHead></myHead>
    <div class="outside">
      <div class="title">
        <ul>
          <li v-for="(item,index) in titles" class="tabdefault" :key='index' :class="{tab:ind==index}" @click="swiching($event,index,val)">{{item}} </li>
        </ul>
      </div>
      <div class="wrap">
        <div class="content">
          <BaiRongData v-if="ind==0"></BaiRongData>
          <RiskDecision v-if="ind==1"></RiskDecision>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../header.vue'
  import BaiRongData from './SocialSeComponents/BaiRongData.vue'
  import RiskDecision from './SocialSeComponents/RiskDecision.vue'
  export default {
    data() {
      return {
        ind: 0,
        titles: ['同盾风险决策', '百融数据']
      }
    },
    methods: {
      swiching(e, index, val) {
        this.ind = index;
      }
    },
    components: {
      myHead,
      BaiRongData,
      RiskDecision
    }

  }

</script>
<style scoped>
  .tabdefault {
    color: #bfcbd9;
  }

  .tab {
    color: white;
    border-bottom: 1px solid white;
  }

  .SocialSe {
    width: 100%;
    height: 100%;
    ;
  }

  .outside {
    margin: 9px 13px;
    height: calc(100% - 88px);
    width: calc(100% - 26px);
    border: 1px solid #bfcbd9;
    border-radius: 4px;
  }

  .title {
    font-size: 16px;
    background: rgba(0, 119, 255, 0.75);
    height: 48px;
    line-height: 48px;
    overflow: hidden;
    position: relative;
  }

  .title li {
    display: inline-block;
    margin-left: 20px;
    height: 42px;
  }

  .title li:hover {
    cursor: pointer;
  }

  .content {
    height: calc( 100% - 48px);
    overflow: auto;
  }

</style>
