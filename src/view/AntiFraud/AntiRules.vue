<template>
  <div class="AntiRules">
    <!-- 反欺诈规则设定 -->
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <p>
          <label> 规则编号</label>
          <el-input v-model="rules" placeholder="请输入规则编号"></el-input>
        </p>
        <p class="btn_wrap">
          <el-button class="btn" style="marginLeft:20px" type="primary" @click="Rreset">重置</el-button>
          <el-button class="btn" type="primary" @click="Rsearch">查询</el-button>
        </p>
      </div>
      <div class="title">
        <h1>反欺诈规则设定</h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" height="100%" border>
          <el-table-column type="index" align='center' label=序号 width="50">
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
          <el-table-column prop="isGenTaskTxt" label="是否生成任务" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="isDecRejectTxt" label="是否决策拒绝" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="isValidTxt" label="是否生效" align='center' min-width="100">
          </el-table-column>
          <el-table-column label="操作" align='center'>
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
        <el-button type="primary"  :loading="loadsitu" @click="sure">{{adbtn}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import myHead from '../header';
  export default {
    data() {
      return {
        rules: '',
        dialogFormVisible: false,
        formLabelWidth: "100px",
        adbtn:'确定',
          loadsitu:false,
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
    components: {
      myHead
    }
  }

</script>
<style scoped>
  .AntiRules {
    width: 100%;
    height: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .content {
    padding: 30px 30px;
    width: 100%;
    height: calc( 100% - 70px);
  }

  .search {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    padding: 20px 0;
  }

  .btn_wrap {
    margin-top: 20px;
    height: 33px;
    width: calc( 66.6% + 394px);
  }

  .btn {
    border-radius: 8px;
    width: 79px;
    font-size: 14px;
    line-height: 33px;
    padding: 0;
    float: right;
  }

  .noBk {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rulesContent {
    display: inline-block;
    height: 60px;
    width: 496px;
    border: 1px solid #d8dce5;
    padding: 5px 10px;
    border-radius: 4px;
    overflow: auto;
    vertical-align: top;
  }

  .AntiRules label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    width: 126px;
    height: 20px;
    margin-right: 10px;
  }

  .title {
    opacity: 0.75;
    background: #ebedf8;
    border-radius: 6px;
    width: 100%;
    height: 50px;
  }

  .title h1 {
    font-size: 16px;
    color: #1f2d3d;
    padding-left: 37px;
    text-align: left;
    line-height: 50px;
  }

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px;
    width: 100%;
    height: calc( 100% - 200px);
  }

  .redact p {
    margin: 20px;
  }

  .redact label {
    width: 70px;
    margin-right: 0;
  }

</style>
