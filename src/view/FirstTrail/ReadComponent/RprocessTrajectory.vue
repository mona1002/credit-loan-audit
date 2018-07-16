<template>
  <div class="processTrajectory">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="信审流程轨迹" name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">信审流程轨迹</span>
        </template>
        <div class="containDiv">
          <el-table :data="taskDetailList" style="width: 100%" height="744" highlight-current-row border @current-change="handleCurrentChange">
            <el-table-column type="index" :index="1" label="序号" min-width="50">
            </el-table-column>
            <el-table-column label="任务节点" prop="taskNodeNameTxt" min-width="170">
            </el-table-column>
            <el-table-column prop="taskTypeTxt" label="任务类型" min-width="120">
            </el-table-column>
            <el-table-column prop="activationTime" label="进入本环节时间" min-width="160">
            </el-table-column>
            <el-table-column prop="taskStatusTxt" label="任务状态" min-width="80">
            </el-table-column>
            <el-table-column prop="operatorCode" label="处理人" min-width="120">
            </el-table-column>
            <el-table-column prop="completeTime" label="处理时间" min-width="160">
            </el-table-column>
            <el-table-column prop="approvalOpinionTxt" label="处理结论" min-width="100">
            </el-table-column>
            <el-table-column prop="opinionExplain" label="意见说明" show-overflow-tooltip min-width="170">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1'],
        applyId: '',
        taskDetailList: [],
      }
    },
    mounted() {
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag"))
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.applyId = JSON.parse(localStorage.getItem('internalObj')).matchApplyId; //匹配查看
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.applyId = JSON.parse(localStorage.getItem("Query")).matchApplyId; //初审-综合查询
      }
      this.request()
    },
    methods: {
      request() {
        this.get("/creauditInfo/getProcessTraceListByApplyId", {
          applyId: this.applyId,
        }).then(res => {
          this.taskDetailList = res.data.taskDetailList;
        })
      },
      handleCurrentChange() {

      },
    },
  }

</script>
