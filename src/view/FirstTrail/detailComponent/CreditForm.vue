<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 上网查询信息 -->
      <el-collapse-item title=" 上网查询信息" name="1">
        <div class="CreditForm_InternetInf">
          <ul class="CreditForm_InternetInf_ul_left">
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
              <el-select v-model="beexEcutedVal" placeholder="请选择">
                <el-option v-for="item in beexEcuted" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
              <el-select v-model="netHirecomVal" placeholder="请选择">
                <el-option v-for="item in netHirecom" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">客户在失信网是否有失信记录：</label>
              <el-select v-model="netEcutedBreaVal" placeholder="请选择">
                <el-option v-for="item in netEcutedBrea" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
              <el-select v-model="netHirecomBreaVal" placeholder="请选择">
                <el-option v-for="item in netHirecomBrea" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人手机是否有异常：</label>
              <el-select v-model="netPhoneVal" placeholder="请选择">
                <el-option v-for="item in netPhone" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位名称是否有异常：</label>
              <el-select v-model="netHirecomNameVal" placeholder="请选择">
                <el-option v-for="item in netHirecomName" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位电话是否有异常：</label>
              <el-select v-model="netHirecomPhoneVal" placeholder="请选择">
                <el-option v-for="item in netHirecomPhone" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
              <el-select v-model="netAddrandEstateVal" placeholder="请选择">
                <el-option v-for="item in netAddrandEstate" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位地址是否有异常：</label>
              <el-select v-model="netHirecomAddressVal" placeholder="请选择">
                <el-option v-for="item in netHirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(3)">当地工商网查询企业基本信息中是否有登记：</label>
              <el-select v-model="netCompanyVal" placeholder="请选择">
                <el-option v-for="item in netCompany" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="InternetInf_left_label" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
              <el-select v-model="netAddrstateVal" placeholder="请选择">
                <el-option v-for="item in netAddrstate" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_InternetInf_ul_right">
            <li>
              <label class="InternetInf_right_label"> 执行信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="beexEcutedtxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位执行信息说明：</label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netHirecomtxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 失信记录说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netEcutedBreatxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位失信记录说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netHirecomBreatxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 手机异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netPhonetxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netHirecomNametxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netHirecomPhonetxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 地址异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netAddrandEstatetxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netHirecomAddresstxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 工商登记信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netCompanytxt">
              </el-input>
            </li>
            <li>
              <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="netAddrstatetxt">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item title=" 核实身份" name="2">
        <div class="CreditForm_CheckId">
          <ul class="CreditForm_CheckId_ul_left">
            <li>
              <label class="CheckId_left_label">接听者是否是借款人本人：</label>
              <el-select v-model="isselfVal" placeholder="请选择">
                <el-option v-for="item in isself" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="CheckId_left_label">是否在我司申请借款：</label>
              <el-select v-model="loanBeforeVal" placeholder="请选择">
                <el-option v-for="item in loanBefore" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_CheckId_ul_right">
            <li>
              <label class=" CheckId_right_label "> 接听说明： </label>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="isselftxt">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 工作信息 -->
      <el-collapse-item title=" 工作信息" name="3">
        <div class="CreditForm_WorkInfs">
          <ul class="CreditForm_WorkInfs_ul_left">
            <li>
              <label class="WorkInfs_left_label left_margin">工作单位：</label>
              <el-input style="width:70%;" type="text" placeholder="请输入内容" v-model="hirecomName">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">单位性质：</label>
              <el-select v-model="hirecomSignVal" placeholder="请选择">
                <el-option v-for="item in hirecomSign" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">所属行业：</label>
              <el-select v-model="hirecomKindVal" placeholder="请选择">
                <el-option v-for="item in	hirecomKind" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">职位级别：</label>
              <el-input type="text" placeholder="请输入内容" v-model="hirecomPosition">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">单位电话：</label>
              <el-input type="text" placeholder="请输入内容" v-model="hirecomPhone">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_one">月均工资[元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="hiremonthIncome">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin_half_two">每月发薪日：</label>
              <el-input type="text" placeholder="请输入内容" v-model="hirecomPayday">
              </el-input>
            </li>
            <!-- 三级联动：单位地址：	hirecomAddress  -->
            <li class="company_address_select">
              <label class="WorkInfs_left_label left_margin">单位地址 ：</label>
              <!-- 一级 -->
              <el-select v-model="hirecomAddressVal" placeholder="请选择">
                <el-option v-for="item in	hirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 二级 -->
              <el-select v-model="hirecomAddressVal" placeholder="请选择">
                <el-option v-for="item in hirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 三级 -->
              <el-select v-model="hirecomAddressVal" placeholder="请选择">
                <el-option v-for="item in hirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <!-- 具体地址input  text框 -->
              <!-- 单位地址================================================================================未写=============找不到字段 -->
              <el-input type="text" placeholder="请输入内容" v-model="hirecomAddress">
              </el-input>
            </li>
            <li>
              <label class="WorkInfs_left_label left_margin">前单位名称：</label>
              <el-input type="text" placeholder="请输入内容" v-model="hirelastComname">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 所在部门： </label>
              <el-input type="text" placeholder="请输入内容" v-model="hiredepartment">
              </el-input>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 入职时间： </label>
              <el-date-picker v-model="hirecomGetjob" type="date" placeholder="选择日期">
              </el-date-picker>
            </li>
            <li>
              <label class=" CheckId_right_label "> 工资发放形式： </label>
              <el-select v-model="hirecomPaymentTypeVal" placeholder="请选择">
                <el-option v-for="item in hirecomPaymentType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <el-input type="text" placeholder="请输入内容" v-model="hirecomPostcode">
              </el-input>
            </li>
            <li>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <el-input type="text" placeholder="请输入内容" v-model="hirecomType">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 私营企业信息 -->
      <el-collapse-item title="私营企业信息" name="4">
        <div class="CreditForm_CompanyInfs">
          <ul class="CreditForm_CompanyInfs_ul_left">
            <li>
              <label class="CompanyInfs_left_label left_margin">企业类型：</label>
              <el-select v-model="selfTypeVal" placeholder="请选择">
                <el-option v-for="item in selfType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">注册资金[万元]：</label>
              <el-select v-model="selfregcapitalVal" placeholder="请选择">
                <el-option v-for="item in selfregcapital" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">占股比例：</label>
              <el-input type="text" placeholder="请输入内容" v-model="selfhasProportion">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">月还款额/租金[万元]：</label>
              <el-select v-model="selfMonthRentVal" placeholder="请选择">
                <el-option v-for="item in selfMonthRent" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">营业面积：</label>
              <el-input type="text" placeholder="请输入内容" v-model="selfpremisesArea">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin">企业经营项目：</label>
              <el-input style="width:70%" type="text" placeholder="请输入内容" v-model="selfBusproject">
              </el-input>
            </li>
            <li>
              <label class="CompanyInfs_left_label left_margin_half_one">近一年利润[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="selfRecyearProfits">
              </el-input>
            </li>


            <li>
              <label class="CompanyInfs_left_label left_margin_half_two">第一供销商：</label>
              <el-input type="text" placeholder="请输入内容" v-model="selfFirsupplier">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right">
            <li>
              <label class=" CheckId_right_label "> 公司注册时间： </label>
              <el-date-picker v-model="selfCreateDate" type="date" placeholder="选择日期">
              </el-date-picker>
            </li>
            <li>
              <!--   需要改成 date  输入框 -->
              <label class=" CheckId_right_label "> 经营场所：</label>
              <el-input type="text" placeholder="请输入内容" v-model="selfpremisestxt">
              </el-input>
            </li>
            <li>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <el-input type="text" placeholder="请输入内容" v-model="selfempCount">
              </el-input>
            </li>
            <li>
              <!-- 未写绑定数据 先用员工人数==========================待确定 -->
              <label class=" CheckId_right_label "> 每月净利润[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="selfempCount">
              </el-input>
            </li>
            <li>
              <label class="CheckId_right_label "> 第一分销商： </label>
              <el-input type="text" placeholder="请输入内容" v-model="selfFirdistri">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 家庭信息 -->
      <el-collapse-item title="家庭信息" name="5">
        <div class="CreditForm_FamilyInf">
          <ul class="CreditForm_FamilyInf_ul_left">
            <li>
              <label class="FamilyInf_left_label">婚姻状况：</label>
              <el-select v-model="fmarrflagVal" placeholder="请选择">
                <el-option v-for="item in fmarrflag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有子女：</label>
              <el-select v-model="childFlagVal" placeholder="请选择">
                <el-option v-for="item in childFlag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">父母是否在世：</label>
              <el-select v-model="parentIslivingVal" placeholder="请选择">
                <el-option v-for="item in parentIsliving" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">是否有兄弟姐妹：</label>
              <el-select v-model="brothersIfhasVal" placeholder="请选择">
                <el-option v-for="item in brothersIfhasVal" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label class="FamilyInf_left_label">个人/家庭月开销[元]：</label>
              <el-select v-model="fconsumptionVal" placeholder="请选择">
                <el-option v-for="item in fconsumption" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_FamilyInf_ul_right">
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 是否有兄弟姐妹备注： </label>
              <el-input type="text" placeholder="请输入内容" v-model="brothersIfhastxt">
              </el-input>
            </li>
            <li>
              <label class=" FamilyInf_right_label family_left_margin_half_two"> 可以承受的月还款[元]： </label>
              <el-input type="text" placeholder="请输入内容" v-model="fbalance">
              </el-input>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 居住情况 -->
      <el-collapse-item title="居住情况" name="6">
        <div class="CreditForm_live">
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_left_label">同住者关系：</label>
              <el-select v-model="livingHouseHoldsVal" placeholder="请选择">
                <el-option v-for="item in livingHouseHolds" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
              <label class="live_right_label family_left_margin_half_two">居住房产所属情况：</label>
              <el-select v-model="livingEstateBelongsVal" placeholder="请选择">
                <el-option v-for="item in livingEstateBelongs" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核对现住址 -->
      <el-collapse-item title="核对现住址" name="7">
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li>
              <label class="check_reside__left_label">现住址：</label>
              <span> 北京市北京市延庆县宫本武藏 </span>
            </li>
            <li>
              <label class="check_reside__left_label">现住地址是否为常住地址 ：</label>
              <el-select v-model="aisresidentVal" placeholder="请选择">
                <el-option v-for="item in aisresident" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 初审结论 -->
      <el-collapse-item title="初审结论" name="8">
        <div class=" CreditForm_result">
          <p class="CreditForm_result_p_label">初审结果评价：</p>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="firstConclusion">
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
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        // -------上网查询信息------------
        beexEcuted: [{ //（上网查询信息）客户在人法网是否有被执行信
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netHirecom: [{ //（上网查询信息）单位在人法网是否有被执行信
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netEcutedBrea: [{ //（上网查询信息）客户在失信网是否有失信记录
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netHirecomBrea: [{ //（上网查询信息）单位在失信网是否有失信记录  4
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netPhone: [{ //（上网查询信息）网上搜索借款人的手机是否有异常信息 5
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netHirecomName: [{ //（上网查询信息）网搜单位名称是否有异常  6
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netHirecomPhone: [{ //（上网查询信息）网搜单位电话是否有异常  7
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netAddrandEstate: [{ //（上网查询信息）网上搜索借款人现居住地址和房产地址是否有异常  8
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netHirecomAddress: [{ //（上网查询信息）网搜单位地址是否有异常   9
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netCompany: [{ //（上网查询信息）当地工商网查询企业基本信息中是否有登记
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        netAddrstate: [{ //（上网查询信息）客户工作单位在全国组织代码查询中是否存在  11
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        // ---------------- 核实身份  ------------
        isself: [{ //  接听者是否是借款人本人：
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        loanBefore: [{ // 是否在我司申请借款：
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        // ---------------- 工作信息  ------------
        hirecomSign: [{ // 单位性质
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        hirecomKind: [{ // 所属行业：
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        hirecomAddress: [{ // 单位地址------------三级联动---待续 
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        hirecomPaymentType: [{ // 工资发放形式
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],

        // ------------------------------私营企业信息------------------------
        selfType: [{ // 企业类型
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        selfregcapital: [{ // 注册资金[万元]
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        selfMonthRent: [{ // 月还款额/租金[万元]
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        // ------------------------------家庭信息------------------------
        fmarrflag: [{ // 婚姻状况
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        childFlag: [{ // 是否有子女
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        parentIsliving: [{ // 父母是否在世
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        brothersIfhasVal: [{ // 是否有兄弟姐妹
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        fconsumption: [{ // 个人/家庭月开销[元]
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        // ------------------------------居住情况------------------------
        livingHouseHolds: [{ // 同住者关系
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        livingEstateBelongs: [{ // 居住房产所属情况
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
        // ------------------------------核对现住址------------------------
        aisresident: [{ // 现住地址是否为常住地址
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],

        // select 字段
        // 上网查询
        beexEcutedVal: "", // select-客户在法网是否有被执行信息
        netHirecomVal: '', // select-单位在法网是否有被执行信息：
        netEcutedBreaVal: '', // select-客户在失信网是否有失信记录：
        netHirecomBreaVal: '', // select-单位在失信网是否有失信记录
        netPhoneVal: '', // select-网上搜索借款人手机是否有异常：
        netHirecomNameVal: '', // select-网搜单位名称是否有异常
        netHirecomPhoneVal: '', // select-网搜单位电话是否有异常：
        netAddrandEstateVal: '', // select-网上搜索借款人现居住地址和房产地址是否有异常：
        netHirecomAddressVal: '', // select-网搜单位地址是否有异常：
        netCompanyVal: '', // select-当地工商网查询企业基本信息中是否有登记：
        netAddrstateVal: '', // select-客户工作单位在全国组织代码查询中是否存在：
        // 核实身份
        isselfVal: '', // 接听者是否是借款人本人：
        loanBeforeVal: '', //是否在我司申请借款：
        // 工作信息
        hirecomSignVal: '', //单位性质
        hirecomKindVal: '', //所属行业：
        hirecomAddressVal: '', //单位地址------------三级联动---待续
        hirecomPaymentTypeVal: '', // 工资发放形式：
        //  私营企业信息
        selfTypeVal: '', //企业类型
        selfregcapitalVal: '', //注册资金[万元]
        selfMonthRentVal: '', //月还款额/租金[万元]：
        // 家庭信息
        fmarrflagVal: '', //婚姻状况
        childFlagVal: '', //是否有子女
        parentIslivingVal: '', //父母是否在世
        brothersIfhasVal: '', //是否有兄弟姐妹
        fconsumptionVal: '', //个人/家庭月开销[元]
        // 居住情况
        livingHouseHoldsVal: '', //同住者关系
        livingEstateBelongsVal: '', //居住房产所属情况
        // 核对现住址
        aisresidentVal: '', //现住地址是否为常住地址
        jhjk: '', //


        // textarea 文本输入域 字段
        beexEcutedtxt: '', // 执行信息说明
        netHirecomtxt: "", //单位执行信息说明
        netEcutedBreatxt: "", //失信记录说明
        netHirecomBreatxt: "", //单位失信记录说明        
        netPhonetxt: "", //手机异常信息说明        
        netHirecomNametxt: "", //单位名称异常信息说明
        netHirecomPhonetxt: "", //单位电话异常信息说明
        netAddrandEstatetxt: "", //地址异常信息说明
        netHirecomAddresstxt: "", //单位地址异常信息说明
        netCompanytxt: "", //工商登记信息说明
        netAddrstatetxt: "", //组织机构代码信息说明
        //核实身份
        isselftxt: '', //接听说明
        // 初审结论
        firstConclusion: '', //初审结果评价

        // input 字段
        // 工作信息
        hirecomName: '', // 工作单位
        hirecomPosition: '', //职位级别
        hirecomPhone: '', //单位电话
        hiremonthIncome: '', //月均工资[元]
        hirecomPayday: '', //每月发薪日
        hirelastComname: '', //前单位名称：
        hiredepartment: '', // 所在部门
        hirecomGetjob: '', // 入职时间-日期选择器
        hirecomPostcode: '', // 单位地址邮编
        hirecomType: '', // 是否为私营业主
        hirecomAddress:'',//单位地址 -----------------------------------------------------------------------------待确认
        // 私营企业信息
        selfhasProportion: '', //占股比例
        selfpremisesArea: '', //营业面积
        selfBusproject: '', //企业经营项目
        selfRecyearProfits: '', //近一年利润[万元]
        selfFirsupplier: '', //第一供销商
        selfCreateDate: '', //公司注册时间
        selfpremisestxt: '', //经营场所
        selfempCount: '', //员工人数
        jfimeuuf: '', //每月净利润[万元]：-----------------------------------------------------------------------------待确认
        selfFirdistri: '', //第一分销商
        // 家庭信息
        brothersIfhastxt: '', //是否有兄弟姐妹备注
        fbalance: '', //可以承受的月还款[元]



        // jfimeuuf: '', //
        // jfimeuuf: '', //
        // jfimeuuf: '', //
        // jfimeuuf: '', //
        // jfimeuuf: '', //
        // jfimeuuf: '', //
        // kkkkkk: '', // 
        // kkkkkk: '', // 
        // kkkkkk: '', // 

      
        form: {
          desc: '', //上网查询信息 右侧textarea框绑定值
        },
  options: [{ // 现住地址是否为常住地址
          value: 'yes',
          label: '是'
        }, {
          value: 'no',
          label: '否'
        }],
      }
    },
    methods: {
      handleChange(tab, event) {
        console.log(tab, event);

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
        // this.rightList = false;
      },
      CFsave() {
        console.log("提交信息")
      }
    }
  }

</script>

<style scope>
  /* 公共 */

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
  }
  /* 上网查询信息 */

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
    word-break: normal ;
    /* border: 1px solid yellow; */
    text-align: right;
  }
  /* 单独设置-上网查询信息- 左侧下拉框*/
    /* .CreditForm_InternetInf_ul_left li{
      padding:1.5px 0;

    } */
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

  .CreditForm_WorkInfs .CreditForm_WorkInfs_ul_left li,
  .CreditForm_CompanyInfs_ul_left,
  .CreditForm_CompanyInfs_ul_left li {
    float: left;
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

</style>
