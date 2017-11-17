<template>
  <div class="SplitScreen">
    <!-- 进件人详情 -->
    <p class="PerDtl">
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
      <button @mouseenter="showList" v-show="flexible" class="stretch">展开</button>
      <button @mouseleave="hid" v-show="!flexible" class="stretch">隐藏</button>
      <br>
      <!-- 左侧菜单栏 -->
      <div ref="Left_title" class="Left_ul" @mouseenter="showList" @mouseleave="hid">
        <!-- 左侧 收缩 title列表 -->
        <ul>
          <!-- tab 1 -->
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
            <AudioVisual v-if=" this.tabContent1==0"></AudioVisual>
          <workbench v-if=" this.tabContent1==1"></workbench>
           <div v-if=" this.tabContent1==3">asdfa</div>
          <div v-if=" this.tabContent1==4">asdf adf</div>
        </div>
      </div>

    </div>
    <!-- 右侧分屏部分 -->
    <div class="right" ref="rRight">
      <button @click="FullScreen" v-show="FullScreenlShow" class="stretch">全屏显示</button>
      <button @click="DblScreen" v-show="!FullScreenlShow" class="stretch">返回</button>
      <br>
      <!-- tab2 切换 -->
      <div class="Right_tab_title_div">
        <p>
          <span class="Right_tab_title" ref="tabTwo" v-for="(val,index) in items2" :key="index" :class="{tabActColor2:tab2Index==index}"
            @mousedown="flag2[index] &&  tab2($event,index,val)">
            {{val}}</span>
        </p>

        <div class="tab2_Content">
          <AudioVisual v-if=" this.tabContent2==0"></AudioVisual>
          <workbench v-if=" this.tabContent2==1"></workbench>
        </div>
      </div>


    </div>
    </div>

  </div>

</template>
<script>
  // import right from "./elementUI-右边栏";
  import AudioVisual from "./detailComponent/AudioVisual";
  import workbench from "./workbench";
  // import AudioVisual from"../view/AudioVisual"
  export default {
    data() {
      return {
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
        tab1Index: 0,  
        tab2Index: 0, 
        flag1: [true, true, true, true, true, true, true, true, true, true, true], //  ---------------------------------------------------- tab1用
        flag2: [true, true, true, true, true, true, true, true, true, true], //  ---------------------------------------------------- tab2用        
      }
    },
    methods: {
      handleClick(tab, event) { 

      },
      showList() {
        console.log("show")
        this.$refs.Left_title.style.left = "0";
        this.flexible = false;
      },
      hid() {
        console.log("hid")
        this.$refs.Left_title.style.left = "-200px";
        this.flexible = true;
      },
      FullScreen() {
        this.FullScreenlShow = false;
        this.$refs.rLeft.style.left = "-50%";
        this.$refs.rRight.style.left = "0";
        this.$refs.rRight.style.width = "100%";
        console.log(this.$refs.rRight.style.width)
      },
      DblScreen() {
        this.FullScreenlShow = true;
        this.$refs.rLeft.style.left = "0";
        this.$refs.rRight.style.left = "50%";
        this.$refs.rRight.style.width = "50%";
      },
      tab2(ev, ind, val) {
        console.log("tab2" + "---" + ind + "---" + val);
        this.tabContent2 = ind;
        this.tab2Index = ind;
        this.tabActiveInd2 = ind;
        console.log(this.$refs.tabOne[this.tab1Index]);
        for (var i = 0; i < this.$refs.tabOne.length; i++) {
          this.$refs.tabOne[i].style.color = "black";
          this.$refs.tabOne[i].style.background = "white";
          this.flag1[i] = true;
        }
        this.$refs.tabOne[this.tabActiveInd1].style.color = "blue";
        this.$refs.tabOne[this.tabActiveInd1].style.background = "yellow";   
        if (ind != 0) { 
          console.log("wo bu deng yu 00000000000000--------tab2")
          this.$refs.tabOne[ind].style.color = "silver"; 
          this.flag1[ind] = false; 
        }
      },
      tab1(ev, ind, val) { 
        console.log("tab1" + "---" + ind + "---" + val);
        this.title = val;
        this.tabContent1 = ind;
        this.tab1Index = ind; 
        this.tabActiveInd1 = ind; 
        for (var i = 0; i < this.$refs.tabTwo.length; i++) {
          this.$refs.tabTwo[i].style.color = "black";
          this.$refs.tabTwo[i].style.background = "green";
          this.flag2[i] = true;
        }
        this.$refs.tabTwo[this.tabActiveInd2].style.color = "red"; 
        this.$refs.tabTwo[this.tabActiveInd2].style.background = "yellowgreen"; 
        if (ind != 0) { 
          console.log("wo bu deng yu 00000000000000-------tab1")
          this.$refs.tabTwo[ind].style.color = "silver"; 
          this.flag2[ind] = false; 
        }
      },
    },
    mounted() {
      this.title = "影音资料";
    },
    components: {
      workbench,
      AudioVisual,
    }
  }

</script>
<style scoped>
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
  }

  .PerInf {
    margin: 0 10px;
  }
  /* 切换按钮 */

  .stretch {
    position: absolute;
    left: 5px;
    top: 2px;
  }
  /* 左右分屏 */
.SplitScreen_wrap{
    position: relative;
}
  #div1 {
    width: 200px;
    height: 200px;
    background: red;
    position: absolute;
  }

  .left,
  .right {
    width: 50%;
    background: pink;
    height: 100vh;
    border: 1px solid black;
    /* float: left; */
    position: absolute;
    /* left:0; */
  }
  /* 左屏 */

  .left {
    left: 0;
    /* top:0; */
  }

  .Left_right_Title {
    background: silver;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .Left_ul {
    /* float:left; */
    width: 100px;
    background: white;
    position: absolute;
    /* left:-200px;     */
    left: 0;
    z-index: 21;
    /* display:none; */
  }
  /* .Left_detail_div{
    float:left;
    background:red;
    height:400px;
  } */

  .Left_right_BigImg {
    background: red;
    height: 100px;
  }

  .Left_ul ul li {
    padding: 5px;
  }
  /* 右屏 */

  .right {
    left: 50%;
  }

  .Right_tab_title_div {
    height: 40px;
    line-height: 40px;
    background: green;
    /* 不换行 */
    white-space: nowrap;
  }

  .Right_tab_title_div ul {
    white-space: nowrap;
  }

  .Right_tab_title {
    float: left;
    padding: 0 10px;
    white-space: nowrap;
  }

  .tab2_Content {
    clear: both;
  }

</style>
