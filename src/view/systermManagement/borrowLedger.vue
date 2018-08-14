<template>
  <!--接口款台账 -->
  <div class="taskWatting main-div el-table_400_scroll">
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
          <span class="keywordText">手机号码：</span>
          <el-input v-model="params.loanMobile" placeholder="请输入证件号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">申请类型： </span>
          <el-select v-model="params.appType" placeholder="请选择">
            <el-option v-for="item in applyType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品类型： </span>
          <el-select v-model="params.proType" placeholder="请选择">
            <el-option v-for="item in proType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-autocomplete popper-class="my-autocomplete" v-model="proCode" :fetch-suggestions="ProQuerySearch" placeholder="请输入内容"
            @select="ProhandleSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
            <template slot-scope="{ item }">
              <span style="float: left; width:66px">{{ item.proName }}</span>
              <span style="float: left;color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.proCode }}</span>
            </template>
          </el-autocomplete>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">应还款日期： </span>
          <el-date-picker v-model="PaybackDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">借款期限[月]： </span>
          <el-select v-model="params.loanTerm" placeholder="请选择">
            <el-option v-for="item in loanExp" :key="item.appDuration" :label="item.appDuration" :value="item.appDuration">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">结清标志： </span>
          <el-select v-model="params.payOffFlag" placeholder="请选择">
            <el-option v-for="item in paybackTime" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">账户状态： </span>
          <el-select v-model="params.accountState" placeholder="请选择">
            <el-option v-for="item in accountStatus" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">放款日期：</span>
          <el-date-picker v-model="loanDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">每期还款日：</span>
          <el-input v-model="params.returnDay" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">托管机构： </span>
          <el-select v-model="params.escrowAgency" placeholder="请选择" @change='getBankNameChange'>
            <el-option v-for="item in trusteeAgency" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
            <el-pagination @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :page-sizes="[10, 20,50]" :page-size="BankNamePageCounts"
              :current-page="BankNameCurrent" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
          </el-select>
          <!--    
       -->

        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">开户行名称： </span>
          <el-select v-model="params.bankCode" placeholder="请选择" :disabled='params.escrowAgency==""' >
            <el-option v-for="item in BankName" :key="item.bankCode" :label="item.bankName" :value="item.bankCode">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">还款到期日期：</span>
          <el-date-picker v-model="expiritionDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">进件机构：</span>
          <el-autocomplete popper-class="my-autocomplete" v-model="agencyCode" :fetch-suggestions="querySearch" placeholder="请输入内容"
            @select="handleSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
            <template slot-scope="{ item }">
              <span style="float: left; width:66px">{{ item.orgName }}</span>
              <span style="float: left;color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.orgCode }}</span>
            </template>
          </el-autocomplete>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">放款方式： </span>
          <el-select v-model="params.onlineLoanState" placeholder="请选择">
            <el-option v-for="item in lendingMethods" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">直销人员：</span>
          <el-input v-model="params.salPerCode" placeholder="请输入直销人员"></el-input>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">当前期次[理论]：</span>
          <el-input v-model="params.currTermTheory" placeholder="请输入当前期次"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">管户客服名称：</span>
          <el-input v-model="params.controlerName" placeholder="请输入管户客服名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
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
        申请台账
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">申请信息</span>
        </span>
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">信审信息</span>
        </span>
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">协议信息</span>
        </span>
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">账务信息</span>
        </span>
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">回收信息</span>
        </span>
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon faqi"></i>
          <span class="el-icon-text">交易明细</span>
        </span>
        <span class="icon-item" @click='getExcel'>
          <i class="el-icon appro"></i>
          <span class="el-icon-text">导出Excel</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData1" style="width: 100%" height="410" :summary-method="getSummaries" show-summary highlight-current-row
        border @row-click='selectRow'>
        <el-table-column type="index" label=序号 fixed width="50">
        </el-table-column>
        <el-table-column prop="applyMainNo" label="借款账号" fixed width="130">
        </el-table-column>
        <el-table-column prop="applyMainNo" label="进件编号" fixed width="160">
        </el-table-column>
        <el-table-column prop="appDate" label="协议编号" fixed sortable width="200">
        </el-table-column>
        <el-table-column prop="custName" label="客户编号" fixed width="160">
        </el-table-column>
        <el-table-column prop="sex" label="客户名称" fixed width="80">
        </el-table-column>
        <!-- <el-table-column prop="certTypeTxt" label="证件类型" fixed width="105">
        </el-table-column> -->
        <el-table-column prop="certCode" label="证件号码" fixed width="160">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号码" width="100">
        </el-table-column>
        <el-table-column prop="appTypeTxt" label="申请类型" width="80">
        </el-table-column>
        <el-table-column prop="borrTypeTxt" label="产品类型" width="80">
        </el-table-column>
        <!-- <el-table-column prop="emerTypeTxt" label="紧急程度" align='center' width="80">
        </el-table-column>
        <el-table-column prop="proTypeTxt" label="产品类型" width="80">
        </el-table-column> -->
        <el-table-column prop="proName" label="产品名称" width="105">
        </el-table-column>
        <el-table-column prop="loanAmt" label="预放款日期" width="95">
        </el-table-column>
        <el-table-column prop="loanTerm" label="放款日期" width="95">
        </el-table-column>
        <el-table-column prop="loanPurposeTxt" label="放款方式" width="90">
        </el-table-column>
        <el-table-column prop="guarnTypeTxt" label="借款金额[元]" width="110">
        </el-table-column>
        <el-table-column prop="comBorrFlagTxt" label="签约金额[元]" width="110">
        </el-table-column>
        <el-table-column prop="comBorrFlagTxt" label="放款金额[元]" width="110">
        </el-table-column>
        <el-table-column prop="salPerCode" label="保险费[元]" width="110">
        </el-table-column>
        <el-table-column prop="salPerName" label="平台推荐费[元]" width="110">
        </el-table-column>
        <el-table-column prop="teamLeaderCode" label="服务费金额[元]" width="110">
        </el-table-column>
        <el-table-column prop="teamLeaderCode" label="咨询费金额[元]" width="110">
        </el-table-column>
        <el-table-column prop="subOrgCode" label="借款期限[月]" width="100">
        </el-table-column>
        <el-table-column prop="subOrgName" label="每期还款日" width="90">
        </el-table-column>
        <el-table-column prop="appSerPerCode" label="当前期次[理论]" width="110">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="已还款期数" width="90">
        </el-table-column>
        <el-table-column prop="appOrgCode" label="还款起始日期" sortable width="120">
        </el-table-column>
        <el-table-column prop="appOrgName" label="还款到期日期" width="100">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="每期还款额[元]" min-width="110">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="剩余本金[元]" min-width="110">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="拖欠总额[元]" min-width="110">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="核销金额[元]" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="退还服务费[元]" width="110">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="拖欠开始日期" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="逾期天数" width="80">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="应还款日期" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="应还款日期" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="开户行代码" width="90">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="开户行名称" width="220">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="账户户名" width="80">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="银行卡账号" width="155">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="拖欠标志" width="80">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="结清标志" width="80">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="账户状态" width="80">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="直销人员" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="直销人员名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="直销人员证件号码" width="130">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="团队经理名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="团队经理证件号码" width="130">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="进件团队名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="签约客服名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="管户客服名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="进件机构名称" min-width="130">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20,50]" :current-page.sync="currentPage"
          :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
        </el-pagination>
      </div>
    </div>
    <!-- 弹窗部分 -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ininin: '',
        currentRow: {},
        userInf: null,
        params: {
          sort: 'loanBeginDate', //  入参“loanBeginDate”
          order: 'desc', //  入参“desc”
          userCode: '', //  用户编号
          page: 1, // 页数
          rows: 10, // 每页行数
          userCode: '', //  用户编号
          applySubNo: '', //  进件编号
          custName_la: '', //  客户名称
          certCode: '', //  证件号码
          loanMobile: '', //  手机号码
          appType: '', //  申请类型
          proType: '', //  产品类型
          proCode: '', //  产品名称
          repayDate_ge: '', //  应还款日期(始)
          repayDate_le: '', //  应还款日期（末）
          loanTerm: '', // 借款期限
          payOffFlag: '', //  结清标志
          accountState: '', //  账户状态
          loanDate_ge: '', //  放款日期
          loanDate_le: '', //  放款日期
          returnDay: '', // 每期还款日
          escrowAgency: '', //  托管机构
          bankCode: '', //  开户行名称
          loanEndDate_ge: '', //  还款到期日期
          loanEndDate_le: '', //  还款到期日期
          appOrgCode: '', //  进件机构
          onlineLoanState: '', //  放款方式
          salPerCode: '', //  直销人员
          currTermTheory: '', //  当前期次[理论]
          controlerName: '', //  管户客服名称
        },
        judge: {
          flag: '17'
        },
        proCode: "",
        selectedProName: "",
        agencyCode: '',
        selectedAgenName: "",
        loanDate: '', //放款日期
        expiritionDate: '', //还款到期日期
        PaybackDate: '', //应还款日期
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        BankNamePageCounts: 10, //开户行名称 分页显示条数
        BankNameCurrent: 1, //开户行名称分页 分页当前页
        totalRecord: 0, //总条数
        tableData: [],
        tableData1: [{
          applyMainNo: "20150101000311",
          appDate: "XY(黑)借字(2015)第000306号",
          appTypeTxt: "20150101000311",
          custName: "201501010173043192",
          certCode: "220422198010132603",
          mobile: "1585555",
          loanAmt: "2015-01-01",
          loanPurposeTxt: "1585555",
          guarnTypeTxt: "43,009,000.00",
          mobile: "1585555",
          mobile: "1585555",
          appSerPerName: '急急急啦啦啦噢噢噢噢牛牛牛牛牛'
        }],
        BankName: [], //开户行名称
        production: [], //产品名称
        proType: [ //产品类型
          {
            value: '00',
            label: '信用'
          }, {
            value: '01',
            label: '车贷'
          }, {
            value: '02',
            label: '房贷'
          }
        ],
        applyType: [ //申请类型
          {
            value: '00',
            label: '非循环贷'
          }, {
            value: '02',
            label: '循环贷(非借新还旧)'
          }
        ],
        applierType: [ //借款人类型
          {
            value: '01',
            label: '主借款人'
          }, {
            value: '02',
            label: '从借款人'
          }
        ],
        accountStatus: [ //账户状态
          {
            value: '00',
            label: '正常'
          }, {
            value: '01',
            label: '逾期'
          }, {
            value: '02',
            label: '结清'
          }
        ],
        loanExp: [ //借款期限
        ],
        paybackTime: [ //结清标志
          {
            value: '00',
            label: '未结清'
          }, {
            value: '01',
            label: '正常结清'
          }, {
            value: '02',
            label: '提前结清'
          }, {
            value: '03',
            label: '逾期结清'
          }
        ],
        lendingMethods: [ //放款方式
          {
            value: '0',
            label: '线下放款'
          }, {
            value: '1',
            label: '线上放款'
          }
        ],
        trusteeAgency: [ //托管机构
          {
            value: '00',
            label: '其他'
          }, {
            value: '02',
            label: '银联'
          },
          //    {
          //     value: '01',
          //     label: '通联'
          //   }, {
          //     value: '03',
          //     label: '富友'
          //   }, {
          //     value: '04',
          //     label: '融宝'
          //   }
        ],
        agency: [ //进件机构
        ],
        source: [ //来源渠道
          {
            value: '01',
            label: '报纸'
          }, {
            value: '02',
            label: '网络'
          }, {
            value: '03',
            label: '促销朋友'
          }, {
            value: '04',
            label: '朋友介绍'
          }, {
            value: '05',
            label: '销售开发'
          }, {
            value: '99',
            label: '其他'
          }
        ],
        Status: [ //业务状态
          {
            value: "00",
            label: "申请登记",
          }, {
            value: "01",
            label: "申请登记-放弃",
          }, {
            value: "02",
            label: "申请登记-拒绝",
          }, {
            value: "03",
            label: "质检复核",
          }, {
            value: "04",
            label: "初审-待处理",
          }, {
            value: "05",
            label: "申请登记-暂存",
          }, {
            value: "07",
            label: "初审-拒绝",
          }, {
            value: "08",
            label: "初审-放弃",
          }, {
            value: "09",
            label: "初审-回退补充材料",
          }, {
            value: "12",
            label: "终审-待处理",
          }, {
            value: "15",
            label: "终审-拒绝"
          }, {
            value: "16",
            label: "终审-放弃"
          }, {
            value: "17",
            label: "终审-回退门店补充材料"
          }, {
            value: "20",
            label: "终审-回退初审重审"
          }, {
            value: "21",
            label: "终审通过-待签约"
          }, {
            value: "22",
            label: "协议签订"
          }, {
            value: "23",
            label: "协议审核"
          }, {
            value: "24",
            label: "协议签订-放弃"
          }, {
            value: "25",
            label: "协议签订-拒绝"
          }, {
            value: "26",
            label: "等待放款",
          }, {
            value: "27",
            label: "放款处理",
          }, {
            value: "28",
            label: "放款成功-借据生效",
          }, {
            value: "29",
            label: "提前结清"
          }, {
            value: "30",
            label: "到期结清"
          }, {
            value: "31",
            label: "决策通过-待签约"
          }, {
            value: "32",
            label: "决策拒绝"
          }, {
            value: "33",
            label: "超时拒绝"
          }, {
            value: "34",
            label: "协议拟制"
          }, {
            value: "35",
            label: "等待匹配"
          }, {
            value: "36",
            label: "门店待评估"
          }, {
            value: "37",
            label: "总部待评估"
          }, {
            value: "38",
            label: "总部评估-回退"
          }, {
            value: "39",
            label: "终审-回退总部待评估"
          }, {
            value: "40",
            label: "权证登记"
          }, {
            value: "41",
            label: "权证入库"
          }, {
            value: "42",
            label: "回退-权证登记"
          },

        ],
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path == '/applyLedger') {
          if (!this.Routes[4].closed) {
            this.currentRow = {};
            this.params.pageNum = this.currentPage = 1;
            this.params.rows = this.pageCount = 10;
            this.Rreset();
            // this.tableData = [];
            this.Routes[4].closed = true;
          }
        }
      },
    },
    methods: {
      AlertMessage() {
        if (JSON.stringify(this.currentRow) == '{}') {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return true;
        }
        return false;
      },
      getExcel() { //导出Excel
        let obj = Object.assign({}, this.params);
        // 删除多余入参
        delete obj.page;
        delete obj.rows;
        this.post('/credit/exportLoanLedger', obj).then(res => {
          if (res.statusCode == 200) {
            // this.BankName = res.data;
          } else {
            // this.$message.error(res.msg);
            // this.$message.error('获取进件机构失败！');
          }
        })
      },
      selectRow(row) {
        this.currentRow = row;
      },
      toDetailPage() {
        if (this.AlertMessage()) {
          return;
        }
        this.$router.push({
          name: 'brrLedgerDetail',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("brrLedgerTW", JSON.stringify(row));
        localStorage.setItem("judge", JSON.stringify(this.judge));
      },
      getSummaries(param) { //
        const {
          columns,
          data
        } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });
        return sums;
      },
      querySearch(queryString, cb) { //进件机构下拉查询
        let restaurants = this.agency;
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      ProQuerySearch(queryString, cb) { //产品下拉查询
        let restaurants = this.production;
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.proName.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
        };
      },
      handleSelect(item) { //进件机构下拉查询选中项
        console.log(item)
        this.params.appOrgCode = this.agencyCode = this.selectedAgenName = item.appOrgName;
      },
      ProhandleSelect(item) { //产品下拉选中项
        // console.log(item)
        this.proCode = this.selectedProName = item.proName;
        this.params.proCode = item.proCode;
      },
      DateF(val) {
        val ? val = val.getFullYear() + '-' + (val.getMonth() + 1) + '-' + val.getDate() : '';
        return val;
      },
      handleSizeChange(val) { //每页 N 条
        this.params.pageSize = val;
        this.params.pageNum = 1;
        this.getInf(this.params);
      },
      handleSizeChange1(val) { //每页 N 条
        //   console.log(1,val)
        this.BankNamePageCounts = val;
        this.getBankName();
      },
      handleCurrentChange(val) { //查看第 N 页
        this.params.pageNum = val;
        this.getInf(this.params);
      },
      handleCurrentChange1(val) { //查看第 N 页
        // console.log(2,val)
        this.BankNameCurrent = val;
        this.getBankName();
      },
      getBankNameChange() {
        //   重置为第一页
        this.BankNamePageCounts = 10;
        this.BankNameCurrent = 1;
        this.getBankName();
      },
      Rreset() {
        this.params.applySubNo = ''; //  进件编号
        this.params.custName_la = ''; //  客户名称
        this.params.certCode = ''; //  证件号码
        this.params.loanMobile = ''; //  手机号码
        this.params.appType = ''; //  申请类型
        this.params.proType = ''; //  产品类型
        this.params.proCode = ''; //  产品名称
        this.params.repayDate_ge = ''; //  应还款日期(始)
        this.params.repayDate_le = ''; //  应还款日期（末）
        this.params.loanTerm = ''; // 借款期限
        this.params.payOffFlag = ''; //  结清标志
        this.params.accountState = ''; //  账户状态
        this.params.loanDate_ge = ''; //  放款日期
        this.params.loanDate_le = ''; //  放款日期
        this.params.returnDay = ''; // 每期还款日
        this.params.escrowAgency = ''; //  托管机构
        this.params.bankCode = ''; //  开户行名称
        this.params.loanEndDate_ge = ''; //  还款到期日期
        this.params.loanEndDate_le = ''; //  还款到期日期
        this.params.appOrgCode = ''; //  进件机构
        this.params.onlineLoanState = ''; //  放款方式
        this.params.salPerCode = ''; //  直销人员
        this.params.currTermTheory = ''; //  当前期次[理论]
        this.params.controlerName = ''; //  管户客服名称

        this.agencyCode = '';
        this.selectedAgenName = '';
        this.proCode = '';
        this.selectedProName = '';
        this.loanDate = ''; // 放款日期
        this.PaybackDate = ''; // 应还款日期
        this.expiritionDate = ''; // 还款到期日期
        this.BankName = []; //开户行名称下拉
        this.tableData = []; //清空已查处列表
        // 页码重置
        this.params.page = 1, //	页码  
          //   rows=10, //	每页条数
          this.getInf(this.params);
      },
      Rsearch() {
        console.log()
        // 放款日期
        this.params.loanDate_ge = this.DateF(this.loanDate[0]);
        this.params.loanDate_le = this.DateF(this.loanDate[1]);
        // 应还款日期
        this.params.repayDate_ge = this.DateF(this.PaybackDate[0]);
        this.params.repayDate_le = this.DateF(this.PaybackDate[1]);
        // 还款到期日期
        this.params.loanEndDate_ge = this.DateF(this.expiritionDate[0]);
        this.params.loanEndDate_le = this.DateF(this.expiritionDate[1]);

        this.params.pageNum = this.currentPage = 1;
        this.getInf(this.params);
      },
      getInf(pam) {
        this.proCode != this.selectedProName ? (this.proCode = this.selectedProName = this.params.proCode = "") :
          "";
        this.agencyCode != this.selectedAgenName ? (this.agencyCode = this.selectedAgenName = this.params.agencyCode =
          "") : "";
        this.post("/credit/getApplyLedger", pam).then(res => {
          if (res.statusCode == 200 && res.data.taskDetailList != null) {
            this.tableData = res.data.rows;
            this.totalRecord = res.data.total; // 总数
            // this.changeColor();
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getProducts() { //产品名称下拉
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            for (let k in res.data) {
              this.production.push(res.data[k])
            }
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      getloanTime() { //借款期限下拉 
        this.get('/credit/getAppduRations?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.loanExp = res.data;
          } else {
            // this.$message.error(res.msg);
            this.$message.error('获取借款期限失败！');
          }
        })
      },
      getAgency() { //获取进件机构下拉
        this.post('/credit/getSmOrgByLevelCate', {
          orgLevel: '06',
          orgCate: '01',
          sort: 'orgCode',
          order: 'asc'
        }).then(res => {
          if (res.statusCode == 200) {
            this.agency = res.data;
          } else {
            // this.$message.error(res.msg);
            this.$message.error('获取进件机构失败！');
          }
        })
      },
      getBankName() { //获取开户行名称下拉
        this.post('/credit/getSmBank', {
          escrowagency: this.params.escrowAgency,
          page: this.BankNameCurrent,
          rows: this.BankNamePageCounts,
        }).then(res => {
          if (res.statusCode == 200) {
            this.BankName = res.data;
          } else {
            // this.$message.error(res.msg);
            this.$message.error('获取进件机构失败！');
          }
        })
      },

      //   changeColor() {
      //     for (var i = 0; i < this.tableData.length; i++) {
      //       this.tableData[i].completeTime * 1 >= 48 ? this.tableData[i].isEmer = true : this.tableData[i].isEmer =
      //         false;
      //       if (this.tableData[i].emerType == '00') {
      //         this.tableData[i].emerType = "普通";
      //       } else if (this.tableData[i].emerType == '01') {
      //         this.tableData[i].emerType = "免费加急";
      //       } else if (this.tableData[i].emerType == '02') {
      //         this.tableData[i].emerType = "收费加急";
      //       };
      //     }
      //   }
    },
    mounted() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.params.userCode = this.userInf.userCode; //userCode
      //   this.getProducts();
      //   this.getloanTime();
      //   this.getAgency();
    },
  }

</script>
<style scoped>
  .listContainer {
    margin-bottom: 0;
  }

</style>
