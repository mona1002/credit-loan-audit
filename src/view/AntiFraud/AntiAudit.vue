<template>
  <!-- 反欺诈分屏 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <p class="PerDtl">
      <span> 借款人：{{accepCusBasicInfo.custName}}</span>
      <span> 进件编号：{{customInf.applyMainNo}}</span>
      <span> 证件号码：{{accepCusBasicInfo.certCode}}</span>
      <span> 移动电话：{{accepCusBasicInfo.mobile}}</span>
      <span> 进件机构：{{customInf.appOrgName}}</span>
      <span> 门店成立时间：{{customInf.appOrgRegisterDate}}</span>
      <span> 业务员入职时间：{{customInf.salPerEmployDate}}</span>
      <span>{{customInf.adminIntroduce}}</span>
    </p>
    <div class="SplitScreen_wrap content_not_split">
      <div class="right" ref="rRight">
        <div class="Right_tab_title_div">
          <span class="pre_next_btn_wrap" @click="leftMovingBtn">
            <img src="../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
            <img src="../../../static/images/Shaperight@1x.png">
          </span>
          <div class="Right_tab_ul_wrap">
            <ul ref="right_tab_ul" style="left:0;right:0; width: 1700px;">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)"
                :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <div class="tab2_Content">
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==0" :applyId='tastwaitingPass.applyId'></AudioVisual>
          </keep-alive>
          <cremark v-if=" this.tabContent2==1"></cremark>
          <InternalMatch v-if=" this.tabContent2==2"></InternalMatch>
          <keep-alive v-if="Routes.closed">
            <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3" :applyId='tastwaitingPass.applyId'
              :roles='Flag=="03"?"antiFraudApp_commissioner":"antiFraudApp_manager" '></capplicationInformationDetail>
          </keep-alive>
          <AborrowerInformationDetail v-if=" this.tabContent2==4"></AborrowerInformationDetail>
          <PhoneCredit v-if=" this.tabContent2==5" :addBtn="false"></PhoneCredit>
          <FCreditForm :myWatch="watchData" v-if=" this.tabContent2==6" :applyId='tastwaitingPass.applyId'
            :FinalConCheckShow='true'></FCreditForm>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==7" :applyId='tastwaitingPass.applyId'></creditInvestigation>
          </keep-alive>
          <aAprovalConclusion v-if=" this.tabContent2==8"></aAprovalConclusion>
          <aAntiConclusionPath v-if=" this.tabContent2==9"></aAntiConclusionPath>
          <AntiApplyInf v-if=" this.tabContent2==10">反欺诈申请信息</AntiApplyInf>
          <aAntiFraudInvestigation v-if=" this.tabContent2==11" :applyId='tastwaitingPass.applyId' :PropshowBtn='Flag=="03"?true:false'>反欺诈调查</aAntiFraudInvestigation>
          <approvalConclus v-if=" this.tabContent2==12">审批结论</approvalConclus>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AudioVisual from '../FirstTrail/detailComponent/AudioVisual.vue'; //工作台
  import cremark from '../FirstTrail/checkComponent/remarkDetail.vue' //备注信息
  import capplicationInformationDetail from "../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import AborrowerInformationDetail from "../FirstTrail/checkComponent/borrowerInformationDetail.vue"; //借款人资料
  import FCreditForm from "../FinalTrial/FCreditForm.vue"; //信审表
  import creditInvestigation from "../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import aAprovalConclusion from './components/aAprovalConclusion.vue' //信审审批结论轨迹
  import aAntiConclusionPath from './components/aAntiConclusionPath.vue'; //反欺诈审批结论轨迹
  import AntiApplyInf from './AntiApplyInf.vue' //反欺诈申请信息
  import aAntiFraudInvestigation from './components/aAntiFraudInvestigation.vue' //反欺诈调查
  import approvalConclus from './approvalConclus.vue' //审批结论  
  import InternalMatch from "../FirstTrail/InternalMatch.vue";
  import PhoneCredit from "../FirstTrail/PhoneCredit.vue";
  export default {
    data() {
      return {
        SplitLeft: "left",
        SplitRight: "right",
        watchData: '',
        loading: false,
        Flag: '',
        accepCusBasicInfo: '',
        // 进件人信息
        customInf: {}, //申请信息页local字段
        tastwaitingPass: {}, //详情列表页信息--(含)取applyId
        accepCusBasicInfo: {},
        title: "",
        isShow: false,
        tabContent2: 3,
        tabActiveInd2: 3,
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "信审审批结论轨迹", "反欺诈审批结论轨迹", "反欺诈申请信息",
          "反欺诈调查", "审批结论"
        ],
        tab2Index: 3,
        AlertSearch: "",
        Routes: this.$router.options.routes[10],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/AntiAudit' && this.$route.params.newOne) {
          this.Routes.closed = false;
          this.customInf = {};
          this.accepCusBasicInfo = {};
          this.mountedInf();
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
        }
      }
    },
    activated() {
      this.Routes.closed = true;
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈
        this.Flag = JSON.parse(localStorage.getItem("judge")).flag;
      },
      leftMovingBtn() {
        if (parseFloat(this.$refs.right_tab_ul.style.left) >= 0) {
          this.$refs.right_tab_ul.style.left = "0"
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) + 50 + "px";
        }
      },
      rightMovingBtn() {
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= -300) {
          this.$refs.right_tab_ul.style.left = "-300px";
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) - 50 + "px";
        }
      },
      tab(ev, ind, val) {
        this.tabContent2 = ind;
        this.tab2Index = ind;
        this.tabActiveInd2 = ind;
      }
    },
    created() {
      this.mountedInf();
    },
    components: {
      AudioVisual,
      FCreditForm,
      aAntiConclusionPath,
      aAprovalConclusion,
      AntiApplyInf, //反欺诈申请信息
      approvalConclus, //审批结论
      aAntiFraudInvestigation, //反欺诈调查
      cremark, //备注信息
      AborrowerInformationDetail, //借款人资料
      capplicationInformationDetail, //申请信息
      InternalMatch,
      PhoneCredit,
      creditInvestigation,
    }
  }

</script>
