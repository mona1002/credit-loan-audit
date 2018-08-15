<template>
  <!-- 借款台账详情 -->
  <div class="SplitScreen" v-loading="loading" element-loading-text='加载中，请稍后'>
    <!-- 进件人详情 -->
    <p class="PerDtl">
      <span> 借款人：{{accepCusBasicInfo.custName}}</span>
      <span> 进件编号：{{customInf.applyMainNo}}</span>
      <span> 证件号码：{{tastwaitingPass.certCode}}</span>
      <span> 移动电话：{{accepCusBasicInfo.mobile}}</span>
      <span> 进件机构：{{customInf.appOrgName}}</span>
      <span> 门店成立时间：{{customInf.appOrgRegisterDate}}</span>
      <span> 业务员入职时间： {{customInf.salPerEmployDate}}</span>
      <span>{{customInf.adminIntroduce}}</span>
    </p>
    <div class="SplitScreen_wrap content_not_split">
      <div class="right" ref="rRight">
        <!-- tab 表头 -->
        <div class="Right_tab_title_div">
          <!-- 左右滑动 图标  -->
          <span class="pre_next_btn_wrap" @click="leftMovingBtn">
            <img src="../../../../static/images/Shape@1x.png">
          </span>
          <span class="pre_next_btn_wrap" style="color:red;" @click="rightMovingBtn">
            <img src="../../../../static/images/Shaperight@1x.png">
          </span>
          <div class="Right_tab_ul_wrap">
            <ul ref="right_tab_ul" style="left:0;right:0;">
              <li class="tab2Default" ref="tabTwo" v-for="(val,index) in items2" :key="index" @mousedown="tab($event,index,val)" :class="{tab2Act:tab2Index==index}">
                {{val}}</li>
            </ul>
          </div>
        </div>
        <!-- tab 内容  AntiFirstAud-->
        <div class="tab2_Content">
          <capplicationInformationDetail ref="applicationInf" v-if=" this.tabContent2==0"></capplicationInformationDetail>
          <creditInvestigation v-if=" this.tabContent2==1" :applyId='tastwaitingPass.applyId'></creditInvestigation>
          <AudioVisual v-if=" this.tabContent2==2" :applyId='tastwaitingPass.applyId'></AudioVisual>
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
        // custName: '',
        accepCusBasicInfo: {
          mobile: '',
          custName: ''
        },
        // 进件人信息
        customInf: [], //申请信息页local字段
        tastwaitingPass: [], //详情列表页信息--(含)取applyId
        tabContent2: 0,
        tabActiveInd2: 0,
        items2: ["申请信息", "实地征信", "影像资料"],
        tab2Index: 0,
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/brrLedgerDetail' && this.$route.params.newOne) {
          this.mountedInf();
          this.tab2Index = this.tabActiveInd2 = this.tabContent2 = 0;
          this.$refs.applicationInf ? this.$refs.applicationInf.mountedInf() : '';
        }
      }
    },
    methods: {
      mountedInf() {
        this.loading = true;
        this.tastwaitingPass = JSON.parse(localStorage.getItem("brrLedgerTW"));
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          id: this.tastwaitingPass.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.loading = false;
            // res.data.accepCusBasicInfo && res.data.accepCusBasicInfo.custName ? this.custName = res.data.accepCusBasicInfo
            //   .custName : '';
            this.customInf = res.data;
            res.data.accepCusBasicInfo ? this.accepCusBasicInfo = res.data.accepCusBasicInfo : '';
          } else {
            this.$message.error(res.msg);
          }
        });
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
