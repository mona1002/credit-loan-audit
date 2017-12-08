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
              <el-select v-model="checkData.wbeexEcuted" placeholder="请选择" @change="commentShow1(checkData.wbeexEcuted,Internet[0])">
                <el-option v-for="item in beexEcuted" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
              <el-select v-model="checkData.wnetHirecom" placeholder="请选择" @change="commentShow1(checkData.wnetHirecom,Internet[1])">
                <el-option v-for="item in netHirecom" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">
                <span class="red"> * </span>客户在失信网是否有失信记录：</label>
              <el-select v-model="checkData.wnetEcutedBrea" placeholder="请选择" @change="commentShow1(checkData.wnetEcutedBrea,Internet[2])"
                name="blank" v-validate="'required'">
                <el-option v-for="item in netEcutedBrea" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 提示语 -->
              <span v-show="checkData.wnetEcutedBrea==null&&errors.has('blank')" class="help is-danger">{{ errors.first('blank') }}</span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
              <el-select v-model="checkData.wnetHirecomBrea" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomBrea,Internet[3])">
                <el-option v-for="item in netHirecomBrea" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">
                <span class="red"> * </span>网上搜索借款人手机是否有异常：</label>
              <el-select v-model="checkData.wnetPhone" placeholder="请选择" @change="commentShow1(checkData.wnetPhone,Internet[4])" name="blank"
                v-validate="'required'">
                <el-option v-for="item in netPhone" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 提示语 -->
              <span v-show="checkData.wnetPhone==null&&errors.has('blank')" class="help is-danger">{{ errors.first('blank') }}</span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位名称是否有异常：</label>
              <el-select v-model="checkData.wnetHirecomName" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomName,Internet[5])">
                <el-option v-for="item in netHirecomName" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位电话是否有异常：</label>
              <el-select v-model="checkData.wnetHirecomPhone" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomPhone,Internet[6])"
                name="blank" v-validate="'required'">
                <el-option v-for="item in netHirecomPhone" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 提示语 -->
              <span v-show="errors.first('blank')" class="help is-danger">{{ errors.first('blank') }}</span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
              <el-select v-model="checkData.wnetAddrandEstate" placeholder="请选择" @change="commentShow1(checkData.wnetAddrandEstate,Internet[7])"
                name="blank" v-validate="'required'">
                <el-option v-for="item in netAddrandEstate" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 提示语 -->
              <span v-show="errors.first('blank')" class="help is-danger">{{ errors.first('blank') }}</span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位地址是否有异常：</label>
              <el-select v-model="checkData.wnetHirecomAddress" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomAddress,Internet[8])">
                <el-option v-for="item in netHirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(3)">
                <span class="red"> * </span>当地工商网查询企业基本信息中是否有登记：</label>
              <el-select v-model="checkData.wnetCompany" placeholder="请选择" @change="commentShow1(checkData.wnetCompany,Internet[9])" name="blank"
                v-validate="'required'">
                <el-option v-for="item in netCompany" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <span v-show="checkData.wnetCompany==null&&errors.has('blank')" class="help is-danger">{{ errors.first('blank') }}</span>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
              <el-select v-model="checkData.wnetAddrstate" placeholder="请选择" @change="commentShow1(checkData.wnetAddrstate,Internet[10])">
                <el-option v-for="item in netAddrstate" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li v-show="this.InternetShow.commentS">
              <label class="InternetInf_right_label"> 执行信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wbeexEcutedtxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS1">
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomtxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS2">
              <label class="InternetInf_right_label"> 失信记录说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetEcutedBreatxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS3">
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomBreatxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS4">
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetPhonetxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS5">
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomNametxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS6">
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomPhonetxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS7">
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetAddrandEstatetxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS8">
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomAddresstxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS9">
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetCompanytxt">
              </el-input>
            </li>
            <li v-show="this.InternetShow.commentS10">
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wnetAddrstatetxt">
              </el-input>
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
              <el-select v-model="checkData.iisself" placeholder="请选择" @change="commentShow1(checkData.iisself,Internet[11])">
                <el-option v-for="item in isself" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li v-show="this.checkId.declearNloaned">
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <el-select v-model="checkData.iloanBefore" placeholder="请选择" @change="commentShow1(checkData.iloanBefore,Internet[12])">
                <el-option v-for="item in loanBefore" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class="CheckId_left_label">借款金额[元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanAmt">
              </el-input>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class="CheckId_left_label">借款用途：</label>
              <el-select v-model="checkData.iloanPurpose" placeholder="请选择">
                <el-option v-for="item in loanPurpose" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li v-show="this.checkId.declearNloaned">
              <label class=" CheckId_right_label "> 接听说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.iisselftxt">
              </el-input>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class=" CheckId_right_label "> 说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.iloanBeforetxt">
              </el-input>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class=" CheckId_right_label "> 借款期限[月]： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanTerm">
              </el-input>
            </li>
            <li v-show="this.checkId.loanNot">
              <label class=" CheckId_right_label "> 借款用途详细说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.iloanPurposetxt">
              </el-input>
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
              <el-input style="width:70%;" type="text" placeholder="请输入内容" v-model="checkData.hirecomName">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <el-select v-model="checkData.hirecomSign" placeholder="请选择">
                <el-option v-for="item in hirecomSign" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <!--    给接口   待修改    -->
              <label class="WorkInfs_left_label left_margin_half_two">所属行业：</label>
              <el-select v-model="checkData.hirecomKind" placeholder="请选择">
                <el-option v-for="item in	hirecomKind" :key="item.value" :label="item.text" :value="item.code">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one"> 职位级别：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.workPost">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.workTel">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.avgsalaryamt">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.payDay">
              </el-input>
            </li>
            <!-- 三级联动：单位地址：	hirecomAddress  -->
            <li class="company_address_select">
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <!-- 一级 -->
              <el-select v-model="checkData.workProvince" placeholder="请选择" @change="getCity(checkData.workProvince)">
                <el-option v-for="item in	hirecomAddress" :key="item.id" :label="item.areaName" :value="item.id">
                </el-option>
              </el-select>
              <!-- 二级 -->
              <el-select v-model="checkData.workCity" placeholder="请选择" @change="getTown(checkData.workCity)">
                <el-option v-for="item in hireProvincd" :key="item.id" :label="item.areaName" :value="item.id">
                </el-option>
              </el-select>
              <!-- 三级 -->
              <el-select v-model="checkData.workCounty" placeholder="请选择">
                <el-option v-for="item in hireTown" :key="item.id" :label="item.areaName" :value="item.id">
                </el-option>
              </el-select>
              <!-- 具体地址input  text框 -->
              <!-- 单位地址================================================================================未写=============找不到字段 -->
              <el-input style="width:273px;" type="text" placeholder="请输入内容" v-model="checkData.workAddress">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <el-input style="width:70%;" type="text" placeholder="请输入内容" v-model="checkData.hirelastComname">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label ">所在部门： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.hiredepartment">
              </el-input>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 入职时间： </label>
              <el-date-picker v-model="checkData.entryDate" type="date" placeholder="选择日期">
              </el-date-picker>
            </li>
            <li>
              <label class=" CheckId_right_label ">工资发放形式： </label>
              <el-select v-model="checkData.payForm" placeholder="请选择">
                <el-option v-for="item in payForm" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.workZip">
              </el-input>
            </li>
            <li>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <el-select v-model="checkData.privateOwnerFlag" placeholder="请选择" @change="commentShow1(checkData.privateOwnerFlag,Internet[13])">
                <el-option v-for="item in privateOwnerFlag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- <el-input type="text" placeholder="请输入内容" v-model="checkData.hirecomType">
              </el-input> -->
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
            <li>
              <label class="CompanyInfs_left_label left_margin">企业类型：</label>
              <el-select v-model="checkData.compType" placeholder="请选择">
                <el-option v-for="item in compType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">注册资金[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.regcapitalamt">
              </el-input>
              <!-- <el-select v-model="checkData.selfregcapital" placeholder="请选择">
                <el-option v-for="item in selfregcapital" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">占股比例：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfhasProportion">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">月还款额/租金[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.monthrentamt">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">营业面积：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfpremisesArea">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin">企业经营项目：</label>
              <el-input style="width:70%" type="text" placeholder="请输入内容" v-model="checkData.projectManage">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">近一年利润[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.oneYearProfitamt">
              </el-input>
            </li>


            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">第一供销商：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.firstSuppliers">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 公司注册时间： </label>
              <el-date-picker v-model="checkData.compegDate" type="date" placeholder="选择日期">
              </el-date-picker>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 经营场所：</label>
              <el-select v-model="checkData.selfpremises" placeholder="请选择">
                <el-option v-for="item in selfpremises" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfempCount">
              </el-input>
            </li>
            <li>
              <label class=" CheckId_right_label "> 每月净利润[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.profitamountmamt">
              </el-input>
            </li>
            <li>
              <label class="CheckId_right_label "> 第一分销商： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.firstDistributor">
              </el-input>
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
          <ul class="CreditForm_FamilyInf_ul_left">
            <li>
              <label class="FamilyInf_left_label">婚姻状况：</label>
              <el-select v-model="checkData.fmarrflag" placeholder="请选择" @change="commentShow1(checkData.fmarrflag,Internet[14])">
                <el-option v-for="item in fmarrflag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li v-show=" this.marriage.couple">
              <label class="FamilyInf_left_label">配偶工作情况：</label>
              <el-select v-model="checkData.spouseWork" placeholder="请选择" @change="commentShow1(checkData.spouseWork,Internet[15])">
                <el-option v-for="item in spouseWork" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li v-show=" this.marriage.workingCondition">
              <label class="FamilyInf_left_label">配偶工作类型：</label>
              <el-select v-model="checkData.spouseWorktype" placeholder="请选择">
                <el-option v-for="item in spouseWorktype" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li v-show=" this.marriage.couple">
              <label class="FamilyInf_left_label">是否在同一个城市工作生活：</label>
              <el-select v-model="checkData.spouseSamecity" placeholder="请选择" @change="commentShow1(checkData.spouseSamecity,Internet[16])">
                <el-option v-for="item in spouseSamecity" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>


            <li>
              <label class="FamilyInf_left_label">是否有子女：</label>
              <el-select v-model="checkData.childFlag" placeholder="请选择">
                <el-option v-for="item in childFlag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">父母是否在世：</label>
              <el-select v-model="checkData.parentIsliving" placeholder="请选择">
                <el-option v-for="item in parentIsliving" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有兄弟姐妹：</label>
              <el-select v-model="checkData.brothersIfhas" placeholder="请选择">
                <el-option v-for="item in brothersIfhas" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">个人/家庭月开销[元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.fconsumption">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_FamilyInf_ul_right">
            <li v-show="this.marriage.workingCondition">
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 配偶收入情况[月/元]： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.spouseIncome">
              </el-input>
            </li>
            <li v-show="this.marriage.workingLivingInf">
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 在同一个城市工作生活信息： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.spouseSamecitytxt">
              </el-input>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 是否有兄弟姐妹备注： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.brothersIfhastxt">
              </el-input>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two">
                <span class="red"> * </span> 可以承受的月还款[元]： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.fbalance">
              </el-input>
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
              <el-select v-model="checkData.livingHouseHolds" placeholder="请选择">
                <el-option v-for="item in livingHouseHolds" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <el-select v-model="checkData.livingEstateBelongs" placeholder="请选择">
                <el-option v-for="item in livingEstateBelongs" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
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
              <!-- <span> 北京市北京市延庆县宫本武藏 </span> -->
              <span class="detail_inf oneline"> </span> {{this.checkData.aaddress}} </span>
            </li>
            <li>
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <el-select v-model="checkData.aisresident" placeholder="请选择">
                <el-option v-for="item in aisresident" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item name="8">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">初审结论</span>
        </template>
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">
            <span class="red"> * </span>初审结果评价：</p>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="checkData.oother">
          </el-input>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-button type="primary" class="btn" @click="CFsave">确认</el-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
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
        Internet: ["客户执行", "单位执行", "客户失信", "单位失信", "客户手机", "单位名称", "单位电话", "客户住址房产", "单位地址", "企业登记", "单位组织代码",
          "接听是否本人", "是否申请借款", "是否私营业主", "婚姻状况", "配偶工作情况", "同城工作生活", " ", " ", " ", " ", " "
        ],
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        checkData: [], // 查询接口回来的数据
        // -------上网查询信息------------
        beexEcuted: [{ //（上网查询信息）客户在人法网是否有被执行信
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecom: [{ //（上网查询信息）单位在人法网是否有被执行信
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netEcutedBrea: [{ //（上网查询信息）客户在失信网是否有失信记录
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomBrea: [{ //（上网查询信息）单位在失信网是否有失信记录  4
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netPhone: [{ //（上网查询信息）网上搜索借款人的手机是否有异常信息 5
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomName: [{ //（上网查询信息）网搜单位名称是否有异常  6
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomPhone: [{ //（上网查询信息）网搜单位电话是否有异常  7
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netAddrandEstate: [{ //（上网查询信息）网上搜索借款人现居住地址和房产地址是否有异常  8
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomAddress: [{ //（上网查询信息）网搜单位地址是否有异常   9
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netCompany: [{ //（上网查询信息）当地工商网查询企业基本信息中是否有登记
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netAddrstate: [{ //（上网查询信息）客户工作单位在全国组织代码查询中是否存在  11
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        // ---------------- 核实身份  ------------
        isself: [{ //  接听者是否是借款人本人：
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        loanBefore: [{ // 是否在我司申请借款：
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        loanPurpose: [{ //借款用途：
          value: '01',
          label: '日常生活消费'
        }, { //借款用途：
          value: '02',
          label: '教育支出'
        }, { //借款用途：
          value: '03',
          label: '医疗支出'
        }, { //借款用途：
          value: '04',
          label: '提高生活质量'
        }, { //借款用途：
          value: '05',
          label: '其他消费'
        }, { //借款用途：
          value: '06',
          label: '货物采买'
        }, { //借款用途：
          value: '07',
          label: '商铺运营'
        }, { //借款用途：
          value: '08',
          label: '家庭消费'
        }, { //借款用途：
          value: '09',
          label: '个人消费'
        }],
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
        // hirecomKind: [{ // 所属行业：
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
        hirecomAddress: [], //省份
        hireProvincd: [], //市区
        hireTown: [], //县区
        // hirecomAddress: [{ // 单位地址------------三级联动---待续 
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],
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
        privateOwnerFlag: [{
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }, ],
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
          label: '股份有限公司否'
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
        spouseWorktype: [{// 配偶工作类型
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
        spouseSamecity: [{ //是否在同一个城市工作生活
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        childFlag: [{ // 是否有子女
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        parentIsliving: [{ // 父母是否在世
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        brothersIfhas: [{ // 是否有兄弟姐妹
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        // ------------------------------居住情况------------------------
        livingHouseHolds: [{ // 同住者关系
          value: '00',
          label: '普通'
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
        aisresident: [{ // 现住地址是否为常住地址
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],

        // // select 字段
        // // 上网查询
        // beexEcutedVal: "", // select-客户在法网是否有被执行信息
        // netHirecomVal: '', // select-单位在法网是否有被执行信息：
        // netEcutedBreaVal: '', // select-客户在失信网是否有失信记录：
        // netHirecomBreaVal: '', // select-单位在失信网是否有失信记录
        // netPhoneVal: '', // select-网上搜索借款人手机是否有异常：
        // netHirecomNameVal: '', // select-网搜单位名称是否有异常
        // netHirecomPhoneVal: '', // select-网搜单位电话是否有异常：
        // netAddrandEstateVal: '', // select-网上搜索借款人现居住地址和房产地址是否有异常：
        // netHirecomAddressVal: '', // select-网搜单位地址是否有异常：
        // netCompanyVal: '', // select-当地工商网查询企业基本信息中是否有登记：
        // netAddrstateVal: '', // select-客户工作单位在全国组织代码查询中是否存在：
        // // 核实身份
        // isselfVal: '', // 接听者是否是借款人本人：
        // loanBeforeVal: '', //是否在我司申请借款：
        // // 工作信息
        // hirecomSignVal: '', //单位性质
        // hirecomKindVal: '', //所属行业：
        // hirecomAddressVal: '', //单位地址------------三级联动---待续
        // payFormVal: '', // 工资发放形式：
        // privateOwnerFlagVal:'',//是否为私营业主
        // //  私营企业信息
        // compTypeVal: '', //企业类型
        // selfpremisesVal: '', // 经营场所
        // // 家庭信息
        // fmarrflagVal: '', //婚姻状况
        // childFlagVal: '', //是否有子女
        // parentIslivingVal: '', //父母是否在世
        // brothersIfhasVal: '', //是否有兄弟姐妹
        // // 居住情况
        // livingHouseHoldsVal: '', //同住者关系
        // livingEstateBelongsVal: '', //居住房产所属情况
        // // 核对现住址
        // address:'',//现住址-----span 直接显示
        // aisresidentVal: '', //现住地址是否为常住地址
        // jhjk: '', //


        // // textarea 文本输入域 字段
        // beexEcutedtxt: '', // 执行信息说明
        // netHirecomtxt: "", //单位执行信息说明
        // netEcutedBreatxt: "", //失信记录说明
        // netHirecomBreatxt: "", //单位失信记录说明        
        // netPhonetxt: "", //手机异常信息说明        
        // netHirecomNametxt: "", //单位名称异常信息说明
        // netHirecomPhonetxt: "", //单位电话异常信息说明
        // netAddrandEstatetxt: "", //地址异常信息说明
        // netHirecomAddresstxt: "", //单位地址异常信息说明
        // netCompanytxt: "", //工商登记信息说明
        // netAddrstatetxt: "", //组织机构代码信息说明
        // //核实身份
        // isselftxt: '', //接听说明
        // // 初审结论
        // 	oother: '', //初审结果评价

        // // input 字段
        // // 工作信息
        // hirecomName: '', // 工作单位
        // workPost: '', //职位级别
        // workTel: '', //单位电话
        // avgsalaryamt: '', //月均工资[元]
        // payDay: '', //每月发薪日
        // hirelastComname: '', //前单位名称：
        // hiredepartment: '', // 所在部门
        // entryDate: '', // 入职时间-日期选择器
        // workZip: '', // 单位地址邮编
        // // hirecomType: '', // 是否为私营业主
        // workAddress: '', //单位地址(input) -----------------------------------------------------------------------------待确认
        // // 私营企业信息
        // selfregcapital: '', //注册资金[万元]
        // selfhasProportion: '', //占股比例
        // monthrentamt: '', // 月还款额/租金[万元]
        // selfempCount: '', //员工人数
        // profitamountmamt: '', //每月净利润[万元
        // selfpremisesArea: '', //营业面积
        // projectManage: '', //企业经营项目
        // oneYearProfitamt: '', //近一年利润[万元]
        // firstSuppliers: '', //第一供销商
        // compegDate: '', //公司注册时间
        // selfpremisestxt: '', //经营场所
        // selfempCount: '', //员工人数
        // profitamountmamt: '', //每月净利润[万元]：-----------------------------------------------------------------------------待确认
        // firstDistributor: '', //第一分销商
        // // 家庭信息
        // fconsumption: '', // 个人/家庭月开销[元]
        // brothersIfhastxt: '', //是否有兄弟姐妹备注
        // fbalance: '', //可以承受的月还款[元]


        // form: {
        //   desc: '', //上网查询信息 右侧textarea框绑定值
        // },
        // options: [{ // 现住地址是否为常住地址
        //   value: '1',
        //   label: '是'
        // }, {
        //   value: '0',
        //   label: '否'
        // }],

      }
    },
    methods: {
      handleChange(tab, event) {
        console.log(tab, event);
      },
      commentShow1(name, hidLabel) {
        // @change="commentShow1(checkData.fmarrflag,Internet[14])" 
        // console.log("commentShow")
        console.log(name)
        console.log(hidLabel)
        //  " 接听是否本人","是否私营业主"
        if (name == "0") { // 否
          switch (hidLabel) {
            case "客户执行":
              this.InternetShow.commentS = false;
              this.checkData.wbeexEcutedtxt = "";
              break;
            case "单位执行":
              this.InternetShow.commentS1 = false;
              this.checkData.wnetHirecomtxt = "";
              break;
            case "客户失信":
              this.InternetShow.commentS2 = false;
              this.checkData.wnetEcutedBreatxt = "";
              break;
            case "单位失信":
              this.InternetShow.commentS3 = false;
              this.checkData.wnetHirecomBreatxt = "";
              break;
            case "客户手机":
              this.InternetShow.commentS4 = false;
              this.checkData.wnetPhonetxt = "";
              break;
            case "单位名称":
              this.InternetShow.commentS5 = false;
              this.checkData.wnetHirecomNametxt = "";
              break;
            case "单位电话":
              this.InternetShow.commentS6 = false;
              this.checkData.wnetHirecomPhonetxt = "";
              break;
            case "客户住址房产":
              this.InternetShow.commentS7 = false;
              this.checkData.wnetAddrandEstatetxt = "";
              break;
            case "单位地址":
              this.InternetShow.commentS8 = false;
              this.checkData.wnetHirecomAddresstxt = "";
              break;
            case "企业登记":
              this.InternetShow.commentS9 = false;
              this.checkData.wnetCompanytxt = "";
              break;
            case "单位组织代码":
              this.InternetShow.commentS10 = false;
              this.checkData.wnetAddrstatetxt = "";
              break;
            case "接听是否本人":
              this.checkId.declearNloaned = false;
              this.checkId.loanNot = false;
              this.checkData.iloanBefore = "";
              this.checkData.iisselftxt = "";
              this.checkData.iloanBeforetxt = ""; //说明-input
              this.checkData.iloanTerm = ""; //借款期限[月]：	
              this.checkData.iloanPurposetxt = ""; //借款用途详细说明：
              this.checkData.iloanPurpose = ""; //借款用途
              this.checkData.iloanAmt = ""; //借款金额[元]
              break;
            case "是否申请借款":
              this.checkId.loanNot = false;
              this.checkData.iloanBeforetxt = ""; //说明-input
              this.checkData.iloanTerm = ""; //借款期限[月]：	
              this.checkData.iloanPurposetxt = ""; //借款用途详细说明：
              this.checkData.iloanPurpose = ""; //借款用途
              this.checkData.iloanAmt = ""; //借款金额[元]
              break;
              //  iisselftxt iloanBeforetxt iloanTerm iloanPurpose
            case "是否私营业主":
              this.workInf.private = false;
              this.checkData.compType = "";
              this.checkData.regcapitalamt = "";
              this.checkData.selfhasProportion = "";
              this.checkData.monthrentamt = "";
              this.checkData.selfpremisesArea = "";
              this.checkData.projectManage = "";
              this.checkData.oneYearProfitamt = "";
              this.checkData.firstSuppliers = "";
              this.checkData.compegDate = ""; //公司注册时间
              this.checkData.selfpremises = "";
              this.checkData.selfempCount = "";
              this.checkData.profitamountmamt = "";
              this.checkData.firstDistributor = ""; //第一分销商
              break;
              //     case "配偶工作情况":
              //  this.marriage.workingCondition = false;
              // this.checkData.spouseWorktype = "";
              // this.checkData.spouseIncome = "";
              //   break;
            case "同城工作生活":
              this.marriage.workingLivingInf = false;
              this.checkData.spouseSamecitytxt = ""; //工作生活信息详情
              break;
              // 
          }
        } else if (name == "1") { //是   
          console.log("我是是1")
          switch (hidLabel) {
            case "客户执行":
              this.InternetShow.commentS = true;
              break;
            case "单位执行":
              this.InternetShow.commentS1 = true;
              break;
            case "客户失信":
              this.InternetShow.commentS2 = true;
              break;
            case "单位失信":
              this.InternetShow.commentS3 = true;
              break;
            case "客户手机":
              this.InternetShow.commentS4 = true;
              break;
            case "单位名称":
              this.InternetShow.commentS5 = true;
              break;
            case "单位电话":
              this.InternetShow.commentS6 = true;
              break;
            case "客户住址房产":
              this.InternetShow.commentS7 = true;
              break;
            case "单位地址":
              this.InternetShow.commentS8 = true;
              break;
            case "企业登记":
              this.InternetShow.commentS9 = true;
              break;
            case "单位组织代码":
              this.InternetShow.commentS10 = true;
              break;
            case "接听是否本人":
              this.checkId.declearNloaned = true;
              break;
            case "是否申请借款":
              this.checkId.loanNot = true;
              break;
            case "是否私营业主":
              this.workInf.private = true;
              break;
              //    case "配偶工作情况":
              //  this.marriage.workingCondition = true;
              //   break;
            case "同城工作生活":
              this.marriage.workingLivingInf = true;
              break;
              //  case "是否私营业主":
              // this.workInf.private = true;
              // break;


          }
        } else if (hidLabel == "婚姻状况") {
          console.log(hidLabel + name)
          if (name == "02" || name == "03") {
            this.marriage.couple = true;
            this.marriage.workingCondition = false;
            this.marriage.workingLivingInf = false;
          } else {
            this.marriage.couple = false;
            this.checkData.spouseWork = ""; //配偶工作情况清空
            this.checkData.spouseWorktype = "";
            this.checkData.spouseIncome = "";
            this.checkData.spouseSamecity = ""; //同城工作生活 下拉select
            this.checkData.spouseSamecitytxt = "";
          }
        } else if (hidLabel == "配偶工作情况") {
          if (name == "00" || name == "03") {
            this.marriage.workingCondition = true;
          } else {
            this.marriage.workingCondition = false;
            this.checkData.spouseWorktype = "";
            this.checkData.spouseIncome = "";
          }
        }
        // else if(name==){

        // }{}
      },
      NewPage(ind) { // tab1-------------------右键菜单栏 li[0] 点击事件
        console.log(ind);
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
      getCity(item) {
        console.log("省份-市区")
        console.log(item)
        this.get("/credit/queryCityCounty", {
          parentCode: item,
        }).then(res => {
          console.log(res);
          this.hireProvincd = res.data;
          // 修改的时候 市区  县区 清空数据
          this.checkData.workCity = "";
          this.checkData.workCounty = "";
          this.hireTown = "";
        })
      },
      getTown(item) {
        console.log("city");
        this.get("/credit/queryCityCounty", {
          parentCode: item,
        }).then(res => {
          console.log(res);
          this.hireTown = res.data;
        })
      },
      CFsave() {
        console.log("提交信息");
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            // alert('From Submitted!');
            // 下面为需要验证不为 空 的字段
            // console.log(this.checkData)
            this.post("/creauditInfo/addOrUpdate", this.checkData).then(res => {
              console.log(res);
              if (res.statusCode == 200) {
                alert('提交成功!');
              } else {
                alert("提交失败，请重新提交")
              }
            });
            // alert('提交成功!');
            // return;
          } else {
            alert('请按要求填写！');
          }
          // alert('Correct them errors!');
        });
      },
      mountJ(code, val) {
        // this.checkData+"."+val==0? this+"."+comment=false: this+"."+comment=true;
        // this.checkData.val==0? this.comment=false: this.comment=true;
        // console.log(code)
        switch (code) {
          case 0:
            val == 0 ? this.InternetShow.commentS = false : this.InternetShow.commentS = true;
            break; //上网-客户被执行
          case 1:
            val == 0 ? this.InternetShow.commentS1 = false : this.InternetShow.commentS1 = true;
            break; //上网-单位被执行
          case 2:
            val == 0 ? this.InternetShow.commentS2 = false : this.InternetShow.commentS2 = true;
            break; //上网-客户被执行
          case 3:
            val == 0 ? this.InternetShow.commentS3 = false : this.InternetShow.commentS3 = true;
            break; //上网-客户被执行
          case 4:
            val == 0 ? this.InternetShow.commentS4 = false : this.InternetShow.commentS4 = true;
            break; //上网-客户被执行
          case 5:
            val == 0 ? this.InternetShow.commentS5 = false : this.InternetShow.commentS5 = true;
            break; //上网-客户被执行  
          case 6:
            val == 0 ? this.InternetShow.commentS6 = false : this.InternetShow.commentS6 = true;
            break; //上网-客户被执行
          case 7:
            val == 0 ? this.InternetShow.commentS7 = false : this.InternetShow.commentS7 = true;
            break; //上网-客户被执行
          case 8:
            val == 0 ? this.InternetShow.commentS8 = false : this.InternetShow.commentS8 = true;
            break; //上网-客户被执行
          case 9:
            val == 0 ? this.InternetShow.commentS9 = false : this.InternetShow.commentS9 = true;
            break; //上网-客户被执行
          case 10:
            val == 0 ? this.InternetShow.commentS10 = false : this.InternetShow.commentS10 = true;
            break; //上网-客户被执行
          case 11:
            val == 0 ? this.checkId.declearNloaned = false : this.checkId.declearNloaned = true;
            break;
          case 12: //私营业主整个部分
            val == 0  || val == null ? this.workInf.private = false : this.workInf.private = true;
            break;
          case 13: //婚姻状况
            val == "01" || val == "04" || val == null ? this.marriage.couple = false : this.marriage.couple = true;
            break;
             case 14:  // 配偶工作情况
            val == "00"||val=="03" ? this.marriage.workingCondition = true : this.marriage.workingCondition = false;
            break;
            //  case 15: // 是否在同一个城市工作
            // val == "01" || val== "04" || val == null ? this.marriage.couple = false : this.marriage.couple = true;
            // break;
            //  case 16: // 
            // val == "01" || val== "04" || val == null ? this.marriage.couple = false : this.marriage.couple = true;
            // break;

        }
        // this.checkData.val==0? this.InternetShow.commentS=false: this.InternetShow.commentS=true;

        // val==0? comment=false:comment=true;

      }
    },
    mounted() {
      // 获取查询列表数据
      this.post("/creauditInfo/queryCreauditInfoObj", {
        applyId: "00542",
      }).then(res => {
        console.log(res.data);
        this.checkData = res.data;
        // console.log(this.checkData.wnetEcutedBrea)
        // console.log(this.InternetShow.commentS)
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
        this.mountJ(12, res.data.privateOwnerFlag); //私营业主是否
        this.mountJ(13, res.data.fmarrflag); //婚姻状况
        this.mountJ(14, res.data.spouseWork); //配偶工作情况
        // this.mountJ(15, res.data.spouseSamecity); // 是否在同一个城市工作生活
        // this.mountJ(16, res.data.spouseSamecity); // 
        // this.mountJ(17, res.data.spouseSamecity); // 
        // this.mountJ(18, res.data.spouseSamecity); // 
        // this.mountJ(19, res.data.spouseSamecity); // 
        // this.mountJ(20, res.data.spouseSamecity); // 

        // this.mountJ(12, res.data.privateOwnerFlag);//私营业主是否字段
        // console.log(res.data.privateOwnerFlag)

        // console.log(this.checkData.wnetHirecom)
        // checkData.iisself
      });
      // 省    
      this.get("/credit/queryProvince", {}).then(res => {
        // console.log(res);
        this.hirecomAddress = res.data;
      });
      // 所属行业 
      this.get("/credit/industry", {}).then(res => {
        // console.log(res.data);
        this.hirecomKind = res.data;
      })

    }
  }

</script>

<style scoped>
  /* 公共 */

  .CreditForm li {
    color: #475669;
    font-size: 14px;
    height: 55px;
  }
  /* .InternetPosition {} */

  .help {
    color: red;
    margin-left: 10px;
  }

  .icon_hat {
    position: absolute;
    top: 15px;
    left: 18px
  }

  .headFont {
    font-size: 16px;
  }

  .red {
    color: red;
    font-weight: bold;
    font-size: 16px;
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

  .CreditForm {
    min-width: 1366px;
    /* height: 100%; */
    overflow: auto;
  }
  /* 全部统一样式 */

  .CreditForm_InternetInf_ul_left,
  .CreditForm_InternetInf_ul_right,
  .CreditForm_CheckId_ul_left,
  .CreditForm_CheckId_ul_right,
  .CreditForm_FamilyInf_ul_left,
  .CreditForm_FamilyInf_ul_right,
  .CreditForm_live_ul_left,
  .CreditForm_live_ul_right,
  .CreditForm_check_reside_ul_left {
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
  .FamilyInf_left_label,
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
    margin-top: 135px;
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
  /* .CreditForm_FamilyInf_ul_right li{
    height: 55px;
  } */
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

</style>
