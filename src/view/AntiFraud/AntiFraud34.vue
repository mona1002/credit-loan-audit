<!-- 反欺诈申请 - 列表页 -->
<template>
  <!-- <div class="anti-fraud main-div"> -->
      <div class="taskWatting main-div">
      <div class="taskWinput search-div">
        <el-row class="row row1" type="flex">
          <el-col :span="6" class="search-item" :offset="0">
            <span class="keywordText">进件编号：</span>
            <el-input class="" v-model="applySubno" placeholder="请输入进件编号"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span class="keywordText">客户名称：</span>
            <el-input class="" v-model="applyCustName" placeholder="请输入客户名称"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span class="keywordText">证件号码：</span>
            <el-input class="" v-model="applyCustNo" placeholder="请输入证件号码"></el-input>
          </el-col>
          <el-col :span="6" class="search-btn">
            <el-button class="btn query " type="primary" @click="resetQueryList">查询</el-button>
            <el-button class="btn reset" @click="resetQuery">重置</el-button>
          </el-col>
        </el-row>
      </div>
      <div>
        <!-- 反欺诈申请 -->
        <div class="title titleContainer edit-div" v-show="antiFlag!='03'&& antiFlag!='04'">
          <span class="titleText">
            <i class="el-icon title-icon"></i>
            反欺诈申请列表
          </span>
          <span class="iconContainer">
            <span class="icon-item" @click="handleClickEdit()">
              <i class="el-icon addIcon"></i>
              <span class="el-icon-text">添加</span>
            </span>
          </span>
        </div>
        <!-- 反欺诈专员审批  反欺诈主管审批 -->
        <div class="title titleContainer edit-div" v-show="antiFlag=='03'||antiFlag=='04'">
          <span class="titleText">
            <i class="el-icon title-icon"></i>
            反欺诈审批任务列表
          </span>
        </div>
      </div>
      <div class="listContainer">
        <el-table :data="antiTableData.taskDetailList" border stripe fit height="510"  highlight-current-row class="anti-table" v-show="antiFlag!='03'&& antiFlag!='04'">
          <el-table-column type="index"  label="序号" width="50">
          </el-table-column>
          <el-table-column prop="applySubno" label="进件编号" min-width="170">
          </el-table-column>
          <el-table-column prop="appDate" label="申请日期" width="110">
          </el-table-column>
          <el-table-column prop="applyCustName" label="客户名称" width='130'>
          </el-table-column>
          <el-table-column prop="certTypeTxt" label="证件类型" width="110">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" width="160">
          </el-table-column>
          <el-table-column prop="mainreaName" label="欺诈类型主原因" width="120">
          </el-table-column>
          <el-table-column prop="subreaName" label="子原因" width="80">
          </el-table-column>
          <el-table-column prop="applyDesc" label="反欺诈上报描述" width="180">
          </el-table-column>
          <el-table-column prop="applyPersonName" label="申请人" width='130'>
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
          <el-table-column label="操作" width="180" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" v-if="scope.row.fraudStateTxt=='反欺诈拒绝'||scope.row.fraudStateTxt=='反欺诈放弃'" @click="handleClickEdit(scope.row)">编辑</el-button>
              <el-button size="mini" @click="handleClickInfo(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 专员 -->
        <el-table :data="directorTableData.taskDetailList" border stripe fit  height="510" highlight-current-row @row-dblclick="rowDbClick" v-show="antiFlag=='03'||antiFlag=='04'"
          class="director-table">
          <el-table-column type="index" :index="1"  label="序号" width='50'>
          </el-table-column>
          <el-table-column prop="taskTypeTxt" label="任务类型" width="120">
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" width="170">
          </el-table-column>
          <el-table-column prop="appDate" label="申请日期" width="110">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称">
          </el-table-column>
          <el-table-column prop="certTypeTxt" label="证件类型" width="80">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" min-width="160">
          </el-table-column>
          <el-table-column prop="appOrgName" label="进件机构" width="80">
          </el-table-column>
          <el-table-column prop="proName" label="产品名称" width="80">
          </el-table-column>
          <el-table-column prop="activationTime" label="进入本环节时间" min-width="160">
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[10, 20,50]"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="directorTableData.totalNum">
        </el-pagination>
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
        antiTableData: [{
          "appDate": "2017-12-07 11:29:25",
          "appOrgCode": "111",
          "appOrgId": null,
          "appOrgName": "营销一部",
          "appSuborgCode": null,
          "appSuborgId": null,
          "appSuborgName": null,
          "applyCode": "dyx",
          "applyCustId": null,
          "applyCustName": null,
          "applyCustNo": null,
          "applyDesc": null,
          "applyId": "l9uJjGvYat9DnO6o26JhTgUrMCW14TCv",
          "applyPersonName": null,
          "applySubno": "999",
          "caseNum": null,
          "certCode": null,
          "channel": "00",
          "channelTxt": null,
          "creatTime": null,
          "creditappTaskid": null,
          "fraudState": null,
          "fraudStateTxt": null,
          "id": "1",
          "mainreaName": null,
          "mainreasonId": null,
          "proCode": "诺英贷",
          "proId": "111",
          "proName": null,
          "processInstanceId": null,
          "reconsiderNum": null,
          "subreaName": null,
          "subreasonId": null
        }], // 反欺诈申请列表数据
        directorTableData: [{
          "appDate": "2017-12-07 11:29:25",
          "appOrgCode": "111",
          "appOrgId": 'null',
          "appOrgName": "营销一部",
          "appSuborgCode": 'null',
          "appSuborgId": 'null',
          "appSuborgName": 'null',
          "applyCode": "dyx",
          "applyCustId": 'null',
          "applyCustName": 'null',
          "applyCustNo": 'null',
          "applyDesc": 'null',
          "applyId": "l9uJjGvYat9DnO6o26JhTgUrMCW14TCv",
          "applyPersonName": 'null',
          "applySubno": "999",
          "caseNum": 'null',
          "certCode": 'null',
          "channel": "00",
          "channelTxt": 'null',
          "creatTime": 'null',
          "creditappTaskid": 'null',
          "fraudState": 'null',
          "fraudStateTxt": 'null',
          "id": "1",
          "mainreaName": 'null',
          "mainreasonId": 'null',
          "proCode": "诺英贷",
          "proId": "111",
          "proName": 'null',
          "processInstanceId": 'null',
          "reconsiderNum": 'null',
          "subreaName": 'null',
          "subreasonId": 'null'
        }], // 专员/主管列表数据
        applySubno: '', // 进件编号
        applyCustName: '', // 客户名称
        applyCustNo: '', // 客户编号

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

      }
    },
    props: ['applyId'], // 申请单id
    mounted() {
      this.toinner();
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/AntiFraud34') {
          this.toinner();
        }
      }
    },
    methods: {
      toinner() {
        // 先取到 标志
        // 反欺诈申请 / 反欺诈专员审批 / 反欺诈主管审批
        var judgeFlag = JSON.parse(localStorage.getItem('judge'));
        this.antiFlag = judgeFlag.flag;
        // 删除 审批结论存到本地的数据
        localStorage.removeItem('saveInsertObj');
        // 根据  antiFlag 判断
        // 初审-信审审批-发起反欺诈
        if (this.antiFlag == '03' || this.antiFlag == '04') {
          if (this.antiFlag == '03') {
            this.processTemplateId = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).processTemplateId;
            this.taskNodeName = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskNodeName;
            this.taskStatus = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskStatus;
          }
          if (this.antiFlag == '04') {
            this.processTemplateId = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).processTemplateId;
            this.taskNodeName = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskNodeName;
            this.taskStatus = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskStatus;
          }

          // 登录 单独存  userCode  orgCode 
          this.userCode = JSON.parse(localStorage.getItem('userInf')).userCode;
          this.orgCode = JSON.parse(localStorage.getItem('userInf')).orgCode;
          this.request();
        } else {
          // 反欺诈申请 - 列表
          this.queryList();
        }
      },
      // 请求列表
      queryList() {
        this.post('/fraudApplyInfoController/getFraudApplyInfoList', {
          applySubno: this.applySubno, // 进件编号
          applyCustName: this.applyCustName, // 客户名称
          applyCustNo: this.applyCustNo, // 客户编号
          applyCode: this.userCode
        }).then(res => {
          if (res.statusCode == '200') {
            this.antiTableData = res.data;
          }
        })
      },
      request() {
        this.post('/workFlowTaskQuery/getTaskToDoList', {
          processTemplateId: this.processTemplateId,
          taskNodeName: this.taskNodeName,
          taskStatus: this.taskStatus,
          userCode: this.userCode,
          orgCode: this.orgCode,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          applySubNo: this.applySubno,
          custName_la: this.applyCustName,
          certCode: this.applyCustNo,
        }).then(res => {
          if (res.statusCode == 200) {
            this.directorTableData = res.data;
          } else {
            this.directorTableData = [];
          }
        })
      },
      // 重置查询条件
      resetQuery() {
        // 查询条件 初始化
        this.applySubno = ''; // 进件编号
        this.applyCustName = ''; // 客户名称
        this.applyCustNo = ''; // 客户编号
        if (this.antiFlag == '03' || this.antiFlag == '04') {
          this.request();
        } else {
          // 再次请求
          this.queryList();
        }
      },
      // 重新查询
      resetQueryList() {
        if (this.antiFlag == '03' || this.antiFlag == '04') {
          this.request();
        } else {
          // 再次请求
          this.queryList();
        }
      },
      // 反欺诈申请编辑
      handleClickEdit(row) {
        // row 有值, 跳编辑
        if (row) {
          // 跳转到编辑
          this.$router.push({
            name: 'AntiApplyEdit',
            params: {
              id: row.id,
            }
          });
        } else { // 否则是新增
          this.$router.push({
            name: 'AntiApplyAdd',
            params: {
              id: ''
            }
          });
        }
      },
      // 反欺诈申请查看
      handleClickInfo(row) {
        this.$router.push({
          name: 'AntiApplyInf',
          params: {
            id: row.id,
            applyId: row.applyId
          }
        });
      },
      // 主管/专员审批 跳分屏
      rowDbClick(row) {
        localStorage.setItem("AntitaskInWaitting", JSON.stringify(row))
        this.$router.push({
          name: 'AntiAudit',
          params: {
            id: row.id,
            applyId: row.applyId,
            newOne: true,
          }
        });
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.pageNum = 1;
        this.request();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.request();
      },
    }
  }

</script>
