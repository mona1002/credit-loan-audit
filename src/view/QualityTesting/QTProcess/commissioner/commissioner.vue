<template>
  <div class="taskWatting main-div">
    <!-- 质检  专员列表 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="params.applySubno" placeholder="请输入进件编号"></el-input>
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
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @row-dblclick="handleCurrentChange" border>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="auditNamec" label="初审姓名" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="auditNamez" label="终审姓名" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="enterTime" label="进入本环节时间" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="assignName" label="分派人员" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="checkStateTxt" label="质检状态" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="instaskTypeTxt" label="任务类型" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="remark" label="备注" align='center' min-width="150">
        </el-table-column>
      </el-table>
      <!-- 分页  -->
      <!-- <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
  import baseU from '../../../../util/constant';
  export default {
    data() {
      return {
        query: {
          id: '',
          ApplyId: "",
          taskId: '',
          processInstanceId: '',
          listType: '',
          instaskType: '',
        },
        QTquery: {
          id: '',
          matchApplyId: "",
          applySubNo: '',
          businessId: '',
        },
        taskList: '',
        tableData: [],
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        params: {
          processTemplateId: '',
          taskNodeName: '',
          taskStatus: '',
          applySubno: '',
          custName_la: '',
          certCode: '',
          instaskType: '',
          //   pageNum: '', //页数（第几页）
          //   pageSize: '', //页面显示行数
        },
        // currentPage: 1, //分页选中页
        // pageCount: 10, // 每页显示条数
        // totalRecord: 0, //总条数
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
        if (to.path === '/commissioner') {
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
        this.taskList = JSON.parse(localStorage.getItem('QTWorkbenchPass'))
        this.params.processTemplateId = this.taskList.processTemplateId;
        this.params.taskNodeName = this.taskList.taskNodeName;
        this.params.taskStatus = this.taskList.taskStatus;
        this.inquire(this.params);
        // QTWorkbenchPass
        //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
        //   this.params.applySubno = this.params.applySubno.replace(this.reg, this.reVal)
        //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
        //   this.params.pageNum = this.currentPage, //页数（第几页）
        //     this.params.pageSize = this.pageCount, //页面显示行数
      },
      handleCurrentChange(val) {
        console.log(2, val)
        // 根据两个条件去判断，首先根据 isSecondIns
        // 如果是 1 ，显示常规又专项
        // 如果不是： 根据instaskType 判断， instaskType=00 时：常规质检 ， instaskType=01 或 02：专项质检
        if (val.isSecondIns == '1') {
          this.query.listType = '常规又专项质检';
        } else if (val.isSecondIns == '0') {
          if (val.instaskType == '00') {
            this.query.listType = '常规质检';
          } else if (val.instaskType == '01' || val.instaskType == '02') {
            this.query.listType = '专项质检';
          }
        }
        this.QTquery.id = this.query.id = val.id;
        this.QTquery.matchApplyId = this.query.ApplyId = val.applyId;
        this.QTquery.applySubNo = val.applySubno;
        this.QTquery.businessId = val.businessId;
        this.query.taskId = val.taskId;
        this.query.processInstanceId = val.processInstanceId;
        this.query.instaskType = val.instaskType;
        // 存储质检结论参数
        localStorage.setItem("QTTaskWait", JSON.stringify(this.query));
        localStorage.setItem("FGQTTaskWait", JSON.stringify(val));
        this.$router.push('/MatchingInfQT?checkApp_apply');
        this.$route.meta.newOne = true;
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.QTquery));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
        // this.params.pageNum = val;
        // this.inquire(this.params);
      },
      Rreset() {
        this.params.applySubno = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.params.instaskType = '';
        this.inquire(this.params);
      },
      Rsearch() { //  查询
        // this.params.pageNum = this.currentPage = 1;
        this.inquire(this.params);
      },
      inquire(pam) {
        //查询列表
        this.post("insConclusion/queryZJZYTaskList", pam).then(res => {
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