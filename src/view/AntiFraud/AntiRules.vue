<template>
  <div class="taskWatting main-div">
    <!-- 反欺诈规则设定 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">规则编号： </span>
          <el-input v-model="rules" placeholder="请输入规则编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="Rreset">查询</el-button>
          <el-button class="btn reset" @click="Rsearch">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        反欺诈规则设定
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column type="index" label=序号 width="50">
        </el-table-column>
        <el-table-column prop="ruleNum" label="规则编号" min-width="100">
        </el-table-column>
        <el-table-column label="规则内容" min-width="500">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top-start">
              <p>{{scope.row.ruleContent}}</p>
              <div slot="reference" class="name-wrapper noBk">
                {{ scope.row.ruleContent }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="isGenTaskTxt" label="是否生成任务" min-width="100">
        </el-table-column>
        <el-table-column prop="isDecRejectTxt" label="是否决策拒绝" min-width="100">
        </el-table-column>
        <el-table-column prop="isValidTxt" label="是否生效" min-width="100">
        </el-table-column>
        <el-table-column label="操作" width="80" fixed="right">
          <template slot-scope="scope">
            <el-button class="btn-sm edit" size="small" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑 -->
    <el-dialog title="添加反欺诈规则" :modal="false" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="ruleFormAdd">
        <el-form-item label="规则编号：" :label-width="formLabelWidth">
          <el-input readonly v-model="form.ruleNum"></el-input>
        </el-form-item>
        <el-form-item label="内容规则：" prop="caseDesc" :label-width="formLabelWidth">
          <el-input readonly v-model="form.ruleContent" type='textarea' resize="none" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="生成任务：" :label-width="formLabelWidth">
          <el-select v-model="form.isGenTask" placeholder="请选择">
            <el-option v-for="item in isGenTask" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="决策拒绝：" :label-width="formLabelWidth">
          <el-select v-model="form.isDecReject" placeholder="请选择">
            <el-option v-for="item in isDecReject" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否生效：" :label-width="formLabelWidth">
          <el-select v-model="form.isValid" placeholder="请选择">
            <el-option v-for="item in isValid" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loadsitu" @click="sure">{{adbtn}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rules: '',
        dialogFormVisible: false,
        formLabelWidth: "100px",
        adbtn: '确定',
        loadsitu: false,
        form: {
          id: '',
          ruleNum: '',
          ruleContent: '',
          isGenTask: '',
          isDecReject: '',
          isValid: '',
        },
        tableData: [],
        isGenTask: [{
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        isDecReject: [{
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        isValid: [{
          value: '0',
          label: '已失效'
        }, {
          value: '1',
          label: '已生效'
        }, {
          value: '2',
          label: '未生效'
        }],
      }
    },
    methods: {
      Rsearch() {
        this.post("/antiFraud/getAntiFraudRuleList", {
          ruleNum: this.rules
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      Rreset() {
        this.rules = '';
      },
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.form.id = row.id;
        this.form.ruleNum = row.ruleNum;
        this.form.ruleContent = row.ruleContent;
        this.form.isDecReject = row.isDecReject;
        this.form.isGenTask = row.isGenTask;
        this.form.isValid = row.isValid;
        this.loadsitu = false;
        this.adbtn = '确定';
      },

      sure() {
        this.loadsitu = true;
        this.adbtn = '保存中';
        this.dialogFormVisible = false;
        this.post("/antiFraud/updateAntiFraudRule", this.form).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            //   查询接口
            this.post("/antiFraud/getAntiFraudRuleList", {}).then(res => {
              if (res.statusCode == 200) {
                this.tableData = res.data;
              } else {
                this.$message.error(res.msg);
              }
            });
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    mounted() {
      this.post("/antiFraud/getAntiFraudRuleList", {}).then(res => {
        if (res.statusCode == 200) {
          this.tableData = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
  }

</script>
<style scoped>


</style>
