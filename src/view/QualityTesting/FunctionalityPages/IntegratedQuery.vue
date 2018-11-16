<template>
  <div class="taskWatting main-div">
    <!-- 质检  综合查询 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model.trim="params.applySubno" @keyup.enter.native='Rsearch' placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.custName" @keyup.enter.native='Rsearch' placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.certCode" @keyup.enter.native='Rsearch' placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">手机号码：</span>
          <el-input v-model.trim="params.mobile" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">单位电话：</span>
          <el-input v-model.trim="params.workTel" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">单位名称：</span>
          <el-input v-model.trim="params.hirecomName" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">联系人号码：</span>
          <el-input v-model.trim="params.telNum" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" :loading='loading' @click="Rsearch">查询</el-button>
          <el-button class="btn reset" @click="Rreset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        综合查询
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='RiskControl'>
          <i class="el-icon brokenLineIcon"></i>
          <span class="el-icon-text">大数据风控</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @current-change="selectRow"
        @row-dblclick="handleCurrentChange" border>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubno" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
        </el-table-column>
        <el-table-column label="证件号码" align='center' min-width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.certCode |cerCodeStar }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号码" align='center' min-width="140">
          <template slot-scope="scope">
            <span>{{ scope.row.mobile |MobileStar }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="hirecomName" label="单位名称" align='center' min-width="150">
        </el-table-column>
        <el-table-column prop="workTel" label="单位电话" align='center' min-width="150">
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期" align='center' min-width="150">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="operOrgName" label="进件机构" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="审批状态" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="reconStateTxt" label="复议状态" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="fraudStateTxt" label="反欺诈状态" align='center' min-width="100">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // query: {
        //   id: '',
        //   applySubNo: ''
        // },
        judge: {
          flag: '18' //综合查询
        },
        userInf: null,
        tableData: [],
        currentRow: null,
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        loading: false,
        params: {
          applySubno: '',
          custName: '',
          certCode: '',
          mobile: '',
          workTel: '',
          hirecomName: '',
          telNum: ''
        },
      }
    },
    watch: {
      "$route"(to, from) {
        if (to.path == '/IntegratedQuery') {
          this.loading = false;
        }
      }
    },
    methods: {
      selectRow(val) {
        this.currentRow = val;
      },
      handleCurrentChange(val) {
        let query={};
        query.applySubNo = val.applySubno;
        query = Object.assign({}, query, val)
        localStorage.setItem("Query", JSON.stringify(query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'Query'
        }));
        this.$router.push({
          name: 'MatchingInfQuery',
          params: {
            newOne: true,
          }
        });
      },
      Rreset() {
        this.params.applySubno = '';
        this.params.custName = '';
        this.params.certCode = '';
        this.params.mobile = '';
         this.params.workTel= '';
          this.params.hirecomName= '';
          this.params.telNum= '';
      },
      Rsearch() {
        if (this.params.applySubno != '' || this.params.custName != '' || this.params.certCode != '' || this.params.mobile !=
          ''||this.params.workTel != ''||this.params.hirecomName != ''||this.params.telNum != '') {
          this.loading = true;
          this.inquire(this.params);
        } else {
          this.$message.error('请输入查询条件')
        }
      },
      inquire(pam) {
        // 基础接口-综合查询
        this.post("applyInfoPool/multipleQuery", pam).then(res => {
          if (res.statusCode == 200) {
              this.loading = false;
            this.tableData = res.data;
          } else {
            this.loading = false;
              this.tableData =[];
            this.$message.error(res.msg);
          }
        })
      },
      // 大数据风控
      RiskControl() {
        if (!this.currentRow) {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
          }).then(() => {}).catch(() => {});
          return
        }
        localStorage.setItem("judge", JSON.stringify(this.judge));
        localStorage.setItem("IntegratedQuerytask", JSON.stringify(this.currentRow));
        this.$router.push({
          name: 'PneCtrl',
          params: {
            newOne: true,
          }
        });
      }
    },
  }

</script>
