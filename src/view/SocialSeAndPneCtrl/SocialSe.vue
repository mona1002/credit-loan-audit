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
          <SocialSeComponents :custName='getInf.custName'  :certCode='getInf.certCode' v-if="ind==0"></SocialSeComponents>
          <AccumulationFund  v-if="ind==1"></AccumulationFund>
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
        titles: ['社保详情', '公积金详情'],
        custname:'',
        custCode:''
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/SocialSe') {
          // this.custname=Math.random()
          this.flagmark();
            this.custname=this.getInf.custName;
        this.custCode=this.getInf.certCode;
        }
      }
    },
    methods: {
      swiching(index) {
        this.ind = index;
      },
      flagmark() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.getInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
        } else if (this.judgeFlag.flag == '02') {
          this.getInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
          this.getInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
        }
        //  else if (this.judgeFlag.flag == '04') {
        //   this.getInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
        // }
        else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
          this.getInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
        } else if (this.judgeFlag.flag == '07' || this.judgeFlag.flag == '08' || this.judgeFlag.flag == '09' || this.judgeFlag
          .flag == '10' || this.judgeFlag.flag == '11' || this.judgeFlag.flag == '13') {
          this.getInf = JSON.parse(localStorage.getItem("FGQTTaskWait")) //质检 专员
        }
      }
    },
    created() {
      this.flagmark();
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
