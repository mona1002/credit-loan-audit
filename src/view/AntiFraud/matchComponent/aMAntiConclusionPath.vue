<template>
  <div date="aAntiConclusionPath">
    <!-- 反欺诈审批结论轨迹=========================默认显示1-条？分页？ -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="auditResultTxt" label="审批结果"  min-width="35">
      </el-table-column>
      <el-table-column prop="mainreaName" label="主原因" min-width="35">
      </el-table-column>
      <el-table-column prop="subreaName" label="子原因" min-width="35">
      </el-table-column>
      <el-table-column prop="riskSectionTxt" label="风险项" min-width="35">
      </el-table-column>
      <el-table-column prop="auditDesc" label="审批描述" min-width="35">
      </el-table-column>
      <el-table-column prop="auditTime" label="审批时间" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        MatchInf: '',
        tastwaitingPass: '',
        tableData:[]
      }
    },
    mounted() {
      this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //反欺诈专员-匹配查看 + 主管
//需要做判读的时候打开
      // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      // if (this.judgeFlag.flag == '03') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiinternalObj")); //反欺诈专员-匹配查看
      // } else if (this.judgeFlag.flag == '04') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiManagerinternalObj")); //反欺诈主管-匹配查看
      // }
      this.post("/fraudauditopinion/getApproveConclusionTrack", {
        appinfoId: this.MatchInf.matchApplyId,
        // appinfoId: "00542",
      }).then(res => {
        this.tableData = res.data;
      });
      }
    }

</script>
<style scoped>


</style>
