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
                <span>{{datas.applyTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">借款人类型：</label>
                <span>{{datas.borrowTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">有无授权机构：</label>
                <span>{{datas.authOrgFlagTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">获客渠道：</label>
                <span>{{datas.customerSourcesTxt}}</span>
              </li>
              <li style="width:66.6%">
                <p v-if="datas.customerSourcesTxt == '其他'">
                  <label class="label_width_166">获客渠道说明：</label>
                  <span>{{datas.customerSourcesRemark}}</span>
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
                <span>{{datas.directSalesName}}</span>
              </li>
              <li>
                <label class="label_width_166">直销人员联系方式：</label>
                <span>{{datas.directSalesTel}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">家人是否知晓本借款：</label>
                <span>{{datas.familyKnowFlagTxt}}</span>
              </li>
              <li>
                <p v-if="datas.familyKnowFlag=='1'">
                  <label class="label_width_166">知晓人姓名：</label>
                  <span>{{datas.knowName}}</span>
                </p>
              </li>
              <li>
                <p v-if="datas.familyKnowFlag=='1'">
                  <label class="label_width_166">与本人关系：</label>
                  <span>{{datas.knowReleationTxt}}</span>
                </p>
              </li>
            </div>
            <li>
              <label class="label_width_166">客户符合何种产品：</label>
              <span>{{datas.productName}}</span>
            </li>
            <li>
              <label class="label_width_166">紧急程度：</label>
              <span>{{datas.emergencyTypeTxt}}</span>
            </li>
            <li>
              <p v-if="datas.emergencyType=='02'">
                <label class="label_width_166">加急费用[元]：</label>
                <span>{{datas.emergencyAmt}}</span>
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
                <span>{{accepApplyLoan.maxEachTermAmt}}</span>
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
                <span>{{applyCustBasicInfoDTO.custName}}</span>
              </li>
              <li>
                <label class="label_width_166">性别：</label>
                <span>{{applyCustBasicInfoDTO.sexTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">移动电话：</label>
                <span>{{applyCustBasicInfoDTO.mobile}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">证件类型：</label>
                <span>{{applyCustBasicInfoDTO.certTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号码：</label>
                <span>{{applyCustBasicInfoDTO.certCode}}</span>
              </li>
              <li>
                <label class="label_width_166">年龄：</label>
                <span>{{applyCustBasicInfoDTO.age}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style=" width:66.6%;height:auto;margin-top:5px;">
                <label class="label_width_166">借款人其他联系方式：</label>
                <span class="text_area_span text_area_span_minus170">{{applyCustBasicInfoDTO.otherContactWay}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">婚姻状况：</label>
                <span>{{applyCustBasicInfoDTO.marrFlagTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">有无子女：</label>
                <span>{{applyCustBasicInfoDTO.childFlagTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">最高学历：</label>
                <span>{{applyCustBasicInfoDTO.diplomaFlagTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">电子邮箱：</label>
                <span>{{applyCustBasicInfoDTO.email}}</span>
              </li>
              <li>
                <label class="label_width_166">住宅类型：</label>
                <span>{{applyCustBasicInfoDTO.residentialTypeTxt}}</span>
              </li>
              <li>
                <p v-if="applyCustBasicInfoDTO.residentialType=='01' || applyCustBasicInfoDTO.residentialType=='02' || applyCustBasicInfoDTO.residentialType=='03'">
                  <label class="label_width_166">每月租金/还款额[元]：</label>
                  <span>{{applyCustBasicInfoDTO.monthRentAmt}}</span>
                </p>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style="width:66.6%">
                <label class="label_width_166">户口所在地：</label>
                <span>{{applyCustBasicInfoDTO.homeDetailAddr}}</span>
              </li>
              <li>
                <label class="label_width_166">是否与户口地一致：</label>
                <span>{{applyCustBasicInfoDTO.homeAddrSameFlagTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style="width:66.6%">
                <label class="label_width_166">现住宅地址：</label>
                <span>{{applyCustBasicInfoDTO.liveAddress}}</span>
              </li>
              <li>
                <label class="label_width_166">优先联系地址：</label>
                <span>{{applyCustBasicInfoDTO.priorityContactAddrFlagTxt}}</span>
                <!-- <span>{{applyCustBasicInfoDTO.priorityContactAddrFlag}}</span> -->
              </li>
              <li>
                <label class="label_width_166">借款人职业情况：</label>
                <span>{{applyCustBasicInfoDTO.professionTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style=" width:66.6%;height:auto;margin-top:5px;">
                <label class="label_width_166">收入来源：</label>
                <span class="text_area_span text_area_span_minus170">{{applyCustBasicInfoDTO.incomeSource}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style=" width:66.6%;height:auto;">
                <label class="label_width_166">其他收入：</label>
                <span class="text_area_span text_area_span_minus170">{{applyCustBasicInfoDTO.otherIncome}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">供养人数：</label>
                <span>{{applyCustBasicInfoDTO.keepNum}}</span>
              </li>
              <li>
                <label class="label_width_166">起始居住时间：</label>
                <span>{{applyCustBasicInfoDTO.liveBeginDate}}</span>
              </li>
              <li>
                <label class="label_width_166">住宅电话：</label>
                <span>{{applyCustBasicInfoDTO.homeTel}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">每月家庭支出[元]：</label>
                <span>{{applyCustBasicInfoDTO.monthPayAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">单张信用卡最高额度[元]：</label>
                <span>{{applyCustBasicInfoDTO.cardMaxAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">您来本市年份：</label>
                <span>{{applyCustBasicInfoDTO.comeCityYear}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">网查征信用户名：</label>
                <span>{{applyCustBasicInfoDTO.netCreditUsername}}</span>
              </li>
              <li>
                <label class="label_width_166">网查征信用户密码：</label>
                <span>{{applyCustBasicInfoDTO.netCreditPassword}}</span>
              </li>
              <li>
                <label class="label_width_166">是否缴纳商业保险：</label>
                <span>{{applyCustBasicInfoDTO.isPayInsuranceTxt}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">是否是私营业主：</label>
              <span>{{applyCustBasicInfoDTO.privateOwnerFlagTxt}}</span>
            </li>
            <li>
              <label class="label_width_166">是否同业贷：</label>
              <span>{{applyCustBasicInfoDTO.isInterBankLoanTxt}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4" v-if="applyCustBasicInfoDTO.privateOwnerFlag=='1'">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">私人业主信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">企业类型：</label>
                <span>{{applyPrivateOwnersDT.companyTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">员工人数：</label>
                <span>{{applyPrivateOwnersDT.employeeNumber}}</span>
              </li>
              <li>
                <label class="label_width_166">公司注册时间：</label>
                <span>{{applyPrivateOwnersDT.companyRegDate}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">占股比例：</label>
                <span>{{applyPrivateOwnersDT.shareProportion}}</span>
              </li>
              <li>
                <label class="label_width_166">经营场所：</label>
                <span>{{applyPrivateOwnersDT.businessPlaceTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">注册资金[万元]：</label>
                <span>{{applyPrivateOwnersDT.regCapitalAmt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">企业净利润率：</label>
                <span>{{applyPrivateOwnersDT.profitMargin}}</span>
              </li>
              <li>
                <label class="label_width_166">每月净利润额[万元]：</label>
                <span>{{applyPrivateOwnersDT.profitMonthAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">营业执照编号：</label>
                <span>{{applyPrivateOwnersDT.busiLicenceCode}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">是否缴纳五险一金：</label>
                <span>{{applyPrivateOwnersDT.payWealFlagTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">月还款额/月租金[万元]：</label>
                <span>{{applyPrivateOwnersDT.monthRentAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">营业面积：</label>
                <span>{{applyPrivateOwnersDT.businessArea}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style='width:66.6%;height:auto;margin-top:5px;'>
                <label>企业经营项目说明：</label>
                <span class="text_area_span text_area_span_minus170">{{applyPrivateOwnersDT.projectManage}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">淡季月份：</label>
                <span>{{applyPrivateOwnersDT.slowMonth}}</span>
              </li>
              <li>
                <label class="label_width_166">旺季月份：</label>
                <span>{{applyPrivateOwnersDT.peakMonth}}</span>
              </li>
              <li>
                <label class="label_width_166">平季月份：</label>
                <span>{{applyPrivateOwnersDT.avgMonth}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">淡季销售额[万元]：</label>
                <span>{{applyPrivateOwnersDT.slowMonthSaleAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">旺季销售额[万元]：</label>
                <span>{{applyPrivateOwnersDT.peakMonthSaleAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">平季销售额[万元]：</label>
                <span>{{applyPrivateOwnersDT.avgMonthSaleAmt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">企业近利润[万元]：</label>
                <span>{{applyPrivateOwnersDT.oneyearProfitAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">企业近两年利润[万元]：</label>
                <span>{{applyPrivateOwnersDT.twoYearProfitAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">企业近三年利润[万元]：</label>
                <span>{{applyPrivateOwnersDT.threeYearProfitAmt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">企业近一年纳税额[万元]：</label>
                <span>{{applyPrivateOwnersDT.oneYearTaxAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">企业近两年纳税额[万元]：</label>
                <span>{{applyPrivateOwnersDT.twoYearTaxAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">企业近三年纳税额[万元]：</label>
                <span>{{applyPrivateOwnersDT.threeYearTaxAmt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">第一供销商：</label>
                <span>{{applyPrivateOwnersDT.firstSupplier}}</span>
              </li>
              <li>
                <label class="label_width_166">第二供销商：</label>
                <span>{{applyPrivateOwnersDT.secondSupplier}}</span>
              </li>
              <li>
                <label class="label_width_166">第三供销商：</label>
                <span>{{applyPrivateOwnersDT.thirdSupplier}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">第一分销商：</label>
              <span>{{applyPrivateOwnersDT.firstDistributor}}</span>
            </li>
            <li>
              <label class="label_width_166">第二分销商：</label>
              <span>{{applyPrivateOwnersDT.secondDistributor}}</span>
            </li>
            <li>
              <label class="label_width_166">第三分销商：</label>
              <span>{{applyPrivateOwnersDT.thirdDistributor}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5" v-if="applyCustBasicInfoDTO.isInterBankLoan=='1'">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">同业贷情况</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
                <!-- aaa -->
              <li>
                <label class="label_width_166">同业机构名称：</label>
                <span>{{accepCusInterBankLoan.interBankTxt}}</span>
              </li>
                <!-- aaa -->
              <li>
                <label class="label_width_166">贷款产品：</label>
                <span>{{accepCusInterBankLoan.loanPro}}</span>
              </li>
              <li>
                <!-- aaa -->
                <label class="label_width_166">贷款额度[元]：</label>
                <span>{{accepCusInterBankLoan.loanTotalAmt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
                <!-- aaa -->
              <li>
                <label class="label_width_166">贷款生效日期：</label>
                <span>{{accepCusInterBankLoan.loanEffectDate}}</span>
              </li>
                <!-- aaa -->
              <li>
                <label class="label_width_166">贷款总期限[月]：</label>
                <span>{{accepCusInterBankLoan.loanPeriod}}</span>
              </li>
              <li>     <!-- aaa -->
                <label class="label_width_166">每月还款日：</label>
                <span>{{accepCusInterBankLoan.eachPayDay}}</span>
              </li>
            </div>
            <li>     <!-- aaa -->
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
          <el-table :data="applyCustEstateDTOs" style="width: 100%" border class="house">
            <el-table-column type="index" :index='1' label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="estateType" label="房产类型" min-width="100">
            </el-table-column>
            <el-table-column prop="estateProperty" label="产权性质" min-width="80">
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
            <el-table-column prop="monthlyPayment" label="月供[元]" min-width="80">
            </el-table-column>
            <el-table-column prop="restLoans" label="贷款余额[元]" min-width="120">
            </el-table-column>
            <el-table-column prop="estateShareTxt" label="房产是否共有" min-width="120">
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
          <el-table :data="applyCustCarDTOs" style="width: 100%" border class="car">
            <el-table-column type="index" :index='1' label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="carPrice" label="车辆购置价[元]" min-width="110">
            </el-table-column>
            <el-table-column prop="yearCheckFlagTxt" label="是否年检" min-width="100">
            </el-table-column>
            <el-table-column prop="operateFlagTxt" label="是否非运营" min-width="100">
            </el-table-column>
            <el-table-column prop="carModel" label="车辆型号" min-width="100">
            </el-table-column>
            <el-table-column prop="carTypeTxt" label="车辆类型" min-width="100">
            </el-table-column>
            <el-table-column prop="loanPeriod" label="贷款期限[月]" min-width="100">
            </el-table-column>
            <el-table-column prop="monthlyPayment" label="月供[元]" min-width="100">
            </el-table-column>
            <el-table-column prop="restLoans" label="贷款余额[月]" min-width="100">
            </el-table-column>
            <el-table-column prop="carNo" label="车牌号码" min-width="100">
            </el-table-column>
            <el-table-column prop="buyInsuranceTxt" label="车辆已购保险" min-width="100">
            </el-table-column>
            <el-table-column prop="buyDate" label="购买时间" min-width="120">
            </el-table-column>
            <el-table-column prop="carShareFlagTxt" label="车产是否共有" min-width="100">
            </el-table-column>
            <el-table-column prop="carMortgageFlagTxt" label="车产是否抵押" min-width="100">
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
                <span>{{applyCustWorkDTO.workName}}</span>
              </li>
              <li>
                <label class="label_width_166">单位性质：</label>
                <span>{{applyCustWorkDTO.workSignTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li style="width:66.6%;">
                <label class="label_width_166">单位地址：</label>
                <span>{{applyCustWorkDTO.companyAddr}}</span>
              </li>
              <li>
                <label class="label_width_166">单位地址邮编：</label>
                <span>{{applyCustWorkDTO.workZip}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">所属行业：</label>
                <span>{{applyCustWorkDTO.workKindName}}</span>
              </li>
              <li>
                <label class="label_width_166">所在部门：</label>
                <span>{{applyCustWorkDTO.workDept}}</span>
              </li>
              <li>
                <label class="label_width_166">职位级别：</label>
                <span>{{applyCustWorkDTO.postLevel}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">是否缴纳社保：</label>
                <span>{{applyCustWorkDTO.insureFlagTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">社保缴纳基数[元]：</label>
                <span>{{applyCustWorkDTO.insureBase}}</span>
              </li>
              <li>
                <label class="label_width_166">单位电话：</label>
                <span>{{applyCustWorkDTO.workTel}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">是否缴纳公积金：</label>
                <span>{{applyCustWorkDTO.fundFlagTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">公积金缴纳基数[元]：</label>
                <span>{{applyCustWorkDTO.fundBase}}</span>
              </li>
              <li>
                <label class="label_width_166">入职时间：</label>
                <span>{{applyCustWorkDTO.entryDate}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">月均工资[元]：</label>
                <span>{{applyCustWorkDTO.wageAvg}}</span>
              </li>
              <li>
                <label class="label_width_166">其他收入[元]：</label>
                <span>{{applyCustWorkDTO.otherIncome}}</span>
              </li>
              <li>
                <label class="label_width_166">每月发薪日：</label>
                <span>{{applyCustWorkDTO.wageDay}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">工资发放形式：</label>
                <span>{{applyCustWorkDTO.payFormTxt}}</span>
              </li>
              <li style="width:66.6%;">
                <label class=" label_width_166 ellipsis">前单位名称：</label>
                <el-tooltip class="item" effect="dark" :content="applyCustWorkDTO.befWorkName" :disabled="applyCustWorkDTO.befWorkName==null"
                  placement="top-start">
                  <span>{{applyCustWorkDTO.befWorkName}}</span>
                </el-tooltip>
              </li>
            </div>
            <li>
              <label class="label_width_166">前单位电话：</label>
              <span>{{applyCustWorkDTO.befworkTel}}</span>
            </li>

            <li>
              <label class="label_width_166">前单位工作年限[月]：</label>
              <span>{{applyCustWorkDTO.befWorkMonth}}</span>
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
          <el-table :data="applyCustLinkmanDTOs" style="width: 100%" highlight-current-row border class="people">
            <el-table-column type="index" :index='1' label="序号" width="55">
            </el-table-column>
            <el-table-column prop="linkName" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="contactTypeTxt" label="类型" width="90">
            </el-table-column>
            <el-table-column prop="relationshipTxt" label="关系" width="50">
            </el-table-column>
            <el-table-column prop="mobile" label="手机号码" width="105">
            </el-table-column>
            <el-table-column prop="homeTel" label="住宅电话" width="80">
            </el-table-column>
            <el-table-column prop="linkAge" label="年龄" width="50">
            </el-table-column>
            <el-table-column prop="certTypeTxt" label="证件类型" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="证件号码" width="120">
            </el-table-column>
            <el-table-column prop="company" label="单位名称" show-overflow-tooltip width="180">
            </el-table-column>
            <el-table-column prop="companyTel" label="单位电话" min-width="100">
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
          <el-table :data="logDatas.recordList" style="width: 100%" height="296" border>
            <el-table-column type="index" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="number" label="修改个数" min-width="80">
            </el-table-column>
            <el-table-column prop="operTime" label="操作时间" min-width="120">
            </el-table-column>
            <el-table-column prop="operUserCode" label="操作人员" min-width="120">
            </el-table-column>
            <el-table-column prop="operOrgCode" label="操作人员机构" min-width="120">
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
              :total="logDatas.totalRecord">
            </el-pagination>
          </div>
        </div>
      </el-dialog>
    </div>
    <!-- 维护日志-详情 弹框 -->
    <div class="weihurizhi">
      <el-dialog title='浏览日志明细信息' :visible.sync="detailLogVisible" width="860px" top="20vh">
        <div class="splcBody">
          <el-table :data="detailLogDatas.recordList" style="width: 100%" height="296" border>
            <el-table-column type="index" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="fieldNameCN" label="字段名" min-width="120">
            </el-table-column>
            <el-table-column prop="oldValue" label="变更前" min-width="100">
            </el-table-column>
            <el-table-column prop="newValue" label="变更后" min-width="120">
            </el-table-column>
          </el-table>
          <div class="page">
            <el-pagination @size-change="dhandleSizeChange" @current-change="dhandleCurrentChange" :current-page="currentPage1"
              :page-sizes="[10, 20,50]" :page-size='setPageSize1' layout="total, sizes, prev, pager, next, jumper"
              :total="detailLogDatas.totalRecord">
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
        datas:{},
        appOrgCountydatas: '',
        /*房产信息*/
        applyCustEstateDTOs: [],
        /*车辆信息*/
        applyCustCarDTOs: [],
        /*您的借款需求*/
        accepApplyLoan: '',
        /*您的个人信息*/
        applyCustBasicInfoDTO: '',
        /*私人业主信息*/
        applyPrivateOwnersDT: '',
        /*同业贷情况*/
        accepCusInterBankLoan: '',
        /*保险信息*/
        accepCusInsurances: [],
        /*您的工作信息*/
        applyCustWorkDTO: '',
        /*联系人信息*/
        applyCustLinkmanDTOs: [],
        taskInWaitting: '',
        // applyId: '',
        judgeFlag: '',
        //您的个人信息 投保地点
        insurAddr: '',
        /*维护日志*/
        sldialogVisible: false,
        logDatas: {
          totalRecord: 0
        },
        currentPage: 1, // 默认显示的当前页
        currentPage1: 1,
        setPageSize: 10,
        setPageSize1: 10,
        queryParam: {
          businessId: this.applyId, //申请单基本信息id
          pageSize: '', //每页条数
          pageNum: '', //页数
          sort: '', //排序字段
          order: '', //排序方式
        },
        detailLogVisible: false,
        detailLogDatas: '',
        detailParam: {
          operLogId: '', //日志id
          pageSize: '', //每页条数
          pageNum: '', //页数
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
            res.data.applyCustBasicInfoDTO ? this.$parent.$data.accepCusBasicInfo = res.data.applyCustBasicInfoDTO : '';
            this.datas = res.data;
            /*房产信息*/
            this.applyCustEstateDTOs = res.data.applyCustEstateDTOs;
            for (var i = 0; i < this.applyCustEstateDTOs.length; i++) {
              if (this.applyCustEstateDTOs[i].mortgageStatus == '0') {
                this.applyCustEstateDTOs[i].mortgageStatus = '已抵押'
              } else if (this.applyCustEstateDTOs[i].mortgageStatus == '1') {
                this.applyCustEstateDTOs[i].mortgageStatus = '未抵押'
              };
              if (this.applyCustEstateDTOs[i].estateType == '01') {
                this.applyCustEstateDTOs[i].estateType = '租用'
              } else if (this.applyCustEstateDTOs[i].estateType == '02') {
                this.applyCustEstateDTOs[i].estateType = '商业按揭购房'
              } else if (this.applyCustEstateDTOs[i].estateType == '03') {
                this.applyCustEstateDTOs[i].estateType = '公积金按揭购房'
              } else if (this.applyCustEstateDTOs[i].estateType == '04') {
                this.applyCustEstateDTOs[i].estateType = '无按揭购房'
              } else if (this.applyCustEstateDTOs[i].estateType == '05') {
                this.applyCustEstateDTOs[i].estateType = '自建房'
              } else if (this.applyCustEstateDTOs[i].estateType == '06') {
                this.applyCustEstateDTOs[i].estateType = '亲属住房'
              } else if (this.applyCustEstateDTOs[i].estateType == '07') {
                this.applyCustEstateDTOs[i].estateType = '单位宿舍'
              };
              if (this.applyCustEstateDTOs[i].estateProperty == '01') {
                this.applyCustEstateDTOs[i].estateProperty = '宅基地'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '02') {
                this.applyCustEstateDTOs[i].estateProperty = '自建房'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '03') {
                this.applyCustEstateDTOs[i].estateProperty = '小产权'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '04') {
                this.applyCustEstateDTOs[i].estateProperty = '期房'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '05') {
                this.applyCustEstateDTOs[i].estateProperty = '公租房'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '06') {
                this.applyCustEstateDTOs[i].estateProperty = '经济适用房'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '07') {
                this.applyCustEstateDTOs[i].estateProperty = '土地证'
              } else if (this.applyCustEstateDTOs[i].estateProperty == '08') {
                this.applyCustEstateDTOs[i].estateProperty = '大产权'
              };
              //建筑单价 保留两位小数点
              if (this.applyCustEstateDTOs[i].unitPrice != null) {
                this.applyCustEstateDTOs[i].unitPrice = this.formatNumber(this.applyCustEstateDTOs[i].unitPrice, 2, 0);
              };

              //贷款余额 保留两位小数点
              if (this.applyCustEstateDTOs[i].restLoans != null) {
                this.applyCustEstateDTOs[i].restLoans = this.formatNumber(this.applyCustEstateDTOs[i].restLoans, 2, 0);
              };
              //月供 保留两位小数点
              if (this.applyCustEstateDTOs[i].monthlyPayment != null) {
                this.applyCustEstateDTOs[i].monthlyPayment = this.formatNumber(this.applyCustEstateDTOs[i].monthlyPayment, 2, 0);
              };
              //产权比例 保留两位小数点+%
              if (this.applyCustEstateDTOs[i].equityRatio != null) {
                this.applyCustEstateDTOs[i].equityRatio = this.formatNumber(this.applyCustEstateDTOs[i].equityRatio, 2, 0).replace(
                  /,/g, '');
              };
              //建筑面积
              if (this.applyCustEstateDTOs[i].coveredArea != null) {
                this.applyCustEstateDTOs[i].coveredArea = this.formatNumber(this.applyCustEstateDTOs[i].coveredArea, 2, 0).replace(
                  /,/g, '');
              };
              if (this.applyCustEstateDTOs[i].estateShare != null) {
                if (this.applyCustEstateDTOs[i].estateShare == '0') {
                  this.applyCustEstateDTOs[i].estateShare = '否'
                } else if (this.applyCustEstateDTOs[i].estateShare == '1') {
                  this.applyCustEstateDTOs[i].estateShare = '是'
                }
              };
            };
            /*车辆信息*/
            this.applyCustCarDTOs = res.data.applyCustCarDTOs;
            for (var i = 0; i < this.applyCustCarDTOs.length; i++) {
              //车辆购置价 保留两位小数点
              if (this.applyCustCarDTOs[i].carPrice != null) {
                this.applyCustCarDTOs[i].carPrice = this.formatNumber(this.applyCustCarDTOs[i].carPrice, 2, 0);
              };
              //月供 保留两位小数点
              if (this.applyCustCarDTOs[i].monthlyPayment != null) {
                this.applyCustCarDTOs[i].monthlyPayment = this.formatNumber(this.applyCustCarDTOs[i].monthlyPayment, 2, 0);
              };
              //贷款余额 保留两位小数点
              if (this.applyCustCarDTOs[i].restLoans != null) {
                this.applyCustCarDTOs[i].restLoans = this.formatNumber(this.applyCustCarDTOs[i].restLoans, 2, 0);
              };
              if (this.applyCustCarDTOs[i].carShareFlag != null) {
                if (this.applyCustCarDTOs[i].carShareFlag == '0') {
                  this.applyCustCarDTOs[i].carShareFlag = '否'
                } else if (this.applyCustCarDTOs[i].carShareFlag == '1') {
                  this.applyCustCarDTOs[i].carShareFlag = '是'
                }
              };
              if (this.applyCustCarDTOs[i].carShareFlag != null) {
                if (this.applyCustCarDTOs[i].carShareFlag == '0') {
                  this.applyCustCarDTOs[i].carShareFlag = '否'
                } else if (this.applyCustCarDTOs[i].carShareFlag == '1') {
                  this.applyCustCarDTOs[i].carShareFlag = '是'
                }
              };
            }
            /*工作人员填写  加急费用*/ //合并前R的多余部分
            // if (res.data != null) {
            //   this.datas.emergencyAmt = this.formatNumber(this.datas.emergencyAmt, 2, 0);
            // };
            /*您的借款需求*/
            if (res.data.applyBasicInfoDTO == null) {
              this.accepApplyLoan = this.accepApplyLoan
            } else {
              this.accepApplyLoan = res.data.applyBasicInfoDTO;
              this.accepApplyLoan.loanAmt = this.formatNumber(this.accepApplyLoan.loanAmt, 2, 0);
              this.accepApplyLoan.maxEachTermAmt = this.formatNumber(this.accepApplyLoan.maxEachTermAmt, 2, 0);
            }
            /*您的个人信息*/
            if (res.data.applyCustBasicInfoDTO == null) {
              this.applyCustBasicInfoDTO = this.applyCustBasicInfoDTO
            } else {
              this.applyCustBasicInfoDTO = res.data.applyCustBasicInfoDTO;
              var reg = /null/g;
              //投保地点
              if (this.applyCustBasicInfoDTO.insurProvinceName == null && this.applyCustBasicInfoDTO.insurCityName == null &&
                this.applyCustBasicInfoDTO.insurCountyName == null && this.applyCustBasicInfoDTO.insurAddress == null) {
              //  insurAddr：替换为 insurAddress
               this.insurAddr = '';
              } else {
                this.insurAddr = this.applyCustBasicInfoDTO.insurProvinceName + this.applyCustBasicInfoDTO.insurCityName +
                  this.applyCustBasicInfoDTO.insurCountyName + this.applyCustBasicInfoDTO.insurAddress;
                  // ------------------------------------------------------------------
               this.insurAddr? this.insurAddr = this.insurAddr.replace(reg, ''):'';
              }
              //每月家庭支出
              if (this.applyCustBasicInfoDTO.monthPayAmt != null) {
                this.applyCustBasicInfoDTO.monthPayAmt = this.formatNumber(this.applyCustBasicInfoDTO.monthPayAmt, 2, 0);
              };
              //单张信用卡最高额度
              if (this.applyCustBasicInfoDTO.cardMaxAmt != null) {
                this.applyCustBasicInfoDTO.cardMaxAmt = this.formatNumber(this.applyCustBasicInfoDTO.cardMaxAmt, 2, 0);
              };
              //户口所在地
              this.applyCustBasicInfoDTO.homeDetailAddr = this.applyCustBasicInfoDTO.homeDetailAddr.replace(reg, '');
              //现住宅地址
              this.applyCustBasicInfoDTO.liveAddress = this.applyCustBasicInfoDTO.liveAddress.replace(reg, '');
            }
            /*私人业主信息*/
            if (res.data.applyPrivateOwnersDT == null) {
              this.applyPrivateOwnersDT = this.applyPrivateOwnersDT;
            } else {
              this.applyPrivateOwnersDT = res.data.applyPrivateOwnersDT;
              //注册资金
              if (this.applyPrivateOwnersDT.regCapitalAmt != null) {
                this.applyPrivateOwnersDT.regCapitalAmt = this.formatNumber(this.applyPrivateOwnersDT.regCapitalAmt, 2, 0);
              };
              //每月净利润额
              if (this.applyPrivateOwnersDT.profitMonthAmt != null) {
                this.applyPrivateOwnersDT.profitMonthAmt = this.formatNumber(this.applyPrivateOwnersDT.profitMonthAmt, 2,
                  0);
              };
              //月还款额/月租金
              if (this.applyPrivateOwnersDT.monthRentAmt != null) {
                this.applyPrivateOwnersDT.monthRentAmt = this.formatNumber(this.applyPrivateOwnersDT.monthRentAmt, 2, 0);
              };
              //淡季销售额
              if (this.applyPrivateOwnersDT.slowMonthSaleAmt != null) {
                this.applyPrivateOwnersDT.slowMonthSaleAmt = this.formatNumber(this.applyPrivateOwnersDT.slowMonthSaleAmt, 2,
                  0);
              };
              //旺季销售额
              if (this.applyPrivateOwnersDT.peakMonthSaleAmt != null) {
                this.applyPrivateOwnersDT.peakMonthSaleAmt = this.formatNumber(this.applyPrivateOwnersDT.peakMonthSaleAmt, 2,
                  0);
              };
              //平季销售额
              if (this.applyPrivateOwnersDT.avgMonthSaleAmt != null) {
                this.applyPrivateOwnersDT.avgMonthSaleAmt = this.formatNumber(this.applyPrivateOwnersDT.avgMonthSaleAmt, 2, 0);
              };
              //企业近一年利润
              if (this.applyPrivateOwnersDT.oneYearProfitAmt != null) {
                this.applyPrivateOwnersDT.oneYearProfitAmt = this.formatNumber(this.applyPrivateOwnersDT.oneYearProfitAmt, 2,
                  0);
              };
              //企业近两年利润
              if (this.applyPrivateOwnersDT.twoYearProfitAmt != null) {
                this.applyPrivateOwnersDT.twoYearProfitAmt = this.formatNumber(this.applyPrivateOwnersDT.twoYearProfitAmt, 2,
                  0);
              };
              //企业近三年利润
              if (this.applyPrivateOwnersDT.threeYearProfitAmt != null) {
                this.applyPrivateOwnersDT.threeYearProfitAmt = this.formatNumber(this.applyPrivateOwnersDT.threeYearProfitAmt,
                  2, 0);
              };
              //企业近一年纳税额
              if (this.applyPrivateOwnersDT.oneYearTaxAmt != null) {
                this.applyPrivateOwnersDT.oneYearTaxAmt = this.formatNumber(this.applyPrivateOwnersDT.oneYearTaxAmt, 2, 0);
              };
              //企业近两年纳税额
              if (this.applyPrivateOwnersDT.twoYearTaxAmt != null) {
                this.applyPrivateOwnersDT.twoYearTaxAmt = this.formatNumber(this.applyPrivateOwnersDT.twoYearTaxAmt, 2, 0);
              };
              //企业近三年纳税额
              if (this.applyPrivateOwnersDT.threeYearTaxAmt != null) {
                this.applyPrivateOwnersDT.threeYearTaxAmt = this.formatNumber(this.applyPrivateOwnersDT.threeYearTaxAmt, 2, 0);
              };
              //占股比例
              if (this.applyPrivateOwnersDT.shareProportion != null) {
                this.applyPrivateOwnersDT.shareProportion = this.formatNumber(this.applyPrivateOwnersDT.shareProportion, 2, 0) + "%";
              };
              //企业净利润率
              if (this.applyPrivateOwnersDT.profitMargin != null) {
                this.applyPrivateOwnersDTapplyPrivateOwnersDT.profitMargin = this.formatNumber(this.applyPrivateOwnersDT.profitMargin, 2, 0) +
                  "%";
              };
              //营业面积
              if (this.applyPrivateOwnersDT.businessArea != null) {
                this.applyPrivateOwnersDT.businessArea = this.formatNumber(this.applyPrivateOwnersDT.businessArea, 2, 0) + "㎡";
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
            if (res.data.applyCustWorkDTO == null) {
              this.applyCustWorkDTO = this.applyCustWorkDTO
            } else {
              this.applyCustWorkDTO = res.data.applyCustWorkDTO;
              //社保缴纳基数
              if (this.applyCustWorkDTO.insureBase != null) {
                this.applyCustWorkDTO.insureBase = this.formatNumber(this.applyCustWorkDTO.insureBase, 2, 0);
              };
              //公积金缴纳基数
              if (this.applyCustWorkDTO.fundBase != null) {
                this.applyCustWorkDTO.fundBase = this.formatNumber(this.applyCustWorkDTO.fundBase, 2, 0);
              };
              //月均工资
              if (this.applyCustWorkDTO.wageAvg != null) {
                this.applyCustWorkDTO.wageAvg = this.formatNumber(this.applyCustWorkDTO.wageAvg, 2, 0);
              };
              //其他收入
              if (this.applyCustWorkDTO.otherIncome != null) {
                this.applyCustWorkDTO.otherIncome = this.formatNumber(this.applyCustWorkDTO.otherIncome, 2, 0);
              };
              //单位地址
              var reg = /null/g;
             this.applyCustWorkDTO.companyAddr? this.applyCustWorkDTO.companyAddr = this.applyCustWorkDTO.companyAddr.replace(reg, ''):'';
            }
            /*联系人信息*/
            if (res.data.applyCustLinkmanDTOs) {
              this.applyCustLinkmanDTOs = res.data.applyCustLinkmanDTOs;
            } else {
              this.applyCustLinkmanDTOs = this.applyCustLinkmanDTOs;
            };
            if (this.datas.customerSources == '00') { //00
              this.datas.customerSources = "电销";
            } else if (this.datas.customerSources == '01') {
              this.datas.customerSources = "报纸";
            } else if (this.datas.customerSources == '02') {
              this.datas.customerSources = "网络";
            } else if (this.datas.customerSources == '03') {
              this.datas.customerSources = "促销活动";
            } else if (this.datas.customerSources == '04') {
              this.datas.customerSources = "朋友介绍";
            } else if (this.datas.customerSources == '05') {
              this.datas.customerSources = "销售开发";
            } else if (this.datas.customerSources == '06') {
              this.datas.customerSources = "其他";
            };
            query = {
              appType: this.datas.appType,
              appTypeTxt: this.datas.appTypeTxt,
              certType: this.applyCustBasicInfoDTO.certType,
              certTypeTxt: this.applyCustBasicInfoDTO.certTypeTxt,
              certCode: this.applyCustBasicInfoDTO.certCode,
              proName: this.datas.productName,
              loanTerm: this.accepApplyLoan.loanTerm,
              applyMainNo: this.datas.applyMainNo,
              applySubNo: this.datas.applySubNo,
              salPerEmployDate: this.datas.directSalesEmployDate,
              appOrgRegisterDate: this.datas.applyOrgRegisterDate,
              adminIntroduce: this.datas.adminIntroduce,
              applyId: this.datas.id,
              workName: this.datas.applyCustWorkDTO.workName,
              proId: this.datas.productId,
              proCode: this.datas.productCode,
              loanAmt: this.accepApplyLoan.loanAmt,
              eachTermAmt: this.accepApplyLoan.eachTermAmt,
              mainCustName: this.datas.mainCustName,
              appOrgName: this.datas.applyOrgName,
              loanType: this.accepApplyLoan.loanType,
              loanTypeTxt: this.accepApplyLoan.loanTypeTxt,
              appOrgId: this.datas.appOrgId,
              appOrgCode: this.datas.appOrgCode,
              applyCustId: this.datas.applyCustBasicInfoDTO.id,
              custNo: this.datas.applyCustBasicInfoDTO.custNo,
              //客户名称
              custName: this.datas.applyCustBasicInfoDTO.custName

            };
            localStorage.setItem("applicationInformationDetail", JSON.stringify(query));
            /*将房产信息保存到本地*/
            if (res.data.applyCustEstateDTOs != '') {
              localStorage.setItem("house", JSON.stringify(res.data.applyCustEstateDTOs));
            };
            /*将车辆信息保存到本地*/
            if (res.data.applyCustCarDTOs != '') {
              localStorage.setItem("car", JSON.stringify(res.data.applyCustCarDTOs));
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
        this.queryParam.pageSize = val;
        this.queryParam.pageNum = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.comrequest(this.queryParam);
        };
      },
      handleCurrentChange(val) {
        this.queryParam.pageNum = val;
        this.comrequest(this.queryParam);
      },
      /*维护日志详情*/
      handlDetail(index, row) {
        this.detailLogVisible = true;
        this.detailParam.operLogId = row.id;
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
        this.detailParam.pageSize = val;
        this.detailParam.pageNum = 1;
        if (this.currentPage1 !== 1 || this.setPageSize1 !== 10) {
          this.currentPage1 = 1;
          this.setPageSize1 = 10;
        } else {
          this.detailRequest(this.detailParam);
        };
      },
      dhandleCurrentChange(val) {
        this.detailParam.pageNum = val;
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
