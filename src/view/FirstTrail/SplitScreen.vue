<template>
  <div class="SplitScreen">
    <myHead></myHead>
    <div class="SplitScreen_content">
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
            <div class="Left_right_BigImg">
              <!--  :AUobj='AULobj'   :AUpreWidth.sync='preWidth' -->
              <AudioVisualLeft ref="AudioLeft" msg="spLone" v-if=" this.tabContent1==0" v-on:CompareShow="compBtnS" :comBtn.sync='comBtn'></AudioVisualLeft>
              <cremarkDetail ref="markLeft" v-if=" this.tabContent1==1"></cremarkDetail>
              <InternalMatch ref="InterLeft" v-if=" this.tabContent1==2" :SplitS="SplitLeft" :isFull.sync="isFull"></InternalMatch>
              <capplicationInformationDetail ref="applicationLeft" v-if=" this.tabContent1==3"></capplicationInformationDetail>
              <cborrowerInformationDetail ref="borrowLeft" v-if=" this.tabContent1==4" :isFull.sync="isFull"></cborrowerInformationDetail>
              <PhoneCredit ref="phoneLeft" v-if=" this.tabContent1==5" :SplitS="SplitLeft" :isFull.sync="isFull"></PhoneCredit>
              <cCreditForm ref="CreditFormLeft" v-if=" this.tabContent1==6"></cCreditForm>
              <creditInvestigation ref="InvestigationLeft" v-if=" this.tabContent1==7"></creditInvestigation>
              <processTrajectory ref="processLeft" v-if=" this.tabContent1==8"></processTrajectory>
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
            <AudioVisual ref="Audio" :applyID='tastwaitingPass.applyId' v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS" :AURpreWidth.sync='RpreWidth'></AudioVisual>
            <remark v-if=" this.tabContent2==1"></remark>
            <InternalMatch v-if=" this.tabContent2==2" :SplitS="SplitRight" :isFull.sync="isFull"></InternalMatch>
            <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3"></capplicationInformationDetail>
            <borrowerInformation ref="borrow" v-if=" this.tabContent2==4" :isFull.sync="isFull"></borrowerInformation>
            <PhoneCredit ref="phone" v-if=" this.tabContent2==5" :SplitS="SplitRight" :isFull.sync="isFull"></PhoneCredit>
            <CreditForm ref="CreditForm" :myWatch="watchData" v-if=" this.tabContent2==6"></CreditForm>
            <creditInvestigation ref="Investigation" v-if=" this.tabContent2==7"></creditInvestigation>
            <aAntiApplyInf ref="AntiApply" v-if=" this.tabContent2==8"></aAntiApplyInf>
            <CreditApproval ref="Approval" v-if=" this.tabContent2==9"></CreditApproval>
          </div>
        </div>
      </div>
      <!-- 对比弹出层   不在右侧div里面，再 wrap 里面  可以用fixed定位-->
      <div class="AudioVisual_wrap_compare" v-if="CompareAlert" v-on:CompareShow="compBtnS">
        <el-button type="primary compareClose" @click="closeCompareBtn">关闭</el-button>
        <!-- 弹出层左侧 div -->
        <div class="AudioVisual_wrap_compare_left ">
          <p>影像资料</p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <AudioVisualLeft ref="AudioLeftCom" msg="spLtwo" v-if="CompareAlert" :comBtn.sync='alertComBtn'></AudioVisualLeft>
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
            <AudioVisualLeft msg="spLthree" ref="audioChild" v-on:inputInf="inputInner" :comBtn.sync='alertComBtn'></AudioVisualLeft>
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
  import AudioVisual from "./detailComponent/AudioVisual";
  import AudioVisualLeft from "./detailComponent/AudioVisualLeft";
  import remark from "./detailComponent/remark";
  import InternalMatch from "./InternalMatch";
  import applicationInformation from "./detailComponent/applicationInformation";
  import borrowerInformation from "./detailComponent/borrowerInformation";
  import PhoneCredit from "./PhoneCredit";
  import CreditForm from "./detailComponent/CreditForm";
  import creditInvestigation from "./detailComponent/creditInvestigation"; //实地征信
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf' //反欺诈结论  
  import CreditApproval from "./CreditApproval";
  // 查询
  import cCreditForm from "./checkComponent/cCreditForm";
  // import cFinanceInformation from "./checkComponent/FinanceInformation";
  import cremarkDetail from "./checkComponent/remarkDetail"; //备注信息
  import cborrowerInformationDetail from "./checkComponent/borrowerInformationDetail"; //借款人资料
  import capplicationInformationDetail from "./checkComponent/applicationInformationDetail"; //申请信息
  import processTrajectory from "./checkComponent/processTrajectory"; //流程轨迹
  export default {
    data() {
      return {
        custName: '', //借款人
        SplitLeft: "left",
        SplitRight: "right",
        watchData: '',
        originLeft: '',
        customInf: [], //申请信息页local字段
        tastwaitingPass: [], //详情列表页信息--(含)取applyId
        accepCusBasicInfo: '',
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
        items2: ["影像资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "信审审批"],
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
        RpreWidth: null,
        destroyInf: ''
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/SplitScreen' && this.$route.params.newOne) {
          this.mountedInf();
          // 信审审批要取申请信息值
          this.title = "影像资料";
          this.tab1Index = this.tabContent1 = this.tabActiveInd1 = 0;
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
          this.flag1 = [true, true, true, false, true, true, true, true, true];
          this.flag2 = [true, true, true, true, true, true, true, true, true, true];
          this.$refs.AudioLeft ? this.$refs.AudioLeft.mountedInf() : '';
          this.$refs.AudioLeftCom ? this.$refs.AudioLeftCom.mountedInf() : '';
          this.$refs.audioChild ? this.$refs.audioChild.mountedInf() : '';
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
          // if (this.tabActiveInd1 === 0) {
          //   this.$refs.AudioLeft.mountedInf();
          //   this.$refs.AudioLeftCom ? this.$refs.AudioLeftCom.mountedInf() : '';
          //   this.$refs.audioChild ? this.$refs.audioChild.mountedInf() : '';
          // }
          //         this.tabActiveInd1 === 1 ? this.$refs.markLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 2 ? this.$refs.InterLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 3 ? this.$refs.applicationLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 4 ? this.$refs.borrowLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 5 ? this.$refs.phoneLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 6 ? this.$refs.CreditFormLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 7 ? this.$refs.InvestigationLeft.mountedInf() : '';
          //          this.tabActiveInd1 === 8 ? this.$refs.processLeft.mountedInf() : '';
          //         this.tabActiveInd2 === 0 ? this.$refs.Audio.mountedInf() : '';
          // this.tabActiveInd2 === 3 ? this.$refs.applicationInf.mountedInf() : '';
          //          this.tabActiveInd2 === 4 ? this.$refs.borrow.mountedInf() : '';
          // this.tabActiveInd2 === 5 ? this.$refs.phone.mountedInf() : '';
          // this.tabActiveInd2 === 6 ? this.$refs.CreditForm.mountedInf() : '';
          // this.tabActiveInd2 === 7 ? this.$refs.Investigation.mountedInf() : '';
          // this.tabActiveInd2 === 8 ? this.$refs.AntiApply.mountedInf() : '';
          // this.tabActiveInd2 === 9 ? this.$refs.Approval.mountedInf() : '';
        }
      }
    },
    methods: {
      compareProps() {
        this.$refs.audioChild.personalNunPerson()
        // comJs.MyMove('#MID', '#AUL', this.AUpreWidth, 'AUclickX', 'AUleftOffset', 'bbr', 10);
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
        this.watchData = this.$refs.rRight.style.width = this.$refs.RM.style.left = this.$refs.rLeft.style.width =
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
                labBtn.eq(0).css('left', clickX - leftOffset + 2 + 'px');
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
        this.tastwaitingPass = JSON.parse(localStorage.getItem("taskInWaitting"));
        this.$message.error(this.tastwaitingPass.applyId)
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.custName = res.data.accepCusBasicInfo.custName;
            this.customInf = res.data;
            this.accepCusBasicInfo = res.data.accepCusBasicInfo
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    // activated() {
    //   console.log(this.$route.meta.refresh)
    //   console.log('activated')
    //   if (this.$route.meta.refresh) {
    //     this.mountedInf();
    //     this.tab1Index = this.tabActiveInd1 = this.tabContent1 = 0;
    //     this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 3;
    //     this.flag1 = [true, true, true, false, true, true, true, true, true];
    //     this.flag2 = [true, true, true, true, true, true, true, true, true, true];
    //   }
    //   //  // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    //   //  this.$route.meta.isBack=false
    //   //  // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
    //   //  this.isFirstEnter=false;
    // },
    // deactivated(){
    // console.log('deactivated')
    // console.log( this.tabContent2)
    //   //  if( this.tabContent2==3){
    //   // //     // this.destroyInf=
    //   //     this.tabContent2=0;
    //   //   }
    //     // else{
    //     //   this.destroyInf=this.tabContent2;
    //     // }
    // },
    // beforeRouteLeave(to,from,next){
    // console.log( this.tabContent2)

    //   //  this.tabContent2==3? this.tabContent2=0:this.tabContent2;
    // console.log(to)
    // console.log(from)
    // // from.meta.refresh=false;
    // next();
    // },
    mounted() {
      this.title = "影像资料";
      this.MyMove();
      this.mountedInf();
    },
    components: {
      myHead,
      AudioVisual,
      AudioVisualLeft,
      remark,
      InternalMatch,
      applicationInformation,
      borrowerInformation,
      PhoneCredit,
      CreditForm,
      creditInvestigation,
      CreditApproval,
      cCreditForm,
      cremarkDetail,
      cborrowerInformationDetail,
      capplicationInformationDetail,
      processTrajectory,
      aAntiApplyInf,
    }
  }

</script>
<style scoped>
  .SplitScreen {
    height: 100%;
    overflow-y: hidden;
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

  /* .left,
  .AudioVisual_wrap_compare_left {
    margin-right: 2px;
  } */

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
    width: 110px;
    background: rgba(31, 45, 61, 0.59);
    box-shadow: 0 5px 20px 0 #475669;
    position: fixed;
    left: -110px;
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

  /* 左侧详情 div  */

  .Left_detail_div {
    height: 100%;
  }

  /* 左侧详情 p标签  */

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

  /* 左侧详情 content div 内容  */

  .Left_right_BigImg {
    background: white;
    height: calc( 100% - 48px);
    overflow: auto;
  }

  /* 右侧tab切换头外的ul  */

  .Right_tab_ul_wrap {
    overflow: hidden;
    width: calc( 100% - 100px);
    margin-left: 50px;
  }

  .Right_tab_ul_wrap ul {
    width: 1061px;
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
