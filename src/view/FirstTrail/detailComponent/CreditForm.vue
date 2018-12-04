<template>
  <div class="CreditForm">
    <el-form :model="checkData" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-collapse v-model="activeNames">
        <!-- 网上查询信息 -->
        <el-collapse-item name="1">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">网上查询信息</span>
          </template>
          <div>
            <ul>
              <li class='clearFix el_hint_word'>
                <el-form-item prop="wnetPhone">
                  <label class="blueC label_223" @click="NewPage(2)"><span class="required_Red"> * </span>网搜本人手机是否异常：</label>
                  <el-select v-model="checkData.wnetPhone" @change='checkData.wnetPhone==0?checkData.wnetPhonetxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetPhone==1" label="手机异常信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetPhonetxt&&  checkData.wnetPhonetxt.length>=500" class="hint internet_textarea ">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetPhonetxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix el_hint_word'>
                <el-form-item prop="wnetEcutedBrea">
                  <label class="blueC label_223" @click="NewPage(1)"><span class="required_Red"> * </span>客户在失信网是否有失信记录：</label>
                  <el-select v-model="checkData.wnetEcutedBrea" @change='checkData.wnetEcutedBrea==0?checkData.wnetEcutedBreatxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetEcutedBrea==1" label="失信记录说明：" :label-width="label_160">
                  <b v-show="checkData.wnetEcutedBreatxt&&checkData.wnetEcutedBreatxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" resize="none" :rows="2" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetEcutedBreatxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix el_hint_word'>
                <el-form-item prop="wnetCompany">
                  <label class="blueC label_223" @click="NewPage(3)"><span class="required_Red"> * </span>工商企业基本信息是否登记：</label>
                  <el-select v-model="checkData.wnetCompany" @change='checkData.wnetCompany==0?checkData.wnetCompanytxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetCompany==1" label="工商登记信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetCompanytxt&&checkData.wnetCompanytxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetCompanytxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix el_hint_word'>
                <el-form-item prop="wbeexEcuted">
                  <label class="blueC label_223" @click="NewPage(0)"><span class="required_Red"> * </span>客户在法网是否有被执行信息：</label>
                  <el-select v-model="checkData.wbeexEcuted" @change='checkData.wbeexEcuted==0?checkData.wbeexEcutedtxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wbeexEcuted==1" label="执行信息说明：" prop="wbeexEcutedtxt" :label-width="label_160">
                  <b v-show="checkData.wbeexEcutedtxt&&checkData.wbeexEcutedtxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" placeholder="请输入内容" v-model="checkData.wbeexEcutedtxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
                  <el-select v-model="checkData.wnetHirecom" @change='checkData.wnetHirecom==0?checkData.wnetHirecomtxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetHirecom==1" label="单位执行信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetHirecomtxt&&checkData.wnetHirecomtxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" resize="none" :maxlength="this.dd" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomtxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
                  <el-select v-model="checkData.wnetHirecomBrea" @change='checkData.wnetHirecomBrea==0?checkData.wnetHirecomBreatxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetHirecomBrea==1" label="单位失信记录说明：" :label-width="label_160">
                  <b v-show="checkData.wnetHirecomBreatxt&&checkData.wnetHirecomBreatxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetHirecomBreatxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(4)">单位在全国组织代码中是否存在：</label>
                  <el-select v-model="checkData.wnetAddrstate" @change='checkData.wnetAddrstate==0?checkData.wnetAddrstatetxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetAddrstate==1" label="组织机构代码信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetAddrstatetxt&&checkData.wnetAddrstatetxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetAddrstatetxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(2)">网搜现住址和房产地址是否异常：</label>
                  <el-select v-model="checkData.wnetAddrandEstate" @change='checkData.wnetAddrandEstate==0?checkData.wnetAddrandEstatetxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetAddrandEstate==1" label="地址异常信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetAddrandEstatetxt&&checkData.wnetAddrandEstatetxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetAddrandEstatetxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(2)">网搜单位名称是否异常：</label>
                  <el-select v-model="checkData.wnetHirecomName" @change='checkData.wnetHirecomName==0?checkData.wnetHirecomNametxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetHirecomName==1" label="单位名称异常信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetHirecomNametxt&&checkData.wnetHirecomNametxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetHirecomNametxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(2)">网搜单位电话是否异常：</label>
                  <el-select v-model="checkData.wnetHirecomPhone" @change='checkData.wnetHirecomPhone==0?checkData.wnetHirecomPhonetxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetHirecomPhone==1" label="单位电话异常信息说明：" :label-width="label_160">
                  <b v-show="checkData.wnetHirecomPhonetxt&&checkData.wnetHirecomPhonetxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetHirecomPhonetxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix margin_bottom_10'>
                <el-form-item>
                  <label class="blueC label_223" @click="NewPage(2)">网搜单位地址是否异常：</label>
                  <el-select v-model="checkData.wnetHirecomAddress" @change='checkData.wnetHirecomAddress==0?checkData.wnetHirecomAddresstxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.wnetHirecomAddress==1" label="单位地址异常信息说明：" :label-width="label_160"
                  class="">
                  <b v-show="checkData.wnetHirecomAddresstxt&&checkData.wnetHirecomAddresstxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.wnetHirecomAddresstxt">
                  </el-input>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 贷款明细 -->
        <el-collapse-item name="9">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">贷款明细</span>
            <div class="title_icon">
              <span @click.stop="add_loanDetail">
                <i class="title_icon_img addIcon"></i>
                <span class="title_icon_span">添加</span>
              </span>
              <span @click.stop="delet_loanDetail">
                <i class="title_icon_img deleteIcon"></i>
                <span class="title_icon_span">删除</span>
              </span>
              <span @click.stop="countNum">
                <i class="title_icon_img lineChartIcon"></i>
                <span class="title_icon_span">统计</span>
              </span>
            </div>
          </template>
          <div class="height_auto table_datePicker">
            <el-table :data="loanDetailList" style="width: 100%" highlight-current-row border @current-change="loanCurrentChange">
              <el-table-column type="index" :index='1' label="序号" width="55">
              </el-table-column>
              <el-table-column prop="loanType" label="贷款种类" width="120">
                <template slot-scope="scope">
                  <div class='font_hint'>
                    <el-tooltip class="item" effect="dark" :disabled="scope.row.loanType!=''" content="该项为必填项"
                      placement="right">
                      <el-select v-model="scope.row.loanType" placeholder="请选择">
                        <el-option v-for="item in loanTypes" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="guaranteeType" label="担保方式" width="120">
                <template slot-scope="scope">
                  <div class='font_hint'>
                    <el-tooltip class="item" effect="dark" :disabled="scope.row.guaranteeType!=''" content="该项为必填项"
                      placement="right">
                      <el-select v-model="scope.row.guaranteeType" placeholder="请选择">
                        <el-option v-for="item in guaranteeTypes" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="accountStatus" label="账户状态" width="120">
                <template slot-scope="scope">
                  <div class='font_hint'>
                    <el-tooltip class="item" effect="dark" :disabled="scope.row.accountStatus!=''" content="该项为必填项"
                      placement="right">
                      <el-select v-model="scope.row.accountStatus" placeholder="请选择">
                        <el-option v-for="item in accountStatuss" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="repayFrequency" label="还款频率" width="120">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.repayFrequency" placeholder="请选择">
                    <el-option v-for="item in repayFrequencys" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="loanBeginDate" label="贷款发放日期" width="155">
                <template slot-scope="scope">
                  <el-date-picker v-model="scope.row.loanBeginDate" type="date">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column prop="loanExpireDate" label="贷款到期日期" width="155">
                <template slot-scope="scope">
                  <el-date-picker v-model="scope.row.loanExpireDate" type="date">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column prop="loanContValue" label="贷款合同金额[元]" width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.loanContValue" @blur="moneyBlur(scope.row,'loanContValue')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="loanRepayDate" label="应还款日期" width="155">
                <template slot-scope="scope">
                  <el-date-picker v-model="scope.row.loanRepayDate" type="date">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column prop="loanBal" label="贷款余额[元]" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.loanBal" @blur="moneyBlur(scope.row,'loanBal')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="remainMonth" label="剩余还款月数" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.remainMonth" @blur="postcode(scope.row,'remainMonth')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="presentRepayAmt" label="本期应还款金额[元]" width="145">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.presentRepayAmt" @blur="moneyBlur(scope.row,'presentRepayAmt')"
                    placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="curMonthRepayAmt" label="本期实际还款金额[元]" width="150">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.curMonthRepayAmt" @blur="moneyBlur(scope.row,'curMonthRepayAmt')"
                    placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="lastRepayDate" label="最后一次还款日期" width="155">
                <template slot-scope="scope">
                  <el-date-picker v-model="scope.row.lastRepayDate" type="date">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column prop="presentOverAmt" label="当前逾期金额" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.presentOverAmt" @blur="moneyBlur(scope.row,'presentOverAmt')"
                    placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="overTimes" label="累计逾期次数" width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.overTimes" @blur="postcode(scope.row,'overTimes')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="maxOverTimes" label="最高逾期期数" min-width="120">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.maxOverTimes" @blur="postcode(scope.row,'maxOverTimes')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
        <!-- 负债信息 -->
        <el-collapse-item name="10">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">负债信息</span>
          </template>
          <div>
            <ul>
              <li>
                <el-form-item label="信用卡每月还款[元]：" :label-width='label_223'>
                  <el-input v-on:blur="moneyBlur(borDebt.monthRepayAmt,'monthRepayAmt','debet')" v-model="borDebt.monthRepayAmt">
                  </el-input>
                </el-form-item>
                <el-form-item label="信用贷每月还款额[元]：" :label-width='label_160'>
                  <el-input v-model="borDebt.studentLoanAmt" v-on:blur="moneyBlur(borDebt.studentLoanAmt,'studentLoanAmt','debet')">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="房贷每月还款额[元]：" :label-width='label_223'>
                  <el-input v-on:blur="moneyBlur(borDebt.houseLoanAmt,'houseLoanAmt','debet')" v-model="borDebt.houseLoanAmt">
                  </el-input>
                </el-form-item>
                <el-form-item label="车贷每月还款额[元]：" :label-width='label_160'>
                  <el-input v-on:blur="moneyBlur(borDebt.carLoanAmt,'carLoanAmt','debet')" v-model="borDebt.carLoanAmt">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="其他贷款每月还款额[元]：" :label-width='label_223'>
                  <el-input v-on:blur="moneyBlur(borDebt.otherLoanAmt,'otherLoanAmt','debet')" v-model="borDebt.otherLoanAmt">
                  </el-input>
                </el-form-item>
                <el-form-item label="负债合计[元]：" :label-width='label_160'>
                  <el-input v-model="borDebt.totalLoan" disabled>
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="最近三个月信用卡/贷款申请次数：" :label-width='label_223'>
                  <el-input v-model="borDebt.loanNumber" v-on:blur="postcode(borDebt.loanNumber,'loanNumber')"></el-input>
                </el-form-item>
                <el-form-item label="文字说明：" :label-width='label_160'>
                  <b v-show="borDebt.remark != null && borDebt.remark.length>=200" class="hint result_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="borDebt.remark" :maxlength="200"
                    resize="none">
                  </el-input>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 流水明细 -->
        <el-collapse-item name="11">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">流水明细</span>
            <div class="title_icon">
              <span @click.stop="add_turnover">
                <i class="title_icon_img addIcon"></i>
                <span class="title_icon_span">添加</span>
              </span>
              <span @click.stop="delet_turnover">
                <i class="title_icon_img deleteIcon"></i>
                <span class="title_icon_span">删除</span>
              </span>
            </div>
          </template>
          <div class='height_auto'>
            <el-table :data="incomeList" style="width: 100%" class="income" highlight-current-row border
              @current-change="incomeCurrentChange">
              <el-table-column type="index" :index='1' label="序号" min-width="50">
              </el-table-column>
              <el-table-column prop="incomeType" label="流水类型" min-width="110">
                <template slot-scope="scope">
                  <div class='font_hint'>
                    <el-tooltip class="item" effect="dark" :disabled="scope.row.incomeType!=''" content="该项为必填项"
                      placement="right">
                      <el-select v-model="scope.row.incomeType" placeholder="请选择">
                        <el-option v-for="item in incomeTypes" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="n" label="N" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.n" @blur="moneyBlur(scope.row,'n')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="n1" label="N-1" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.n1" @blur="moneyBlur(scope.row,'n1')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="n2" label="N-2" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.n2" @blur="moneyBlur(scope.row,'n2')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="n3" label="N-3" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.n3" @blur="moneyBlur(scope.row,'n3')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="n4" label="N-4" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.n4" @blur="moneyBlur(scope.row,'n4')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="n5" label="N-5" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.n5" @blur="moneyBlur(scope.row,'n5')" placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="count" label="计算" min-width="130">
                <template slot-scope="scope">
                  <img src="../../../../static/images/count.png" class="icon" @click="counted(scope.row)">
                </template>
              </el-table-column>
              <el-table-column prop="avgIncome" label="平均收入[元]" min-width="130">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.avgIncome" @blur="moneyBlur(scope.row,'avgIncome')" placeholder="请输入内容"
                    :disabled="true"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
        <!-- 其他信息 -->
        <el-collapse-item name="12">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">其他信息</span>
          </template>
          <div class="CreditForm_result margin_bottom_10 clearFix">
            <el-form-item class="one_row ">
              <b v-show="otherInfo.content && otherInfo.content.length>=500" style="left:230px;" class="hint result_textarea">
                输入长度不能超过500</b>
              <label class="label_223">其他：</label>
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="otherInfo.content" :maxlength="500"
                resize="none">
              </el-input>
            </el-form-item>
          </div>
        </el-collapse-item>
        <!-- 核实身份 -->
        <el-collapse-item name="2">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">核实身份</span>
          </template>
          <div class="clearFix padding_bottom_10">
            <ul>
              <li class='clearFix'>
                <el-form-item label="接听者是否是借款人本人：" :label-width="label_223">
                  <el-select v-model="checkData.iisself" @change="isSelf(checkData.iisself,'接听')">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.iisself==1" label="接听说明：" :label-width="label_160">
                  <b v-show="checkData.iisselftxt&&checkData.iisselftxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.iisselftxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item v-show="checkData.iisself==1" label="是否在我司申请借款：" :label-width="label_223">
                  <el-select v-model="checkData.iloanBefore" placeholder="请选择" @change="isSelf(checkData.iloanBefore)">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.iloanBefore==1" label="说明：" :label-width="label_160">
                  <b v-show="checkData.iloanBeforetxt&&checkData.iloanBeforetxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.iloanBeforetxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item v-show="checkData.iloanBefore==1" label="借款金额[元]：" :label-width="label_223">
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanAmt" @blur="checkData.iloanAmt=_formatNumber(checkData.iloanAmt)">
                  </el-input>
                </el-form-item>
                <el-form-item v-show="checkData.iloanBefore==1" label="借款期限[月]：" :label-width="label_160">
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanTerm" @blur="checkData.iloanTerm<=999&&checkData.iloanTerm>=1?checkData.iloanTerm=parseInt(checkData.iloanTerm):checkData.iloanTerm=''">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item v-show="checkData.iloanBefore==1" label="借款用途：" :label-width="label_223">
                  <el-select v-model="checkData.iloanPurpose" placeholder="请选择">
                    <el-option v-for="item in loanPurpose" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.iloanBefore==1" label="借款用途详细说明：" :label-width="label_160">
                  <b v-show="checkData.iloanPurposetxt&&checkData.iloanPurposetxt.length>=500" class="hint internet_textarea">
                    输入长度不能超过500</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.dd" placeholder="请输入内容" v-model="checkData.iloanPurposetxt">
                  </el-input>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 工作信息  -->
        <el-collapse-item name="3">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">工作信息</span>
          </template>
          <div>
            <ul>
              <li>
                <el-form-item label="工作单位：" :label-width='label_223' class="one_row">
                  <i class="hint">
                    <b v-show="checkData.hirecomName&&checkData.hirecomName.length>=50" class="Working_input">
                      输入长度不能超过50</b>
                  </i>
                  <!-- class： specialInput -->
                  <input type="text" class="one_row" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirecomName">
                </el-form-item>
              </li>
              <li>
                <el-form-item label="单位性质：" :label-width='label_223'>
                  <el-select v-model="checkData.hirecomSign" placeholder="请选择">
                    <el-option v-for="item in hirecomSign" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属行业：" :label-width='label_160'>
                  <el-select ref='industry' v-model="checkData.hirecomKindCode" placeholder="请选择">
                    <el-option v-for="item in	hirecomKind" :key="item.value" :label="item.text" :value="item.code">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="职位级别：" :label-width='label_223'>
                  <i class="hint">
                    <b v-show="checkData.workPost&&checkData.workPost.length>=20" class="Working_input"> 输入长度不能超过20</b>
                  </i>
                  <el-input type="text" :maxlength="this.shotInputL" placeholder="请输入内容" v-model="checkData.workPost">
                  </el-input>
                </el-form-item>
                <el-form-item label="单位电话：" :label-width='label_160'>
                  <i class="hint">
                    <span class="padding_left_235" v-show="this.reg.mphoneM">请输入：区号+5-8位数字</span>
                    <span class="padding_left_235" v-show="this.reg.mphoneR">不可输入：11111，12345等</span>
                  </i>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.workTel" @blur="mPhone(checkData.workTel,$event)">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="月均工资[元]：" :label-width='label_223'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.avgsalaryamt" @blur="checkData.avgsalaryamt=_formatNumber(checkData.avgsalaryamt)">
                  </el-input>
                </el-form-item>
                <el-form-item label="每月发薪日：" :label-width='label_160'>
                  <i class="hint" v-show="reg.mpayDay">
                    <span class="padding_left_235"> 请填入1-31之间的数字</span>
                  </i>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.payDay" @blur="mday(checkData.payDay,$event)">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="单位地址：" :label-width='label_223' class="one_row">
                  <i class="hint">
                    <b v-show="checkData.workAddress&&checkData.workAddress.length>=100" class="comaddressb" style="paddingLeft:826px">输入长度不能超过100</b>
                  </i>
                  <!-- 一级 -->
                  <el-select ref="province" v-model="checkData.workProvinceName" placeholder="请选择" @change="setProvince">
                    <el-option v-for="item in	hirecomAddress" :key="item.id" :label="item.areaName" :value="item.id">
                    </el-option>
                  </el-select>
                  <!-- 二级 -->
                  <el-select ref="city" v-model="checkData.workCityName" placeholder="请选择" @visible-change="getCity"
                    @change="setCity">
                    <el-option v-for="item in hireProvincd" :key="item.id" :label="item.areaName" :value="item.id">
                    </el-option>
                  </el-select>
                  <!-- 三级 -->
                  <el-select ref="country" v-model="checkData.workCountyName" placeholder="请选择" @visible-change="getCountry"
                    @change="setCountry">
                    <el-option v-for="item in hireTown" :key="item.id" :label="item.areaName" :value="item.id">
                    </el-option>
                  </el-select>
                  <el-input type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.workAddress">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix">
                <el-form-item label="前单位名称：" :label-width='label_223'>
                  <b v-show="checkData.hirelastComname&&checkData.hirelastComname.length>=50" class="hint Working_input">
                    输入长度不能超过50</b>
                  <input type="text" class="one_row" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirelastComname">
                </el-form-item>
                <el-form-item label="所在部门：" :label-width='label_160'>
                  <b v-show="checkData.hiredepartment&&checkData.hiredepartment.length>=20" class="hint Working_middle Working_right">输入长度不能超过20</b>
                  <el-input type="text" placeholder="请输入内容" :maxlength="this.shotInputL" v-model="checkData.hiredepartment">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix">
                <el-form-item label="入职时间：" :label-width='label_223'>
                  <el-date-picker v-model="checkData.entryDate" value-format="yyyy-MM-dd" style="maxWidth:200px;minWidth:150px;opcity:0;"
                    type="date" :picker-options="pickerOptions1">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="工资发放形式：" :label-width='label_160'>
                  <el-select v-model="checkData.payForm" placeholder="请选择">
                    <el-option v-for="item in payForm" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class='clearFix margin_bottom_10'>
                <el-form-item label="单位地址邮编：" :label-width='label_223'>
                  <b v-show="this.reg.mpostCode" class="hint Working_middle Working_right">请输入6位邮编</b>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.workZip" @blur="postCode(checkData.workZip,$event)">
                  </el-input>
                </el-form-item>
                <el-form-item label="是否为私营业主：" :label-width='label_160'>
                  <el-select v-model="checkData.privateOwnerFlag" placeholder="请选择" @change="privateCom(checkData.privateOwnerFlag)">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 私营企业信息 -->
        <el-collapse-item name="4">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">私营企业信息</span>
          </template>
          <div v-if="checkData.privateOwnerFlag=='1'">
            <ul>
              <li>
                <el-form-item label="企业类型：" :label-width='label_223' prop='compType'>
                  <el-select v-model="checkData.compType" placeholder="请选择">
                    <el-option v-for="item in compType" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="公司注册时间：" :label-width='label_160' prop='compegDate'>
                  <el-date-picker style="maxWidth:200px;minWidth:150px" v-model="checkData.compegDate" type="date"
                    :picker-options="pickerOptions1">
                  </el-date-picker>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="注册资金[万元]：" :label-width='label_223'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.regcapitalamt" @blur="checkData.regcapitalamt=_formatNumber(checkData.regcapitalamt)">
                  </el-input>
                </el-form-item>
                <el-form-item label="占股比例：" :label-width='label_160'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.selfhasProportion" @blur="businessSC('占股比例')">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="月还款额/租金[万元]：" :label-width='label_223'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.monthrentamt" @blur="checkData.monthrentamt=_formatNumber(checkData.monthrentamt)">
                  </el-input>
                </el-form-item>
                <el-form-item label="营业面积：" :label-width='label_160'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.selfpremisesArea" @blur="businessSC('营业面积')">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="企业经营项目：" :label-width='label_223' class="one_row">
                  <i class="hint">
                    <b v-show="checkData.projectManage&&checkData.projectManage.length>=200" class="Working_input">输入长度不能超过200</b>
                  </i>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.projectManage">
                  </el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="近一年利润[万元]：" :label-width='label_223'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.oneYearProfitamt" @blur="checkData.oneYearProfitamt=_formatNumber(checkData.oneYearProfitamt)">
                  </el-input>
                </el-form-item>
                <el-form-item label="每月净利润额[万元]：" :label-width='label_160'>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.profitamountmamt" @blur="checkData.profitamountmamt=_formatNumber(checkData.profitamountmamt)">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item label="经营场所：" :label-width='label_223'>
                  <el-select v-model="checkData.selfpremises" placeholder="请选择">
                    <el-option v-for="item in selfpremises" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="员工人数：" :label-width='label_160'>
                  <i class="hint">
                    <b v-show="this.workInf.empNumber" class="Working_middle Working_right">输入内容不得大于5位数</b>
                  </i>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.selfempCount" @blur="EmpNum(checkData.selfempCount)">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix margin_bottom_10'>
                <el-form-item label="第一供销商：" :label-width='label_223'>
                  <i class="hint">
                    <b v-show="checkData.firstSuppliers&&checkData.firstSuppliers.length>=50" class="Working_middle">输入长度不能超过50</b>
                  </i>
                  <el-input type="text" placeholder="请输入内容" :maxlength=" this.longInputL" v-model="checkData.firstSuppliers">
                  </el-input>
                </el-form-item>
                <el-form-item label="第一分销商：" :label-width='label_160'>
                  <i class="hint">
                    <b v-show="checkData.firstDistributor&&checkData.firstDistributor.length>=50" class="Working_middle Working_right">输入长度不能超过50</b>
                  </i>
                  <el-input type="text" placeholder="请输入内容" :maxlength=" this.longInputL" v-model="checkData.firstDistributor">
                  </el-input>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 家庭信息 -->
        <el-collapse-item name="5">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">家庭信息</span>
          </template>
          <div>
            <ul>
              <li class="clearFix el_hint_word">
                <el-form-item prop="fbalance">
                  <label class="label_223"><span class="required_Red"> * </span> 可以承受的月还款[元]：</label>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.fbalance" @blur="checkData.fbalance?checkData.fbalance=_formatNumber(checkData.fbalance):''">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix">
                <el-form-item>
                  <label class="label_223">婚姻状况：</label>
                  <el-select v-model="checkData.fmarrflag" placeholder="请选择" @change='marrage(checkData.fmarrflag)'>
                    <el-option v-for="item in fmarrflag" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class="clearFix" v-show="checkData.fmarrflag&&(checkData.fmarrflag=='02'||checkData.fmarrflag=='03')">
                <el-form-item>
                  <label class="label_223">配偶工作情况：</label>
                  <el-select v-model="checkData.spouseWork" placeholder="请选择" @change='copWork(checkData.spouseWork)'>
                    <el-option v-for="item in spouseWork" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class="clearFix" v-if="(checkData.fmarrflag=='02'||checkData.fmarrflag=='03')&&(checkData.spouseWork=='00'||checkData.spouseWork=='03')">
                <el-form-item>
                  <label class="label_223">配偶工作类型：</label>
                  <el-select v-model="checkData.spouseWorktype" placeholder="请选择">
                    <el-option v-for="item in spouseWorktype" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label=" 配偶收入情况[月/元]：" :label-width="label_185">
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.spouseIncome" @blur="checkData.spouseIncome?checkData.spouseIncome=_formatNumber(checkData.spouseIncome):''">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show="checkData.fmarrflag&&(checkData.fmarrflag=='02'||checkData.fmarrflag=='03')">
                <el-form-item>
                  <label class="label_223">是否在同一个城市工作生活：</label>
                  <el-select v-model="checkData.spouseSamecity" placeholder="请选择" @change="checkData.spouseSamecity==='0'?checkData.spouseSamecitytxt='':''">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="checkData.spouseSamecity==1" label="在同一个城市工作生活信息：" :label-width="label_185">
                  <b v-show="checkData.spouseSamecitytxt&&checkData.spouseSamecitytxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" placeholder="请输入内容" :rows="2" resize="none" :maxlength="this.shotTextareaL"
                    v-model="checkData.spouseSamecitytxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix">
                <el-form-item>
                  <label class="label_223">是否有子女：</label>
                  <el-select v-model="checkData.childFlag" placeholder="请选择" @change='children(checkData.childFlag)'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class="clearFix" v-show='checkData.childFlag=="1"'>
                <el-form-item>
                  <b class="hint internet_textarea" v-show="checkData.childCount&&checkData.childCount>=99">请输入0-99之间的数
                  </b>
                  <label class="label_223">子女数量：</label>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.childCount" @blur="childNumver(checkData.childCount)">
                  </el-input>
                </el-form-item>
                <el-form-item label="子女数量备注：" :label-width="label_185">
                  <b v-show="checkData.childCounttxt&&checkData.childCounttxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.childCounttxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show='checkData.childFlag=="1"'>
                <el-form-item>
                  <label class="label_223">子女现状：</label>
                  <el-select v-model="checkData.childStatus" placeholder="请选择">
                    <el-option v-for="item in childStatus" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="子女现状备注：" :label-width="label_185">
                  <b v-show="checkData.childStatustxt&&checkData.childStatustxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.childStatustxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show='checkData.childFlag=="1"'>
                <el-form-item>
                  <label class="label_223">子女是否在身边：</label>
                  <el-select v-model="checkData.childTogether" placeholder="请选择">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="是否支付其生活费：" :label-width="label_185">
                  <el-select class="creditForm_Select_special" v-model="checkData.childIspaycost" placeholder="请选择">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class="clearFix" v-show='checkData.childIspaycost=="1"'>
                <el-form-item>
                  <label class="label_223">生活费支付额度[元]：</label>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.childPaycostamt" @blur="checkData.childPaycostamt=_formatNumber(checkData.childPaycostamt)">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix">
                <el-form-item>
                  <label class="label_223">父母是否在世：</label>
                  <el-select v-model="checkData.parentIsliving" placeholder="请选择" @change="parents(checkData.parentIsliving)">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父母备注：" v-show="checkData.parentIsliving=='1'" :label-width="label_185">
                  <b v-show="checkData.parentIslivingtxt&&checkData.parentIslivingtxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.parentIslivingtxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show="checkData.parentIsliving=='1'">
                <el-form-item>
                  <label class="label_223">父母身体状况：</label>
                  <el-select v-model="checkData.parentHealth" placeholder="请选择">
                    <el-option v-for="item in parentHealth" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父母身体状况备注：" :label-width="label_185">
                  <b v-show="checkData.parentHealthtxt&&checkData.parentHealthtxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.parentHealthtxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show="checkData.parentIsliving=='1'">
                <el-form-item>
                  <label class="label_223">父母是否需要赡养：</label>
                  <el-select v-model="checkData.parentPayalimony" placeholder="请选择">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父母是否需要赡养备注：" :label-width="label_185">
                  <b v-show="checkData.parentPayalimonytxt&&checkData.parentPayalimonytxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.parentPayalimonytxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show="checkData.parentIsliving=='1'">
                <el-form-item>
                  <label class="label_223">父母工作情况：</label>
                  <el-select v-model="checkData.parentWork" placeholder="请选择">
                    <el-option v-for="item in parentWork" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父母收入[元]：" :label-width="label_185">
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.parentIncome" @blur="checkData.parentIncome=_formatNumber(checkData.parentIncome)">
                  </el-input>
                </el-form-item>
              </li>
              <li class="clearFix" v-show="checkData.parentIsliving=='1'">
                <el-form-item>
                  <label class="label_223">父母是否知情：</label>
                  <el-select v-model="checkData.parentInformed" placeholder="请选择">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class="clearFix">
                <el-form-item>
                  <label class="label_223">是否有兄弟姐妹：</label>
                  <el-select v-model="checkData.brothersIfhas" placeholder="请选择" @change='checkData.brothersIfhas==0?checkData.brothersIfhastxt="":""'>
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="是否有兄弟姐妹备注：" v-show="checkData.brothersIfhas=='1'" :label-width="label_185">
                  <b v-show="checkData.brothersIfhastxt&&checkData.brothersIfhastxt.length>=200" class="hint internet_textarea">
                    输入长度不能超过200</b>
                  <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容"
                    v-model="checkData.brothersIfhastxt">
                  </el-input>
                </el-form-item>
              </li>
              <li class='clearFix margin_bottom_10'>
                <el-form-item>
                  <label class="label_223">个人/家庭月开销[元]：</label>
                  <el-input type="text" placeholder="请输入内容" v-model="checkData.fconsumption" @blur="checkData.fconsumption=_formatNumber(checkData.fconsumption)">
                  </el-input>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 居住情况 -->
        <el-collapse-item name="6">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">居住情况</span>
          </template>
          <div>
            <ul>
              <li class='clearFix margin_bottom_10'>
                <el-form-item>
                  <label class="label_223">同住者关系：</label>
                  <el-select v-model="checkData.livingHouseHolds" placeholder="请选择">
                    <el-option v-for="item in livingHouseHolds" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="居住房产所属情况：">
                  <el-select v-model="checkData.livingEstateBelongs" placeholder="请选择">
                    <el-option v-for="item in livingEstateBelongs" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 核对现住址 -->
        <el-collapse-item name="7">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">核对现住址</span>
          </template>
          <div>
            <ul class="margin_bottom_10">
              <li class='clearFix'>
                <el-form-item>
                  <label class="label_223">现住址：</label>
                  <span>{{this.checkData.aaddress}}</span>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item>
                  <label class="label_223">现住地址是否为常住地址：</label>
                  <el-select v-model="checkData.aisresident" placeholder="请选择" @change="checkData.aisresident==0?checkData.aisresidenttxt='':''">
                    <el-option v-for="item in YN" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </li>
              <li class='clearFix'>
                <el-form-item v-show="checkData.aisresident==0" class="one_row">
                  <label class="label_223">常住地址：</label>
                  <b v-show="checkData.aisresidenttxt&&checkData.aisresidenttxt.length>=100" class="hint family_textarea">
                    输入长度不能超过100</b>
                  <!-- class： specialInput -->
                  <input class='specialInput' type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.aisresidenttxt">
                </el-form-item>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- 审批结论 -->
        <el-collapse-item name="8">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">审批结论</span>
          </template>
          <div class="CreditForm_result el_hint_word">
            <el-form-item prop='oother' class="one_row" style="height:130px">
              <b v-show="checkData.oother && checkData.oother.length>=1000" style="left:230px;" class="hint result_textarea">
                输入长度不能超过1000</b>
              <label class="label_223"><span class="required_Red"> * </span>初审结果评价：</label>
              <el-input type="textarea" :rows="5" resize="none" :maxlength="1000" placeholder="请输入内容" v-model="checkData.oother">
              </el-input>
            </el-form-item>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <div class="btn_wrap">
      <el-button type="primary" class="btn" @click="makeSureBtn('ruleForm')">确定</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        applyId: '',
        label_223: '223px',
        label_160: '160px',
        label_185: '185px',
        regs: /\,/g,
        rules: {
          wnetEcutedBrea: [{
            required: true,
            message: '请选择是否有失信记录',
            trigger: 'change'
          }],
          wnetPhone: [{
            required: true,
            message: '请选择借款人手机是否异常',
            trigger: 'change'
          }],
          wnetCompany: [{
            required: true,
            message: '请选择工商企业基本信息是否登记',
            trigger: 'change'
          }],
          wbeexEcuted: [{
            required: true,
            message: '请选择客户在法网是否有被执行信息',
            trigger: 'change'
          }],
          fbalance: [{
            required: true,
            message: '请输入可以承受的月还款',
            trigger: 'blur'
          }],
          oother: [{
            required: true,
            message: '请输入初审结果评价',
            trigger: 'blur'
          }],
          compType: [{ //企业类型
            required: true,
            message: '请选择企业类型',
            trigger: 'change'
          }],
          compegDate: [{
            // type: 'date',
            required: true,
            message: '请选择公司注册时间',
            trigger: 'change'
          }],
        },
        shotInputL: 20,
        longInputL: 50,
        longLongInputL: 100,
        shotTextareaL: 200,
        dd: 500,
        acreage: '',
        Percent: '',
        d: [],
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          }
        },
        reg: {
          payDay: false,
          mMontyP: false,
          mpostCode: false,
          mphoneM: false,
          mphoneR: false,
        },
        workInf: {
          empNumber: false,
        },
        // Internet: ["客户执行", "单位执行", "客户失信", "单位失信", "客户手机", "单位名称", "单位电话", "客户住址房产", "单位地址", "企业登记", "单位组织代码",
        //   "接听是否本人", "是否申请借款", "是否私营业主", "婚姻状况", "配偶工作情况", "同城工作生活", "是否有子女", "是否支付生活费", "父母是否在世", "是否有兄弟姐妹",
        //   "是否为常住地址"
        // ],
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        checkData: {},
        // -------网上查询信息------------
        YN: [{ //（网上查询信息）客户在人法网是否有被执行信
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        // beexEcuted: [{ //（网上查询信息）客户在人法网是否有被执行信
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netHirecom: [{ //（网上查询信息）单位在人法网是否有被执行信
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netEcutedBrea: [{ //（网上查询信息）客户在失信网是否有失信记录
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netHirecomBrea: [{ //（网上查询信息）单位在失信网是否有失信记录  4
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netPhone: [{ //（网上查询信息）网搜借款人的手机是否有异常信息 5
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netHirecomName: [{ //（网上查询信息）网搜单位名称是否有异常  6
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netHirecomPhone: [{ //（网上查询信息）网搜单位电话是否有异常  7
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netAddrandEstate: [{ //（网上查询信息）网搜借款人现居住地址和房产地址是否有异常  8
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netHirecomAddress: [{ //（网上查询信息）网搜单位地址是否有异常   9
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netCompany: [{ //（网上查询信息）当地工商网查询企业基本信息中是否有登记
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // netAddrstate: [{ //（网上查询信息）客户工作单位在全国组织代码查询中是否存在  11
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // // ---------------- 核实身份  ------------
        // isself: [{ //  接听者是否是借款人本人：
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // loanBefore: [{ // 是否在我司申请借款：
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        loanPurpose: [{ //借款用途：
            value: '01',
            label: '日常生活消费'
          }, {
            value: '02',
            label: '教育支出'
          }, {
            value: '03',
            label: '医疗支出'
          }, {
            value: '04',
            label: '提高生活质量'
          }, {
            value: '05',
            label: '其他消费'
          }, {
            value: '06',
            label: '货物采买'
          }, {
            value: '07',
            label: '商铺运营'
          }, {
            value: '08',
            label: '家庭消费'
          }, {
            value: '09',
            label: '个人消费'
          },
          {
            value: '10',
            label: '资金周转'
          },
          {
            value: '11',
            label: '扩大经营'
          },
          {
            value: '12',
            label: '购物（生活用品；原材料；设备）'
          },
          {
            value: '13',
            label: '装修家居'
          },
          {
            value: '14',
            label: '旅游'
          }
        ],
        // ---------------- 工作信息  ------------
        hirecomSign: [{ // 单位性质
          value: '01',
          label: '机关事业'
        }, {
          value: '02',
          label: '国有'
        }, {
          value: '03',
          label: '民营'
        }, {
          value: '04',
          label: '外资'
        }, {
          value: '05',
          label: '合资'
        }, {
          value: '06',
          label: '私营'
        }, {
          value: '07',
          label: '个体'
        }, {
          value: '08',
          label: '上市公司'
        }, {
          value: '09',
          label: '股份制'
        }, {
          value: '10',
          label: '非盈利机构'
        }, {
          value: '11',
          label: '其他'
        }],
        hirecomKind: [],
        hirecomAddress: [], //省份
        hireProvincd: [], //市区
        hireTown: [], //县区
        payForm: [{ // 工资发放形式
          value: '01',
          label: '网银'
        }, {
          value: '02',
          label: '现金'
        }, {
          value: '03',
          label: '网银+现金'
        }],
        // ------------------------------私营企业信息------------------------
        // privateOwnerFlag: [{
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }, ],
        compType: [{ // 企业类型
          value: '01',
          label: '独资'
        }, {
          value: '02',
          label: '合伙'
        }, {
          value: '03',
          label: '有限责任公司'
        }, {
          value: '04',
          label: '股份有限公司'
        }, {
          value: '05',
          label: '个体工商户'
        }],
        selfpremises: [{ // 经营场所
          value: '01',
          label: '租用'
        }, {
          value: '02',
          label: '自有房产'
        }, {
          value: '03',
          label: '按揭'
        }],
        // ------------------------------家庭信息------------------------
        fmarrflag: [{ // 婚姻状况
          value: '01',
          label: '未婚'
        }, {
          value: '02',
          label: '已婚'
        }, {
          value: '03',
          label: '离异'
        }, {
          value: '04',
          label: '丧偶'
        }],
        spouseWork: [{ //配偶工作情况
          value: '00',
          label: '在职'
        }, {
          value: '01',
          label: '退休'
        }, {
          value: '02',
          label: '务农'
        }, {
          value: '03',
          label: '自营'
        }, {
          value: '04',
          label: '无业'
        }],
        spouseWorktype: [{ // 配偶工作类型
          value: '00',
          label: '公务员'
        }, {
          value: '01',
          label: '事业单位'
        }, {
          value: '02',
          label: '国企'
        }, {
          value: '03',
          label: '三资企业'
        }, {
          value: '04',
          label: '民营企业'
        }],
        // spouseSamecity: [{ //是否在同一个城市工作生活
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // childFlag: [{ // 是否有子女
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        childStatus: [{ // 子女现状
          value: '00',
          label: '婴幼儿'
        }, {
          value: '01',
          label: '小学'
        }, {
          value: '02',
          label: '中学'
        }, {
          value: '03',
          label: '大学'
        }, {
          value: '04',
          label: '工作'
        }],
        // childTogether: [{ //子女是否在身边
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // childIspaycost: [{ // 是否支付其生活费
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // parentIsliving: [{ // 父母是否在世
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        parentHealth: [{ // 父母身体状况
          value: '1',
          label: '疾病'
        }, {
          value: '0',
          label: '健康'
        }],
        // parentPayalimony: [{ // 父母是否需要赡养
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        parentWork: [{ //父母工作情况
          value: '00',
          label: '在职'
        }, {
          value: '01',
          label: '退休'
        }, {
          value: '02',
          label: '务农'
        }, {
          value: '03',
          label: '自营'
        }, {
          value: '04',
          label: '无业'
        }],
        // parentInformed: [{ // 父母是否知情
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // brothersIfhas: [{ // 是否有兄弟姐妹
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        // ------------------------------居住情况------------------------
        livingHouseHolds: [{ // 同住者关系
          value: '00',
          label: '父母'
        }, {
          value: '01',
          label: '配偶及子女'
        }, {
          value: '02',
          label: '其他'
        }, {
          value: '03',
          label: '独居'
        }],
        livingEstateBelongs: [{ // 同住者关系
          value: '00',
          label: '父母'
        }, {
          value: '01',
          label: '本人及配偶'
        }, {
          value: '02',
          label: '其他亲属'
        }, {
          value: '03',
          label: '朋友'
        }, {
          value: '04',
          label: '租住'
        }, {
          value: '05',
          label: '宿舍'
        }],
        // ------------------------------核对现住址------------------------
        // aisresident: [{ // 现住地址是否为常住地址
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        //贷款种类
        loanTypes: [{
            'value': '01',
            'label': '车贷'
          },
          {
            'value': '02',
            'label': '房贷'
          },
          {
            'value': '03',
            'label': '信用贷'
          },
          {
            'value': '04',
            'label': '其他贷款'
          }
        ], //担保方式
        guaranteeTypes: [{
            'value': '01',
            'label': '信用'
          },
          {
            'value': '02',
            'label': '信用+抵押'
          },
          {
            'value': '03',
            'label': '抵押'
          },
          {
            'value': '04',
            'label': '质押'
          },
          {
            'value': '05',
            'label': '抵押+质押'
          }
        ], //账户状态
        accountStatuss: [{
            'value': '00',
            'label': '正常'
          },
          {
            'value': '01',
            'label': '逾期'
          },
          {
            'value': '02',
            'label': '结清'
          }
        ], //还款频率
        repayFrequencys: [{
            'value': '01',
            'label': '1个月'
          },
          {
            'value': '02',
            'label': '3个月'
          },
          {
            'value': '03',
            'label': '一次性还清'
          }
        ], //流水类型
        incomeTypes: [{
            'value': '01',
            'label': '工资流水'
          },
          {
            'value': '02',
            'label': '常用流水'
          },
          {
            'value': '03',
            'label': '对公流水'
          }
        ],
        // 借款人资料部分
        // 贷款明细
        loanDetailList: [],
        currentRowLoan: {},
        //车贷总笔数
        k: 0,
        //车贷现存笔数
        l: 0,
        //车贷结清笔数
        m: 0,
        //信用贷总笔数
        n: 0,
        //信用贷现存笔数
        o: 0,
        //信用贷结清笔数
        p: 0,
        //房贷总笔数
        q: 0,
        //房贷现存笔数
        r: 0,
        //房贷结清笔数
        s: 0,
        //其他总笔数
        u: 0,
        //其他现存笔数
        v: 0,
        //其他结清笔数
        w: 0,
        // 负债信息
        borDebt: {},
        arr: [0, 0, 0, 0, 0], //负债信息计算负债合计用
        incomeList: [], // 流水明细
        currentRowIncome: {},
        // 其他信息
        otherInfo: {
          "id": '',
          "applyId": '', // 申请单Id    
          "content": "", // 其他内容
        },
      }
    },
    methods: {
      isSelf(val, type) { //接听者是否是借款人本人 + 是否在我司申请借款
        if (type == '接听' && val == 0) {
          this.checkData.iloanBefore = '';
          this.checkData.iisselftxt = '';
        }
        if (val == 0) {
          this.checkData.iloanBeforetxt = '';
          this.checkData.iloanAmt = '';
          this.checkData.iloanTerm = '';
          this.checkData.iloanPurpose = '';
          this.checkData.iloanPurposetxt = '';
        }
      },
      marrage(val) { //婚姻状况
        if (val == '01' || val == '04') {
          this.checkData.spouseWork = ''; //配偶工作情况
          this.checkData.spouseWorktype = '';
          this.checkData.spouseIncome = ''; //配偶收入情况
          this.checkData.spouseSamecity = ''; //是否在同一个城市工作生活：
          this.checkData.spouseSamecitytxt = '';
        }
      },
      copWork(val) { //配偶工作情况
        if (val == '01' || val == '02' || val == '04') {
          this.checkData.spouseWorktype = ''; //配偶工作类型：
          this.checkData.spouseIncome = '';
        }
      },
      children(val) { //是否有子女
        if (val == '0') {
          this.checkData.childCount = '';
          this.checkData.childCounttxt = '';
          this.checkData.childStatus = '';
          this.checkData.childStatustxt = '';
          this.checkData.childTogether = '';
          this.checkData.childIspaycost = '';
          this.checkData.childPaycostamt = '';
        }
      },
      parents(val) { //父母是否在世
        if (val == '0') {
          this.checkData.parentIslivingtxt = '';
          this.checkData.parentHealth = '';
          this.checkData.parentHealthtxt = '';
          this.checkData.parentPayalimony = '';
          this.checkData.parentPayalimonytxt = '';
          this.checkData.parentWork = '';
          this.checkData.parentIncome = '';
          this.checkData.parentInformed = '';
        }
      },
      privateCom(val) { //是否为私营业主
        if (val == 0) {
          this.checkData.compType = "";
          this.checkData.regcapitalamt = "";
          this.checkData.selfhasProportion = "";
          this.checkData.monthrentamt = "";
          this.checkData.selfpremisesArea = "";
          this.checkData.projectManage = "";
          this.checkData.oneYearProfitamt = "";
          this.checkData.firstSuppliers = "";
          this.checkData.compegDate = "";
          this.checkData.selfpremises = "";
          this.checkData.selfempCount = "";
          this.checkData.profitamountmamt = "";
          this.checkData.firstDistributor = "";
        }
      },
      mountedInf() {
        this.applyId = JSON.parse(localStorage.getItem("taskInWaitting")).applyId;
        this.mountC();
      },
      NewPage(ind) {
        switch (ind) {
          case 0:
            window.open("http://zhixing.court.gov.cn/search/");
            break;
          case 1:
            window.open("http://shixin.court.gov.cn/");
            break;
          case 2:
            window.open("https://www.baidu.com");
            break;
          case 3:
            window.open("http://www.nacao.org.cn/portal/publish/index.html");
            break;
          case 4:
            window.open("https://www.tianyancha.com/");
            break;
        }
      },
      setProvince(item) {
        this.checkData.workProvince = item;
        this.checkData.workCity = "";
        this.checkData.workCityName = "";
        this.checkData.workCounty = "";
        this.checkData.workCountyName = "";
      },
      getCity() {
        this.get("/credit/queryCityCounty", {
          parentCode: this.checkData.workProvince,
        }).then(res => {
          if (res.statusCode == 200) {
            this.hireProvincd = res.data.ereaInfos;
            this.checkData.workCounty = "";
            this.checkData.workCountyName = "";
            this.hireTown = "";
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      setCity(item) {
        this.checkData.workCity = item;
      },
      getCountry() {
        this.get("/credit/queryCityCounty", {
          parentCode: this.checkData.workCity,
        }).then(res => {
          if (res.statusCode == 200) {
            this.hireTown = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      setCountry(item) {
        this.checkData.workCounty = item;
      },
      blankHint(value) {
        this.$confirm(value, '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {}).catch(() => {});
      },
      makeSureBtn(formName) {
        // 原借款人资料部分校验
        if (this.loanDetailList.length > 0) {
          let loanLen = this.loanDetailList[this.loanDetailList.length - 1];
          if (loanLen.loanType == '' || loanLen.guaranteeType == '' || loanLen.accountStatus == '') {
            this.blankHint("贷款明细不能为空！")
            return
          }
        }
        if (this.incomeList.length > 0) {
          let incomeLen = this.incomeList[this.incomeList.length - 1];
          if (incomeLen.incomeType == '') {
            this.blankHint("流水明细不能为空！")
            return
          }
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('您确定操作？', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              cancelButtonText: '取消',
              showCancelButton: true
            }).then(() => {
              this.CFsave();
            }).catch(() => {});
          } else {
            this._error('有必填项未填写！');
            return false;
          }
        });
      },
      CFsave() {
        this.checkData.selfpremisesArea = this.acreage;
        this.checkData.selfhasProportion = this.Percent;
        this.checkData.workProvinceName = this.$refs.province.selectedLabel;
        this.checkData.workCityName = this.$refs.city.selectedLabel;
        this.checkData.workCountyName = this.$refs.country.selectedLabel;
        this.checkData.hirecomKind = this.$refs.industry.selectedLabel;
        this.otherInfo.applyId = this.applyId;
        this.btnnn();
        this.post("/creauditInfo/addOrUpdate", {
          creauditInfoDto: this.checkData, //原信审表
          loanDetailList: this.loanDetailList, // 贷款明细
          borDebt: this.borDebt, // 负债信息
          incomeList: this.incomeList, // 流水明细
          otherInfo: this.otherInfo // 其他信息
        }).then(res => {
          if (res.statusCode == 200) {
            this.AreaNPercent();
            this.$message({
              message: '保存成功!',
              type: 'success'
            });
            this.mountC();
            // 非必填项提示是语去掉
            // 单位电话：
            this.reg.mphoneM = false;
            this.reg.mphoneR = false;
            // 每月发薪日：
            this.reg.mpayDay = false;
            // 单位地址邮编：
            this.reg.mpostCode = false;
          } else {
            this.$message.error(res.msg);
            this.mountC();
          }
        });
      },
      AreaNPercent() {
        if (this.checkData.selfpremisesArea) {
          this.checkData.selfpremisesArea += "m²";
        } else {
          this.checkData.selfpremisesArea = "";
        }
        if (this.checkData.selfhasProportion) {
          this.checkData.selfhasProportion += "%";
        } else {
          this.checkData.selfhasProportion = "";
        }
      },
      postCode(val, e) {
        var reg = /^\d{6}$/;
        if (reg.test(val)) {
          this.checkData.workZip = e.target.value = val;
          this.reg.mpostCode = false;
        } else {
          this.checkData.workZip = e.target.value = val = '';
          this.reg.mpostCode = true;
        }
      },
      businessSC(el) {
        switch (el) {
          case "营业面积":
            if (this.checkData.selfpremisesArea.indexOf('m²') != -1) {
              this.checkData.selfpremisesArea = this.checkData.selfpremisesArea.slice(0, -2);
            }
            this.checkData.selfpremisesArea = this._formatNumber(this.checkData.selfpremisesArea) + 'm²';
            this.acreage = this.checkData.selfpremisesArea.slice(0, -2).split(",").join('');
            break;
          case "占股比例":
            if (this.checkData.selfhasProportion.indexOf('%') != -1) {
              this.checkData.selfhasProportion = this.checkData.selfhasProportion.slice(0, -1);
            }
            this.checkData.selfhasProportion = this._formatNumber(this.checkData.selfhasProportion) + '%';
            this.Percent = this.checkData.selfhasProportion.slice(0, -1).split(",").join('');
            break;
        }
      },
      mPhone(val, e) {
        var reg = /^(0[0-9]{2,3}-)?([0-9]{5,8})$/;
        var regNoR =
          /^(0[0-9]{2,3}-)?(0{5,8})|(1{5,8})|(2{5,8})|(3{5,8})|(4{5,8})|(5{5,8})|(6{5,8})|(7{5,8})|(8{5,8})|(9{5,8})$/;
        var regNoOrder =
          /^(0[0-9]{2,3}-)?(12345)|(54321)|(123456)|(654321)|(23456)|(65432)|(1234567)|(7654321)|(234567)|(765432)|(34567)|(76543)|(12345678)|(87654321)|(2345678)|(8765432)|(345678)|(876543)|(45678)|(87654)$/;
        if (reg.test(val)) {
          if (regNoR.test(val) || regNoOrder.test(val)) {
            this.reg.mphoneM = false;
            this.reg.mphoneR = true;
            this.checkData.workTel = e.target.value = val = '';
          } else {
            this.reg.mphoneM = false;
            this.reg.mphoneR = false;
            this.checkData.workTel = e.target.value = val;
          }
        } else {
          this.reg.mphoneM = true;
          this.reg.mphoneR = false;
          this.checkData.workTel = e.target.value = val = '';
        }
      },
      mMonth(val, e) {
        val = parseInt(val);
        if (val >= 1 && val <= 999) {
          this.checkData.iloanTerm = val;
        } else
        if (val >= 1 && val > 999) {
          this.checkData.iloanTerm = val = 999;
        } else {
          this.checkData.iloanTerm = val = " ";
        }
      },
      mday(val, e) {
        if (val >= 1 && val <= 31) {
          this.checkData.payDay = e.target.value = val;
          this.reg.mpayDay = false;
        } else {
          this.checkData.payDay = e.target.value = val = '';
          this.reg.mpayDay = true;
        }
      },
      childNumver(val, e) {
        val = parseInt(val);
        if (val >= 0 && val <= 99) {
          this.checkData.childCount = val;
        } else {
          this.checkData.childCount = " ";
        }
      },
      EmpNum(val, e) {
        val = parseInt(val);
        if (val >= 0 && val <= 99999) {
          this.checkData.selfempCount = val;
          this.workInf.empNumber = false;
        } else {
          this.checkData.selfempCount = val = " ";
          this.workInf.empNumber = true;
        }
      },
      btnnn() {
        this.checkData.fbalance != null && this.checkData.fbalance.toString().indexOf(',') != -1 ? this.checkData.fbalance =
          this.checkData.fbalance.split(",").join('') : this.checkData.fbalance;
        this.checkData.iloanAmt != null && this.checkData.iloanAmt.toString().indexOf(',') != -1 ? this.checkData.iloanAmt =
          this.checkData.iloanAmt.split(",").join('') : this.checkData.iloanAmt;
        this.checkData.avgsalaryamt != null && this.checkData.avgsalaryamt.toString().indexOf(',') != -1 ? this.checkData
          .avgsalaryamt = this.checkData.avgsalaryamt.split(",").join('') : this.checkData.avgsalaryamt;
        this.checkData.regcapitalamt != null && this.checkData.regcapitalamt.toString().indexOf(',') != -1 ? this.checkData
          .regcapitalamt =
          this.checkData.regcapitalamt.split(",").join('') : this.checkData.regcapitalamt;
        this.checkData.profitamountmamt != null && this.checkData.profitamountmamt.toString().indexOf(',') != -1 ?
          this.checkData
          .profitamountmamt =
          this.checkData.profitamountmamt.split(",").join('') : this.checkData.profitamountmamt;
        this.checkData.monthrentamt != null && this.checkData.monthrentamt.toString().indexOf(',') != -1 ? this.checkData
          .monthrentamt =
          this.checkData.monthrentamt.split(",").join('') : this.checkData.monthrentamt;
        this.checkData.oneYearProfitamt != null && this.checkData.oneYearProfitamt.toString().indexOf(',') != -1 ? this
          .checkData.oneYearProfitamt =
          this.checkData.oneYearProfitamt.split(",").join('') : this.checkData.oneYearProfitamt;
        this.checkData.spouseIncome != null && this.checkData.spouseIncome.toString().indexOf(',') != -1 ? this.checkData
          .spouseIncome =
          this.checkData.spouseIncome.split(",").join('') : this.checkData.spouseIncome;
        this.checkData.childPaycostamt != null && this.checkData.childPaycostamt.toString().indexOf(',') != -1 ? this.checkData
          .childPaycostamt =
          this.checkData.childPaycostamt.split(",").join('') : this.checkData.childPaycostamt;
        this.checkData.parentIncome != null && this.checkData.parentIncome.toString().indexOf(',') != -1 ? this.checkData
          .parentIncome =
          this.checkData.parentIncome.split(",").join('') : this.checkData.parentIncome;
        this.checkData.fconsumption != null && this.checkData.fconsumption.toString().indexOf(',') != -1 ? this.checkData
          .fconsumption =
          this.checkData.fconsumption.split(",").join('') : this.checkData.fconsumption;
      },
      mountM() {
        this.checkData.fbalance ? this.checkData.fbalance = this._formatNumber(this.checkData.fbalance) : this.checkData
          .fbalance;
        this.checkData.iloanAmt ? this.checkData.iloanAmt = this._formatNumber(this.checkData.iloanAmt) : this.checkData
          .iloanAmt;
        this.checkData.avgsalaryamt ? this.checkData.avgsalaryamt = this._formatNumber(this.checkData.avgsalaryamt) :
          this.checkData.avgsalaryamt;
        this.checkData.regcapitalamt ? this.checkData.regcapitalamt = this._formatNumber(this.checkData.regcapitalamt) :
          this.checkData.regcapitalamt;
        this.checkData.profitamountmamt ? this.checkData.profitamountmamt = this._formatNumber(this.checkData.profitamountmamt) :
          this.checkData.profitamountmamt;
        this.checkData.monthrentamt ? this.checkData.monthrentamt = this._formatNumber(this.checkData.monthrentamt) :
          this.checkData.monthrentamt;
        this.checkData.oneYearProfitamt ? this.checkData.oneYearProfitamt = this._formatNumber(this.checkData.oneYearProfitamt) :
          this.checkData.oneYearProfitamt;
        this.checkData.spouseIncome ? this.checkData.spouseIncome = this._formatNumber(this.checkData.spouseIncome) :
          this.checkData.spouseIncome;
        this.checkData.childPaycostamt ? this.checkData.childPaycostamt = this._formatNumber(this.checkData.childPaycostamt) :
          this.checkData.childPaycostamt;
        this.checkData.parentIncome ? this.checkData.parentIncome = this._formatNumber(this.checkData.parentIncome) :
          this.checkData.parentIncome;
        this.checkData.fconsumption ? this.checkData.fconsumption = this._formatNumber(this.checkData.fconsumption) :
          this.checkData.fconsumption;
        this.checkData.selfpremisesArea ? this.checkData.selfpremisesArea = this._formatNumber(this.checkData.selfpremisesArea, ) :
          this.checkData.selfpremisesArea;
        this.checkData.selfhasProportion ? this.checkData.selfhasProportion = this._formatNumber(this.checkData.selfhasProportion, ) :
          this.checkData.selfhasProportion;
      },
      borrM() {
        this.borDebt.houseLoanAmt = this._formatNumber(this.borDebt.houseLoanAmt);
        this.borDebt.carLoanAmt = this._formatNumber(this.borDebt.carLoanAmt);
        this.borDebt.loanNumber = this._formatNumber(this.borDebt.loanNumber);
        this.borDebt.monthRepayAmt = this._formatNumber(this.borDebt.monthRepayAmt);
        this.borDebt.otherLoanAmt = this._formatNumber(this.borDebt.otherLoanAmt);
        this.borDebt.studentLoanAmt = this._formatNumber(this.borDebt.studentLoanAmt);
        this.borDebt.totalLoan = this._formatNumber(this.borDebt.totalLoan);
      },
      mountC() {
        // 获取查询列表数据
        this.post("/creauditInfo/queryCreauditInfoObj", {
          applyId: this.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            console.log(res)
            console.log(11, res.data)
            let resp = res.data;
            console.log(resp)
            // 原借款人资料信息
            this.loanDetailList = resp.loanDetailList ? resp.loanDetailList : []; // 贷款明细
            console.log(1, this.loanDetailList)
            console.log(2, resp.loanDetailList)
            // this.borDebt = resp.borDebt ? resp.borDebt : {}; // 负债信息
            if (resp.borDebt && JSON.stringify(resp.borDebt) != '{}') { // 负债信息
              this.borDebt = resp.borDebt;
              this.arr[0] = this.borDebt.monthRepayAmt ? this.borDebt.monthRepayAmt : 0; //信用卡每月还款
              this.arr[1] = this.borDebt.monthRepayAmt ? this.borDebt.studentLoanAmt : 0; //信用贷每月还款额
              this.arr[2] = this.borDebt.monthRepayAmt ? this.borDebt.houseLoanAmt : 0; //房贷每月还款额
              this.arr[3] = this.borDebt.monthRepayAmt ? this.borDebt.carLoanAmt : 0; //车贷每月还款额
              this.arr[4] = this.borDebt.monthRepayAmt ? this.borDebt.otherLoanAmt : 0; //其他贷款每月还款额
              this.borrM();
            }
            this.incomeList = resp.incomeList ? resp.incomeList : []; //  流水明细
            if (resp.otherInfo) { // 其他信息
              this.otherInfo.id = resp.otherInfo.id ? resp.otherInfo.id : '';
              this.otherInfo.content = resp.otherInfo.content ? resp.otherInfo.content : '';
            }
            // 原申请表信息
            this.checkData = resp.creauditInfoDto;
            this.Percent = this.checkData.selfhasProportion
            this.acreage = this.checkData.selfpremisesArea;
            this.checkData.applyId = this.applyId;
            this.mountM();
            this.AreaNPercent();
            this.checkData.aaddress ? this.checkData.aaddress = this.checkData.aaddress.replace(/null/g, '') : this
              .checkData.aaddress;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      // 借款人资料部分
      postcode(value, flag) {
        console.log(value, flag)
        switch (flag) {
          //剩余还款月数（贷款明细）
          case 'remainMonth':
            value.remainMonth = this._postcode(value.remainMonth);
            break;
          case 'overTimes':
            value.overTimes = this._postcode(value.overTimes);
            break; //累计逾期次数
          case 'maxOverTimes':
            value.maxOverTimes = this._postcode(value.maxOverTimes);
            break; //最高逾期期数
            //  负债信息
          case 'loanNumber':
            this.borDebt.loanNumber = this._postcode(value);
            break; //最高逾期期数
            // this. borDebt.
        }
      },
      _postcode(value) {
        if (value == '' || isNaN(value)) return value = '';
        value = value * 1;
        if (value <= 0) {
          return value = 0;
        } else if (value > 0 && value < 999) {
          return value = Math.round(value);
        } else if (value >= 999) {
          return value = 999;
        }
      },
      moneyBlur(value, flag, type) {
        let regs = /\,/g;
        console.log(1, value)
        if (flag == 'loanContValue') value.loanContValue = this._moneyBlur(value.loanContValue); //贷款合同金额
        if (flag == 'loanBal') value.loanBal = this._moneyBlur(value.loanBal); //贷款余额
        if (flag == 'presentRepayAmt') value.presentRepayAmt = this._moneyBlur(value.presentRepayAmt); //本期应还款金额
        if (flag == 'curMonthRepayAmt') value.curMonthRepayAmt = this._moneyBlur(value.curMonthRepayAmt); //本期实际还款金额
        if (flag == 'presentOverAmt') value.presentOverAmt = this._moneyBlur(value.presentOverAmt); //当前逾期金额
        //负债信息
        if (type == 'debet') {
          let _value = value;
          value = this._moneyBlur(value);
          if (flag == 'monthRepayAmt') {
            this.borDebt.monthRepayAmt = value; //信用卡每月还款
            this.arr[0] = _value;
          }
          if (flag == 'studentLoanAmt') {
            this.borDebt.studentLoanAmt = value; //信用贷每月还款额
            this.arr[1] = _value;
          }
          if (flag == 'houseLoanAmt') {
            this.borDebt.houseLoanAmt = value //房贷每月还款额
            this.arr[2] = _value * 0.6;
          }
          if (flag == 'carLoanAmt') {
            this.borDebt.carLoanAmt = value //车贷每月还款额
            this.arr[3] = _value * 0.6;
          }
          if (flag == 'otherLoanAmt') {
            this.borDebt.otherLoanAmt = value //其他贷款每月还款额
            this.arr[4] = _value * 0.5;
          }
          this.totalNum();
        }
        // if (flag == 'carLoanAmt') this.borDebt.carLoanAmt = this._moneyBlur(this.borDebt.carLoanAmt); //车贷每月还款额
        // if (flag == 'carLoanAmt') this.borDebt.carLoanAmt = this._moneyBlur(this.borDebt.carLoanAmt); //车贷每月还款额
      },
      _moneyBlur(value) {
        if (value == 0) return '0.00';
        if (!value) return '';
        let regs = /\,/g;
        value = value.replace(regs, '') * 1;
        if (isNaN(value)) return '0.00';
        if (value > 99999999999999.98) {
          value = '99,999,999,999,999.98';
        } else {
          value = this._formatNumber(value);
        };
        return value
      },
      // 贷款明细
      totalNum() {
        this.borDebt.totalLoan = 0;
        for (var i = 0; i < this.arr.length; i++) {
          // if (this.arr[i] == null) {
          //   this.arr[i] = 0;
          // } else if (this.arr[i] != null) {
          // console.log(this.arr[i])
          this.borDebt.totalLoan += this.arr[i] * 1;
          // }
        }
        this.borDebt.totalLoan = this._formatNumber(this.borDebt.totalLoan);
      },
      add_loanDetail: function (event) {
        event.stopPropagation();
        let obj = {
          "applyId": this.applyId, // 申请单Id
          "loanType": "", // 贷款种类
          "guaranteeType": "", // 担保方式
          "accountStatus": "", // 账户状态
          "repayFrequency": "", // 还款频率
          "loanBeginDate": "", // 贷款发放日期
          "loanExpireDate": "", // 贷款到期日
          "loanContValue": "", // 贷款合同金额[元]
          "loanRepayDate": "", // 应还款日期
          "loanBal": "", // 贷款余额
          "remainMonth": "", // 剩余还款月数
          "presentRepayAmt": "", // 本期应还款金额[元]
          "curMonthRepayAmt": "", // 本期实际还款金额[元]
          "lastRepayDate": "", // 最后一次还款日期
          "presentOverAmt": "", // 当前逾期金额[元]
          "overTimes": "", // 累计逾期次数
          "maxOverTimes": "", // 最高逾期期数
        };
        // if (this.loanDetailList.length >= 0) {
        if (this.loanDetailList.length > 0 && (this.loanDetailList[this.loanDetailList.length - 1].loanType == '' ||
            this.loanDetailList[this.loanDetailList
              .length - 1].guaranteeType == '' || this.loanDetailList[this.loanDetailList.length - 1].accountStatus ==
            '')) {
          return
        } else {
          this.loanDetailList.push(obj);
        }
        // } 
      },
      delet_loanDetail(event) {
        event.stopPropagation();
        for (var i = 0; i < this.loanDetailList.length; i++) {
          if (this.loanDetailList[i] == this.currentRowLoan) {
            this.loanDetailList.splice(i, 1);
          }
        }
      },
      /*统计按钮*/
      countNum(event) {
        event.stopPropagation();
        this.k = this.l = this.m = this.n = this.o = this.p = this.q = this.r = this.s = this.u = this.v = this.w = 0;
        //车贷共有笔数
        // this.k = this.l = this.m = 0;
        // this.k = 0;
        // this.l = 0;
        // this.m = 0;
        //信用贷共有笔数
        // this.n = this.o = this.p = 0;
        // this.n = 0;
        //   this.o = 0;
        //   this.p = 0;
        //房贷共有笔数
        // this.q = this.r = this.s = 0;
        // this.q = 0;
        // this.r = 0;
        // this.s = 0;
        //其他贷共有笔数
        // this.u = this.v = this.w = 0;
        // this.u = 0;
        // this.v = 0;
        // this.w = 0;
        console.log(this.loanDetailList)
        for (var i = 0; i < this.loanDetailList.length; i++) {
          if (this.loanDetailList[i].loanType == '01') {
            this.k += 1;
            if (this.loanDetailList[i].accountStatus == '00') this.l += 1;
            if (this.loanDetailList[i].accountStatus == '02') this.m += 1;
          }
          // if (this.loanDetailList[i].loanType == '01' && this.loanDetailList[i].accountStatus == '00') {
          //   this.l += 1;
          // }
          // if (this.loanDetailList[i].loanType == '01' && this.loanDetailList[i].accountStatus == '02') {
          //   this.m += 1;
          // }
          //信用贷
          if (this.loanDetailList[i].loanType == '03') {
            this.n += 1;
            if (this.loanDetailList[i].accountStatus == '00') this.o += 1;
            if (this.loanDetailList[i].accountStatus == '02') this.p += 1;
          }
          // if (this.loanDetailList[i].loanType == '03' && this.loanDetailList[i].accountStatus == '00') {
          //   this.o += 1;
          // }
          // if (this.loanDetailList[i].loanType == '03' && this.loanDetailList[i].accountStatus == '02') {
          //   this.p += 1;
          // }
          //房贷
          if (this.loanDetailList[i].loanType == '02') {
            this.q += 1;
            if (this.loanDetailList[i].accountStatus == '00') this.r += 1;
            if (this.loanDetailList[i].accountStatus == '02') this.s += 1;
          }
          // if (this.loanDetailList[i].loanType == '02' && this.loanDetailList[i].accountStatus == '00') {
          //   this.r += 1;
          // }
          // if (this.loanDetailList[i].loanType == '02' && this.loanDetailList[i].accountStatus == '02') {
          //   this.s += 1;
          // }
          //其他贷
          if (this.loanDetailList[i].loanType == '04') {
            this.u += 1;
            if (this.loanDetailList[i].accountStatus == '00') this.v += 1;
            if (this.loanDetailList[i].accountStatus == '02') this.w += 1;
          }
          // if (this.loanDetailList[i].loanType == '04' && this.loanDetailList[i].accountStatus == '00') {
          //   this.v += 1;
          // }
          // if (this.loanDetailList[i].loanType == '04' && this.loanDetailList[i].accountStatus == '02') {
          //   this.w += 1;
          // }
        };
        //车贷
        console.log('k',this.k)
        this.loanInfo.carLoanTotal = this.k;
        this.loanInfo.carLoanNoPayoff = this.l;
        this.loanInfo.carLoanPayoff = this.m;
        //信用贷
        this.loanInfo.studentLoanTotal = this.n;
        this.loanInfo.studentLoanNoPayoff = this.o;
        this.loanInfo.studentLoanPayoff = this.p;
        //房贷
        this.loanInfo.houseLoanTotal = this.q;
        this.loanInfo.houseLoanNoPayoff = this.r;
        this.loanInfo.houseLoanPayoff = this.s;
        //其他贷
        this.loanInfo.otherLoanTotal = this.u;
        this.loanInfo.otherLoanNoPayoff = this.v;
        this.loanInfo.otherLoanPayoff = this.w;
        console.log(11111,this.loanInfo.carLoanTotal)
      },
      loanCurrentChange(val) {
        if (val == null) {
          this.currentRowLoan = '';
        } else {
          this.currentRowLoan = val;
        };
      },
      // 流水明细
      counted(row) {
        if (row.incomeType == '') {
          return
        } else {
          var totalNum = row.n.split(',').join("") * 1 + row.n1.split(',').join("") * 1 + row.n2.split(',').join("") *
            1 + row.n3.split(',').join("") * 1 + row.n4.split(',').join("") * 1 + row.n5.split(',').join("") * 1;
          row.avgIncome = totalNum / 6;
          row.avgIncome = this._formatNumber(row.avgIncome);
        }
      },
      incomeCurrentChange(val) {
        if (val == null) {
          this.currentRowIncome = '';
        } else {
          this.currentRowIncome = val;
        };
      },
      add_turnover: function (event) {
        event.stopPropagation();
        let obj = {
          "applyId": this.applyId, // 申请单Id    
          "incomeType": "", // 流水类型
          "n": "",
          "n1": "",
          "n2": "",
          "n3": "",
          "n4": "",
          "n5": "",
          "avgIncome": "" // 平均收入
        };
        // if (this.incomeList.length == 0) {
        //   this.incomeList.push(obj);
        // } else {
        if (this.incomeList.length > 0 && this.incomeList[this.incomeList.length - 1].incomeType == '') {
          return
        } else {
          this.incomeList.push(obj);
          // }
        };
      },
      delet_turnover(event) {
        event.stopPropagation();
        for (var i = 0; i < this.incomeList.length; i++) {
          if (this.incomeList[i] == this.currentRowIncome) {
            this.incomeList.splice(i, 1);
          }
        }
      },
    },
    mounted() {
      this.mountedInf();
      // 省    
      this.post("/credit/queryProvince").then(res => {
        this.hirecomAddress = res.data.ereaInfos;
      });
      // 所属行业 
      this.post("/credit/industry").then(res => {
        this.hirecomKind = res.data;
      })
    },
  }

</script>

<style scoped>
  .CreditForm input {
    border: 1px solid rgb(229, 229, 229);
    border-radius: 4px;
    height: 30px;
    outline: none;
    padding: 0 7px;
    font-size: inherit;
    color: #5a5e66;
  }

  ::-webkit-input-placeholder {
    color: #b4bccc;
    font-size: 14px;
  }

  :-moz-placeholder {
    color: #b4bccc;
    font-size: 14px;
  }

  ::-moz-placeholder {
    color: #b4bccc;
    font-size: 14px;
  }

  :-ms-input-placeholder {
    color: #b4bccc;
    font-size: 14px;
  }

  .hint {
    color: #ff7676;
    font-size: 12px;
    width: 100%;
    position: absolute;
    top: -22px;
  }


  .btn {
    margin: 20px 0 0 250px;
  }

  /* .specialInput {
    width: calc(100% - 230px);
  } */

  .internet_textarea {
    padding-left: 8px;
  }

  .Working_middle {
    padding-left: 211px;
  }

  .Working_right {
    padding-left: 150px;
  }

</style>
