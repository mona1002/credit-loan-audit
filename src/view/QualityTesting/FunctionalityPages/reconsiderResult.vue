<template>
  <!-- 复议结果查询功能==产品接口调信审审批的16. -->
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="params.dataParam.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model="params.dataParam.custName" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-select v-model="params.dataParam.proCode" placeholder="请选择">
            <el-option v-for="item in ProductName" :key="item.proCode" :label="item.proName" :value="item.proCode">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">质检状态：</span>
          <el-select v-model="params.dataParam.checkState" placeholder="请选择">
            <el-option v-for="item in QTSituation" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">初审人员：</span>
          <el-input v-model="params.dataParam.auditNamec" placeholder="请输入初审人员"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">终审日期：</span>
          <el-date-picker v-model="params.dataParam.auditDatez" type="date" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">终审人员：</span>
          <el-input v-model="params.dataParam.auditNamez" placeholder="请输入终审人员"></el-input>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">质检日期：</span>
          <el-date-picker v-model="QTtime" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
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
        复议结果查询
      </span>
    </div>

    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="auditNamec" label="初审人员" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="auditNamez" label="终审人员" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="auditDatez" label="终审日期" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="checkStateTxt" label="质检状态" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="insDate" label="质检日期" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="checkResultTxt" label="质检结果" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="errorType" label="差错类型" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="errorDescribe" label="差错描述" align='center' min-width="100">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handlePageChange" :page-sizes="[10, 20,50]"
          :current-page.sync="currentPage" :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper"
          :total="this.totalRecord">
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
        tableData: [],
        params: {
          pageParam: {
            pageNum: 1, //当前页
            pageSize: 10, //每页的显示数量
          },
          dataParam: {
            applySubNo: '',
            custName: '',
            proCode: '',
            checkState: '',
            auditNamec: '',
            auditNamez: '',
            auditDatez: '',
            insDateBegin: '',
            insDateEnd: '',
          }
        },
        QTtime: '',
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        ProductName: [], //产品名称
        QTSituation: [], //质检状态
      }
    },
    methods: {
      handleSizeChange(val) {
        this.params.pageParam.pageSize = val;
        this.inquire(this.params);
      },
      handlePageChange(val) {
        this.params.pageParam.pageNum = val;
        this.inquire(this.params);
      },
      Rreset() {
        this.params.dataParam.applySubNo = '';
        this.params.dataParam.custName = '';
        this.params.dataParam.proCode = '';
        this.params.dataParam.checkState = '';
        this.params.dataParam.auditNamec = '';
        this.params.dataParam.auditNamez = '';
        this.params.dataParam.auditDatez = '';
        this.params.dataParam.insDateBegin = '';
        this.params.dataParam.insDateEnd = '';
        this.QTtime = '';
        this.inquire(this.params);
      },
      Rsearch() {
        this.params.dataParam.insDateBegin = this.QTtime[0];
        this.params.dataParam.insDateEnd = this.QTtime[1];
        this.params.pageParam.pageNum = this.currentPage = 1;
        this.inquire(this.params);
      },
      inquire(pam) {
        // 质检-复议结果查询功能
        this.post("/insReconApply/getReviewResultQueryResponse", pam).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data.recordList;
            this.totalRecord = res.data.totalRecord; //总记录数
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      products() {
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            this.ProductName = res.data;
          }
        });
      },
      getQTState() { //获取质检枚举
        this.get("/system/getAllCheckState?" + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.QTSituation = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
    },
    mounted() {
      this.inquire(this.params);
      this.getQTState();
      this.products();
    },
  }

</script>
