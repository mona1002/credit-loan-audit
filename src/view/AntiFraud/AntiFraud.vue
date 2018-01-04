<!-- 反欺诈申请 - 列表页 -->
<template>
  <div class="anti-fraud">
    <el-collapse v-model="activeNames">
      <el-collapse-item style="text-align:left;" name="1">
        <template slot="title">
          <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">历史调查日志</span>
        </template>
        <div class="search-box">
          <li class="item-column3">
            <div class="left-title">进件编号：</div>
            <div class="item-content">
              <el-input v-model="applySubno"></el-input>
            </div>
          </li>
          <li class="item-column3">
            <div class="left-title">客户名称：</div>
            <div class="item-content">
              <el-input v-model="applyCustName"></el-input>
            </div>
          </li>
          <li class="item-column3">
            <div class="left-title">证件号码：</div>
            <div class="item-content">
              <el-input v-model="applyCustNo"></el-input>
            </div>
          </li>
          <li class="item-column1 submit-class">
            <el-button type="primary" @click="queryList">查询</el-button>
            <el-button @click="resetQuery">重置</el-button>
          </li>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="content">
      <!-- 反欺诈申请 -->
      <div class="address-title" v-show="false">
        <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">反欺诈申请列表</span>
      </div>
      <el-table :data="antiTableData" style="width: 100%" border stripe fit highlight-current-row @row-dblclick="rowDbClick" v-show="false">
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column prop="applySubno" label="进件编号">
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期">
        </el-table-column>
        <el-table-column prop="applyCustName" label="客户名称">
        </el-table-column>
        <el-table-column prop="address" label="证件类型">
        </el-table-column>
        <el-table-column prop="address" label="证件号码">
        </el-table-column>
        <el-table-column prop="mainreaName" label="欺诈类型主原因" width="120">
        </el-table-column>
        <el-table-column prop="subreaName" label="子原因">
        </el-table-column>
        <el-table-column prop="applyDesc" label="反欺诈上报描述" width="150">
        </el-table-column>
        <el-table-column prop="applyPersonName" label="申请人">
        </el-table-column>
        <el-table-column prop="appOrgCode" label="反欺诈申请机构" width="130">
        </el-table-column>
        <el-table-column prop="appOrgName" label="反欺诈申请机构名称" width="150">
        </el-table-column>
        <el-table-column prop="appSuborgCode" label="反欺诈申请机构科室" width="150">
        </el-table-column>
        <el-table-column prop="appSuborgName" label="反欺诈申请机构科室名称" width="180">
        </el-table-column>
        <el-table-column prop="fraudStateTxt" label="反欺诈状态" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClickInfo(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 反欺诈专员审批  反欺诈主管审批 -->
      <!-- v-show="antiFlag=='03'||antiFlag=='04'" -->
      <div class="address-title">
        <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">反欺诈审批任务列表 </span>
      </div>
      <!-- v-show="antiFlag=='03'||antiFlag=='04'" -->
      <el-table :data="tableData" style="width: 100%" border stripe fit highlight-current-row @row-dblclick="rowDbClick">
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="任务类型">
        </el-table-column>
        <el-table-column prop="date" label="进件编号">
        </el-table-column>
        <el-table-column prop="name" label="申请日期">
        </el-table-column>
        <el-table-column prop="address" label="客户名称">
        </el-table-column>
        <el-table-column prop="address" label="证件类型">
        </el-table-column>
        <el-table-column prop="address" label="证件号码">
        </el-table-column>
        <el-table-column prop="address" label="进件机构">
        </el-table-column>
        <el-table-column prop="address" label="产品名称">
        </el-table-column>
        <el-table-column prop="address" label="进入本环节时间" width="150">
        </el-table-column>
      </el-table>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: 'test',
      activeNames: ['1'], // 查询部分 默认显示
      antiFlag: '', // 列表标志
      antiTableData: [], // 反欺诈申请列表数据
      tableData: [], // 专员/主管列表数据
      applySubno: '', // 进件编号
      applyCustName: '', // 客户名称
      applyCustNo: '', // 客户编号
      queryParam: {
              processTemplateId :'',
                taskNodeName : '',
                taskStatus : '',
                userCode : '',
                orgCode : '',
                pageNum : 1,
                pageSize : 10,
                applySubNo : '',
                custName_la : '',
                certCode : ''
            },
    }
  },
  props: ['applyId'], // 申请单id
  mounted() {
    // 先取到 标志
    // 反欺诈申请 / 反欺诈专员审批 / 反欺诈主管审批
    var judgeFlag = JSON.parse(localStorage.getItem('judge'));
    this.antiFlag = judgeFlag.flag;
    // 根据  antiFlag 判断
    // 初审-信审审批-发起反欺诈
    if(this.antiFlag == '03' || this.antiFlag=='04'){
      this.queryParam.processTemplateId=JSON.parse(localStorage.getItem('workbenchPass')).processTemplateId;
      this.queryParam.taskNodeName=JSON.parse(localStorage.getItem('workbenchPass')).taskNodeName;
      this.queryParam.taskStatus=JSON.parse(localStorage.getItem('workbenchPass')).taskStatus;
      // 登录 单独存  userCode  orgCode 
       this.queryParam.userCode=JSON.parse(localStorage.getItem('userCode'));
       this.queryParam.orgCode=JSON.parse(localStorage.getItem('orgCode'));
       this.request(this.queryParam); 
    }else{ 
      // 反欺诈申请 - 编辑
      this.queryList();
    }
  },
  methods: {
    // 请求列表
    queryList() {
      this.post('/fraudApplyInfoController/getFraudApplyInfoList', {
        applySubno: this.applySubno, // 进件编号
        applyCustName: this.applyCustName, // 客户名称
        applyCustNo: this.applyCustNo // 客户编号
      }).then(res => {
        console.log(res);
        if (res.statusCode == '200') {
          // 根据 标志来判断 是哪个列表的数据
          // 反欺诈申请
          // 反欺诈专员审批  03  // 反欺诈主管审批 04
          if (this.judgeFlag == '03' || his.judgeFlag == '04') {
            this.tableData = res.data;
          } else {
            this.antiTableData = res.data;
          }
        }
      })
    },
    request(param){
          console.log(this.queryParam);
          this.post('/workFlowTaskQuery/getTaskToDoList',
            param
            ).then(res => {
              if(res.statusCode==200){
                this.tableData = res.data;
                
              }else{
                this.datas=[];
              }
             
            })
        },
    // 重置查询条件
    resetQuery() {
      // 查询条件 初始化
      // 再次请求
      this.queryList();
    },
    // 反欺诈申请编辑
    handleClickEdit(row) {
      console.log('click the row in table');
      // 跳转到详情
      this.$router.push({
        path: '/AntiApplyEdit',
        parmas:{applyId:row.applyId}
      });
    },
    // 反欺诈申请查看
    handleClickInfo(row){
      // 
    }
  }
}

</script>
<style>
/* 反欺诈 查询 */

.anti-fraud {}




/* 容器 */

.anti-fraud .container {}




/* 一列 */

.anti-fraud .item-column1 {
  width: 90%;
  float: left;
  margin: 0;
}




/* 两列 */

.anti-fraud .item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}





/* 三列 */

.anti-fraud .item-column3 {
  width: 33%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}





/* 搜索盒子 */

.anti-fraud .search-box {
  width: 100%;
  padding: 10px;
}


.anti-fraud .left-title {
  float: left;
  width: 130px;
  line-height: 40px;
  min-height: 40px;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
}

.anti-fraud .item-content {
  float: left;
  width: calc( 100% - 130px);

  height: 40px;
  line-height: 40px;
  text-align: left;
}

.anti-fraud .el-input {
  width: 200px;
  height: 40px;
  line-height: 40px;
}

.anti-fraud .item-content {
  float: left;
  width: calc( 100% - 130px);
  height: 30px;
  line-height: 30px;
  text-align: left;
}

.anti-fraud .submit-class {
  margin: 50px 10px 10px 0px;
  width: 100%;
  float: right;
  text-align: right;
}




/* 折叠面板头部背景色和icon */

.anti-fraud .icon_hat {
  padding: 10px 10px 10px 13px;
  vertical-align: middle;
}

.anti-fraud .headFont {
  font-size: 16px;
}





/* 反欺诈 收缩 title */

.anti-fraud .el-collapse-item__header {
  background: #eef0f9!important;
  /*font-family: PingFangSC-Regular;*/
  font-size: 16px;
  color: #1f2d3d;
  /*letter-spacing: 0.11px;*/
  text-align: left;
  /*padding-left: 10px;*/
  height: 40px;
  line-height: 40px;
}

.anti-fraud .address-title {
  width: 100%;
  height: 35px;
  font-size: 18px;
  background: #ededed;
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
  background: #eef0f9;
  border: 1px solid #e6eaee;
  height: 38px;
  width: 100%;
  font-size: 16px;
  color: #1f2d3d;
  text-align: left;
  vertical-align: middle;
  line-height: 40px;
}

</style>
