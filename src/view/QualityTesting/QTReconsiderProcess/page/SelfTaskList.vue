<template>
  <div class="AntiCaseNum IntegratedQuery">
    <!-- 质检复议流程 初终审本人任务列表 -->
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <ul>
          <li>
            <p>
              <label> 进件编号 </label>
              <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
            </p>
            <p>
              <label> 客户名称</label>
              <el-input v-model="params.custName_la" placeholder="请输入客户名称"></el-input>
            </p>
            <p>
              <label> 证件号码</label>
              <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
            </p>
          </li>
          <li>
            <p>
            </p>
            <p>
            </p>
            <p class="btn_wrap">
              <el-button class="btn" type="primary" style="marginLeft:228px" @click="Rsearch">查询</el-button>
              <el-button class="btn" type="primary" @click="Rreset">重置</el-button>
            </p>
          </li>
        </ul>
      </div>
      <div class="title">
        <h1>进件列表</h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" height="100%" @current-change="handleCurrentChange" border>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="applySubno" label="进件编号" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="mobile" label="质检结果" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="appDate" label="差错类型" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="proName" label="差错描述" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="operOrgName" label="备注" align='center' min-width="120">
          </el-table-column>
        </el-table>
        <!-- 分页  -->
        <!-- <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../../../header.vue';
  import baseU from '../../../../util/constant';
  export default {
    data() {
      return {
        taskList: "",
        query: {
          id: '',
          ApplyId: "",
          taskId: '',
          processInstanceId: '',
          listType: '',
        },
        QTquery: {
          id: '',
          matchApplyId: "",
          applySubNo: ''
        },
        userInf: null,
        tableData: [],
        // tableData: [{
        //   checkResult: '01',
        //   isSecondIns: "1",
        //   appType: null,
        //   applyId: "879d8e00-6d3f-4e07-87f5-0f0c675c06e1",
        //   applyIdList: null,
        //   applyMainNo: null,
        //   applySubNo: "201511190111013763",
        //   assignCode: null,
        //   assignName: "system",
        //   auditCodec: null,
        //   auditCodez: null,
        //   auditDatec: null,
        //   auditDatez: null,
        //   auditNamec: "李翠萍",
        //   auditNamez: "刘杰",
        //   certCode: "431129198001010178",
        //   checkState: "01",
        //   checkStateTxt: "待质检员审批",
        //   certType: null,
        //   createTime: null,
        //   custCode: null,
        //   custName: "0508测试D009",
        //   enterTime: "2018-05-23 11:06:25",
        //   id: "Fwn2yzQIZ1GS8Czoqf7g4MoF1TVEeSGB",
        //   insDate: null,
        //   insMemberName: null,
        //   instaskType: "00",
        //   instaskTypeTxt: "常规质检",
        //   lastModifyTime: null,
        //   mobile: null,
        //   proCode: null,
        //   proName: null,
        //   processInstanceId: null,
        //   processInstanceIdSecond: null,
        //   remark: null,
        //   taskId: '98988',
        // }],
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        params: {
          processTemplateId: '',
          taskNodeName: '',
          taskStatus: '',
          applySubNo: '',
          custName_la: '',
          certCode: '',
          //   pageNum: '', //页数（第几页）
          //   pageSize: '', //页面显示行数
        },
        // currentPage: 1, //分页选中页
        // pageCount: 10, // 每页显示条数
        // totalRecord: 0, //总条数
      }
    },
    methods: {
      //   handleSizeChange(val) {
      //     this.params.pageSize = val;
      //     this.params.pageNum = 1;
      //     // this.getInf(this.params);
      //     this.inquire(this.params);
      //   },
      handleCurrentChange(val) {
        // this.params.pageNum = val;
        // this.inquire(this.params);
        this.QTquery.id = this.query.id = val.id;
        this.QTquery.matchApplyId = this.query.ApplyId = val.applyId;
        this.QTquery.applySubNo = val.applySubno;
        this.query.taskId = val.taskId;
        this.query.processInstanceId = val.processInstanceId;
        // 存储质检结论参数
        localStorage.setItem("QTSelfTW", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQT?checkApp_trial_self');
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.QTquery));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
      },
      Rreset() {
        this.params.applySubNo = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.inquire(this.params)
      },
      Rsearch() {
        // this.params.pageNum = this.currentPage = 1;
        this.inquire(this.params)
      },
      inquire(pam) {
        // 查询列表
        this.post("insConclusion/queryCZSBRTaskList", pam).then(res => {
          if (res.statusCode == 200) {
            // for (var i = 0; i < res.data.length; i++) {
            //   if (res.data[i].certCode) {
            //     res.data[i].certCode = res.data[i].certCode.replace(this.reg, this.reVal);
            //   }
            //   if (res.data[i].mobile) {
            //     res.data[i].mobile = res.data[i].mobile.replace(this.Telreg, this.telVal);
            //   }
            // }
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
    },
    mounted() {
      this.taskList = JSON.parse(localStorage.getItem('QTTrialSelftWorkbenchPass'))
      this.params.processTemplateId = this.taskList.processTemplateId;
      this.params.taskNodeName = this.taskList.taskNodeName;
      this.params.taskStatus = this.taskList.taskStatus;
      this.inquire(this.params)
      // QTTrialSelftWorkbenchPass
      //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
      //   this.params.applySubno = this.params.applySubno.replace(this.reg, this.reVal)
      //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
      //   this.params.pageNum = this.currentPage, //页数（第几页）
      //     this.params.pageSize = this.pageCount, //页面显示行数
    },
    components: {
      myHead
    }
  }

</script>
<style scoped>
  .AntiCaseNum {
    width: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
    /* 统一导航 --去掉高度*/
    height: 100%;
  }

  .AntiCaseNum label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    width: 126px;
    height: 20px;
    margin-right: 10px;
  }

  .AntiCaseNum i {
    color: #ff7676;
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
    font-style: normal;
  }

  .content {
    padding: 30px 30px;
    width: 100%;
    height: calc( 100% - 70px);
    /* 统一导航 */
    /* height: 100%; */
  }

  .search {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    padding-bottom: 20px;
    height: auto;
  }

  .search li {
    clear: both;
    height: 55px;
  }

  .search li p {
    width: 33.3%;
    float: left;
    margin-top: 20px;
  }

  .btn_wrap {
    margin-top: 20px;
    height: 33px;
    width: calc( 66.6% + 394px);
  }

  .btn {
    border-radius: 8px;
    width: 79px;
    font-size: 14px;
    line-height: 33px;
    padding: 0;
  }

  .noBk {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    opacity: 0.75;
    background: #ebedf8;
    border-radius: 6px;
    width: 100%;
    height: 50px;
  }

  .title h1 {
    font-size: 16px;
    color: #1f2d3d;
    padding-left: 37px;
    text-align: left;
    line-height: 50px;
    padding-right: 37px;
  }

  .icon {
    margin-right: 5px;
    vertical-align: middle;
    font-size: 30px;
  }

  /* 综合查询页面加上分页pad-bottom 改为20px*/

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px 25px 20px 25px;
    width: 100%;
    height: calc( 100% - 255px);
  }

  .paging {
    /* margin-top: 15px; */
    text-align: center;
    /* 统一导航 */
    margin-top: 28px;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
