<template>
  <div class="AntiCaseNum">
    <!-- 复议已办任务 -->
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <ul>
          <li>
            <p>
              <label> 进件编号 </label>
              <!-- <el-input v-model="params.applySubNo" placeholder="请输入进件编号" @blur="num(params.applySubNo,'code')"></el-input> -->
              <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
            </p>
            <p>
              <label> 客户名称</label>
              <el-input v-model="params.custName_la" placeholder="请输入客户名称"></el-input>
            </p>
            <p>
              <label> 证件号码</label>
              <!-- <el-input v-model="params.certCode" placeholder="请输入证件号码" @blur="num(params.certCode,'ID')"></el-input> -->
              <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
            </p>
          </li>
          <li>
            <p>
              <label> 产品名称</label>

              <el-select v-model="params.proCode" placeholder="请选择">
                <el-option v-for="item in production" :key="item.proCode" :label="item.proName" :value="item.proCode">
                </el-option>
              </el-select>
            </p>
            <p>
              <label> 紧急程度</label>
              <el-select v-model="params.emerType" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
            <p>
              <label>申请日期</label>
              <el-date-picker v-model="applyData" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </p>
          </li>
          <li>
            <p>
              <label ref='dealtime'> 本环节处理时间</label>
              <el-date-picker v-model="dealDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </p>
            <p>
            </p>
            <p class="btn_wrap">
              <el-button class="btn" type="primary" style="marginLeft:228px"  @click="Rsearch">查询</el-button>
              <el-button class="btn"  type="primary"  @click="Rreset">重置</el-button>
            </p>
          </li>
        </ul>
      </div>
      <div class="title">
        <h1>复议-已办任务列表</h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" height="100%" border>
          <el-table-column type="index" align='center' label=序号 width="45">
          </el-table-column>
          <el-table-column label="紧急程度" align='center' min-width="70">
            <template slot-scope="scope">
              <span v-if="!scope.row.isEmer">{{ scope.row.emerType }}</span>
              <span class="emerColor" v-if="scope.row.isEmer">{{ scope.row.emerType }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="appDate" label="申请日期" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="appOrgCode" label="进件机构" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="proName" label="产品名称" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="activationTime" label="进入本环节时间" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="completeTime" label="本环节处理时间" align='center' min-width="180">
          </el-table-column>
        </el-table>
        <!-- 分页  -->
        <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../../header.vue';
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        userInf: null,
        params: {
          processTemplateId: 'reconsiderApp',
          taskNodeName: '',
          taskStatus: '03',
          userCode: '',
          orgCode: '',
          pageNum: '', //页数（第几页）
          pageSize: '', //页面显示行数
          applySubNo: '',
          custName_la: '',
          certCode: '',
          proCode: '',
          emerType: '',
          appDate_ge: '',
          appDate_le: '',
          completeTime_ge: '',
          completeTime_le: '',
        },
        applyData: '',
        dealDate: '',
        desc: false,
        casNumAlert: false,
        caseNumInput: '',
        dialogFormVisible: false,
        currentRow: null,
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        tableData: [],
        production: null,
        options: [{
          value: '00',
          label: '普通'
        }, {
          value: '01',
          label: '免费加急'
        }, {
          value: '02',
          label: '收费加急'
        }],
        value: ''
      }
    },
    methods: {
      DateF(val) {
        val ? val = val.getFullYear() + '-' + (val.getMonth() + 1) + '-' + val.getDate() : '';
        return val;
      },
      num(val, el) {
        switch (el) {
          case 'code':
            isNaN(val) ? this.params.applySubNo = val = '' : this.params.applySubNo = val;
            break;
          case 'ID':
            isNaN(val) ? this.params.certCode = val = '' : this.params.certCode = val;
            break;
        }
      },
      handleSizeChange(val) {
        this.params.pageSize = val;
        this.params.pageNum = 1;
        this.getInf(this.params);
      },
      handleCurrentChange(val) {
        this.params.pageNum = val;
        this.getInf(this.params);
      },
      Rreset() {
        this.params.applySubNo = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.params.proCode = '';
        this.params.emerType = '';
        this.params.appDate_ge = '';
        this.params.appDate_le = '';
        this.params.completeTime_ge = '';
        this.params.completeTime_le = '';
        this.applyData = '';
        this.dealDate = '';
            this.getInf(this.params);
      },
      Rsearch() {
        this.params.appDate_ge = this.DateF(this.applyData[0]);
        this.params.appDate_le = this.DateF(this.applyData[1]);
        this.params.completeTime_ge = this.DateF(this.dealDate[0]);
        this.params.completeTime_le = this.DateF(this.dealDate[1]);
        this.params.pageNum = this.currentPage = 1;
        this.getInf(this.params);
      },

      getInf(pam) {
        this.post("/workFlowTaskQuery/getTaskToDoList", pam).then(res => {
          if (res.statusCode == 200 && res.data.taskDetailList != null) {
            this.tableData = res.data.taskDetailList;
            this.totalRecord = res.data.totalNum; // 总数
            this.changeColor();
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getProducts() {
        this.post( "/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            this.production = res.data
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      changeColor() {
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].completeTime * 1 >= 48 ? this.tableData[i].isEmer = true : this.tableData[i].isEmer = false;
          if (this.tableData[i].emerType == '00') {
            this.tableData[i].emerType = "普通";
          } else if (this.tableData[i].emerType == '01') {
            this.tableData[i].emerType = "免费加急";
          } else if (this.tableData[i].emerType == '02') {
            this.tableData[i].emerType = "收费加急";
          };
        }
      }
    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.params.orgCode = this.userInf.orgCode;
      this.params.userCode = this.userInf.userCode;
      this.params.pageNum = this.currentPage, //页数（第几页）
        this.params.pageSize = this.pageCount, //页面显示行数
        this.getProducts();
      this.getInf(this.params);
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

  .content {
    padding: 30px 30px;
    width: 100%;
    height: calc( 100% - 70px);
  }

  .search {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    padding-bottom: 20px;
    height: auto;
  }

  .search li {
    clear: both;
    height: 55px;
  }

  .search li p {
    width: 33.3%;
    float: left;
    margin-top: 20px;
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
  }

  .noBk {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

  .icon {
    margin-right: 5px;
    vertical-align: middle;
    font-size: 30px;
  }

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px 25px 60px 25px;
    width: 100%;
    height: calc( 100% - 255px);
  }

  .paging {
    margin-top: 15px;
    text-align: center;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
