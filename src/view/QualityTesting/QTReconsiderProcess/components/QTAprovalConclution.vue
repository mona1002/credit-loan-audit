<template>
  <div class="aAntiConclusionPath">
    <!-- 反欺诈审批结论轨迹  质检页面-->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="auditResultTxt" label="审批结果" min-width="160">
      </el-table-column>
      <el-table-column prop="mainreaName" label="主原因" min-width="140">
      </el-table-column>
      <el-table-column prop="subreaName" label="子原因" min-width="140">
      </el-table-column>
      <el-table-column prop="riskSection" label="风险项" min-width="230">
      </el-table-column>
      <el-table-column prop="auditDesc" label="审批描述" min-width="180">
      </el-table-column>
      <el-table-column prop="auditTime" label="审批时间" min-width="160">
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
      this.tastwaitingPass = JSON.parse(localStorage.getItem("QT")) //质检
      this.post("/fraudAuditOpinion/getAllApproveConclusionTrack", {
        applyId: this.tastwaitingPass.matchApplyId,
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