<template>
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <!-- 质检详情-编辑部分- -->
    <!--反欺诈审批结论轨迹，质检部分调另一个新鞋的接口库== 反欺诈-8.反欺诈查询所有审批轨迹 -->
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
    <div class="SplitScreen_wrap" id="rWrap" ref="rWrap">
      <!-- 左侧分屏部分 -->
      <div class="left" ref="rLeft">
        <div ref="Left_title" class="Left_ul" @mouseenter="showList" @mouseleave="hid">
          <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in items1" :key="index" @mousedown="flag1[index] &&  tab1($event,index,val)"
              :class="{tab1Act:tab1Index==index}">
              {{val}}</li>
          </ul>
        </div>
        <!-- 左侧详情 -->
        <div ref="Left_detail" class="Left_detail_div">
          <p class="Left_right_Title"> {{this.title}}
            <span class="icon_FullScreen" @click="FullScreen">
            </span>
            <span class="showAllList" @mouseenter="showList" @mouseleave="hid">
              <img src="../../../static/images/icon-02.png">
            </span>
          </p>
          <div class="Left_right_BigImg ">
            <keep-alive v-if="Routes.closed">
              <AudioVisualLeft msg="MspLone" v-if=" this.tabContent1==0" :list='list' v-on:CompareShow="compBtnS"></AudioVisualLeft>
            </keep-alive>
            <remarkDetail v-if=" this.tabContent1==1" :applyId='tastwaitingPass.ApplyId'></remarkDetail>
            <InternalMatch v-if=" this.tabContent1==2">内部匹配</InternalMatch>
            <keep-alive v-if="Routes.closed">
              <applicationInformationDetail v-if=" this.tabContent1==3" :applyId='tastwaitingPass.ApplyId'>申请信息</applicationInformationDetail>
            </keep-alive>
            <RborrowerInformationSetail v-if=" this.tabContent1==4">借款人资料</RborrowerInformationSetail>
            <PhoneCredit v-if=" this.tabContent1==5" :addBtn="false"> 电话征信</PhoneCredit>
            <FCreditForm v-if=" this.tabContent1==6" :applyId='tastwaitingPass.ApplyId' :FinalConCheckShow='true'>信审表</FCreditForm>
            <keep-alive v-if="Routes.closed">
              <creditInvestigation v-if=" this.tabContent1==7" :applyId='tastwaitingPass.ApplyId'>实地征信</creditInvestigation>
            </keep-alive>
            <aAntiApplyInf v-if=" this.tabContent1==8" :applyId='tastwaitingPass.ApplyId'>反欺诈结论</aAntiApplyInf>
            <RantiFraudInvestigation v-if=" this.tabContent1==9" :isShow='false' :applyId='tastwaitingPass.ApplyId'>
              反欺诈调查</RantiFraudInvestigation>
            <keep-alive v-if="Routes.closed">
              <RFinanceInformation v-if=" this.tabContent1==10">财务信息</RFinanceInformation>
            </keep-alive>
            <div class='tab2_Content_show' v-if="RoleSHow=='partOne'">
              <!-- 专员部分 -->
              <QTAprovalConclution v-if=" this.tabContent1==11 ">反欺诈审批结论轨迹 </QTAprovalConclution>
              <aAprovalConclusion v-if=" this.tabContent1==12 "  :applyId='tastwaitingPass.ApplyId'>审批结论轨迹</aAprovalConclusion>
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
              <aAprovalConclusion v-if=" this.tabContent1==12"  :applyId='tastwaitingPass.ApplyId'>审批结论轨迹</aAprovalConclusion>
              <ComplianceProcess v-if=" this.tabContent1==13" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess>
              <RulesReApply v-if=" this.tabContent1==14" :propReApply='ReApplyMark' :applyId='tastwaitingPass.ApplyId'>合规复议申请</RulesReApply>
              <regularQT v-if=" this.tabContent1==15&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
              <QTResultCheck v-if=" this.tabContent1==15&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="SP_middle" ref="RM" id="RM" v-show="midShow"></div>
      <!-- 右侧分屏部分 -->
      <div class="right" ref="rRight">
        <span class="icon_showHalf" v-show="showHalfBtn" @click="DblScreen"></span>
        <div class="Right_tab_title_div">
          <span ref="leftBtn" class="pre_next_btn_wrap" @click="leftMovingBtn" style="background:#4099ff;z-index:40;">
            <img src="../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
            <img src="../../../static/images/Shaperight@1x.png">
          </span>
          <!-- tab 2 -->
          <div class="Right_tab_ul_wrap">
            <ul ref="right_tab_ul" style="left:0;right:0;width:2000px">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="flag2[index] &&  tab2($event,index,val)"
                :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <div class="tab2_Content">
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==0" :applyId='tastwaitingPass.ApplyId'></AudioVisual>
          </keep-alive>
          <remarkDetail v-if=" this.tabContent2==1" :applyId='tastwaitingPass.ApplyId'></remarkDetail>
          <InternalMatch v-if=" this.tabContent2==2">内部匹配</InternalMatch>
          <keep-alive v-if="Routes.closed">
            <applicationInformationDetail v-if=" this.tabContent2==3" :applyId='tastwaitingPass.ApplyId' :roles="QTC.pageType ">申请信息</applicationInformationDetail>
          </keep-alive>
          <RborrowerInformationSetail v-if=" this.tabContent2==4" :isFull.sync="isFull">借款人资料</RborrowerInformationSetail>
          <PhoneCredit v-if=" this.tabContent2==5" :addBtn="false"> 电话征信</PhoneCredit>
          <FCreditForm v-if=" this.tabContent2==6" :applyId='tastwaitingPass.ApplyId' :FinalConCheckShow='true'>信审表</FCreditForm>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==7" :applyId='tastwaitingPass.ApplyId'>实地征信</creditInvestigation>
          </keep-alive>
          <aAntiApplyInf v-if=" this.tabContent2==8" :applyId='tastwaitingPass.ApplyId'>反欺诈结论</aAntiApplyInf>
          <RantiFraudInvestigation v-if=" this.tabContent2==9" :isShow='false' :applyId='tastwaitingPass.ApplyId'>
            反欺诈调查</RantiFraudInvestigation>
          <keep-alive v-if="Routes.closed">
            <RFinanceInformation v-if=" this.tabContent2==10">财务信息</RFinanceInformation>
          </keep-alive>
          <div class='tab2_Content_show' v-if="this.RoleSHow=='partOne'">
            <!-- 专员部分 -->
            <QTAprovalConclution v-if=" this.tabContent2==11 ">反欺诈审批结论轨迹 </QTAprovalConclution>
            <aAprovalConclusion v-if=" this.tabContent2==12 "  :applyId='tastwaitingPass.ApplyId'>审批结论轨迹</aAprovalConclusion>
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
            <aAprovalConclusion v-if=" this.tabContent2==12"  :applyId='tastwaitingPass.ApplyId'>审批结论轨迹</aAprovalConclusion>
            <ComplianceProcess v-if=" this.tabContent2==13" :propQT='QTC'>合规质检结论轨迹</ComplianceProcess>
            <RulesReApply v-if=" this.tabContent2==14" :propReApply='ReApplyMark' :applyId='tastwaitingPass.ApplyId'>合规复议申请</RulesReApply>
            <regularQT v-if=" this.tabContent2==15&&QTC.pageType!='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</regularQT>
            <QTResultCheck v-if=" this.tabContent2==15&&QTC.pageType=='checkApp_trial_self'" :propQTconclution='QTC'>质检结论</QTResultCheck>
          </div>
        </div>
      </div>
    </div>
    <!-- 对比弹出层 -->
    <div class="AudioVisual_wrap_compare" v-show="CompareAlert">
      <el-button type="primary compareClose" @click="closeCompareBtn">关闭</el-button>
      <div class="AudioVisual_wrap_compare_left ">
        <p>影像资料</p>
        <div class="AlertContent">
          <keep-alive v-if="Routes.closed">
            <AudioVisualLeft :list='list' msg="MspLtwo" :comBtn='false'></AudioVisualLeft>
          </keep-alive>
        </div>
      </div>
      <div class="AudioVisual_wrap_compare_right ">
        <p class="customName">客户名称：
          <el-input v-model="AlertSearch" :disabled="true"></el-input>
          <el-button type="primary" @click="compareProps" class="AudioVisualLeft_compareIcon">
            <i class="el-icon-search" style="fontSize:16px"></i>
          </el-button>
        </p>
        <div class="AlertContent">
          <keep-alive v-if="Routes.closed">
            <AudioVisualLeft :list='list' msg="MspLthree" ref="audioChild" :comBtn='false' v-on:inputInf="inputInner"></AudioVisualLeft>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 编辑
  import AudioVisual from "./detailComponent/AudioVisual.vue";
  import AudioVisualLeft from "./detailComponent/AudioVisualLeft.vue";
  import FCreditForm from "../FinalTrial/FCreditForm.vue"; //信审表
  import RborrowerInformationSetail from "./ReadComponent/RborrowerInformationSetail.vue"; //借款人资料
  import applicationInformationDetail from "./checkComponent/applicationInformationDetail.vue"; //申请信息
  import RFinanceInformation from "./ReadComponent/RFinanceInformation"; //账务信息
  import aAprovalConclusion from "../AntiFraud/components/aAprovalConclusion.vue"; //信审审批结论轨迹
  import remarkDetail from "./checkComponent/remarkDetail.vue"; //备注信息
  import creditInvestigation from "./detailComponent/creditInvestigation.vue"; //实地征信
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf.vue' //反欺诈结论
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
        accepCusBasicInfo: {},
        customInf: {},
        tastwaitingPass: {},
        list: {},
        QTConclutionMark: "",
        TaskList: '',
        LocalList: '',
        Managermark: true,
        QTmark: false,
        leftBtnMark: false,
        RoleSHow: 'partOne',
        // /----------------上面为新加的
        watchData: '',
        loading: false,
        custName: "",
        certCode: '',
        mobile: '',
        showHalfBtn: false,
        CompareAlert: false,
        title: "",
        isShow: false,
        flexible: true,
        tabContent1: 0,
        tabContent2: 3,
        tabActiveInd1: 0,
        tabActiveInd2: 3,
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
        flag1: [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true],
        flag2: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], //15
        AlertSearch: "",
        isFull: false,
        midShow: true,
        QTC: {
          applyId: '',
          pageType: '',
          EditType: '',
          tastwaitingPass: {}
        },
        ReApplyMark: {
          pageType: "ComponentPage"
        },
        Routes: this.$router.options.routes[37],
      }
    },
    watch: {
      '$route'(to, from) {
        if (from.path === '/MatchingInfQT') {
          from.meta.newOne = false;
        }
        if (to.path === '/MatchingInfQT' && this.$route.meta.newOne) {
          this.Routes.closed = false;
          this.customInf = {};
          this.accepCusBasicInfo = {};
          this.list = {};
          this.mountedInf();
          this.title = "影像资料";
          this.tab1Index = this.tabContent1 = this.tabActiveInd1 = 0;
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.flag1 = [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true];
          this.flag2 = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
          this.$refs.right_tab_ul.style.left = "0";
          this.DblScreen();
          this.CompareAlert = false; //关闭弹出层
          this.AlertSearch = ''; //弹出层客户名称
        }
      }
    },
    activated() {
      this.Routes.closed = true;
    },
    methods: {
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
        this.$refs.Left_title.style.left = "9px";
        this.flexible = false;
      },
      hid() {
        this.$refs.Left_title.style.left = "-200px";
        this.flexible = true;
      },
      FullScreen() {
        this.showHalfBtn = true;
        this.$refs.right_tab_ul.style.left = "25px";
        this.$refs.rLeft.style.display = "none";
        this.watchData = this.$refs.rRight.style.width = "100%";
        this.$refs.rRight.style.left = '0';
        this.isFull = true;
        this.midShow = false;
        this.leftBtnMark = true;
        this.$refs.leftBtn.style.left = '45px';
      },
      DblScreen() {
        this.showHalfBtn = false;
        this.$refs.rLeft.style.display = "block";
        this.$refs.rRight.style.width = this.$refs.rLeft.style.width = this.$refs.RM.style.left = this.watchData =
          "calc(50% - 2px)";
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
      // getPageInf() { //获取个人信息
      //   this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
      //     id: this.tastwaitingPass.ApplyId,
      //   }).then(res => {
      //     if (res.statusCode == 200) {
      //       this.customInf = res.data;
      //       if (res.data.accepCusBasicInfo) {
      //         this.loading = false;
      //         this.custName = res.data.accepCusBasicInfo.custName;
      //         this.certCode = res.data.accepCusBasicInfo.certCode;
      //         this.mobile = res.data.accepCusBasicInfo.mobile;
      //       }
      //     } else {
      //       this.$message.error(res.msg);
      //     }
      //   });
      // },
      initialInfo() {
        var Nodename = this.$route.fullPath.split('?')[1];
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
      },
      QTComponentsShow() {
        this.items1 = this.itemsQT1;
        this.items2 = this.itemsQT2;
      },
      mountedInf() {
        this.title = "影像资料";
        this.loading = true;
        this.initialInfo(); //判断角色   
        this.QTC.tastwaitingPass = this.tastwaitingPass = JSON.parse(localStorage.getItem(this.LocalList));
        this.QTC.applyId = this.tastwaitingPass.ApplyId;
        this.$set(this.list, 'applyId', this.tastwaitingPass.ApplyId); //将matchApplyId 赋值给 入参applyId
        this.$set(this.list, 'applySubNo', this.tastwaitingPass.applySubNo);
        this.$set(this.list, 'certCode', this.tastwaitingPass.certCode);
      },
    },
    mounted() {
      this.MyMove();
    },
    created() {
      this.mountedInf();
    },
    components: {
      AudioVisual,
      AudioVisualLeft,
      FCreditForm,
      applicationInformationDetail,
      RborrowerInformationSetail, //借款人资料
      RFinanceInformation, //账务信息
      aAprovalConclusion, //信审审批结论归结
      remarkDetail, // 备注信息
      creditInvestigation, //实地征信
      aAntiApplyInf, //反欺诈结论
      InternalMatch,
      PhoneCredit,
      QTAprovalConclution, //反欺诈审批结论轨迹
      regularQT, //  质检结论
      QTResultCheck,
      ComplianceProcess,
      RulesReApply,
      RantiFraudInvestigation
    }
  }

</script>
