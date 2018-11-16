<!--风险管理 黑名单转出审批 -->
<template>
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">黑名单类型： </span>
          <el-select v-model="params.param.blackListType" placeholder="请选择">
            <el-option v-for="item in listType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.param.blackCustName" @keyup.enter.native='Rsearch' placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.param.blackCertCode" @keyup.enter.native='Rsearch' placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">单位名称：</span>
          <el-input v-model.trim="params.param.blackCompany" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">电话：</span>
          <el-input v-model.trim="params.param.blackPhone" @keyup.enter.native='Rsearch' placeholder="请输入电话"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">申请状态： </span>
          <el-select v-model="params.param.blackAppState" placeholder="请选择">
            <el-option v-for="item in applyStatus" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">加黑类型：</span>
          <el-select v-model="params.param.inReasons" placeholder="请选择">
            <el-option v-for="item in inReasons" :key="item.value" :label="item.label" :value="item.value">
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
        黑名单列表
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='appr'>
          <i class="el-icon brokenLineIcon"></i>
          <span class="el-icon-text">审核</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row border @row-click='getCurrentRow'>
        <el-table-column type="index" label=序号 width="55">
        </el-table-column>
        <el-table-column prop="blackListTypeTxt" label="黑名单类型" width="100">
        </el-table-column>
        <el-table-column prop="blackCustName" label="客户名称" width="100">
        </el-table-column>
        <el-table-column prop="blackCertCode" label="证件号码" width="160">
        </el-table-column>
        <el-table-column prop="blackCompany" label="单位名称" width="150">
        </el-table-column>
        <el-table-column prop="blackAddress" label="地址" width="150">
        </el-table-column>
        <el-table-column prop="blackPhone" label="电话" width="105">
        </el-table-column>
        <el-table-column prop="inReasonsTxt" label="加黑类型" width="130">
        </el-table-column>
        <el-table-column prop="blackAppStateTxt" label="申请状态" width="120">
        </el-table-column>
        <el-table-column prop="blackRemark " label="申请说明" width="160">
        </el-table-column>
        <el-table-column prop="appPerCode" label="申请人" width="120">
        </el-table-column>
        <el-table-column prop="appDate" label="申请时间" width="120">
        </el-table-column>
        <el-table-column prop="auditPerCode" label="审批人" width="120">
        </el-table-column>
        <el-table-column prop="auditDate" label="审批时间" width="120">
        </el-table-column>
        <el-table-column prop="auditOpinion" label="审批意见">
        </el-table-column>
        <!-- <el-table-column label="证件号码" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.certCode |cerCodeStar }}</span>
          </template>
        </el-table-column> -->
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="params.pageParam.pageNum"
          :page-sizes="[10, 20,50]" :page-size="params.pageParam.pageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="totalRecord">
        </el-pagination>
      </div>
    </div>
    <!-- 审核 -->
    <div class="Height_240">
      <el-dialog title="发起复议" :visible.sync="apprShow" :modal="false ">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <div class="bfc">
            <el-form-item label="审批结论：" label-width="85px" prop="auditConclusion" class="fl">
              <el-select v-model="ruleForm.auditConclusion" placeholder="请选择">
                <el-option v-for="item in apprResult" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="dialog_textarea">
            <el-form-item class="mr" label="审批意见：" prop="auditOpinion" label-width="85px">
              <b class="hint_word Working_input" v-show="ruleForm.auditOpinion&&ruleForm.auditOpinion.length>=300">
                输入长度不能超过300</b>
              <el-input v-model="ruleForm.auditOpinion" type="textarea" :maxlength="300" resize='none' :rows="2"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="审批人：" label-width="85px">
              {{userInf.userCode}}
            </el-form-item>
            <el-form-item class="fr" label="审批时间：" label-width="110px">
              {{systermTime | dateFilter(true) }}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="apprShow=false">取 消</el-button>
          <el-button type="primary" :loading="loadSub" @click="submitForm('ruleForm')">
            {{btnWord}}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        apprShow: false,
        btnWord: '确定',
        loadSub: false,
        systermTime: 0,
        userInf: '',
        ruleForm: {},
        rules: {
          auditConclusion: [{
            required: true,
            message: '请选择审批结论',
            trigger: 'change'
          }],
          auditOpinion: [{
            required: true,
            message: '请选择审说明',
            trigger: 'blur'
          }],
        },
        tableData: [],
        currentRow: {},
        totalRecord: 0,
        params: {
          isAudit: "y",
          param: {
            blackListType: '', //	黑名单类型
            blackCustName: '', //	客户名称
            blackCertCode: '', //	证件号码
            blackCompany: '', //	单位名称
            blackPhone: '', //	电话
            blackAppState: '', //	申请状态
            inReasons: '', //加黑类型(原因)
            appPerCode: ''
          },
          pageParam: {
            pageNum: 1, //	页码
            pageSize: 10, //	条数
          }
        },
        listType: [{
            value: '01',
            label: '客户'
          },
          {
            value: '02',
            label: '电话'
          },
          {
            value: '03',
            label: '地址'
          },
          {
            value: '04',
            label: '单位名称'
          }
        ],
        applyStatus: [{
            value: '02',
            label: '待审核'
          },
          {
            value: '03',
            label: '审核同意'
          },
          {
            value: '04',
            label: '审核拒绝'
          }
        ],
        inReasons: [{ //加黑类型
            value: '01',
            label: '代办包装'
          },
          {
            value: '02',
            label: '组团骗贷'
          },
          {
            value: '03',
            label: '资料虚假'
          },
          {
            value: '04',
            label: '伪冒申请'
          },
          {
            value: '05',
            label: '其他欺诈'
          }
        ],
        apprResult: [{
            value: '01',
            label: '审批通过'
          },
          {
            value: '02',
            label: '审批拒绝'
          }
        ],
        Routes: this.$router.options.routes[55],
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/blackListToApr') {
          if (!this.Routes.closed) {
            this.params.pageParam.pageSize = 10;
            this.Rreset();
            this.Routes.closed = true;
            this.getSystermTime();
          }
        }
      }
    },
    methods: {
      getSystermTime() { // 获取系统时间-质检结论-质检日期取值---基础接口
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.systermTime = res.data;
          }
        })
      },
      Rreset() {
        this.params.param.blackListType = ''; //黑名单类型
        this.params.param.blackCustName = ''; //客户名称
        this.params.param.blackCertCode = ''; //证件号码
        this.params.param.blackCompany = ''; //单位名称
        this.params.param.blackPhone = ''; //电话
        this.params.param.blackAppState = ''; //申请状态
        this.currentRow = {};
        this.params.pageParam.pageNum = 1; //	页码
        this.inquire();
      },
      Rsearch() {
        this.inquire();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.params.pageParam.pageNum = 1; //	页码
        this.params.pageParam.pageSize = val; //	条数
        this.inquire();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.params.pageParam.pageNum = val; //	页码
        this.inquire();
      },
      getCurrentRow(val) {
        this.currentRow = val;
      },
      // 审核
      appr() {
        if (JSON.stringify(this.currentRow) == '{}') {
          this.$confirm('请选择一条记录！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return
        }
        if (this.currentRow.blackAppStateTxt != '待审核') {
          this._error('只能处理待审核的任务！');
          return
        }
        this.apprShow = true;
        // 重置按钮
        this.btnWord = '确定';
        this.loadSub = false;
        // 清空弹窗
        this.$refs['ruleForm'] ? this.$refs['ruleForm'].resetFields() : '';
        this.ruleForm.id = this.currentRow.id;
        this.ruleForm.auditPerCode = this.userInf.userCode;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.btnWord = '提交中';
            this.loadSub = true;
            this.post("/blackAndGrey/auditOutApp", this.ruleForm).then(res => {
              if (res.statusCode == 200) {
                this._succe('提交成功！');
                this.currentRow = {};
              } else {
                this._error(res.msg);
              }
              this.apprShow = false;
              this.inquire();
            });
          } else {
            return false;
          }
        });
      },
      //   查询列表
      inquire() {
        this.currentRow = {};
        this.post("/blackAndGrey/blackListOutApps", this.params).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data.recordList;
            this.totalRecord = res.data.totalRecord; //totalRecord
            this.params.pageParam.pageNum = res.data.pageNum; //	页码
            this.params.pageParam.pageSize = res.data.pageSize; //	条数
          } else {
            this.totalRecord = 0;
            this.params.pageParam.pageNum = 1; //	页码
            this.params.pageParam.pageSize = 10; //条数
            this.tableData = [];
            this._error(res.msg);
          }
        })
      },
    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.params.param.appPerCode = this.userInf.userCode
      this.inquire();
      this.getSystermTime();
    }
  }

</script>
