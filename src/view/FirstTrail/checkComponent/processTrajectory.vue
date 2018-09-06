<!-- 信审流程轨迹 -->
<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">信审流程轨迹</span>
        </template>
        <div class="hundred_percent">
          <el-table :data="taskDetailList" style="width: 100%" height="744" highlight-current-row border>
            <el-table-column type="index" :index="1" label="序号" width="55">
            </el-table-column>
            <el-table-column label="任务节点" prop="taskNodeNameTxt" width="170">
            </el-table-column>
            <el-table-column prop="taskTypeTxt" label="任务类型" width="120">
            </el-table-column>
            <el-table-column prop="activationTime" label="进入本环节时间" width="160">
            </el-table-column>
            <el-table-column prop="taskStatusTxt" label="任务状态" width="80">
            </el-table-column>
            <el-table-column prop="operatorCode" label="处理人" width="120">
            </el-table-column>
            <el-table-column prop="completeTime" label="处理时间" width="160">
            </el-table-column>
            <el-table-column prop="approvalOpinionTxt" label="处理结论" width="120">
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
        judgeFlag: '',
      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.applyId = JSON.parse(localStorage.getItem("taskInWaitting")).applyId; // 初审
        } else if (this.judgeFlag.flag == '02') {
          this.applyId = JSON.parse(localStorage.getItem("FtaskInWaitting")).applyId //终审
        } else if (this.judgeFlag.flag == '14') {
          this.applyId = JSON.parse(localStorage.getItem("TtaskInWaitting")).applyId //任务管理-审批任务
        } else if (this.judgeFlag.flag == '15') {
          this.applyId = JSON.parse(localStorage.getItem("TtaskInWaitting")).applyId //任务管理-质检任务
        }
        this.request()
      },
      request() {
        this.get("/creauditInfo/getProcessTraceListByApplyId", {
          applyId: this.applyId,
        }).then(res => {
          if (res.statusCode == '200') {
            this.taskDetailList = res.data.taskDetailList;
          } else {
            this.taskDetailList = [];
            this.$message.error(res.msg);
          }
        })
      },
    },
  }

</script>
