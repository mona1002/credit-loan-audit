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
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @row-dblclick="handleCurrentChange"
        border>
        <el-table-column type="index" label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" min-width="120">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" min-width="180">
        </el-table-column>
        <el-table-column prop="auditNamec" label="初审姓名" min-width="130">
        </el-table-column>
        <el-table-column prop="auditNamez" label="终审姓名" min-width="130">
        </el-table-column>
        <el-table-column prop="enterTime" label="进入本环节时间" min-width="180">
        </el-table-column>
        <el-table-column prop="assignName" label="分派人员" min-width="120">
        </el-table-column>
        <el-table-column prop="checkStateTxt" label="质检状态" min-width="100">
        </el-table-column>
        <el-table-column prop="instaskTypeTxt" label="任务类型" min-width="100">
        </el-table-column>
        <el-table-column prop="remark" label="备注" min-width="150">
        </el-table-column>
      </el-table>
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
        },
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
      '$route'(to, from) {
        if (to.path === '/commissioner') {
          this.mountedInf();
        }
      }
    },
    methods: {
      mountedInf() {
        this.taskList = JSON.parse(localStorage.getItem('QTWorkbenchPass'))
        this.params.processTemplateId = this.taskList.processTemplateId;
        this.params.taskNodeName = this.taskList.taskNodeName;
        this.params.taskStatus = this.taskList.taskStatus;
        this.inquire(this.params);
      },
      handleCurrentChange(val) {
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
        this.query = Object.assign({}, this.query, this.QTquery, val)
        // 存储质检结论参数
        localStorage.setItem("QTTaskWait", JSON.stringify(this.query));
        localStorage.setItem("FGQTTaskWait", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQT?checkApp_apply');
        this.$route.meta.newOne = true;
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
      },
      Rreset() {
        this.params.applySubno = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.params.instaskType = '';
        this.inquire(this.params);
      },
      Rsearch() { //  查询
        this.inquire(this.params);
      },
      inquire(pam) {
        //查询列表
        this.post("insConclusion/queryZJZYTaskList", pam).then(res => {
          if (res.statusCode == 200) {
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
