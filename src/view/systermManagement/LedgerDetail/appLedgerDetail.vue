<template>
  <!-- 申请台账详情 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <p class="PerDtl">
      <span> 借款人：{{accepCusBasicInfo.custName}}</span>
      <span> 进件编号：{{accepCusBasicInfo.applyMainNo}}</span>
      <span> 证件号码：{{accepCusBasicInfo.certCode}}</span>
      <span> 移动电话：{{accepCusBasicInfo.mobile}}</span>
      <span> 进件机构：{{accepCusBasicInfo.applyOrgName}}</span>
      <span> 门店成立时间：{{accepCusBasicInfo.applyOrgRegisterDate}}</span>
      <span> 业务员入职时间：{{accepCusBasicInfo.directSalesEmpDate}}</span>
      <span>{{accepCusBasicInfo.adminIntroduce}}</span>
    </p>
    <div class="SplitScreen_wrap content_not_split">
      <div class="right" ref="rRight">
        <div class="Right_tab_title_div">
          <div class="Right_tab_ul_wrap" style="margin-left:15px">
            <ul ref="right_tab_ul">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)"
                :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <div class="tab2_Content">
          <keep-alive v-if="Routes.closed">
            <capplicationInformationDetail v-if=" this.tabContent2==0" :applyId='tastwaitingPass.id' roles='applyLedger'></capplicationInformationDetail>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==1" :applyId='tastwaitingPass.id'></creditInvestigation>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==2" :applyId='tastwaitingPass.id'></AudioVisual>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AudioVisual from '../../FirstTrail/detailComponent/AudioVisual.vue'; //工作台--》 av
  import capplicationInformationDetail from "../../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import creditInvestigation from "../../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  export default {
    data() {
      return {
        loading: false,
        accepCusBasicInfo: {}, // 进件人信息
        tastwaitingPass: {}, //详情列表页信息--(含)取applyId
        tabContent2: 0,
        items2: ["申请信息", "实地征信", "影像资料"],
        tab2Index: 0,
        Routes: this.$router.options.routes[32],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/appLedgerDetail' && this.$route.params.newOne) {
          this.Routes.closed = false;
          this.accepCusBasicInfo = {};
          this.mountedInf();
          this.tab2Index = this.tabContent2 = 0;
        }
      }
    },
    activated() {
      this.Routes.closed = true;
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("appLedgerTW")); //申请台账id就为applyid
      },
      tab(ev, ind, val) {
        this.tabContent2 = ind;
        this.tab2Index = ind;
      }
    },
    created() {
      this.mountedInf();
    },
    components: {
      AudioVisual,
      capplicationInformationDetail, //申请信息
      creditInvestigation,
    }
  }

</script>
