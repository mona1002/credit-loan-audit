<template>
  <!-- 专纵项抽单配置功能===业务状态接口-基础接口4 -->
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item date_picker" :offset="0">
          <span class="keywordText">审批结论时间： </span>
          <el-date-picker class='date_picker' v-model="ploanDate" value-format="yyyy-MM-dd" type="daterange"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">进件机构：</span>
          <el-select v-model="params.operOrgCodes" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in shopCodesSelection" :key="item.code" :label="item.name" :value="item.code">
              <span style="float: left">{{ item.name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">初终审编号：</span>
          <el-input v-model="params.userCode" placeholder="请输入初审人员"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-select v-model="params.proCodes" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in production" :key="item.code" :label="item.name" :value="item.code">
              <span style="float: left">{{ item.name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">业务状态： </span>
          <el-select v-model="params.busiState" placeholder="请选择">
            <el-option v-for="item in busiStateSelect" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">拒绝主原因：</span>
          <el-select v-model="params.mainReasonIds" placeholder="请选择" @change='selectSubRea(params.mainReasonIds)'>
            <el-option v-for="item in mainReason" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">拒绝子原因：</span>
          <el-select v-model="params.subReasonIds" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in secondReason" :key="item.id" :label="item.reasonName" :value="item.id">
            </el-option>
          </el-select>
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
        质检专纵项抽单配置
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='apportion'>
          <i class="el-icon addIcon"></i>
          <span class="el-icon-text">生成任务</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @selection-change="handleSelectionChange"
        border>
        <el-table-column type="selection" align='center' width="55">
        </el-table-column>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="ploanDate" label="审批结论时间" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="operOrgName" label="进件机构" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="auditNamec" label="初审姓名" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="auditCodec" label="初审编号" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="auditNamez" label="终审姓名" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="auditCodez" label="终审编号" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" align='center' min-width="130">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="业务状态" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="mainReasonName" label="拒绝主原因" align='center' min-width="220">
        </el-table-column>
        <el-table-column prop="subReasonName" label="拒绝子原因" align='center' min-width="160">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        ploanDate: '',
        tableData: [],
        production: [], //产品下拉
        mainReason: [], //拒绝主原因下拉
        secondReason: [], //拒绝子原因下拉
        shopCodesSelection: [], //进件机构下拉
        userInf: '',
        mainReasonId: '',
        busiState: '',
        selectedBusiState: '',
        allotParams: {
          operCode: '',
          operName: '',
          list: []
        },
        params: {
          ploanDateBegin: '', //审批结论开始时间
          ploanDateEnd: '', //审批结论结束时间
          operOrgCodes: '', //	进件机构       多选
          userCode: '', //	初终审编号
          proCodes: '', //	产品          多选
          busiState: '', //	业务状态     
          mainReasonIds: '', //	拒绝主原因      多选
          subReasonIds: '', //	拒绝子原因      多选
        },
        QTtime: '',
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数
        busiStateSelect: [],
      }
    },
    methods: {
      handleSelect(item) {
        this.busiState = this.selectedBusiState = item.name;
        this.params.busiState = item.code;
      },
      apportion() { //分配 按钮弹窗
        if (this.allotParams.list.length == 0) {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return
        }
        this.$confirm('您确定生成质检任务？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.allot();
        }).catch(() => {});
      },
      allot() { //批量转分派
        this.post("/insTask/addSpecialInsTask", this.allotParams).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '提交成功！'
            })
            this.inquire(this.params);
          } else {
            this.$message.error('批量转分派失败');
            this.inquire(this.params);
          }
        });
      },
      Rreset() { // 重置
        this.params.ploanDateBegin = ''; //审批结论开始时间
        this.params.ploanDateEnd = ''; //审批结论结束时间
        this.params.operOrgCodes = []; //	进件机构       多选
        this.params.userCode = ''; //	初终审编号
        this.params.proCodes = []; //	产品          多选
        this.params.busiState = ''; //	业务状态     
        this.params.mainReasonIds = ''; //	拒绝主原因     
        this.params.subReasonIds = []; //	拒绝子原因      多选
        this.secondReason = []; //	拒绝子原因     下拉内容
        this.ploanDate = ''; //审批结论时间数组
        this.busiState = '';
        this.selectedBusiState = '';
      },
      Rsearch() { // 查询
        this.busiState != this.selectedBusiState ? (this.busiState = this.selectedBusiState = this.params.busiState =
          "") : "";
        if (this.ploanDate == '' && this.params.operOrgCodes == '' && this.params.userCode == '' && this.params.proCodes ==
          '' && this.params.busiState == '' && this.params.mainReasonIds == '' && this.params.subReasonIds == '') {
          this.$message.error('请输入查询条件')
          return
        }
        this.ploanDate[0] ? this.params.ploanDateBegin = this.ploanDate[0] : this.params.ploanDateBegin = '';
        this.ploanDate[1] ? this.params.ploanDateEnd = this.ploanDate[1] : this.params.ploanDateEnd = '';
        this.inquire(this.params);
      },
      inquire(pam) { //查询列表     质检-复议结果查询功能
        this.busiState != this.selectedBusiState ? (this.busiState = this.selectedBusiState = this.params.busiState =
          "") : "";
        this.post("/insTask/getSpecialInsTaskList", pam).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      getSelection() { //查询所有下拉
        this.get("/insTask/initSpecialInsTaskPage?" + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.busiStateSelect = res.data.busiStateList; // 业务状态
            this.mainReason = res.data.mainReasonList; // 拒绝主原因
            this.shopCodesSelection = res.data.orgList; // 进件机构
            this.production = res.data.proList; // 产品名称
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      selectSubRea(id) { //查询子原因
        this.get("/credit/findNodeFirstChildren", {
          id: id
        }).then(res => {
          if (res.statusCode == 200) {
            this.secondReason = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      handleSelectionChange(val) {
        this.allotParams.list = val;
      },
    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.allotParams.operCode = this.userInf.userCode;
      this.allotParams.operName = this.userInf.userName;
      this.getSelection(); //获取所有下拉
    },
  }

</script>
