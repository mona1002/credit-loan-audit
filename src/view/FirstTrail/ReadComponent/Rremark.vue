<template>
<!-- 已整合，待删除 -->
  <div class="remarkDetial">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">备注信息</span>
        </template>
        <div class="taskWtable">
          <el-table :data="datas" height="743" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" border>
            <el-table-column type="index" :index='1' label="序号" width="50">
            </el-table-column>
            <el-table-column prop="remarkTypeTxt" label="备注类型" width="90">
            </el-table-column>
            <el-table-column prop="remarker" label="备注人" width="100">
            </el-table-column>
            <el-table-column prop="remarkTime" label="备注时间" sortable width="150">
            </el-table-column>
            <el-table-column prop="riskTip" label="风险提示" width="130">
            </el-table-column>
            <el-table-column prop="remark" label="备注" min-width="90" show-overflow-tooltip>
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
        tableData: '',
        activeNames: ['1'],
        datas: [],
        taskInWaitting: '',
      }
    },
    mounted() {
      //一进入页面就发送请求
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag")) //初审-匹配查看
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.taskInWaitting = JSON.parse(localStorage.getItem('internalObj'));
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.taskInWaitting = JSON.parse(localStorage.getItem("Query")) //初审-匹配查看
      } else if (this.MatchFlag.MatchFlag == 'QT') {
        this.taskInWaitting = JSON.parse(localStorage.getItem("QT")) //质检
      }
      this.request(this.taskInWaitting.matchApplyId);
    },
    methods: {
      request(param) {
        this.post("/applyRemark/getApplyRemarkList", {
          'applyId': param
        }).then(res => {
          this.datas = res.data;
        });
      },
    }
  }

</script>
