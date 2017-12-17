<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 上网查询信息 -->
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">上网查询信息</span>
        </template>
        <div class="CreditForm_InternetInf">
          <ul class="CreditForm_InternetInf_ul_left">
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
              <span class="detail_inf">{{this.FormData.wbeexEcutedtext}} </span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomtext}} </span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)"> 客户在失信网是否有失信记录：</label>
              <span class="detail_inf">{{this.FormData.wnetEcutedBreatext }} </span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomBreatext }} </span>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人手机是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetPhonetext }} </span>
              </li>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位名称是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomNametext }} </span>
              </li>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位电话是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomPhonetext }} </span>

              </li>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetAddrandEstatetext }} </span>
              </li>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位地址是否有异常：</label>
                <span class="detail_inf">{{this.FormData.wnetHirecomAddresstext }} </span>
              </li>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(3)">当地工商网查询企业基本信息中是否有登记：</label>
                <span class="detail_inf">{{this.FormData.wnetCompanytext }} </span>
              </li>
              <li>
                <label class="InternetInf_left_label" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
                <span class="detail_inf">{{this.FormData.wnetAddrstatetext }} </span>
              </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li v-show="this.InternetShow.commentS">
              <label class="InternetInf_right_label"> 执行信息说明： </label>
              <span class="detail_inf">{{this.FormData.beexEcutedtxt}} </span>
            </li>
            <li v-show="this.InternetShow.commentS1">
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
              <span class="detail_inf">{{this.FormData.wnetHirecomtxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS2">
              <label class="InternetInf_right_label"> 失信记录说明： </label>
              <span class="detail_inf">{{this.FormData.wnetEcutedBreatxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS3">
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomBreatxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS4">
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetPhonetxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS5">
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomNametxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS6">
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomPhonetxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS7">
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetAddrandEstatetxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS8">
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetHirecomAddresstxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS9">
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetCompanytxt }} </span>
            </li>
            <li v-show="this.InternetShow.commentS10">
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
              <span class="detail_inf">{{this.FormData.wnetAddrstatetxt }} </span>
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
        <div class="CreditForm_CheckId">
          <ul class="CreditForm_CheckId_ul_left">
            <li>
              <label class="CheckId_left_label">接听者是否是借款人本人：</label>
              <span class="detail_inf">{{this.FormData.iisselftext }} </span>
            </li>
            <li v-show="this.checkId.declearNloaned">
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <span class="detail_inf">{{this.FormData.iloanBeforetext }} </span>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class="CheckId_left_label">借款金额[元]：</label>
              <span class="detail_inf">{{this.FormData.iloanAmt }} </span>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class="CheckId_left_label">借款用途：</label>
              <span class="detail_inf">{{this.FormData.iloanPurposetext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li v-show="this.checkId.declearNloaned">
              <label class=" CheckId_right_label "> 接听说明： </label>
              <span class="detail_inf">{{this.FormData.iisselftxt }} </span>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class=" CheckId_right_label "> 说明： </label>
              <span class="detail_inf">{{this.FormData.iloanBeforetxt }} </span>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class=" CheckId_right_label "> 借款期限[月]： </label>
              <span class="detail_inf">{{this.FormData.iloanTerm }} </span>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class=" CheckId_right_label "> 借款用途详细说明： </label>
              <span class="detail_inf">{{this.FormData.iloanPurposetxt }} </span>
            </li>

          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息 -->
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">工作信息</span>
        </template>
        <div class="CreditForm_WorkInfs">
          <ul class="CreditForm_WorkInfs_ul_left">
            <li>
              <label class="WorkInfs_left_label left_margin">工作单位：</label>
              <span class="detail_inf">{{this.FormData.hirecomName }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <span class="detail_inf">{{this.FormData.hirecomSigntext }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">所属行业：</label>
              <span class="detail_inf">{{this.FormData.hirecomKind}} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one"> 职位级别：</label>
              <span class="detail_inf">{{this.FormData.workPost }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话：</label>
              <span class="detail_inf">{{this.FormData.workTel }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <span class="detail_inf">{{this.FormData.avgsalaryamt }} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <span class="detail_inf">{{this.FormData.payDay }} </span>
            </li>
            <!-- 三级联动：单位地址：	hirecomAddress  -->
            <li class="company_address_select">
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <span class="detail_inf">{{this.FormData.addressMsg}} </span>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <span class="detail_inf">{{this.FormData.hirelastComname }} </span>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label ">所在部门： </label>
              <span class="detail_inf">{{this.FormData.hiredepartment }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 入职时间： </label>
              <span class="detail_inf">{{this.FormData.entryDate }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label ">工资发放形式： </label>
              <span class="detail_inf">{{this.FormData.hirecomPaymentTypetext }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <span class="detail_inf">{{this.FormData.workZip }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <span class="detail_inf">{{this.FormData.privateOwnerFlagtext}} </span>
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
        <div class="CreditForm_CompanyInfs" v-show="this.workInf.private">
          <ul class="CreditForm_CompanyInfs_ul_left">
            <li ref="compTypeDiv">
              <label class="CompanyInfs_left_label left_margin">
                </span>企业类型：</label>
              <span class="detail_inf">{{this.FormData.selfTypetext }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">注册资金[万元]：</label>
              <span class="detail_inf">{{this.FormData.regcapitalamt }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">占股比例：</label>
              <span class="detail_inf">{{this.FormData.selfhasProportion }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">月还款额/租金[万元]：</label>
              <span class="detail_inf">{{this.FormData.monthrentamt }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">营业面积：</label>
              <span class="detail_inf">{{this.FormData.selfpremisesArea }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin">企业经营项目：</label>
              <span class="detail_inf">{{this.FormData.projectManage }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">近一年利润[万元]：</label>
              <span class="detail_inf">{{this.FormData.oneYearProfitamt }} </span>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">第一供销商：</label>
              <span class="detail_inf">{{this.FormData.firstSuppliers }} </span>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right">
            <li>
              <label class=" CheckId_right_label ">公司注册时间： </label>
              <span class="detail_inf">{{this.FormData.compegDate }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 经营场所：</label>
              <span class="detail_inf">{{this.FormData.selfpremisestext }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <span class="detail_inf">{{this.FormData.selfempCount }} </span>
            </li>
            <li>
              <label class=" CheckId_right_label "> 每月净利润额[万元]：</label>
              <span class="detail_inf">{{this.FormData.profitamountmamt }} </span>
            </li>
            <li>
              <label class="CheckId_right_label "> 第一分销商： </label>
              <span class="detail_inf">{{this.FormData.firstDistributor }} </span>
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
        <div class="CreditForm_FamilyInf">
          <ul>
            <li>
              <p>
                <label class="Family_label">婚姻状况：</label>
                <span class="detail_inf">{{this.FormData.fmarrflagtext }} </span>
              </p>
            </li>
            <li v-show=" this.marriage.couple">
              <p>
                <label class="Family_label">配偶工作情况：</label>
                <span class="detail_inf">{{this.FormData.spouseWorktext }} </span>
              </p>
            </li>
            <li v-show=" this.marriage.workingCondition">
              <p>
                <label class="Family_label">配偶工作类型：</label>
                <span class="detail_inf">{{this.FormData.spouseWorktypetext }} </span>
              </p>

              <p>
                <label class="Family_label"> 配偶收入情况[月/元]： </label>
                <span class="detail_inf">{{this.FormData.spouseIncome }} </span>
              </p>
            </li>
            <li v-show=" this.marriage.couple">
              <p>
                <label class="Family_label">是否在同一个城市工作生活：</label>
                <span class="detail_inf">{{this.FormData.spouseSamecitytext }} </span>
              </p>
              <p v-show="this.marriage.workingLivingInf">
                <label class="Family_label"> 在同一个城市工作生活信息： </label>
                <span class="detail_inf">{{this.FormData.spouseSamecitytxt }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="Family_label">是否有子女：</label>
                <span class="detail_inf">{{this.FormData.childFlagtext }} </span>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <label class="Family_label">子女数量：</label>
                <span class="detail_inf">{{this.FormData.childCount }} </span>
              </p>
              <p>
                <label class="Family_label"> 子女数量备注： </label>
                <span class="detail_inf">{{this.FormData.childCounttxt }} </span>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <label class="Family_label">子女现状：</label>
                <span class="detail_inf">{{this.FormData.childStatustext }} </span>
              </p>
              <p>
                <label class="Family_label"> 子女现状备注： </label>
                <span class="detail_inf">{{this.FormData.childStatustxt }} </span>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <label class="Family_label">子女是否在身边：</label>
                <span class="detail_inf">{{this.FormData.childTogethertext }} </span>
              </p>
              <p>
                <label class="Family_label"> 是否支付其生活费： </label>
                <span class="detail_inf">{{this.FormData.childIspaycosttext }} </span>
              </p>
            </li>
            <li v-show="this.Children.PayAlimony">
              <p>
                <label class="Family_label"> 生活费支付额度[元]： </label>
                <span class="detail_inf">{{this.FormData.childPaycostamt }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="Family_label">父母是否在世：</label>
                <span class="detail_inf">{{this.FormData.parentIslivingtext }} </span>
              </p>
              <p v-show="this.parent.livingOrNot">
                <label class="Family_label"> 父母备注： </label>
                <span class="detail_inf">{{this.FormData.parentIslivingtxt }} </span>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="Family_label">父母身体状况：</label>
                <span class="detail_inf">{{this.FormData.parentHealthtext }} </span>
              </p>
              <p>
                <label class="Family_label"> 父母身体状况备注： </label>
                <span class="detail_inf">{{this.FormData.parentHealthtxt }} </span>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="Family_label">父母是否需要赡养：</label>
                <span class="detail_inf">{{this.FormData.parentPayalimonytext }} </span>
              </p>
              <p>
                <label class="Family_label"> 父母是否需要赡养备注： </label>
                <span class="detail_inf">{{this.FormData.parentPayalimonytxt }} </span>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="Family_label">父母工作情况：</label>
                <span class="detail_inf">{{this.FormData.parentWorktext }} </span>
              </p>
              <p>
                <label class="Family_label"> 父母收入[元]： </label>
                <span class="detail_inf">{{this.FormData.parentIncome }} </span>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <label class="Family_label">父母是否知情：</label>
                <span class="detail_inf">{{this.FormData.parentInformedtext }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="Family_label">是否有兄弟姐妹：</label>
                <span class="detail_inf">{{this.FormData.brothersIfhastext }} </span>
              </p>
              <p v-show="this.siblings.siblingsOrNot">
                <label class="Family_label"> 是否有兄弟姐妹备注： </label>
                <span class="detail_inf">{{this.FormData.brothersIfhastxt }} </span>
              </p>
            </li>
            <li>
              <p>
                <label class="Family_label">个人/家庭月开销[元]：</label>
                <span class="detail_inf">{{this.FormData.fconsumption }} </span>
              </p>
              <p>
                <label class="Family_label">可以承受的月还款[元]： </label>
                <span class="detail_inf">{{this.FormData.fbalance }} </span>
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
        <div class="CreditForm_live">
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_left_label">同住者关系：</label>
              <span class="detail_inf">{{this.FormData.livingHouseHoldstext }} </span>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <span class="detail_inf">{{this.FormData.livingEstateBelongstext }} </span>
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
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li>
              <label class="check_reside__left_label">现住址：</label>
              <span class="detail_inf oneline"> </span> {{this.FormData.aaddress}} </span>
            </li>
            <li>
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <span class="detail_inf">{{this.FormData.aisresidenttext}} </span>
            </li>

          </ul>
          <p v-show="this.address.permanent" style="clear:both;width:100%">
            <label class="prement_address">常住地址 ：</label>
            <span class="detail_inf">{{this.FormData.aisresidenttxt}} </span>
          </p>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item name="8">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">初审结论</span>
        </template>
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">初审结果评价：</p>
          <span class="detail_inf">{{this.FormData.oother}} </span>
        </div>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        FormData: [],
        getParams: [],
        Confirm: false,
        reg: {
          payDay: false,
          mMontyP: false,
          mpostCode: false,
          mphoneM: false,
          mphoneR: false,
        },
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
        },
        marriage: {
          couple: true,
          workingCondition: false,
          workingLivingInf: false,
        },
        Children: {
          ChildrenOrNot: false,
          PayAlimony: false,
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
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
      }
    },
    methods: {
      handleChange(tab, event) {
        console.log(tab, event);
      },
      NewPage(ind) { // tab1-------------------右键菜单栏 li[0] 点击事件
        console.log(ind);

      },
       AreaNPercentC() {
      
      },
      mountJ(code, val) {
      
      },
    },
    mounted() {
      this.getParams = JSON.parse(localStorage.getItem("taskInWaitting"));
      // 获取查询列表数据
      this.post("/creauditInfo/queryCreauditInfoObj", {
        // applyId: this.getParams.applyId,
        applyId: "00542",

      }).then(res => {
        console.log(res.data);
        this.FormData = res.data;
      
      });
    },

  }

</script>

<style scoped>
  /* 公共 */

  .CreditForm {
    min-width: 1443px;
        overflow: auto;
  }

  .CreditForm li {
    color: #475669;
    font-size: 14px;
    height: 55px;
    /* position: relative; */
    /* background: yellowgreen;; */
  }
  /* .InternetPosition {} */

  .help {
    color: red;
    margin-left: 10px;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .headFont {
    font-size: 16px;
  }

  .red {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }

  .prement_address {
    width: 15.3%;
    display: inline-block;
    text-align: right;
  }

  .Family_label {
    display: inline-block;
    width: 30%;
    text-align: right;
    /* border:1px solid red; */
  }
  /* .one_input {
    width: 70%;
  } */
  /* 工作信息部分-公共 */

  .left_margin {
    /* 一行一条 */
    width: 25%;
  }

  .left_margin_half_one {
    /* 一行两条 */
    width: 50%;
  }

  .left_margin_half_two {
    width: 50%;
  }
  /* 各自部分 */

  /* 全部统一样式 */

  .CreditForm_InternetInf_ul_left,
  .CreditForm_InternetInf_ul_right,
  .CreditForm_CheckId_ul_left,
  .CreditForm_CheckId_ul_right,
  /* .CreditForm_FamilyInf_ul_left, */

  .CreditForm_FamilyInf_ul_right,
  .CreditForm_live_ul_left,
  .CreditForm_check_reside_ul_left,
  .CreditForm_live_ul_right {
    /* border: 1px solid green; */
    float: left;
    width: 33%;
  }
  /* 上网查询信息 */

  .CreditForm_InternetInf_ul_left li,
  .CreditForm_InternetInf_ul_right li {
    height: 60px;
  }


  .InternetInf_left_label,
  .InternetInf_right_label,
  .CheckId_left_label,
  .CheckId_right_label,
  /* .FamilyInf_left_label, */

  .FamilyInf_right_label,
  .live_left_label,
  .live_right_label,
  .check_reside__left_label,
  .CreditForm_result_p_label {
    display: inline-block;
    width: 50%;
    padding: 10px 15px 10px 7px;
    word-break: normal;
    /* border: 1px solid yellow; */
    text-align: right;
  }
  /* 上网查询信息- 左侧ul*/
  /*  √ */

  .CreditForm_InternetInf_ul_left {
    padding-top: 6px;
    width: 50%;
  }
  /* 上网查询-右ul 里面的li position定位 */

  .CreditForm_InternetInf_ul_right {
    height: 630px;
    position: relative;
  }

  .CreditForm_InternetInf_ul_right li {
    position: absolute;
    width: 360px;
    left: 0;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(1) {
    top: 0px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(2) {
    top: 60px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(3) {
    top: 120px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(4) {
    top: 180px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(5) {
    top: 240px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(6) {
    top: 300px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(7) {
    top: 360px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(8) {
    top: 420px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(9) {
    top: 480px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(10) {
    top: 540px;
  }

  .CreditForm_InternetInf_ul_right li:nth-of-type(11) {
    top: 600px;
  }
  /* 单独设置-家庭信息-右侧li上面的margin空行 */

  .CreditForm_FamilyInf_ul_right {
    /* margin-top: 135px; */
    margin-top: 160px;
  }

  .InternetInf_left_label:hover {
    color: red;
  }
  /* 初审结论-上边距 */

  .CreditForm_result {
    margin-top: 50px;
  }
  /*  初审结论-单独设置 p 宽度 */

  .CreditForm_result_p_label {
    width: 16.5%;
    height: 100px;
  }
  /* 工作信息，私营企业 部分（三行） */

  .CreditForm_WorkInfs_ul_left,
  .CreditForm_CompanyInfs_ul_left {
    /* border: 1px solid green; */
    width: 66%;
    float: left;
  }

  .CreditForm_WorkInfs_ul_left li,
  .CreditForm_CompanyInfs_ul_left li {
    float: left;
  }

  .CreditForm_WorkInfs_ul_left li:nth-of-type(1),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(8),
  .CreditForm_WorkInfs_ul_left li:last-child,
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(1),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(6) {
    width: 100%;
  }

  .CreditForm_WorkInfs_ul_left li:nth-of-type(2),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(3),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(4),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(5),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(6),
  .CreditForm_WorkInfs_ul_left li:nth-of-type(7),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(2),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(3),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(4),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(5),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(7),
  .CreditForm_CompanyInfs_ul_left li:nth-of-type(8) {
    width: 50%;
  }

  .CreditForm_WorkInfs_ul_right,
  .CreditForm_CompanyInfs_ul_right {
    /* border: 1px solid green; */
    width: 33%;
    float: left;
  }
  /* .CreditForm_WorkInfs_ul_right li,
  .CreditForm_CompanyInfs_ul_right li,
  .CreditForm_FamilyInf_ul_left li{
height: 55px;;
  } */

  .CreditForm_WorkInfs .CreditForm_WorkInfs_ul_left li,
  .CreditForm_CompanyInfs_ul_left,
  .CreditForm_CompanyInfs_ul_left li,
  {
    float: left;
    /* border: 1px solid green; */
    /* height: 55px; */
  }
  /* 家庭信息----我一行一个li后样式 */

  .CreditForm_FamilyInf li {
    /* border: 1px solid yellowgreen; */
    /* margin-top: 30px; */
    height: 55px;
    line-height: 55px;
  }

  .CreditForm_FamilyInf li p {
    float: left;
    width: 50%;
  }
  /* 工作信息-左侧-两行-第二行 */

  .WorkInfs_left_label,
  .CompanyInfs_left_label {
    display: inline-block;
    padding: 10px 15px 10px 7px;
    /* border: 1px solid red; */
    text-align: right;
  }
  /* 家庭信息-右侧label宽度单独设置 */

  .family_left_margin_half_two {
    width: 50%;
    /* border: 1px solid red;     */
  }
  /* 确认按钮 */

  .btn {
    margin-left: 1200px;
    margin-top: 100px;
  }
  /* 信息展示样式 */

  .detail_inf {
    display: inline-block;
    width: 48%;
    overflow: hidden;
    /* background: red; */
    vertical-align: middle;
  }

</style>
