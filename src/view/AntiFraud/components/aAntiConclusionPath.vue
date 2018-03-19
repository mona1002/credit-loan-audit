<template>
  <div date="aAntiConclusionPath">
    <!-- 反欺诈审批结论轨迹-->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="auditResultTxt" label="审批结果" min-width="35">
      </el-table-column>
      <el-table-column prop="mainreaName" label="主原因" min-width="35">
      </el-table-column>
      <el-table-column prop="subreaName" label="子原因" min-width="35">
      </el-table-column>
      <el-table-column prop="riskSection" label="风险项" min-width="35">
      </el-table-column>
      <el-table-column prop="auditDesc" label="审批描述" >
      </el-table-column>
      <el-table-column prop="auditTime" label="审批时间" min-width="35" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tastwaitingPass: '',
        tableData: []
      }
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '03') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈专员-匹配查看
      } else if (this.judgeFlag.flag == '04') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")); //反欺诈主管-匹配查看
      }
      this.post("/fraudAuditOpinion/getApproveConclusionTrack", {
        appinfoId: this.tastwaitingPass.businessId,
      }).then(res => {
        if (res.statusCode == 200) {
          this.tableData = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }

</script>
<style scoped>


</style>
