<!-- 系统管理-流程角色管理-->
<template>
<div>
  <my-head></my-head>
  <div class="processMoni">
    <div class="keywordContainer">
      <el-row class="row row1"  type="flex">
        <el-col :span="8" :offset="0">
          <span class="keywordText">客户姓名</span><el-input @keyup.enter.native="getByKey" v-model.trim="custName_la" placeholder="请输入客户姓名"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">证件号码</span><el-input @keyup.enter.native="getByKey" v-model.trim="certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">进件编号</span><el-input @keyup.enter.native="getByKey" v-model.trim="applySubNo" placeholder="请输入进价编号"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2"  type="flex">
        <el-col :span="8">
          <span class="keywordText">进件机构</span><el-input @keyup.enter.native="getByKey" v-model.trim="appOrgCode" placeholder="请输入进件机构"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">产品名称</span><el-select v-model="proId" placeholder="请选择产品名称">
            <p style="height: 34px;line-height: 34px;padding: 0 20px;font-size: 14px;background: #eee;">
              <span style="width:66px;display:inline-block;">产品代码</span><span style="margin-left: 20px">产品名称</span>
            </p>
            <el-option
              v-for="item in proNames"
              :key="item.id"
              :label="item.proName"
              :value="item.id">
              <span style="float: left;width:66px">{{ item.proCode }}</span>
              <span style="float: left; color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.proName }}</span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">任务节点</span><el-select v-model="taskNodeName" placeholder="请选择">
            <el-option
              v-for="item in taskNodes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row3"  type="flex">
        <el-col :span="8" v-if="routerState!=='03'">
          <span class="keywordText">任务类型</span><el-select v-model="taskType" placeholder="请选择">
            <el-option
              v-for="item in taskTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <span class="keywordText">当前处理人员</span><el-input @keyup.enter.native="getByKey" v-model.trim="operatorCode" placeholder="请输入当前处理人员"></el-input>
        </el-col>
        <el-col :span="8" v-if="routerState!=='03'">
          <el-button class="btn query" type="primary" @click="getByKey">查询</el-button><el-button  type="primary" class="btn reset" @click="reset">重置</el-button>
        </el-col>
        <el-col :span="8" :offset="8" v-else>
         <el-button class="btn query" type="primary" @click="getByKey">查询</el-button> <el-button  type="primary" class="btn reset" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 列表 -->
    <div class="title titleContainer">
      <span class="titleText">流程查询</span>
      <span class="iconContainer">
        <span class="icon-item" @click="handleItem('trace')">
          <i class="el-icon liuchengIcon"></i><span class="el-icon-text">流程轨迹</span>
        </span>
        <span class="icon-item" @click="handleItem('assign')" v-if="routerState!=='03'">
          <i class="el-icon addIcon"></i><span class="el-icon-text">任务分派</span>
        </span>
        <span class="icon-item" @click="handleItem('trans')">
          <i class="el-icon liuchengIcon"></i><span class="el-icon-text">转分派流程轨迹</span>
        </span>
      </span>

    </div>

    <div class="listContainer">
      <el-table
        :data="moniList"
        height="400"
        border
        show-header
        highlight-current-row
        @selection-change="handleSelectionChange"
        @row-click="selectRow">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="emerTypeTxt"
          label="紧急程度"
          width="80">
        </el-table-column>
        <el-table-column
          prop="taskTypeTxt"
          label="任务类型"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="applySubNo"
          label="进件编号"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="custName"
          label="客户名称"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="certCode"
          label="证件号码"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="proName"
          label="产品名称"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="appOrgCode"
          label="进件机构"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="taskNodeNameTxt"
          label="任务节点"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="operatorCode"
          label="当前处理人员"
          min-width="100">
        </el-table-column>
      </el-table>

      <!-- 页码 -->
      <div class="page">
        <el-pagination
          @size-change="changePageSize"
          @current-change="changeCurrentPage"
          :current-page.sync="currentPage"
          :page-sizes= pageSizesArr
          :page-size= setPageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total=responseDatas.totalNum>
        </el-pagination>
      </div>
    </div>



    <!-- 流程轨迹 -->
    <el-dialog title="流程轨迹" custom-class="trace" :visible.sync="dialogTraceVisible">
      <!-- <el-collapse v-model="activeNames">
        <el-collapse-item title="信审流程轨迹" name="1"> -->
          <el-table
            :data="traceList"
            border
            show-header
            highlight-current-row>
            <el-table-column
              type="index"
              label="序号"
              width="50">
            </el-table-column>
            <el-table-column
              prop="taskNodeNameTxt"
              label="任务节点"
              width="80">
            </el-table-column>
            <el-table-column
              prop="taskTypeTxt"
              label="任务类型"
              width="80">
            </el-table-column>
            <el-table-column
              prop="activationTime"
              label="进入本环节时间"
              show-overflow-tooltip
              width="150">
            </el-table-column>
            <el-table-column
              prop="taskStatusTxt"
              label="任务状态"
              width="80">
            </el-table-column>
            <el-table-column
              prop="operatorCode"
              label="处理人"
              show-overflow-tooltip
              width="100">
            </el-table-column>
            <el-table-column
              prop="completeTime"
              label="处理时间"
              show-overflow-tooltip
              width="150">
            </el-table-column>
            <el-table-column
              prop="approvalOpinionTxt"
              label="处理结论"
              width="100">
            </el-table-column>
            <el-table-column
              prop="opinionExplain"
              label="意见说明"
              show-overflow-tooltip
              min-width="100">
            </el-table-column>
          </el-table>
        <!-- </el-collapse-item>
      </el-collapse> -->
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogTraceVisible = false">返 回</el-button>
      </div>
    </el-dialog>

    <!-- 任务分派 -->
    <el-dialog title="任务分派" :visible.sync="dialogAssignVisible">
      <el-form :model="itemOfLists" :rules="rules" ref="ruleForm">
        <div class="bfc">
          <el-form-item class="fl" label="任务角色" :label-width="formLabelWidth">
            <el-input readonly v-model="flowRoleName"></el-input>
          </el-form-item>
          <el-form-item class="fr" label="处理人员" prop="toUser" :label-width="formLabelWidth">
            <el-select v-model="itemOfLists.toUser" placeholder="请选择处理人员">
              <p style="height: 34px;line-height: 34px;padding: 0 20px;font-size: 14px;background: #eee;">
                <span style="width:66px;display:inline-block;">用户名称</span><span style="margin-left: 55px">用户编号</span>
              </p>
              <el-option
                v-for="item in flowRoleIds"
                :key="item.userCode"
                :label="item.userName"
                :value="item.userCode">
                <span style="float: left;width:101px;height: 34px">{{ item.userName }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.userCode }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAssignVisible = false">返 回</el-button>
        <el-button type="primary" @click="taskTransmit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 转分派流程轨迹 -->
    <el-dialog title="转分派流程轨迹" custom-class="trans" :visible.sync="dialogTransVisible">
      <el-table
        :data="transList"
        border
        show-header
        highlight-current-row>
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="taskNodeNameTxt"
          label="任务节点"
          width="100">
        </el-table-column>
        <el-table-column
          prop="assignerCode"
          label="转分派人"
          width="110">
        </el-table-column>
        <el-table-column
          prop="assignFromCode"
          label="原任务人"
          width="110">
        </el-table-column>
        <el-table-column
          prop="assignToCode"
          label="现任务人"
          width="110">
        </el-table-column>
        <el-table-column
          prop="assignTime"
          label="操作时间"
          min-width="140">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogTransVisible = false">返 回</el-button>
      </div>
    </el-dialog>

    <!-- 操作前提示 -->
    <el-dialog title="提示" :visible.sync="dialogAlertVisible" width="30%">
      <span>{{alertMessage}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAlertVisible = false">确定</el-button>
      </span>
    </el-dialog>

  </div>
</div>
</template>

<script>
import myHead from "@/view/header";
import processMoniSer from "./processMoniSer.js";
import constant from "@/util/constant";

export default {
  data() {
    return {
      taskNodes: [],

      taskTypes: [
        {value: '00',label: '新任务'},
        {value: '01',label: '回退任务'},
        {value: '02',label: '挂起任务'},
        {value: '03',label: '回退再审任务'}
      ],

      responseDatas: {}, // 角色列表请求的返回值
      moniList: [], // 流程查询列表
      traceList: [],// 流程轨迹列表
      transList: [],// 转分派流程轨迹

      currentRow: {}, // 当前选中的那一行数据
     
      proNames: [],
      itemOfLists: {
        assignor: '',
        toUser: '',
        taskIds: []
      }, // 编辑、查看、授权某一条数据前，根据 id 查询其详细数据
      

      currentPage: 1, // 默认显示的当前页
      pageSizesArr: [10, 20, 30, 40, 50], // 每页显示的数据数
      setPageSize: 10,

      defaultProps: {
        children: 'children',
        label: 'resName'
      },

      queryParam: {
        pageNum: 1,
        pageSize: 10,
      },

      custName_la: '',
      certCode: '',
      applySubNo: '',
      appOrgCode: '',
      proId: '',
      taskNodeName: '',
      taskType: '',
      operatorCode: '',


      dialogTraceVisible: false,//流程轨迹
      dialogAssignVisible: false,//任务分派
      dialogTransVisible: false,//转分派流程轨迹
      dialogAlertVisible: false,// 未选择提示框

      alertMessage: '',

      multipleSelection: [],

      formLabelWidth: "140px",

      // 
      routerPath: '',
      routerState: '',

      rules: {
        toUser: [
          {required: true, message: '该输入项为必输项', trigger: 'change'}
        ]
      },

      activeNames: ['1'],

      flowRoleIds: [], //流程角色列表
      flowRoleName: '',

    };
  },

  watch: {
    '$route'(to,from){
      if(to.fullPath !== from.fullPath){
        this.getUserInf();
        // this.getProcessMonitorList();
        this.responseDatas.totalNum = 0;
        this.moniList = [];
        this.getProductForUser();    
      }
    }
  },

  mounted() {
    this.getUserInf();
    // this.getProcessMonitorList();
    this.getProductForUser();
  },

  methods: {
    getUserInf(){
      // 获取路由参数，来判断是信审、复议、还是反欺诈以及各自对应的未分配、已分配和已完成三个状态
      var str = this.$route.fullPath;
      this.routerPath = str.slice(str.indexOf("?")+1,-2);
      this.routerState = str.slice(-2);
      this.queryParam.processTemplateId = this.routerPath;
      this.queryParam.taskStatus = this.routerState;
      console.log(this.routerState)

      this.userInf = JSON.parse(localStorage.getItem("userInf"));
      this.queryParam.userCode = this.userInf.userCode;
      this.queryParam.orgCode = this.userInf.orgCode;

      if(this.routerPath === "creditApp"){
        this.taskNodes = [
          {value: 'creditApp_firstTrial',label: '初审审批'},
          {value: 'creditApp_finalTrial_one',label: '终审一级审批'},
          {value: 'creditApp_finalTrial_two',label: '终审二级审批'},
          {value: 'creditApp_finalTrial_three',label: '信审经理审批'},
          {value: 'creditApp_finalTrial_four',label: '信审高级经理审批'},
          {value: 'creditApp_finalTrial_five',label: '信审总监审批'}
        ];
      }else if(this.routerPath === "reconsiderApp"){
        this.taskNodes = [
          {value: 'reconsiderApp_apply',label: '复议申请'},
          {value: 'reconsiderApp_commissioner',label: '复议专员审批'},
          {value: 'reconsiderApp_manager',label: '复议经理审批'}
        ];
      }else if(this.routerPath === "antiFraudApp"){
        this.taskNodes = [
          {value: 'antiFraudApp_apply',label: '反欺诈申请'},
          {value: 'antiFraudApp_commissioner',label: '反欺诈专员审批'},
          {value: 'antiFraudApp_manager',label: '反欺诈主管审批'}
        ];
      }
    },

    // 查询经营产品
    getProductForUser(orgId){
      /*this.post(constant.baseUrl_user +'remote/product/getProductForUser',{
        data:{
          orgId: this.userInf.orgId,
          validFlag: '1'
        }
      }).then(res => {
        this.proNames = res.data;
      })*/
      this.post("/credit/productAll").then(res => {
        if(res.statusCode == 200){
            this.proNames = res.data;
          }
        });
    },

    // 根据任务角色 code 查询 Name
    getFlowRoleName(roleCode){
      this.post(constant.baseUrl_user +'remote/flowRole/getByFlowRoleCode',{
        data: {
          flowRoleCode: roleCode
        }
      }).then(res => {
        this.flowRoleName = res.data.flowRoleName;
      })
    },

    // 下拉框获取流程角色
    getCurrentUserFlowRole(){
      this.post(constant.baseUrl_user +'remote/user/getBpmUser',{
        data:{
          flowRoleCode: this.multipleSelection[0].flowRoleCode,
          orgCode: this.multipleSelection[0].orgCode,
          validFlag: "0"
        }
      }).then(res => {
        this.flowRoleIds = res.data;
      })
    },

    //查询流程监控
    getProcessMonitorList(){

      this.queryParam.custName_la = this.custName_la;
      this.queryParam.certCode = this.certCode;
      this.queryParam.applySubNo = this.applySubNo;
      this.queryParam.appOrgCode = this.appOrgCode;
      this.queryParam.proId = this.proId;
      this.queryParam.taskNodeName = this.taskNodeName;
      this.queryParam.taskType = this.taskType;
      this.queryParam.operatorCode = this.operatorCode;

      processMoniSer
        .getProcessMonitorList(this.queryParam)
        .then(res => {
          this.responseDatas = res.data;
          this.moniList = this.responseDatas.taskDetailList;
        })
    },
    // 查询流程轨迹
    getProcessTraceList(id){
      processMoniSer
        .getProcessTraceList({
          processInstanceId: id,
          processStatus: this.routerState==="03"?"02":"01"
        })
        .then(res => {
          this.traceList = res.data.taskDetailList;
        })
    },
    // 转分派流程轨迹
    getTransmitHistoryList(id){
      processMoniSer
        .getTransmitHistoryList({
          processInstanceId: id,
        })
        .then(res => {
          this.transList = res.data.assignTaskLogList;
        })
    },

    // 查询按钮
    getByKey() {

      this.getProcessMonitorList(this.queryParam);
    },

    // 重置按钮
    reset() {
      this.custName_la = '';
      this.certCode = '';
      this.applySubNo = '';
      this.appOrgCode = '';
      this.proId = '';
      this.taskNodeName = '';
      this.taskType = '';
      this.operatorCode = '';
      this.queryParam.custName_la = "";
      this.queryParam.certCode = "";
      this.queryParam.applySubNo = "";
      this.queryParam.appOrgCode = "";
      this.queryParam.proId = "";
      this.queryParam.taskNodeName = "";
      this.queryParam.taskType = "";
      this.queryParam.operatorCode = "";
      processMoniSer
        .getProcessMonitorList(this.queryParam)
        .then(res => {
          this.responseDatas = res.data;
          this.moniList = this.responseDatas.taskDetailList;
        })
    },

    // 每页条数变化时，重新请求
    changePageSize(val) {
      this.queryParam.pageSize = val;
      this.queryParam.pageNum = 1;
      if (this.currentPage !== 1 || this.setPageSize !== 10) {
        this.currentPage = 1;
        this.setPageSize = 10;
      } else {
        this.getProcessMonitorList(this.queryParam);
      }
    },

    // 改变页码时，重新请求
    changeCurrentPage(val) {
      this.queryParam.pageNum = val;
      this.getProcessMonitorList(this.queryParam);
    },

    // 多选
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection= val;
    },

    // 选中某一行
    selectRow(row, event, column) {
      console.log(row);
      this.currentRow = row;
    },

    handleItem(flag){
      if(this.multipleSelection.length==0){
        this.dialogAlertVisible = true;
        if(flag==='trace'){
          this.alertMessage = "请选择一条记录查看流程轨迹！";
        }else if(flag==='assign'){
          this.alertMessage = "请选择流程进行分派任务！";
        }else if(flag==='trans'){
          this.alertMessage = "请选择一条记录查看转分派流程轨迹！";
        }
        return
      }
      if(this.multipleSelection.length>1){
        if(flag==='trace'){
          this.dialogAlertVisible = true;
          this.alertMessage = "请选择一条记录查看流程轨迹！";
          return
        }else if(flag==='assign'){
          var arr = this.multipleSelection;
          var fg = arr.every(function(item){
            return item.taskNodeNameTxt === arr[0].taskNodeNameTxt
          })
          if(!fg){
            this.dialogAlertVisible = true;
            this.alertMessage = "请选择相同 [任务节点] 的流程进行分派任务！";
            return
          }
        }else if(flag==='trans'){
          this.dialogAlertVisible = true;
          this.alertMessage = "请选择一条记录查看转分派流程轨迹！";
          return
        }
      }

      console.log("可以操作");
      if(flag==='trace'){
        this.dialogTraceVisible = true;
        this.getProcessTraceList(this.multipleSelection[0].processInstanceId);
      }else if(flag==='assign'){
        this.dialogAssignVisible = true;
        this.getFlowRoleName(this.multipleSelection[0].flowRoleCode);
        this.getCurrentUserFlowRole();
      }else if(flag==='trans'){
        this.dialogTransVisible = true;
        this.getTransmitHistoryList(this.multipleSelection[0].processInstanceId);
      }

    },


    // 任务分派
    taskTransmit(formName) {
      var checkFlag = '';
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('校验成功');
          checkFlag = true;
        } else {
          console.log('校验失败');
          checkFlag = false;
        }
      });
      if(!checkFlag){return}

      var arr = [];
      this.multipleSelection.forEach(function(item){
        arr.push(item.taskId);
      })
      this.itemOfLists.taskIds = arr;

      processMoniSer
        .transmitTask({
          assignor: this.multipleSelection[0].flowRoleCode,
          toUser: this.itemOfLists.toUser,
          taskIds: this.itemOfLists.taskIds
        })
        .then(res => {
          if(res.data.statusCode == 200){
            this.$message({
              message: res.data.msg?res.data.msg:"操作成功！",
              type: 'success'
            })
            this.itemOfLists.toUser = '';
            this.getProcessMonitorList(this.queryParam);
          }else{
            this.$message({
              message: '操作失败！',
              type: 'error'
            })
          }
        })
        .catch(err => {
          this.$message({
            message: '网络错误！',
            type: 'error'
          })
        });
      this.dialogAssignVisible = false;
    },

  },

  components: {
    myHead
  }
};
</script>

<style>
.processMoni {
  padding: 15px 30px;
  /* width: 100%; */
  /* height: 100%; */
  background-color: #fafbfc;
}
.processMoni .row {
  margin-bottom: 20px;
}
.processMoni .row1 {
  margin-top: 21px;
}

.processMoni .titleContainer {
  background-color: rgba(238,240,249,.75);
  border-radius: 6px;
  width: 100%;
  height: 50px;
}
.processMoni .titleText {
  font-size: 16px;
  color: #1f2d3d;
  text-align: left;
  margin: 15px 25px 13px;
  display: inline-block;
  height: 22px;
  width: 130px;
  line-height: 22px;
  font-weight: bold;
}
.processMoni .keywordContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 26px;
}
.processMoni .keywordText {
  font-size: 14px;
  color: #475669;
  text-align: right;
  display: inline-block;
  width: 126px;
  height: 20px;
  margin-right: 10px;
}
.processMoni .keywordContainer .el-input__inner {
  border-radius: 6px;
  height: 35px;
  width: 258px;
}
.processMoni .el-dialog{
  width: 720px;
}
.processMoni .el-dialog.trace{
  width: 988px;
}
.processMoni .el-dialog .el-dialog__body{
  padding: 10px 20px;
}
.processMoni .el-dialog.trace .el-dialog__body{
  padding: 10px 20px;
  height: 492px;
  overflow: auto;
}
.processMoni .el-dialog.trans .el-dialog__body{
  padding: 10px 20px;
  height: 392px;
  overflow: auto; 
}
.processMoni .el-dialog.trace .el-table__body-wrapper,
.processMoni .el-dialog.trans .el-table__body-wrapper{
  overflow-x: hidden;
}

.processMoni .el-dialog .el-input__inner{
  width: 185px;
  height: 35px;
}

.processMoni .btn {
  height: 33px;
  border-radius: 8px;
  width: 79px;
  font-size: 14px;
  line-height: 33px;
  padding: 0;
}
.processMoni .query {
  margin-left: 214px;
}
.processMoni .reset {
  margin-left: 20px;  
}

.processMoni .listContainer {
  background-color: #ffffff;
  border: 1px solid #e6eaee;
  margin-bottom: 40px;
  padding: 25px;
  width: 100%;
}
.processMoni .el-table .cell {
  line-height: 23px;
}
.processMoni .el-table {
  font-size: 13px;
}
.processMoni .el-table__header-wrapper tr {
  height: 40px;
}
.processMoni .el-table__body-wrapper tr {
  height: 35px;
}

.processMoni .btn-sm {
  border-radius: 3px;
  width: 44px;
  height: 24px;
  font-size: 12px;
  padding: 0;
}

.processMoni .page {
  text-align: center;
  margin-top: 20px;
}
.processMoni .page .el-pagination .el-select .el-input .el-input__inner,
.processMoni .page .el-pagination__editor.el-input .el-input__inner{
  line-height:28px;
}
.processMoni .iconContainer {
  float: right;
  line-height: 50px;
  margin-right: 29px;
}
.processMoni .iconContainer .icon-item {
  cursor: pointer;
  margin-right: 14px;
  float: left;
}
.processMoni .iconContainer .el-icon {
  color: #0077ff;
  margin-right: 6px;
  vertical-align: middle;
  height: 30px;
  width: 30px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center center;
}
.processMoni .el-icon.addIcon {
  background-image: url("../../../static/images/add.png");
}
.processMoni .el-icon.liuchengIcon {
  background-image: url("../../../static/images/liucheng.png");
}
.processMoni .iconContainer .el-icon-text {
  font-size: 14px;
  color: #1f2d3d;
  vertical-align: middle;
}

.processMoni .el-textarea {
  /* width: 90%; */
}
.processMoni .el-form-item {
  /* margin-bottom: 10px; */
}

.processMoni .el-tree{
  height: 500px;
  overflow-y: auto;
}

/* 样式冲突的解决 */
.processMoni .listContainer .el-button{
  padding: 0;
}
.processMoni .keywordContainer .el-input{
  width: 258px;
}

/* 必填项小星星上下居中对齐 */
.processMoni .el-form-item.is-required .el-form-item__label:before{
  display: inline-block;
  height: 20px;
  vertical-align: sub;
}

.processMoni .listContainer .el-table__body-wrapper{
  overflow-x: hidden;
}

.processMoni .el-dialog .fl {
  float: left;
}
.processMoni .el-dialog .fr {
  float: right;
  margin-right: 18px;
}
.processMoni .el-dialog .bfc {
  overflow: auto;
  clear: both;
}
</style>

