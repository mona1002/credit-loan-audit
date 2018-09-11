<template>
  <div class="taskWatting main-div">
    <!-- 质检  主管列表 -->
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
          <span class="keywordText">质检状态：</span>
          <el-select v-model="params.checkState" placeholder="请选择">
            <el-option v-for="item in QTSituation" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">任务类型：</span>
          <el-select v-model="params.instaskType" placeholder="请选择">
            <el-option v-for="item in TaskType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
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
      <span class="iconContainer">
        <span class="icon-item" @click='allotFinished'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">批量完成</span>
        </span>
        <span class="icon-item" @click='allotSubmit'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">批量提交</span>
        </span>
        <span class="icon-item" @click='getExcel'>
          <i class="el-icon appro"></i>
          <span class="ExcelIcon">导出Excel</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" border highlight-current-row @row-dblclick="handleCurrentChange"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applyMainNo" label="主进件编号" min-width="180">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" min-width="120">
        </el-table-column>
        <el-table-column prop="certTypeTxt" label="证件类型" min-width="180">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" min-width="180">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" min-width="130">
        </el-table-column>
        <el-table-column prop="auditNamec" label="初审姓名" min-width="130">
        </el-table-column>
        <el-table-column prop="auditDatec" label="初审日期" min-width="180">
        </el-table-column>
        <el-table-column prop="auditNamez" label="终审姓名" min-width="120">
        </el-table-column>
        <el-table-column prop="auditDatez" label="终审日期" min-width="180">
        </el-table-column>
        <el-table-column prop="insMemberName" label="合规专员" min-width="100">
        </el-table-column>
        <el-table-column prop="insDate" label="合规质检日期" min-width="130">
        </el-table-column>
        <el-table-column prop="checkStateTxt" label="质检状态" min-width="140">
        </el-table-column>
        <el-table-column prop="instaskTypeTxt" label="任务类型" min-width="100">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import baseU from '../../../../util/constant';
  import axios from 'axios'
  export default {
    data() {
      return {
        taskList: '',
        Date: this._getDate(),
        query: {
          id: '',
          ApplyId: "",
          taskId: '',
          processInstanceId: '',
          listType: '',
          instaskType: "",
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
          checkState: '',
          isSend: '1',
        },
        tableData: [],
        multipleSelection: [], //多选框
        multipleSelectionParams: [], //多选框
        QTSituation: [], //质检状态
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
        if (to.path === '/manager') {
          this.mountedInf();
        }
      },
    },
    methods: {
      mountedInf() {
        this.taskList = JSON.parse(localStorage.getItem('QTManagerWorkbenchPass'))
        this.params.processTemplateId = this.taskList.processTemplateId;
        this.params.taskNodeName = this.taskList.taskNodeName;
        this.params.taskStatus = this.taskList.taskStatus;
        this.getQTsituation(); //质检状态下拉框
        this.inquire(this.params);
      },
      getExcel() { //导出Excel
        // 不做权限判断
        axios({ // 用axios发送post请求
          method: 'post',
          url: 'export/ZJZGTasks', // 请求地址
          data: this.params, // 参数
          responseType: 'blob', // 表明返回服务器返回的数据类型
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          const blob = new Blob([res.data]);
          const fileName = 'ZJZG_' + this.Date + '.xls';
          const elink = document.createElement('a');
          elink.download = fileName;
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href);
          document.body.removeChild(elink);
        })
      },
      getQTsituation() { //获取质检状态下拉
        this.get("/system/getAllCheckState?" + Math.random())
          .then(res => {
            if (res.statusCode == 200) {
              this.QTSituation = res.data;
            } else {
              this.$message.error(res.msg);
            }
          });
      },
      SubmitParams() {
        this.multipleSelectionParams = [];
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var params = {
            applyId: '',
            taskId: '',
          };
          params.applyId = this.multipleSelection[i].applyId;
          params.taskId = this.multipleSelection[i].taskId;
          this.multipleSelectionParams.push(params);
        }
      },
      saveParams() {
        this.multipleSelectionParams = [];
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var params = {
            applyId: '',
            taskId: '',
            isSecondIns: ''
          };
          params.applyId = this.multipleSelection[i].applyId;
          params.taskId = this.multipleSelection[i].taskId;
          params.isSecondIns = this.multipleSelection[i].isSecondIns;
          this.multipleSelectionParams.push(params);
        }
      },
      allotSubmit() { //批量提交
        for (var i = 0; i < this.multipleSelection.length; i++) { //可以提交质检结果为初审一般差错、初审重大差错、终审一般差错、终审重大差错、初审建议优化、终审建议的单子
          if (this.multipleSelection[i].isSecondIns == 1) { //有质检二次标识的件(抽中常规又专纵)，只能够批量完成，不能批量提交
            this.$message.error('有不符合批量提交状态的进件！');
            return
          }
        }
        this.SubmitParams(); //提取入参 applyId taskId
        if (this.multipleSelectionParams == '') {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return
        }
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.post("/insConclusion/submitList", this.multipleSelectionParams)
            .then(res => {
              if (res.statusCode == 200) { //前端不做是否可点击哪个按钮判断，后端做判断，不符合返回msg，前端展示出来即可
                this.$message({
                  type: "success",
                  message: res.msg
                })
                this.tableData = [];
                this.inquire(this.params);
              } else {
                this.$message.error(res.msg);
              }
            });
        }).catch(() => {});
      },
      allotFinished() { //批量完成
        this.saveParams(); // 提取入参 applyId taskId isSecondIns
        if (this.multipleSelectionParams == '') {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return
        }
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.post("/insConclusion/addList", this.multipleSelectionParams).then(res => {
            if (res.statusCode == 200) {
              this.$message({
                type: "success",
                message: res.msg
              })
              this.inquire(this.params);
            } else {
              this.$message.error(res.msg);
            }
          });
        }).catch(() => {});
      },
      handleSelectionChange(val) { //列表勾选框
        this.multipleSelection = val;
      },
      handleCurrentChange(val) { //跳转页面
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
        this.query.taskId = val.taskId;
        this.query.processInstanceId = val.processInstanceId;
        this.query.instaskType = val.instaskType;
        this.query = Object.assign({}, this.query, this.QTquery, val)
        localStorage.setItem("QTManagerTW", JSON.stringify(this.query));
        localStorage.setItem("FGQTTaskWait", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQT?checkApp_check_manager');
        this.$route.meta.newOne = true;
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
      },
      Rreset() {
        this.params.applySubNo = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.params.instaskType = '';
        this.params.checkState = '';
        this.inquire(this.params);
      },
      Rsearch() {
        this.inquire(this.params);
      },
      inquire(pam) {
        // 查询列表
        this.post("insConclusion/queryZJZGTaskList", pam).then(res => {
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
