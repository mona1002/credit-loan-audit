<template>
 <div class="taskWatting main-div">
    <!-- 反欺诈历史任务 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model="params.custName_la" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-select v-model="params.proCode" placeholder="请选择">
            <el-option v-for="item in production" :key="item.proCode" :label="item.proName" :value="item.proCode">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">申请日期：</span>
          <el-date-picker v-model="applyData" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item date_picker" >
          <span class="keywordText">本环节处理时间： </span>
          <el-date-picker v-model="dealDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
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
        <i class="el-icon title-icon"></i> 反欺诈-历史任务列表 </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column type="index" align='center' label=序号 width="50">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="certTypeTxt" label="证件类型" align='center' min-width="100">
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
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
          :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        userInf: null,
        params: {
          processTemplateId: 'antiFraudApp',
          taskNodeName: '',
          taskStatus: '',
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
      }
    },
    methods: {
      DateF(val) {
        val ? val = val.getFullYear() + '-' + (val.getMonth() + 1) + '-' + val.getDate() : '';
        return val;
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
        this.params.proCode = '';
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
        this.post("/workFlowTaskQuery/getTaskHistoryList", pam).then(res => {
          if (res.statusCode == 200 && res.data.taskDetailList != null) {
            this.tableData = res.data.taskDetailList;
            this.totalRecord = res.data.totalNum; // 总数
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getProducts() {
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            this.production = res.data
          } else {
            this.$message.error(res.msg);
          }
        })
      },
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
  }

</script>
