<template>
  <!-- 任务管理分屏 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <myHead></myHead>
    <div class="SplitScreen_content">
      <p class="PerDtl">
        <span> 借款人：{{custName}}</span>
        <span> 进件编号：{{customInf.applyMainNo}}</span>
        <span> 证件号码：{{tastwaitingPass.certCode}}</span>
        <span> 进件机构：{{customInf.appOrgName}}</span>
        <span> 门店成立时间:{{customInf.appOrgRegisterDate}}</span>
        <span> 业务员入职时间： {{customInf.salPerEmployDate}}</span>
        <span>{{customInf.adminIntroduce}}</span>
      </p>
      <div class="SplitScreen_wrap">
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
                <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)" :class="{tab2Act:tab2Index==index}">
                  {{val}}</li>
              </ul>
            </div>
          </div>
          <div class="tab2_Content">
            <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==0"></capplicationInformationDetail>
            <AnitAudioVisual v-if=" this.tabContent2==1"></AnitAudioVisual>
            <creditInvestigation v-if=" this.tabContent2==2"></creditInvestigation>
            <processTrajectory v-if=" this.tabContent2==3"></processTrajectory>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from "../../header.vue"
  import capplicationInformationDetail from "../../FirstTrail/checkComponent/applicationInformationDetail.vue"; //申请信息
  import AnitAudioVisual from '../../AntiFraud/components/AnitAudioVisual.vue'; //影响列表 --工作台--》 av-反欺诈分屏
  import creditInvestigation from "../../FirstTrail/detailComponent/creditInvestigation.vue"; //实地征信
  import processTrajectory from '../../FirstTrail/checkComponent/processTrajectory.vue' //流程轨迹
  export default {
    data() {
      return {
        custName: '',
        customInf: [],
        tastwaitingPass: [],
        tabContent2: 0,
        tabActiveInd2: 0,
        items2: ["申请信息", "影像资料", "实地征信", "流程轨迹"],
        tab2Index: 0,
        loading: false,
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/TaskManagementSplit' && this.$route.params.newOne) {
          this.mountedInf();
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 0;
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
        }
      }
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("TtaskInWaitting")); //任务管理
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.loading = false;
            this.custName = res.data.accepCusBasicInfo.custName;
            this.customInf = res.data;
          } else {
            this.$message.error(res.msg);
              this.del('信审任务管理-详情');
              window.history.go(-1);
          }
        });
      },
      tab(ev, ind, val) {
        this.tabContent2 = ind;
        this.tab2Index = ind;
        this.tabActiveInd2 = ind;
      }
    },
    mounted() {
      this.mountedInf();
    },
    components: {
      myHead,
      capplicationInformationDetail,
      AnitAudioVisual,
      creditInvestigation,
      processTrajectory
    }
  }

</script>
<style scoped>
  .SplitScreen {
    height: 100%;
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

  .SplitScreen_content {
    border: 1px solid #0077ff;
    height: calc(100% - 100px);
    overflow: auto;
    padding: 13px 9px;
  }


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

  .Left_right_BigImg {
    background: white;
    height: calc( 100% - 48px);
    overflow: auto;
  }

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


  .tab2_Content {
    height: calc( 100% - 48px);
    overflow: auto;
  }

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
