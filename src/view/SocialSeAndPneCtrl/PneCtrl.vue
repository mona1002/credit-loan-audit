<template>
  <div class="PneCtrl">
      <!-- 大数据风控 -->
    <!-- <myHead></myHead> -->
    <div class="outside">
      <div class="title">
        <ul>
          <li v-for="(item,index) in titles" class="tabdefault" :key='index' :class="{tab:ind==index}" @click="swiching($event,index,item)">{{item}} </li>
        </ul>
      </div>
      <div class="wrap">
        <div class="content">
          <RiskDecision v-if="ind==0"></RiskDecision>          
          <BaiRongData v-if="ind==1"></BaiRongData>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../header.vue'
  import BaiRongData from './PneCtrl/BaiRongData.vue'
  import RiskDecision from './PneCtrl/RiskDecision.vue'
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

  .PneCtrl {
    width: 100%;
    height: 100%;
    ;
  }

  .outside {
    margin: 13px 9px;
    height: calc(100% - 96px);
    width: calc(100% - 18px);
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
.wrap{
    height: calc(100% - 48px);  
}
  .content {
    height: 100%;
    overflow: auto;
  }

</style>
