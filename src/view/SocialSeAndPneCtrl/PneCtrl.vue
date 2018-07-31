<template>
  <div class="PneCtrl">
    <!-- 大数据风控 -->
    <div class="outside">
      <div class="title">
        <ul>
          <li v-for="(item,index) in titles" class="tabdefault" :key='index' :class="{tab:ind==index}" @click="swiching($event,index,item)">{{item}} </li>
        </ul>
      </div>
      <div class="wrap">
        <!-- <RiskDecision v-if="ind==0"></RiskDecision>
          <BaiRongData v-if="ind==1"></BaiRongData> -->
        <!-- <div class="content">
          <BaiRongData v-if="ind==1" :applyId='localInf.applyId'>百融数据</BaiRongData>
          <RiskDecision v-if="ind==0" :applyId='localInf.applyId'>同盾风险决策</RiskDecision>
        </div> -->
        <div class="content">
          <RiskPoint v-if="ind==0" :applySubNo='localInf.applySubNo'>风控指引</RiskPoint>
          <complexPic v-if="ind==1"  :applySubNo='localInf.applySubNo'>复杂网络图谱</complexPic>
          <OcrMessage v-if="ind==2" :applySubNo='localInf.applySubNo'>OCR信息</OcrMessage>
          <portrait v-if="ind==3" :applySubNo='localInf.applySubNo'>同盾设备画像</portrait>
          <!-- <test v-if="ind==4" :applySubNo='localInf.applySubNo'>网查征信报告</test> -->
          <!-- <ZxReport v-if="ind==4" :applySubNo='localInf.applySubNo'>网查征信报告</ZxReport> -->
          <!-- <carrierReport v-if="ind==5" :applySubNo='localInf.applySubNo'>运营商报告</carrierReport> -->
          <debitCardReport v-if="ind==6" :applySubNo='localInf.applySubNo'>储蓄卡报告</debitCardReport>
          <AccumulationFundReport v-if="ind==7" :applySubNo='localInf.applySubNo'>公积金报告</AccumulationFundReport>
          <SocialSecurityReport v-if="ind==8" :applySubNo='localInf.applySubNo'>社保报告</SocialSecurityReport>
          <BaiRongData v-if="ind==9" :applyId='localInf.applyId'>百融数据</BaiRongData>
          <RiskDecision v-if="ind==10" :applyId='localInf.applyId'>同盾风险决策</RiskDecision>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BaiRongData from './PneCtrl/BaiRongData.vue'
  import RiskDecision from './PneCtrl/RiskDecision.vue'
  import SocialSecurityReport from './PneCtrl/SocialSecurityReport.vue'
  import AccumulationFundReport from './PneCtrl/AccumulationFundReport.vue'
  import portrait from './PneCtrl/portrait.vue'
  import RiskPoint from './PneCtrl/RiskPoint.vue'
  import OcrMessage from './PneCtrl/OcrMessage.vue'
  import complexPic from './PneCtrl/complexPic.vue'
  import carrierReport from './PneCtrl/carrierReport.vue'
  import ZxReport from './PneCtrl/360ZxReport.vue'
  import debitCardReport from './PneCtrl/debitCardReport.vue'
  import test from './PneCtrl/test.vue'


  export default {
    data() {
      return {
        ind: 0,
        // titles: ['同盾风险决策', '百融数据'],
        titles: ['风控指引', '复杂网络图谱', 'OCR信息', '同盾设备画像', '网查征信报告', '运营商报告', '储蓄卡报告', '公积金报告', '社保报告', '百融数据', '同盾风险决策'],
        localInf: {},
        judgeFlag: ''
      }
    },
    watch: {
      '$route' (to, from) {
        from.meta.newOne = false;
        console.log(this.$route)
        if (to.path === '/PneCtrl' && this.$route.params.newOne) {
          this.getInf();
          this.ind = 0;
        }
      }
    },
    methods: {
      swiching(e, index, val) {
        this.ind = index;
      },
      getInf() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
        } else if (this.judgeFlag.flag == '02') {
          this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
          this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
        } //  else if (this.judgeFlag.flag == '04') {
        //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
        // }
        else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
          this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
        } else if (this.judgeFlag.flag == '07' || this.judgeFlag.flag == '08' || this.judgeFlag.flag == '09' || this.judgeFlag
          .flag == '10' || this.judgeFlag.flag == '11' || this.judgeFlag.flag == '13') {
          this.localInf = JSON.parse(localStorage.getItem("FGQTTaskWait")) //质检 专员、主管、初终审本人任务列表、初终审主管、复议任务列表（首次） ---区域无社保公积金按钮、合规经理任务列表
        }
        // this.localInf.applySubNo = 'PHDX6409598026121216';
        //  this.localInf.applySubNo = 'test999999'
        // this.localInf.applySubNo = '201807180173030264';
        // this.localInf.applyId = '9e56e245-bd30-4a51-97e9-c255ea7171b6';
      }
    },
    created() {
      this.getInf();
    },
    components: {
      BaiRongData,
      RiskDecision,
      SocialSecurityReport,
      AccumulationFundReport,
      portrait,
      RiskPoint,
      OcrMessage,
      complexPic,
      carrierReport,
      ZxReport,
      debitCardReport,
      test
    }

  }

</script>
<style scoped>
  .tab {
    color: white;
    border-bottom: 1px solid white;
  }

</style>
