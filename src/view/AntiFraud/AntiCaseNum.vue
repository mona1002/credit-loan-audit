<template>
  <div class="taskWatting main-div">
    <!-- 反欺诈案件编号维护 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">案件编号： </span>
          <el-input v-model="caseNumInput" placeholder="请输入案件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="Rsearch">查询</el-button>
          <el-button class="btn reset" @click="Rreset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        反欺诈申请列表
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='dialogFormVisible = true'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">添加</span>
        </span>
        <span class="icon-item" @click='delList'>
          <i class="el-icon deleteIcon"></i>
          <span class="el-icon-text">删除</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @current-change="handleCurrentChange"
        border>
        <el-table-column type="index" align='center' label=序号 width="50">
        </el-table-column>
        <el-table-column prop="caseNum" label="案件编号" min-width="100">
        </el-table-column>
        <el-table-column prop="creatorCode" label="创建人" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="creatorDate" label="创建时间" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="creatorOrgCode" label="创建机构" align='center' min-width="100">
        </el-table-column>
        <el-table-column label="案件描述" min-width="500">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top-start">
              <p>{{scope.row.caseDesc}}</p>
              <div slot="reference" class="name-wrapper noBk">
                {{ scope.row.caseDesc }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
          :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
        </el-pagination>
      </div>
    </div>
    <!-- 添加 -->
    <el-dialog title="添加备案号" :before-close="cal" :modal="false" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rulesAdd" ref="ruleFormAdd">
        <el-form-item label="案件编号：" prop="caseNum" :label-width="formLabelWidth">
          <el-input v-model="form.caseNum" type="text" placeholder="请输入内容" @compositionend.native="inputCase(form.caseNum)" @keyup.native="inputCase(form.caseNum)"></el-input>
        </el-form-item>
        <el-form-item label="案件描述：" prop="desc" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.caseDesc" type='textarea' resize="none" :maxlength="500" :rows="3" placeholder="请输入内容" @compositionend.native="textArea(form.caseDesc)"
            @keyup.native="textArea(form.caseDesc)"></el-input> -->
          <el-input v-model="form.caseDesc" type='textarea' resize="none" :rows="3" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cal">取 消</el-button>
        <el-button type="primary" @click="sure('ruleFormAdd')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // desc: false,
        casNumAlert: false,
        caseNumInput: '',
        dialogFormVisible: false,
        currentRow: null,
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        formLabelWidth: "100px",
        form: {
          caseNum: '',
          caseDesc: '',
        },
        tableData: [],
        rulesAdd: {
          caseNum: [{
            required: true,
            message: '请输入数字',
            trigger: 'blur'
          }],
          desc: [{
              required: true,
              message: '请填写活动形式',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageCount = val;
      },
      handleCurrentChange(val) {
        if (typeof (val) === 'number') {
          this.currentPage = val;
          this.getInf(this.currentPage, this.pageCount, this.caseNumInput);
        } else {
          this.currentRow = val;
        }
      },
      Rreset() {
        this.caseNumInput = '';
      },
      Rsearch() {
        this.getInf(this.currentPage, this.pageCount, this.caseNumInput);
        this.caseNumInput = '';
      },
      delList() {
        if (this.currentRow == '' || this.currentRow == null) {
          this.$message.error('请选中一条数据');
          return
        } else {
          this.post("/caseInfoController/deleteCaseInfo", {
            id: this.currentRow.id
          }).then(res => {
            if (res.statusCode == 200) {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              // 查询信息
              this.getInf(this.currentPage, this.pageCount, this.caseNumInput);
            } else {
              this.$message.error('删除失败');
            }
          });
        }
      },
      cal() {
        this.dialogFormVisible = false;
        this.form.caseNum = '';
        this.form.caseDesc = '';
      },
      sure(formName) {
        // if (this.form.caseNum == '') {
        //   this.$message.error('请填写案件编号');
        //   return
        // } else if (this.form.caseDesc == '') {
        //   this.$message.error('请填写案件描述');
        //   return
        // }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false;
            this.post("/caseInfoController/insert", {
              "param": {
                "caseNum": this.form.caseNum,
                "caseDesc": this.form.caseDesc
              },
            }).then(res => {
              if (res.statusCode == 200) {
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.getInf(this.currentPage, this.pageCount, this.caseNumInput);
              } else {
                this.$message.error('提交失败，请稍后再试！');
              }
            });
            this.form.caseNum = '';
            this.form.caseDesc = '';
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      // textArea(val) {
      //   val.length >= 500 ? this.desc = true : this.desc = false;
      // },
      inputCase(val) {
        if (isNaN(val) || val == '') {
          this.form.caseNum = '';
          this.casNumAlert = true;
        } else {
          val = val.replace(/\s+/g, "");
          this.form.caseNum = val;
          this.casNumAlert = false;
        }
      },
      getInf(page, count, val) {
        this.post("/caseInfoController/getCaseInfoList", {
          "pageParam": {
            "pageNum": page,
            "pageSize": count
          },
          "param": {
            "caseNum": val,
          }
        }).then(res => {
          if (res.statusCode == 200) {
            this.totalRecord = res.data.totalRecord;
            this.tableData = res.data.recordList;
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    mounted() {
      this.getInf(this.currentPage, this.pageCount, this.caseNumInput);
    },
  }

</script>
<style scoped>
  /* .redact p {
    margin: 20px;
  }

  .redact label {
    width: 90px;
    margin-right: 0;
  }

  .paging {
    margin-top: 15px;
    text-align: center;
  } */

</style>
