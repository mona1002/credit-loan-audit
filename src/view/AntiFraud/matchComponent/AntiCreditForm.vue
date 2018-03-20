<template>
  <!-- 终审-内部匹配中-信审表-（去掉初审人员）-mounted获取分屏-反欺诈专员+主管字段(匹配查看-内部匹配获取的是internal字段) -->
  <div class="CreditForm">
    <el-collapse v-model="activeNames">
      <!-- 网上查询信息 -->
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">网上查询信息</span>
        </template>
        <div class="CreditForm_InternetInf up_padding">
          <ul>
            <li class="top">
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
                <span class="detail_inf">{{this.FormData.wbeexEcutedtext}} </span>
              </p>
              <p v-show="this.InternetShow.commentS">
                <label class="InternetInf_right_label"> 执行信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wbeexEcutedtxt==null||this.FormData.wbeexEcutedtxt==''" :content="this.FormData.wbeexEcutedtxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.wbeexEcutedtxt}} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomtext}} </span>
              </p>
              <p v-show="this.InternetShow.commentS1">
                <label class="InternetInf_right_label"> 单位执行信息说明：</label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetHirecomtxt==null||this.FormData.wnetHirecomtxt==''" :content="this.FormData.wnetHirecomtxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetHirecomtxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(1)">客户在失信网是否有失信记录：</label>
                <span class="detail_inf">{{this.FormData.wnetEcutedBreatext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS2">
                <label class="InternetInf_right_label"> 失信记录说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetEcutedBreatxt==null||this.FormData.wnetEcutedBreatxt==''"
                  :content="this.FormData.wnetEcutedBreatxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetEcutedBreatxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomBreatext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS3">
                <label class="InternetInf_right_label"> 单位失信记录说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetHirecomBreatxt==null||this.FormData.wnetHirecomBreatxt==''"
                  :content="this.FormData.wnetHirecomBreatxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetHirecomBreatxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网上搜索借款人手机是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetPhonetext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS4">
                <label class="InternetInf_right_label"> 手机异常信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetPhonetxt==null||this.FormData.wnetPhonetxt==''" :content="this.FormData.wnetPhonetxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetPhonetxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网搜单位名称是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomNametext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS5">
                <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetHirecomNametxt==null||this.FormData.wnetHirecomNametxt==''"
                  :content="this.FormData.wnetHirecomNametxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetHirecomNametxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网搜单位电话是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomPhonetext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS6">
                <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetHirecomPhonetxt==null||this.FormData.wnetHirecomPhonetxt==''"
                  :content="this.FormData.wnetHirecomPhonetxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetHirecomPhonetxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetAddrandEstatetext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS7">
                <label class="InternetInf_right_label"> 地址异常信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetAddrandEstatetxt==null||this.FormData.wnetAddrandEstatetxt==''"
                  :content="this.FormData.wnetAddrandEstatetxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetAddrandEstatetxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网搜单位地址是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomAddresstext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS8">
                <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetHirecomAddresstxt==null||this.FormData.wnetHirecomAddresstxt==''"
                  :content="this.FormData.wnetHirecomAddresstxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetHirecomAddresstxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(3)">当地工商网查询企业基本信息中是否有登记：</label>
                <span class="detail_inf">{{this.FormData.wnetCompanytext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS9">
                <label class="InternetInf_right_label"> 工商登记信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetCompanytxt==null||this.FormData.wnetCompanytxt==''" :content="this.FormData.wnetCompanytxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetCompanytxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label blueC" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
                <span class="detail_inf">{{this.FormData.wnetAddrstatetext }} </span>
              </p>
              <p v-show="this.InternetShow.commentS10" class="bottom">
                <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.wnetAddrstatetxt==null||this.FormData.wnetAddrstatetxt==''"
                  :content="this.FormData.wnetAddrstatetxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.wnetAddrstatetxt }} </span>
                </el-tooltip>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">核实身份</span>
        </template>
        <div class="CreditForm_CheckId up_padding">
          <ul class="CreditForm_CheckId_ul_left">
            <li class="top">
              <p>
                <label class="InternetInf_left_label">接听者是否是借款人本人：</label>
                <span class="detail_inf">{{this.FormData.iisselftext }} </span>
              </p>
              <p v-show="this.checkId.declearNloaned">
                <label class=" InternetInf_right_label "> 接听说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.iisselftxt==null||this.FormData.iisselftxt==''" :content="this.FormData.iisselftxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.iisselftxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.declearNloaned">
                <label class="InternetInf_left_label">是否在我司申请借款：</label>
                <span class="detail_inf">{{this.FormData.iloanBeforetext }} </span>
              </p>
              <p v-show="this.checkId.loanNot">
                <label class=" InternetInf_right_label "> 说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.iloanBeforetxt==null||this.FormData.iloanBeforetxt==''" :content="this.FormData.iloanBeforetxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.iloanBeforetxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.loanNot">
                <label class="InternetInf_left_label">借款金额[元]：</label>
                <span class="detail_inf">{{this.FormData.iloanAmt }} </span>
              </p>
              <p v-show="this.checkId.loanNot">
                <label class=" InternetInf_right_label "> 借款期限[月]： </label>
                <span class="detail_inf" style="border:none;padding:0;height:auto;">{{this.FormData.iloanTerm }} </span>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.loanNot">
                <label class="InternetInf_left_label">借款用途：</label>
                <span class="detail_inf">{{this.FormData.iloanPurposetext }} </span>
              </p>
              <p v-show="this.checkId.loanNot" class="bottom">
                <label class=" InternetInf_right_label "> 借款用途详细说明： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.iloanPurposetxt==null||this.FormData.iloanPurposetxt==''"
                  :content="this.FormData.iloanPurposetxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.iloanPurposetxt }} </span>
                </el-tooltip>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息  -->
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">工作信息</span>
        </template>
        <div class="CreditForm_WorkInfs up_padding" style="padding:20px">
          <ul>
            <li style="width:100%;paddingBottom:20px;">
              <label class="InternetInf_left_label">工作单位：</label>
              <span class="detail_inf">{{this.FormData.hirecomName }} </span>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label">单位性质：</label>
                <span class="detail_inf">{{this.FormData.hirecomSigntext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label">所属行业：</label>
                <span class="detail_inf">{{this.FormData.hirecomKind}} </span>
              </p>
              <p>
                <label class=" CheckId_right_label ">所在部门： </label>
                <span class="detail_inf">{{this.FormData.hiredepartment }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label "> 职位级别： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.workPost==null||this.FormData.workPost==''" :content="this.FormData.workPost"
                  placement="top-start">
                  <span class="detail_inf elips">{{this.FormData.workPost }} </span>
                </el-tooltip>
              </p>
              <p>
                <label class="InternetInf_right_label">单位电话：</label>
                <span class="detail_inf">{{this.FormData.workTel }} </span>
              </p>
              <p>
                <label class=" CheckId_right_label "> 入职时间： </label>
                <span class="detail_inf">{{this.FormData.entryDate }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label">月均工资[元]：</label>
                <span class="detail_inf">{{this.FormData.avgsalaryamt }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label">每月发薪日：</label>
                <span class="detail_inf">{{this.FormData.payDay }} </span>
              </p>
              <p>
                <label class=" CheckId_right_label ">工资发放形式： </label>
                <span class="detail_inf">{{this.FormData.hirecomPaymentTypetext }} </span>
              </p>
            </li>
            <li class="company_address_select">
              <p style="width:66.6%">
                <label class="InternetInf_left_label ">单位地址 ：</label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.addressMsg==null||this.FormData.addressMsg==''" :content="this.FormData.addressMsg"
                  placement="top-start">
                  <span class="detail_inf elips">{{this.FormData.addressMsg}} </span>
                </el-tooltip>
              </p>
              <p>
                <label class=" CheckId_right_label "> 单位地址邮编： </label>
                <span class="detail_inf">{{this.FormData.workZip }} </span>
              </p>
            </li>
            <li>
              <p style="width: 66.6%;" class="bottom">
                <label class="InternetInf_left_label">前单位名称：</label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.hirelastComname==null||this.FormData.hirelastComname==''"
                  :content="this.FormData.hirelastComname" placement="top-start">
                  <span class="detail_inf elips">{{this.FormData.hirelastComname }} </span>
                </el-tooltip>
              </p>
              <p>
                <label class=" CheckId_right_label "> 是否为私营业主： </label>
                <span class="detail_inf">{{this.FormData.privateOwnerFlagtext}} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 私营企业信息 -->
      <el-collapse-item name="4">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">私营企业信息</span>
        </template>
        <div class="CreditForm_CompanyInfs up_padding" v-show="this.workInf.private">
          <ul>
            <li class="top">
              <p>
                <label class="InternetInf_left_label ">企业类型：</label>
                <span class="detail_inf">{{this.FormData.selfTypetext }} </span>
              </p>
              <p>
                <label class=" InternetInf_right_label "> 公司注册时间： </label>
                <span class="detail_inf">{{this.FormData.compegDate }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">注册资金[万元]：</label>
                <span class="detail_inf">{{this.FormData.regcapitalamt }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label">占股比例：</label>
                <span class="detail_inf">{{this.FormData.selfhasProportion }} </span>
              </p>
              <p>
                <label class=" CheckId_right_label "> 经营场所：</label>
                <span class="detail_inf">{{this.FormData.selfpremisestext }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">月还款额/租金[万元]：</label>
                <span class="detail_inf">{{this.FormData.monthrentamt }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label">营业面积：</label>
                <span class="detail_inf">{{this.FormData.selfpremisesArea }} </span>
              </p>
              <p>
                <label class=" CheckId_right_label "> 员工人数： </label>
                <span class="detail_inf">{{this.FormData.selfempCount }} </span>
              </p>
            </li>
            <li>
              <p style="width:66.6%">
                <label class=" InternetInf_left_label">企业经营项目：</label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.projectManage==null||this.FormData.projectManage==''" :content="this.FormData.projectManage"
                  placement="top-start">
                  <span class="detail_inf ComAddr">{{this.FormData.projectManage }} </span>
                </el-tooltip>
              </p>
              <p>
                <label class=" CheckId_right_label "> 每月净利润额[万元]：</label>
                <span class="detail_inf">{{this.FormData.profitamountmamt }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">近一年利润[万元]：</label>
                <span class="detail_inf">{{this.FormData.oneYearProfitamt }} </span>
              </p>
              <p class="bottom">
                <label class="InternetInf_right_label">第一供销商：</label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.firstSuppliers==null||this.FormData.firstSuppliers==''" :content="this.FormData.firstSuppliers"
                  placement="top-start">
                  <span class="detail_inf elips">{{this.FormData.firstSuppliers }} </span>
                </el-tooltip>
              </p>
              <p>
                <label class="CheckId_right_label "> 第一分销商： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.firstDistributor==null||this.FormData.firstDistributor==''"
                  :content="this.FormData.firstDistributor" placement="top-start">
                  <span class="detail_inf distributor">{{this.FormData.firstDistributor }} </span>

                </el-tooltip>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 家庭信息 -->
      <el-collapse-item name="5">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">家庭信息</span>
        </template>
        <div class="CreditForm_FamilyInf up_padding">
          <ul>
            <li>
              <p class="top">
                <label class="InternetInf_left_label ">婚姻状况：</label>
                <span class="detail_inf">{{this.FormData.fmarrflagtext }} </span>
              </p>
            </li>
            <li v-show=" this.marriage.couple">
              <p>
                <label class="InternetInf_left_label ">配偶工作情况：</label>
                <span class="detail_inf">{{this.FormData.spouseWorktext }} </span>
              </p>
            </li>
            <li v-show=" this.marriage.workingCondition">
              <p>
                <label class="InternetInf_left_label ">配偶工作类型：</label>
                <span class="detail_inf">{{this.FormData.spouseWorktypetext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 配偶收入情况[月/元]： </label>
                <span class="detail_inf" style="border:none;verticalAlign:middle;height:auto;">{{this.FormData.spouseIncome }} </span>
              </p>
            </li>
            <li v-show=" this.marriage.couple">
              <p>
                <label class=" InternetInf_left_label">是否在同一个城市工作生活：</label>
                <span class="detail_inf">{{this.FormData.spouseSamecitytext }} </span>
              </p>
              <p v-show="this.marriage.workingLivingInf">
                <label class="InternetInf_right_label"> 在同一个城市工作生活信息： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.spouseSamecitytxt==null||this.FormData.spouseSamecitytxt==''"
                  :content="this.FormData.spouseSamecitytxt" placement="top-start">
                  <span class="detail_inf family">{{this.FormData.spouseSamecitytxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">是否有子女：</label>
                <span class="detail_inf">{{this.FormData.childFlagtext }} </span>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <label class="InternetInf_left_label ">子女数量：</label>
                <span class="detail_inf">{{this.FormData.childCount }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 子女数量备注： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.childCounttxt==null||this.FormData.childCounttxt==''" :content="this.FormData.childCounttxt"
                  placement="top-start">
                  <span class="detail_inf family">{{this.FormData.childCounttxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <label class="InternetInf_left_label ">子女现状：</label>
                <span class="detail_inf">{{this.FormData.childStatustext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 子女现状备注： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.childStatustxt==null||this.FormData.childStatustxt==''" :content="this.FormData.childStatustxt"
                  placement="top-start">
                  <span class="detail_inf">{{this.FormData.childStatustxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <label class="InternetInf_left_label ">子女是否在身边：</label>
                <span class="detail_inf">{{this.FormData.childTogethertext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 是否支付其生活费： </label>
                <span class="detail_inf" style="border:none;verticalAlign:middle;height:auto;">{{this.FormData.childIspaycosttext }} </span>
              </p>
            </li>
            <li v-show="this.Children.PayAlimony">
              <p>
                <label class="InternetInf_left_label "> 生活费支付额度[元]： </label>
                <span class="detail_inf">{{this.FormData.childPaycostamt }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">父母是否在世：</label>
                <span class="detail_inf">{{this.FormData.parentIslivingtext }} </span>
              </p>
              <p v-show="this.parent.livingOrNot">
                <label class="InternetInf_right_label"> 父母备注： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.parentIslivingtxt==null||this.FormData.parentIslivingtxt==''"
                  :content="this.FormData.parentIslivingtxt" placement="top-start">
                  <span class="detail_inf family">{{this.FormData.parentIslivingtxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="InternetInf_left_label ">父母身体状况：</label>
                <span class="detail_inf">{{this.FormData.parentHealthtext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 父母身体状况备注： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.parentHealthtxt==null||this.FormData.parentHealthtxt==''"
                  :content="this.FormData.parentHealthtxt" placement="top-start">
                  <span class="detail_inf family">{{this.FormData.parentHealthtxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="InternetInf_left_label ">父母是否需要赡养：</label>
                <span class="detail_inf">{{this.FormData.parentPayalimonytext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 父母是否需要赡养备注： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.parentPayalimonytxt==null||this.FormData.parentPayalimonytxt==''"
                  :content="this.FormData.parentPayalimonytxt" placement="top-start">
                  <span class="detail_inf family">{{this.FormData.parentPayalimonytxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="InternetInf_left_label ">父母工作情况：</label>
                <span class="detail_inf">{{this.FormData.parentWorktext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label"> 父母收入[元]： </label>
                <!-- <span class="detail_inf">{{this.FormData.parentIncome }} </span> -->
                <span style="border:none;">{{this.FormData.parentIncome }} </span>

              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="InternetInf_left_label ">父母是否知情：</label>
                <span class="detail_inf">{{this.FormData.parentInformedtext }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">是否有兄弟姐妹：</label>
                <span class="detail_inf">{{this.FormData.brothersIfhastext }} </span>
              </p>
              <p v-show="this.siblings.siblingsOrNot">
                <label class="InternetInf_right_label"> 是否有兄弟姐妹备注： </label>
                <el-tooltip class="item" effect="dark" :disabled="this.FormData.brothersIfhastxt==null||this.FormData.brothersIfhastxt==''"
                  :content="this.FormData.brothersIfhastxt" placement="top-start">
                  <span class="detail_inf">{{this.FormData.brothersIfhastxt }} </span>
                </el-tooltip>
              </p>
            </li>
            <li>
              <p>
                <label class="InternetInf_left_label ">个人/家庭月开销[元]：</label>
                <span class="detail_inf">{{this.FormData.fconsumption }} </span>
              </p>
              <p class="bottom">
                <label class="InternetInf_right_label">可以承受的月还款[元]： </label>
                <span class="detail_inf" style="border:none;verticalAlign:middle;height:auto;">{{this.FormData.fbalance }} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 居住情况 -->
      <el-collapse-item name="6">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">居住情况</span>
        </template>
        <div class="CreditForm_live up_padding">
          <ul>
            <li class="top">
              <p>
                <label class="InternetInf_left_label ">同住者关系：</label>
                <span class="detail_inf">{{this.FormData.livingHouseHoldstext }} </span>
              </p>
              <p>
                <label class="InternetInf_right_label">居住房产所属情况：</label>
                <span class="detail_inf">{{this.FormData.livingEstateBelongstext }} </span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核对现住址 -->
      <el-collapse-item name="7">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">核对现住址</span>
        </template>
        <div class="CreditForm_check_reside up_padding">
          <ul class="CreditForm_check_reside_ul_left">
            <li style="marginTop:20px">
              <label class="InternetInf_left_label ">现住址：</label>
              <span class="detail_inf oneline">{{this.FormData.aaddress}}</span>
            </li>
            <li>
              <label class="InternetInf_left_label ">现住地址是否为常住地址 ：</label>
              <span class="detail_inf">{{this.FormData.aisresidenttext}} </span>
            </li>
          </ul>
          <p v-show="this.address.permanent">
            <label class="InternetInf_left_label ">常住地址 ：</label>
            <el-tooltip class="item" effect="dark" :disabled="this.FormData.aisresidenttxt==''" :content="this.FormData.aisresidenttxt"
              placement="top-start">
              <span class="detail_inf ComAddr">{{this.FormData.aisresidenttxt}} </span>
            </el-tooltip>
          </p>
        </div>
      </el-collapse-item>
      <!-- 电话征信结论 -->
      <el-collapse-item name="8">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">电话征信结论</span>
        </template>
        <div class="PhontConclution up_padding">
          <ul>
            <li class="top">
              <label class="InternetInf_left_label ">住址电话调查结论：</label>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.hometelConclusion==null||this.FormData.hometelConclusion==''"
                :content="this.FormData.hometelConclusion" placement="top-start">
                <span class="detail_inf ComAddr">{{this.FormData.hometelConclusion }} </span>
              </el-tooltip>
            </li>
            <li>
              <label class="InternetInf_left_label">单位电话调查结论：</label>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.companyConclusion==null||this.FormData.companyConclusion==''"
                :content="this.FormData.companyConclusion" placement="top-start">
                <span class="detail_inf ComAddr">{{this.FormData.companyConclusion }} </span>
              </el-tooltip>
            </li>
            <li>
              <label class="InternetInf_left_label">家庭联系人调查结论：</label>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.fContractConclusion==null||this.FormData.fContractConclusion==''"
                :content="this.FormData.fContractConclusion" placement="top-start">
                <span class="detail_inf ComAddr">{{this.FormData.fContractConclusion }} </span>
              </el-tooltip>
            </li>
            <li>
              <label class="InternetInf_left_label">紧急联系人调查结论：</label>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.eContractConclusion==null||this.FormData.eContractConclusion==''"
                :content="this.FormData.eContractConclusion" placement="top-start">
                <span class="detail_inf ComAddr">{{this.FormData.eContractConclusion }} </span>
              </el-tooltip>
            </li>
            <li class="bottom">
              <label class="InternetInf_left_label">工作证明人调查结论：</label>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.jobRefConclusion==null||this.FormData.jobRefConclusion==''"
                :content="this.FormData.jobRefConclusion" placement="top-start">
                <span class="detail_inf ComAddr">{{this.FormData.jobRefConclusion }} </span>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 内部匹配结论 -->
      <el-collapse-item name="9">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">内部匹配结论</span>
        </template>
        <div class="interMath up_padding">
          <ul>
            <li class="top">
              <label class="InternetInf_left_label">匹配调查结论：</label>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.auditDesc==null||this.FormData.auditDesc==''" :content="this.FormData.auditDesc"
                placement="top-start">
                <span class="detail_inf ComAddr">{{this.FormData.auditDesc }} </span>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 审批结论 -->
      <el-collapse-item name="10">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批结论</span>
        </template>
        <div class="CreditForm_result up_padding">
          <ul>
            <li style="width:66.6%;">
              <p class="InternetInf_left_label" style="textAlign:right">初审结果评价：</p>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.oother==null||this.FormData.oother==''" :content="this.FormData.oother"
                placement="top-start">
                <span class="detail_inf ComAddr" style="height:115px">{{this.FormData.oother}} </span>
              </el-tooltip>
            </li>
            <li style="marginTop:20px;width:66.6%;">
              <p class="InternetInf_left_label" style="textAlign:right">终审结果评价：</p>
              <el-tooltip class="item" effect="dark" :disabled="this.FormData.ootherfinal==null||this.FormData.ootherfinal==''" :content="this.FormData.ootherfinal"
                placement="top-start">
                <span class="detail_inf ComAddr" style="height:115px">{{this.FormData.ootherfinal}} </span>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        judgeFlag: '',
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
        getParams: [], //获取taskwaitting里面的 查询入参 applyId
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        Confirm: false,
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
    methods: {
      formatSC() {
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
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '03') {
        this.getParams = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈专员-匹配查看
      } else if (this.judgeFlag.flag == '04') {
        this.getParams = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")); //反欺诈主管-匹配查看
      } else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
        this.getParams = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议主管+专员
      }
      // 获取查询列表数据
      this.post("/creauditInfo/queryCreauditInfoObj", {
        applyId: this.getParams.applyId,
        // applyId: "00542",
      }).then(res => {
        if (res.statusCode == 200) {
          this.FormData = res.data;
          this.formatSC();
          // this.AreaNPercent();
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
  }

</script>

<style scoped>
  .detail_inf {
    display: inline-block;
  }

  .InternetInf_left_label {
    display: inline-block;
    width: 182px;
  }
  /* ------------------------------------------------ */
  /* 最下面的 弹窗样式 */
  /* 上网信息-两行select下拉 居中 */

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .blueC:hover {
    color: rgba(0, 119, 255, 0.75);
    /* color: #0077ff;
    opacity:0.75; */
    cursor: pointer;
  }
  /* 上网查询 */

  .InternetInf_right_label {
    width: 182px;
    /* margin-right: 10px; */
  }
  /* public */

  .CreditForm {
    /* min-width: 1140px; */
    /* min-width: 1420px; */
    /* min-width: 1592px; */
    overflow: auto;
    overflow-x: hidden;
    min-width: 1272px;
  }

  .up_padding {
    /* padding-top: 10px; */
  }

  .top {
    margin-top: 20px;
  }

  .bottom {
    /* margin-bottom: 20px; */
  }

  .CreditForm li {
    color: #475669;
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    clear: both;
  }

  .CreditForm p {
    /* padding-top: 10px; */
    padding-bottom: 20px;
  }

  .CreditForm label {
    display: inline-block;
    text-align: right;
  }
  /*------------------------------------------- */
  /* 各自 */
  /* ------------------------------上网查询 +核实身份--------------------------- */

  .CreditForm_InternetInf p,
  /*  上网查询 */

  .CreditForm_CheckId p,
  /* 核实信息 ul */

  .CreditForm_WorkInfs p,
  /* 工作信息 */

  .CreditForm_CompanyInfs p,
  /* 私营企业 */

  .CreditForm_FamilyInf p,
  /* 家庭信息 */

  .CreditForm_live p {
    float: left;
    width: 33.3%;
    vertical-align: middle;
  }
  /* --------------------------工作信息 + 私营企业--------------------- */

  .CheckId_right_label
  /* 第三列p */

  {
    width: 140px;
  }
  /* .CreditForm_InternetInf p:nth-of-type(odd),
  .CreditForm_CheckId p:nth-of-type(odd),
  .CreditForm_FamilyInf li p:nth-of-type(1) {
    width: 22%;
  } */

  .CreditForm_InternetInf p:nth-of-type(even),
  .CreditForm_CheckId p:nth-of-type(even),
  .CreditForm_FamilyInf p:nth-of-type(even)
  /* 家庭信息 */

  {
    width: 66.6%;
  }

  .CreditForm_InternetInf p:nth-of-type(even) span,
  /* 上网查询 */

  .CreditForm_CheckId p:nth-of-type(even) span,
  /* 核实身份-右侧span width */

  .CreditForm_FamilyInf p:nth-of-type(even) span
  /* 家庭信息 */

  {
    width: calc( 100% - 197px);
    height: 60px;
    vertical-align: top;
    overflow: auto;
    border: 1px solid #d8dce5;
    padding: 5px 10px;
    border-radius: 4px;
  }
  /* 工作信息-单位地址 + 私营企业-企业经营项目-------------label 为 182 px */

  .ComAddr {
    width: calc( 100% - 197px);
    vertical-align: top;
    height: 60px;
    overflow: auto;
    border: 1px solid #d8dce5;
    padding: 5px 10px;
    border-radius: 4px;
  }
  /* 省略号 */

  .elips {
    width: calc( 100% - 197px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  /* 第一经销商 */

  .Suppliers {
    width: calc( 100% - 205px);
  }
  /* 私营企业-第一分销商 --------------------------------label 为 140 px */

  .distributor {
    width: calc( 100% - 155px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  /*-------------------- 核对现住址-------------------------- */

  .CreditForm_check_reside li,
  .CreditForm_check_reside p {
    /* width:66.6.6%; */
    width: 100%;
    clear: both;
    padding: 0;
    margin-bottom: 20px;
  }
  /*  */

  .interMath li,
  .PhontConclution li {
    margin-bottom: 20px;
    width: 66.6%;
  }
  /* 初审结果div */

  .CreditForm_result {
    /* width: calc( 66.6% - 197px); */
    /* width:80%; */
    padding: 20px 0 30px 0;
  }

</style>
