<template>
  <div class="AntiCaseNum">
    <!-- 反欺诈案件编号维护 -->
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <p>
          <label> 案件编号</label>
          <el-input v-model="caseNumInput" placeholder="请输入案件编号"></el-input>
        </p>
        <p class="btn_wrap">
          <el-button class="btn" style="marginLeft:20px" type="primary" @click="Rsearch">查询</el-button>
          <el-button class="btn" @click="Rreset">重置</el-button>
        </p>
      </div>
      <div class="title">
        <h1>反欺诈申请列表
          <span class="title_icon">
            <span @click="dialogFormVisible = true">
              <img src="../../../static/images/add.png" class="icon">添加
            </span>
            <span style="marginLeft:25px;" @click="delList">
              <img src="../../../static/images/delete.png" class="icon">删除
            </span>
          </span>
        </h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" highlight-current-row @current-change="handleCurrentChange" height="100%"
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
        <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div>
      </div>
      <!-- 添加 -->
      <div class="redact">
        <el-dialog title="添加备案号" :before-close="cal" :visible.sync="dialogFormVisible" top="25vh">
          <p style="position:relative">
            <b class="alertMsg" v-show="casNumAlert">*请输入数字</b>
            <label>
              <i>*</i> 案件编号：</label>
            <el-input v-model="form.caseNum" type="text" placeholder="请输入内容" @compositionend.native="inputCase(form.caseNum)" @keyup.native="inputCase(form.caseNum)"></el-input>
          </p>
          <p style="position:relative">
            <b class="alertMsg" v-show="desc">* 输入长度不能超过500</b>
            <label>
              <i>*</i> 案件描述：</label>
            <el-input v-model="form.caseDesc" type='textarea' resize="none" :maxlength="500" :rows="3" placeholder="请输入内容" @compositionend.native="textArea(form.caseDesc)"
              @keyup.native="textArea(form.caseDesc)"></el-input>
          </p>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cal">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../header';
  export default {
    data() {
      return {
        desc: false,
        casNumAlert: false,
        caseNumInput: '',
        dialogFormVisible: false,
        currentRow: null,
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        form: {
          caseNum: '',
          caseDesc: '',
        },
        tableData: [],
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
      sure() {
        if (this.form.caseNum == '') {
          this.$message.error('请填写案件编号');
          return
        } else if (this.form.caseDesc == '') {
          this.$message.error('请填写案件描述');
          return
        }
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
      },
      textArea(val) {
        val.length >= 500 ? this.desc = true : this.desc = false;
      },
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
    components: {
      myHead
    }
  }

</script>
<style scoped>
  .AntiCaseNum {
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
    /* height: 33px; */
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

  .alertMsg {
    position: absolute;
    top: -22px;
    font-size: 12px;
    left: 110px;
    color: #ff7676;
  }

  .AntiCaseNum label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    width: 126px;
    height: 20px;
    margin-right: 10px;
  }

  .AntiCaseNum i {
    color: #ff7676;
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
    font-style: normal;
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
    padding-right: 37px;
  }

  .title_icon {
    float: right;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-right: 29px;
  }

  .title_icon span:hover {
    cursor: pointer;
  }

  .icon {
    /* margin:20px 20px 0 0; */
    margin-right: 5px;
    vertical-align: middle;
    font-size: 30px;
    /* padding-top: 5px; */
  }

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    /* margin-bottom: 40px; */
    padding: 25px 25px 60px 25px;
    width: 100%;
    height: calc( 100% - 200px);
  }

  .redact p {
    margin: 20px;
  }

  .redact label {
    width: 90px;
    margin-right: 0;
  }

  .paging {
    margin-top: 15px;
    text-align: center;
  }

</style>
