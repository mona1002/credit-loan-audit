<template>
  <div class="taskWatting main-div">
    <!-- 质检复议流程-质检主管页面- 复议任务列表（首次） -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model="params.custName_la" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">任务类型：</span>
          <el-select v-model="params.instaskType" placeholder="请选择">
            <el-option v-for="item in TaskType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
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
        质检信息
      </span>
      <!-- <span class="iconContainer">
        <span class="icon-item" @click='allotFinished'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">批量完成</span>
        </span>
        <span class="icon-item" @click='allotSubmit'>
          <i class="el-icon appro"></i>
          <span class="el-icon-text">批量提交</span>
        </span>
      </span> -->
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border @row-dblclick="handleCurrentChange">
        <el-table-column type="selection" align='center' width="55">
        </el-table-column>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applyMainNo" label="主进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="certTypeTxt" label="证件类型" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="auditNamec" label="初审姓名" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="auditDatec" label="初审日期" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="auditNamez" label="终审姓名" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="auditDatez" label="终审日期" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="insMemberName" label="合规专员" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="insDate" label="合规质检日期" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="checkStateTxt" label="质检状态" align='center' min-width="220">
        </el-table-column>
        <el-table-column prop="checkResultTxt" label="质检结果" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="instaskTypeTxt" label="任务类型" align='center' min-width="100">
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
</template>
<script>
  import baseU from '../../../../util/constant';
  export default {
    data() {
      return {
        taskList: '',
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
          instaskType: '',
          isSend: '1',
          checkType: '02'
          //   pageNum: '', //页数（第几页）
          //   pageSize: '', //页面显示行数
        },
        // currentPage: 1, //分页选中页
        // pageCount: 10, // 每页显示条数
        // totalRecord: 0, //总条数
        tableData: [],
        // tableData: [{
        //   checkResult: '07',
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
        TaskType: [{ //任务类型
          value: '00',
          label: '常规质检'
        }, {
          value: '01',
          label: '专项质检'
        }, {
          value: '02',
          label: '纵向质检'
        }],
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/ReManagerTaskList') {
          this.mountedInf();
        }
      }
    },
    methods: {
      //   handleSizeChange(val) {
      //     this.params.pageSize = val;
      //     this.params.pageNum = 1;
      //     // this.getInf(this.params);
      //     this.inquire(this.params);
      //   },
      mountedInf() {
        this.taskList = JSON.parse(localStorage.getItem('QTReWorkbenchPass'))
        this.params.processTemplateId = this.taskList.processTemplateId;
        this.params.taskNodeName = this.taskList.taskNodeName;
        this.params.taskStatus = this.taskList.taskStatus;
        this.inquire(this.params);
        // QTManagerWorkbenchPass
        //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
        //   this.params.applySubNo = this.params.applySubNo.replace(this.reg, this.reVal)
        //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
        //   this.params.pageNum = this.currentPage, //页数（第几页）
        //     this.params.pageSize = this.pageCount, //页面显示行数
      },
      handleCurrentChange(val) { //跳转页面
        this.QTquery.id = this.query.id = val.id;
        this.QTquery.matchApplyId = this.query.ApplyId = val.applyId;
        this.QTquery.applySubNo = val.applySubno;
        this.query.taskId = val.taskId;
        this.query.processInstanceId = val.processInstanceId;
        this.query = Object.assign({}, this.query, this.QTquery, val)
        // 存储质检结论参数
        localStorage.setItem("QTReManagerTW", JSON.stringify(this.query));
        localStorage.setItem("FGQTTaskWait", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQT?checkApp_check_recon_manager');
        this.$route.meta.newOne = true;
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
        // this.params.pageNum = val;
        // this.inquire(this.params);
      },
      Rreset() {
        this.params.applySubNo = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.params.instaskType = '';
        this.inquire(this.params);
      },
      Rsearch() {
        // this.params.pageNum = this.currentPage = 1;
        this.inquire(this.params);
      },
      inquire(pam) {
        // 查询列表
        this.post("insConclusion/queryZJZGTaskList", pam).then(res => {
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
      this.mountedInf();
    },
  }

</script>
