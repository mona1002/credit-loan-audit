<template>
  <div class="MatchingInf">
    <myHead></myHead>
    <div class="SplitScreen_content">
      <!-- 进件人详情 -->
      <p class="PerDtl">
       <span> 借款人： {{customInf.mainCustName}}</span>
        <span> 进件编号: {{customInf.applyMainNo}}</span>
        <span> 证件号码: {{customInf.certCode}}</span>
        <span> 进件机构: {{customInf.appOrgName}}</span>
        <span> 门店成立时间: {{customInf.appOrgRegisterDate}}</span>
        <span> 业务员入职时间： {{customInf.salPerEmployDate}}</span>
        <span>{{customInf.adminIntroduce}}</span>
      </p>
      <div class="SplitScreen_wrap">
        <!-- 左侧分屏部分 -->
        <div class="left" ref="rLeft">
          <!-- 左侧菜单栏 -->
          <div ref="Left_title" class="Left_ul" @mouseenter="showList" @mouseleave="hid">
            <!-- 左侧 title列表 == 影音资料等 ==================弹出列表============ -->
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
                <img src="../../../static/images/Vector%20Smart%20Object@1x.png" @click="FullScreen">
              </span>
              <span class="showAllList" @mouseenter="showList" @mouseleave="hid">
                <img src="../../../static/images/vack.png">
              </span>
            </p>
            <div class="Left_right_BigImg ">
              <AudioVisualLeft v-if="this.tabContent1==0" v-on:CompareShow="compBtnS"></AudioVisualLeft>
              <cremarkDetail v-if="this.tabContent1==1"></cremarkDetail>
              <InternalMatch v-if="this.tabContent1==2"></InternalMatch>
              <capplicationInformationDetail v-if="this.tabContent1==3"></capplicationInformationDetail>
              <cborrowerInformationDetail v-if="this.tabContent1==4"></cborrowerInformationDetail>
              <PhoneCredit v-if="this.tabContent1==5"></PhoneCredit>
              <RcCreditForm v-if="this.tabContent1==6"></RcCreditForm>
              <creditInvestigation v-if="this.tabContent1==7"></creditInvestigation>
              <cAntiConclution v-if="this.tabContent1==8"></cAntiConclution>
              <!-- 反欺诈结论 空白 -->
              <FinanceInformation v-if="this.tabContent1==9"> </FinanceInformation>
              <workbench v-if="this.tabContent1==10"></workbench>
              <!-- 流程轨迹 -->
              <ApprovalConclusion v-if="this.tabContent1==11"> </ApprovalConclusion>
            </div>
          </div>
        </div>
        <!-- 右侧分屏部分 -->
        <div class="right" ref="rRight">
          <img src="../../../static/images/Vector%20Smart%20Object@1x.png" class="icon_showHalf" v-show="showHalfBtn" @click="DblScreen">
          <!-- tab2 切换 -->
          <!-- 右屏tab 表头 -->
          <div class="Right_tab_title_div">
            <!-- 左滑动 图标  -->
            <span class="pre_next_btn_wrap" @click="leftMovingBtn">
              <img src="../../../static/images/Shape@1x.png">
            </span>
            <!--右滑动 图标  -->
            <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
              <img src="../../../static/images/Shaperight@1x.png">
            </span>
            <!-- tab 2 -=====================tab2里面的ul-->
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
            <AudioVisual v-if="this.tabContent2==0" v-on:CompareShow="compBtnS"></AudioVisual>
            <cremarkDetail v-if="this.tabContent2==1"></cremarkDetail>
            <InternalMatch v-if="this.tabContent2==2"></InternalMatch>
            <capplicationInformationDetail v-if="this.tabContent2==3"></capplicationInformationDetail>
            <cborrowerInformationDetail v-if="this.tabContent2==4"></cborrowerInformationDetail>
            <PhoneCredit v-if="this.tabContent2==5"></PhoneCredit>
            <RcCreditForm v-if="this.tabContent2==6"></RcCreditForm>
            <creditInvestigation v-if="this.tabContent2==7"></creditInvestigation>
            <!-- 反欺诈结论 空白 -->
            <cAntiConclution v-if="this.tabContent2==8"></cAntiConclution>
            <FinanceInformation v-if="this.tabContent2==9"> </FinanceInformation>
            <!-- 流程轨迹 -->
            <workbench v-if="this.tabContent2==10"></workbench>
            <ApprovalConclusion v-if="this.tabContent2==11"> </ApprovalConclusion>
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
            <AudioVisualLeft></AudioVisualLeft>
          </div>
        </div>
        <!-- 弹出层右侧 div -->
        <div class="AudioVisual_wrap_compare_right ">
          <!-- 搜索框 -->
          <p>客户名称：
            <el-input v-model="AlertSearch" placeholder="请输入内容" :disabled="true" style="display:inline;"></el-input>
            <el-button type="primary" @click="compareProps">
              <i class="el-icon-search" style="fontSize:16px"></i>
            </el-button>
          </p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <AudioVisualLeft ref="audioChild" v-on:inputInf="inputInner"></AudioVisualLeft>
          </div>
        </div>
      </div>
      <!-- 对比弹出层结束 -->
    </div>
  </div>

</template>
<script>
  import workbench from "./workbench"

  import myHead from "../header.vue"
  // 编辑
  import AudioVisual from "./ReadComponent/RAudioVisual.vue"; //-----------------
  import AudioVisualLeft from "./ReadComponent/RAudioVisualLeft.vue"; //--------------
  // 查询
  import RcCreditForm from "./ReadComponent/RcCreditForm.vue"; //信审表 ------------
  import cAntiConclution from "./checkComponent/cAntiConclution"; //反欺诈结论 
  // InternalMatch 内部匹配
  // PhoneCredit  电话征信
  import creditInvestigation from "./detailComponent/creditInvestigation"; //实地征信 
  import FinanceInformation from "./checkComponent/FinanceInformation"; // 财务信息
  import ApprovalConclusion from "./checkComponent/ApprovalConclusion"; // 审批 结论轨迹
  import cremarkDetail from "./checkComponent/remarkDetail"; //备注信息
  import cborrowerInformationDetail from "./checkComponent/borrowerInformationDetail"; //借款人资料
  import capplicationInformationDetail from "./checkComponent/applicationInformationDetail"; //申请信息
  export default {
    data() {
      return {
        // 进件人信息
        customInf: [], //列表详情页local字段
        // 对比按钮弹出层  下拉框
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        // -------------------------------结束
        showHalfBtn: false, // 显示 分屏按钮
        CompareAlert: false, //对比按钮 弹出层
        title: "",
        // activeName: 'second', //---------右侧tab切换用
        isShow: false,
        flexible: true,
        tabContent1: 0,
        tabContent2: 3, // ----------- tab1 用
        tabActiveInd1: 0, // tab1 点击时候选中的下标
        tabActiveInd2: 3, // 点击tab1 时  tab2初始下表
        items1: ["影音资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "财务信息", "流程轨迹", "审批结论轨迹"],
        items2: ["影音资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "财务信息", "流程轨迹", "审批结论轨迹"],
        tab1Index: 0, // tab1 激活样式的时用的下表
        tab2Index: 3, // 不是for循环，获取不到index时候的tab切换（ data部分 ）------tab 2 用
        // 不是for循环，获取不到index时候的tab切换（ data部分 ）------tab 2 用
        flag1: [true, true, true, false, true, true, true, true, true, true, true, true], //  ---------------------------------------------------- tab1用
        flag2: [true, true, true, true, true, true, true, true, true, true, true, true], //  ---------------------------------------------------- tab2用        
        AlertSearch: "", // 对比弹出层 客户名称：搜索框
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
      }
    },
    methods: {
      // aaa() {
      //   console.log("aaa")
      //   console.log(this.$refs.tabOne[0].className)
      //   this.$refs.tabOne[3].className = "tabAct";
      //   // this.$refs.tabOne.className="tabAct"
      // },

      // 触发子组件方法
      compareProps() {
        console.log("compareProps")
        // console.log(this.$refs.AlertSearchDiv)
        // this.AlertSearch=true;
        this.$refs.audioChild.personalNunPerson()
      },
      // 对比弹出层change事件
      // AlertSearchChange(){
      //   // console.log(this.AlertSearch)
      //   this.a();
      //   console.log(this.a())
      // },
      //子组件传回客户名称，进件编号
      inputInner(a, b) {
        console.log("inputInner")
        console.log(a + b)
        this.AlertSearch = a + " " + b;
      },
      // 对比按钮
      compBtnS() {
        console.log("我是傅祖建")
        this.CompareAlert = true;
      },
      // 弹出层关闭按钮
      closeCompareBtn() {
        this.CompareAlert = false;
      },
      // 右侧tab头向  向右移动  left++
      leftMovingBtn() {
        console.log("左滑动");
        console.log(typeof (this.$refs.right_tab_ul.style.left))
        if (parseFloat(this.$refs.right_tab_ul.style.left) >= 0) {
          this.$refs.right_tab_ul.style.left = "0"
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) + 50 + "px";
        }
        console.log(this.$refs.right_tab_ul.style.left)
      },
      // 右侧tab头向  向左移动  left--
      rightMovingBtn() {
        console.log("右滑动");
        console.log(this.$refs.right_tab_ul.style.left)
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= -650) {
          this.$refs.right_tab_ul.style.left = "-680px";
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) - 50 + "px";
        }
        console.log(this.$refs.right_tab_ul.style.left)
      },
      showList() { // 左侧list 显示按钮
        console.log("show")
        this.$refs.Left_title.style.left = "0";
        this.flexible = false;
      },
      hid() { // 左侧list 隐藏按钮
        console.log("hid")
        this.$refs.Left_title.style.left = "-200px";
        this.flexible = true;
      },
      FullScreen() {
        this.showHalfBtn = true;
        this.$refs.right_tab_ul.style.left = "0"; // 让tab 重新从影音列表开始显示
        this.$refs.rLeft.style.display = "none";
        this.$refs.rRight.style.width = "100%";
        // console.log(this.$refs.rRight.style.width)
      },
      DblScreen() {
        this.showHalfBtn = false;
        this.$refs.rLeft.style.display = "block";
        this.$refs.rRight.style.width = "50%";
      },
      tab1(ev, ind, val) { //   tab1 ------------------mousedown 事件
        console.log("tab1" + "---" + ind + "---" + val);
        this.title = val;
        this.tabContent1 = ind;
        this.tab1Index = ind; // tab点击 激活active点击样式
        this.tabActiveInd1 = ind; //将当前点击显示的下标，赋值给需要设置激活样式 li 的下标-----作用：tab2点击的时候，可以赋值tab1激活时候的样式
        //点击tab1切换让对应的tab2样式重新复制一遍正常显示
        for (var i = 0; i < this.$refs.tabTwo.length; i++) {
          this.$refs.tabTwo[i].className = "tab2Default"; // tab2 样式
          this.flag2[i] = true;
        }
        this.$refs.tabTwo[this.tabActiveInd2].className = "tab2Act"; //  tab2 之前激活样式赋值回去 
        if (ind != 0) { // 点击影音资料的时候，两边不置灰，影音资料部分可点击
          console.log("wo bu deng yu 00000000000000-------tab1")
          // this.$refs.tabTwo[ind].className= "setGray"; // tab2 对应css 样式标灰
          this.flag2[ind] = false; // tab2 对应click 事件不可用
        }
      },
      tab2(ev, ind, val) {
        console.log("tab2" + "---" + ind + "---" + val);
        this.tabContent2 = ind;
        this.tab2Index = ind; //只有tab1 换成active激活样式时用了
        this.tabActiveInd2 = ind;
        //点击tab2切换让对应的tab1样式重新复制一遍正常显示
        for (var i = 0; i < this.$refs.tabOne.length; i++) {
          this.$refs.tabOne[i].className = "tab1Default"; // tab2 样式
          this.flag1[i] = true;
        }
        this.$refs.tabOne[this.tabActiveInd1].className = "tab1Act"; //  tab1 之前激活样式赋值回去 
        if (ind != 0) { // 点击影音资料的时候，两边不置灰，影音资料部分可点击
          console.log("-----！= ---tab2")
          // this.$refs.tabOne[ind].className= "setGray";// tab1 对应css 样式标灰
          this.flag1[ind] = false; // tab1 对应click 事件不可用
        }
      }
    },
    mounted() {
      console.log("匹配查看");
      this.customInf = JSON.parse(localStorage.getItem("applicationInformationDetail"));
      this.title = "影音资料";
      console.log(this.customInf)
      // console.log(this.customInf.applyId)
      // console.log(this.$route.query.row.id) //接参数   
      //  this.post("/workFlowTaskQuery/getTaskProfile", {
      //   taskStatus: "01",
      //   userCode: this.userCode,
      //   orgCode: this.orgCode
      // }).then(res => {
      //   console.log(res.data);
      //   this.tableData = res.data;
      // });
    },
    components: {
      workbench,
      myHead,
      // 编辑
      AudioVisual,
      // 查询
      RcCreditForm,
      AudioVisualLeft,
      cremarkDetail, //
      cborrowerInformationDetail,
      capplicationInformationDetail,
      creditInvestigation, //实地征信
      cAntiConclution, //反欺诈
      FinanceInformation, //财务信息
      ApprovalConclusion, // 审批 结论轨迹
      //  流程轨迹
    }
  }

</script>
<style scoped>
  .MatchingInf {
    height: 100%;
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
    top: 18px;
    left: 18px;
    z-index: 3;
    background: #4099ff;
  }

  .icon_FullScreen {
    position: absolute;
    top: 0;
    right: 17px;
  }

  .showAllList {
    position: absolute;
    padding-top: 6px;
    width: 55px;
    height: 50px;
    left: 0;
    top: 0;
  }
  /*-------------------------------- */

  .MatchingInf .SplitScreen_content {
    border: 1px solid #0077ff;
    height: calc(100% - 70px);
    overflow: auto;
    padding: 13px 30px;
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
    margin-right: 35px;
  }

  .PerDtl span:nth-of-type(7) {
    width: 202px;
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
  }

  .MatchingInf .left,
  .MatchingInf .right,
  .MatchingInf .AudioVisual_wrap_compare_left,
  .MatchingInf .AudioVisual_wrap_compare_right {
    width: calc(50% - 2px);
    height: 100%;
    overflow: auto;
    background: #ffffff;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    float: left;
    position: relative;
  }

  .MatchingInf .left,
  .MatchingInf .AudioVisual_wrap_compare_left {
    margin-right: 2px;
  }
  /* 左屏 */
  /* 左侧列表  影音资料等 ul 外包   流 */

  .MatchingInf .left .Left_ul {
    width: 130px;
    background: rgba(31, 45, 61, 0.59);
    box-shadow: 0 5px 20px 0 #475669;
    position: fixed;
    left: -130px;
    top: 165px;
    z-index: 10;
    padding-top: 24px;
  }

  .MatchingInf .left .Left_ul li {
    font-size: 15px;
    letter-spacing: 0.1px;
    height: 21px;
    line-height: 12px;
    padding: 0 0 30px 20px;
  }

  .MatchingInf .left .Left_ul li:hover,
  .MatchingInf .Right_tab_ul_wrap ul li:hover {
    cursor: pointer;
  }
  /* 左侧详情 div   流 */

  .MatchingInf .Left_detail_div {
    height: 100%;
  }
  /* 左侧详情 p标签   流-css */

  .MatchingInf .Left_right_Title,
  .MatchingInf .right .Right_tab_title_div,
  .MatchingInf .AudioVisual_wrap_compare_left p,
  .MatchingInf .AudioVisual_wrap_compare_right p {
    font-size: 16px;
    text-align: center;
    background: rgba(0, 119, 255, 0.75);
    height: 48px;
    line-height: 48px;
    color: #f8f9fd;
    overflow: hidden;
    position: relative;
  }

  .MatchingInf .AudioVisual_wrap_compare_right p {
    text-align: right;
    padding-right: 40px;
  }
  /* 左侧详情 content div 内容   流-css */

  .MatchingInf .Left_right_BigImg {
    background: white;
    height: calc( 100% - 48px);
    overflow: auto;
  }
  /* 右屏 */
  /* 右侧tab切换头外的ul   流 */

  .MatchingInf .Right_tab_ul_wrap {
    overflow: hidden;
    width: calc( 100% - 100px);
    margin-left: 50px;
  }

  .Right_tab_ul_wrap ul {
    width: 1310px;
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

  .MatchingInf .pre_next_btn_wrap {
    position: absolute;
    z-index: 2;
    width: 25px;
  }

  .MatchingInf .pre_next_btn_wrap:nth-of-type(1) {
    left: 10px;
  }

  .MatchingInf .pre_next_btn_wrap:nth-of-type(2) {
    right: 10px;
  }
  /*  对比弹出层 外包 div 流 */

  .MatchingInf .AudioVisual_wrap_compare {
    position: absolute;
    top: 117px;
    width: calc( 100% - 60px);
    height: calc( 100% - 130px);
    z-index: 22;
    min-width: 1306px;
  }
  /* 弹出层 - 两侧组件 content  流 */

  .MatchingInf .AlertContent {
    height: calc( 100% - 48px);
    overflow: auto;
  }

</style>
