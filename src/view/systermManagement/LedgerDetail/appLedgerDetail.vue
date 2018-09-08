<template>
  <!-- 申请台账详情 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <p class="PerDtl">
      <span> 借款人：{{accepCusBasicInfo.custName}}</span>
      <span> 进件编号：{{customInf.applyMainNo}}</span>
      <span> 证件号码：{{tastwaitingPass.certCode}}</span>
      <span> 移动电话：{{accepCusBasicInfo.mobile}}</span>
      <span> 进件机构：{{customInf.appOrgName}}</span>
      <span> 门店成立时间：{{customInf.appOrgRegisterDate}}</span>
      <span> 业务员入职时间：{{customInf.salPerEmployDate}}</span>
      <span>{{customInf.adminIntroduce}}</span>
    </p>
    <div class="SplitScreen_wrap content_not_split">
      <div class="right" ref="rRight">
        <div class="Right_tab_title_div">
          <span class="pre_next_btn_wrap" @click="leftMovingBtn">
            <img src="../../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
            <img src="../../../../static/images/Shaperight@1x.png">
          </span>
          <div class="Right_tab_ul_wrap">
            <ul ref="right_tab_ul" style="left:0;right:0;">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)"
                :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <div class="tab2_Content">
          <keep-alive v-if="Routes.closed">
            <capplicationInformationDetail v-if=" this.tabContent2==0" :applyId='tastwaitingPass.id' roles='applyLedger'></capplicationInformationDetail>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==1" :applyId='tastwaitingPass.id'></creditInvestigation>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==2" :applyId='tastwaitingPass.id'></AudioVisual>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AudioVisual from '../../FirstTrail/detailComponent/AudioVisual.vue'; //工作台--》 av
  import capplicationInformationDetail from "../../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息  
  import creditInvestigation from "../../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  export default {
    data() {
      return {
        loading: false,
        accepCusBasicInfo: {},
        // 进件人信息
        customInf: {}, //申请信息页local字段
        tastwaitingPass: {}, //详情列表页信息--(含)取applyId
        tabContent2: 0,
        tabActiveInd2: 0,
        items2: ["申请信息", "实地征信", "影像资料"],
        tab2Index: 0,
        Routes: this.$router.options.routes[32],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/appLedgerDetail' && this.$route.params.newOne) {
          this.Routes.closed = false;
          this.customInf = {};
          this.accepCusBasicInfo = {};
          this.mountedInf();
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 0;
        }
      }
    },
    activated() {
      this.Routes.closed = true;
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("appLedgerTW")); //申请台账id就为applyid
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
      tab(ev, ind, val) {
        this.tabContent2 = ind;
        this.tab2Index = ind;
        this.tabActiveInd2 = ind;
      }
    },
    created() {
      this.mountedInf();
    },
    components: {
      AudioVisual,
      capplicationInformationDetail, //申请信息
      creditInvestigation,
    }
  }

</script>
