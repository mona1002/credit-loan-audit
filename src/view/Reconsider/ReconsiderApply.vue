<template>
  <div class="aAntiApplyInf">
    <!-- 复议申请  -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">复议基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">进件编号： </label>
              <span>{{this.conclu.applySubno}} </span>
            </li>
            <li>
              <label class="label_width_166">客户名称： </label>
              <span>{{this.conclu.custName}} </span>
            </li>
            <li>
              <label class="label_width_166">证件类型： </label>
              <span>{{this.conclu.certTypeTxt}} </span>
            </li>
            <li>
              <label class="label_width_166">证件号码： </label>
              <span>{{this.conclu.certCode}} </span>
            </li>
            <li>
              <label class="label_width_166">移动电话： </label>
              <span>{{this.conclu.mobile}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">原审批信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">拒贷日期： </label>
              <span>{{this.conclu.dealOperDate}} </span>
            </li>
            <li>
              <label class="label_width_166">拒贷部门： </label>
              <span>{{this.conclu.dealOrgCode}} </span>
            </li>
            <li>
              <label class="label_width_166">拒贷结论： </label>
              <span>{{this.conclu.applyConclusion}} </span>
            </li>
            <li>
              <label class="label_width_166">拒贷主原因码： </label>
              <span>{{this.conclu.mainreasonCode}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">复议申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">申请产品： </label>
              <span>{{this.conclu.appProName}} </span>
            </li>
            <li>
              <label class="label_width_166">申请期限[月]： </label>
              <span>{{this.conclu.appTerm}} </span>
            </li>
            <li>
              <label class="label_width_166">申请金额[元]： </label>
              <span>{{this.conclu.appAmt}} </span>
            </li>
            <li class="text_area_li triplet_textarea_width">
              <label class="label_width_166">复议说明： </label>
              <span class="text_area_span text_area_span_minus170">{{this.conclu.reconRemark}} </span>
            </li>
            <li class="clearFloat">
              <label class="label_width_166">复议申请人： </label>
              <span>{{this.conclu.reconOpercode}} </span>
            </li>
            <li>
              <label class="label_width_166">复议申请日期： </label>
              <span>{{this.conclu.reconDate}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3'],
        conclu: '',
        tastwaitingPass: '',
      }
    },
    mounted() {
      this.tastwaitingPass = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议
      this.post("/accepApplyReconController/getAccepApplyReconByProcessId", {
        processInstanceId: this.tastwaitingPass.processInstanceId,
      }).then(res => {
        this.conclu = res.data;
      });
    },
  }

</script>
<style scoped>
  .aAntiApplyInf {
    min-width: 788px;
    height: calc(100% - 90px);
    background: #ffffff;
  }

</style>
