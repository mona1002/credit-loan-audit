<template>
  <div class="taskWatting main-div">
    <!-- 复议已办任务 -->
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
          <span class="keywordText">证件号码：</span>
          <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-autocomplete popper-class="my-autocomplete" v-model="proCode" :debounce='0' :fetch-suggestions="querySearch"
            placeholder="请输入内容" @select="handleSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
            <template slot-scope="{ item }">
              <span style="float: left; width:66px">{{ item.proName }}</span>
              <span style="float: left;color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.proCode }}</span>
            </template>
          </el-autocomplete>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">紧急程度： </span>
          <el-select v-model="params.emerType" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">申请日期：</span>
          <el-date-picker v-model="applyData" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">本环节处理时间：</span>
          <el-date-picker v-model="dealDate" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
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
        复议已办任务列表
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑 -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
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
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20,50]"
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
        proCode: "",
        selectedProName: "",
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
        production: [],
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
      querySearch(queryString, cb) {
        var restaurants = this.production;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.proName.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
        };
      },
      handleSelect(item) {
        this.proCode = this.selectedProName = item.proName;
        this.params.proCode = item.id;
      },
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
        this.params.certCode = '';
        this.params.proCode = '';
        this.params.emerType = '';
        this.params.appDate_ge = '';
        this.params.appDate_le = '';
        this.params.completeTime_ge = '';
        this.params.completeTime_le = '';
        this.proCode = '';
        this.selectedProName = '';
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
        this.proCode != this.selectedProName ? (this.proCode = this.selectedProName = this.params.proCode = "") : "";
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
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            for (let k in res.data) {
              this.production.push(res.data[k])
            }
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
  }

</script>
