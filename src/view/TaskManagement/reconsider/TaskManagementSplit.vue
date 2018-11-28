<template>
  <!-- 任务管理分屏 -->
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
    <div class="SplitScreen_wrap content_not_split">
      <div class="right" ref="rRight">
        <div class="Right_tab_title_div">
          <span class="pre_next_btn_wrap">
            <img src="../../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;">
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
            <capplicationInformationDetail :applyId='tastwaitingPass.applyId' v-if=" this.tabContent2==0" roles='TaskManagement'></capplicationInformationDetail>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <AudioVisual v-if=" this.tabContent2==1" :applyId='tastwaitingPass.applyId'></AudioVisual>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <creditInvestigation v-if=" this.tabContent2==2" :applyId='tastwaitingPass.applyId'></creditInvestigation>
          </keep-alive>
          <processTrajectory v-if=" this.tabContent2==3"  :applyId='tastwaitingPass.applyId'></processTrajectory>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import capplicationInformationDetail from "../../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息
  import AudioVisual from '../../FirstTrail/detailComponent/AudioVisual.vue'; //影响列表 --工作台--》 av-反欺诈分屏
  import creditInvestigation from "../../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import processTrajectory from '../../FirstTrail/checkComponent/processTrajectory.vue' //流程轨迹
  export default {
    data() {
      return {
        accepCusBasicInfo: {},
        tastwaitingPass: {},
        tabContent2: 0,
        tabActiveInd2: 0,
        items2: ["申请信息", "影像资料", "实地征信", "流程轨迹"],
        tab2Index: 0,
        loading: false,
        Routes: this.$router.options.routes[27],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/TaskManagementSplit' && this.$route.params.newOne) {
          this.Routes.closed = false;
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
        this.tastwaitingPass = JSON.parse(localStorage.getItem("TtaskInWaitting")); //任务管理
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
      capplicationInformationDetail,
      AudioVisual,
      creditInvestigation,
      processTrajectory
    }
  }

</script>
