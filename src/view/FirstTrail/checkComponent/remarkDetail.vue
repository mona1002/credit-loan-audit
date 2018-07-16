<template>
  <div class="remarkDetial">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">备注信息</span>
        </template>
        <div class="taskWtable">
          <el-table :data="datas" height="743" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" border>
            <!-- order两个参数，顺序和倒序: ascending, descending -->
            <el-table-column type="index" :index='1' label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="remarkTypeTxt" label="备注类型" min-width="70">
            </el-table-column>
            <el-table-column prop="remarker" label="备注人" min-width="120">
            </el-table-column>
            <el-table-column prop="remarkTime" label="备注时间" sortable min-width="120">
            </el-table-column>
            <el-table-column prop="remark" label="备注" min-width="600" show-overflow-tooltip>
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
        tableData: '',
        datas: [],
        taskInWaitting: '',
        judgeFlag: '',
      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        //一进入页面就发送请求
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.taskInWaitting = JSON.parse(localStorage.getItem("taskInWaitting")); // 初审
        } else if (this.judgeFlag.flag == '02') {
          this.taskInWaitting = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
          this.taskInWaitting = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
        } else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
          this.taskInWaitting = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员
        }
        this.request(this.taskInWaitting.applyId);
      },
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
