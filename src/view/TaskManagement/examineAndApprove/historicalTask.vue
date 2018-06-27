<!-- 审批-历史任务 -->
<template>
  <div class="taskWatting historicalTask">
    <myHead class="top"></myHead>
    <div class="taskWattingContain">

      <div class="taskWinput">
        <el-row class="row row1" type="flex">
          <el-col :span="8" :offset="0">
            <span class="keywordText">进件编号</span>
            <el-input class="" v-model="applySubNo" placeholder="请输入进件编号"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="keywordText">客户名称</span>
            <el-input class="" v-model="custName_la" placeholder="请输入客户名称"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="keywordText">证件号码</span>
            <el-input class="" v-model="certCode" placeholder="请输入证件号码"></el-input>
          </el-col>
        </el-row>
        <el-row class="row row1" type="flex">
          <el-col :span="8" :offset="0">
            <span class="keywordText">产品名称</span>
            <el-select v-model="proCode" placeholder="请选择">
              <el-option v-for="item in productNames" :key="item.id" :label="item.proName" :value="item.proCode">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span class="keywordText">紧急程度</span>
            <el-select v-model="emerType" placeholder="请选择">
              <el-option v-for="item in UrgencyDegree" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span class="keywordText">申请日期</span>
            <el-date-picker v-model="applicationDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row class="row row1" type="flex">
          <el-col :span="8">
            <span class="keywordText">本环节处理时间</span>
            <el-date-picker v-model="processingTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
          <el-col :span="8">
            <span class="keywordText">流程结束时间</span>
            <el-date-picker v-model="ProcessEndTime " type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
          <el-col :span="8">
            <el-button class="btn reset" type="primary" @click="reset">重置</el-button>
            <el-button class="btn query" type="primary" @click="search">查询</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="taskWhead">
        <p>审批-历史任务列表</p>
      </div>
      <div class="taskWtable">
        <el-table :data="datas" style="width: 100%" height="500" @row-dblclick='goDetail' border>
          <el-table-column type="index" :index="1" label="序号" width="50">
          </el-table-column>
          <!-- <el-table-column
				      prop="taskType"
				      label="任务类型"
				      min-width="110"
				      >
				    </el-table-column> -->
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
          <el-table-column prop="appOrgCode" label="进件机构" min-width="120">
          </el-table-column>
          <el-table-column prop="proName" label="产品名称" width="120">
          </el-table-column>
          <el-table-column prop="activationTime" label="进入本环节时间" min-width="170">
          </el-table-column>
          <el-table-column prop="completeTime" label="本环节处理时间" min-width="170">
          </el-table-column>
          <el-table-column prop="processStartDate" label="流程发起时间" min-width="170">
          </el-table-column>
          <el-table-column prop="processEndDate" label="流程结束时间" min-width="170">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 50, 80, 100]"
            :page-size=setPageSize layout="total, sizes, prev, pager, next, jumper" :total="totals.totalNum">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import myHead from "../../header.vue"
  //import baseU from'../../../util/constant';
  export default {
    data() {
      return {
        activeNames: ['1'],
        totals: {},
        currentPage: 1, // 默认显示的当前页
        setPageSize: 10,
        datas: [],
        applySubNo: '', //进件编号-查询
        custName_la: '', //客户名称模糊-查询
        certCode: '', ////证件号码-查询
        proCode: '', //产品code-查询
        emerType: '', //紧急程度-查询
        /*appDate_ge:'',//申请日期[大于等于]-查询
        appDate_le:'',//申请日期[小于等于]-查询
        completeTime_ge:'',//本环节处理时间[大于等于]-查询
        completeTime_le:'', //本环节处理时间[小于等于]-查询*/
        queryParam: {
          processTemplateId: 'creditApp', //流程模板
          taskNodeName: '', //任务名称
          taskStatus: '', //任务状态(代办01、已办03、历史不用传)
          userCode: '', //用户编码
          orgCode: '', //机构编码
          pageNum: 1, //页数（第几页）
          pageSize: 10, //页面显示行数
          applySubNo: '', //进件编号
          custName_la: '', //客户名称模糊
          certCode: '', //证件号码		            
          emerType: '', //紧急程度			        
          proCode: '', //产品code			        
          appDate_ge: '', //申请日期[大于等于]			        
          appDate_le: '', //申请日期[小于等于]			        
          completeTime_ge: '', //本环节处理时间[大于等于]			        
          completeTime_le: '', //本环节处理时间[小于等于]
          processEndDate_ge: '', //流程结束时间[大于等于]
          processEndDate_le: '', //流程结束时间[小于等于]
        },
        productNames: [],
        //紧急程度
        UrgencyDegree: [{
            value: '00',
            label: '普通'
          },
          {
            value: '01',
            label: '免费加急'
          },
          {
            value: '02',
            label: '收费加急'
          }
        ],
        //申请信息 时间 数组
        applicationDate: '',
        //本环节处理 时间 数组
        processingTime: '',
        //流程结束 时间 数组
        ProcessEndTime: '',
        judge: '',
        orgId: '',
      }
    },
    components: {
      myHead
    },
    mounted() {
      //一进入页面就发送请求
      this.queryParam.userCode = JSON.parse(localStorage.getItem('userInf')).userCode;
      this.queryParam.orgCode = JSON.parse(localStorage.getItem('userInf')).orgCode;
      this.orgId = JSON.parse(localStorage.getItem('userInf')).orgId;
      //请求产品
      this.product();
      this.request(this.queryParam);
    },
    methods: {
      product() {
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            this.productNames = res.data;
          }
        });
        /*this.post(baseU.path+'/remote/product/getProductForUser',{
		           data:{
		              orgId:this.orgId,
		              validFlag:'1'
		           }
		          }).then(res => {
		          	if(res.statusCode == 200){
						this.productNames = res.data;
					}else {
			            this.$message.error(res.msg);
			          }
	            });*/
      },
      request(param) {
        this.post('/workFlowTaskQuery/getTaskHistoryList',
          param
        ).then(res => {
          if (res.statusCode == 200 && 　res.data.taskDetailList != null) {
            this.totals = res.data;
            this.datas = res.data.taskDetailList;
            for (var i = 0; i < this.datas.length; i++) {
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
        this.proCode = ''; //产品code-查询
        this.emerType = ''; //紧急程度-查询
        /*this.appDate_ge = '';//申请日期[大于等于]-查询
        this.appDate_le = '';//申请日期[小于等于]-查询
        this.completeTime_ge = '';//本环节处理时间[大于等于]-查询
        this.completeTime_le = '';//本环节处理时间[小于等于]-查询*/
        this.applicationDate = '', //申请信息 时间 数组
          this.processingTime = '', //本环节处理时间 时间 数组
          this.ProcessEndTime = '', //流程结束时间 数组
          this.queryParam.applySubNo = '';
        this.queryParam.custName_la = '';
        this.queryParam.certCode = '';
        this.queryParam.proCode = ''; //产品code-查询
        this.queryParam.emerType = ''; //紧急程度-查询
        this.queryParam.appDate_ge = ''; //申请日期[大于等于]-查询
        this.queryParam.appDate_le = ''; //申请日期[小于等于]-查询
        this.queryParam.completeTime_ge = ''; //本环节处理时间[大于等于]-查询
        this.queryParam.completeTime_le = ''; //本环节处理时间[小于等于]-查询
        this.queryParam.processEndDate_ge = ''; //流程结束时间[大于等于]-查询
        this.queryParam.processEndDate_le = ''; //流程结束时间[小于等于]-查询
        this.request(this.queryParam);
      },
      /*查询*/
      search() {
        //申请日期[大于等于]-查询
        if (this.applicationDate) {
          var appge = new Date(this.applicationDate[0]),
            appgey = appge.getFullYear(),
            appgem = appge.getMonth() + 1;
          appgem = appgem < 10 ? ('0' + appgem) : appgem;
          var appged = appge.getDate();
          appged = appged < 10 ? ('0' + appged) : appged;
          this.queryParam.appDate_ge = appgey + '-' + appgem + '-' + appged;
          //申请日期[小于等于]-查询
          var apple = new Date(this.applicationDate[1]),
            appley = apple.getFullYear(),
            applem = apple.getMonth() + 1;
          applem = applem < 10 ? ('0' + applem) : applem;
          var appled = apple.getDate();
          appled = appled < 10 ? ('0' + appled) : appled;
          this.queryParam.appDate_le = appley + '-' + applem + '-' + appled;
        } else {
          this.queryParam.appDate_ge = '';
          this.queryParam.appDate_le = '';
        };
        if (this.processingTime) {
          //本环节处理时间[大于等于]-查询
          var comge = new Date(this.processingTime[0]),
            comgey = comge.getFullYear(),
            comgem = comge.getMonth() + 1;
          comgem = comgem < 10 ? ('0' + comgem) : comgem;
          var comged = comge.getDate();
          comged = comged < 10 ? ('0' + comged) : comged;
          this.queryParam.completeTime_ge = comgey + '-' + comgem + '-' + comged;
          //本环节处理时间[小于等于]-查询
          var comle = new Date(this.processingTime[1]),
            comley = comle.getFullYear(),
            comlem = comle.getMonth() + 1;
          comlem = comlem < 10 ? ('0' + comlem) : comlem;
          var comled = comle.getDate();
          comled = comled < 10 ? ('0' + comled) : comled;
          this.queryParam.completeTime_le = comley + '-' + comlem + '-' + comled;
        } else {
          this.queryParam.completeTime_ge = '';
          this.queryParam.completeTime_le = '';
        };
        //流程结束时间
        if (this.ProcessEndTime) {
          var Proge = new Date(this.ProcessEndTime[0]),
            Progey = Proge.getFullYear(),
            Progem = Proge.getMonth() + 1;
          Progem = Progem < 10 ? ('0' + Progem) : Progem;
          var Proged = Proge.getDate();
          Proged = Proged < 10 ? ('0' + Proged) : Proged;
          this.queryParam.processEndDate_ge = Progey + '-' + Progem + '-' + Proged;
          //本环节处理时间[小于等于]-查询
          var Prole = new Date(this.ProcessEndTime[1]),
            Proley = Prole.getFullYear(),
            Prolem = Prole.getMonth() + 1;
          Prolem = Prolem < 10 ? ('0' + Prolem) : Prolem;
          var Proled = Prole.getDate();
          Proled = Proled < 10 ? ('0' + Proled) : Proled;
          this.queryParam.processEndDate_le = Proley + '-' + Prolem + '-' + Proled;
        } else {
          this.queryParam.processEndDate_ge = '';
          this.queryParam.processEndDate_le = '';
        }
        this.queryParam.applySubNo = this.applySubNo;
        this.queryParam.custName_la = this.custName_la;
        this.queryParam.certCode = this.certCode;
        this.queryParam.proCode = this.proCode; //产品code-查询
        this.queryParam.emerType = this.emerType; //紧急程度-查询
        //this.queryParam.appDate_ge = appgey+'-'+appgem+'-'+appged;//申请日期[大于等于]-查询
        //this.queryParam.appDate_le = appley+'-'+applem+'-'+appled;//申请日期[小于等于]-查询
        //this.queryParam.completeTime_ge = comgey+'-'+comgem+'-'+comged;//本环节处理时间[大于等于]-查询
        //this.queryParam.completeTime_le = comley+'-'+comlem+'-'+comled; //本环节处理时间[小于等于]-查询
        this.request(this.queryParam);
      },
      //跳转到详情页
      goDetail(row, event, column) {
        this.$router.push({
          name: 'TaskManagementSplit',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("TtaskInWaitting", JSON.stringify(row));
        this.judge = {
          flag: '08'
        };
        localStorage.setItem("judge", JSON.stringify(this.judge));
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
<style type="text/css" scoped>
  .taskWatting {
    width: 100%;
    height: 100%;
   height: calc( 100% - 45px);
    
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .taskWattingContain {
    padding: 30px 30px;
    width: 100%;
    /* height: calc( 100% - 70px); */
    overflow: hidden;
  }


  .taskWatting .row {
    margin-bottom: 20px;
  }

  .taskWatting .row1 {
    margin-top: 21px;
  }

  .taskWatting .taskWinput {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
  }

  .taskWatting .keywordText {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    width: 126px;
    height: 20px;
    margin-right: 10px;
  }

  .taskWatting .taskWinput .el-input__inner {
    border-radius: 6px;
    height: 35px;
    width: 258px;
  }


  .taskWinput .btn {
    height: 33px;
    border-radius: 8px;
    width: 79px;
    font-size: 14px;
    line-height: 33px;
    padding: 0;
    float: right;
  }

  .taskWinput .query {
    margin-left: 214px;
  }

  .taskWinput .reset {
    margin-left: 20px;
    margin-right: calc( 100% - 394px);
  }


  .taskWatting .taskWhead {
    opacity: 0.75;
    background: #ebedf8;
    border-radius: 6px;
    width: 100%;
    height: 50px;
  }

  .taskWatting .taskWhead p {
    font-size: 16px;
    color: #1f2d3d;
    padding-left: 37px;
    text-align: left;
    line-height: 50px;
  }



  .taskWatting .taskWtable {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    /* padding: 25px; */
    width: 100%;
    /* height:calc( 100% - 232px ); */
  }

  .taskWtable .el-table .cell {
    line-height: 23px;
  }

  .taskWtable .el-table {
    font-size: 13px;
  }

  .taskWtable .el-table__header-wrapper tr {
    height: 40px;
  }

  .taskWtable .el-table__body-wrapper tr {
    height: 35px;
  }

  .page {
    text-align: center;
    margin-top: 20px;
  }

</style>
