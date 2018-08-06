<template>
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
      <!-- 进件人详情 -->
      <p class="PerDtl">
        <span> 借款人：{{custName}}</span>
        <span> 进件编号：{{customInf.applyMainNo}}</span>
        <span> 证件号码：{{tastwaitingPass.certCode}}</span>
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
            <!-- 左侧 title列表  -->
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
                <!-- <img src="../../../static/images/backcopy 2.png" > -->
              </span>
              <span class="showAllList" @mouseenter="showList" @mouseleave="hid">
                <img src="../../../static/images/icon-02.png">
              </span>
            </p>
            <div class="Left_right_BigImg ">
              <AudioVisualLeft ref="AudioLeft" :custom="customInf.applyId " v-if=" this.tabContent1==0" msg="FspLone" v-on:CompareShow="compBtnS"
                :comBtn.sync='comBtn'></AudioVisualLeft>
              <cremarkDetail v-if=" this.tabContent1==1"></cremarkDetail>
              <InternalMatch v-if=" this.tabContent1==2" :SplitS="SplitLeft" :isFull.sync="isFull"></InternalMatch>
              <capplicationInformationDetail v-if=" this.tabContent1==3"></capplicationInformationDetail>
              <cborrowerInformationDetail v-if=" this.tabContent1==4"></cborrowerInformationDetail>
              <PhoneCredit v-if=" this.tabContent1==5" :SplitS="SplitLeft" :isFull.sync="isFull" :addBtn="false"></PhoneCredit>
              <!-- <FcCreditForm v-if=" this.tabContent1==6"></FcCreditForm> -->
            <FCreditForm v-if=" this.tabContent1==6" :applyId=' this.tastwaitingPass.applyId' :TrilPersonShow='true' :FinalConCheckShow='true'></FCreditForm>
              <creditInvestigation v-if=" this.tabContent1==7" :applyId='tastwaitingPass.applyId'></creditInvestigation>
              <processTrajectory v-if=" this.tabContent1==8"></processTrajectory>
            </div>
          </div>
        </div>
        <!-- 中间 -->
        <div class="SP_middle" ref="RM" id="RM" v-show="midShow"></div>
        <!-- 右侧分屏部分 -->
        <div class="right" ref="rRight">
          <span class="icon_showHalf" v-show="showHalfBtn" @click="DblScreen"></span>
          <!-- <img src="../../../static/images/backcopy.png" > -->
          <!-- 右屏tab 表头 -->
          <div class="Right_tab_title_div">
            <!-- 左右滑动 图标  -->
            <span class="pre_next_btn_wrap" @click="leftMovingBtn">
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
            <AudioVisual v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS"></AudioVisual>
            <remark v-if=" this.tabContent2==1"></remark>
            <InternalMatch v-if=" this.tabContent2==2" :SplitS="SplitLeft" :isFull.sync="isFull"></InternalMatch>
            <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3"></capplicationInformationDetail>
            <cborrowerInformationDetail v-if=" this.tabContent2==4" :isFull.sync="isFull"></cborrowerInformationDetail>
            <PhoneCredit v-if=" this.tabContent2==5" :SplitS="SplitLeft" :isFull.sync="isFull" :addBtn="false"></PhoneCredit>
            <FCreditForm v-if=" this.tabContent2==6" :applyId=' this.tastwaitingPass.applyId' :TrilPersonShow='true' :FinalConEditShow='true' :makeSureBtnShow="true" ></FCreditForm>
            <creditInvestigation v-if=" this.tabContent2==7" :applyId=' tastwaitingPass.applyId' ></creditInvestigation>
            <aAntiApplyInf v-if=" this.tabContent2==8"  :applyId='tastwaitingPass.applyId'></aAntiApplyInf>
            <CreditApproval v-if=" this.tabContent2==9"></CreditApproval>
          </div>
        </div>
      </div>
      <!-- 对比弹出层   不在右侧div里面，再 wrap 里面  可以用fixed定位-->
      <div class="AudioVisual_wrap_compare" v-show="CompareAlert" v-on:CompareShow="compBtnS">
        <el-button type="primary compareClose" @click="closeCompareBtn">关闭</el-button>
        <!-- 弹出层左侧 div -->
        <div class="AudioVisual_wrap_compare_left ">
          <p>影像资料</p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <AudioVisualLeft ref="AudioLeftCom" :custom="customInf.applyId " msg="FspLtwo"></AudioVisualLeft>
          </div>
        </div>
        <!-- 弹出层右侧 div -->
        <div class="AudioVisual_wrap_compare_right ">
          <!-- 搜索框 -->
          <p class="customName">客户名称：
            <el-input v-model="AlertSearch" :disabled="true"></el-input>
            <el-button type="primary" @click="compareProps" class="AudioVisualLeft_compareIcon">
              <i class="el-icon-search" style="fontSize:16px"></i>
            </el-button>
          </p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <AudioVisualLeft :custom="customInf.applyId " ref="audioChild" v-on:inputInf="inputInner" msg="FspLthree"></AudioVisualLeft>
          </div>
        </div>
      </div>
      <!-- 对比弹出层结束 -->
    </div>
</template>
<script>
  // import FcCreditForm from './FinalComponent/FcCreditForm'; //左侧
  import FCreditForm from './FinalComponent/FCreditForm'; //右侧
  import AudioVisual from "../FirstTrail/detailComponent/AudioVisual.vue";
  import AudioVisualLeft from '../FirstTrail/detailComponent/AudioVisualLeft';
  import remark from "../FirstTrail/detailComponent/remark.vue"; //备注信息-右-编辑
  import cremarkDetail from "../FirstTrail/checkComponent/remarkDetail.vue"; //备注信息（左）
  import capplicationInformationDetail from "../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息（左+右）
  import cborrowerInformationDetail from "../FirstTrail/checkComponent/borrowerInformationDetail.vue"; //借款人资料（左+右）
  import creditInvestigation from "../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信（左右）
  import processTrajectory from "../FirstTrail/checkComponent/processTrajectory.vue"; //流程轨迹（左）
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf.vue' //反欺诈结论
  // 编辑
  import InternalMatch from "../FirstTrail/InternalMatch.vue";
  import borrowerInformation from "../FirstTrail/detailComponent/borrowerInformation.vue";
  import PhoneCredit from "../FirstTrail/PhoneCredit.vue";
  import CreditApproval from "../FirstTrail/CreditApproval.vue";
  export default {
    data() {
      return {
        custName: '',
        SplitLeft: "left",
        SplitRight: "right",
        watchData: '',
        loading: false,
        // 进件人信息
        accepCusBasicInfo: '',
        customInf: [], //申请信息页local字段
        tastwaitingPass: [], //详情列表页信息--(含)取applyId
        showHalfBtn: false,
        CompareAlert: false,
        title: "",
        isShow: false,
        flexible: true,
        tabContent1: 0,
        tabContent2: 3,
        tabActiveInd1: 0,
        tabActiveInd2: 3,
        items1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "流程轨迹"],
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "审核结论"],
        tab1Index: 0,
        tab2Index: 3,
        flag1: [true, true, true, false, true, true, true, true, true],
        flag2: [true, true, true, true, true, true, true, true, true, true],
        AlertSearch: "",
        AlertSearchCondition: [{
          value: '选项1',
          label: '最近时间原则排列'
        }, {
          value: '选项2',
          label: '内匹客户姓名+本人进件'
        }, {
          value: '选项3',
          label: '内匹客户姓名'
        }],
        isFull: false,
        comBtn: true,
        alertComBtn: false,
        midShow: true,
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/FSplitScreen' && this.$route.params.newOne) {
          this.mountedInf();
          this.title = "影像资料";
          this.tab1Index = this.tabContent1 = this.tabActiveInd1 = 0;
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.flag1 = [true, true, true, false, true, true, true, true, true];
          this.flag2 = [true, true, true, true, true, true, true, true, true, true];
          this.$refs.AudioLeft ? this.$refs.AudioLeft.mountedInf() : '';
          this.$refs.AudioLeftCom ? this.$refs.AudioLeftCom.mountedInf() : '';
          this.$refs.audioChild ? this.$refs.audioChild.mountedInf() : '';
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
          this.$refs.right_tab_ul.style.left = '0';
          this.DblScreen();
           this.CompareAlert=false;//关闭弹出层
            this.AlertSearch='';//弹出层客户名称
        }
      }
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("FtaskInWaitting"));
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.loading = false;
            this.custName = res.data.accepCusBasicInfo.custName;
            this.customInf = res.data;
            this.accepCusBasicInfo = res.data.accepCusBasicInfo;
          } else {
            this.$message.error(res.msg);
          }
        });
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
          this.$refs.right_tab_ul.style.left = "0"
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) + 50 + "px";
        }
      },
      rightMovingBtn() {
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= -500) {
          this.$refs.right_tab_ul.style.left = "-500px";
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
        // this.originLeft = this.$refs.right_tab_ul.style.left;
        this.$refs.right_tab_ul.style.left = "0";
        this.$refs.rLeft.style.display = "none";
        this.watchData = this.$refs.rRight.style.width = "100%";
        this.$refs.rRight.style.left = '0';
        // this.watchData = this.$refs.rRight.style.width;
        this.isFull = true;
        this.midShow = false;
      },
      DblScreen() {
        this.showHalfBtn = false;
        // this.$refs.right_tab_ul.style.left = this.originLeft;
        this.$refs.rLeft.style.display = "block";
        this.watchData = this.$refs.rRight.style.width = this.$refs.rLeft.style.width = this.$refs.RM.style.left =
          "calc(50% - 2px)";
        this.$refs.rRight.style.left = '50%';
        // this.watchData = this.$refs.rRight.style.width;
        this.isFull = false;
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
                // labBtn.eq(0).css('left', parseFloat(wrapWidth) - 11 + 'px');
                labBtn.eq(0).css('left', wrapWidth - 11 + 'px');
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
      }
    },
    mounted() {
      this.title = "影像资料";
      this.MyMove();
      this.mountedInf();
    },
    components: {
      // FcCreditForm,
      FCreditForm,
      AudioVisualLeft,
      AudioVisual,
      creditInvestigation,
      cborrowerInformationDetail,
      capplicationInformationDetail,
      remark,
      cremarkDetail, //备注信息-左
      processTrajectory,
      aAntiApplyInf,
      InternalMatch,
      borrowerInformation,
      PhoneCredit,
      CreditApproval,
    }
  }

</script>
