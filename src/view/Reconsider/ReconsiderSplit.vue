<template>
  <!-- 复议分屏-专员、主管 -->
  <div class="SplitScreen">
    <myHead></myHead>
    <div class="SplitScreen_content">
      <!-- 进件人详情 -->
      <p class="PerDtl">
        <span> 借款人：{{custName}}</span>
        <span> 进件编号：{{customInf.applyMainNo}}</span>
        <span> 证件号码：{{tastwaitingPass.certCode}}</span>
        <span> 进件机构：{{customInf.appOrgName}}</span>
        <span> 门店成立时间：{{customInf.appOrgRegisterDate}}</span>
        <span> 业务员入职时间：{{customInf.salPerEmployDate}}</span>
        <span>{{customInf.adminIntroduce}}</span>
      </p>
      <div class="SplitScreen_wrap">
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
              <ul ref="right_tab_ul" style="left:0;right:0;">
                <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)" :class="{tab2Act:tab2Index==index}">
                  {{val}}</li>
              </ul>
            </div>
          </div>
          <!-- tab 内容 -->
          <div class="tab2_Content">
            <AnitAudioVisual v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS"></AnitAudioVisual>
            <!-- √ -->
            <cremark v-if=" this.tabContent2==1"></cremark>
            <!-- √ -->
            <InternalMatch v-if=" this.tabContent2==2"></InternalMatch>
            <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==3"></capplicationInformationDetail>
            <!-- √ -->
            <cborrowerInformation v-if=" this.tabContent2==4"></cborrowerInformation>

            <PhoneCredit v-if=" this.tabContent2==5"></PhoneCredit>
            <FMCreditForm :myWatch="watchData" v-if=" this.tabContent2==6"></FMCreditForm>
            <!-- √ 内部匹配中信审表 -->
            <creditInvestigation v-if=" this.tabContent2==7"></creditInvestigation>
            <!-- √ -->
            <!-- 实地征信 -->
            <!-- 复议申请 -->
            <ReconsiderApply v-if=" this.tabContent2==8"></ReconsiderApply>
            <!-- √ -->
            <!-- 反欺诈结论 -->
            <aAntiApplyInf v-if=" this.tabContent2==9"></aAntiApplyInf>
            <!-- √ -->
            <!-- 复议结论 -->
            <!-- <aAntiConclusionPath v-if=" this.tabContent2==10">复议结论</aAntiConclusionPath> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from "../header.vue"
  import AnitAudioVisual from '../AntiFraud/components/AnitAudioVisual.vue'; //工作台--》 av
  import cremark from '../FirstTrail/checkComponent/remarkDetail.vue' //备注信息
  // import aMAnitAudioVisual from'./matchComponent/aMAnitAudioVisual.vue';//匹配查看 --》 aV
  import capplicationInformationDetail from "../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import cborrowerInformation from "../FirstTrail/checkComponent/borrowerInformationDetail.vue"; //借款人资料
  import FMCreditForm from "../FinalTrial/FinalMatchComponent/FMCreditForm.vue"; //信审表-与内部匹配打开的是同一个页面
  import creditInvestigation from "../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import ReconsiderApply from './ReconsiderComponents/ReconsiderApply.vue' //复议申请
  import aAntiApplyInf from '../AntiFraud/components/aAntiApplyInf.vue' //反欺诈结论
  //复议结论
  // --------------------------------------------------------------------------------------------
  // 编辑（含有-未更新）
  import InternalMatch from "../FirstTrail/InternalMatch.vue";
  import PhoneCredit from "../FirstTrail/PhoneCredit.vue";

  export default {
    data() {
      return {
        custName:"",
        SplitLeft: "left",
        SplitRight: "right",
        watchData: '',
        originLeft: '',
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
        items2: ["影音资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "复议申请", "反欺诈结论", "复议结论"],
        tab2Index: 3,
        AlertSearch: "",
      }
    },
    methods: {
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
        for (var i = 0; i < this.$refs.tabOne.length; i++) {
          this.$refs.tabOne[i].className = "tab1Default";
          //   this.flag1[i] = true;
        }
        // this.$refs.tabOne[this.tabActiveInd1].className = "tab1Act";
        // if (ind != 0 && ind != 8) {
        //   this.flag1[ind] = false;
        // }
      }
    },
    mounted() {
      console.log("分屏");
            // 复议不用flag判断，列表页专员、主管存的同一个字段
        this.tastwaitingPass = JSON.parse(localStorage.getItem("RtaskInWaitting"));
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
      if (res.statusCode == 200) {
         this.custName=res.data.accepCusBasicInfo.custName;
        //     this.customInf = res.data;
      } else {
        this.$message.error(res.msg);
      }
        });
    },
    components: {
      myHead,
      AnitAudioVisual,
      cremark,
      capplicationInformationDetail,
      cborrowerInformation,
      FMCreditForm,
      creditInvestigation,
      ReconsiderApply, //复议申请
      aAntiApplyInf, //反欺诈结论
      InternalMatch,
      PhoneCredit,
    }
  }

</script>
<style scoped>
  .SplitScreen {
    height: 100%;
    /* min-width: 1366; */
  }
  /* 激活样式 流-css */

  .tab1Default {
    color: #bfcbd9;
  }

  .tab1Act {
    color: white;
  }

  .tab2Default {
    color: #bfcbd9;
  }

  .tab2Default:hover {
    cursor: pointer;
  }

  .tab2Act {
    color: white;
    border-bottom: 1px solid white;
  }

  .setGray {
    color: #bfcbd9;
  }
  /*-------------------------------- */

  .SplitScreen_content {
    border: 1px solid #0077ff;
    height: calc(100% - 70px);
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
  /* 左右分屏 */

  .SplitScreen_wrap {
    width: 100%;
    height: calc( 100% - 33px);
    min-width: 1306px;
  }

  .right {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #ffffff;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    float: left;
    position: relative;
  }
  /* 左屏 */
  /* 左侧详情 p标签   流-css */

  .right .Right_tab_title_div,
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
    width: 1570px;
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
  /* ======================================================================================================= */

  .tab2_Content {
    /*background: purple;*/
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

</style>
