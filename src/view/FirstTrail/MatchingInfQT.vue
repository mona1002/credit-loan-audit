<template>
  <div class="SplitScreen">
    <!-- 质检详情-编辑部分- -->
    <!--反欺诈审批结论轨迹，质检部分调另一个新鞋的接口库== 反欺诈-8.反欺诈查询所有审批轨迹 -->
    <myHead></myHead>
    <div class="SplitScreen_content">
      <!-- 进件人详情 -->
      <p class="PerDtl">
        <span> 借款人： {{custName}}</span>
        <span> 进件编号: {{customInf.applyMainNo}}</span>
        <span> 证件号码: {{certCode}}</span>
        <span> 移动电话：{{mobile}}</span>
        <span> 进件机构: {{customInf.appOrgName}}</span>
        <span> 门店成立时间: {{customInf.appOrgRegisterDate}}</span>
        <span> 业务员入职时间： {{customInf.salPerEmployDate}}</span>
        <span>{{customInf.adminIntroduce}}</span>
      </p>
      <div class="SplitScreen_wrap" id="rWrap" ref="rWrap">
        <!-- 左侧分屏部分 -->
        <div class="left" ref="rLeft">
          <div ref="Left_title" class="Left_ul" @mouseenter="showList" @mouseleave="hid">
            <!-- 左侧 title列表 -->
            <ul>
              <li ref="tabOne" class="tab1Default" v-for="(val,index) in items1" :key="index" @mousedown="flag1[index] &&  tab1($event,index,val)"
                :class="{tab1Act:tab1Index==index}">
                {{val}}</li>
            </ul>
          </div>
          <!-- 左侧详情 -->
          <div ref="Left_detail" class="Left_detail_div">
            <p class="Left_right_Title"> {{this.title}}
              <span class="icon_FullScreen">
                <img src="../../../static/images/backcopy 2.png" @click="FullScreen">
              </span>
              <span class="showAllList" @mouseenter="showList" @mouseleave="hid">
                <img src="../../../static/images/icon-02.png">
              </span>
            </p>
            <div class="Left_right_BigImg ">
              <RAudioVisualLeft ref="AudioLeft" msg="MspLone" v-if=" this.tabContent1==0" v-on:CompareShow="compBtnS" :comBtn.sync='comBtn'></RAudioVisualLeft>
              <Rremark v-if=" this.tabContent1==1"></Rremark>
              <InternalMatch v-if=" this.tabContent1==2">内部匹配</InternalMatch>
              <RapplicationInformationDetail v-if=" this.tabContent1==3">申请信息</RapplicationInformationDetail>
              <RborrowerInformationSetail v-if=" this.tabContent1==4">借款人资料</RborrowerInformationSetail>
              <PhoneCredit v-if=" this.tabContent1==5" :addBtn="false"> 电话征信</PhoneCredit>
              <FMCreditForm v-if=" this.tabContent1==6">信审表</FMCreditForm>
              <RcreditInvestigation v-if=" this.tabContent1==7">实地征信</RcreditInvestigation>
              <aMAntiApplyInf v-if=" this.tabContent1==8">反欺诈结论</aMAntiApplyInf>
              <RantiFraudInvestigation v-if=" this.tabContent1==9" :isShow='false' :applyId='tastwaitingPass.ApplyId'> 反欺诈调查</RantiFraudInvestigation>
              <RFinanceInformation v-if=" this.tabContent1==10">财务信息</RFinanceInformation>
              <!-- <RprocessTrajectory v-if=" this.tabContent1==9">流程轨迹</RprocessTrajectory> -->
              <div class='tab2_Content_show' v-if="RoleSHow=='partOne'">
                <!-- 专员部分 -->
                <QTAprovalConclution v-if=" this.tabContent1==11 ">反欺诈审批结论轨迹 </QTAprovalConclution>
                <RApprovalConclusion v-if=" this.tabContent1==12 ">审批结论轨迹</RApprovalConclusion>
                <regularQT v-if=" this.tabContent1==13&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
                <QTResultCheck v-if=" this.tabContent1==13&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
              </div>
              <div class='tab2_Content_show' v-if="RoleSHow=='partTwo'">
                <!-- 主管部分 -->
                <regularQT v-if=" this.tabContent1==11&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
                <QTResultCheck v-if=" this.tabContent1==11&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
              </div>
              <div class='tab2_Content_show' v-if="RoleSHow=='partThree'">
                <!-- 质检部分 -->
                <QTAprovalConclution v-if=" this.tabContent1==11">反欺诈审批结论轨迹 </QTAprovalConclution>
                <RApprovalConclusion v-if=" this.tabContent1==12">审批结论轨迹</RApprovalConclusion>
                <!-- <ComplianceProcess v-if=" this.tabContent1==11 && this.QTmark" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess> -->
                <!-- <RulesReApply v-if=" this.tabContent1==12 && this.QTmark" :propReApply='ReApplyMark'>合规复议申请</RulesReApply> -->
                <ComplianceProcess v-if=" this.tabContent1==13" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess>
                <RulesReApply v-if=" this.tabContent1==14" :propReApply='ReApplyMark' :applyId='tastwaitingPass.ApplyId'>合规复议申请</RulesReApply>
                <!-- <regularQT v-if=" this.tabContent1==11&&this.QTConclutionMark=='commissioner'" :propQTconclution='QTC' >质检结论</regularQT> -->
                <regularQT v-if=" this.tabContent1==15&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
                <QTResultCheck v-if=" this.tabContent1==15&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
              </div>
              <!-- <QTAprovalConclution v-if=" this.tabContent1==9&& this.Managermark">反欺诈审批结论轨迹 </QTAprovalConclution>
              <RApprovalConclusion v-if=" this.tabContent1==10&& this.Managermark">审批结论轨迹</RApprovalConclusion>
              <ComplianceProcess  v-if=" this.tabContent1==11 && this.QTmark" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess>
              <RulesReApply  v-if=" this.tabContent1==12 && this.QTmark" :propReApply='ReApplyMark'>合规复议申请</RulesReApply> -->
            </div>
          </div>
        </div>
        <!-- 中间 -->
        <div class="SP_middle" ref="RM" id="RM" v-show="midShow"></div>
        <!-- 右侧分屏部分 -->
        <div class="right" ref="rRight">
          <img src="../../../static/images/backcopy.png" class="icon_showHalf" v-show="showHalfBtn" @click="DblScreen">
          <!-- 右屏tab 表头 -->
          <div class="Right_tab_title_div">
            <!-- 左右滑动 图标  -->
            <span ref="leftBtn" class="pre_next_btn_wrap" @click="leftMovingBtn">
              <img src="../../../static/images/Shape@1x.png">
            </span>
            <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
              <img src="../../../static/images/Shaperight@1x.png">
            </span>
            <!-- tab 2 -->
            <div class="Right_tab_ul_wrap">
              <ul ref="right_tab_ul" style="left:0;right:0;">
                <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="flag2[index] &&  tab2($event,index,val)"
                  :class="{tab2Act:tab2Index==index}">
                  {{val}}</li>
              </ul>
            </div>
          </div>
          <!-- 右侧 tab 内容 -->
          <div class="tab2_Content">
            <RAudioVisual v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS" :comBtn.sync='comBtn'></RAudioVisual>
            <Rremark v-if=" this.tabContent2==1"></Rremark>
            <InternalMatch v-if=" this.tabContent2==2">内部匹配</InternalMatch>
            <RapplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3">申请信息</RapplicationInformationDetail>
            <RborrowerInformationSetail v-if=" this.tabContent2==4" :isFull.sync="isFull">借款人资料</RborrowerInformationSetail>
            <PhoneCredit v-if=" this.tabContent2==5" :addBtn="false"> 电话征信</PhoneCredit>
            <FMCreditForm v-if=" this.tabContent2==6">信审表</FMCreditForm>
            <RcreditInvestigation v-if=" this.tabContent2==7">实地征信</RcreditInvestigation>
            <aMAntiApplyInf v-if=" this.tabContent2==8">反欺诈结论</aMAntiApplyInf>
            <RantiFraudInvestigation v-if=" this.tabContent2==9" :isShow='false' :applyId='tastwaitingPass.ApplyId'> 反欺诈调查</RantiFraudInvestigation>
            <RFinanceInformation v-if=" this.tabContent2==10">财务信息</RFinanceInformation>
            <!-- <RprocessTrajectory v-if=" this.tabContent2==9">流程轨迹</RprocessTrajectory> -->

            <div class='tab2_Content_show' v-if="this.RoleSHow=='partOne'">
              <!-- 专员部分 -->
              <QTAprovalConclution v-if=" this.tabContent2==11 ">反欺诈审批结论轨迹 </QTAprovalConclution>
              <RApprovalConclusion v-if=" this.tabContent2==12 ">审批结论轨迹</RApprovalConclusion>
              <regularQT v-if=" this.tabContent2==13&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
              <QTResultCheck v-if=" this.tabContent2==13&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
            </div>
            <div class='tab2_Content_show' v-if="this.RoleSHow=='partTwo'">
              <!-- 主管部分 -->
              <regularQT v-if=" this.tabContent2==11&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
              <QTResultCheck v-if=" this.tabContent2==11&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>

            </div>
            <div class='tab2_Content_show' v-if="this.RoleSHow=='partThree'">
              <!-- 质检部分 -->
              <QTAprovalConclution v-if=" this.tabContent2==11">反欺诈审批结论轨迹 </QTAprovalConclution>
              <RApprovalConclusion v-if=" this.tabContent2==12">审批结论轨迹</RApprovalConclusion>
              <!-- <ComplianceProcess v-if=" this.tabContent2==11 && this.QTmark" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess>
              <RulesReApply v-if=" this.tabContent2==12 && this.QTmark" :propReApply='ReApplyMark'>合规复议申请</RulesReApply> -->
              <ComplianceProcess v-if=" this.tabContent2==13" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess>
              <RulesReApply v-if=" this.tabContent2==14" :propReApply='ReApplyMark' :applyId='tastwaitingPass.ApplyId'>合规复议申请</RulesReApply>
              <!-- <regularQT v-if=" this.tabContent2==11&&this.QTConclutionMark=='commissioner'" :propQTconclution='QTC' >质检结论</regularQT> -->
              <regularQT v-if=" this.tabContent2==15&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
              <QTResultCheck v-if=" this.tabContent2==15&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
            </div>
          </div>
        </div>
      </div>
      <!-- 对比弹出层 -->
      <div class="AudioVisual_wrap_compare" v-show="CompareAlert" v-on:CompareShow="compBtnS">
        <el-button type="primary compareClose" @click="closeCompareBtn">关闭</el-button>
        <!-- 弹出层左侧 div -->
        <div class="AudioVisual_wrap_compare_left ">
          <p>影像资料</p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <RAudioVisualLeft ref="AudioLeftCom" msg="MspLtwo" :comBtn.sync='alertComBtn'></RAudioVisualLeft>
          </div>
        </div>
        <!-- 弹出层右侧 div -->
        <div class="AudioVisual_wrap_compare_right ">
          <!-- 搜索框 -->
          <p class="customName">客户名称：
            <el-input v-model="AlertSearch" :disabled="true" style="display:inline;"></el-input>
            <el-button type="primary" @click="compareProps" class="AudioVisualLeft_compareIcon">
              <i class="el-icon-search" style="fontSize:16px"></i>
            </el-button>
          </p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <RAudioVisualLeft msg="MspLthree" ref="audioChild" :comBtn.sync='alertComBtn' v-on:inputInf="inputInner"></RAudioVisualLeft>
          </div>
        </div>
      </div>
      <!-- 对比弹出层结束 -->
    </div>
  </div>
</template>
<script>
  import myHead from "../header.vue"
  // 编辑
  import RAudioVisual from "./ReadComponent/RAudioVisual";
  import RAudioVisualLeft from "./ReadComponent/RAudioVisualLeft.vue";
  import FMCreditForm from "../FinalTrial/FinalMatchComponent/FMCreditForm.vue"; //信审表-终审查看-del初审人员-第一个
  import RborrowerInformationSetail from "./ReadComponent/RborrowerInformationSetail.vue"; //借款人资料
  import RapplicationInformationDetail from "./ReadComponent/RapplicationInformationDetail"; //申请信息
  import RFinanceInformation from "./ReadComponent/RFinanceInformation"; //账务信息
  import RApprovalConclusion from "./ReadComponent/RApprovalConclusion"; //信审审批结论轨迹
  import Rremark from "./ReadComponent/Rremark"; //备注信息
  //   import RprocessTrajectory from "./ReadComponent/RprocessTrajectory"; //流程轨迹
  import RcreditInvestigation from "./ReadComponent/RcreditInvestigation"; //实地征信
  import aMAntiApplyInf from '../AntiFraud/matchComponent/aMAntiApplyInf.vue' //反欺诈结论
  import QTAprovalConclution from "../QualityTesting/QTReconsiderProcess/components/QTAprovalConclution.vue"; //反欺诈审批结论轨迹--新写页面
  import regularQT from "../QualityTesting/QTProcess/components/regularQT.vue"; //质检结论
  import QTResultCheck from "../QualityTesting/QTReconsiderProcess/components/QTResultCheck.vue"; //质检结论-本人结论页
  import ComplianceProcess from '../QualityTesting/QTReconsiderProcess/components/ComplianceProcess.vue'; //合规质检结论轨迹-prop
  import RulesReApply from '../QualityTesting/QTReconsiderProcess/components/RulesReApply.vue'; //合规复议申请-RulesReApply
  import RantiFraudInvestigation from '../FirstTrail/ReadComponent/RantiFraudInvestigation'; //反欺诈调查
  import InternalMatch from "./InternalMatch"; //获取-申请信息
  import PhoneCredit from "./PhoneCredit"; //电话征信
  export default {
    data() {
      return {
        accepCusBasicInfo: '',
        QTConclutionMark: "",
        TaskList: '',
        LocalList: '',
        Managermark: true,
        QTmark: false,
        leftBtnMark: false,
        RoleSHow: 'partOne',
        // /----------------上面为新加的
        watchData: '',
        originLeft: '',
        custName: "",
        certCode: '',
        mobile: '',
        customInf: {
          applyMainNo: '',
          appOrgName: '',
          appOrgRegisterDate: '',
          salPerEmployDate: '',
          adminIntroduce: ''
        },
        tastwaitingPass: [],
        showHalfBtn: false,
        CompareAlert: false,
        title: "",
        isShow: false,
        flexible: true,
        tabContent1: 0,
        tabContent2: 3,
        tabActiveInd1: 0,
        tabActiveInd2: 3,
        // items1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", '反欺诈结论', "反欺诈审批结论轨迹", '信审审批结论轨迹'],
        // items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "反欺诈审批结论轨迹", "信审审批结论轨迹",
        //   '质检结论'
        // ],
        items1: [],
        items2: [],
        itemsTrial1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", '反欺诈结论', '反欺诈调查', '账务信息',
          "反欺诈审批结论轨迹", '信审审批结论轨迹'
        ],
        itemsTrial2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", '反欺诈调查', '账务信息',
          "反欺诈审批结论轨迹", "信审审批结论轨迹",
          '质检结论'
        ],
        itemsManager1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", '反欺诈调查', '账务信息'],

        itemsManager2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", '反欺诈调查', '账务信息',
          '质检结论'
        ],
        itemsQT1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", '反欺诈结论', '反欺诈调查', '账务信息',
          "反欺诈审批结论轨迹", '信审审批结论轨迹',
          '合规质检结论轨迹', '合规复议申请'
        ],
        itemsQT2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", '反欺诈调查', '账务信息',
          "反欺诈审批结论轨迹", "信审审批结论轨迹",
          '合规质检结论轨迹', '合规复议申请',
          '质检结论'
        ],
        tab1Index: 0,
        tab2Index: 3,
        // flag1: [true, true, true, false, true, true, true, true, true, true, true],
        // flag2: [true, true, true, true, true, true, true, true, true, true, true, true], //12
        // flagManger1: [true, true, true, false, true, true, true, true, true],
        // flagManger2: [true, true, true, true, true, true, true, true, true, true], //10
        // flagQT1: [true, true, true, false, true, true, true, true, true, true, true, true, true],
        // flagQT2: [true, true, true, true, true, true, true, true, true, true, true, true, true, true], //14
        flag1: [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true],
        flag2: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], //15
        AlertSearch: "",
        // AlertSearchCondition: [{
        //   value: '选项1',
        //   label: '最近时间原则排列'
        // }, {
        //   value: '选项2',
        //   label: '内匹客户姓名+本人进件'
        // }, {
        //   value: '选项3',
        //   label: '内匹客户姓名'
        // }],
        isFull: false,
        comBtn: true,
        alertComBtn: false,
        midShow: true,
        QTC: {
          applyId: '',
          pageType: '',
          EditType: '',
          tastwaitingPass: {}
        },
        ReApplyMark: {
          pageType: "ComponentPage"
        }
      }
    },
    watch: {
      '$route' (to, from) {
        if (from.path === '/MatchingInfQT') {
          from.meta.newOne = false;
        }
        if (to.path === '/MatchingInfQT' && this.$route.meta.newOne) {
          this.mountedInf();
          this.title = "影像资料";
          this.tab1Index = this.tabContent1 = this.tabActiveInd1 = 0;
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.flag1 = [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true];
          this.flag2 = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
          this.$refs.AudioLeft ? this.$refs.AudioLeft.mountedInf() : '';
          this.$refs.AudioLeftCom ? this.$refs.AudioLeftCom.mountedInf() : '';
          this.$refs.audioChild ? this.$refs.audioChild.mountedInf() : '';
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
          this.$refs.right_tab_ul.style.left = "0";
           this.DblScreen();
        }
      }
    },
    methods: {
      mountedInf() {
        this.initialInfo(); //判断角色   
        this.QTC.tastwaitingPass = this.tastwaitingPass = JSON.parse(localStorage.getItem(this.LocalList));
        this.QTC.applyId = this.tastwaitingPass.ApplyId;
        console.log( 1, this.QTC.tastwaitingPass)
        this.getPageInf(); //获取页面个人信息      
        // console.log(this.tastwaitingPass.applyId)
        // console.log('tastwaitingPass：', this.tastwaitingPass)
        // console.log('QTC：', this.QTC)
        // console.log('pageType：', this.QTC.pageType)
        // console.log('LocalList：', this.LocalList)
      },
      compareProps() {
        this.$refs.audioChild.personalNunPerson()
      },
      inputInner(a, b) {
        this.AlertSearch = a + " " + b;
      },
      compBtnS() {
        this.CompareAlert = true;
      },
      closeCompareBtn() {
        this.CompareAlert = false;
      },
      leftMovingBtn() {
        if (parseFloat(this.$refs.right_tab_ul.style.left) >= 0) {
          if (this.leftBtnMark) {
            this.$refs.right_tab_ul.style.left = "25px";
          } else {
            this.$refs.right_tab_ul.style.left = "0"
          };
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) + 50 + "px";
        }
      },
      rightMovingBtn() {
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= -1350) {
          this.$refs.right_tab_ul.style.left = "-1400px";
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
      FullScreen() {
        this.showHalfBtn = true;
        // this.originLeft = this.$refs.right_tab_ul.style.left;
        this.$refs.right_tab_ul.style.left = "25px";
        this.$refs.rLeft.style.display = "none";
        this.watchData = this.$refs.rRight.style.width = "100%";
        this.$refs.rRight.style.left = '0';
        this.isFull = true;
        this.midShow = false;
        this.leftBtnMark = true;
        this.$refs.leftBtn.style.left = '45px';
        // this.$refs.leftBtn.style.background='green';
      },
      DblScreen() {
        this.showHalfBtn = false;
        // this.$refs.right_tab_ul.style.left = this.originLeft;
        this.$refs.rLeft.style.display = "block";
        // this.$refs.rRight.style.width = "50%";
        this.$refs.rRight.style.width = this.$refs.rLeft.style.width = this.$refs.RM.style.left = this.watchData =
          "calc(50% - 2px)";
        // this.watchData = this.$refs.rRight.style.width;
        this.$refs.rRight.style.left = '50%';
        this.isFull = false;
        this.midShow = true;
        this.leftBtnMark = false;
        this.$refs.leftBtn.style.left = '10px';
      },
      tab1(ev, ind, val) {
        this.title = val;
        this.tabContent1 = ind;
        this.tab1Index = ind;
        this.tabActiveInd1 = ind;
        for (var i = 0; i < this.$refs.tabTwo.length; i++) {
          this.$refs.tabTwo[i].className = "tab2Default";
          this.flag2[i] = true;
        }
        this.$refs.tabTwo[this.tabActiveInd2].className = "tab2Act";
        if (ind != 0 && ind != 8) {
          this.flag2[ind] = false;
        }
      },
      tab2(ev, ind, val) {
        this.tabContent2 = ind;
        this.tab2Index = ind;
        this.tabActiveInd2 = ind;
        for (var i = 0; i < this.$refs.tabOne.length; i++) {
          this.$refs.tabOne[i].className = "tab1Default";
          this.flag1[i] = true;
        }
        this.$refs.tabOne[this.tabActiveInd1].className = "tab1Act";
        if (ind != 0 && ind != 8) {
          this.flag1[ind] = false;
        }
      },
      MyMove() {
        var clickX, leftOffset, nextW2;
        var dragging = false;
        var doc = document;
        var labBtn = $("#RM");
        var wrapWidth = $("#rWrap").width();
        labBtn.bind('mousedown', () => {
          dragging = true;
          leftOffset = $("#rWrap").offset().left;
          doc.onmousemove = (e) => {
            if (dragging) {
              clickX = e.pageX;
              if (clickX > leftOffset + 10 && clickX < (wrapWidth - 5)) {
                nextW2 = clickX - leftOffset;
                labBtn.eq(0).css('left', clickX - leftOffset + 'px');
                labBtn.eq(0).prev().width(clickX - leftOffset - 2 + 'px');
                labBtn.eq(0).next().css('left', clickX - leftOffset + 2 + 'px');
                labBtn.eq(0).next().width(wrapWidth - nextW2 - 6 + 'px');
              } else if (clickX < leftOffset + 10 && clickX < (wrapWidth - 5)) {
                labBtn.eq(0).css('left', '0px');
                labBtn.eq(0).prev().width('0px');
                labBtn.eq(0).next().css('left', '2px');
                labBtn.eq(0).next().width(wrapWidth - 6 + 'px');
              }
              if (clickX > (wrapWidth - 5)) {
                labBtn.eq(0).css('left', parseFloat(wrapWidth) - 11 + 'px');
                labBtn.eq(0).prev().width(wrapWidth - 11 + 'px');
                labBtn.eq(0).next().css('left', wrapWidth - 9 + 'px');
                labBtn.eq(0).next().width('0px');
              }
            }
          };
        });
        $(doc).mouseup((e) => {
          dragging = false;
          e.cancelBubble = true;
        });
      },
      getPageInf() { //获取个人信息
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.ApplyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.customInf = res.data;
            if (res.data.accepCusBasicInfo) {
              this.custName = res.data.accepCusBasicInfo.custName;
              this.certCode = res.data.accepCusBasicInfo.certCode;
              this.mobile = res.data.accepCusBasicInfo.mobile;
            }
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      initialInfo() {
        var Nodename = this.$route.fullPath.split('?')[1];
        // console.log(Nodename)
        if (Nodename === 'checkApp_apply') {
          // 专员-编辑
          this.LocalList = 'QTTaskWait'; //取本地存储
          this.items1 = this.itemsTrial1; //12
          this.items2 = this.itemsTrial2;
        } else if (Nodename === 'checkApp_check_manager') {
          // 主管-编辑
          this.LocalList = 'QTManagerTW';
          this.items1 = this.itemsTrial1; //12
          this.items2 = this.itemsTrial2;
        } else if (Nodename === 'checkApp_trial_self') {
          // 本人
          this.LocalList = 'QTSelfTW';
          this.items1 = this.itemsManager1; //10
          this.items2 = this.itemsManager2;
          // this.flag1 = this.flagManger1;
          // this.flag2 = this.flagManger2;
          this.Managermark = false; //
          this.RoleSHow = 'partTwo'
        } else if (Nodename === 'checkApp_trial_manager') {
          // 初终审主管
          this.LocalList = 'QTTrialManagerTW';
          this.QTComponentsShow();
          this.RoleSHow = 'partThree'
        } else if (Nodename === 'checkApp_check_recon_manager') {
          // 质检主管复议（首次）
          this.LocalList = 'QTReManagerTW';
          this.QTComponentsShow();
          this.RoleSHow = 'partThree'
        } else if (Nodename === 'checkApp_regional_manager') {
          // 区域
          this.LocalList = 'QTAreaTW';
          this.QTComponentsShow();
          this.RoleSHow = 'partThree'
        } else if (Nodename === 'checkApp_compliance_manager') {
          // 合规
          this.LocalList = 'QTComplianceTW';
          this.QTComponentsShow();
          this.RoleSHow = 'partThree'
        }
        this.QTC.pageType = Nodename;
        // console.log(this.RoleSHow)
      },
      QTComponentsShow() {
        this.items1 = this.itemsQT1;
        this.items2 = this.itemsQT2;
      }
    },
    mounted() {
      this.title = "影像资料";
      this.MyMove();
      this.mountedInf();
    },
    components: {
      myHead,
      RAudioVisual,
      RAudioVisualLeft,
      FMCreditForm,
      RapplicationInformationDetail,
      RborrowerInformationSetail, //借款人资料
      RFinanceInformation, //账务信息
      RApprovalConclusion, //信审审批结论归结
      Rremark, // 备注信息
      RcreditInvestigation, //实地征信
      aMAntiApplyInf, //反欺诈结论
      InternalMatch,
      PhoneCredit,
      QTAprovalConclution, //反欺诈审批结论轨迹
      regularQT, //  质检结论
      QTResultCheck,
      ComplianceProcess,
      RulesReApply,
      RantiFraudInvestigation
      //   RprocessTrajectory,
    }
  }

</script>
<style scoped>
  .SplitScreen {
    height: 100%;
    /* min-width: 1366; */
  }

  .tab1Default {
    color: #bfcbd9;
  }

  .tab1Act {
    color: white;
  }

  .tab2Default {
    color: #bfcbd9;
  }

  .tab2Act {
    color: white;
    border-bottom: 1px solid white;
  }

  .setGray {
    color: #bfcbd9;
  }

  /* 对比弹出层关闭按钮 */

  .compareClose {
    position: absolute;
    right: 40px;
    bottom: 19px;
    z-index: 1;
  }

  /* 全屏  --  分屏 图标 */

  .icon_showHalf {
    position: absolute;
    top: 6px;
    left: 9px;
    z-index: 3;
    background: #4099ff;
  }

  .icon_FullScreen {
    position: absolute;
    top: 7px;
    right: 17px;
  }

  .showAllList {
    position: absolute;
    padding-top: 2px;
    width: 55px;
    height: 50px;
    left: 0;
    top: 0;
  }

  .SplitScreen_content {
    border: 1px solid #0077ff;
    height: calc(100% - 100px);
    overflow: auto;
    padding: 13px 9px;
  }

  /* 借款人详情 */

  .PerDtl {
    color: #0077ff;
    background: white;
    height: 20px;
    line-height: 20px;
    margin-bottom: 13px;
  }

  .PerDtl span {
    display: inline-block;
    letter-spacing: 0.1px;
    font-size: 12px;
    margin-right: 15px;
  }

  /* 切换按钮 */

  .stretch {
    position: absolute;
    left: 5px;
    top: 2px;
    z-index: 1;
  }

  /* 左右分屏 */

  .SplitScreen_wrap {
    width: 100%;
    height: calc( 100% - 33px);
    min-width: 1306px;
    position: relative;
  }

  .left,
  .right,
  .AudioVisual_wrap_compare_left,
  .AudioVisual_wrap_compare_right {
    width: calc(50% - 2px);
    height: 100%;
    overflow: auto;
    background: #ffffff;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    float: left;
    position: relative;
  }

  .left,
  .right {
    position: absolute;
  }

  .right {
    left: 50%;
  }

  /* 左屏 */

  /* 左侧列表  影像资料等 ul 外包   流 */

  .left .Left_ul {
    width: 170px;
    background: rgba(31, 45, 61, 0.59);
    box-shadow: 0 5px 20px 0 #475669;
    position: fixed;
    left: -200px;
    top: 165px;
    z-index: 10;
    padding-top: 24px;
  }

  .left .Left_ul li {
    font-size: 15px;
    letter-spacing: 0.1px;
    height: 21px;
    line-height: 12px;
    padding: 0 0 30px 20px;
  }

  .left .Left_ul li:hover,
  .Right_tab_ul_wrap ul li:hover {
    cursor: pointer;
  }

  /* 左侧详情 div   流 */

  .Left_detail_div {
    height: 100%;
  }

  /* 左侧详情 p标签   流-css */

  .Left_right_Title,
  .right .Right_tab_title_div,
  .AudioVisual_wrap_compare_left p,
  .AudioVisual_wrap_compare_right p {
    font-size: 16px;
    text-align: center;
    background: rgba(0, 119, 255, 0.75);
    height: 48px;
    line-height: 48px;
    color: #f8f9fd;
    overflow: hidden;
    position: relative;
  }

  .AudioVisual_wrap_compare_right p {
    text-align: right;
    padding-right: 40px;
  }

  /* 左侧详情 content div 内容   流-css */

  .Left_right_BigImg {
    background: white;
    height: calc( 100% - 48px);
    overflow: auto;
  }

  /* 右屏 */

  /* 右侧tab切换头外的ul   流 */

  .Right_tab_ul_wrap {
    overflow: hidden;
    width: calc( 100% - 100px);
    margin-left: 50px;
  }

  .Right_tab_ul_wrap ul {
    /* width: 1061px; */
    width: 1950px;
    height: 48px;
    position: relative;
    text-align: left;
    z-index: 16;
  }

  .Right_tab_ul_wrap ul li {
    display: inline-block;
    margin-right: 40px;
    letter-spacing: 0.11px;
    height: 38px;
    line-height: 38px;
  }

  .tab2_Content {
    height: calc( 100% - 48px);
    overflow: auto;
  }

  .tab2_Content_show {
    /* height: 100%;
    width: 100%; */
  }

  /* 右侧tab切换头 左右滑动图标  流  */

  .pre_next_btn_wrap {
    position: absolute;
    z-index: 18;
    width: 25px;
    background: #4099ff;
  }

  .pre_next_btn_wrap:nth-of-type(1) {
    left: 10px;
  }

  .pre_next_btn_wrap:nth-of-type(2) {
    right: 10px;
  }

  /*  对比弹出层 外包 div 流 */

  .AudioVisual_wrap_compare {
    position: absolute;
    top: 117px;
    width: calc( 100% - 18px);
    height: calc( 100% - 161px);
    z-index: 22;
    min-width: 1306px;
  }

  /* 弹出层 - 两侧组件 content  流 */

  .AlertContent {
    height: calc( 100% - 48px);
    overflow: auto;
  }

</style>
