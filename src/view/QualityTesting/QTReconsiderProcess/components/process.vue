<template>
  <!-- 流程轨迹- 质检查查信审流程轨迹 -->
  <div>
    <el-table :data="tableData" border style="width: 100%" highlight-current-row>
      <el-table-column type="index" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="taskNodeNameTxt" label="任务节点" width="120">
      </el-table-column>
      <el-table-column prop="taskTypeTxt" label="任务类型" width="120">
      </el-table-column>
      <el-table-column prop="activationTime" label="进入本环节时间" width="180">
      </el-table-column>
      <el-table-column prop="taskStatusTxt" label="任务状态" width="100">
      </el-table-column>
      <el-table-column prop="operatorCode" label="处理人" width="120">
      </el-table-column>
      <el-table-column prop="completeTime" label="处理时间" width="180">
      </el-table-column>
      <el-table-column prop="approvalOpinionTxt" label="处理结论" width="120">
      </el-table-column>
      <el-table-column prop="opinionExplain" label="意见说明" min-width="325" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import baseurlBPM from '../../../../util/constant';
  export default {
    data() {
      return {
        tableData: []
      }
    },
    props: {
      applyId: {
        default: '',
        required: true
      }
    },
    methods: {
      mountedInf() {
        this.get('/insConclusion/getInsProcessTraceList', {
            applyId: this.applyId
          })
          .then(res => {
            if(res.statusCode==200){
               this.tableData = res.data.taskDetailList;
            }else{
              this.tableData=[];
              this._error(res.msg)
            }
          })
      }
    },
    mounted() {
      this.mountedInf();
    }
  }

</script>
