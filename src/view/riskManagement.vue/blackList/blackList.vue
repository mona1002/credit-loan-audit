<!--风险管理 黑名单 -->
<template>
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">黑名单类型： </span>
          <el-select v-model="params.param.blackListType" placeholder="请选择">
            <el-option v-for="item in listType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.param.blackCustName" @keyup.enter.native='Rsearch' placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.param.blackCertCode" @keyup.enter.native='Rsearch' placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">单位名称：</span>
          <el-input v-model.trim="params.param.blackCompany" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">电话：</span>
          <el-input v-model.trim="params.param.blackPhone" @keyup.enter.native='Rsearch' placeholder="请输入电话"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">进件编号：</span>
          <el-input v-model.trim="params.param.applySubNo" @keyup.enter.native='Rsearch' placeholder="请输入地址"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">加黑类型：</span>
          <el-select v-model="params.param.inReasons" placeholder="请选择">
            <el-option v-for="item in inReasons" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
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
        黑名单查看
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='Import'>
          <i class="el-icon brokenLineIcon"></i>
          <span class="el-icon-text">批量导入</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column type="index" label=序号 width="55">
        </el-table-column>
        <el-table-column prop="blackListTypeTxt" label="黑名单类型" width="100">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" width="80">
        </el-table-column>
        <el-table-column prop="blackCustName" label="客户名称" width="100">
        </el-table-column>
        <el-table-column prop="blackCertCode" label="证件号码" width="150">
        </el-table-column>
        <el-table-column prop="blackCompany" label="单位名称" width="150">
        </el-table-column>
        <el-table-column prop="blackAddress" label="地址" width="150">
        </el-table-column>
        <el-table-column prop="blackPhone" label="电话" width="105">
        </el-table-column>
        <el-table-column prop="inReasonsTxt" label="加黑类型" width="100">
        </el-table-column>
        <el-table-column prop="blackRemark" label="申请说明" width="160">
        </el-table-column>
        <el-table-column prop="appPerCode" label="申请人" width="100">
        </el-table-column>
        <el-table-column prop="appDate" label="申请时间" width="100">
        </el-table-column>
        <el-table-column prop="auditPerCode" label="审批人" width="100">
        </el-table-column>
        <el-table-column prop="auditDate" label="审批时间" width="100">
        </el-table-column>
        <el-table-column prop="auditOpinion" label="审批说明" min-width="160">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="params.pageParam.pageNum"
          :page-sizes="[10, 20,50]" :page-size="params.pageParam.pageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="totalRecord">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [],
        totalRecord: 0,
        params: {
          param: {
            blackListType: '', //	黑名单类型
            blackCustName: '', //	客户名称
            blackCertCode: '', //	证件号码
            blackCompany: '', //	单位名称
            blackPhone: '', //	电话
            applySubNo: '', //	进件编号
            inReasons: '', // 加黑类型
          },
          pageParam: {
            pageNum: 1, //	页码
            pageSize: 10, //	条数
          }
        },
        listType: [{
            value: '01',
            label: '客户'
          },
          {
            value: '02',
            label: '电话'
          },
          {
            value: '03',
            label: '地址'
          },
          {
            value: '04',
            label: '单位名称'
          }
        ],
        inReasons: [{ //加黑类型
            value: '01',
            label: '代办包装'
          },
          {
            value: '02',
            label: '组团骗贷'
          },
          {
            value: '03',
            label: '资料虚假'
          },
          {
            value: '04',
            label: '伪冒申请'
          },
          {
            value: '05',
            label: '其他欺诈'
          }
        ],
        Routes: this.$router.options.routes[51],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/blackList') {
          if (!this.Routes.closed) {
            this.params.pageParam.pageSize = 10;
            this.Rreset();
            this.Routes.closed = true;
          }
        }
      }
    },
    methods: {
      Rreset() {
        this.params.param.blackListType = ''; //	黑名单类型
        this.params.param.blackCustName = ''; //	客户名称
        this.params.param.blackCertCode = ''; //	证件号码
        this.params.param.blackCompany = ''; //	单位名称
        this.params.param.blackPhone = ''; //	电话
        this.params.param.applySubNo = ''; //	进件编号
        this.params.param.inReasons = ''; //	加黑类型
        this.params.pageParam.pageNum = 1; //	页码
        // this.params.   pageParam.pageSize=''; //	条数
        this.inquire();
      },
      Rsearch() {
        this.inquire();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.params.pageParam.pageNum = 1; //	页码
        this.params.pageParam.pageSize = val; //	条数
        this.inquire();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.params.pageParam.pageNum = val; //	页码
        this.inquire();
      },
      inquire() {
        // 基础接口-综合查询
        this.post("/blackAndGrey/blackListInfos", this.params).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data.recordList;
            this.totalRecord = res.data.totalRecord; //totalRecord
            this.params.pageParam.pageNum = res.data.pageNum; //	页码
            this.params.pageParam.pageSize = res.data.pageSize; //	条数
          } else {
            this.totalRecord = 0;
            this.params.pageParam.pageNum = 1; //	页码
            this.params.pageParam.pageSize = 10; //条数
            this.tableData = [];
            this._error(res.msg);
          }
        })
      },
    },
    mounted() {
      this.inquire();
    }
  }

</script>
