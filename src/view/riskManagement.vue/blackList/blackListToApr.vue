    <!--风险管理 黑名单转入审批 -->
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
          <span class="keywordText">公司名称：</span>
          <el-input v-model.trim="params.param.blackCompany" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">电话：</span>
          <el-input v-model.trim="params.param.blackPhone" @keyup.enter.native='Rsearch' placeholder="请输入电话"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">地址：</span>
          <el-input v-model.trim="params.param.blackAddress" @keyup.enter.native='Rsearch' placeholder="请输入地址"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">申请状态： </span>
          <el-select v-model="params.param.blackAppState" placeholder="请选择">
            <el-option v-for="item in applyStatus" :key="item.value" :label="item.label" :value="item.value">
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
        黑名单客户列表
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
        <el-table-column prop="blackCertTypeTxt" label="证件类型" width="80">
        </el-table-column>
        <el-table-column prop="blackCertCode" label="证件号码" width="160">
        </el-table-column>
        <el-table-column prop="blackCompany" label="公司名称" width="150">
        </el-table-column>
        <el-table-column prop="blackAddress" label="地址" width="150">
        </el-table-column>
        <el-table-column prop="blackPhone" label="电话" width="105">
        </el-table-column>
        <el-table-column prop="blackRemark" label="原因说明" width="160">
        </el-table-column>
        <el-table-column prop="blackAppStateTxt" label="申请状态" width="120">
        </el-table-column>
        <el-table-column prop="appPerCode" label="申请人" width="120">
        </el-table-column>
        <el-table-column prop="appDate" label="申请时间" width="120">
        </el-table-column>
        <el-table-column prop="disposePerCode" label="经办人" width="100">
        </el-table-column>
        <el-table-column prop="disposePerDate" label="经办时间" min-width="100">
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
            <el-form-item class="mr" label="审批意见：" label-width="85px" >
              <el-input v-model="ruleForm.auditOpinion" type="textarea" resize='none' :rows="2"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="审批人：" label-width="85px">
              {{currentRow.auditPerCode}}
            </el-form-item>
            <el-form-item class="fr" label="审批时间：" label-width="110px">
              {{currentRow.auditDate}}
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
        ruleForm: {
          auditConclusion: '',
          auditOpinion: '',
          id: ''
        },
        rules: {
          auditConclusion: [{
            required: true,
            message: '请选择审批结论',
            trigger: 'change'
          }],
        },
        tableData: [{
          "appDate": "2018-09-21",
          "appPerCode": "",
          "auditConclusion": "01",
          "auditDate": "2018-09-21",
          "auditOpinion": "审批结论---",
          "auditPerCode": "",
          "blackAddress": "",
          "blackAppState": "03",
          "blackAppStateTxt": "审核同意",
          "blackCertCode": "98291829736712",
          "blackCertType": "01",
          "blackCertTypeTxt": "身份证",
          "blackCompany": "",
          "blackCustName": "客户名称改",
          "blackListType": "01",
          "blackListTypeTxt": "客户",
          "blackPhone": "",
          "blackRemark": "原因说明1",
          "id": "XpcfOaVaGb9Aep09eWETnhNsbKUMk7FK",
          "listId": "17686cff-edb1-47e7-9dec-2002163b0bad"
        }],
        currentRow: {},
        totalRecord: 0,
        params: {
          param: {
            blackListType: '', //	黑名单类型
            blackCustName: '', //	客户名称
            blackCertCode: '', //	证件号码
            blackCompany: '', //	单位名称
            blackPhone: '', //	电话
            blackAddress: '', //	地址
            blackAppState: '', //	申请状态
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
            value: '01',
            label: '申请中'
          },
          {
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
        apprResult: [{
            value: '01',
            label: '同意'
          },
          {
            value: '02',
            label: '拒绝'
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
          }
        }
      }
    },
    methods: {
      Rreset() {
        this.params.param.blackListType = ''; //黑名单类型
        this.params.param.blackCustName = ''; //客户名称
        this.params.param.blackCertCode = ''; //证件号码
        this.params.param.blackCompany = ''; //单位名称
        this.params.param.blackPhone = ''; //电话
        this.params.param.blackAddress = ''; //地址
        this.params.param.blackAppState = ''; //申请状态
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
        this.apprShow = true;
        // 重置按钮
        this.btnWord = '确定';
        this.loadSub = false;
        // 清空弹窗
        this.ruleForm.auditOpinion = '';
        this.ruleForm.auditConclusion = '';
        this.ruleForm.id = this.currentRow.id;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.btnWord = '提交中';
            this.loadSub = true;
            this.post("/blackAndGrey/auditOutApp", this.ruleForm).then(res => {
              if (res.statusCode == 200) {
                this._succe('提交成功！');
                this.apprShow = false;
                this.currentRow = {};
              } else {
                this._error(res.msg);
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //   查询列表
      inquire() {
        this.currentRow = {};
        this.post("/blackAndGrey/blackListInApps", this.params).then(res => {
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
      this.inquire();
    }
  }

</script>
