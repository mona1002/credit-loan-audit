<template>
  <div class="SplitScreen">
      <!-- 质检流程-编辑部分 -->
    <myHead></myHead>
    <div class="SplitScreen_content">
      <!-- 进件人详情 -->
      <p class="PerDtl">
        <!-- <span> 借款人： {{custName}}</span> -->
        <!-- <span> 借款人： {{customInf.accepCusBasicInfo.custName}}</span> -->
        <!-- <span> 进件编号: {{customInf.applyMainNo}}</span>
        <span> 证件号码: {{customInf.accepCusBasicInfo.certCode}}</span>
        <span> 进件机构: {{customInf.appOrgName}}</span>
        <span> 门店成立时间: {{customInf.appOrgRegisterDate}}</span>
        <span> 业务员入职时间： {{customInf.salPerEmployDate}}</span>
        <span>{{customInf.adminIntroduce}}</span> -->
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
              <RAudioVisualLeft msg="MspLone" v-if=" this.tabContent1==0" v-on:CompareShow="compBtnS" :comBtn.sync='comBtn'></RAudioVisualLeft>
              <Rremark v-if=" this.tabContent1==1"></Rremark>
              <InternalMatch v-if=" this.tabContent1==2">内部匹配</InternalMatch>
              <RapplicationInformationDetail v-if=" this.tabContent1==3">申请信息</RapplicationInformationDetail>
              <RborrowerInformationSetail v-if=" this.tabContent1==4">借款人资料</RborrowerInformationSetail>
              <PhoneCredit v-if=" this.tabContent1==5"> 电话征信</PhoneCredit>
              <FMCreditForm v-if=" this.tabContent1==6">信审表</FMCreditForm>
              <RcreditInvestigation v-if=" this.tabContent1==7">实地征信</RcreditInvestigation>
              <aMAntiApplyInf v-if=" this.tabContent1==8">反欺诈结论</aMAntiApplyInf>
              <!-- <RFinanceInformation v-if=" this.tabContent1==9">财务信息</RFinanceInformation> -->
              <!-- <RprocessTrajectory v-if=" this.tabContent1==9">流程轨迹</RprocessTrajectory> -->
              <aAntiConclusionPath v-if=" this.tabContent1==9">反欺诈审批结论轨迹 </aAntiConclusionPath>              
              <RApprovalConclusion v-if=" this.tabContent1==10">审批结论轨迹</RApprovalConclusion>
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
            <RAudioVisual v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS" :comBtn.sync='comBtn' ></RAudioVisual>
            <Rremark v-if=" this.tabContent2==1"></Rremark>
            <InternalMatch v-if=" this.tabContent2==2">内部匹配</InternalMatch>
            <RapplicationInformationDetail v-if=" this.tabContent2==3">申请信息</RapplicationInformationDetail>
            <RborrowerInformationSetail v-if=" this.tabContent2==4" :isFull.sync="isFull">借款人资料</RborrowerInformationSetail>
            <PhoneCredit v-if=" this.tabContent2==5"> 电话征信</PhoneCredit>
            <FMCreditForm v-if=" this.tabContent2==6">信审表</FMCreditForm>
            <RcreditInvestigation v-if=" this.tabContent2==7">实地征信</RcreditInvestigation>
            <aMAntiApplyInf v-if=" this.tabContent2==8">反欺诈结论</aMAntiApplyInf>
            <!-- <RFinanceInformation v-if=" this.tabContent2==9">财务信息</RFinanceInformation> -->
            <!-- <RprocessTrajectory v-if=" this.tabContent2==9">流程轨迹</RprocessTrajectory> -->
              <aAntiConclusionPath v-if=" this.tabContent2==9">反欺诈审批结论轨迹 </aAntiConclusionPath>              
            <RApprovalConclusion v-if=" this.tabContent2==10">审批结论轨迹</RApprovalConclusion>
            <RApprovalConclusion v-if=" this.tabContent2==11">质检结论</RApprovalConclusion>
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
            <RAudioVisualLeft msg="MspLtwo"  :comBtn.sync='alertComBtn'></RAudioVisualLeft>
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
            <RAudioVisualLeft msg="MspLthree" ref="audioChild"  :comBtn.sync='alertComBtn' v-on:inputInf="inputInner"></RAudioVisualLeft>
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
  import aAntiConclusionPath from "../AntiFraud/components/aAntiConclusionPath.vue"; //反欺诈审批结论轨迹

  import InternalMatch from "./InternalMatch";
  import borrowerInformation from "./detailComponent/borrowerInformation";
  import PhoneCredit from "./PhoneCredit"; //电话征信
  import CreditApproval from "./CreditApproval";
  export default {
    data() {
      return {
        watchData: '',
        originLeft: '',
        customInf: [], 
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
       items1: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信",'反欺诈结论', "反欺诈审批结论轨迹",'信审审批结论轨迹'],
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "反欺诈审批结论轨迹","信审审批结论轨迹",'质检结论'],
        tab1Index: 0,
        tab2Index: 3,
       flag1: [true, true, true, false, true, true, true, true, true,true,true],
        flag2: [true, true, true, true, true, true, true, true, true, true,true,true],
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
        comBtn:true,
        alertComBtn:false,
         midShow: true,
      }
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
          this.$refs.right_tab_ul.style.left = "0"
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) + 50 + "px";
        }
      },
      rightMovingBtn() {
          console.log(parseFloat(this.$refs.right_tab_ul.style.left) )
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= -750) {
          this.$refs.right_tab_ul.style.left = "-750px";
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
        this.originLeft = this.$refs.right_tab_ul.style.left;
        this.$refs.right_tab_ul.style.left = "0";
        this.$refs.rLeft.style.display = "none";
        this.$refs.rRight.style.width = "100%";
        this.watchData = this.$refs.rRight.style.width;
        this.isFull = true;
          this.midShow = false;
      },
      DblScreen() {
        this.showHalfBtn = false;
        this.$refs.right_tab_ul.style.left = this.originLeft;
        this.$refs.rLeft.style.display = "block";
        this.$refs.rRight.style.width = "50%";
        this.watchData = this.$refs.rRight.style.width;
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
        var clickX, leftOffset, inx, nextW2, nextW;
        var recordMoving;
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
                labBtn.eq(0).css('left', clickX - leftOffset + 2 + 'px'); //按钮移动
                labBtn.eq(0).prev().width(clickX - leftOffset + 'px'); //前一个div宽度变化
                labBtn.eq(0).next().width(wrapWidth - nextW2 - 6 + 'px'); //减多少宽地待算
              } else if (clickX < leftOffset + 10 && clickX < (wrapWidth - 5)) {
                labBtn.eq(0).css('left', '0px');
                labBtn.eq(0).prev().width('0px');
                labBtn.eq(0).next().width(wrapWidth - 6 + 'px'); //减多少宽地待算
              }
              if (clickX > (wrapWidth - 5)) {
                labBtn.eq(0).css('left', parseFloat(wrapWidth) - 11 + 'px');
                labBtn.eq(0).prev().width(wrapWidth - 11 + 'px');
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
        console.log(window.location)
        console.log(this.$route.fullPath)
           if(this.$route.fullPath.indexOf('?')!=-1 ){

           }




      this.tastwaitingPass = JSON.parse(localStorage.getItem("internalObj"));
      this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
        id: this.tastwaitingPass.matchApplyId,
      }).then(res => {
        if (res.statusCode == 200) {
          this.customInf = res.data;
           this.custName = res.data.accepCusBasicInfo.custName;
        } else {
          this.$message.error(res.msg);
        }
      });
       this.MyMove();
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
      borrowerInformation,
      PhoneCredit,
      CreditApproval,
      aAntiConclusionPath,//反欺诈审批结论轨迹
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
    font-size: 14px;
    margin-right: 15px;
  }

  .PerDtl span:nth-of-type(7) {
    width: 105px;
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
  .AudioVisual_wrap_compare_left {
    margin-right: 2px;
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
    width: 1420px;
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
  /* 右侧tab切换头 左右滑动图标  流  */

  .pre_next_btn_wrap {
    position: absolute;
    z-index: 2;
    width: 25px;
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
