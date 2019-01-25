<template>
  <!-- 复议分屏-专员、主管 -->
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
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==0" :applyId='list.applyId'></AudioVisual>
          </keep-alive>
          <remark v-if=" this.tabContent2==1" :applyId='list.applyId'></remark>
          <InternalMatch v-if=" this.tabContent2==2"></InternalMatch>
          <keep-alive v-if="Routes.closed">
            <capplicationInformationDetail v-if=" this.tabContent2==3" :applyId='list.applyId' :btn="true" :roles='Flag=="05"?"reconsiderApp_commissioner":"reconsiderApp_manager" '></capplicationInformationDetail>
          </keep-alive>
          <AborrowerInformationDetail v-if=" this.tabContent2==4"></AborrowerInformationDetail>
          <PhoneCredit v-if=" this.tabContent2==5"  :applyId='list.applyId' :addBtn="false"></PhoneCredit>
          <FCreditForm v-if=" this.tabContent2==6" :applyId='list.applyId'
            :FinalConCheckShow='true'></FCreditForm>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==7" :applyId='list.applyId'></creditInvestigation>
          </keep-alive>
          <ReconsiderApply v-if=" this.tabContent2==8"></ReconsiderApply>
          <aAntiApplyInf v-if=" this.tabContent2==9" :applyId='list.applyId'></aAntiApplyInf>
          <RantiFraudInvestigation v-if=" this.tabContent2==10" :isShow='false' :applyId='list.applyId'></RantiFraudInvestigation>
          <ReconConclusion v-if=" this.tabContent2==11" :type='type'></ReconConclusion>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AudioVisual from '../FirstTrail/detailComponent/AudioVisual.vue'; //工作台--》 av
  import remark from '../FirstTrail/detailComponent/remark.vue' //备注信息
  import capplicationInformationDetail from "../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import AborrowerInformationDetail from "../FirstTrail/checkComponent/borrowerInformationDetail.vue"; //借款人资料
  import FCreditForm from "../FinalTrial/FCreditForm.vue"; //信审表
  import creditInvestigation from "../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import ReconsiderApply from './ReconsiderApply.vue' //复议申请
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf.vue' //反欺诈结论
  import InternalMatch from "../FirstTrail/InternalMatch.vue";
  import PhoneCredit from "../FirstTrail/PhoneCredit.vue";
  import RantiFraudInvestigation from "../FirstTrail/ReadComponent/RantiFraudInvestigation"; //反欺诈调查
  import ReconConclusion from './ReconConclusion.vue' //复议结论
  export default {
    data() {
      return {
        taskName: '',
        accepCusBasicInfo: {},
        Flag: '',
        type: '',
        loading: false,
        list: {}, //详情列表页信息--(含)取applyId
        isShow: false,
        tabContent2: 3,
        tabActiveInd2: 3,
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "复议申请", "反欺诈结论", "反欺诈调查", "复议结论"],
        tab2Index: 3,
        Routes: this.$router.options.routes[22],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/ReconsiderSplit' && this.$route.params.newOne) {
          this.Routes.closed = false;
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
        // 复议不用flag判断，列表页专员、主管存的同一个字段
        this.type = '';
        this.loading = true;
        this.list = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员
        this.Flag = JSON.parse(localStorage.getItem("judge")).flag;
        this.taskName = this.list.taskName;
        if (this.taskName == 'reconsiderApp_commissioner') { //复议专员结论
          this.type = 'commissioner';
        } else if (this.taskName == 'reconsiderApp_manager') { //复议经理结论
          this.type = 'manager';
        }
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
      remark,
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
