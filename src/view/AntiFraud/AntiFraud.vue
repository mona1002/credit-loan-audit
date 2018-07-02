<!-- 反欺诈申请 - 列表页  初审/终审/专员/主管 都可进入 -->
<template>
  <div class="anti-fraud">
    <myHead class="top"></myHead>
    <!-- <el-collapse v-model="activeNames"> -->
    <div class='tableList'>
      <div class="title-bar">
        <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">高级查询</span>
        <!-- {{title1}} -->
      </div>
      <!-- <el-collapse-item style="text-align:left;" name="1"> -->
      <!--  <template slot="title">
          <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">历史调查日志</span>
        </template> -->
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
          <el-button type="primary" @click="resetQueryList">查询</el-button>
          <el-button type="primary" @click="resetQuery">重置</el-button>
        </li>
      </div>
      <!-- </el-collapse-item> -->
      <!-- </el-collapse> -->
      <div>
        <!-- 反欺诈申请 -->
        <div class="address-title">
          <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">反欺诈申请列表</span>
          <span class="btn-add" @click="handleClickEdit()">
            <span class="icon-add"></span> 添加
          </span>
        </div>
      </div>
      <div class="content">
        <el-table :data="antiTableData.recordList" border stripe fit highlight-current-row class="anti-table" @row-dblclick='goDetail'>
          <el-table-column type="index" label="序号"  width="50">
          </el-table-column>
          <el-table-column prop="applySubno" label="进件编号">
          </el-table-column>
          <el-table-column prop="appDate" label="申请日期">
          </el-table-column>
          <el-table-column prop="applyCustName" label="客户名称">
          </el-table-column>
          <el-table-column prop="certTypeTxt" label="证件类型">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码">
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
          <el-table-column prop="fraudStateTxt" label="反欺诈状态" min-width="140">
          </el-table-column>
          <!-- <el-table-column label="操作"  width="180" class="aaaaaaaaaaaaa">
            <template slot-scope="scope">
              <el-button size="mini" v-if="scope.row.fraudStateTxt=='反欺诈拒绝'||scope.row.fraudStateTxt=='反欺诈放弃'" @click="handleClickEdit(scope.row)">编辑</el-button>
              <el-button size="mini" type="primary" @click="handleClickInfo(scope.row)">查看</el-button>
            </template>
          </el-table-column> -->
        </el-table>
     
      </div>
      <div>   <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="antiTableData.totalRecord">
        </el-pagination></div>
    </div>
  </div>
</template>
<script>
  import myHead from "../header.vue"
  export default {
    components: {
      myHead
    },
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
      this.queryList();
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
      // request() {


      //   this.post('/workFlowTaskQuery/getTaskToDoList', {
      //     processTemplateId: this.processTemplateId,
      //     taskNodeName: this.taskNodeName,
      //     taskStatus: this.taskStatus,
      //     userCode: this.userCode,
      //     orgCode: this.orgCode,
      //     pageNum: this.pageNum,
      //     pageSize: this.pageSize,
      //     applySubNo: this.applySubno,
      //     custName_la: this.applyCustName,
      //     certCode: this.applyCustNo,
      //   }).then(res => {
      //     if (res.statusCode == 200) {
      //       this.directorTableData = res.data.taskDetailList;
      //     } else {
      //       this.directorTableData = [];
      //     }

      //   })
      // },
      // 重置查询条件
      resetQuery() {
        // 查询条件 初始化
        this.applySubno = ''; // 进件编号
        this.applyCustName = ''; // 客户名称
        this.applyCustNo = ''; // 客户编号
        // this.taskNodeName= '';
        // this.applySubNo= '';
        // this.custName_la= '';
        // this.certCode= '';


        // if (this.antiFlag == '03' || this.antiFlag == '04') {
        //   this.request();
        // } else {
        // }
        // 再次请求
        this.queryList();
      },
      // 重新查询
      resetQueryList() {
        // if (this.antiFlag == '03' || this.antiFlag == '04') {
        //   this.request();
        // } else {
        //   // 再次请求
        //   this.queryList();
        // }
        // // 再次请求
        this.queryList();
      },
      // 反欺诈申请编辑
      handleClickEdit(row) {
        // row 有值, 跳编辑
        // var routeParms;
        if (row) {
          // 跳转到编辑
          // routeParms = 'id=' + row.id + ';flag=edit'
          this.$router.push({
            name: 'AntiApplyEdit',
            params: {
              id: row.id,
              flag: 'edit'
            }
          });
          // console.log('编辑')
          // localStorage.setItem("antiApplyFlagEdit", JSON.stringify(routeParms));
          // this.$store.dispatch('addVisitedViews', {
          //   name: '反欺诈申请-编辑',
          //   path: '/AntiApplyEdit',
          //   flag: 'edit',
          //   params: '',
          //   StatefullPath: '/AntiApplyEdit'
          // })
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
          // this.$store.dispatch('addVisitedViews', {
          //   name: '反欺诈申请-新增',
          //   path: '/AntiApplyAdd',
          //   flag: '',
          //   params: '',
          //   StatefullPath: '/AntiApplyAdd'
          // })
        }
      },
      // 主管/专员审批 跳分屏  
      // 反欺诈申请列表  没有详情
      goDetail(row, event, column) {
        localStorage.setItem("AtaskInWaitting",JSON.stringify(row));
        this.$router.push({
          name: 'AntiApplyInf',
          params: {
            id: row.id,
            applyId:row.applyId,
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
        // this.pageSize=5;
        this.queryList();
      }
    }
  }

</script>
<style>
  /* 反欺诈 查询 */

  .anti-fraud {
    height: 100%;
  }

  .tableList {
    height: calc( 100% - 70px);
  }

  /* 容器 */

  .anti-fraud .content {
    width: 100%;
    height: calc( 100% - 344px);
    overflow: auto;
    position: relative;
  }

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
    height: 155px;
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
    background: #eef0f9 !important;
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
 height: 40px;
    background: #ededed;
    margin-bottom: 10px;
    background: #eef0f9;
    border: 1px solid #e6eaee;
    width: 100%;
    font-size: 16px;
    color: #1f2d3d;
    line-height: 40px;
  }

  /* 反欺诈 添加 提交 作废 */

  .anti-fraud .btn-div {
    padding: 10px;
    background: none;
    color: #333;
    border: none;
    text-align: right;
  }

  .anti-fraud .icon-add {
    background: url(../../../static/images/add.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }

  /* 添加按钮 */

  .anti-fraud .btn-add {
    cursor: pointer;
    display: inline-block;
    height: 40px;
    margin-right: 14px;
    float: right;
    line-height: 40px;
    background: transparent;
  }

  /* 头部 */

  .anti-fraud .title-bar {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #eef0f9;
    border: 1px solid #e6eaee;
    /*text-indent: 10px;*/
  }


  /* 分页 */

  .anti-fraud .el-pagination {
    text-align: center;
  }

  .anti-fraud .el-pagination .el-input {
    width: auto;
  }

  .anti-fraud .el-pagination .el-input__inner {
    width: 100px;
  }

  .anti-fraud .el-pagination .is-in-pagination .el-input__inner {
    width: 46px;
  }

  .anti-fraud .el-pagination button,
  .anti-fraud .el-pagination span:not([class*=suffix]) {
    line-height: 50px;
    height: 50px;
  }

  .anti-fraud .el-pagination .el-pager li {
    height: 50px;
    line-height: 50px;
  }

</style>
