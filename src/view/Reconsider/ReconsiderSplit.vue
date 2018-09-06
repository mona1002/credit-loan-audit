<template>
  <!-- 复议分屏-专员、主管 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <!-- 进件人详情 -->
    <p class="PerDtl">
      <span> 借款人：{{accepCusBasicInfo.custName}}</span>
      <span> 进件编号：{{customInf.applyMainNo}}</span>
      <span> 证件号码：{{tastwaitingPass.certCode}}</span>
      <span> 移动电话：{{accepCusBasicInfo.mobile}}</span>
      <span> 进件机构：{{customInf.appOrgName}}</span>
      <span> 门店成立时间：{{customInf.appOrgRegisterDate}}</span>
      <span> 业务员入职时间：{{customInf.salPerEmployDate}}</span>
      <span>{{customInf.adminIntroduce}}</span>
    </p>
    <div class="SplitScreen_wrap content_not_split">
      <!-- 右侧分屏部分 -->
      <div class="right" ref="rRight">
        <!-- 右屏tab 表头 -->
        <div class="Right_tab_title_div">
          <!-- 左右滑动 图标  -->
          <span class="pre_next_btn_wrap" @click="leftMovingBtn">
            <img src="../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
            <img src="../../../static/images/Shaperight@1x.png">
          </span>
          <div class="Right_tab_ul_wrap">
            <ul ref="right_tab_ul" style="left:0;right:0; width:1300px">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)"
                :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <div class="tab2_Content">
          <AudioVisual v-if=" this.tabContent2==0" :applyId='tastwaitingPass.applyId'></AudioVisual>
          <cremark v-if=" this.tabContent2==1"></cremark>
          <InternalMatch v-if=" this.tabContent2==2"></InternalMatch>
          <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3"></capplicationInformationDetail>
          <AborrowerInformationDetail v-if=" this.tabContent2==4"></AborrowerInformationDetail>
          <PhoneCredit v-if=" this.tabContent2==5" :addBtn="false"></PhoneCredit>
          <FCreditForm :myWatch="watchData" v-if=" this.tabContent2==6" :applyId='tastwaitingPass.applyId'
            :FinalConCheckShow='true'></FCreditForm>
          <creditInvestigation v-if=" this.tabContent2==7" :applyId='tastwaitingPass.applyId'></creditInvestigation>
          <ReconsiderApply v-if=" this.tabContent2==8"></ReconsiderApply>
          <aAntiApplyInf v-if=" this.tabContent2==9" :applyId='tastwaitingPass.applyId'></aAntiApplyInf>
          <RantiFraudInvestigation v-if=" this.tabContent2==10" :isShow='false' :applyId='tastwaitingPass.applyId'></RantiFraudInvestigation>
          <ReconConclusion v-if=" this.tabContent2==11" :type='type'></ReconConclusion>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AudioVisual from '../FirstTrail/detailComponent/AudioVisual.vue'; //工作台--》 av
  import cremark from '../FirstTrail/checkComponent/remarkDetail.vue' //备注信息
  import capplicationInformationDetail from "../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import AborrowerInformationDetail from "../FirstTrail/checkComponent/borrowerInformationDetail.vue"; //借款人资料
  import FCreditForm from "../FinalTrial/FCreditForm.vue"; //信审表
  import creditInvestigation from "../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import ReconsiderApply from './ReconsiderComponents/ReconsiderApply.vue' //复议申请
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf.vue' //反欺诈结论
  // 编辑
  import InternalMatch from "../FirstTrail/InternalMatch.vue";
  import PhoneCredit from "../FirstTrail/PhoneCredit.vue";
  import RantiFraudInvestigation from "../FirstTrail/ReadComponent/RantiFraudInvestigation"; //反欺诈调查
  import ReconConclusion from './ReconsiderComponents/ReconConclusion.vue' //复议结论
  export default {
    data() {
      return {
        taskName: '',
        // Rcon: 0,
        //custName: "",
        accepCusBasicInfo: '',
        SplitLeft: "left",
        SplitRight: "right",
        watchData: '',
        type: '',
        loading: false,
        // 进件人信息
        customInf: [], //申请信息页local字段
        tastwaitingPass: [], //详情列表页信息--(含)取applyId
        CompareAlert: false,
        title: "",
        isShow: false,
        tabContent2: 3,
        tabActiveInd2: 3,
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "复议申请", "反欺诈结论", "反欺诈调查", "复议结论"],
        tab2Index: 3,
        AlertSearch: "",
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/ReconsiderSplit' && this.$route.params.newOne) {
          this.mountedInf();
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
        }
      }
    },
    methods: {
      mountedInf() {
        // 复议不用flag判断，列表页专员、主管存的同一个字段
        // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        // if (this.judgeFlag.flag == '05') {
        //   this.tastwaitingPass = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员
        //      this.Rcon = 1;
        // } else if (this.judgeFlag.flag == '06') {
        //   this.tastwaitingPass = JSON.parse(localStorage.getItem("RManagertaskInWaitting")) //复议经理
        //   this.Rcon = 2;
        // }
        this.type = '';
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员
        this.taskName = JSON.parse(localStorage.getItem("RtaskInWaitting")).taskName;
        if (this.taskName == 'reconsiderApp_commissioner') { //复议专员结论
          this.type = 'commissioner';
          // this.Rcon = 1;
        } else if (this.taskName == 'reconsiderApp_manager') { //复议经理结论
          this.type = 'manager';
          // this.Rcon = 2;
        }
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.loading = false;
            //this.custName = res.data.accepCusBasicInfo.custName;
            this.customInf = res.data;
            this.accepCusBasicInfo = res.data.accepCusBasicInfo;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      // compBtnS() {
      //   this.CompareAlert = true;
      // },
      // closeCompareBtn() {
      //   this.CompareAlert = false;
      // },
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
    mounted() {
      this.mountedInf();
    },
    components: {
      AudioVisual,
      cremark,
      capplicationInformationDetail,
      AborrowerInformationDetail,
      FCreditForm,
      creditInvestigation,
      ReconsiderApply, //复议申请
      aAntiApplyInf, //反欺诈结论
      InternalMatch,
      PhoneCredit,
      RantiFraudInvestigation, //反欺诈调查
      ReconConclusion
    }
  }

</script>
