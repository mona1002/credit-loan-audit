<template>
  <!--接口款台账 -->
  <div class="taskWatting main-div el-table_400_scroll">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model.trim="params.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.custName_la" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">手机号码：</span>
          <el-input v-model.trim="params.loanMobile" placeholder="请输入手机号码"></el-input>
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
          <el-date-picker v-model="PaybackDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
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
          <el-date-picker v-model="loanDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item">
          <span class="keywordText">每期还款日：</span>
          <el-input v-model.trim="params.returnDay" @blur="params.returnDay&&(parseInt(params.returnDay)>31||parseInt(params.returnDay)<1)?params.returnDay='':''"
            placeholder="请输入每期还款日"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">托管机构： </span>
          <el-select v-model="params.escrowAgency" placeholder="请选择" @change='getBankNameChange'>
            <el-option v-for="item in trusteeAgency" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
            <!-- <el-pagination @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :page-sizes="[10, 20,50]" :page-size="BankNamePageCounts"
              :current-page="BankNameCurrent" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination> -->
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">开户行名称： </span>
          <el-select v-model="params.bankCode" placeholder="请选择" :disabled='params.escrowAgency==""'>
            <div class="clearFix bankName_pagination_header" style=''>
              <span class="select_left">银行代码</span>
              <span class="float_left">银行名称</span>
            </div>
            <div class="clearFix bankName_pagination_body">
              <el-option v-for="item in BankName" :key="item.bankCode" :label="item.bankName" :value="item.bankCode">
                <span class="select_left">{{ item.bankCode }}</span>
                <span class="select_color float_left">{{ item.bankName }}</span>
              </el-option>
            </div>
            <div style="width:290px;"></div>
            <!-- <div class="select_pageination bankName_pagination_footer">
        <el-pagination @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :page-sizes="[10, 20,50]" :page-size="BankNamePageCounts"
                :current-page="BankNameCurrent" layout="   sizes, prev,pager, next,total,jumper" :total="BankTotal">
              </el-pagination>
          </div> -->
            <div class='select_pageination bankName_pagination_footer'>
              <el-pagination @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :page-sizes="[10, 20,50]" :page-size="BankNamePageCounts"
                :current-page="BankNameCurrent" layout="   sizes, prev,pager, next,total,jumper" :total="BankTotal">
              </el-pagination>
            </div>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">还款到期日期：</span>
          <el-date-picker v-model="expiritionDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
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
              <span class="float_left">{{ item.orgName }}</span>
              <span style="float: right;color: #8492a6; font-size: 13px;">{{ item.orgCode }}</span>
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
          <el-input v-model.trim="params.salPerCode" placeholder="请输入直销人员编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">当前期次[理论]：</span>
          <el-input v-model.trim="params.currTermTheory" @blur='Int' :max='2' :min='1' placeholder="请输入当前期次"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">管户客服名称：</span>
          <el-input v-model.trim="params.controlerName" placeholder="请输入管户客服名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">{{this.expiritionDate}}
        </el-col>
        <el-col :span="6" class="search-item" :offset="0">{{this.loanDate+'--'+this.PaybackDate}}
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
        借款台账
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='toDetailPage'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">申请信息</span>
        </span>
        <span class="icon-item" @click='toTrilDetail'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">信审信息</span>
        </span>
        <span class="icon-item" @click='toProtocalDetail'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">协议信息</span>
        </span>
        <span class="icon-item" @click='accountAlert'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">账务信息</span>
        </span>
        <span class="icon-item" @click='recycleAlert'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">回收信息</span>
        </span>
        <span class="icon-item" @click='dealAlert'>
          <i class="el-icon checkIcon"></i>
          <span class="el-icon-text">交易明细</span>
        </span>
        <span class="icon-item" @click='getExcel' v-if='ExcelBtnShow'>
          <i class="el-icon appro"></i>
          <span class="ExcelIcon">导出Excel</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <el-table :data="tableData" style="width: 100%" height="410" :summary-method="getSummaries" show-summary highlight-current-row
        border @row-click='selectRow'>
        <el-table-column type="index" label=序号 width="50">
        </el-table-column>
        <el-table-column prop="loanAcNo" label="借款账号" width="130">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" width="160">
        </el-table-column>
        <el-table-column prop="contNo" label="协议编号" sortable width="200">
        </el-table-column>
        <el-table-column prop="custNo" label="客户编号" width="160">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" width="80">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" width="160">
        </el-table-column>
        <el-table-column prop="loanMobile" label="手机号码" width="110">
        </el-table-column>
        <el-table-column prop="appTypeTxt" label="申请类型" width="80">
        </el-table-column>
        <el-table-column prop="proTypeTxt" label="产品类型" width="80">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" width="105">
        </el-table-column>
        <el-table-column prop="preLoanDate" label="预放款日期" width="95">
        </el-table-column>
        <el-table-column prop="loanDate" label="放款日期" width="95">
        </el-table-column>
        <el-table-column prop="onlineLoanState_name" label="放款方式" width="90">
        </el-table-column>
        <el-table-column label="借款金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.loanAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="签约金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.contAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="放款金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.payAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="保险费[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.insurFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="平台推荐费[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.platreFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="服务费金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.servFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="咨询费金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.consFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column prop="loanTerm" label="借款期限[月]" width="100">
        </el-table-column>
        <el-table-column prop="returnDay" label="每期还款日" width="90">
        </el-table-column>
        <el-table-column prop="currTermTheory" label="当前期次[理论]" width="110">
        </el-table-column>
        <el-table-column prop="payedTerm" label="已还款期数" width="90">
        </el-table-column>
        <el-table-column prop="loanBeginDate" label="还款起始日期" sortable width="120">
        </el-table-column>
        <el-table-column prop="loanEndDate" label="还款到期日期" width="100">
        </el-table-column>
        <el-table-column label="每期还款额[元]" min-width="110">
          <template slot-scope='scope'>
            {{scope.row.eachTermAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="剩余本金[元]" min-width="110">
          <template slot-scope='scope'>
            {{scope.row.loanBalAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="拖欠总额[元]" min-width="110">
          <template slot-scope='scope'>
            {{scope.row.totalArrears|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="核销金额[元]" width="100">
          <template slot-scope='scope'>
            {{scope.row.calcelBalAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="退还服务费[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.returnFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column prop="arrInteBegin" label="拖欠开始日期" width="100">
        </el-table-column>
        <el-table-column prop="exceeddays" label="逾期天数" width="80">
        </el-table-column>
        <el-table-column prop="repayDate" label="应还款日期" width="100">
        </el-table-column>
        <el-table-column prop="escrowAgencyTxt" label="托管机构" width="100">
        </el-table-column>
        <el-table-column prop="bankCode" label="开户行代码" width="90">
        </el-table-column>
        <el-table-column prop="bankName" label="开户行名称" width="220">
        </el-table-column>
        <el-table-column prop="accountName" label="账户户名" width="80">
        </el-table-column>
        <el-table-column prop="accountCode" label="银行卡账号" width="170">
        </el-table-column>
        <el-table-column prop="overFlagTxt" label="拖欠标志" width="80">
        </el-table-column>
        <el-table-column prop="payOffFlagTxt" label="结清标志" width="80">
        </el-table-column>
        <el-table-column prop="accountStateTxt" label="账户状态" width="80">
        </el-table-column>
        <el-table-column prop="salPerCode" label="直销人员" width="100">
        </el-table-column>
        <el-table-column prop="salPerName" label="直销人员名称" width="100">
        </el-table-column>
        <el-table-column prop="salPerCertCode" label="直销人员证件号码" width="130">
        </el-table-column>
        <el-table-column prop="teamLeaderName" label="团队经理名称" width="100">
        </el-table-column>
        <el-table-column prop="teamLeaderCertCode" label="团队经理证件号码" width="130">
        </el-table-column>
        <el-table-column prop="subOrgName" label="进件团队名称" width="100">
        </el-table-column>
        <el-table-column prop="appSerPerName" label="签约客服名称" width="100">
        </el-table-column>
        <el-table-column prop="controlerName" label="管户客服名称" width="100">
        </el-table-column>
        <el-table-column prop="appOrgName" label="进件机构名称" min-width="130">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20,50]" :current-page.sync="currentPage"
          :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
        </el-pagination>
      </div>
    </div>
    <!-- 账务信息 -->
    <el-dialog title="账务信息" :visible.sync="accountShow" width="1100px">
      <div class="checkedInf checkedInf_li_width_triplet clearFix">
        <ul>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">借款账号：</label>
              <span>{{accountDetail.loanAcNo}}</span>
            </li>
            <li>
              <label class="label_width_145">协议编号：</label>
              <span>{{accountDetail.contNo}}</span>
            </li>
            <li>
              <label class="label_width_145">进件编号：</label>
              <span>{{accountDetail.applySubNo}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">客户名称：</label>
              <span>{{accountDetail.custName}}</span>
            </li>
            <li>
              <label class="label_width_145">证件号码：</label>
              <span>{{accountDetail.certCode}}</span>
            </li>
            <li>
              <label class="label_width_145">产品名称：</label>
              <span>{{accountDetail.proName}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">签约金额[元]：</label>
              <span>{{accountDetail.contAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">借款期限[月]：</label>
              <span>{{accountDetail.loanTerm}}</span>
            </li>
            <li>
              <label class="label_width_145">还款方式：</label>
              <span>{{accountDetail.repayWayTxt}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">每期还款日：</label>
              <span>{{accountDetail.returnDay}}</span>
            </li>
            <li>
              <label class="label_width_145">还款起始日期：</label>
              <span>{{accountDetail.loanBeginDate}}</span>
            </li>
            <li>
              <label class="label_width_145">还款到期日期：</label>
              <span>{{accountDetail.loanEndDate}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">综合费率[月]：</label>
              <span>{{accountDetail.synthesisrateM | percent_100}}</span>
            </li>
            <li>
              <label class="label_width_145">借款利率[年]：</label>
              <span>{{accountDetail.loanRateYr | percent_100}}</span>
            </li>
            <li>
              <label class="label_width_145">罚息比例[日]：</label>
              <span>{{accountDetail.penaltyRatio | percent_100}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">违约金比例：</label>
              <span>{{accountDetail.defaultRatio | percent_100}}</span>
            </li>
            <li>
              <label class="label_width_145">服务费金额[元]：</label>
              <span>{{accountDetail.servFeeAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">审核费金额[元]：</label>
              <span>{{accountDetail.auditFeeAmt}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">咨询费金额[元]：</label>
              <span>{{accountDetail.consFeeAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">平台推荐费金额[元]：</label>
              <span>{{accountDetail.platreFeeAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">每期还款额[元]：</label>
              <span>{{accountDetail.eachTermAmt}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">借款余额[元]：</label>
              <span>{{accountDetail.loanBalAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">当前期次： </label>
              <span>{{accountDetail.currTerm}}</span>
            </li>
            <li>
              <label class="label_width_145">当前期次[理论]：</label>
              <span>{{accountDetail.currTermTheory}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">累计应收利息[元]：</label>
              <span>{{accountDetail.shouldInteAmtSum}}</span>
            </li>
            <li>
              <label class="label_width_145">累计实收利息[元]：</label>
              <span>{{accountDetail.actualInteAmtSum}}</span>
            </li>
            <li>
              <label class="label_width_145">累计实收违约金[元]：</label>
              <span>{{accountDetail.actualDefaultAmtSum}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">累计实收罚息[元]：</label>
              <span>{{accountDetail.actualPenaltyAmtSum}}</span>
            </li>
            <li>
              <label class="label_width_145">累计减免利息[元]：</label>
              <span>{{accountDetail.redInteAmtSum}}</span>
            </li>
            <li>
              <label class="label_width_145">累计减免罚息[元]：</label>
              <span>{{accountDetail.redPenaltyAmtSum}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">累计减免违约金[元]：</label>
              <span>{{accountDetail.redDefaultAmtSum}}</span>
            </li>
            <li>
              <label class="label_width_145">拖欠本金[元]：</label>
              <span>{{accountDetail.arrBalAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">拖欠利息[元]：</label>
              <span>{{accountDetail.arrInteAmt}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">拖欠罚息[元]：</label>
              <span>{{accountDetail.arrPenaltyAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">拖欠违约金[元]：</label>
              <span>{{accountDetail.arrDefaultAmt}}</span>
            </li>
            <li>
              <label class="label_width_145">退还服务费[元]：</label>
              <span>{{accountDetail.returnFeeAmt}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">核销金额：</label>
              <span>{{accountDetail.calcelBalAmtSum}}</span>
            </li>
            <li>
              <label class="label_width_145">本金拖欠开始日期：</label>
              <span>{{accountDetail.arrBalBegin}}</span>
            </li>
            <li>
              <label class="label_width_145">利息拖欠开始日期：</label>
              <span>{{accountDetail.arrInteBegin}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">当前拖欠期数：</label>
              <span>{{accountDetail.currArrTerm}}</span>
            </li>
            <li>
              <label class="label_width_145">最高拖欠期数：</label>
              <span>{{accountDetail.maxArrTerm}}</span>
            </li>
            <li>
              <label class="label_width_145">累计拖欠期数：</label>
              <span>{{accountDetail.arrTermSum}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">账户状态：</label>
              <span>{{accountDetail.accountStateTxt}}</span>
            </li>
            <li>
              <label class="label_width_145">放款日期：</label>
              <span>{{accountDetail.loanDate}}</span>
            </li>
            <li>
              <label class="label_width_145">结清标志：</label>
              <span>{{accountDetail.payOffFlagTxt}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">结清日期：</label>
              <span>{{accountDetail.payOffDate}}</span>
            </li>
            <li>
              <label class="label_width_145">开户行所在城市代码：</label>
              <span>{{accountDetail.bankCityCode}}</span>
            </li>
            <li>
              <label class="label_width_145">开户行所在城市名称：</label>
              <span>{{accountDetail.bankCityName}}</span>
            </li>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_145">开户行代码：</label>
              <span>{{accountDetail.bankCode}}</span>
            </li>
            <li class="li_triplet_two_rows">
              <label class="label_width_145">开户行名称：</label>
              <span>{{accountDetail.bankName}}</span>
            </li>
          </div>
          <div class=" clearFix">
            <li>
              <label class="label_width_145">账户户名：</label>
              <span>{{accountDetail.accountName}}</span>
            </li>
            <li class="li_triplet_two_rows">
              <label class="label_width_145">银行卡账号：</label>
              <span>{{accountDetail.accountCode}}</span>
            </li>
          </div>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="accountShow = false">返 回</el-button>
      </div>
    </el-dialog>
    <!-- 回收信息 -->
    <el-dialog title="回收信息" :visible.sync="recycleShow" width="1000px">
      <!-- <div class="el-talble_overflow_auto"> -->
      <el-table :data="recycleData" height="435" border show-header highlight-current-row :summary-method="getRecycleSummaries"
        show-summary>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="period" label="期次" width="50">
        </el-table-column>
        <el-table-column prop="repayDate" label="应还日期" width="110">
        </el-table-column>
        <el-table-column label="应还本金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.eachTermBalAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="应还利息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.eachTermInteAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="应还罚息[元] " width="110">
          <template slot-scope='scope'>
            {{scope.row.eachTermPenAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="应还违约金[元] " width="110">
          <template slot-scope='scope'>
            {{scope.row.eachTermDefAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="本期应还款额[元]" width="130">
          <template slot-scope='scope'>
            {{scope.row.eachTermAmtSum|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还本金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualBalAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还利息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualInteAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还罚息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualPenAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还违约金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualDefAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="减免利息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.redInteAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="减免罚息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.redPenaltyAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="减免违约金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.redDefaultAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="退还服务费[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.returnFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="核销金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.calcelBalAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column prop='exceedDate' label="转逾期日期" width="110">
        </el-table-column>
        <el-table-column prop='overFlagTxt' label="拖欠标志" width="80">
        </el-table-column>
        <el-table-column prop='payoffFlagTxt' label="结清标志" width="80">
        </el-table-column>
        <!-- <el-table-column prop='loanAcNo' label="借款账号" width="160">
        </el-table-column> -->
      </el-table>
      <!-- </div> -->
      <div class="page">
        <el-pagination @size-change="handleSizeChange2" @current-change="handleCurrentChange2" :page-sizes="[10, 20,50]" :current-page.sync="recycleCurrentPage"
          :page-size="recyclePageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.recycleTotal">
        </el-pagination>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="recycleShow=false">返 回</el-button>
      </div>
    </el-dialog>
    <!-- 交易明细 -->
    <el-dialog title="交易明细" :visible.sync="dealShow" width="1000px">
      <!-- <div class="el-talble_overflow_auto"> -->
      <el-table :data="dealData" border height="435" show-header show-summary highlight-current-row :summary-method="getDealSummaries">
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="period" label="期次" sortable width="70">
        </el-table-column>
        <el-table-column prop="receiptTypeTxt" label="单据类型" width="100">
        </el-table-column>
        <el-table-column prop="accDate" label="交易日期" sortable width="120">
        </el-table-column>
        <el-table-column label="实还本金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualBalAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还利息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualInteAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还罚息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualPenAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="实还违约金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.actualDefAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="减免利息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.redInteAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="减免罚息[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.redPenaltyAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="减免违约金[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.redDefaultAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="退还服务费[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.returnFeeAmt|formatMoney}}
          </template>
        </el-table-column>
        <el-table-column label="核销金额[元]" width="110">
          <template slot-scope='scope'>
            {{scope.row.calcelBalAmt|formatMoney}}
          </template>
        </el-table-column>
      </el-table>
      <!-- </div> -->
      <div class="page">
        <el-pagination @size-change="handleSizeChange3" @current-change="handleCurrentChange3" :page-sizes="[10, 20,50]" :current-page.sync="dealCurrentPage"
          :page-size="dealPageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.dealTotal">
        </el-pagination>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dealShow=false">返 回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ininin: '',
        Routes: [],
        getData: {},
        currentRow: {},
        userInf: null,
        ExcelBtnShow: false,
        accountShow: false,
        recycleShow: false,
        dealShow: false,
        recycleCurrentPage: 1, //分页选中页-回收
        dealCurrentPage: 1, //分页选中页-回收
        recyclePageCount: 10, // 每页显示条数-交易
        dealPageCount: 10, // 每页显示条数-交易
        recycleTotal: 0,
        dealTotal: 0,
        BankTotal: 0,
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
        accountDetail: {}, //账务信息弹窗
        accountData: [], //账务信息弹窗
        recycleData: [], //回收信息
        recycleFooter: {},
        dealData: [], //
        dealFooter: {},
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
          },
          //  {
          //   value: '02',
          //   label: '银联'
          // },{
          // //     value: '01',
          //     label: '通联'
          //   }, {
          //     value: '03',
          //     label: '富友'
          // }, 
          {
            value: '04',
            label: '融宝'
          }
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
        if (to.path == '/borrowLedger') {
          if (!this.Routes[4].closed) {
            this.currentRow = {};
            this.params.page = this.currentPage = 1;
            this.params.rows = this.pageCount = 10;
            this.Rreset();
            // this.tableData = [];
            this.Routes[4].closed = true;
          }
        }
      },
    },
    methods: {
      Int() {
        this.params.currTermTheory = parseInt(this.params.currTermTheory);
        if (isNaN(this.params.currTermTheory)) {
          this.params.currTermTheory = '';
          return
        }
        this.params.currTermTheory > 999 ? this.params.currTermTheory = 999 : '';
        this.params.currTermTheory < 1 ? this.params.currTermTheory = 1 : '';
      },
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
        // 校验：应还款日期： PaybackDate ,放款日期: loanDate  , 还款到期日期： expiritionDate
        if (this.userInf.userCode !== "superadmin") {
          if (!this.PaybackDate && !this.loanDate && !this.expiritionDate) {
            // 只要填了一项就提示这里，如果都没填就提示第一个
            if (!this.PaybackDate) return this.$message.error('查询条件【应还款日期】项请选择时间跨度小于等于31天的数据进行导出 ！');
          }
          if (this.PaybackDate) {
            let beginDate = new Date(this.PaybackDate[0].replace(/-/g, '/')).getTime(),
              endDate = new Date(this.PaybackDate[1].replace(/-/g, '/')).getTime();
            var Payday = (endDate - beginDate) / (1000 * 3600 * 24);
          }
          if (this.loanDate) {
            let beginDate = new Date(this.loanDate[0].replace(/-/g, '/')).getTime(),
              endDate = new Date(this.loanDate[1].replace(/-/g, '/')).getTime();
            var loanday = (endDate - beginDate) / (1000 * 3600 * 24);
          }
          if (this.expiritionDate) {
            let beginDate = new Date(this.expiritionDate[0].replace(/-/g, '/')).getTime(),
              endDate = new Date(this.expiritionDate[1].replace(/-/g, '/')).getTime();
            var expday = (endDate - beginDate) / (1000 * 3600 * 24);
          }
          if (Payday > 31) return this.$message.error('查询条件【应还款日期】项请选择时间跨度小于等于31天的数据进行导出 ！');
          if (loanday > 31) return this.$message.error('查询条件【放款日期】项请选择时间跨度小于等于31天的数据进行导出 ！');
          if (expday > 31) return this.$message.error('查询条件【还款到期日期】项请选择时间跨度小于等于31天的数据进行导出 ！');
        }
        // 日期入参
        // 放款日期
        this.params.loanDate_ge = this.loanDate[0];
        this.params.loanDate_le = this.loanDate[1];
        // 应还款日期
        this.params.repayDate_ge = this.PaybackDate[0];
        this.params.repayDate_le = this.PaybackDate[1];
        // 还款到期日期
        this.params.loanEndDate_ge = this.expiritionDate[0];
        this.params.loanEndDate_le = this.expiritionDate[1];
        // 删除多余入参
        let obj = Object.assign({}, this.params);
        delete obj.page;
        delete obj.rows;
        axios.post('/export/loanLedgers', obj, {
          responseType: 'arraybuffer'
        }).then((res) => {
          let blob = new Blob([res.data], {
            type: "application/vnd.ms-excel"
          });　　　　　
          let objectUrl = URL.createObjectURL(blob);　　　　　
          window.location.href = objectUrl;　　　　
        }).catch(function (res) {})
      },
      selectRow(row) {
        this.currentRow = row;
      },
      toDetailPage() { //申请信息
        if (this.AlertMessage()) {
          return;
        }
        this.$router.push({
          name: 'brrLedgerDetail',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("brrLedgerTW", JSON.stringify(this.currentRow));
        localStorage.setItem("judge", JSON.stringify(this.judge));
      },
      toTrilDetail() { //信审信息

      },
      toProtocalDetail() { //协议信息

      },
      accountAlert() { //账务信息
        if (this.AlertMessage()) {
          return;
        }
        this.accountShow = true;
        this.accountDetail = this.currentRow;
      },
      recycleAlert() { //回收信息-弹窗
        if (this.AlertMessage()) {
          return;
        }
        // 重置分页
        this.recycleCurrentPage = 1;
        this.recyclePageCount = 10;
        this.recycleShow = true;
        this.recyclePost();
      },
      dealAlert() { //交易明细-弹窗
        if (this.AlertMessage()) {
          return;
        }
        // 重置分页        
        this.dealCurrentPage = 1;
        this.dealPageCount = 10;
        this.dealShow = true;
        this.dealPost();
      },
      recyclePost() { //回收信息
        this.post('/credit/getRepayLoanRecycle', {
          loanAcNo: this.currentRow.loanAcNo, //	借款账号
          page: this.recycleCurrentPage, //	页码
          rows: this.recyclePageCount, //	每页行数
          sort: 'period', //	入参“period”
          order: 'asc', //	入参“asc”
        }).then(res => {
          if (res.statusCode == 200 && res.data) {
            this.recycleData = res.data.rows;
            this.recycleFooter = res.data.footer[0];
            this.recycleTotal = res.data.total;
          }

        })
      },
      dealPost() { //交易明细
        this.post('/credit/getLoanOperatin', {
          loanAcNo: this.currentRow.loanAcNo, //	借款账号
          page: this.dealCurrentPage, //	页码
          rows: this.dealPageCount, //	每页行数
          sort: 'period', //	入参“period”
          order: 'asc', //	入参“asc”
        }).then(res => {
          if (res.statusCode == 200 && res.data) {
            this.dealData = res.data.rows;
            this.dealFooter = res.data.footer[0];
            this.dealTotal = res.data.total;
          }
        })
      },
      moneyFilter(value) {
        if (value == 0) return 0;
        if (!value) return '';
        return value.toLocaleString();
      },
      getSummaries(param) { //台账列表
        const {
          columns,
          data
        } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 1) {
            sums[index] = '总合计：';
            return;
          }
          if (index === 14) { //借款金额合计
            sums[index] = this.moneyFilter(this.getData.loanAmtSum);
            return;
          }
          if (index === 15) { //签约金额合计
            sums[index] = this.moneyFilter(this.getData.contAmtSum);
            return;
          }
          if (index === 16) { //放款金额
            sums[index] = this.moneyFilter(this.getData.payAmtSum);
            return;
          }
          if (index === 17) { //保险费
            sums[index] = this.moneyFilter(this.getData.insurFeeAmtSum);
            return;
          }
          if (index === 18) { //平台推荐费
            sums[index] = this.moneyFilter(this.getData.platreFeeAmtSum);
            return;
          }
          if (index === 19) { //服务费金额
            sums[index] = this.moneyFilter(this.getData.servFeeAmtSum);
            return;
          }
          if (index === 20) { //咨询费金额
            sums[index] = this.moneyFilter(this.getData.consFeeAmtSum);
            return;
          }
          if (index === 27) { //每期还款额[元] 
            sums[index] = this.moneyFilter(this.getData.eachTermAmtSum);
            return;
          }
          if (index === 28) { //剩余本金[元] 
            sums[index] = this.moneyFilter(this.getData.loanBalAmtSum);
            return;
          }
          if (index === 29) { //拖欠总额[元] 
            sums[index] = this.moneyFilter(this.getData.totalArrearsSum);
            return;
          }
          if (index === 30) { //核销金额[[元] 
            sums[index] = this.moneyFilter(this.getData.calcelBalAmtSum);
            return;
          }
          if (index === 31) { //退还服务费[元] 
            sums[index] = this.moneyFilter(this.getData.returnFeeAmtSum);
            return;
          }
          const values = data.map(item => Number(item[column.property]));
        });
        return sums;
      },
      getRecycleSummaries(param) { //回收列表
        const {
          columns,
          data
        } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 2) {
            sums[index] = '金额合计[元]：';
            return;
          }
          if (index === 3) { //应还本金
            sums[index] = this.moneyFilter(this.recycleFooter.eachTermBalAmt);
            return;
          }
          if (index === 4) { //应还利息
            sums[index] = this.moneyFilter(this.recycleFooter.eachTermInteAmt);
            return;
          }
          if (index === 5) { //应还罚息
            sums[index] = this.moneyFilter(this.recycleFooter.eachTermPenAmt);
            return;
          }
          if (index === 6) { //应还违约金
            sums[index] = this.moneyFilter(this.recycleFooter.eachTermDefAmt);
            return;
          }
          if (index === 7) { //本期应还款额
            sums[index] = this.moneyFilter(this.recycleFooter.eachTermAmtSum);
            return;
          }
          if (index === 8) { //实还本金
            sums[index] = this.moneyFilter(this.recycleFooter.actualBalAmt);
            return;
          }
          if (index === 9) { //实还利息
            sums[index] = this.moneyFilter(this.recycleFooter.actualInteAmt);
            return;
          }
          if (index === 10) { //实还罚息
            sums[index] = this.moneyFilter(this.recycleFooter.actualPenAmt);
            return;
          }
          if (index === 11) { //实还违约金
            sums[index] = this.moneyFilter(this.recycleFooter.actualDefAmt);
            return;
          }
          if (index === 12) { //减免利息
            sums[index] = this.moneyFilter(this.recycleFooter.redInteAmt);
            return;
          }
          if (index === 13) { //减免罚息
            sums[index] = this.moneyFilter(this.recycleFooter.redPenaltyAmt);
            return;
          }
          if (index === 14) { //减免违约金
            sums[index] = this.moneyFilter(this.recycleFooter.redDefaultAmt);
            return;
          }
          if (index === 15) { //退还服务费
            sums[index] = this.moneyFilter(this.recycleFooter.returnFeeAmt);
            return;
          }
          if (index === 16) { //核销金额
            sums[index] = this.moneyFilter(this.recycleFooter.calcelBalAmt);
            return;
          }
          const values = data.map(item => Number(item[column.property]));
        });
        return sums;
      },
      getDealSummaries(param) { //交易明细列表
        const {
          columns,
          data
        } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 3) {
            sums[index] = '金额合计[元]：';
            return;
          }
          if (index === 4) { //实还本金
            sums[index] = this.moneyFilter(this.dealFooter.actualBalAmt);
            return;
          }
          if (index === 5) { //实还利息
            sums[index] = this.moneyFilter(this.dealFooter.actualInteAmt);
            return;
          }
          if (index === 6) { //实还罚息
            sums[index] = this.moneyFilter(this.dealFooter.actualPenAmt);
            return;
          }
          if (index === 7) { //实还违约金
            sums[index] = this.moneyFilter(this.dealFooter.actualDefAmt);
            return;
          }
          if (index === 8) { //减免利息
            sums[index] = this.moneyFilter(this.dealFooter.redInteAmt);
            return;
          }
          if (index === 9) { //减免罚息
            sums[index] = this.moneyFilter(this.dealFooter.redPenaltyAmt);
            return;
          }
          if (index === 10) { //减免违约金
            sums[index] = this.moneyFilter(this.dealFooter.redDefaultAmt);
            return;
          }
          if (index === 11) { //退还服务费
            sums[index] = this.moneyFilter(this.dealFooter.returnFeeAmt);
            return;
          }
          if (index === 12) { //核销金额
            sums[index] = this.moneyFilter(this.dealFooter.calcelBalAmt);
            return;
          }
          const values = data.map(item => Number(item[column.property]));
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
        this.params.appOrgCode = item.orgCode;
        this.agencyCode = this.selectedAgenName = item.orgName;
      },
      ProhandleSelect(item) { //产品下拉选中项
        this.proCode = this.selectedProName = item.proName;
        this.params.proCode = item.proCode;
      },
      handleSizeChange(val) { //每页 N 条
        this.params.rows = val;
        this.params.page = this.currentPage = 1; //从第一页开始显示 
        this.getInf(this.params);
      },
      handleSizeChange1(val) { //每页 N 条- 开户行名称下拉
        this.BankNamePageCounts = val;
        this.getBankName();
      },
      handleSizeChange2(val) { //每页 N 条- 回收信息
        this.recyclePageCount = val;
        this.recyclePost();
      },
      handleSizeChange3(val) { //每页 N 条- 交易明细
        this.dealPageCount = val
        this.dealPost();
      },
      handleCurrentChange(val) { //查看第 N 页
        this.params.page = val;
        this.getInf(this.params);
      },
      handleCurrentChange1(val) { //查看第 N 页- 开户行名称下拉
        this.BankNameCurrent = val;
        this.getBankName();
      },
      handleCurrentChange2(val) { //查看第 N 页- 回收信息
        this.recycleCurrentPage = val;
        this.recyclePost();
      },
      handleCurrentChange3(val) { //查看第 N 页- 交易明细
        this.dealCurrentPage = val;
        this.dealPost();
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
        this.currentRow = {}; //清空选中行        
        // 页码重置
        this.params.page = this.currentPage = 1; //	页码 
        // 清空弹窗及各分页  
        this.totalRecord = 0;
        this.recycleTotal = 0;
        this.dealTotal = 0;
      },
      Rsearch() {
        // 放款日期
        this.params.loanDate_ge = this.loanDate[0];
        this.params.loanDate_le = this.loanDate[1];
        // 应还款日期
        this.params.repayDate_ge = this.PaybackDate[0];
        this.params.repayDate_le = this.PaybackDate[1];
        // 还款到期日期
        this.params.loanEndDate_ge = this.expiritionDate[0];
        this.params.loanEndDate_le = this.expiritionDate[1];

        this.params.page = this.currentPage = 1;
        this.getInf(this.params);
      },
      getInf(pam) {
        this.currentRow = {}; //清空选中行        
        this.proCode != this.selectedProName ? (this.proCode = this.selectedProName = this.params.proCode = "") :
          "";
        this.agencyCode != this.selectedAgenName ? (this.agencyCode = this.selectedAgenName = this.params.agencyCode =
          "") : "";
        this.post("/credit/getLoanLedger", pam).then(res => {
          if (res.statusCode == 200) {
            if (res.data) {
              this.tableData = res.data.loanLedgerList;
              this.totalRecord = res.data.total; // 总数
              this.getData = res.data;
            } else {
              // 清空上一次数据
              this.tableData = [];
              this.totalRecord = 0;
              this.getData = {};
            }
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
            this.BankName = res.data.rows;
            this.BankTotal = res.data.total;
          } else {
            // this.$message.error(res.msg);
            this.$message.error('获取进件机构失败！');
          }
        })
      },

    },
    created() {
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      let roleCodesList = false;
      // 是否显示导出按钮
      for (let i = 0; i < this.userInf.roleCodesList.length; i++) {
        if (this.userInf.roleCodesList[i] === 'DS99') {
          roleCodesList = true;
          break
        }
      }
      if (this.userInf.userCode === "superadmin" || this.roleCodesList) {
        this.ExcelBtnShow = true;
      }
      this.params.userCode = this.userInf.userCode; //userCode
      this.Routes = this.$router.options.routes;
      this.getProducts();
      this.getloanTime();
      this.getAgency();




    },
  }

</script>
<style scoped>
  .listContainer {
    margin-bottom: 0;
  }

  .select_left {
    float: left;
    width: 90px;
  }

  .select_color {
    color: #8492a6;
  }

  .bankName_pagination_header {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0;
    background: #fff;
    right: 0;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    padding: 0 7px;
  }

  .bankName_pagination_body {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  .bankName_pagination_footer {
    position: absolute;
    background: #fff;
    bottom: 0;
    width: 290px
  }

</style>
