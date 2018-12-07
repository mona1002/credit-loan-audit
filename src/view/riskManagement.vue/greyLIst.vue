<template>
  <div class="taskWatting main-div">
    <!--风险管理 灰名单 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model.trim="params.param.applySubNo" @keyup.enter.native='Rsearch' placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户编号：</span>
          <el-input v-model.trim="params.param.custNo" @keyup.enter.native='Rsearch' placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">灰名单类型：</span>
          <el-select v-model="params.param.listType" placeholder="请选择">
            <el-option v-for="item in listType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.param.custName" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.param.certCode" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">单位名称：</span>
          <el-input v-model.trim="params.param.company" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">电话：</span>
          <el-input v-model.trim="params.param.mobile" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">地址： </span>
          <el-input v-model.trim="params.param.address" @keyup.enter.native='Rsearch' placeholder="请输入手机号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
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
        灰名单客户列表
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border>
        <el-table-column type="index" label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubno" label="进件编号" width="180">
        </el-table-column>
        <el-table-column prop="custNo" label="客户编号" width="120">
        </el-table-column>
        <el-table-column prop="listTypeTxt" label="灰名单类型" width="150">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" width="150">
        </el-table-column>
        <el-table-column prop="workTel" label="证件类型" width="150">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" width="150">
        </el-table-column>
        <el-table-column prop="company" label="单位名称" width="150">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="150">
        </el-table-column>
        <el-table-column prop="mobile" label="电话" width="100">
        </el-table-column>
        <el-table-column prop="remark" label="原因说明" width="120">
        </el-table-column>
        <el-table-column prop="disposePerCode" label="经办人" width="100">
        </el-table-column>
        <el-table-column prop="disposePerDate" label="经办时间" min-width="100">
        </el-table-column>
        <!-- <el-table-column label="证件号码" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.certCode |cerCodeStar }}</span>
          </template>
        </el-table-column> -->
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
            applySubNo: '', //	进件编号
            custNo: '', //	客户编号
            listType: '', //	灰名单类型
            custName: '', //	客户名称
            certCode: '', //	证件号码
            company: '', //	单位名称
            mobile: '', //	电话
            address: '', //	地址
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
        Routes: this.$router.options.routes[50],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/greyLIst') {
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
        this.params.param.applySubNo = ''; //	进件编号
        this.params.param.custNo = ''; //	客户编号
        this.params.param.listType = ''; //	灰名单类型
        this.params.param.custName = ''; //	客户名称
        this.params.param.certCode = ''; //	证件号码
        this.params.param.company = ''; //	单位名称
        this.params.param.mobile = ''; //	电话
        this.params.param.address = ''; //	地址
        this.params.pageParam.pageNum = 1; //	页码
        // this.params.   pageParam.pageSize=''; //	条数
        this.inquire();
      },
      Rsearch() {
        this.inquire();
      },
      handleSizeChange(val) {
        this.params.pageParam.pageNum = 1; //	页码
        this.params.pageParam.pageSize = val; //	条数
        this.inquire();
      },
      handleCurrentChange(val) {
        this.params.pageParam.pageNum = val; //	页码
        this.inquire();
      },
      inquire() {
        // 基础接口-综合查询
        this.post("/blackAndGrey/greyListInfos", this.params).then(res => {
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
