<!-- 综合查询详情 -->
<template>
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
    <div class="SplitScreen_wrap" id="rWrapQ" ref="rWrapQ">
      <!-- 左侧分屏部分 -->
      <div class="left" ref="rLeft">
        <div ref="Left_title" class="Left_ul" @mouseenter="showList" @mouseleave="hid">
          <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in items1" :key="index" @mousedown="flag1[index] &&  tab1($event,index,val)"
              :class="{tab1Act:tab1Index==index}">
              {{val}}</li>
          </ul>
        </div>
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
              <AudioVisualLeft msg="MspLone" v-if=" this.tabContent1==0" :list='list' v-on:CompareShow="compBtnS"
                :comBtn='false'></AudioVisualLeft>
            </keep-alive>
            <remark v-if=" this.tabContent1==1" :applyId='tastwaitingPass.applyId'></remark>
            <InternalMatch v-if=" this.tabContent1==2">内部匹配</InternalMatch>
            <keep-alive v-if="Routes.closed">
              <capplicationInformationDetail v-if=" this.tabContent1==3" :applyId='tastwaitingPass.applyId'>申请信息</capplicationInformationDetail>
            </keep-alive>
            <RborrowerInformationSetail v-if=" this.tabContent1==4">借款人资料</RborrowerInformationSetail>
            <RPhoneCredit v-if=" this.tabContent1==5" :applyId='tastwaitingPass.applyId'> 电话征信</RPhoneCredit>
            <FCreditForm v-if=" this.tabContent1==6" :applyId='tastwaitingPass.applyId' :FinalConCheckShow='true'>信审表</FCreditForm>
            <keep-alive v-if="Routes.closed">
              <creditInvestigation v-if=" this.tabContent1==7" :applyId='tastwaitingPass.applyId'>实地征信</creditInvestigation>
            </keep-alive>
            <aAntiApplyInf v-if=" this.tabContent1==8" :applyId='tastwaitingPass.applyId'>反欺诈结论</aAntiApplyInf>
            <RantiFraudInvestigation v-if=" this.tabContent1==9" :isShow='true' :applyId='tastwaitingPass.applyId'>反欺诈调查</RantiFraudInvestigation>
            <keep-alive v-if="Routes.closed">
              <RFinanceInformation v-if=" this.tabContent1==10">账务信息</RFinanceInformation>
            </keep-alive>
            <processTrajectory v-if=" this.tabContent1==11" :applyId='tastwaitingPass.applyId'>流程轨迹</processTrajectory>
            <aAprovalConclusion v-if=" this.tabContent1==12" :applyId='tastwaitingPass.applyId'>审批结论轨迹</aAprovalConclusion>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="SP_middle" ref="RMQ" id="RMQ" v-show="midShow"></div>
      <!-- 右侧分屏部分 -->
      <div class="right" ref="rRight">
        <span class="icon_showHalf" v-show="showHalfBtn" @click="DblScreen"></span>
        <div class="Right_tab_title_div">
          <span class="pre_next_btn_wrap" @click="leftMovingBtn">
            <img src="../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
            <img src="../../../static/images/Shaperight@1x.png">
          </span>
          <div class="Right_tab_ul_wrap">
            <ul ref="right_tab_ul" style="left:0;right:0;width:1500px">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="flag2[index] &&  tab2($event,index,val)"
                :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <div class="tab2_Content">
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==0" :applyId='tastwaitingPass.applyId'></AudioVisual>
          </keep-alive>
          <remark v-if=" this.tabContent2==1" :applyId='tastwaitingPass.applyId'></remark>
          <InternalMatch v-if=" this.tabContent2==2">内部匹配</InternalMatch>
          <keep-alive v-if="Routes.closed">
            <capplicationInformationDetail v-if=" this.tabContent2==3" :applyId='tastwaitingPass.applyId' roles='MatchingInfQuery'>申请信息</capplicationInformationDetail>
          </keep-alive>
          <RborrowerInformationSetail v-if=" this.tabContent2==4">借款人资料</RborrowerInformationSetail>
          <RPhoneCredit v-if=" this.tabContent2==5" :applyId='tastwaitingPass.applyId'> 电话征信</RPhoneCredit>
          <FCreditForm v-if=" this.tabContent2==6" :applyId='tastwaitingPass.applyId' :FinalConCheckShow='true'>信审表</FCreditForm>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==7" :applyId='tastwaitingPass.applyId'>实地征信</creditInvestigation>
          </keep-alive>
          <aAntiApplyInf v-if=" this.tabContent2==8" :applyId='tastwaitingPass.applyId'>反欺诈结论</aAntiApplyInf>
          <RantiFraudInvestigation v-if=" this.tabContent2==9" :isShow='true' :applyId='tastwaitingPass.applyId'>反欺诈调查</RantiFraudInvestigation>
          <keep-alive v-if="Routes.closed">
            <RFinanceInformation v-if=" this.tabContent2==10">账务信息</RFinanceInformation>
          </keep-alive>
          <processTrajectory v-if=" this.tabContent2==11" :applyId='tastwaitingPass.applyId'>流程轨迹</processTrajectory>
          <aAprovalConclusion v-if=" this.tabContent2==12" :applyId='tastwaitingPass.applyId'>审批结论轨迹</aAprovalConclusion>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AudioVisual from "./detailComponent/AudioVisual.vue";
  import AudioVisualLeft from "./detailComponent/AudioVisualLeft.vue";
  import FCreditForm from "../FinalTrial/FCreditForm.vue"; //信审表-终审查看-del初审人员-第一个
  import RborrowerInformationSetail from "./ReadComponent/RborrowerInformationSetail.vue"; //借款人资料
  import capplicationInformationDetail from "./checkComponent/applicationInformationDetail.vue"; //申请信息
  import RFinanceInformation from "./ReadComponent/RFinanceInformation.vue"; //账务信息
  import aAprovalConclusion from "../AntiFraud/components/aAprovalConclusion.vue"; //信审审批结论轨迹
  import remark from "./detailComponent/remark.vue"; //备注信息
  import processTrajectory from "./checkComponent/processTrajectory.vue"; //流程轨迹
  import creditInvestigation from "./detailComponent/creditInvestigation.vue"; //实地征信
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf.vue' //反欺诈结论
  import InternalMatch from "./InternalMatch";
  import RPhoneCredit from "./ReadComponent/RPhoneCredit.vue"; //电话征信-综合查询页面用
  import RantiFraudInvestigation from "./ReadComponent/RantiFraudInvestigation"; //反欺诈调查
  export default {
    data() {
      return {
        loading: false,
        list: {
          applyId: this.tastwaitingPass.applyId, //将matchApplyId 赋值给 入参applyId
          applySubNo: this.tastwaitingPass.applySubNo,
          certCode: this.tastwaitingPass.certCode,
        },
        accepCusBasicInfo: {},
        tastwaitingPass: {},
        showHalfBtn: false,
        CompareAlert: false,
        title: "",
        isShow: false,
        tabContent1: 0,
        tabContent2: 3,
        tabActiveInd1: 0,
        tabActiveInd2: 3,
        items1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", '反欺诈结论', "反欺诈调查", "账务信息", "流程轨迹",
          '信审审批结论轨迹'
        ],
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "反欺诈调查", "账务信息", "流程轨迹",
          "信审审批结论轨迹"
        ],
        tab1Index: 0,
        tab2Index: 3,
        flag1: [true, true, true, false, true, true, true, true, true, true, true, true, true],
        flag2: [true, true, true, true, true, true, true, true, true, true, true, true, true],
        midShow: true,
        Routes: this.$router.options.routes[36],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/MatchingInfQuery' && this.$route.params.newOne) {
          this.Routes.closed = false;
          this.accepCusBasicInfo = {};
          // this.list = {};
          this.mountedInf();
          this.title = "影像资料";
          this.tab1Index = this.tabContent1 = this.tabActiveInd1 = 0;
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.flag1 = [true, true, true, false, true, true, true, true, true, true, true, true, true];
          this.flag2 = [true, true, true, true, true, true, true, true, true, true, true, true, true];
          this.$refs.right_tab_ul.style.left = "0";
          this.DblScreen();
          this.CompareAlert = false; //关闭弹出层
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
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= -850) {
          this.$refs.right_tab_ul.style.left = "-850px";
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) - 50 + "px";
        }
      },
      showList() {
        this.$refs.Left_title.style.left = "9px";
      },
      hid() {
        this.$refs.Left_title.style.left = "-200px";
      },
      FullScreen() {
        this.showHalfBtn = true;
        this.$refs.right_tab_ul.style.left = "0";
        this.$refs.rLeft.style.display = "none";
        this.$refs.rRight.style.width = "100%";
        this.$refs.rRight.style.left = '0';
        this.midShow = false;
      },
      DblScreen() {
        this.showHalfBtn = false;
        this.$refs.rLeft.style.display = "block";
        this.$refs.rRight.style.width = this.$refs.rLeft.style.width = this.$refs.RMQ.style.left =
          "calc(50% - 2px)";
        this.$refs.rRight.style.left = '50%';
        this.midShow = true;
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
        var labBtn = $("#RMQ");
        var wrapWidth = $("#rWrapQ").width();
        labBtn.bind('mousedown', () => {
          dragging = true;
          leftOffset = $("#rWrapQ").offset().left;
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
      mountedInf() {
        this.title = "影像资料";
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("Query"));
        // this.$set(this.list, 'applyId', this.tastwaitingPass.applyId); //将matchApplyId 赋值给 入参applyId
        // this.$set(this.list, 'applySubNo', this.tastwaitingPass.applySubNo);
        // this.$set(this.list, 'certCode', this.tastwaitingPass.certCode);
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
      capplicationInformationDetail,
      RborrowerInformationSetail, //借款人资料
      RFinanceInformation, //账务信息
      aAprovalConclusion, //信审审批结论归结
      remark, // 备注信息
      creditInvestigation, //实地征信
      aAntiApplyInf, //反欺诈结论
      InternalMatch,
      RPhoneCredit,
      processTrajectory,
      RantiFraudInvestigation, //反欺诈调查
    }
  }

</script>
