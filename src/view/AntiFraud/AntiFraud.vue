<!-- 反欺诈申请 - 列表页  初审/终审/专员/主管 都可进入 -->
<template>
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="applySubno" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model="applyCustName" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model="applyCustNo" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="resetQueryList">查询</el-button>
          <el-button class="btn reset" @click="resetQuery">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
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
    <div class="listContainer">
      <el-table :data="antiTableData.recordList" border height="510" highlight-current-row class="anti-table" @row-dblclick='goDetail'>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="applySubno" label="进件编号" width='160'>
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期" width='160'>
        </el-table-column>
        <el-table-column prop="applyCustName" label="客户名称" width='120'>
        </el-table-column>
        <el-table-column prop="certTypeTxt" label="证件类型">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" width='160'>
        </el-table-column>
        <el-table-column prop="mainreaName" label="欺诈类型主原因" width="120">
        </el-table-column>
        <el-table-column prop="subreaName" label="子原因" width='120'>
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
        <el-table-column prop="fraudStateTxt" label="反欺诈查询状态" min-width="140">
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[10, 20,50]"
        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="antiTableData.totalRecord">
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

        applySubno: '', // 进件编号
        applyCustName: '', // 客户名称
        applyCustNo: '', // 证件号码

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
      // 先取到 标志
      // 反欺诈申请 / 反欺诈专员审批 / 反欺诈主管审批
      // var judgeFlag = JSON.parse(localStorage.getItem('judge'));
      // this.antiFlag = judgeFlag.flag;
      // console.log(this.antiFlag);
      // 根据  antiFlag 判断
      // 初审-信审审批-发起反欺诈
      // if (this.antiFlag == '03' || this.antiFlag == '04') {
      //   if (this.antiFlag == '03') {
      //     this.processTemplateId = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).processTemplateId;

      //     this.taskNodeName = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskNodeName;
      //     this.taskStatus = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskStatus;
      //   }
      //   if (this.antiFlag == '04') {
      //     this.processTemplateId = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).processTemplateId;

      //     this.taskNodeName = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskNodeName;
      //     this.taskStatus = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskStatus;
      //   }

      //   // 登录 单独存  userCode  orgCode 
      //   this.userCode = JSON.parse(localStorage.getItem('userInf')).userCode;
      //   this.orgCode = JSON.parse(localStorage.getItem('userInf')).orgCode;

      //   this.request();

      //   // this.queryList();
      // } else {
      //   // 反欺诈申请 - 列表
      //   this.queryList();
      // }

      // 反欺诈申请 - 列表
      // this.queryList();
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/AntiFraud') {
          // this.queryList();
        }
      }
    },
    methods: {
      // 请求列表
      queryList() {
        this.post('/fraudApplyInfoController/getFraudApplyInfoList', {
          pageParam: {
            pageNum: this.pageNum,
            pageSize: this.pageSize
          },
          fraudApplyInfo: {
            applySubno: this.applySubno, // 进件编号
            applyCustName: this.applyCustName, // 客户名称
            certCode: this.applyCustNo, // 证件号码
            applyCode: this.userCode
          }
        }).then(res => {
          if (res.statusCode == '200') {
            this.antiTableData = res.data;
          }
        })
      },
      // 重置查询条件
      resetQuery() {
        // 查询条件 初始化
        this.applySubno = ''; // 进件编号
        this.applyCustName = ''; // 客户名称
        this.applyCustNo = ''; // 客户编号
        // 再次请求
        this.queryList();
      },
      // 重新查询
      resetQueryList() {
        // // 再次请求
        this.queryList();
      },
      // 反欺诈申请编辑
      handleClickEdit(row) {
        console.log(1, row)
        // row 有值, 跳编辑
        if (row) {
          // 跳转到编辑
          this.$router.push({
            name: 'AntiApplyEdit',
            params: {
              id: row.id,
              flag: 'edit'
            }
          });
        } else { // 否则是新增
          // routeParms = 'id=' + ';flag=add'
          this.$router.push({
            name: 'AntiApplyAdd',
            params: {
              id: '',
              flag: 'add',
              newOne: true,
            }
          });
        }
      },
      // 主管/专员审批 跳分屏  
      // 反欺诈申请列表  没有详情
      goDetail(row, event, column) {
        localStorage.setItem("AtaskInWaitting", JSON.stringify(row));
        this.$router.push({
          name: 'AntiApplyInf',
          params: {
            id: row.id,
            applyId: row.applyId,
            newOne: true,
          }
        })
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.pageNum = 1;
        this.queryList();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.queryList();
      }
    }
  }

</script>
