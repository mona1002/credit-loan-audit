<template>
  <div class="SocialSecurity">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">报告信息</span>
        </template>
        <!-- <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">申请类型：</label>
              <span>{{datas.appTypeTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">借款人类型：</label>
              <span>{{datas.borrTypeTxt}}</span>
            </li>
            <li></li>
            <li>
              <label class="label_width_166">获客渠道：</label>
              <span>{{datas.sourcesChanTxt}}</span>
            </li>
            <li style="width:66.6%">
              <p v-if="datas.sourcesChanTxt == '其他'">
                <label class="label_width_166">获客渠道说明：</label>
                <span>{{datas.sourcesChanRemark}}</span>
              </p>
            </li>
            <li>
              <label class="label_width_166">团队经理：</label>
              <span>{{datas.teamLeaderName}}</span>
            </li>
            <li>
              <label class="label_width_166">直销人员：</label>
              <span>{{datas.salPerName}}</span>
            </li>
            <li>
              <label class="label_width_166">直销人员联系方式：</label>
              <span>{{datas.salPerTel}}</span>
            </li>
            <li>
              <label class="label_width_166">家人是否知晓本借款：</label>
              <span>{{datas.famKnowFlagTxt}}</span>
            </li>
            <li>
              <p v-if="datas.famKnowFlag=='1'">
                <label class="label_width_166">知晓人姓名：</label>
                <span>{{datas.knowerName}}</span>
              </p>
            </li>
            <li>
              <p v-if="datas.famKnowFlag=='1'">
                <label class="label_width_166">与本人关系：</label>
                <span>{{datas.knowerRelationTxt}}</span>
              </p>
            </li>
            <li>
              <label class="label_width_166">客户符合何种产品：</label>
              <span>{{datas.proName}}</span>
            </li>
            <li>
              <label class="label_width_166">紧急程度：</label>
              <span>{{datas.emerTypeTxt}}</span>
            </li>
            <li>
              <p v-if="datas.emerType=='02'">
                <label class="label_width_166">加急费用[元]：</label>
                <span>{{datas.emerAmt}}</span>
              </p>
            </li>
          </ul>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账户信息</span>
        </template>
        <!-- <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">借款用途：</label>
              <span>{{accepApplyLoan.loanPurposeTxt}}</span>
            </li>
            <li style="width:66.6%;height:auto;min-height:24px;">
              <p class="text_area_li" style="margin-bottom:5px;" v-if="accepApplyLoan.loanPurposeTxt == '其他消费'">
                <label class="label_width_166">借款用途说明：</label>
                <el-tooltip class="item" effect="dark" :content="accepApplyLoan.loanPurposeNote" :disabled="accepApplyLoan.loanPurposeNote==null"
                  placement="top-start">
                  <span class="text_area_span text_area_span_minus170">{{accepApplyLoan.loanPurposeNote}}</span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <label class="label_width_166">申请借款额度[元]：</label>
              <span>{{accepApplyLoan.loanAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">借款期限[月]：</label>
              <span>{{accepApplyLoan.loanTerm}}</span>
            </li>
            <li>
              <label class="label_width_166">可接受最高月还款额[元]：</label>
              <span>{{accepApplyLoan.eachTermAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">借款类型：</label>
              <span>{{accepApplyLoan.loanTypeTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">担保方式：</label>
              <span>{{accepApplyLoan.guarnTypeTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">还款资金来源：</label>
              <span>{{accepApplyLoan.repaySourceTxt}}</span>
            </li>
            <li style="width:66.6%;height:auto;margin-top:5px" v-if="accepApplyLoan.repaySource=='03'">
              <label class="label_width_166">其他渠道还款说明：</label>
              <el-tooltip class="item" effect="dark" :content="accepApplyLoan.loanPurposeNote" :disabled="accepApplyLoan.loanPurposeNote==null"
                placement="top-start">
                <span class="text_area_span text_area_span_minus170">{{accepApplyLoan.loanPurposeNote}}</span>
              </el-tooltip>
            </li>
          </ul>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">您的个人信息</span>
        </template>
        <!-- <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">客户名称：</label>
              <span>{{accepCusBasicInfo.custName}}</span>
            </li>
            <li>
              <label class="label_width_166">性别：</label>
              <span>{{accepCusBasicInfo.sexTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">移动电话：</label>
              <span>{{accepCusBasicInfo.mobile}}</span>
            </li>
            <li>
              <label class="label_width_166">证件类型：</label>
              <span>{{accepCusBasicInfo.certTypeTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">证件号码：</label>
              <span>{{accepCusBasicInfo.certCode}}</span>
            </li>
            <li>
              <label class="label_width_166">年龄：</label>
              <span>{{accepCusBasicInfo.age}}</span>
            </li>
            <li style=" width:66.6%;height:auto;margin-top:5px;">
              <label class="label_width_166">借款人其他联系方式：</label>
              <span class="text_area_span text_area_span_minus170">{{accepCusBasicInfo.otherContacts}}</span>
            </li>
            <li style='clear:both;'>
              <label class="label_width_166">婚姻状况：</label>
              <span>{{accepCusBasicInfo.marrFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">有无子女：</label>
              <span>{{accepCusBasicInfo.childFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">最高学历：</label>
              <span>{{accepCusBasicInfo.diplomaFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">电子邮箱：</label>
              <span>{{accepCusBasicInfo.email}}</span>
            </li>
            <li>
              <label class="label_width_166">住宅类型：</label>
              <span>{{accepCusBasicInfo.residentialTypeTxt}}</span>
            </li>
            <li>
              <p v-if="accepCusBasicInfo.residentialType=='01' || accepCusBasicInfo.residentialType=='02' || accepCusBasicInfo.residentialType=='03'">
                <label class="label_width_166">每月租金/还款额[元]：</label>
                <span>{{accepCusBasicInfo.monthRentAmt}}</span>
              </p>
            </li>
            <li style="width:66.6%">
              <label class="label_width_166">户口所在地：</label>
              <span>{{accepCusBasicInfo.homeDetailAddr}}</span>
            </li>
            <li>
              <label class="label_width_166">是否与户口地一致：</label>
              <span>{{accepCusBasicInfo.homeAddressSameTxt}}</span>
            </li>
            <li style="width:66.6%">
              <label class="label_width_166">现住宅地址：</label>
              <span>{{accepCusBasicInfo.liveAddr}}</span>
            </li>
            <li>
              <label class="label_width_166">优先联系地址：</label>
              <span>{{accepCusBasicInfo.priorityContactAddressTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">借款人职业情况：</label>
              <span>{{accepCusBasicInfo.professionTxt}}</span>
            </li>
            <li style=" width:66.6%;height:auto;margin-top:5px;clear:both;">
              <label class="label_width_166">收入来源：</label>
              <span class="text_area_span text_area_span_minus170">{{accepCusBasicInfo.incomeSource}}</span>
            </li>
            <li style=" width:66.6%;height:auto;">
              <label class="label_width_166">其他收入：</label>
              <span class="text_area_span text_area_span_minus170">{{accepCusBasicInfo.otherIncome}}</span>
            </li>
            <li style="clear:both;">
              <label class="label_width_166">供养人数：</label>
              <span>{{accepCusBasicInfo.keepNum}}</span>
            </li>
            <li>
              <label class="label_width_166">起始居住时间：</label>
              <span>{{accepCusBasicInfo.liveBeginDate}}</span>
            </li>
            <li>
              <label class="label_width_166">住宅电话：</label>
              <span>{{accepCusBasicInfo.homeTel}}</span>
            </li>
            <li>
              <label class="label_width_166">每月家庭支出[元]：</label>
              <span>{{accepCusBasicInfo.payAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">单张信用卡最高额度[元]：</label>
              <span>{{accepCusBasicInfo.cardMaxAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">您来本市年份：</label>
              <span>{{accepCusBasicInfo.comeYear}}</span>
            </li>
            <li>
              <label class="label_width_166">银行开户名称：</label>
              <span>{{accepCusBasicInfo.bankName}}</span>
            </li>
            <li>
              <label class="label_width_166">银行卡所属分行：</label>
              <span>{{accepCusBasicInfo.bankBranch}}</span>
            </li>
            <li>
              <label class="label_width_166">常用储蓄卡卡号：</label>
              <span>{{accepCusBasicInfo.accountCode}}</span>
            </li>
            <li>
              <label class="label_width_166">网查征信用户名：</label>
              <span>{{accepCusBasicInfo.netCreditUsername}}</span>
            </li>
            <li>
              <label class="label_width_166">网查征信用户密码：</label>
              <span>{{accepCusBasicInfo.netCreditPassword}}</span>
            </li>
            <li>
              <label class="label_width_166">是否缴纳商业保险：</label>
              <span>{{accepCusBasicInfo.isPayInsuranceTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">是否是私营业主：</label>
              <span>{{accepCusBasicInfo.privateOwnerFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">是否同业贷：</label>
              <span>{{accepCusBasicInfo.isInterBankLoanTxt}}</span>
            </li>
          </ul>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">私人业主信息</span>
        </template>
        <!-- <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">企业类型：</label>
              <span>{{accepCusPrivate.compTypeTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">员工人数：</label>
              <span>{{accepCusPrivate.empNumber}}</span>
            </li>
            <li>
              <label class="label_width_166">公司注册时间：</label>
              <span>{{accepCusPrivate.comPegDate}}</span>
            </li>
            <li>
              <label class="label_width_166">占股比例：</label>
              <span>{{accepCusPrivate.proShare}}</span>
            </li>
            <li>
              <label class="label_width_166">经营场所：</label>
              <span>{{accepCusPrivate.busiPlaceTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">注册资金[万元]：</label>
              <span>{{accepCusPrivate.regCapitalAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业净利润率：</label>
              <span>{{accepCusPrivate.profitMargin}}</span>
            </li>
            <li>
              <label class="label_width_166">每月净利润额[万元]：</label>
              <span>{{accepCusPrivate.profitAmountMAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">营业执照编号：</label>
              <span>{{accepCusPrivate.busiLicenceCode}}</span>
            </li>
            <li>
              <label class="label_width_166">是否缴纳五险一金：</label>
              <span>{{accepCusPrivate.isPayWealTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">月还款额/月租金[万元]：</label>
              <span>{{accepCusPrivate.monthRentAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">营业面积：</label>
              <span>{{accepCusPrivate.busiArea}}</span>
            </li>
            <li style='width:66.6%;height:auto;margin-top:5px;'>
              <label>企业经营项目说明：</label>
              <el-tooltip class="item" effect="dark" :content="accepCusPrivate.projectManage" :disabled="accepCusPrivate.projectManage==null"
                placement="top-start">
                <span class="text_area_span text_area_span_minus170">{{accepCusPrivate.projectManage}}</span>
              </el-tooltip>
            </li>
            <li style="clear:both;">
              <label class="label_width_166">淡季月份：</label>
              <span>{{accepCusPrivate.slowMonth}}</span>
            </li>
            <li>
              <label class="label_width_166">旺季月份：</label>
              <span>{{accepCusPrivate.peakMonth}}</span>
            </li>
            <li>
              <label class="label_width_166">平季月份：</label>
              <span>{{accepCusPrivate.avgMonth}}</span>
            </li>
            <li>
              <label class="label_width_166">淡季销售额[万元]：</label>
              <span>{{accepCusPrivate.slowMonthSaleAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">旺季销售额[万元]：</label>
              <span>{{accepCusPrivate.peakMonthSaleAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">平季销售额[万元]：</label>
              <span>{{accepCusPrivate.avgMonthSaleAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业近利润[万元]：</label>
              <span>{{accepCusPrivate.oneYearProfitAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业近两年利润[万元]：</label>
              <span>{{accepCusPrivate.twoYearProfitAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业近三年利润[万元]：</label>
              <span>{{accepCusPrivate.threeYearProfitAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业近一年纳税额[万元]：</label>
              <span>{{accepCusPrivate.oneYearTaxAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业近两年纳税额[万元]：</label>
              <span>{{accepCusPrivate.twoYearTaxAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">企业近三年纳税额[万元]：</label>
              <span>{{accepCusPrivate.threeYearTaxAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">第一供销商：</label>
              <span>{{accepCusPrivate.firstSuppliers}}</span>
            </li>
            <li>
              <label class="label_width_166">第二供销商：</label>
              <span>{{accepCusPrivate.secondSuppliers}}</span>
            </li>
            <li>
              <label class="label_width_166">第三供销商：</label>
              <span>{{accepCusPrivate.thirdSuppliers}}</span>
            </li>
            <li>
              <label class="label_width_166">第一分销商：</label>
              <span>{{accepCusPrivate.firstDistributor}}</span>
            </li>
            <li>
              <label class="label_width_166">第二分销商：</label>
              <span>{{accepCusPrivate.secondDistributor}}</span>
            </li>
            <li>
              <label class="label_width_166">第三分销商：</label>
              <span>{{accepCusPrivate.thirdDistributor}}</span>
            </li>
          </ul>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">同业贷情况</span>
        </template>
        <!-- <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">同业机构名称：</label>
              <span>{{accepCusInterBankLoan.interBankTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">贷款产品：</label>
              <span>{{accepCusInterBankLoan.loanPro}}</span>
            </li>
            <li>
              <label class="label_width_166">贷款额度[元]：</label>
              <span>{{accepCusInterBankLoan.loanTotalAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">贷款生效日期：</label>
              <span>{{accepCusInterBankLoan.loanEffectDate}}</span>
            </li>
            <li>
              <label class="label_width_166">贷款总期限[月]：</label>
              <span>{{accepCusInterBankLoan.loanPeriod}}</span>
            </li>
            <li>
              <label class="label_width_166">每月还款日：</label>
              <span>{{accepCusInterBankLoan.eachPayDay}}</span>
            </li>
            <li>
              <label class="label_width_166">还款额度[元]：</label>
              <span>{{accepCusInterBankLoan.repayAmt}}</span>
            </li>
          </ul>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">保险信息</span>
        </template>
        <!-- <div class="height_auto">
          <el-table :data="accepCusInsurances" style="width: 100%" border class="insur">
            <el-table-column type="index" :index='1' label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="insurCompanyName" label="保险公司" min-width="120">
            </el-table-column>
            <el-table-column prop="insurTypeTxt" label="保险类型" min-width="120">
            </el-table-column>
            <el-table-column prop="insurPayWayTxt" label="缴费方式" min-width="100">
            </el-table-column>
            <el-table-column prop="eachPayAmt" label="期缴保费金额[元]" min-width="120">
            </el-table-column>
            <el-table-column prop="totalPayAmt" label="保单总额[元]" min-width="120">
            </el-table-column>
            <el-table-column prop="payPeriod" label="缴纳年限[月]" min-width="120">
            </el-table-column>
            <el-table-column prop="insurEffectDate" label="生效日期" min-width="120">
            </el-table-column>
          </el-table>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">房产信息</span>
        </template>
        <!-- <div class="height_auto">
          <el-table :data="accepCusEstates" style="width: 100%" border class="house">
            <el-table-column type="index" :index='1' label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="estateType" label="房产类型" min-width="100">
            </el-table-column>
            <el-table-column prop="propertyType" label="产权性质" min-width="80">
            </el-table-column>
            <el-table-column prop="coveredArea" label="建筑面积[m²]" min-width="110">
            </el-table-column>
            <el-table-column prop="unitPrice" label="建筑单价[元]" min-width="110">
            </el-table-column>
            <el-table-column prop="estateAddress" label="房产地址" show-overflow-tooltip min-width="200">
            </el-table-column>
            <el-table-column prop="estateZip" label="邮政编码" min-width="70">
            </el-table-column>
            <el-table-column prop="equityRatio" label="产权比例[%]" min-width="100">
            </el-table-column>
            <el-table-column prop="loanPeriod" label="贷款期限[月]" min-width="120">
            </el-table-column>
            <el-table-column prop="mortgageStatus" label="抵押状况" min-width="80">
            </el-table-column>
            <el-table-column prop="monthlyPay" label="月供[元]" min-width="80">
            </el-table-column>
            <el-table-column prop="restLoans" label="贷款余额[元]" min-width="120">
            </el-table-column>
            <el-table-column prop="estateShare" label="房产是否共有" min-width="120">
            </el-table-column>
          </el-table>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">车辆信息</span>
        </template>
        <!-- <div class="height_auto">
          <el-table :data="accepCusCarInfos" style="width: 100%" border class="car">
            <el-table-column type="index" :index='1' label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="carPrice" label="车辆购置价[元]" min-width="110">
            </el-table-column>
            <el-table-column prop="isYearCheckTxt" label="是否年检" min-width="100">
            </el-table-column>
            <el-table-column prop="isOperateTxt" label="是否非运营" min-width="100">
            </el-table-column>
            <el-table-column prop="carModel" label="车辆型号" min-width="100">
            </el-table-column>
            <el-table-column prop="carTypeTxt" label="车辆类型" min-width="100">
            </el-table-column>
            <el-table-column prop="loanPeriod" label="贷款期限[月]" min-width="100">
            </el-table-column>
            <el-table-column prop="monthlyPay" label="月供[元]" min-width="100">
            </el-table-column>
            <el-table-column prop="restLoans" label="贷款余额[月]" min-width="100">
            </el-table-column>
            <el-table-column prop="carNo" label="车牌号码" min-width="100">
            </el-table-column>
            <el-table-column prop="buyInsurTxt" label="车辆已购保险" min-width="100">
            </el-table-column>
            <el-table-column prop="buyDate" label="购买时间" min-width="120">
            </el-table-column>
            <el-table-column prop="carShare" label="车产是否共有" min-width="100">
            </el-table-column>
            <el-table-column prop="carMortgage" label="车产是否抵押" min-width="100">
            </el-table-column>
          </el-table>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">您的工作信息</span>
        </template>
        <!-- <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li style="width:66.6%;">
              <label class="label_width_166">工作单位：</label>
              <span>{{accepCusWorkInfo.workName}}</span>
            </li>
            <li>
              <label class="label_width_166">单位性质：</label>
              <span>{{accepCusWorkInfo.workSignTxt}}</span>
            </li>
            <li style="width:66.6%;">
              <label class="label_width_166">单位地址：</label>
              <span>{{accepCusWorkInfo.workAddr}}</span>
            </li>
            <li>
              <label class="label_width_166">单位地址邮编：</label>
              <span>{{accepCusWorkInfo.workZip}}</span>
            </li>
            <li>
              <label class="label_width_166">所属行业：</label>
              <span>{{accepCusWorkInfo.workKindName}}</span>
            </li>
            <li>
              <label class="label_width_166">所在部门：</label>
              <span>{{accepCusWorkInfo.workDep}}</span>
            </li>
            <li>
              <label class="label_width_166">职位级别：</label>
              <span>{{accepCusWorkInfo.workPost}}</span>
            </li>
            <li>
              <label class="label_width_166">是否缴纳社保：</label>
              <span>{{accepCusWorkInfo.insureFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">社保缴纳基数[元]：</label>
              <span>{{accepCusWorkInfo.insureBase}}</span>
            </li>
            <li>
              <label class="label_width_166">单位电话：</label>
              <span>{{accepCusWorkInfo.workTel}}</span>
            </li>
            <li>
              <label class="label_width_166">是否缴纳公积金：</label>
              <span>{{accepCusWorkInfo.fundFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">公积金缴纳基数[元]：</label>
              <span>{{accepCusWorkInfo.fundBase}}</span>
            </li>
            <li>
              <label class="label_width_166">入职时间：</label>
              <span>{{accepCusWorkInfo.entryDate}}</span>
            </li>
            <li>
              <label class="label_width_166">月均工资[元]：</label>
              <span>{{accepCusWorkInfo.avgSalaryAmt}}</span>
            </li>
            <li>
              <label class="label_width_166">其他收入[元]：</label>
              <span>{{accepCusWorkInfo.otherIncome}}</span>
            </li>
            <li>
              <label class="label_width_166">每月发薪日：</label>
              <span>{{accepCusWorkInfo.payDay}}</span>
            </li>
            <li>
              <label class="label_width_166">工资发放形式：</label>
              <span>{{accepCusWorkInfo.payFormTxt}}</span>
            </li>
            <li style="width:66.6%;">
              <label class=" label_width_166 ellipsis">前单位名称：</label>
              <el-tooltip class="item" effect="dark" :content="accepCusWorkInfo.befWorkName" :disabled="accepCusWorkInfo.befWorkName==null"
                placement="top-start">
                <span>{{accepCusWorkInfo.befWorkName}}</span>
              </el-tooltip>
            </li>
            <li>
              <label class="label_width_166">前单位电话：</label>
              <span>{{accepCusWorkInfo.befworkTel}}</span>
            </li>

            <li>
              <label class="label_width_166">前单位工作年限[月]：</label>
              <span>{{accepCusWorkInfo.befWorkMonth}}</span>
            </li>
          </ul>
        </div> -->
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import baseurl from '../../../util/ConstantSocialAndPn'

  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      }
    },
    methods:{
        getInf(){
                  this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getSocialInsurReport.action', {
        applySubNo : 'PHDX6409598026121216'
      }).then(res => {
          console.log(res)
        if (res.success) {

          this.$message.error('c成功');

        } else {
          this.$message.error('查询数据失败！');
        }
      });
        }
    },
    mounted() {
console.log(baseurl )
this.getInf();
    }
  }

</script>
