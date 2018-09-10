<!-- 申请信息详情 -->
<template>
  <div class="applicationInformationDetail min_width_1200">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工作人员填写</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">申请类型：</label>
                <span>{{datas.appTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">借款人类型：</label>
                <span>{{datas.borrTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">有无授权机构：</label>
                <span>{{datas.authOrgFlagTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
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
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">您的借款需求</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">是否加入保险计划：</label>
                <span>{{accepApplyLoan.insurancePlanTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <li style="width:66.6%;height:auto;margin-top:5px" v-if="accepApplyLoan.repaySource=='03'">
              <label class="label_width_166">其他渠道还款说明：</label>
              <el-tooltip class="item" effect="dark" :content="accepApplyLoan.loanPurposeNote" :disabled="accepApplyLoan.loanPurposeNote==null"
                placement="top-start">
                <span class="text_area_span text_area_span_minus170">{{accepApplyLoan.loanPurposeNote}}</span>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">您的个人信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style=" width:66.6%;height:auto;margin-top:5px;">
                <label class="label_width_166">借款人其他联系方式：</label>
                <span class="text_area_span text_area_span_minus170">{{accepCusBasicInfo.otherContacts}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style="width:66.6%">
                <label class="label_width_166">户口所在地：</label>
                <span>{{accepCusBasicInfo.homeDetailAddr}}</span>
              </li>
              <li>
                <label class="label_width_166">是否与户口地一致：</label>
                <span>{{accepCusBasicInfo.homeAddressSameTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style=" width:66.6%;height:auto;margin-top:5px;">
                <label class="label_width_166">收入来源：</label>
                <span class="text_area_span text_area_span_minus170">{{accepCusBasicInfo.incomeSource}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style=" width:66.6%;height:auto;">
                <label class="label_width_166">其他收入：</label>
                <span class="text_area_span text_area_span_minus170">{{accepCusBasicInfo.otherIncome}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <li>
              <label class="label_width_166">是否是私营业主：</label>
              <span>{{accepCusBasicInfo.privateOwnerFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">是否同业贷：</label>
              <span>{{accepCusBasicInfo.isInterBankLoanTxt}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4" v-if="accepCusBasicInfo.privateOwnerFlag=='1'">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">私人业主信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style='width:66.6%;height:auto;margin-top:5px;'>
                <label>企业经营项目说明：</label>
                <span class="text_area_span text_area_span_minus170">{{accepCusPrivate.projectManage}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
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
        </div>
      </el-collapse-item>
      <el-collapse-item name="5" v-if="accepCusBasicInfo.isInterBankLoan=='1'">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">同业贷情况</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <li>
              <label class="label_width_166">还款额度[元]：</label>
              <span>{{accepCusInterBankLoan.repayAmt}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">保险信息</span>
        </template>
        <div class="height_auto">
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
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">房产信息</span>
        </template>
        <div class="height_auto">
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
        </div>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">车辆信息</span>
        </template>
        <div class="height_auto">
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
        </div>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">您的工作信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li style="width:66.6%;">
                <label class="label_width_166">工作单位：</label>
                <span>{{accepCusWorkInfo.workName}}</span>
              </li>
              <li>
                <label class="label_width_166">单位性质：</label>
                <span>{{accepCusWorkInfo.workSignTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style="width:66.6%;">
                <label class="label_width_166">单位地址：</label>
                <span>{{accepCusWorkInfo.workAddr}}</span>
              </li>
              <li>
                <label class="label_width_166">单位地址邮编：</label>
                <span>{{accepCusWorkInfo.workZip}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <li>
              <label class="label_width_166">前单位电话：</label>
              <span>{{accepCusWorkInfo.befworkTel}}</span>
            </li>

            <li>
              <label class="label_width_166">前单位工作年限[月]：</label>
              <span>{{accepCusWorkInfo.befWorkMonth}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="10">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">联系人信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="accepCusRelations" style="width: 100%" highlight-current-row border class="people">
            <el-table-column type="index" :index='1' label="序号" width="55">
            </el-table-column>
            <el-table-column prop="contactName" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="contactTypeTxt" label="类型" width="90">
            </el-table-column>
            <el-table-column prop="relationshipTxt" label="关系" width="50">
            </el-table-column>
            <el-table-column prop="mobile" label="手机号码" width="105">
            </el-table-column>
            <el-table-column prop="homeTel" label="住宅电话" width="80">
            </el-table-column>
            <el-table-column prop="contactAge" label="年龄" width="50">
            </el-table-column>
            <el-table-column prop="certTypeTxt" label="证件类型" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="证件号码" width="120">
            </el-table-column>
            <el-table-column prop="workName" label="单位名称" show-overflow-tooltip width="180">
            </el-table-column>
            <el-table-column prop="workTel" label="单位电话" min-width="100">
            </el-table-column>
            <el-table-column prop="homeAddr" label="地址" min-width="200" show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <div v-show="this.judgeFlag.flag == '01' || this.judgeFlag.flag == '02'"> -->
    <div v-show="this.btn">
      <el-button type="primary" @click="maintenanceLog">维护日志</el-button>
    </div>
    <!-- 维护日志弹框 -->
    <div class="weihurizhi">
      <el-dialog title='维护日志' :visible.sync="sldialogVisible" :modal="false" width="860px" top="5vh">
        <p style="margin-bottom:5px;">
          <label @click="renovate">
            <i class="el-icon-refresh" style="color:#409eff"></i>
            <span>刷新</span>
          </label>
        </p>
        <div class="splcBody">
          <el-table :data="logDatas.rows" style="width: 100%" height="296" border>
            <el-table-column type="index" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="count" label="修改个数" min-width="80">
            </el-table-column>
            <el-table-column prop="operTime" label="操作时间" min-width="120">
            </el-table-column>
            <el-table-column prop="operId" label="操作人员" min-width="120">
            </el-table-column>
            <el-table-column prop="operOrgId" label="操作人员机构" min-width="120">
            </el-table-column>
            <el-table-column label="操作" min-width="80" fixed='right'>
              <template slot-scope="scope">
                <el-button size="mini" @click="handlDetail(scope.$index, scope.row)">详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
              :page-sizes="[10, 20,50]" :page-size="setPageSize" layout="total, sizes, prev, pager, next, jumper"
              :total="logDatas.total">
            </el-pagination>
          </div>
        </div>
      </el-dialog>
    </div>
    <!-- 维护日志-详情 弹框 -->
    <div class="weihurizhi">
      <el-dialog title='浏览日志明细信息' :visible.sync="detailLogVisible" width="860px" top="20vh">
        <div class="splcBody">
          <el-table :data="detailLogDatas.rows" style="width: 100%" height="296" border>
            <el-table-column type="index" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="propertyNameCN" label="字段名" min-width="120">
            </el-table-column>
            <el-table-column prop="propertyOlderValue" label="变更前" min-width="100">
            </el-table-column>
            <el-table-column prop="propertyNewerValue" label="变更后" min-width="120">
            </el-table-column>
          </el-table>
          <div class="page">
            <el-pagination @size-change="dhandleSizeChange" @current-change="dhandleCurrentChange" :current-page="currentPage1"
              :page-sizes="[10, 20,50]" :page-size='setPageSize1' layout="total, sizes, prev, pager, next, jumper"
              :total="detailLogDatas.total">
            </el-pagination>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        taskNodeName: '',
        datas: '',
        /*房产信息*/
        accepCusEstates: [],
        /*车辆信息*/
        accepCusCarInfos: [],
        /*您的借款需求*/
        accepApplyLoan: '',
        /*您的个人信息*/
        accepCusBasicInfo: '',
        /*私人业主信息*/
        accepCusPrivate: '',
        /*同业贷情况*/
        accepCusInterBankLoan: '',
        /*保险信息*/
        accepCusInsurances: [],
        /*您的工作信息*/
        accepCusWorkInfo: '',
        /*联系人信息*/
        accepCusRelations: [],
        taskInWaitting: '',
        // applyId: '',
        judgeFlag: '',
        //您的个人信息 投保地点
        insurAddr: '',
        /*维护日志*/
        sldialogVisible: false,
        logDatas: {
          total: 0
        },
        // DefaultTotal: { 
        //   total:0
        // },
        currentPage: 1, // 默认显示的当前页
        currentPage1: 1,
        setPageSize: 10,
        setPageSize1: 10,
        queryParam: {
          businessId: this.applyId, //申请单基本信息id
          rows: '', //每页条数
          page: '', //页数
          sort: '', //排序字段
          order: '', //排序方式
        },
        detailLogVisible: false,
        detailLogDatas: '',
        detailParam: {
          logId: '', //日志id
          rows: '', //每页条数
          page: '', //页数
        },
      };
    },
    props: {
      applyId: {
        default: '',
        required: true,
        type: String
      },
      roles: {
        default: "",
        type: String
      },
      btn: { //维护日志按钮
        default: false,
        type: Boolean
      }
    },
    created() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        var query = {};
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailInfo", {
          'id': this.applyId
        }).then(res => {
          if (res.statusCode == 200) {
            this.$parent.$data.customInf = res.data;
            res.data.accepCusBasicInfo ? this.$parent.$data.accepCusBasicInfo = res.data.accepCusBasicInfo : '';
            this.datas = res.data;
            /*房产信息*/
            this.accepCusEstates = res.data.accepCusEstates;
            for (var i = 0; i < this.accepCusEstates.length; i++) {
              if (this.accepCusEstates[i].mortgageStatus == '0') {
                this.accepCusEstates[i].mortgageStatus = '已抵押'
              } else if (this.accepCusEstates[i].mortgageStatus == '1') {
                this.accepCusEstates[i].mortgageStatus = '未抵押'
              };
              if (this.accepCusEstates[i].estateType == '01') {
                this.accepCusEstates[i].estateType = '租用'
              } else if (this.accepCusEstates[i].estateType == '02') {
                this.accepCusEstates[i].estateType = '商业按揭购房'
              } else if (this.accepCusEstates[i].estateType == '03') {
                this.accepCusEstates[i].estateType = '公积金按揭购房'
              } else if (this.accepCusEstates[i].estateType == '04') {
                this.accepCusEstates[i].estateType = '无按揭购房'
              } else if (this.accepCusEstates[i].estateType == '05') {
                this.accepCusEstates[i].estateType = '自建房'
              } else if (this.accepCusEstates[i].estateType == '06') {
                this.accepCusEstates[i].estateType = '亲属住房'
              } else if (this.accepCusEstates[i].estateType == '07') {
                this.accepCusEstates[i].estateType = '单位宿舍'
              };
              if (this.accepCusEstates[i].propertyType == '01') {
                this.accepCusEstates[i].propertyType = '宅基地'
              } else if (this.accepCusEstates[i].propertyType == '02') {
                this.accepCusEstates[i].propertyType = '自建房'
              } else if (this.accepCusEstates[i].propertyType == '03') {
                this.accepCusEstates[i].propertyType = '小产权'
              } else if (this.accepCusEstates[i].propertyType == '04') {
                this.accepCusEstates[i].propertyType = '期房'
              } else if (this.accepCusEstates[i].propertyType == '05') {
                this.accepCusEstates[i].propertyType = '公租房'
              } else if (this.accepCusEstates[i].propertyType == '06') {
                this.accepCusEstates[i].propertyType = '经济适用房'
              } else if (this.accepCusEstates[i].propertyType == '07') {
                this.accepCusEstates[i].propertyType = '土地证'
              } else if (this.accepCusEstates[i].propertyType == '08') {
                this.accepCusEstates[i].propertyType = '大产权'
              };
              //建筑单价 保留两位小数点
              if (this.accepCusEstates[i].unitPrice != null) {
                this.accepCusEstates[i].unitPrice = this.formatNumber(this.accepCusEstates[i].unitPrice, 2, 0);
              };

              //贷款余额 保留两位小数点
              if (this.accepCusEstates[i].restLoans != null) {
                this.accepCusEstates[i].restLoans = this.formatNumber(this.accepCusEstates[i].restLoans, 2, 0);
              };
              //月供 保留两位小数点
              if (this.accepCusEstates[i].monthlyPay != null) {
                this.accepCusEstates[i].monthlyPay = this.formatNumber(this.accepCusEstates[i].monthlyPay, 2, 0);
              };
              //产权比例 保留两位小数点+%
              if (this.accepCusEstates[i].equityRatio != null) {
                this.accepCusEstates[i].equityRatio = this.formatNumber(this.accepCusEstates[i].equityRatio, 2, 0).replace(
                  /,/g, '');
              };
              //建筑面积
              if (this.accepCusEstates[i].coveredArea != null) {
                this.accepCusEstates[i].coveredArea = this.formatNumber(this.accepCusEstates[i].coveredArea, 2, 0).replace(
                  /,/g, '');
              };
              if (this.accepCusEstates[i].estateShare != null) {
                if (this.accepCusEstates[i].estateShare == '0') {
                  this.accepCusEstates[i].estateShare = '否'
                } else if (this.accepCusEstates[i].estateShare == '1') {
                  this.accepCusEstates[i].estateShare = '是'
                }
              };
            };
            /*车辆信息*/
            this.accepCusCarInfos = res.data.accepCusCarInfos;
            for (var i = 0; i < this.accepCusCarInfos.length; i++) {
              //车辆购置价 保留两位小数点
              if (this.accepCusCarInfos[i].carPrice != null) {
                this.accepCusCarInfos[i].carPrice = this.formatNumber(this.accepCusCarInfos[i].carPrice, 2, 0);
              };
              //月供 保留两位小数点
              if (this.accepCusCarInfos[i].monthlyPay != null) {
                this.accepCusCarInfos[i].monthlyPay = this.formatNumber(this.accepCusCarInfos[i].monthlyPay, 2, 0);
              };
              //贷款余额 保留两位小数点
              if (this.accepCusCarInfos[i].restLoans != null) {
                this.accepCusCarInfos[i].restLoans = this.formatNumber(this.accepCusCarInfos[i].restLoans, 2, 0);
              };
              if (this.accepCusCarInfos[i].carShare != null) {
                if (this.accepCusCarInfos[i].carShare == '0') {
                  this.accepCusCarInfos[i].carShare = '否'
                } else if (this.accepCusCarInfos[i].carShare == '1') {
                  this.accepCusCarInfos[i].carShare = '是'
                }
              };
              if (this.accepCusCarInfos[i].carMortgage != null) {
                if (this.accepCusCarInfos[i].carMortgage == '0') {
                  this.accepCusCarInfos[i].carMortgage = '否'
                } else if (this.accepCusCarInfos[i].carMortgage == '1') {
                  this.accepCusCarInfos[i].carMortgage = '是'
                }
              };
            }
            /*工作人员填写  加急费用*/ //合并前R的多余部分
            // if (res.data != null) {
            //   this.datas.emerAmt = this.formatNumber(this.datas.emerAmt, 2, 0);
            // };
            /*您的借款需求*/
            if (res.data.accepApplyLoan == null) {
              this.accepApplyLoan = this.accepApplyLoan
            } else {
              this.accepApplyLoan = res.data.accepApplyLoan;
              this.accepApplyLoan.loanAmt = this.formatNumber(this.accepApplyLoan.loanAmt, 2, 0);
              this.accepApplyLoan.eachTermAmt = this.formatNumber(this.accepApplyLoan.eachTermAmt, 2, 0);
            }
            /*您的个人信息*/
            if (res.data.accepCusBasicInfo == null) {
              this.accepCusBasicInfo = this.accepCusBasicInfo
            } else {
              this.accepCusBasicInfo = res.data.accepCusBasicInfo;
              var reg = /null/g;
              //投保地点
              if (this.accepCusBasicInfo.insurProvinceName == null && this.accepCusBasicInfo.insurCityName == null &&
                this.accepCusBasicInfo.insurCountyName == null && this.accepCusBasicInfo.insurAddress == null) {
                this.insurAddr = '';
              } else {
                this.insurAddr = this.accepCusBasicInfo.insurProvinceName + this.accepCusBasicInfo.insurCityName +
                  this.accepCusBasicInfo.insurCountyName + this.accepCusBasicInfo.insurAddress;
                this.insurAddr = this.insurAddr.replace(reg, '');
              }
              //每月家庭支出
              if (this.accepCusBasicInfo.payAmt != null) {
                this.accepCusBasicInfo.payAmt = this.formatNumber(this.accepCusBasicInfo.payAmt, 2, 0);
              };
              //单张信用卡最高额度
              if (this.accepCusBasicInfo.cardMaxAmt != null) {
                this.accepCusBasicInfo.cardMaxAmt = this.formatNumber(this.accepCusBasicInfo.cardMaxAmt, 2, 0);
              };
              //户口所在地
              this.accepCusBasicInfo.homeDetailAddr = this.accepCusBasicInfo.homeDetailAddr.replace(reg, '');
              //现住宅地址
              this.accepCusBasicInfo.liveAddr = this.accepCusBasicInfo.liveAddr.replace(reg, '');
            }
            /*私人业主信息*/
            if (res.data.accepCusPrivate == null) {
              this.accepCusPrivate = this.accepCusPrivate;
            } else {
              this.accepCusPrivate = res.data.accepCusPrivate;
              //注册资金
              if (this.accepCusPrivate.regCapitalAmt != null) {
                this.accepCusPrivate.regCapitalAmt = this.formatNumber(this.accepCusPrivate.regCapitalAmt, 2, 0);
              };
              //每月净利润额
              if (this.accepCusPrivate.profitAmountMAmt != null) {
                this.accepCusPrivate.profitAmountMAmt = this.formatNumber(this.accepCusPrivate.profitAmountMAmt, 2,
                  0);
              };
              //月还款额/月租金
              if (this.accepCusPrivate.monthRentAmt != null) {
                this.accepCusPrivate.monthRentAmt = this.formatNumber(this.accepCusPrivate.monthRentAmt, 2, 0);
              };
              //淡季销售额
              if (this.accepCusPrivate.slowMonthSaleAmt != null) {
                this.accepCusPrivate.slowMonthSaleAmt = this.formatNumber(this.accepCusPrivate.slowMonthSaleAmt, 2,
                  0);
              };
              //旺季销售额
              if (this.accepCusPrivate.peakMonthSaleAmt != null) {
                this.accepCusPrivate.peakMonthSaleAmt = this.formatNumber(this.accepCusPrivate.peakMonthSaleAmt, 2,
                  0);
              };
              //平季销售额
              if (this.accepCusPrivate.avgMonthSaleAmt != null) {
                this.accepCusPrivate.avgMonthSaleAmt = this.formatNumber(this.accepCusPrivate.avgMonthSaleAmt, 2, 0);
              };
              //企业近一年利润
              if (this.accepCusPrivate.oneYearProfitAmt != null) {
                this.accepCusPrivate.oneYearProfitAmt = this.formatNumber(this.accepCusPrivate.oneYearProfitAmt, 2,
                  0);
              };
              //企业近两年利润
              if (this.accepCusPrivate.twoYearProfitAmt != null) {
                this.accepCusPrivate.twoYearProfitAmt = this.formatNumber(this.accepCusPrivate.twoYearProfitAmt, 2,
                  0);
              };
              //企业近三年利润
              if (this.accepCusPrivate.threeYearProfitAmt != null) {
                this.accepCusPrivate.threeYearProfitAmt = this.formatNumber(this.accepCusPrivate.threeYearProfitAmt,
                  2, 0);
              };
              //企业近一年纳税额
              if (this.accepCusPrivate.oneYearTaxAmt != null) {
                this.accepCusPrivate.oneYearTaxAmt = this.formatNumber(this.accepCusPrivate.oneYearTaxAmt, 2, 0);
              };
              //企业近两年纳税额
              if (this.accepCusPrivate.twoYearTaxAmt != null) {
                this.accepCusPrivate.twoYearTaxAmt = this.formatNumber(this.accepCusPrivate.twoYearTaxAmt, 2, 0);
              };
              //企业近三年纳税额
              if (this.accepCusPrivate.threeYearTaxAmt != null) {
                this.accepCusPrivate.threeYearTaxAmt = this.formatNumber(this.accepCusPrivate.threeYearTaxAmt, 2, 0);
              };
              //占股比例
              if (this.accepCusPrivate.proShare != null) {
                this.accepCusPrivate.proShare = this.formatNumber(this.accepCusPrivate.proShare, 2, 0) + "%";
              };
              //企业净利润率
              if (this.accepCusPrivate.profitMargin != null) {
                this.accepCusPrivate.profitMargin = this.formatNumber(this.accepCusPrivate.profitMargin, 2, 0) +
                  "%";
              };
              //营业面积
              if (this.accepCusPrivate.busiArea != null) {
                this.accepCusPrivate.busiArea = this.formatNumber(this.accepCusPrivate.busiArea, 2, 0) + "㎡";
              };


            };
            //同业贷情况
            if (res.data.accepCusInterBankLoan) {
              this.accepCusInterBankLoan = res.data.accepCusInterBankLoan;
            };
            //保险信息
            if (res.data.accepCusInsurances) {
              this.accepCusInsurances = res.data.accepCusInsurances;
              for (var i = 0; i < this.accepCusInsurances.length; i++) {
                //期缴保费
                if (this.accepCusInsurances[i].eachPayAmt != null) {
                  this.accepCusInsurances[i].eachPayAmt = this.formatNumber(this.accepCusInsurances[i].eachPayAmt,
                    2, 0);
                };
                //总保额
                if (this.accepCusInsurances[i].totalPayAmt != null) {
                  this.accepCusInsurances[i].totalPayAmt = this.formatNumber(this.accepCusInsurances[i].totalPayAmt,
                    2, 0);
                };
              }
            } else {
              this.accepCusInsurances = this.accepCusInsurances;
            };
            /*您的工作信息*/
            if (res.data.accepCusWorkInfo == null) {
              this.accepCusWorkInfo = this.accepCusWorkInfo
            } else {
              this.accepCusWorkInfo = res.data.accepCusWorkInfo;
              //社保缴纳基数
              if (this.accepCusWorkInfo.insureBase != null) {
                this.accepCusWorkInfo.insureBase = this.formatNumber(this.accepCusWorkInfo.insureBase, 2, 0);
              };
              //公积金缴纳基数
              if (this.accepCusWorkInfo.fundBase != null) {
                this.accepCusWorkInfo.fundBase = this.formatNumber(this.accepCusWorkInfo.fundBase, 2, 0);
              };
              //月均工资
              if (this.accepCusWorkInfo.avgSalaryAmt != null) {
                this.accepCusWorkInfo.avgSalaryAmt = this.formatNumber(this.accepCusWorkInfo.avgSalaryAmt, 2, 0);
              };
              //其他收入
              if (this.accepCusWorkInfo.otherIncome != null) {
                this.accepCusWorkInfo.otherIncome = this.formatNumber(this.accepCusWorkInfo.otherIncome, 2, 0);
              };
              //单位地址
              var reg = /null/g;
              this.accepCusWorkInfo.workAddr = this.accepCusWorkInfo.workAddr.replace(reg, '');
            }

            /*联系人信息*/
            if (res.data.accepCusRelations) {
              this.accepCusRelations = res.data.accepCusRelations;
            } else {
              this.accepCusRelations = this.accepCusRelations;
            };
            if (this.datas.sourcesChan == '00') { //00
              this.datas.sourcesChan = "电销";
            } else if (this.datas.sourcesChan == '01') {
              this.datas.sourcesChan = "报纸";
            } else if (this.datas.sourcesChan == '02') {
              this.datas.sourcesChan = "网络";
            } else if (this.datas.sourcesChan == '03') {
              this.datas.sourcesChan = "促销活动";
            } else if (this.datas.sourcesChan == '04') {
              this.datas.sourcesChan = "朋友介绍";
            } else if (this.datas.sourcesChan == '05') {
              this.datas.sourcesChan = "销售开发";
            } else if (this.datas.sourcesChan == '06') {
              this.datas.sourcesChan = "其他";
            };
            query = {
              appType: this.datas.appType,
              appTypeTxt: this.datas.appTypeTxt,
              certType: this.accepCusBasicInfo.certType,
              certTypeTxt: this.accepCusBasicInfo.certTypeTxt,
              certCode: this.accepCusBasicInfo.certCode,
              proName: this.datas.proName,
              loanTerm: this.accepApplyLoan.loanTerm,
              applyMainNo: this.datas.applyMainNo,
              applySubNo: this.datas.applySubNo,
              salPerEmployDate: this.datas.salPerEmployDate,
              appOrgRegisterDate: this.datas.appOrgRegisterDate,
              adminIntroduce: this.datas.adminIntroduce,
              applyId: this.datas.id,
              workName: this.datas.accepCusWorkInfo.workName,
              proId: this.datas.proId,
              proCode: this.datas.proCode,
              loanAmt: this.datas.accepApplyLoan.loanAmt,
              eachTermAmt: this.datas.accepApplyLoan.eachTermAmt,
              mainCustName: this.datas.mainCustName,
              appOrgName: this.datas.appOrgName,
              loanType: this.datas.accepApplyLoan.loanType,
              loanTypeTxt: this.datas.accepApplyLoan.loanTypeTxt,
              appOrgId: this.datas.appOrgId,
              appOrgCode: this.datas.appOrgCode,
              applyCustId: this.datas.accepCusBasicInfo.id,
              custNo: this.datas.accepCusBasicInfo.custNo,
              //客户名称
              custName: this.datas.accepCusBasicInfo.custName

            };
            localStorage.setItem("applicationInformationDetail", JSON.stringify(query));
            /*将房产信息保存到本地*/
            if (res.data.accepCusEstates != '') {
              localStorage.setItem("house", JSON.stringify(res.data.accepCusEstates));
            };
            /*将车辆信息保存到本地*/
            if (res.data.accepCusCarInfos != '') {
              localStorage.setItem("car", JSON.stringify(res.data.accepCusCarInfos));
            };
            this.$parent.$data.loading = false;
          } else {
            this.$message.error(res.msg);
            if (this.roles == 'creditApp_firstTrial') { // 初审 
              this.del('初审详情');
              this.$router.push('/taskInWaitting?taskNodeName=creditApp_firstTrial&flag=01');
            } else if (this.roles == 'creditApp_finalTrial') { // 终审
              this.del('终审详情');
              window.history.go(-1);
            } else if (this.roles == 'antiFraudApp_commissioner') { //反欺诈专员
              this.del('反欺诈详情');
              this.$router.push('/AntiFraud34?taskNodeName=antiFraudApp_commissioner&flag=03');
            } else if (this.roles == 'antiFraudApp_manager') { //反欺诈主管
              this.del('反欺诈详情');
              this.$router.push('/AntiFraud34?taskNodeName=antiFraudApp_manager&flag=04');
            } else if (this.roles == 'reconsiderApp_commissioner') { //复议-专员
              this.del('复议详情');
              this.$router.push('/reconsiderList?taskNodeName=reconsiderApp_commissioner&flag=05');
            } else if (this.roles == 'reconsiderApp_manager') { //复议
              this.del('复议详情');
              this.$router.push('/reconsiderList?taskNodeName=reconsiderApp_manager&flag=06');
            } else if (this.roles == 'MatchingInfQuery') { //综合查询-详情
              this.del('综合查询-详情');
              this.$router.push('/IntegratedQuery')
            } else if (this.roles == 'TaskManagement') { //审批任务管理-详情
              this.del('审批任务管理-详情');
              // this.$router.push('/TaskManagementSplit')
              window.history.go(-1);
            } else if (this.roles == 'MatchingInf') { //匹配信息-查看
              this.del('匹配信息-查看');
              this.$router.push('/MatchingInf')
            } else if (this.roles == 'applyLedger') { //申请台账
              this.del('申请台账-详情');
              this.$router.push('/applyLedger')
            } else if (this.roles == 'borrowLedger') { //借款台账
              this.del('借款台账-申请信息');
              this.$router.push('/borrowLedger')
            } else if (this.roles == 'checkApp_apply') { //质检-专员
              this.del('质检详情');
              this.$router.push('/commissioner?taskNodeName=checkApp_apply&flag=07')
            } else if (this.roles == 'checkApp_check_manager') { //质检-主管
              this.del('质检详情');
              this.$router.push('/manager?taskNodeName=checkApp_check_manager&flag=08')
            } else if (this.roles == 'checkApp_trial_self') { //质检-初终审本人
              this.del('质检详情');
              this.$router.push('/manager?taskNodeName=checkApp_check_manager&flag=08')
            } else if (this.roles == 'checkApp_trial_manager') { //质检-初终审主管
              this.del('质检详情');
              this.$router.push('/manager?taskNodeName=checkApp_check_manager&flag=08')
            } else if (this.roles == 'checkApp_check_recon_manager') { //质检-主管复核（首次）
              this.del('质检详情');
              this.$router.push('/ReManagerTaskList?taskNodeName=checkApp_check_recon_manager&flag=11')
            } else if (this.roles == 'checkApp_regional_manager') { //质检-区域经理复核
              this.del('质检详情');
              this.$router.push('/ACManagerTaskList?taskNodeName=checkApp_regional_manager&flag=12')
            } else if (this.roles == 'checkApp_compliance_manager') { //质检-合规经理复核
              this.del('质检详情');
              this.$router.push('/ACManagerTaskList?taskNodeName=checkApp_compliance_manager&flag=13')
            }
            this.$parent.$data.loading = false;
          }
        });

      },
      //保留两位小数 整数千分位
      formatNumber(num, cent, isThousand) {
        if (!num) {
          return ''
        }
        num = num.toString().replace(/\$|\,/g, '');
        // 检查传入数值为数值类型
        if (isNaN(num))
          num = "0";
        // 获取符号(正/负数)
        let sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
        let cents = num % Math.pow(10, cent); // 求出小数位数值
        num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
        cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度
        // 补足小数位到指定的位数
        while (cents.length < cent)
          cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        if (cent > 0) {
          if (sign == true) {
            return (((sign) ? '' : '-') + num + '.' + cents);
          } else if (sign == false) {
            return '0.00'
          }
        } else {
          return (((sign) ? '' : '-') + num);
        }
      },
      /*维护日志*/
      comrequest(param) {
        this.post("/queryOperLogDetail/queryLogRecords", param).then(res => {
          if (res.statusCode == 200) {
            if (res.data) {
              this.logDatas = res.data;
            }
            this.$message({
              message: "查询成功！",
              type: 'success'
            })
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      maintenanceLog() {
        this.sldialogVisible = true;
        this.comrequest(this.queryParam);

      },
      /*维护日志 刷新按钮*/
      renovate() {
        this.comrequest(this.queryParam);
      },
      handleSizeChange(val) {
        this.queryParam.rows = val;
        this.queryParam.page = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.comrequest(this.queryParam);
        };
      },
      handleCurrentChange(val) {
        this.queryParam.page = val;
        this.comrequest(this.queryParam);
      },
      /*维护日志详情*/
      handlDetail(index, row) {
        this.detailLogVisible = true;
        this.detailParam.logId = row.id;
        this.detailRequest(this.detailParam);
      },
      detailRequest(param) {
        this.post("/queryOperLogDetail/queryOperLogDetails", param).then(res => {
          if (res.statusCode == 200) {
            if (res.data) {
              this.detailLogDatas = res.data;
            } else {
              this.detailLogDatas = '';
            };
            this.$message({
              message: "查询成功！",
              type: 'success'
            })
          } else {
            this.$message({
              message: "查询失败！",
              type: 'error'
            })
          }
        })
      },
      del(delname) {
        this.$store.dispatch('delVisitedViews', {
          name: delname
        }).then((views) => {
          const latestView = views.slice(-1)[0]
        })
      },
      dhandleSizeChange(val) {
        this.detailParam.rows = val;
        this.detailParam.page = 1;
        if (this.currentPage1 !== 1 || this.setPageSize1 !== 10) {
          this.currentPage1 = 1;
          this.setPageSize1 = 10;
        } else {
          this.detailRequest(this.detailParam);
        };
      },
      dhandleCurrentChange(val) {
        this.detailParam.page = val;
        this.detailRequest(this.detailParam);
      },
    },
  }

</script>
<style type="text/css" scoped>
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 维护日志 */

  .weihurizhi .page {
    text-align: center;
    padding: 10px 0;
  }

  .weihurizhi td button {
    background: #0077FF;
    color: #fff;
  }

</style>
