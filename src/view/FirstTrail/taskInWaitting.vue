<template>
  <div class="taskWatting main-div">
    <div class="taskWattingContain ">
      <div class="taskWinput search-div">
        <el-row class="row row1" type="flex">
          <el-col :span="6" class="search-item" :offset="0">
            <span class="keywordText">进件编号： </span>
            <el-input v-model="applySubNo" placeholder="请输入进件编号"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span class="keywordText">客户名称：</span>
            <el-input v-model="custName_la" placeholder="请输入客户名称"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span class="keywordText">证件号码：</span>
            <el-input v-model="certCode" placeholder="请输入证件号码"></el-input>
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
          信审任务列表
        </span>
      </div>
      <div class="listContainer">
        <el-table :data="datas" style="width: 100%" height="510" highlight-current-row @row-dblclick='goDetail' border>
          <el-table-column type="index" :index="1" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="taskType" label="任务类型" min-width="110">
          </el-table-column>
          <el-table-column prop="emerType" label="紧急程度" min-width="80">
            <template slot-scope="scope">
              <span style="color:#0077ff" v-if="scope.row.timeColor">{{scope.row.emerType}}</span>
              <span v-if="!scope.row.timeColor">{{scope.row.emerType}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" min-width="170">
          </el-table-column>
          <el-table-column prop="appDate" label="申请日期" min-width="100">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" min-width="130">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" min-width="170">
          </el-table-column>
          <el-table-column prop="appOrgName" label="进件机构" min-width="130">
          </el-table-column>
          <el-table-column prop="proName" label="产品名称" width="100">
          </el-table-column>
          <el-table-column prop="activationTime" label="进入本环节时间" min-width="170">
          </el-table-column>
          <el-table-column prop="approveTimeLong" label="进入本环节时长（小时）" min-width="180">
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
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/taskInWaitting') {
          this.mountedInf();
        }
      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        //一进入页面就发送请求			
        this.queryParam.processTemplateId = JSON.parse(localStorage.getItem('workbenchPass')).processTemplateId;
        this.queryParam.taskNodeName = JSON.parse(localStorage.getItem('workbenchPass')).taskNodeName;
        this.queryParam.taskStatus = JSON.parse(localStorage.getItem('workbenchPass')).taskStatus;
        // 登录 单独存  userCode  orgCode 
        this.queryParam.userCode = JSON.parse(localStorage.getItem('userInf')).userCode;
        this.queryParam.orgCode = JSON.parse(localStorage.getItem('userInf')).orgCode;
        this.request(this.queryParam);
        localStorage.removeItem("house");
        localStorage.removeItem("car");
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
              if (this.datas[i].emerType == '00') { //00
                this.datas[i].emerType = "普通";
              } else if (this.datas[i].emerType == '01') {
                this.datas[i].emerType = "免费加急";
              } else if (this.datas[i].emerType == '02') {
                this.datas[i].emerType = "收费加急";
              };
              if (this.datas[i].approveTimeLong * 1 >= 48) {
                this.datas[i].timeColor = true;
              } else if (this.datas[i].approveTimeLong * 1 < 48) {
                this.datas[i].timeColor = false;
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
        this.$router.push({
          name: 'SplitScreen',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("taskInWaitting", JSON.stringify(row));
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