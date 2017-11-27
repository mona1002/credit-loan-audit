<template>
  <div class="SplitScreen">
    <myHead></myHead>
    <!-- 进件人详情 -->
    <p class="PerDtl">
      <!-- p标签高度为30px -->
      <span class="PerInf"> 借款人姓名 :akdialkdinfl</span>
      <span class="PerInf"> 进件编号 :201608040133010004</span>
      <span class="PerInf"> 证件号码 :420701197505136996</span>
      <span class="PerInf"> 进件机构编号 : 013301</span>
      <span class="PerInf"> 进件门店成立时间 : 2016-08-04</span>
      <span class="PerInf"> 直销人员入职时间 : 2016-08-04</span>
      <span class="PerInf"> 是否行政区域进件 : 是</span>
    </p>
    <div class="SplitScreen_wrap">
      <!-- 左侧分屏部分 -->
      <div class="left" ref="rLeft">
        <button @mouseenter="showList" v-show="flexible" class="stretch" style="padding:5px 10px">展开</button>
        <button @mouseleave="hid" v-show="!flexible" class="stretch" style="padding:5px 10px">隐藏</button>
        <!-- <br> -->
        <!-- 左侧菜单栏 -->
        <!-- @mouseenter="showList" @mouseleave="hid" -->
        <div ref="Left_title" class="Left_ul">
          <!-- 左侧 title列表 == 影音资料等 ==================弹出列表============ -->
          <ul>
            <li ref="tabOne" v-for="(val,index) in items1" :key="index" :class="{tabActColor1:tab1Index==index}" @mousedown="flag1[index] &&  tab1($event,index,val)">
              {{val}}</li>
          </ul>
        </div>
        <!-- 左侧详情 -->
        <!-- <div>

      </div> -->
        <div ref="Left_detail" class="Left_detail_div">
          <p class="Left_right_Title"> {{this.title}} </p>
          <div class="Left_right_BigImg ">
            <AudioVisualLeft v-if=" this.tabContent1==0" v-on:CompareShow="compBtnS"></AudioVisualLeft>
            <!-- <workbench v-if=" this.tabContent1==1"></workbench> -->
            <!-- <div v-if=" this.tabContent1==3">asdfa</div> -->
            <!-- <div v-if=" this.tabContent1==4">asdf adf</div> -->
            <!-- <div v-if=" this.tabContent1==5">asdf adf</div> -->
            <cCreditForm v-if=" this.tabContent1==6"></cCreditForm>
            <!-- <div v-if=" this.tabContent1==7">asdf adf</div> -->
            <!-- <div v-if=" this.tabContent1==8">asdf adf</div> -->
            <!-- <AudioVisual v-if=" this.tab1Index==0"></AudioVisual>
            <workbench v-if=" this.tab1Index==1"></workbench> -->
          </div>
        </div>

      </div>
      <!-- 右侧分屏部分 -->
      <div class="right" ref="rRight" >
        <button @click="FullScreen" v-show="FullScreenlShow" class="stretch">全屏显示</button>
        <button @click="DblScreen" v-show="!FullScreenlShow" class="stretch">返回</button>
        <!-- <br> -->
        <!-- tab2 切换 -->
        <!-- <el-tabs @tab-click="flag2 &&handleClick" type="border-card">
        <el-tab-pane :label="val" v-for="(val,index) in items2" :key="index">
        </el-tab-pane>
        <AudioVisual v-if=" this.tabContent2==0"></AudioVisual>
        <workbench v-if=" this.tabContent2==1"></workbench>
      </el-tabs> -->
        <!-- 右屏tab 表头 -->
        <div class="Right_tab_title_div">
          <!-- 左右滑动 图标  -->
          <i class="el-icon-d-arrow-left tab_left_arrow" @click="leftMovingBtn"></i>
          <i class="el-icon-d-arrow-right tab_right_arrow" @click="rightMovingBtn"></i>
          <!-- tab 2 -->
          <ul ref="right_tab_ul" style="left:20px">
            <li class="Right_tab_title" ref="tabTwo" v-for="(val,index) in items2" :key="index" :class="{tabActColor2:tab2Index==index}"
              @mousedown="flag2[index] &&  tab2($event,index,val)">
              {{val}}</li>
          </ul>
        </div>
        <!-- 右侧 tab 内容 -->
        <div class="tab2_Content">
          <AudioVisual v-if=" this.tabContent2==0" v-on:CompareShow="compBtnS"></AudioVisual>
          <remark v-if=" this.tabContent2==1"></remark>
          <InternalMatch v-if=" this.tabContent2==2"></InternalMatch>
          <applicationInformation v-if=" this.tabContent2==3"></applicationInformation>
          <borrowerInformation v-if=" this.tabContent2==4"></borrowerInformation>
          <PhoneCredit v-if=" this.tabContent2==5"></PhoneCredit>
          <CreditForm v-if=" this.tabContent2==6"></CreditForm>
          <creditInvestigation v-if=" this.tabContent2==7"></creditInvestigation>
          <!-- 反欺诈结论 空白 -->
          <!-- <CreditForm v-if=" this.tabContent2==8"></CreditForm> -->
          <!-- 信审审批 空白 -->
          <CreditApproval v-if=" this.tabContent2==9"></CreditApproval>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <!-- 对比弹出层   不在右侧div里面，再 wrap 里面  可以用fixed定位-->
    <div class="AudioVisual_wrap_compare" v-show="CompareAlert" v-on:CompareShow="compBtnS">
      <i class="el-icon-close" @click="closeCompareBtn"></i>
      <!-- 弹出层左侧 div -->
      <div class="AudioVisual_wrap_compare_left ">
        <div>
          <p>影像资料</p>
          <!-- h2 标题栏 -->
          <div class="AlertContent">
            <AudioVisualLeft></AudioVisualLeft>
          </div>
          
        </div>
      </div>
      <!-- 弹出层右侧 div -->
      <div class="AudioVisual_wrap_compare_right ">
        <!-- 搜索框 -->
        <h2 style="margin:5px 0;"> 客户名称：
          <el-select v-model="AlertSearch" placeholder="请选择">
            <el-option v-for="item in AlertSearchCondition" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </h2>
        <p>影响列表</p><!-- h2 标题栏 -->
        <div class="AlertContent">
          <AudioVisualLeft></AudioVisualLeft>
        </div>
      </div>
    </div>
    <!-- 对比弹出层结束 -->
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
  // import s from "./detailComponent/remark";
  // 反欺诈结论 写此处
  // 信审审批写此处
  import CreditApproval from "./CreditApproval";
  // 查询
  import cCreditForm from "./checkComponent/cCreditForm";

  export default {
    data() {
      return {
        CompareAlert: false, //对比按钮 弹出层
        title: "",
        // activeName: 'second', //---------右侧tab切换用
        isShow: false,
        FullScreenlShow: true,
        flexible: true,
        tabContent1: 0,
        tabContent2: 0, // ----------- tab1 用
        tabActiveInd1: 0, // tab1 点击时候选中的下标
        tabActiveInd2: 0,
        items1: ["影音资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "信审审批", "流程轨迹"],
        items2: ["影音资料", "备注信息", "内部匹配", "申请信息", "借款人资料", "电话征信", "信审表", "实地征信", "反欺诈结论", "信审审批"],
        // rightList: false, //右键菜单 默认不显示    ---------tab1 用
        tab1Index: 0, // tab1 激活样式的时用的下表
        tab2Index: 0, // 不是for循环，获取不到index时候的tab切换（ data部分 ）------tab 2 用
        // 不是for循环，获取不到index时候的tab切换（ data部分 ）------tab 2 用
        flag1: [true, true, true, true, true, true, true, true, true, true, true], //  ---------------------------------------------------- tab1用
        flag2: [true, true, true, true, true, true, true, true, true, true], //  ---------------------------------------------------- tab2用        

        // items: [{ // ----------- tab1 用
        //   title: "影音资料",
        // }, {
        //   title: "备注信息"
        // }, {
        //   title: "内部匹配"
        // }],
        AlertSearch: '', // 对比弹出层 客户名称：搜索框
        AlertSearchCondition: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    methods: {
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
        if (parseFloat(this.$refs.right_tab_ul.style.left) >= 20) {
          this.$refs.right_tab_ul.style.left = "20px"
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) + 20 + "px";
        }
        console.log(this.$refs.right_tab_ul.style.left)
      },
      // 右侧tab头向  向左移动  left--
      rightMovingBtn() {
        console.log("右滑动");
        console.log(this.$refs.right_tab_ul.style.left)
        if (parseFloat(this.$refs.right_tab_ul.style.left) <= 10) {
          this.$refs.right_tab_ul.style.left = "0px";
        } else {
          this.$refs.right_tab_ul.style.left = parseFloat(this.$refs.right_tab_ul.style.left) - 20 + "px";
        }
        console.log(this.$refs.right_tab_ul.style.left)
      },
      handleClick(tab, event) { //   tab2 切换 触发函数
        // console.log(tab, event);
        // console.log(event.target.innerHTML);
        // console.log(tab.index+"=========");
        console.log(this.title) //影音资料
        this.tabContent2 = tab.index;
        // tab 2 用------------------------------------------
        this.tab1Index = tab.index;
        console.log(this.tab1Index)
        //点击tab2切换让对应的tab1禁用
        console.log(this.$refs.tabOne[this.tab1Index]);
        for (var i = 0; i < this.$refs.tabOne.length; i++) {
          this.$refs.tabOne[i].style.color = "black";
          this.$refs.tabOne[i].style.background = "white";
          this.flag1[i] = true;
        }
        this.$refs.tabOne[this.tab1Index].style.color = "silver"; // click 事件不可用
        this.flag1[tab.index] = false;
        //---------- tab1禁用部分结束--------------------------
      },
      showList() {    // 左侧list 显示按钮
        console.log("show")
        this.$refs.Left_title.style.left = "0";
        this.flexible = false;
      },
      hid() {       // 左侧list 隐藏按钮
        console.log("hid")
        this.$refs.Left_title.style.left = "-200px";
        this.flexible = true;
      },
      FullScreen() {
        this.FullScreenlShow = false;
        this.$refs.rLeft.style.display = "none";
        this.$refs.rRight.style.width = "100%";
        // console.log(this.$refs.rRight.style.width)
      },
      DblScreen() {
        this.FullScreenlShow = true;
        this.$refs.rLeft.style.display = "block";
        this.$refs.rRight.style.width = "50%";
      },
      tab2(ev, ind, val) {
        console.log("tab2" + "---" + ind + "---" + val);
        // var ev = ev || window.event;
        this.tabContent2 = ind;
        this.tab2Index = ind; //只有tab1 换成active激活样式时用了
        this.tabActiveInd2 = ind;
        //点击tab2切换让对应的tab1样式重新复制一遍正常显示
        console.log(this.$refs.tabOne[this.tab1Index]);
        for (var i = 0; i < this.$refs.tabOne.length; i++) {
          this.$refs.tabOne[i].style.color = "black";
          this.$refs.tabOne[i].style.background = "white";
          this.flag1[i] = true;
        }
        this.$refs.tabOne[this.tabActiveInd1].style.color = "blue"; // tab1 之前激活样式赋值回去   
        this.$refs.tabOne[this.tabActiveInd1].style.background = "yellow"; // tab1 之前激活样式赋值回去   
        if (ind != 0) { // 点击影音资料的时候，两边不置灰，影音资料部分可点击
          console.log("wo bu deng yu 00000000000000--------tab2")
          this.$refs.tabOne[ind].style.color = "silver"; // tab1 对应css 样式标灰
          this.flag1[ind] = false; // tab1 对应click 事件不可用
        }
      },
      tab1(ev, ind, val) { //   tab1 ------------------mousedown 事件
        // var ev = ev || window.event;
        console.log("tab1" + "---" + ind + "---" + val);
        this.title = val;
        this.tabContent1 = ind;
        this.tab1Index = ind; // tab点击 激活active点击样式
        this.tabActiveInd1 = ind; //将当前点击显示的下标，赋值给需要设置激活样式 li 的下标-----作用：tab2点击的时候，可以赋值tab1激活时候的样式
        for (var i = 0; i < this.$refs.tabTwo.length; i++) {
          this.$refs.tabTwo[i].style.color = "black";
          this.$refs.tabTwo[i].style.background = "silver";
          this.flag2[i] = true;
        }
        this.$refs.tabTwo[this.tabActiveInd2].style.color = "red"; // tab2 之前激活样式赋值回去 
        this.$refs.tabTwo[this.tabActiveInd2].style.background = "yellowgreen"; // tab2 之前激活样式赋值回去  
        if (ind != 0) { // 点击影音资料的时候，两边不置灰，影音资料部分可点击
          console.log("wo bu deng yu 00000000000000-------tab1")
          this.$refs.tabTwo[ind].style.color = "#eee"; // tab2 对应css 样式标灰
          this.flag2[ind] = false; // tab2 对应click 事件不可用
        }
        // 鼠标点击时  判断点击按钮  ==0 的时候 触发click事件  ， ==2的时候   触发右击事件
        //  tab1 ----------------mousedown >> click事件   切换tab   （等同于上面show(index)函数）

        // this.tabContent2 = ind;

        //   // this.tab1Index=ind;
        //             //点击tab1切换让对应的tab1禁用
        // console.log(this.$refs.tabTwo.children);
        // for(var i=0;i<this.$refs.tabTwo.children.length;i++){
        //   console.log("进循环")
        //     this.$refs.tabTwo.children[i].style.color="black";
        //     this.flag2[i]=true;            
        // }
        // this.$refs.tabTwo.children[ind].style.color="silver";  // click 事件不可用
        //     this.flag2[ind]=false;
        //---------- tab2禁用部分结束--------------------------

      },
    },
    mounted() {
      this.title = "影音资料";
      // console.log(this.$route.query.row.id) //接参数
    },
    components: {
      myHead,
      // 编辑
      AudioVisual,
      remark,
      InternalMatch,
      applicationInformation,
      borrowerInformation,
      PhoneCredit,
      CreditForm,
      creditInvestigation,
      // 信审审批
      CreditApproval,
      // 查询
      cCreditForm,
      AudioVisualLeft,
    }
  }

</script>
<style scoped>
  .SplitScreen {
    height: 100%;
  }
  /* 公共 */

  .tabActColor1 {
    color: blue;
    background: yellow;
  }

  .tabActColor2 {
    color: red;
    background: yellowgreen;
  }

  .active {
    color: blue;
    background: silver;
  }
  /* 借款人详情 */

  .PerDtl {
    color: blue;
    background: silver;
    height: 30px;
    line-height: 30px;
  }

  .PerInf {
    margin: 0 10px;
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
    /* position: relative; */
    width: 100%;
    height: calc( 100% - 100px);
    /*background: red;*/
  }
  /*   流  */

  .left,
  .right {
    width: 50%;
    /* height: calc( 100% - 100px); */
    height: 100%;
    overflow: auto;
    border: 1px solid black;
    float: left;
    /*background: blue;*/
    position: relative;
  }
  /* 左屏 */
  /* 左侧列表  影音资料等 ul 外包   流 */

  .left .Left_ul {
    position: absolute;
    left: 0;
    top: 40px;
    width: 100px;
    height: 90%;
    background: #846793;
    z-index: 10;
  }
  /* 左侧列表 ul 内 li   流  */

  .left .Left_ul li {
    padding: 5px;
  }

  .left .Left_ul li:hover {
    cursor: default;
  }
  /* 左侧详情 div   流 */

  .Left_detail_div {
    background: black;
    height: 100%;
  }
  /* 左侧详情 p标签   流 */

  .Left_right_Title {
    background: silver;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  /* 左侧详情 p标签下的div 内容   流 */

  .Left_right_BigImg {
    background: white;
    height: calc( 100% - 40px);
    overflow: auto;
  }
  /* 右屏 */
  /* 右屏 tab 表头字段   流 */

  .right .Right_tab_title_div {
    height: 40px;
    line-height: 40px;
    background: silver;
    /* 不换行 */
    /* white-space:nowrap; */
    /* padding: 0 20px; */
    overflow: hidden;
    position: relative;
  }
  /* 右侧tab切换头外的ul   流 */

  .Right_tab_title_div ul {
    width: 700px;
    height: 40px;
    background: white;
    position: absolute;
    left: 20px;
    /* white-space:nowrap; */
  }
  /* 右侧tab切换头    流 */

  .Right_tab_title {
    float: left;
    padding: 0 10px;
    white-space: nowrap;
  }
  /*  流 */

  .tab2_Content {
    /*background: purple;*/
    height: calc( 100% - 40px);
    overflow: auto;
  }
  /* 右侧tab切换头 左右滑动图标  流  */

  .tab_left_arrow,
  .tab_right_arrow {
    position: absolute;
    z-index: 2;
    color: red;
    font-size: 18px;
    background: orange;
    /* height: 40px; */
    height: 100%;
    line-height: 40px;
  }

  .tab_left_arrow {
    left: 0;
  }

  .tab_right_arrow {
    right: 0;
  }
  /*  对比弹出层 外包 div 流 */

  .AudioVisual_wrap_compare {
    position: absolute;
    top: 100px;
    background: black;
    width: 100%;
    height: calc( 100% - 100px);
    z-index: 12;
  }
  /* 弹出层  左右分屏  流 */

  .AudioVisual_wrap_compare_left,
  .AudioVisual_wrap_compare_right {
    float: left;
    width: 50%;
    height: 100%;
    border: 1px solid orangered;
  }
/* 弹出层 - p标签 - 标题栏  流  */
  .AudioVisual_wrap_compare_left p,
  .AudioVisual_wrap_compare_right p{
    background: gray;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  }
/* 弹出层 - p标签 - 左侧标题栏-上边距  流  */  
    .AudioVisual_wrap_compare_left p{
      margin-top: 60px;
    }
    /* 弹出层 - 两侧组件 content  流 */
    .AlertContent{
      background: red;
              height: calc( 100% - 99px);
              overflow: auto;

    }
</style>
