<template>
  <div class="SSComp">
    <!-- 大数据风控-百融 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">输入参数</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">身份证：</label>
                <span>{{parmaAndRisk.certCode}}</span>
              </li>
              <li>
                <label class="label_width_166">手机号：</label>
                <span>{{parmaAndRisk.mobile}}</span>
              </li>
              <li>
                <label class="label_width_166">姓名：</label>
                <span>{{parmaAndRisk.custName }}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">联系人手机号：</label>
              <span>{{parmaAndRisk.linkmanMobile }}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">风险详情</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>

            <li>
              <label class="label_width_166">策略集：</label>
              <span>{{parmaAndRisk.policy_set_name }}</span>
            </li>
            <li>
              <label class="label_width_166">风险状态：</label>
              <span>{{parmaAndRisk.final_decision }}</span>
            </li>
            <li>
              <label class="label_width_166">风险系数：</label>
              <span>{{parmaAndRisk.final_score }}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">命中规则</span>
        </template>
        <div class="height_auto">
          <el-table :data="tableData" border height="100%" style="width: 100%">
            <el-table-column prop="rulercode" label="规则编号" min-width="70">
            </el-table-column>
            <el-table-column prop="name" label="规则名称" min-width="70">
            </el-table-column>
            <el-table-column prop="score" label="规则分数" min-width="100">
            </el-table-column>
            <el-table-column prop="decision" label="规则结果" min-width="100">
            </el-table-column>
            <el-table-column prop="action" label="查看规则详情" min-width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn'
  export default {
    data() {
      return {
        localInf: null,
        parmaAndRisk: {},
        activeNames: ['1', "2", "3"],
        tableData: []
      }
    },
    props: {
      applyId: {
        type: String,
        default: '',
        required: true
      }
    },
    mounted() {
      // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      // if (this.judgeFlag.flag == '01') {
      //   this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
      // } else if (this.judgeFlag.flag == '02') {
      //   this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      // } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
      //   this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
      // }  else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
      //   this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
      // } else if (this.judgeFlag.flag == '07' || this.judgeFlag.flag == '08' || this.judgeFlag.flag == '09' || this.judgeFlag
      //   .flag == '10' || this.judgeFlag.flag == '11' || this.judgeFlag.flag == '13') {
      //   this.localInf = JSON.parse(localStorage.getItem("FGQTTaskWait")) //质检 专员
      // }

      //  else if (this.judgeFlag.flag == '04') {
      //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      // }
      // else if (this.judgeFlag.flag == '08') {
      //   this.localInf = JSON.parse(localStorage.getItem("FGQTManagerTW")) //质检 主管
      // } else if (this.judgeFlag.flag == '09') {
      //   this.localInf = JSON.parse(localStorage.getItem("FGQTSelfTW")) //质检 初终审本人任务列表 
      // } else if (this.judgeFlag.flag == '10') {
      //   this.localInf = JSON.parse(localStorage.getItem("QTTrialManagerTW")) //质检 初终审主管
      // } else if (this.judgeFlag.flag == '11') {
      //   this.localInf = JSON.parse(localStorage.getItem("FGQTReManagerTW")) //质检 复议任务列表（首次） ---区域无社保公积金按钮
      // } else if (this.judgeFlag.flag == '13') {
      //   this.localInf = JSON.parse(localStorage.getItem("QTComplianceTW")) //质检 合规经理任务列表 
      // }
      console.log( this.applyId)
      this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getTdTabInfo.action', {
        //  applyId:'b14455f1-5531-4cf2-883b-f6dc0049e3bb'
        applyId: this.applyId
      }).then(res => {
        console.log(res)
        if (res.success) {
          this.parmaAndRisk = res.obj.tdResponsec;
          this.tableData = res.obj.rules.rows;
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }

</script>
<style scoped>
  .SSComp {
    overflow-x: hidden;
    height: calc(100% - 90px);
    height: 100%;
    background: #ffffff;
  }

</style>
