<!-- 复议申请任务列表 -->
<template>
  <div class="taskWatting RtaskWatting main-div">
    <div class="taskWattingContain">
      <div class="taskWinput  search-div">
        <el-row class="row " type="flex">
          <el-col :span="6" class="search-item" :offset="0">
            <span class="keywordText">进件编号：</span>
            <el-input class="" v-model="applySubNo" placeholder="请输入进件编号"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span class="keywordText">客户名称：</span>
            <el-input class="" v-model="custName_la" placeholder="请输入客户名称"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span class="keywordText">证件号码：</span>
            <el-input class="" v-model="certCode" placeholder="请输入证件号码"></el-input>
          </el-col>
                 <el-col :span="6" class="search-btn">
            <el-button class="btn query" type="primary" @click="search">查询</el-button>
            <el-button class="btn reset" @click="reset">重置</el-button>
          </el-col>
        </el-row>
      </div>
         <div class="title titleContainer edit-div">
        <span class="titleText">
          <i class="el-icon title-icon"></i>
          复议申请任务列表
        </span>
      </div>
      <div class="listContainer">
        <el-table :data="datas" style="width: 100%" height="510" highlight-current-row @row-dblclick='goDetail' border>
          <el-table-column type="index" :index="1" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="taskType" label="任务类型" min-width="110">
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" min-width="170">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" min-width="130">
          </el-table-column>
          <el-table-column prop="certTypeTxt" label="证件类型" min-width="100">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" min-width="170">
          </el-table-column>
          <el-table-column prop="proName" label="产品名称" width="100">
          </el-table-column>
          <el-table-column prop="activationTime" label="进入本环节时间" width="170">
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20,50]"
            :page-size='setPageSize' layout="total, sizes, prev, pager, next, jumper" :total="totals.totalNum">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1'],
        totals: {},
        currentPage: 1, // 默认显示的当前页
        datas: [],
        applySubNo: '',
        custName_la: '',
        certCode: '',
        setPageSize: 10,
        queryParam: {
          processTemplateId: '',
          taskNodeName: '',
          taskStatus: '',
          userCode: '',
          orgCode: '',
          pageNum: 1,
          pageSize: 10,
          applySubNo: '',
          custName_la: '',
          certCode: ''
        },
        judgeFlag: '',
      }
    },
    mounted() {
      this.oninner();
      localStorage.removeItem("house");
      localStorage.removeItem("car");
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/reconsiderList') {
          this.oninner();
          localStorage.removeItem("house");
          localStorage.removeItem("car");
        }
      }
    },
    methods: {
      oninner() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '05') { //复议专员
          this.queryParam.processTemplateId = JSON.parse(localStorage.getItem('ReWorkbenchPass')).processTemplateId;
          this.queryParam.taskNodeName = JSON.parse(localStorage.getItem('ReWorkbenchPass')).taskNodeName;
          this.queryParam.taskStatus = JSON.parse(localStorage.getItem('ReWorkbenchPass')).taskStatus;
        } else if (this.judgeFlag.flag == '06') { //复议经理
          this.queryParam.processTemplateId = JSON.parse(localStorage.getItem('ReManagerWorkbenchPass')).processTemplateId;
          this.queryParam.taskNodeName = JSON.parse(localStorage.getItem('ReManagerWorkbenchPass')).taskNodeName;
          this.queryParam.taskStatus = JSON.parse(localStorage.getItem('ReManagerWorkbenchPass')).taskStatus;
        };
        this.queryParam.userCode = JSON.parse(localStorage.getItem('userInf')).userCode;
        this.queryParam.orgCode = JSON.parse(localStorage.getItem('userInf')).orgCode;
        this.request(this.queryParam);
      },
      request(param) {
        this.post('/workFlowTaskQuery/getTaskToDoList',
          param
        ).then(res => {
          if (res.statusCode == 200 && 　res.data.taskDetailList != null) {
            this.totals = res.data;
            this.datas = res.data.taskDetailList;
            for (var i = 0; i < this.datas.length; i++) {
              if (this.datas[i].taskType == '00') { //00
                this.datas[i].taskType = "新任务";
              } else if (this.datas[i].taskType == '01') {
                this.datas[i].taskType = "回退任务";
              } else if (this.datas[i].taskType == '02') {
                this.datas[i].taskType = "挂起任务";
              } else if (this.datas[i].taskType == '03') {
                this.datas[i].taskType = "回退再审任务";
              };
              /*证件类型*/
              if (this.datas[i].emerType == '00') { //00
                this.datas[i].emerType = "普通";
              } else if (this.datas[i].emerType == '01') {
                this.datas[i].emerType = "免费加急";
              } else if (this.datas[i].emerType == '02') {
                this.datas[i].emerType = "收费加急";
              };
            };
          } else {
            this.datas = [];
          }

        })
      },
      /*重置*/
      reset() {
        this.applySubNo = '';
        this.custName_la = '';
        this.certCode = '';
        this.queryParam.applySubNo = '';
        this.queryParam.custName_la = '';
        this.queryParam.certCode = '';
        this.request(this.queryParam);
      },
      /*查询*/
      search() {
        this.queryParam.applySubNo = this.applySubNo;
        this.queryParam.custName_la = this.custName_la;
        this.queryParam.certCode = this.certCode;
        this.request(this.queryParam);
      },
      //跳转到详情页
      goDetail(row, event, column) {
        localStorage.setItem("RtaskInWaitting", JSON.stringify(row));
        this.$router.push({
          name: 'ReconsiderSplit',
          params: {
            newOne: true,
          }
        });
      },
      handleSizeChange(val) {
        this.queryParam.pageSize = val;
        this.queryParam.pageNum = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.request(this.queryParam);
        };
      },
      handleCurrentChange(val) {
        this.queryParam.pageNum = val;
        this.request(this.queryParam);
      },
    }
  }

</script>