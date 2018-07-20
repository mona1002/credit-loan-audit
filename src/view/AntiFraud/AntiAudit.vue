<template>
  <!-- 反欺诈分屏 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
      <!-- 进件人详情 -->
      <p class="PerDtl">
        <span> 借款人：{{accepCusBasicInfo.custName}}</span>
        <span> 进件编号：{{customInf.applyMainNo}}</span>
        <span> 证件号码：{{tastwaitingPass.certCode}}</span>
        <span> 移动电话：{{accepCusBasicInfo.mobile}}</span>
        <span> 进件机构：{{customInf.appOrgName}}</span>
        <span> 门店成立时间:{{customInf.appOrgRegisterDate}}</span>
        <span> 业务员入职时间： {{customInf.salPerEmployDate}}</span>
        <span>{{customInf.adminIntroduce}}</span>
      </p>
      <div class="SplitScreen_wrap content_not_split">
        <!-- 右侧分屏部分 -->
        <div class="right" ref="rRight">
          <!-- <img src="../../../static/images/backcopy.png" class="icon_showHalf" v-show="showHalfBtn" @click="DblScreen"> -->
          <!-- 右屏tab 表头 -->
          <div class="Right_tab_title_div">
            <!-- 左右滑动 图标  -->
            <span class="pre_next_btn_wrap" @click="leftMovingBtn">
              <img src="../../../static/images/Shape@1x.png">
            </span>
            <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
              <img src="../../../static/images/Shaperight@1x.png">
            </span>
            <!-- tab 2 -=====================tab2里面的ul-->
            <div class="Right_tab_ul_wrap">
              <ul ref="right_tab_ul" style="left:0;right:0; width: 1700px;">
                <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)" :class="{tab2Act:tab2Index==index}">
                  {{val}}</li>
              </ul>
            </div>
          </div>
          <!-- 右侧 tab 内容  AntiFirstAud-->
          <div class="tab2_Content">
            <AnitAudioVisual v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS"></AnitAudioVisual>
            <cremark v-if=" this.tabContent2==1"></cremark>
            <InternalMatch v-if=" this.tabContent2==2"></InternalMatch>
            <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3"></capplicationInformationDetail>
            <AborrowerInformationDetail v-if=" this.tabContent2==4"></AborrowerInformationDetail>
            <PhoneCredit v-if=" this.tabContent2==5" :addBtn="false"></PhoneCredit>
            <FCreditForm :myWatch="watchData" v-if=" this.tabContent2==6" :applyId='tastwaitingPass.applyId' :FinalConCheckShow='true'></FCreditForm>
            <creditInvestigation v-if=" this.tabContent2==7"></creditInvestigation>
            <aAprovalConclusion v-if=" this.tabContent2==8"></aAprovalConclusion>
            <aAntiConclusionPath v-if=" this.tabContent2==9"></aAntiConclusionPath>
            <AntiApplyInf v-if=" this.tabContent2==10" >反欺诈申请信息</AntiApplyInf>
            <aAntiFraudInvestigation v-if=" this.tabContent2==11">反欺诈调查</aAntiFraudInvestigation>
            <approvalConclus v-if=" this.tabContent2==12">审批结论</approvalConclus>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import AnitAudioVisual from './components/AnitAudioVisual.vue'; //工作台--》 av
  // import aMAnitAudioVisual from'./matchComponent/aMAnitAudioVisual.vue';//匹配查看 --》 aV
  import cremark from '../FirstTrail/checkComponent/remarkDetail.vue' //备注信息
  import capplicationInformationDetail from "../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import AborrowerInformationDetail from "../FirstTrail/checkComponent/borrowerInformationDetail.vue"; //借款人资料
  import FCreditForm from "../FinalTrial/FinalComponent/FCreditForm.vue"; //信审表
  import creditInvestigation from "../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import aAprovalConclusion from './components/aAprovalConclusion.vue' //信审审批结论轨迹
  import aAntiConclusionPath from './components/aAntiConclusionPath.vue'; //反欺诈审批结论轨迹
  import AntiApplyInf from './AntiApplyInf.vue' //反欺诈申请信息
  import aAntiFraudInvestigation from './components/aAntiFraudInvestigation.vue' //反欺诈调查
  import approvalConclus from './approvalConclus.vue' //审批结论  
  // --------------------------------------------------------------------------------------------
  import InternalMatch from "../FirstTrail/InternalMatch.vue";
  import PhoneCredit from "../FirstTrail/PhoneCredit.vue";
  export default {
    data() {
      return {
        //custName:'',
        SplitLeft: "left",
        SplitRight: "right",
        watchData: '',
        loading: false,
        accepCusBasicInfo: '',
        // 进件人信息
        customInf: [], //申请信息页local字段
        tastwaitingPass: [], //详情列表页信息--(含)取applyId
        // -------------------------------结束
        CompareAlert: false,
        title: "",
        isShow: false,
        flexible: true,
        tabContent2: 3,
        tabActiveInd2: 3,
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "信审审批结论轨迹", "反欺诈审批结论轨迹", "反欺诈申请信息",
          "反欺诈调查", "审批结论"
        ],
        tab2Index: 3,
        AlertSearch: "",
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/AntiAudit' && this.$route.params.newOne) {
          this.mountedInf();
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
        }
      }
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈
        // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        // if (this.judgeFlag.flag == '03') {
        //   this.tastwaitingPass = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈专员
        // } else if (this.judgeFlag.flag == '04') {
        //   this.tastwaitingPass = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")); //反欺诈主管
        // }
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.loading = false;
            //this.custName=res.data.accepCusBasicInfo.custName;
            this.customInf = res.data;
            this.accepCusBasicInfo = res.data.accepCusBasicInfo;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      compBtnS() {
        this.CompareAlert = true;
      },
      closeCompareBtn() {
        this.CompareAlert = false;
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
      showList() {
        this.$refs.Left_title.style.left = "0";
        this.flexible = false;
      },
      hid() {
        this.$refs.Left_title.style.left = "-200px";
        this.flexible = true;
      },
      tab(ev, ind, val) {
        this.tabContent2 = ind;
        this.tab2Index = ind;
        this.tabActiveInd2 = ind;
      }
    },
    mounted() {
      this.mountedInf();
    },
    components: {
      AnitAudioVisual,
      FCreditForm,
      aAntiConclusionPath,
      aAprovalConclusion,
      AntiApplyInf, //反欺诈申请信息
      approvalConclus, //审批结论
      aAntiFraudInvestigation, //反欺诈调查
      cremark, //备注信息
      AborrowerInformationDetail, //借款人资料
      capplicationInformationDetail, //申请信息
      // aMAnitAudioVisual,
      // 编辑
      InternalMatch,
      PhoneCredit,
      creditInvestigation,
    }
  }

</script>
