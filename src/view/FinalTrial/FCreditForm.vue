<template>
  <!-- 整合后的查看页面 -->
  <div class="CreditForm">
    <el-collapse v-model="activeNames">
      <!-- 初审人员 -->
      <el-collapse-item name="0" v-if="TrilPersonShow">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">初审人员</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_210 ">初审人员编号：</label>
              <span>{{this.FormData.ploanOperCode}} </span>
            </li>
            <li class="li_triplet_two_rows">
              <label class="label_width_210">初审人员姓名：</label>
              <span>{{this.FormData.ploanOperName}} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 网上查询信息 -->
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">网上查询信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="label_width_210">
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
                <span>{{this.FormData.wbeexEcutedtext}} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS">
                <label class="label_width_210"> 执行信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wbeexEcutedtxt}} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
                <span>{{this.FormData.wnetHirecomtext}} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS1">
                <label class="label_width_210"> 单位执行信息说明：</label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetHirecomtxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(1)">客户在失信网是否有失信记录：</label>
                <span>{{this.FormData.wnetEcutedBreatext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS2">
                <label class="label_width_210"> 失信记录说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetEcutedBreatxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
                <span>{{this.FormData.wnetHirecomBreatext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS3">
                <label class="label_width_210"> 单位失信记录说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetHirecomBreatxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(2)">网上搜索借款人手机是否有异常：</label>
                <span>{{this.FormData.wnetPhonetext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS4">
                <label class="label_width_210"> 手机异常信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetPhonetxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(2)">网搜单位名称是否有异常：</label>
                <span>{{this.FormData.wnetHirecomNametext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS5">
                <label class="label_width_210"> 单位名称异常信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetHirecomNametxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(2)">网搜单位电话是否有异常：</label>
                <span>{{this.FormData.wnetHirecomPhonetext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS6">
                <label class="label_width_210"> 单位电话异常信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetHirecomPhonetxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_height_48 label_width_210 blueC margin_right_5" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
                <span>{{this.FormData.wnetAddrandEstatetext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS7">
                <label class="label_width_210"> 地址异常信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetAddrandEstatetxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(2)">网搜单位地址是否有异常：</label>
                <span>{{this.FormData.wnetHirecomAddresstext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS8">
                <label class="label_width_210"> 单位地址异常信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetHirecomAddresstxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(3)">当地工商网查询企业基本信息中是否有登记：</label>
                <span>{{this.FormData.wnetCompanytext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS9">
                <label class="label_width_210"> 工商登记信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetCompanytxt }} </span>
              </li>
            </div>
            <div>
              <li>
                <label class=" label_width_210 blueC margin_right_5" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
                <span>{{this.FormData.wnetAddrstatetext }} </span>
              </li>
              <li class='li_triplet_two_rows' v-show="this.InternetShow.commentS10">
                <label class="label_width_210"> 组织机构代码信息说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.wnetAddrstatetxt }} </span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">核实身份</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" clearFix">
              <li>
                <label class="label_width_210">接听者是否是借款人本人：</label>
                <span>{{this.FormData.iisselftext }} </span>
              </li>
              <li class="li_triplet_two_rows" v-if="this.checkId.declearNloaned">
                <label class=" label_width_210 "> 接听说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.iisselftxt }} </span>
              </li>
            </div>
            <div class=" border_top clearFix" v-if="this.checkId.declearNloaned">
              <li>
                <label class="label_width_210">是否在我司申请借款：</label>
                <span>{{this.FormData.iloanBeforetext }} </span>
              </li>
              <li class="li_triplet_two_rows" v-if="this.checkId.loanNot">
                <label class=" label_width_210 "> 说明： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.iloanBeforetxt }} </span>
              </li>
            </div>
            <div class=" border_top clearFix" v-if="this.checkId.loanNot">
              <li>
                <label class="label_width_210">借款金额[元]：</label>
                <span>{{this.FormData.iloanAmt }} </span>
              </li>
              <li>
                <label class=" label_width_210 "> 借款期限[月]： </label>
                <span>{{this.FormData.iloanTerm }} </span>
              </li>
            </div>
            <div class=" border_top clearFix" v-if="this.checkId.loanNot">
              <li>
                <label class="label_width_210">借款用途：</label>
                <span>{{this.FormData.iloanPurposetext }} </span>
              </li>
              <li i class="li_triplet_two_rows">
                <label class=" label_width_210 "> 借款用途详细说明： </label>
                <span>{{this.FormData.iloanPurposetxt }} </span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息  -->
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工作信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_one_row">
                <label class="label_width_210">工作单位：</label>
                <span>{{this.FormData.hirecomName }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210">单位性质：</label>
                <span>{{this.FormData.hirecomSigntext }} </span>
              </li>
              <li>
                <label class="label_width_210">所属行业：</label>
                <span>{{this.FormData.hirecomKind}} </span>
              </li>
              <li>
                <label class="label_width_210">所在部门： </label>
                <span>{{this.FormData.hiredepartment }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210"> 职位级别：</label>
                <span class="detail_inf elips">{{this.FormData.workPost }} </span>
              </li>
              <li>
                <label class="label_width_210">单位电话：</label>
                <span>{{this.FormData.workTel }} </span>
              </li>
              <li>
                <label class=" label_width_210"> 入职时间： </label>
                <span>{{this.FormData.entryDate }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210">月均工资[元]：</label>
                <span>{{this.FormData.avgsalaryamt }} </span>
              </li>
              <li>
                <label class="label_width_210">每月发薪日：</label>
                <span>{{this.FormData.payDay }} </span>
              </li>
              <li>
                <label class=" label_width_210">工资发放形式： </label>
                <span>{{this.FormData.hirecomPaymentTypetext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_triplet_two_rows">
                <label class="label_width_210">单位地址：</label>
                <span class="detail_inf elips">{{this.FormData.addressMsg}} </span>
              </li>
              <li>
                <label class=" label_width_210"> 单位地址邮编：</label>
                <span>{{this.FormData.workZip }} </span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_210">前单位名称：</label>
                <span class="detail_inf elips">{{this.FormData.hirelastComname }} </span>
              </li>
              <li>
                <label class=" label_width_210 "> 是否为私营业主： </label>
                <span>{{this.FormData.privateOwnerFlagtext}} </span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 私营企业信息 -->
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">私营企业信息</span>
        </template>
        <!-- <div class="CreditForm_CompanyInfs" v-show="this.workInf.private"> -->
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_one_row">
                <label class="label_width_210 ">企业类型：</label>
                <span>{{this.FormData.selfTypetext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_triplet_two_rows">
                <label class=" label_width_210 "> 公司注册时间： </label>
                <span>{{this.FormData.compegDate }} </span>
              </li>
              <li>
                <label class="label_width_210"> 经营场所：</label>
                <span>{{this.FormData.selfpremisestext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_triplet_two_rows">
                <label class="label_width_210 ">注册资金[万元]：</label>
                <span>{{this.FormData.regcapitalamt }} </span>
              </li>
              <li>
                <label class="label_width_210 "> 员工人数：</label>
                <span>{{this.FormData.selfempCount }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_triplet_two_rows">
                <label class="label_width_210">占股比例：</label>
                <span>{{this.FormData.selfhasProportion }} </span>
              </li>
              <li>
                <label class=" label_width_210 "> 每月净利润额[万元]：</label>
                <span>{{this.FormData.profitamountmamt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210 ">月还款额/租金[万元]：</label>
                <span>{{this.FormData.monthrentamt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_triplet_two_rows">
                <label class="label_width_210">营业面积：</label>
                <span>{{this.FormData.selfpremisesArea }} </span>
              </li>
              <li>
                <label class="label_width_210">第一供销商：</label>
                <span>{{this.FormData.firstSuppliers }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_triplet_two_rows">
                <label class="label_width_210 ">企业经营项目：</label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.projectManage }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210 ">近一年利润[万元]：</label>
                <span>{{this.FormData.oneYearProfitamt }} </span>
              </li>
            </div>
            <div class="  clearFix">
              <li class="li_one_row">
                <label class="label_width_210 "> 第一分销商： </label>
                <span class="text_area_span_minus220">{{this.FormData.firstDistributor }} </span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 家庭信息 -->
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">家庭信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210 ">婚姻状况：</label>
                <span>{{this.FormData.fmarrflagtext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show=" this.marriage.couple">
              <li>
                <label class=" label_width_210  ">配偶工作情况：</label>
                <span>{{this.FormData.spouseWorktext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show=" this.marriage.workingCondition">
              <li>
                <label class=" label_width_210  ">配偶工作类型：</label>
                <span>{{this.FormData.spouseWorktypetext }} </span>
              </li>
              <li>
                <label class=" label_width_210 "> 配偶收入情况[月/元]： </label>
                <span style="border:none;verticalAlign:middle;height:auto;">{{this.FormData.spouseIncome }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show=" this.marriage.couple">
              <li>
                <label class=" label_width_210  ">是否在同一个城市工作生活：</label>
                <span>{{this.FormData.spouseSamecitytext }} </span>
              </li>
              <li v-show="this.marriage.workingLivingInf" class='li_triplet_two_rows'>
                <label class="label_width_210"> 在同一个城市工作生活信息： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.spouseSamecitytxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210 ">是否有子女：</label>
                <span>{{this.FormData.childFlagtext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.Children.ChildrenOrNot">
              <li>
                <label class="label_width_210 ">子女数量：</label>
                <span>{{this.FormData.childCount }} </span>
              </li>
              <li class='li_triplet_two_rows'>
                <label class="label_width_210"> 子女数量备注： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.childCounttxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.Children.ChildrenOrNot">
              <li>
                <label class="label_width_210 ">子女现状：</label>
                <span>{{this.FormData.childStatustext }} </span>
              </li>
              <li class='li_triplet_two_rows'>
                <label class="label_width_210"> 子女现状备注： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.childStatustxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.Children.ChildrenOrNot">
              <li>
                <label class=" label_width_210">子女是否在身边：</label>
                <span>{{this.FormData.childTogethertext }} </span>
              </li>
              <li>
                <label class="label_width_210"> 是否支付其生活费： </label>
                <span style="border:none;verticalAlign:middle;height:auto;">{{this.FormData.childIspaycosttext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.Children.PayAlimony">
              <li>
                <label class="label_width_210 "> 生活费支付额度[元]： </label>
                <span>{{this.FormData.childPaycostamt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_210 ">父母是否在世：</label>
                <span>{{this.FormData.parentIslivingtext }} </span>
              </li>
              <li v-show="this.parent.livingOrNot" class='li_triplet_two_rows'>
                <label class="label_width_210 ">父母备注：</label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.parentIslivingtxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.parent.livingOrNot">
              <li>
                <label class=" label_width_210">父母身体状况：</label>
                <span>{{this.FormData.parentHealthtext }} </span>
              </li>
              <li class='li_triplet_two_rows'>
                <label class="label_width_210"> 父母身体状况备注： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.parentHealthtxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.parent.livingOrNot">
              <li>
                <label class=" label_width_210">父母是否需要赡养：</label>
                <span>{{this.FormData.parentPayalimonytext }} </span>
              </li>
              <li class='li_triplet_two_rows'>
                <label class="label_width_210"> 父母是否需要赡养备注： </label>
                <span class="text_area_span text_area_span_minus220">{{this.FormData.parentPayalimonytxt }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.parent.livingOrNot">
              <li>
                <label class=" label_width_210">父母工作情况：</label>
                <span>{{this.FormData.parentWorktext }} </span>
              </li>
              <li>
                <label class="label_width_210"> 父母收入[元]： </label>
                <span style="border:none;">{{this.FormData.parentIncome }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix" v-show="this.parent.livingOrNot">
              <li>
                <label class=" label_width_210">父母是否知情：</label>
                <span>{{this.FormData.parentInformedtext }} </span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class=" label_width_210">是否有兄弟姐妹：</label>
                <span>{{this.FormData.brothersIfhastext }} </span>
              </li>
              <li v-show="this.siblings.siblingsOrNot">
                <label class="label_width_210"> 是否有兄弟姐妹备注： </label>
                <span>{{this.FormData.brothersIfhastxt }} </span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_210">个人/家庭月开销[元]：</label>
                <span>{{this.FormData.fconsumption }} </span>
              </li>
              <li>
                <label class="label_width_210">可以承受的月还款[元]： </label>
                <span>{{this.FormData.fbalance }} </span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 居住情况 -->
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">居住情况</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <div class=" CreditForm_div_border clearFix">
            <label class=" label_width_210">同住者关系：</label>
            <span>{{this.FormData.livingHouseHoldstext }} </span>
          </div>
          <div>
            <label class="label_width_210">居住房产所属情况：</label>
            <span>{{this.FormData.livingEstateBelongstext }} </span>
          </div>
        </div>
      </el-collapse-item>
      <!-- 核对现住址 -->
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">核对现住址</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <div class=" CreditForm_div_border clearFix">
            <label class="label_width_210 ">现住址：</label>
            <span>{{this.FormData.aaddress}}</span>
          </div>
          <div class=" clearFix">
            <label class="label_width_210 ">现住地址是否为常住地址：</label>
            <span>{{this.FormData.aisresidenttext}} </span>
          </div>
          <div class="border_top" v-show="this.address.permanent">
            <label class="label_width_210 ">常住地址：</label>
            <span>{{this.FormData.aisresidenttxt}} </span>
          </div>
        </div>
      </el-collapse-item>
      <!-- 电话征信结论 -->
      <el-collapse-item name="8" v-if="PhoneAndInterShow">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电话征信结论</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix divWrap_Padding_top_4">
          <div class=" CreditForm_div_border clearFix">
            <label class="label_width_210 ">住址电话调查结论：</label>
            <span class="text_area_span text_area_span_minus220">{{this.FormData.hometelConclusion }} </span>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <label class="label_width_210">单位电话调查结论：</label>
            <span class="text_area_span text_area_span_minus220">{{this.FormData.companyConclusion }} </span>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <label class="label_width_210">家庭联系人调查结论：</label>
            <span class="text_area_span text_area_span_minus220">{{this.FormData.fContractConclusion }} </span>
          </div>
          <div class=" CreditForm_div_border clearFix">
            <label class="label_width_210">其他联系人调查结论：</label>
            <span class="text_area_span text_area_span_minus220">{{this.FormData.eContractConclusion }} </span>
          </div>
          <div>
            <label class="label_width_210">工作证明人调查结论：</label>
            <span class="text_area_span text_area_span_minus220">{{this.FormData.jobRefConclusion }} </span>
          </div>
        </div>
      </el-collapse-item>
      <!-- 内部匹配结论 -->
      <el-collapse-item name="9" v-if="PhoneAndInterShow">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">内部匹配结论</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix divWrap_Padding_top_4">
          <label class="label_width_210">匹配调查结论：</label>
          <span class="text_area_span text_area_span_minus220">{{this.FormData.auditDesc }} </span>
        </div>
      </el-collapse-item>
      <!-- 审批结论 -->
      <el-collapse-item name="10">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">审批结论</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix divWrap_Padding_top_4">
          <div class=" CreditForm_div_border clearFix">
            <label class="label_width_210">初审结果评价：</label>
            <span class="text_area_span text_area_span_minus220" style="height:115px;">{{this.FormData.oother}} </span>
          </div>
          <div v-if="FinalConEditShow" class="  clearFix  Padding_top_10" style="position:relative">
            <i class="hint" style='top:-5px;left:220px;'>
              <!-- <span v-show="errors.has('Finalconclusion')">{{ errors.first('Finalconclusion') }}</span> -->
              <b v-show="this.finalResult">输入长度不能超过500</b>
            </i>
            <label class="label_width_210">
              <span style="color:#ff7676;"> * </span>终审结果评价：</label>
            <el-input type="textarea" :rows="5" resize="none" :maxlength="400" placeholder="请输入内容" @compositionend.native="wordarea(FormData.ootherfinal)"
              @keyup.native="wordarea(FormData.ootherfinal)" v-model="FormData.ootherfinal" name="Finalconclusion" v-validate="'required'">
            </el-input>
          </div>
          <div class="  clearFix" v-if="FinalConCheckShow">
            <label class="label_width_210">终审结果评价：</label>
            <span class="text_area_span text_area_span_minus220" style="height:115px">{{this.FormData.ootherfinal}} </span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="btn_wrap" v-if="makeSureBtnShow">
      <el-button type="primary" class="btn" @click="makeSureBtn">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        finalResult: false,
        FormData: [],
        Pwidth: [],
        CFwidth: [],
        inputWidth: [],
        textareaPpraProj: [],
        shotInputL: 10,
        longInputL: 10,
        longLongInputL: 10,
        shotTextareaL: 10,
        textareaL: 10,
        acreage: '',
        Percent: '',
        Wordhint: {
          Internet: {
            excude: false,
            comExcude: false,
            looseCreSel: false,
            looseCre: false,
            comLooseCre: false,
            phoneOUtSSel: false,
            phoneOUtS: false,
            comphoneOUtS: false,
            ComName: false,
            address: false,
            comAddress: false,
            loginOrNotSel: false,
            loginOrNot: false,
            institutionCode: false
          },
          checkID: {
            answerDec: false,
            Declear: false,
            loanPurposed: false,
          },
          Working: {
            address: false,
            level: false,
            preComName: false,
            ComAdr: false,
            department: false,
          },
          company: {
            manage: false,
            Supplier: false,
            distributor: false,
          },
          family: {
            SameCity: false,
            ChildCondition: false,
            ChildCt: false,
            ParentRemark: false,
            ParentHealth: false,
            Payalimony: false,
            siblings: false,
          },
          address: {
            permanentAddress: false,
          },
          result: false,
        },
        // getParams: [], //获取taskwaitting里面的 查询入参 applyId
        // Confirm: false,
        reg: {
          payDay: false,
          mMontyP: false,
          mpostCode: false,
          mphoneM: false,
          mphoneR: false,
        },
        reqd: '',
        addressOne: '',
        InternetShow: {
          commentS: true,
          commentS1: true,
          commentS2: true,
          commentS3: true,
          commentS4: true,
          commentS5: true,
          commentS6: true,
          commentS7: true,
          commentS8: true,
          commentS9: true,
          commentS10: true,
        },
        checkId: {
          declearNloaned: false,
          loanNot: false,
        },
        workInf: {
          private: false,
          empNumber: false,
        },
        marriage: {
          couple: true,
          workingCondition: false,
          workingLivingInf: false,
        },
        Children: {
          ChildrenOrNot: false,
          PayAlimony: false,
          ChildCount: false,
        },
        parent: {
          livingOrNot: false,
        },
        siblings: {
          siblingsOrNot: false,
        },
        address: {
          permanent: false,
        },
        Internet: ["客户执行", "单位执行", "客户失信", "单位失信", "客户手机", "单位名称", "单位电话", "客户住址房产", "单位地址", "企业登记", "单位组织代码",
          "接听是否本人", "是否申请借款", "是否私营业主", "婚姻状况", "配偶工作情况", "同城工作生活", "是否有子女", "是否支付生活费", "父母是否在世", "是否有兄弟姐妹",
          "是否为常住地址"
        ],
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8", '9', '10', '11'],
        checkData: [],
      }
    },
    props: {
      FinalConEditShow: {
        default: false,
        type: Boolean
      },
      FinalConCheckShow: {
        default: false,
        type: Boolean
      },
      PhoneAndInterShow: {
        default: true,
        type: Boolean
      },
      makeSureBtnShow: {
        default: false,
        type: Boolean

      },
      TrilPersonShow: {
        default: false,
        type: Boolean
      },
      applyId: {
        default: '',
        required: true,
      }
    },
    methods: {
      makeSureBtn() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$confirm('确定提交？', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              cancelButtonText: '取消',
              showCancelButton: true
            }).then(() => {
              this.CFsave();
            }).catch(() => {});
          } else {
            this.$message.error('提交失败，有必填项未填写！');
          }
        });
      },
      // canc() {
      //   this.Confirm = false;
      // },
      // closed() {
      //   this.Confirm = false;
      // },
      CFsave() {
        this.post("/creauditInfo/updateOtherfinalByPK", {
          // applyId: this.FormData.applyId,//合并之前
          applyId: this.applyId,
          id: this.FormData.id,
          ootherfinal: this.FormData.ootherfinal
        }).then(res => {
          if (res.statusCode == 200) {
            // this.Confirm = false;
            this.AreaNPercent();
            this.$message({
              message: '提交成功!',
              type: 'success'
            });
            this.mountC();
          } else {
            // this.Confirm = false;
            this.$message.error('提交失败，请稍后再试！');
            this.mountC();
          }
        });
      },
      formatSC() {
        this.FormData.fbalance ? this.FormData.fbalance = this.formatNumber(this.FormData.fbalance, 2, 0) : this.FormData
          .fbalance;
        this.FormData.iloanAmt ? this.FormData.iloanAmt = this.formatNumber(this.FormData.iloanAmt, 2, 0) : this.FormData
          .iloanAmt;
        this.FormData.avgsalaryamt ? this.FormData.avgsalaryamt = this.formatNumber(this.FormData.avgsalaryamt, 2, 0) :
          this.FormData.avgsalaryamt;
        this.FormData.regcapitalamt ? this.FormData.regcapitalamt = this.formatNumber(this.FormData.regcapitalamt, 2, 0) :
          this.FormData.regcapitalamt;
        this.FormData.profitamountmamt ? this.FormData.profitamountmamt = this.formatNumber(this.FormData.profitamountmamt,
          2, 0) : this.FormData.profitamountmamt;
        this.FormData.monthrentamt ? this.FormData.monthrentamt = this.formatNumber(this.FormData.monthrentamt, 2, 0) :
          this.FormData.monthrentamt;
        this.FormData.oneYearProfitamt ? this.FormData.oneYearProfitamt = this.formatNumber(this.FormData.oneYearProfitamt,
          2, 0) : this.FormData.oneYearProfitamt;
        this.FormData.spouseIncome ? this.FormData.spouseIncome = this.formatNumber(this.FormData.spouseIncome, 2, 0) :
          this.FormData.spouseIncome;
        this.FormData.childPaycostamt ? this.FormData.childPaycostamt = this.formatNumber(this.FormData.childPaycostamt,
          2, 0) : this.FormData.childPaycostamt;
        this.FormData.parentIncome ? this.FormData.parentIncome = this.formatNumber(this.FormData.parentIncome, 2, 0) :
          this.FormData.parentIncome;
        this.FormData.fconsumption ? this.FormData.fconsumption = this.formatNumber(this.FormData.fconsumption, 2, 0) :
          this.FormData.fconsumption;
        // this.FormData.selfpremisesArea = this.FormData.selfpremisesArea.slice(0, -2);
        // this.FormData.selfhasProportion = this.FormData.selfhasProportion.slice(0, -1);
        this.FormData.selfpremisesArea ? this.FormData.selfpremisesArea = this.formatNumber(this.FormData.selfpremisesArea,
          2, 0) + 'm²' : this.FormData.selfpremisesArea;
        this.FormData.selfhasProportion ? this.FormData.selfhasProportion = this.formatNumber(this.FormData.selfhasProportion,
          2, 0) + '%' : this.FormData.selfhasProportion;
      },
      formatNumber(num, cent, isThousand) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) {
          num = "0";
        }
        let sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * Math.pow(10, cent) + 0.50000000001);
        let cents = num % Math.pow(10, cent);
        num = Math.floor(num / Math.pow(10, cent)).toString();
        cents = cents.toString();
        while (cents.length < cent)
          cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
        if (cent > 0) {
          return (((sign) ? '' : '-') + num + '.' + cents);
        } else {
          return (((sign) ? '' : '-') + num);
        }
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
      AreaNPercent() {
        if (this.FormData.selfpremisesArea) {
          this.FormData.selfpremisesArea += "m²";
        } else {
          this.FormData.selfpremisesArea = "";
        }
        if (this.FormData.selfhasProportion) {
          this.FormData.selfhasProportion += "%";
        } else {
          this.FormData.selfhasProportion = "";
        }
      },
      wordarea(val) {
        if (val.length <= 499) {
          this.FormData.ootherfinal = val;
          this.finalResult = false;
        } else {
          this.finalResult = true;
        }
      },
      mountC() {
        // 获取查询列表数据
        this.post("/creauditInfo/queryCreauditInfoObj", {
          // applyId: this.getParams.applyId,//合并之前
          // applyId: "00542",applyId
          applyId: this.applyId,

        }).then(res => {
          if (res.statusCode == 200) {
            this.FormData = res.data;
            // this.FormData.applyId = this.getParams.applyId;
            this.AreaNPercent();
            this.formatSC();
            this.FormData.aaddress ? this.FormData.aaddress = this.FormData.aaddress.replace(/null/g, '') : this.FormData
              .aaddress;
            this.mountJ(0, res.data.wbeexEcuted);
            this.mountJ(1, res.data.wnetHirecom);
            this.mountJ(2, res.data.wnetEcutedBrea);
            this.mountJ(3, res.data.wnetHirecomBrea);
            this.mountJ(4, res.data.wnetPhone);
            this.mountJ(5, res.data.wnetHirecomName);
            this.mountJ(6, res.data.wnetHirecomPhone);
            this.mountJ(7, res.data.wnetAddrandEstate);
            this.mountJ(8, res.data.wnetHirecomAddress);
            this.mountJ(9, res.data.wnetCompany);
            this.mountJ(10, res.data.wnetAddrstate);
            this.mountJ(11, res.data.iisself);
            this.mountJ(12, res.data.privateOwnerFlag);
            this.mountJ(13, res.data.fmarrflag);
            this.mountJ(14, res.data.spouseWork);
            this.mountJ(15, res.data.spouseSamecity);
            this.mountJ(16, res.data.childFlag);
            this.mountJ(17, res.data.childIspaycost);
            this.mountJ(18, res.data.parentIsliving);
            this.mountJ(19, res.data.brothersIfhas);
            this.mountJ(20, res.data.aisresident);
            this.mountJ(21, res.data.iloanBefore);
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      mountJ(code, val) {
        switch (code) {
          case 0:
            val == 0 ? this.InternetShow.commentS = false : this.InternetShow.commentS = true;
            break;
          case 1:
            val == 0 ? this.InternetShow.commentS1 = false : this.InternetShow.commentS1 = true;
            break;
          case 2:
            val == 0 ? this.InternetShow.commentS2 = false : this.InternetShow.commentS2 = true;
            break;
          case 3:
            val == 0 ? this.InternetShow.commentS3 = false : this.InternetShow.commentS3 = true;
            break;
          case 4:
            val == 0 ? this.InternetShow.commentS4 = false : this.InternetShow.commentS4 = true;
            break;
          case 5:
            val == 0 ? this.InternetShow.commentS5 = false : this.InternetShow.commentS5 = true;
            break;
          case 6:
            val == 0 ? this.InternetShow.commentS6 = false : this.InternetShow.commentS6 = true;
            break;
          case 7:
            val == 0 ? this.InternetShow.commentS7 = false : this.InternetShow.commentS7 = true;
            break;
          case 8:
            val == 0 ? this.InternetShow.commentS8 = false : this.InternetShow.commentS8 = true;
            break;
          case 9:
            val == 0 ? this.InternetShow.commentS9 = false : this.InternetShow.commentS9 = true;
            break;
          case 10:
            val == 0 ? this.InternetShow.commentS10 = false : this.InternetShow.commentS10 = true;
            break;
          case 11:
            val == 0 || val == null ? this.checkId.declearNloaned = false : this.checkId.declearNloaned = true;
            break;
          case 12:
            val == 0 || val == null ? this.workInf.private = false : this.workInf.private = true;
            break;
          case 13:
            val == "01" || val == "04" || val == null ? this.marriage.couple = false : this.marriage.couple = true;
            break;
          case 14:
            val == "00" || val == "03" ? this.marriage.workingCondition = true : this.marriage.workingCondition = false;
            break;
          case 15:
            val == 0 || val == null ? this.marriage.workingLivingInf = false : this.marriage.workingLivingInf = true;
            break;
          case 16:
            val == 0 || val == null ? this.Children.ChildrenOrNot = false : this.Children.ChildrenOrNot = true;
            break;
          case 17:
            val == 0 || val == null ? this.Children.PayAlimony = false : this.Children.PayAlimony = true;
            break;
          case 18:
            val == 0 || val == null ? this.parent.livingOrNot = false : this.parent.livingOrNot = true;
            break;
          case 19:
            val == 0 || val == null ? this.siblings.siblingsOrNot = false : this.siblings.siblingsOrNot = true;
            break;
          case 20:
            val == 0 ? this.address.permanent = true : this.address.permanent = false;
            break;

          case 21:
            val == 0 || val == null ? this.checkId.loanNot = false : this.checkId.loanNot = true;
            break;
        }
      },
    },
    mounted() {
      // this.getParams = JSON.parse(localStorage.getItem("FtaskInWaitting")); // 终审工作台
      // // 获取查询列表数据
      this.mountC();
    },
  }

</script>

<style scoped>
  /* ------------------------------------------------ */

  /* 最下面的 弹窗样式 */

  /* 上网信息-两行select下拉 居中 */

  .hint {
    color: #ff7676;
    font-size: 12px;
    display: inline-block;
    width: 100%;
    font-style: normal;
    position: absolute;
    top: -20px;
    left: 205px;
  }

  .btn_wrap {
    /* width: 66.6%; */
    height: 60px;
  }

  .btn {
    margin-left: 235px;
  }

  /* .calbtn {
    background: white;
    border: 1px solid #d8dce5;
    color: #5a5e66;
    ;
    margin-left: 10px;
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  .subtn {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
    margin-left: 10px;
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  } */

  .SureAlert_content {}

</style>
