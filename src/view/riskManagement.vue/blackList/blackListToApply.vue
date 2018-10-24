<!--风险管理 黑名单转入申请 -->
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
        <span class="icon-item" @click='add'>
          <i class="el-icon addIcon"></i>
          <span class="el-icon-text">添加</span>
        </span>
        <span class="icon-item" @click='delAndSubmit("del")'>
          <i class="el-icon deleteIcon"></i>
          <span class="el-icon-text">删除</span>
        </span>
        <span class="icon-item" @click='delAndSubmit("sub")'>
          <i class="el-icon tijiao"></i>
          <span class="el-icon-text">提交</span>
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
        <el-table-column prop="inReasonsTxt" label="加黑类型" width="105">
        </el-table-column>
        <el-table-column prop="blackAppStateTxt" label="申请状态" width="120">
        </el-table-column>
        <el-table-column prop="blackRemark " label="申请说明" width="160">
        </el-table-column>
        <el-table-column prop="appPerCode" label="申请人" width="120">
        </el-table-column>
        <el-table-column prop="appDate" label="申请时间" width="120">
        </el-table-column>
        <el-table-column prop="auditConclusionTxt" label="审批结论" min-width="120">
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
    <!-- 添加 -->
    <div class="Height_240">
      <el-dialog title="添加黑名单转出申请" :visible.sync="addShow" :modal="false ">
        <el-form :model="addObj" :rules="addRules" ref="addObj">
          <el-form-item label="黑名单类型：" :label-width='label_115' prop="blackListType">
            <el-select v-model="addObj.blackListType" placeholder="请选择" @change="addReset('addObj')">
              <el-option v-for="item in addListType" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户名称：" :label-width='label_115' v-if="addObj.blackListType=='01'" prop="blackCustName">
            <el-input v-model.trim="addObj.blackCustName" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <div class="bfc">
            <el-form-item label="证件号码：" class="fl width_50Per" v-if="addObj.blackListType=='01'" :label-width='label_115'
              prop="blackCertCode">
              <el-input v-model.trim="addObj.blackCertCode" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
              <i class="el-icon-search addIcon_search" @click="getAddInf"></i>
            </el-form-item>
            <el-form-item label="电话：" class="fl width_50Per" v-if="addObj.blackListType=='02'" :label-width='label_115'
              prop="blackPhone">
              <el-input v-model.trim="addObj.blackPhone" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
            </el-form-item>
            <el-form-item label="加黑类型：" class="fl width_50Per" v-if='addObj.blackListType' :label-width='label_115'
              prop="inReasons">
              <el-select v-model="addObj.inReasons" multiple collapse-tags placeholder="请选择">
                <el-option v-for="item in inReasons" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="单位名称：" :label-width='label_115' v-if="addObj.blackListType=='03'" prop="blackCompany">
            <el-input v-model.trim="addObj.blackCompany" @keyup.enter.native='Rsearch' placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item class="mr" label="申请说明：" v-if='addObj.blackListType' :label-width="label_115" prop="blackRemark">
            <b class="hint_word Working_input" v-show="addObj.blackRemark&&addObj.blackRemark.length>=300">
              输入长度不能超过20</b>
            <el-input v-model="addObj.blackRemark" :maxlength='300' type="textarea" resize='none' :rows="2"></el-input>
          </el-form-item>
          <div class="bfc margin_top_20" v-if="addObj.blackListType">
            <el-form-item class="fl width_50Per" label="申请人：" :label-width='label_115'>
              {{userInf.userCode}}
            </el-form-item>
            <el-form-item class="fl" label="申请时间：" label-width="110px">
              {{systermTime | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addShow=false">取 消</el-button>
          <el-button type="primary" :loading="addBlackLoad" @click="addBlackList('addObj')">
            {{blackbtnWord}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 添加弹窗-搜索按钮 -->
    <div class="Height_600">
      <el-dialog title="请选择一条信息" :visible.sync="addInfShow" width='900px' height='900' :modal="false ">
        <el-row class="row row1" type="flex">
          <el-col :span="6" class="search-item">
            <span>客户名称：</span>
            <el-input v-model.trim="addSearchForm.custName" @keyup.enter.native='Rsearch' placeholder="请输入证件号码"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <span>证件号码：</span>
            <el-input v-model.trim="addSearchForm.certCode" @keyup.enter.native='Rsearch' placeholder="请输入证件号码"></el-input>
          </el-col>
          <el-col :span="6" class="search-item">
            <el-button class="btn query" type="primary" @click="addRsearch">查询</el-button>
            <el-button class="btn reset" @click="addRreset">重置</el-button>
          </el-col>
        </el-row>
        <el-table :data="addTableData" style="width: 100%" height="230" highlight-current-row border @row-click='getAddCurrentRow'>
          <el-table-column type="index" label=序号 width="55">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" width="100">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" width="160">
          </el-table-column>
          <el-table-column prop="certTypeTxt" label="证件类型" width="80">
          </el-table-column>
          <el-table-column prop="operCode" label="进件人" width="150">
          </el-table-column>
          <el-table-column prop="operOrgCode" label="进件机构" width="130">
          </el-table-column>
          <el-table-column prop="appDate" label="进件时间">
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addInfShow=false">取 消</el-button>
          <el-button type="primary" :loading="addInfLoad" @click="addSearchAdd">
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
        label_115: "115px",
        apprShow: false,
        addShow: false,
        addInfShow: false,
        addBlackLoad: false,
        addInfLoad: false,
        checkShow: false,
        btnWord: '确定',
        blackbtnWord: "确定",
        loadSub: false,
        addObj: {},
        addSearchForm: {},
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
        addRules: {
          blackListType: [{
            required: true,
            message: '请选择黑名单类型',
            trigger: 'change'
          }],
          inReasons: [{
            required: true,
            message: '请选择加黑类型',
            trigger: 'change'
          }],
          blackCustName: [{
            required: true,
            message: '请输入客户名称',
            trigger: 'blur'
          }],
          blackCertCode: [{
            required: true,
            message: '请输入证件号码',
            trigger: 'blur'
          }],
          blackPhone: [{
            required: true,
            message: '请输入电话号码',
            trigger: 'blur'
          }, {
            pattern: /^[0-9\-]{0,20}$/,
            message: '目前只支持中国大陆的手机号码'
          }],
          blackCompany: [{
            required: true,
            message: '请输入单位名称',
            trigger: 'blur'
          }],
          blackRemark: [{
            required: true,
            message: '请输入申请说明',
            trigger: 'blur'
          }],
        },
        addTableData: [],
        tableData: [],
        currentRow: {},
        AddCurrentRow: {},
        totalRecord: 0,
        userInf: '',
        params: {
          param: {
            blackListType: '', //	黑名单类型
            blackCustName: '', //	客户名称
            blackCertCode: '', //	证件号码
            blackCompany: '', //	单位名称
            blackPhone: '', //	电话
            blackAppState: '', //	申请状态
            inReasons: '', //加黑类型(原因)
            // appPerCode:this.userInf.userCode//申请人
            // appPerCode:this.userInf//申请人
            // appPerCode:this.userInf.userCode//申请人
            appPerCode: '' //申请人
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
        addListType: [{
            value: '01',
            label: '客户'
          },
          {
            value: '02',
            label: '电话'
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
            label: '同意'
          },
          {
            value: '02',
            label: '拒绝'
          }
        ],
        Routes: this.$router.options.routes[52],
        systermTime: 0,
        landLinePhoneLength: /^[0-9\-]{0,20}$/,
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/blackListOutApr') {
          if (!this.Routes.closed) {
            this.params.pageParam.pageSize = 10;
            this.Rreset();
            this.getSystermTime();
            this.Routes.closed = true;
          }
        }
      }
    },
    methods: {
      confirm() {
        this.$confirm('请选择一条记录！', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).catch(() => {});
      },
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
        // this.params.param.blackAddress = ''; //地址
        this.params.param.blackAppState = ''; //申请状态
        this.currentRow = {};
        this.params.pageParam.pageNum = 1; //	页码
        this.inquire();
      },
      addRreset() {
        this.addTableData = [];
        this.addSearchForm = {};
      },
      Rsearch() {
        this.inquire();
      },
      addRsearch() {
        if (!this.addSearchForm.custName && !this.addSearchForm.certCode) {
          this._error('请输入查询条件！')
          return
        }
        this.post('/blackAndGrey/custInfos', this.addSearchForm).then(res => {
          if (res.statusCode == 200) {
            this.addTableData = res.data;
          } else {
            this.addTableData = [];
          }
        })
      },
      addSearchAdd() {
        if (JSON.stringify(this.AddCurrentRow) == '{}') {
          this.confirm();
          return
        }
        this.addObj.blackCustName = this.AddCurrentRow.custName;
        this.addObj.blackCertCode = this.AddCurrentRow.certCode;
        this.addInfShow = false;
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
      getAddCurrentRow(val) {
        this.AddCurrentRow = val;
      },
      // 添加
      add() {
        this.addShow = true;
        this.addObj = {};
        this.addObj.appPerCode = this.userInf.userCode;
        this.addBlackLoad = false;
        this.blackbtnWord = '确定';
      },
      getAddInf() {
        this.addInfShow = true;
        this.addSearchForm = {};
        this.addTableData = [];
      },
      addReset(formName) {
        let blackListType = this.addObj.blackListType;
        this.$refs[formName].resetFields();
        this.addObj.blackListType = blackListType;
      },
      // 添加 - 信息
      addBlackList(formName) {
        this.addBlackLoad = true;
        this.blackbtnWord = '添加中';
        // let listId = ''; //确认从哪取值之后删掉
        // listId 待确认从哪取值
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addObj.inReasons = this.addObj.inReasons.join(',') //转换入参格式
            // this.post('http://10.1.26.141:8080/riskManagement/blackAndGrey/blackListInApp', this.addObj).then(res => {
            this.post('/blackAndGrey/blackListInApp', this.addObj).then(res => {
              if (res.statusCode == 200) {
                this._succe(res.msg);
              } else {
                this._error(res.msg)
              }
              this.addShow = false;
              this.inquire();
            })
          } else {
            return false;
          }
        });
      },
      // 删除 + 提交
      delAndSubmit(proType) {
        if (JSON.stringify(this.currentRow) == '{}') {
          this.confirm();
          return
        }
        if (this.currentRow.blackAppStateTxt != '申请中') {
          this._error('只能处理申请中的任务！')
          return
        }
        let title = '';
        if (proType == 'del') {
          this.currentRow.blackAppStateTxt == '申请中' ? title = '确定要删除当前项目？' : title = '只能删除状态为申请中的记录！';
        } else if (proType == 'sub') {
          this.currentRow.blackAppStateTxt == '申请中' ? title = '确定要提交当前项目？' : title = '只能提交状态为申请中的记录！';
        }
        this.$confirm(title, '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          if (proType == 'del') { //删除
            this.Delete('/blackAndGrey/blackListInApp/' + this.currentRow.id).then(res => {
              if (res.statusCode == 200) {
                this._succe(res.msg)
                this.inquire();
              } else {
                this._error(res.msg);
              }
            })
          } else if (proType == 'sub') { //提交
            this.get('/blackAndGrey/submitInApp/' + this.currentRow.id).then(res => {
              if (res.statusCode == 200) {
                this._succe(res.msg)
                this.inquire();
              } else {
                this._error(res.msg);
              }
            })
          }
        }).catch(() => {});
      },
      // 查询列表
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
    beforeCreate() {

    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.params.param.appPerCode = this.userInf.userCode;
      this.inquire();
      this.getSystermTime();
    }
  }

</script>
<style scoped>
  .addIcon_search {
    border: 1px solid;
    font-size: 18px;
    border-radius: 6px;
    padding: 2px;
    position: absolute;
    left: 190px;
    top: 4px;
    cursor: pointer;
  }

</style>
