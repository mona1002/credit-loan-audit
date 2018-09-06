<template>
  <div class="CreditForm">
    <el-collapse v-model="activeNames">
      <!-- 网上查询信息 -->
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">网上查询信息</span>
        </template>
        <div class="CreditForm_InternetInf">
          <ul>
            <li style="padding:5px 0;">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label blueC" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
                <el-select v-model="checkData.wbeexEcuted" @change="commentShow1(checkData.wbeexEcuted,Internet[0])">
                  <el-option v-for="item in beexEcuted" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS">
                <i class="hint">
                  <b v-show="checkData.wbeexEcutedtxt&&checkData.wbeexEcutedtxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 执行信息说明：</label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wbeexEcutedtxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label blueC" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
                <el-select v-model="checkData.wnetHirecom" @change="commentShow1(checkData.wnetHirecom,Internet[1])">
                  <el-option v-for="item in netHirecom" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS1">
                <i class="hint">
                  <b v-show="checkData.wnetHirecomtxt&&checkData.wnetHirecomtxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位执行信息说明：</label>
                <el-input type="textarea" resize="none" :maxlength="this.textareaL" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomtxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint">
                </i>
                <label class="InternetInf_left_label blueC" @click="NewPage(1)">
                  <span class="red"> * </span>客户在失信网是否有失信记录：</label>
                <el-select ref="wnetEcutedBrea" v-model="checkData.wnetEcutedBrea" name="BrokenRecord" v-validate="'required'" @change="commentShow1(checkData.wnetEcutedBrea,Internet[2])">
                  <el-option v-for="item in netEcutedBrea" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS2">
                <i class="hint">
                  <b v-show="checkData.wnetEcutedBreatxt&&checkData.wnetEcutedBreatxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 失信记录说明： </label>
                <el-input type="textarea" resize="none" :maxlength="this.textareaL" :rows="2" placeholder="请输入内容" v-model="checkData.wnetEcutedBreatxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label blueC" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
                <el-select v-model="checkData.wnetHirecomBrea" @change="commentShow1(checkData.wnetHirecomBrea,Internet[3])">
                  <el-option v-for="item in netHirecomBrea" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS3">
                <i class="hint">
                  <b v-show="checkData.wnetHirecomBreatxt&&checkData.wnetHirecomBreatxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位失信记录说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomBreatxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint">
                </i>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">
                  <span class="red"> * </span>网上搜索借款人手机是否有异常：</label>
                <el-select v-model="checkData.wnetPhone" @change="commentShow1(checkData.wnetPhone,Internet[4])" name="abnormalPhone" v-validate="'required'">
                  <el-option v-for="item in netPhone" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS4">
                <i class="hint">
                  <b v-show="checkData.wnetPhonetxt&&  checkData.wnetPhonetxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 手机异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetPhonetxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网搜单位名称是否有异常：</label>
                <el-select v-model="checkData.wnetHirecomName" @change="commentShow1(checkData.wnetHirecomName,Internet[5])">
                  <el-option v-for="item in netHirecomName" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS5">
                <i class="hint">
                  <b v-show="checkData.wnetHirecomNametxt&&checkData.wnetHirecomNametxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomNametxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网搜单位电话是否有异常：</label>
                <el-select v-model="checkData.wnetHirecomPhone" @change="commentShow1(checkData.wnetHirecomPhone,Internet[6])">
                  <el-option v-for="item in netHirecomPhone" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS6">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.comphoneOUtS" class="internet_textarea"> 输入长度不能超过500</b>
                  <b v-show="checkData.wnetHirecomPhonetxt&&checkData.wnetHirecomPhonetxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomPhonetxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
                <el-select v-model="checkData.wnetAddrandEstate" @change="commentShow1(checkData.wnetAddrandEstate,Internet[7])">
                  <el-option v-for="item in netAddrandEstate" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS7">
                <i class="hint">
                  <b v-show="checkData.wnetAddrandEstatetxt&&checkData.wnetAddrandEstatetxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 地址异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetAddrandEstatetxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label blueC" @click="NewPage(2)">网搜单位地址是否有异常：</label>
                <el-select v-model="checkData.wnetHirecomAddress" @change="commentShow1(checkData.wnetHirecomAddress,Internet[8])">
                  <el-option v-for="item in netHirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS8">
                <i class="hint">
                  <b v-show="checkData.wnetHirecomAddresstxt&&checkData.wnetHirecomAddresstxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomAddresstxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint">
                </i>
                <label class="InternetInf_left_label blueC" @click="NewPage(3)">
                  <span class="red"> * </span>当地工商网查询企业基本信息中是否有登记：</label>
                <el-select v-model="checkData.wnetCompany" @change="commentShow1(checkData.wnetCompany,Internet[9])" name="registerInfor"
                  v-validate="'required'">
                  <el-option v-for="item in netCompany" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS9">
                <i class="hint">
                  <b v-show="checkData.wnetCompanytxt&&checkData.wnetCompanytxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 工商登记信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetCompanytxt">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label blueC" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
                <el-select v-model="checkData.wnetAddrstate" @change="commentShow1(checkData.wnetAddrstate,Internet[10])">
                  <el-option v-for="item in netAddrstate" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS10" class="bottom">
                <i class="hint">
                  <b v-show="checkData.wnetAddrstatetxt&&checkData.wnetAddrstatetxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetAddrstatetxt">
                </el-input>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <!-- 核实身份 -->
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">核实身份</span>
        </template>
        <div class="CreditForm_CheckId clearFix" style="padding-bottom:10px;">
          <ul>
            <li style="marginTop:5px;">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label">接听者是否是借款人本人：</label>
                <el-select v-model="checkData.iisself" placeholder="请选择" @change="commentShow1(checkData.iisself,Internet[11])">
                  <el-option v-for="item in isself" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.checkId.declearNloaned">
                <i class="hint">
                  <b v-show="checkData.iisselftxt&&checkData.iisselftxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class=" InternetInf_right_label "> 接听说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.iisselftxt">
                </el-input>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.declearNloaned">
                <i class="hint"> </i>
                <label class="InternetInf_left_label">是否在我司申请借款：</label>
                <el-select v-model="checkData.iloanBefore" placeholder="请选择" @change="commentShow1(checkData.iloanBefore,Internet[12])">
                  <el-option v-for="item in loanBefore" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.checkId.loanNot">
                <i class="hint">
                  <b v-show="checkData.iloanBeforetxt&&checkData.iloanBeforetxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class=" InternetInf_right_label "> 说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.iloanBeforetxt">
                </el-input>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.loanNot">
                <i class="hint"> </i>
                <label class="InternetInf_left_label">借款金额[元]：</label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanAmt" @blur="formatSC('借款金额')">
                </el-input>
              </p>
              <p v-show="this.checkId.loanNot">
                <i class="hint"> </i>
                <label class=" InternetInf_right_label "> 借款期限[月]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanTerm" @blur="mMonth(checkData.iloanTerm,$event)">
                </el-input>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.loanNot">
                <i class="hint"> </i>
                <label class="InternetInf_left_label">借款用途：</label>
                <el-select v-model="checkData.iloanPurpose" placeholder="请选择">
                  <el-option v-for="item in loanPurpose" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.checkId.loanNot" class="bottom">
                <i class="hint">
                  <b v-show="checkData.iloanPurposetxt&&checkData.iloanPurposetxt.length>=500" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class=" InternetInf_right_label "> 借款用途详细说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.iloanPurposetxt">
                </el-input>
              </p>
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
        <div class="CreditForm_WorkInfs ">
          <ul class="CreditForm_WorkInfs_ul_left clearFix">
            <li style="width:100%">
              <i class="hint">
                <b v-show="this.Wordhint.Working.address" class="Working_input"> 输入长度不能超过50</b>
              </i>
              <label class="InternetInf_left_label">工作单位：</label>
              <input type="text" class="specialInput" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirecomName"
                @compositionend="wordInput50(checkData.hirecomName,'工作单位')" @keydown="wordInput50(checkData.hirecomName,'工作单位')"
                @keyup="wordInput50(checkData.hirecomName,'工作单位')">
            </li>
            <li style="margin-top:14px;">
              <i class="hint"> </i>
              <label class="InternetInf_left_label">单位性质：</label>
              <el-select v-model="checkData.hirecomSign" placeholder="请选择">
                <el-option v-for="item in hirecomSign" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="WorkInfs_left_label">所属行业：</label>
              <el-select ref='industry' v-model="checkData.hirecomKindCode" placeholder="请选择">
                <el-option v-for="item in	hirecomKind" :key="item.value" :label="item.text" :value="item.code">
                </el-option>
              </el-select>
            </li>
            <li>
              <i class="hint">
                <b v-show="this.Wordhint.Working.level" class="Working_input"> 输入长度不能超过20</b>
              </i>
              <label class="InternetInf_left_label "> 职位级别： </label>
              <el-input type="text" :maxlength="this.shotInputL" placeholder="请输入内容" v-model="checkData.workPost" @compositionend.native="wordInput20(checkData.workPost,'职位级别')"
                @keydown.native="wordInput20(checkData.workPost,'职位级别')" @keyup.native="wordInput20(checkData.workPost,'职位级别')">
              </el-input>
            </li>
            <li class="position_relative">
              <i class="hint">
                <span class="padding_left_235" v-show="this.reg.mphoneM">请输入：区号+5-8位数字</span>
                <span class="padding_left_235" v-show="this.reg.mphoneR">不可输入：11111，12345等</span>
              </i>
              <label class="WorkInfs_left_label">单位电话：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.workTel" @blur="mPhone(checkData.workTel,$event)">
              </el-input>
            </li>
            <li>
              <i class="hint">
              </i>
              <label class="InternetInf_left_label">月均工资[元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.avgsalaryamt" @blur="formatSC('月均工资')">
              </el-input>
            </li>
            <li class="position_relative">
              <i class="hint" v-show="reg.mpayDay">
                <span class="padding_left_235"> 请填入1-31之间的数字</span>
              </i>
              <label class="WorkInfs_left_label">每月发薪日：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.payDay" @blur="mday(checkData.payDay,$event)">
              </el-input>
            </li>
            <li style="width:100%">
              <i class="hint">
                <b v-show="this.Wordhint.Working.ComAdr" class="comaddressb" style="paddingLeft:826px">输入长度不能超过100</b>
              </i>
              <label class="InternetInf_left_label ">单位地址 ：</label>
              <!-- 一级 -->
              <el-select ref="province" v-model="checkData.workProvinceName" placeholder="请选择" @change="setProvince">
                <el-option v-for="item in	hirecomAddress" :key="item.id" :label="item.areaName" :value="item.id">
                </el-option>
              </el-select>
              <!-- 二级 -->
              <el-select ref="city" v-model="checkData.workCityName" placeholder="请选择" @visible-change="getCity" @change="setCity">
                <el-option v-for="item in hireProvincd" :key="item.id" :label="item.areaName" :value="item.id">
                </el-option>
              </el-select>
              <!-- 三级 -->
              <el-select ref="country" v-model="checkData.workCountyName" placeholder="请选择" @visible-change="getCountry" @change="setCountry">
                <el-option v-for="item in hireTown" :key="item.id" :label="item.areaName" :value="item.id">
                </el-option>
              </el-select>
              <el-input type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.workAddress" @compositionend.native="wordInput100(checkData.workAddress,'单位具体地址')"
                @keyup.native="wordInput100(checkData.workAddress,'单位具体地址')">
              </el-input>
            </li>
            <li style="width:100%" class="bottom">
              <i class="hint">
                <b v-show="this.Wordhint.Working.preComName" class="Working_input"> 输入长度不能超过50</b>
              </i>
              <label class="InternetInf_left_label">前单位名称：</label>
              <input type="text" class="specialInput" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirelastComname"
                @compositionend="wordInput50(checkData.hirelastComname,'前单位')" @keyup="wordInput50(checkData.hirelastComname,'前单位')">
            </li>
          </ul>
          <ul class="CreditForm_WorkInfs_ul_right" style="padding:45px 0 5px 0">
            <li>
              <i class="hint">
                <b v-show="this.Wordhint.Working.department" class="Working_middle Working_right">输入长度不能超过20</b>
              </i>
              <label class=" CheckId_right_label ">所在部门： </label>
              <el-input type="text" placeholder="请输入内容" :maxlength="this.shotInputL" v-model="checkData.hiredepartment" @compositionend.native="wordInput20(checkData.hiredepartment,'部门')"
                @keyup.native="wordInput20(checkData.hiredepartment,'部门')">
              </el-input>
            </li>
            <li>
              <i class="hint"></i>
              <label class=" CheckId_right_label "> 入职时间： </label>
              <el-date-picker v-model="checkData.entryDate" value-format="yyyy-MM-dd" style="maxWidth:200px;minWidth:150px;opcity:0;" type="date"
                :picker-options="pickerOptions1">
              </el-date-picker>
            </li>
            <li>
              <i class="hint"></i>
              <label class=" CheckId_right_label ">工资发放形式： </label>
              <el-select v-model="checkData.payForm" placeholder="请选择">
                <el-option v-for="item in payForm" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li class="position_relative">
              <i class="hint">
                <b v-show="this.reg.mpostCode" class="Working_middle Working_right">请输入6位邮编</b>
              </i>
              <label class=" CheckId_right_label "> 单位地址邮编： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.workZip" @blur="postCode(checkData.workZip,$event)">
              </el-input>

            </li>
            <li>
              <i class="hint"></i>
              <label class=" CheckId_right_label "> 是否为私营业主： </label>
              <el-select v-model="checkData.privateOwnerFlag" placeholder="请选择" @change="commentShow1(checkData.privateOwnerFlag,Internet[13])">
                <el-option v-for="item in privateOwnerFlag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
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
        <div class="CreditForm_CompanyInfs" v-show="this.workInf.private" style="paddingLeft:21px;height:250px;">
          <ul class="CreditForm_CompanyInfs_ul_left">
            <li ref="compTypeDiv">
              <i class="hint">
              </i>
              <label class="InternetInf_left_label ">
                <span class="red"> * </span>企业类型：</label>
              <el-select v-model="checkData.compType" placeholder="请选择" ref="compTypes" name="companyType" v-validate="reqd">
                <el-option v-for="item in compType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <i class="hint">
              </i>
              <label class=" WorkInfs_left_label ">
                <span class="red"> * </span> 公司注册时间： </label>
              <el-date-picker style="maxWidth:200px;minWidth:150px" v-model="checkData.compegDate" type="date" :picker-options="pickerOptions1"
                name="registerDate" v-validate="reqd">
              </el-date-picker>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">注册资金[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.regcapitalamt" @blur="formatSC('注册资金')">
              </el-input>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="WorkInfs_left_label">占股比例：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfhasProportion" @blur="businessSC('占股比例')">
              </el-input>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">月还款额/租金[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.monthrentamt" @blur="formatSC('月还款/租金')">
              </el-input>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="WorkInfs_left_label">营业面积：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfpremisesArea" @blur="businessSC('营业面积')">
              </el-input>
            </li>
            <li style="width:100%;">
              <i class="hint">
                <b v-show="this.Wordhint.company.manage" class="Working_input">输入长度不能超过200</b>
              </i>
              <label class=" InternetInf_left_label">企业经营项目：</label>
              <el-input class="opraProj" type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.projectManage"
                @compositionend.native="wordarea200(checkData.projectManage,'经营项目')" @keydown.native="wordarea200(checkData.projectManage,'经营项目')"
                @keyup.native="wordarea200(checkData.projectManage,'经营项目')">
              </el-input>
            </li>
            <li style="margin-top:14px;">
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">近一年利润[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.oneYearProfitamt" @blur="formatSC('近一年利润')">
              </el-input>
            </li>
            <li class="bottom">
              <i class="hint">
                <b v-show="this.Wordhint.company.Supplier" class="Working_middle">输入长度不能超过50</b>
              </i>
              <label class="WorkInfs_left_label">第一供销商：</label>
              <el-input type="text" placeholder="请输入内容" :maxlength=" this.longInputL" v-model="checkData.firstSuppliers" @compositionend.native="wordInput50(checkData.firstSuppliers,'供销商')"
                @keydown.native="wordInput50(checkData.firstSuppliers,'供销商')" @keyup.native="wordInput50(checkData.firstSuppliers,'供销商')">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right" style="paddingTop:45px">
            <li>
              <i class="hint"> </i>
              <label class=" CheckId_right_label "> 经营场所：</label>
              <el-select v-model="checkData.selfpremises" placeholder="请选择">
                <el-option v-for="item in selfpremises" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <i class="hint">
                <b v-show="this.workInf.empNumber" class="Working_middle Working_right">输入内容不得大于5位数</b>
              </i>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfempCount" @blur="EmpNum(checkData.selfempCount)">
              </el-input>
            </li>
            <li>
              <i class="hint"> </i>
              <label class=" CheckId_right_label "> 每月净利润额[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.profitamountmamt" @blur="formatSC('月利润')">
              </el-input>
            </li>
            <li style="marginTop:38px">
              <i class="hint">
                <b v-show="this.Wordhint.company.distributor" class="Working_middle Working_right">输入长度不能超过50</b>
              </i>
              <label class="CheckId_right_label "> 第一分销商： </label>
              <el-input type="text" placeholder="请输入内容" :maxlength=" this.longInputL" v-model="checkData.firstDistributor" @compositionend.native="wordInput50(checkData.firstDistributor,'分销商')"
                @keydown.native="wordInput50(checkData.firstDistributor,'分销商')" @keyup.native="wordInput50(checkData.firstDistributor,'分销商')">
              </el-input>
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
        <div class="CreditForm_FamilyInf_edit">
          <ul>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">婚姻状况：</label>
                <el-select v-model="checkData.fmarrflag" placeholder="请选择" @change="commentShow1(checkData.fmarrflag,Internet[14])">
                  <el-option v-for="item in fmarrflag" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </li>
            <li v-show=" this.marriage.couple">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">配偶工作情况：</label>
                <el-select v-model="checkData.spouseWork" placeholder="请选择" @change="commentShow1(checkData.spouseWork,Internet[15])">
                  <el-option v-for="item in spouseWork" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </li>
            <li v-show=" this.marriage.workingCondition">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">配偶工作类型：</label>
                <el-select v-model="checkData.spouseWorktype" placeholder="请选择">
                  <el-option v-for="item in spouseWorktype" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <i class="hint"> </i>
                <label class="Family_right_label"> 配偶收入情况[月/元]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.spouseIncome" @blur="formatSC('配偶收入')">
                </el-input>
              </p>
            </li>
            <li v-show=" this.marriage.couple">
              <p>
                <i class="hint"> </i>
                <label class=" InternetInf_left_label">是否在同一个城市工作生活：</label>
                <el-select v-model="checkData.spouseSamecity" placeholder="请选择" @change="commentShow1(checkData.spouseSamecity,Internet[16])">
                  <el-option v-for="item in spouseSamecity" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.marriage.workingLivingInf">
                <i class="hint">
                  <b v-show="this.Wordhint.family.SameCity" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label"> 在同一个城市工作生活信息： </label>
                <el-input type="textarea" placeholder="请输入内容" :rows="2" resize="none" :maxlength="this.shotTextareaL" v-model="checkData.spouseSamecitytxt"
                  @compositionend.native="wordarea200(checkData.spouseSamecitytxt,'同城生活信息')" @keydown.native="wordarea200(checkData.spouseSamecitytxt,'同城生活信息')"
                  @keyup.native="wordarea200(checkData.spouseSamecitytxt,'同城生活信息')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">是否有子女：</label>
                <el-select v-model="checkData.childFlag" placeholder="请选择" @change="commentShow1(checkData.childFlag,Internet[17])">
                  <el-option v-for="item in childFlag" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <i class="hint">
                  <span class="family_textarea" v-show="this.Children.ChildCount">请输入0-99之间的数 </span>
                </i>
                <label class="InternetInf_left_label ">子女数量：</label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.childCount" @blur="childNumver(checkData.childCount)">
                </el-input>
              </p>
              <p>
                <i class="hint">
                  <b v-show="this.Wordhint.family.ChildCt" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label "> 子女数量备注： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.childCounttxt"
                  @compositionend.native="wordarea200(checkData.childCounttxt,'子女备注')" @keydown.native="wordarea200(checkData.childCounttxt,'子女备注')"
                  @keyup.native="wordarea200(checkData.childCounttxt,'子女备注')">
                </el-input>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">子女现状：</label>
                <el-select v-model="checkData.childStatus" placeholder="请选择">
                  <el-option v-for="item in childStatus" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <i class="hint">
                  <b v-show="this.Wordhint.family.ChildCondition" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label"> 子女现状备注： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.childStatustxt"
                  @compositionend.native="wordarea200(checkData.childStatustxt,'子女现状')" @keydown.native="wordarea200(checkData.childStatustxt,'子女现状')"
                  @keyup.native="wordarea200(checkData.childStatustxt,'子女现状')">
                </el-input>
              </p>
            </li>
            <li v-show="this.Children.ChildrenOrNot">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">子女是否在身边：</label>
                <el-select v-model="checkData.childTogether" placeholder="请选择">
                  <el-option v-for="item in childTogether" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <i class="hint"> </i>
                <label class="Family_right_label"> 是否支付其生活费： </label>
                <el-select class="creditForm_Select_special" v-model="checkData.childIspaycost" placeholder="请选择" @change="commentShow1(checkData.childIspaycost,Internet[18])">
                  <el-option v-for="item in childIspaycost" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </li>
            <li v-show="this.Children.PayAlimony">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label "> 生活费支付额度[元]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.childPaycostamt" @blur="formatSC('生活费支付')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">父母是否在世：</label>
                <el-select v-model="checkData.parentIsliving" placeholder="请选择" @change="commentShow1(checkData.parentIsliving,Internet[19])">
                  <el-option v-for="item in parentIsliving" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.parent.livingOrNot">
                <i class="hint">
                  <b v-show="this.Wordhint.family.ParentRemark" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label"> 父母备注： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.parentIslivingtxt"
                  @compositionend.native="wordarea200(checkData.parentIslivingtxt,'父母备注')" @keydown.native="wordarea200(checkData.parentIslivingtxt,'父母备注')"
                  @keyup.native="wordarea200(checkData.parentIslivingtxt,'父母备注')">
                </el-input>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">父母身体状况：</label>
                <el-select v-model="checkData.parentHealth" placeholder="请选择">
                  <el-option v-for="item in parentHealth" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <i class="hint">
                  <b v-show="this.Wordhint.family.ParentHealth" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label"> 父母身体状况备注： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.parentHealthtxt"
                  @compositionend.native="wordarea200(checkData.parentHealthtxt,'父母健康')" @keydown.native="wordarea200(checkData.parentHealthtxt,'父母健康')"
                  @keyup.native="wordarea200(checkData.parentHealthtxt,'父母健康')">
                </el-input>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">父母是否需要赡养：</label>
                <el-select v-model="checkData.parentPayalimony" placeholder="请选择">
                  <el-option v-for="item in parentPayalimony" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <i class="hint">
                  <b v-show="this.Wordhint.family.Payalimony" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label"> 父母是否需要赡养备注： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.parentPayalimonytxt"
                  @compositionend.native="wordarea200(checkData.parentPayalimonytxt,'父母赡养')" @keydown.native="wordarea200(checkData.parentPayalimonytxt,'父母赡养')"
                  @keyup.native="wordarea200(checkData.parentPayalimonytxt,'父母赡养')">
                </el-input>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">父母工作情况：</label>
                <el-select v-model="checkData.parentWork" placeholder="请选择">
                  <el-option v-for="item in parentWork" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <i class="hint"> </i>
                <label class="Family_right_label"> 父母收入[元]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.parentIncome" @blur="formatSC('父母收入')">
                </el-input>
              </p>
            </li>
            <li v-show="this.parent.livingOrNot">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">父母是否知情：</label>
                <el-select v-model="checkData.parentInformed" placeholder="请选择">
                  <el-option v-for="item in parentInformed" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">是否有兄弟姐妹：</label>
                <el-select v-model="checkData.brothersIfhas" placeholder="请选择" @change="commentShow1(checkData.brothersIfhas,Internet[20])">
                  <el-option v-for="item in brothersIfhas" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.siblings.siblingsOrNot">
                <i class="hint">
                  <b v-show="this.Wordhint.family.siblings" class="family_textarea"> 输入长度不能超过200</b>
                </i>
                <label class="Family_right_label"> 是否有兄弟姐妹备注： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" v-model="checkData.brothersIfhastxt"
                  @compositionend.native="wordarea200(checkData.brothersIfhastxt,'兄弟姐妹备注')" @keydown.native="wordarea200(checkData.brothersIfhastxt,'兄弟姐妹备注')"
                  @keyup.native="wordarea200(checkData.brothersIfhastxt,'兄弟姐妹备注')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label ">个人/家庭月开销[元]：</label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.fconsumption" @blur="formatSC('开销')">
                </el-input>
              </p>
              <p class="bottom">
                <i class="hint">
                  <span v-show="this.Wordhint.family.acount" class="family_textarea">请输入正确金额</span>
                </i>
                <label class="Family_right_label">
                  <span class="red"> * </span> 可以承受的月还款[元]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.fbalance" @blur="formatSC('月还款')" name="Paymonth" v-validate="'required'">
                </el-input>
              </p>
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
        <div class="CreditForm_live">
          <ul class="CreditForm_live_ul_left">
            <li>
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">同住者关系：</label>
              <el-select v-model="checkData.livingHouseHolds" placeholder="请选择">
                <el-option v-for="item in livingHouseHolds" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li class="bottom">
              <i class="hint"> </i>
              <label class="Family_right_label ">居住房产所属情况：</label>
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
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">核对现住址</span>
        </template>
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li style="marginTop:10px;">
              <i class="hint"></i>
              <label class="InternetInf_left_label ">现住址：</label>
              <span class="detail_inf oneline"> {{this.checkData.aaddress}}</span>
            </li>
            <li>
              <i class="hint"></i>
              <label class="InternetInf_left_label ">现住地址是否为常住地址 ：</label>
              <el-select v-model="checkData.aisresident" placeholder="请选择" @change="commentShow1(checkData.aisresident,Internet[21])">
                <el-option v-for="item in aisresident" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <p v-show="this.address.permanent" style="clear:both;width:66.6%;position:relative;margin-top:14px;">
            <i class="hint">
              <b v-show="this.Wordhint.address.permanentAddress" class="family_textarea"> 输入长度不能超过100</b>
            </i>
            <label class="InternetInf_left_label ">常住地址 ：</label>
            <input class='specialInput' type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.aisresidenttxt"
              @compositionend="wordInput100(checkData.aisresidenttxt,'常住地址')" @keyup="wordInput100(checkData.aisresidenttxt,'常住地址')">
          </p>
        </div>
      </el-collapse-item>
      <!-- 审批结论 -->
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">审批结论</span>
        </template>
        <div class="CreditForm_result">
          <i class="hint" style="top:27px;">
            <b v-show="checkData.oother && checkData.oother.length>=1000" class="result_textarea"> 输入长度不能超过1000</b>
          </i>
          <p class="InternetInf_left_label" style="textAlign:right;">
            <span class="red"> * </span>初审结果评价：</p>
          <el-input type="textarea" :rows="5" resize="none" :maxlength="1000" placeholder="请输入内容" v-model="checkData.oother" name="conclusion"
            v-validate="'required'">
          </el-input>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="btn_wrap">
      <el-button type="primary" class="btn" @click="makeSureBtn">确认</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ccccc: null,
        adbtn: '确认',
        loadsitu: false,
        surbtn: true,
        loadbtn: false,
        Pwidth: [],
        CFwidth: [],
        inputWidth: [],
        textareaPpraProj: [],
        comaddressb: [],
        shotInputL: 20,
        longInputL: 50,
        longLongInputL: 100,
        shotTextareaL: 200,
        textareaL: 500,
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
            acount: false,
          },
          address: {
            permanentAddress: false,
          },
          result: false,
        },
        getParams: [],
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        Confirm: false,
        AlertS: false,
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
        activeNames: ['1', "2", "3", "4", "5", "6", "7", "8"],
        checkData: {},
        // -------网上查询信息------------
        beexEcuted: [{ //（网上查询信息）客户在人法网是否有被执行信
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecom: [{ //（网上查询信息）单位在人法网是否有被执行信
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netEcutedBrea: [{ //（网上查询信息）客户在失信网是否有失信记录
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomBrea: [{ //（网上查询信息）单位在失信网是否有失信记录  4
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netPhone: [{ //（网上查询信息）网上搜索借款人的手机是否有异常信息 5
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomName: [{ //（网上查询信息）网搜单位名称是否有异常  6
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomPhone: [{ //（网上查询信息）网搜单位电话是否有异常  7
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netAddrandEstate: [{ //（网上查询信息）网上搜索借款人现居住地址和房产地址是否有异常  8
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netHirecomAddress: [{ //（网上查询信息）网搜单位地址是否有异常   9
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netCompany: [{ //（网上查询信息）当地工商网查询企业基本信息中是否有登记
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        netAddrstate: [{ //（网上查询信息）客户工作单位在全国组织代码查询中是否存在  11
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
        childTogether: [{ //子女是否在身边
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        childIspaycost: [{ // 是否支付其生活费
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

        parentHealth: [{ // 父母身体状况
          value: '1',
          label: '疾病'
        }, {
          value: '0',
          label: '健康'
        }],
        parentPayalimony: [{ // 父母是否需要赡养
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
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
        parentInformed: [{ // 父母是否知情
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
        aisresident: [{ // 现住地址是否为常住地址
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
      }
    },
    methods: {
      mountedInf() {
        this.getParams = JSON.parse(localStorage.getItem("taskInWaitting"));
        this.mountC();
        this.Pwidth = document.getElementsByClassName("el-input")
        this.Txawidth = document.getElementsByClassName("el-textarea")
        this.CFwidth = document.getElementsByClassName("CreditForm")
        this.inputWidth = document.getElementsByClassName("specialInput")
        this.comaddressb = document.getElementsByClassName("comaddressb")
        this.Alertbtn = document.getElementsByClassName("btn")
        if (this.myWatch) {
          this.ElInputStyle(this.myWatch)
        } else {
          for (var i = 0; i < this.Pwidth.length; i++) {
            this.Pwidth[i].style.width = 150 + "px";
            this.comaddressb[0].style.paddingLeft = 674 + "px";
          }
        }
      },
      wordInput20(val, el) {
        if (val.length >= 20) {
          this.wordInput20SC(val, el);
        } else {
          this.wordInput20SCF(val, el);
        }
      },
      wordInput20SC(val, el) {
        switch (el) {
          case "职位级别":
            this.Wordhint.Working.level = true;
            break;
          case "部门":
            this.Wordhint.Working.department = true;
            break;
        }
      },
      wordInput20SCF(val, el) {
        switch (el) {
          case "职位级别":
            this.Wordhint.Working.level = false;
            break;
          case "部门":
            this.Wordhint.Working.department = false;
            break;
        }
      },
      wordInput50(val, el) {
        if (val.length >= 50) {
          this.wordInput50SC(val, el);
        } else {
          this.wordInput50SCF(val, el);
        }
      },
      wordInput50SC(val, el) {
        switch (el) {
          case "工作单位":
            this.Wordhint.Working.address = true;
            break;
          case "单位具体地址":
            this.Wordhint.Working.level = true;
            break;
          case "前单位":
            this.Wordhint.Working.preComName = true;
            break;
          case "供销商":
            this.Wordhint.company.Supplier = true;
            break;
          case "分销商":
            this.Wordhint.company.distributor = true;
            break;
        }
      },
      wordInput50SCF(val, el) {
        switch (el) {
          case "工作单位":
            this.Wordhint.Working.address = false;
            break;
          case "单位具体地址":
            this.Wordhint.Working.level = false;
            break;
          case "前单位":
            this.Wordhint.Working.preComName = false;
            break;
          case "供销商":
            this.Wordhint.company.Supplier = false;
            break;
          case "分销商":
            this.Wordhint.company.distributor = false;
            break;
        }
      },
      wordInput100(val, el) {
        switch (el) {
          case "单位具体地址":
            val.length >= 100 ? this.Wordhint.Working.ComAdr = true : this.Wordhint.Working.ComAdr = false;
            break;
          case "常住地址":
            val.length >= 100 ? this.Wordhint.address.permanentAddress = true : this.Wordhint.address.permanentAddress =
              false;
            break;
        }
      },
      wordarea200(val, el) {
        if (val.length >= 200) {
          this.wordarea200SC(val, el);
        } else {
          this.wordarea200SCF(val, el);
        }
      },
      wordarea200SC(val, el) {
        switch (el) {
          case "经营项目":
            this.Wordhint.company.manage = true;
            break;
          case "同城生活信息":
            this.Wordhint.family.SameCity = true;
            break;
          case "子女备注":
            this.Wordhint.family.ChildCt = true;
            break;
          case "子女现状":
            this.Wordhint.family.ChildCondition = true;
            break;
          case "父母备注":
            this.Wordhint.family.ParentRemark = true;
            break;
          case "父母健康":
            this.Wordhint.family.ParentHealth = true;
            break;
          case "父母赡养":
            this.Wordhint.family.Payalimony = true;
            break;
          case "兄弟姐妹备注":
            this.Wordhint.family.siblings = true;
            break;
        }
      },
      wordarea200SCF(val, el) {
        switch (el) {
          case "经营项目":
            this.Wordhint.company.manage = false;
          case "同城生活信息":
            this.Wordhint.family.SameCity = false;
            break;
            break;
          case "子女备注":
            this.Wordhint.family.ChildCt = false;
            break;
          case "子女现状":
            this.Wordhint.family.ChildCondition = false;
            break;
          case "父母备注":
            this.Wordhint.family.ParentRemark = false;
            break;
          case "父母健康":
            this.Wordhint.family.ParentHealth = false;
            break;
          case "父母赡养":
            this.Wordhint.family.Payalimony = false;
            break;
          case "兄弟姐妹备注":
            this.Wordhint.family.siblings = false;
            break;
        }
      },
      commentShow1(name, hidLabel) {
        if (name == "0") {
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
              this.checkData.iloanBeforetxt = "";
              this.checkData.iloanTerm = "";
              this.checkData.iloanPurposetxt = "";
              this.checkData.iloanPurpose = "";
              this.checkData.iloanAmt = "";
              break;
            case "是否申请借款":
              this.checkId.loanNot = false;
              this.checkData.iloanBeforetxt = "";
              this.checkData.iloanTerm = "";
              this.checkData.iloanPurposetxt = "";
              this.checkData.iloanPurpose = "";
              this.checkData.iloanAmt = "";
              break;
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
              this.checkData.compegDate = "";
              this.checkData.selfpremises = "";
              this.checkData.selfempCount = "";
              this.checkData.profitamountmamt = "";
              this.checkData.firstDistributor = "";
              if (name == 0 || name == '') {
                this.reqd = '';
              }
              break;
            case "同城工作生活":
              this.marriage.workingLivingInf = false;
              this.checkData.spouseSamecitytxt = "";
              break;
            case "是否有子女":
              this.Children.ChildrenOrNot = false;
              this.checkData.childCount = "";
              this.checkData.childCounttxt = "";
              this.checkData.childStatus = "";
              this.checkData.childStatustxt = "";
              this.checkData.childIspaycost = "";
              this.checkData.childTogether = "";
              this.checkData.childPaycostamt = "";
              break;
            case "是否支付生活费":
              this.Children.PayAlimony = false;
              this.checkData.childPaycostamt = "";
              break;
            case "父母是否在世":
              this.parent.livingOrNot = false;
              this.checkData.parentHealth = "";
              this.checkData.parentPayalimony = "";
              this.checkData.parentWork = "";
              this.checkData.parentInformed = "";
              this.checkData.parentIslivingtxt = "";
              this.checkData.parentHealthtxt = "";
              this.checkData.parentPayalimonytxt = "";
              this.checkData.parentIncome = "";
              break;
            case "是否有兄弟姐妹":
              this.siblings.siblingsOrNot = false;
              this.checkData.brothersIfhastxt = "";
              break;
            case "是否为常住地址":
              this.address.permanent = true;
              break;
          }
        } else if (name == "1") {
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
              this.reqd = 'required';
              break;
            case "同城工作生活":
              this.marriage.workingLivingInf = true;
              break;
            case "是否有子女":
              this.Children.ChildrenOrNot = true;
              break;
            case "是否支付生活费":
              this.Children.PayAlimony = true;
              break;
            case "父母是否在世":
              this.parent.livingOrNot = true;
              break;
            case "是否有兄弟姐妹":
              this.siblings.siblingsOrNot = true;
              break;
            case "是否为常住地址":
              this.address.permanent = false;
              this.checkData.aisresidenttxt = "";
              break;
          }
        } else if (hidLabel == "婚姻状况") {
          if (name == "02" || name == "03") {
            this.marriage.couple = true;
          } else {
            this.marriage.couple = false;
            this.marriage.workingCondition = false;
            this.marriage.workingLivingInf = false;
            this.checkData.spouseWork = "";
            this.checkData.spouseWorktype = "";
            this.checkData.spouseIncome = "";
            this.checkData.spouseSamecity = "";
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
            this.hireProvincd = res.data;
            this.checkData.workCounty = "";
            this.checkData.workCountyName = "";
            this.hireTown = "";
          } else {
            this.$message.error('查询失败');
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
            this.$message.error('查询失败');
          }
        })
      },
      setCountry(item) {
        this.checkData.workCounty = item;
      },
      makeSureBtn() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$confirm('您确定操作？', '提示', {
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
      canc() {
        this.Confirm = false;
      },
      closed() {
        this.Confirm = false;
      },
      CFsave() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.checkData.selfpremisesArea = this.acreage;
            this.checkData.selfhasProportion = this.Percent;
            this.checkData.workProvinceName = this.$refs.province.selectedLabel;
            this.checkData.workCityName = this.$refs.city.selectedLabel;
            this.checkData.workCountyName = this.$refs.country.selectedLabel;
            this.checkData.hirecomKind = this.$refs.industry.selectedLabel;
            this.btnnn();
            this.post("/creauditInfo/addOrUpdate", this.checkData).then(res => {
              if (res.statusCode == 200) {
                this.Confirm = false;
                this.AreaNPercent();
                this.$message({
                  message: '提交成功!',
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
                this.Confirm = false;
                this.$message.error('提交失败，请稍后再试！');
                this.mountC();
              }
            });
          } else {
            this.Confirm = false;
            this.$message.error('提交失败，有必填项未填写！');
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
            val == "00" || val == "03" ? this.marriage.workingCondition = true : this.marriage.workingCondition =
              false;
            break;
          case 15:
            val == 0 || val == null ? this.marriage.workingLivingInf = false : this.marriage.workingLivingInf =
              true;
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
            this.checkData.selfpremisesArea = this.formatNumber(this.checkData.selfpremisesArea, 2, 0) + 'm²';
            this.acreage = this.checkData.selfpremisesArea.slice(0, -2).split(",").join('');
            break;
          case "占股比例":
            if (this.checkData.selfhasProportion.indexOf('%') != -1) {
              this.checkData.selfhasProportion = this.checkData.selfhasProportion.slice(0, -1);
            }
            this.checkData.selfhasProportion = this.formatNumber(this.checkData.selfhasProportion, 2, 0) + '%';
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
          this.checkData.iloanTerm = e.target.value = val;
        } else if (val >= 1 && val > 999) {
          this.checkData.iloanTerm = e.target.value = val = 999;
        } else {
          this.checkData.iloanTerm = e.target.value = val = " ";
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
          this.Children.ChildCount = false;
        } else {
          this.checkData.childCount = " ";
          this.Children.ChildCount = true;
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
      formatSC(el, val) {
        switch (el) {
          case "月还款":
            this.checkData.fbalance = this.formatNumber(this.checkData.fbalance, 2, 0);
            break;
          case "借款金额":
            this.checkData.iloanAmt = this.formatNumber(this.checkData.iloanAmt, 2, 0);
            break;
          case "月均工资":
            this.checkData.avgsalaryamt = this.formatNumber(this.checkData.avgsalaryamt, 2, 0);
            break;
          case "注册资金":
            this.checkData.regcapitalamt = this.formatNumber(this.checkData.regcapitalamt, 2, 0);
            break;
          case "月利润":
            this.checkData.profitamountmamt = this.formatNumber(this.checkData.profitamountmamt, 2, 0);
            break;
          case "月还款/租金":
            this.checkData.monthrentamt = this.formatNumber(this.checkData.monthrentamt, 2, 0);
            break;
          case "近一年利润":
            this.checkData.oneYearProfitamt = this.formatNumber(this.checkData.oneYearProfitamt, 2, 0);
            break;
          case "配偶收入":
            this.checkData.spouseIncome = this.formatNumber(this.checkData.spouseIncome, 2, 0);
            break;
          case "生活费支付":
            this.checkData.childPaycostamt = this.formatNumber(this.checkData.childPaycostamt, 2, 0);
            break;
          case "父母收入":
            this.checkData.parentIncome = this.formatNumber(this.checkData.parentIncome, 2, 0);
            break;
          case "开销":
            this.checkData.fconsumption = this.formatNumber(this.checkData.fconsumption, 2, 0);
            break;
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
      ElInputStyle(val) {
        if (val == "50%") {
          for (var i = 0; i < this.Pwidth.length; i++) {
            this.Pwidth[i].style.width = 150 + "px";
          };
          for (var i = 0; i < this.inputWidth.length; i++) {
            this.inputWidth[i].style.width = 553 + "px";
          };
          for (var i = 0; i < this.Txawidth.length; i++) {
            this.Txawidth[i].style.width = 'calc( 100% - 295px)';
          };
          this.Txawidth[14].style.width = 'calc( 100% - 260px)';
          this.Txawidth[22].style.width = 'calc( 100% - 260px)';
          this.CFwidth[0].style.minWidth = 1665 + "px";
          this.comaddressb[0].style.paddingLeft = 674 + "px";
          this.Alertbtn[0].style.marginLeft = "250px";
        } else if (val == "100%") {
          for (var i = 0; i < this.Pwidth.length; i++) {
            this.Pwidth[i].style.width = 200 + "px";
          };
          for (var i = 0; i < this.inputWidth.length; i++) {
            this.inputWidth[i].style.width = "calc( 50% + 200px )";
          };
          for (var i = 0; i < this.Txawidth.length; i++) {
            this.Txawidth[i].style.width = 'calc( 50% + 158px )';
          };
          this.Txawidth[14].style.width = "calc( 50% + 200px )";
          this.Txawidth[22].style.width = "calc( 50% + 200px )";
          this.CFwidth[0].style.minWidth = 1665 + "px";
          this.comaddressb[0].style.paddingLeft = 826 + "px";
          this.Alertbtn[0].style.marginLeft = "250px";
        }
      },
      mountM() {
        this.checkData.fbalance ? this.checkData.fbalance = this.formatNumber(this.checkData.fbalance, 2, 0) : this.checkData
          .fbalance;
        this.checkData.iloanAmt ? this.checkData.iloanAmt = this.formatNumber(this.checkData.iloanAmt, 2, 0) : this.checkData
          .iloanAmt;
        this.checkData.avgsalaryamt ? this.checkData.avgsalaryamt = this.formatNumber(this.checkData.avgsalaryamt, 2, 0) :
          this.checkData.avgsalaryamt;
        this.checkData.regcapitalamt ? this.checkData.regcapitalamt = this.formatNumber(this.checkData.regcapitalamt, 2,
          0) : this.checkData.regcapitalamt;
        this.checkData.profitamountmamt ? this.checkData.profitamountmamt = this.formatNumber(this.checkData.profitamountmamt,
          2, 0) : this.checkData.profitamountmamt;
        this.checkData.monthrentamt ? this.checkData.monthrentamt = this.formatNumber(this.checkData.monthrentamt, 2, 0) :
          this.checkData.monthrentamt;
        this.checkData.oneYearProfitamt ? this.checkData.oneYearProfitamt = this.formatNumber(this.checkData.oneYearProfitamt,
          2, 0) : this.checkData.oneYearProfitamt;
        this.checkData.spouseIncome ? this.checkData.spouseIncome = this.formatNumber(this.checkData.spouseIncome, 2, 0) :
          this.checkData.spouseIncome;
        this.checkData.childPaycostamt ? this.checkData.childPaycostamt = this.formatNumber(this.checkData.childPaycostamt,
          2, 0) : this.checkData.childPaycostamt;
        this.checkData.parentIncome ? this.checkData.parentIncome = this.formatNumber(this.checkData.parentIncome, 2, 0) :
          this.checkData.parentIncome;
        this.checkData.fconsumption ? this.checkData.fconsumption = this.formatNumber(this.checkData.fconsumption, 2, 0) :
          this.checkData.fconsumption;
        this.checkData.selfpremisesArea ? this.checkData.selfpremisesArea = this.formatNumber(this.checkData.selfpremisesArea,
            2, 0) :
          this.checkData.selfpremisesArea;
        this.checkData.selfhasProportion ? this.checkData.selfhasProportion = this.formatNumber(this.checkData.selfhasProportion,
            2, 0) :
          this.checkData.selfhasProportion;
      },
      mountC() {
        // 获取查询列表数据
        this.post("/creauditInfo/queryCreauditInfoObj", {
          applyId: this.getParams.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.checkData = res.data;
            this.Percent = this.checkData.selfhasProportion
            this.acreage = this.checkData.selfpremisesArea;
            this.checkData.applyId = this.getParams.applyId;
            this.mountM();
            this.AreaNPercent();
            this.checkData.aaddress ? this.checkData.aaddress = this.checkData.aaddress.replace(/null/g, '') : this
              .checkData.aaddress;
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
      }
    },
    mounted() {
      this.mountedInf();
      // 省    
      this.post("/credit/queryProvince").then(res => {
        this.hirecomAddress = res.data;
      });
      // 所属行业 
      this.post("/credit/industry").then(res => {
        this.hirecomKind = res.data;
      })
    },
    props: ["myWatch"],
    watch: {
      myWatch: function (val) {
        this.ElInputStyle(val);
      }
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

  .bottom {
    margin-bottom: 4px;
  }

  /* 最下面的 弹窗样式 */

  .mWidth {
    width: 100%;
  }

  /* content下边距+左边距 */

  .padd {
    padding: 0 0 4px 21px;
  }

  /* 上网信息-两行select下拉 居中 */

  .internet_top {
    top: -11px;
  }

  .hint {
    color: #ff7676;
    font-size: 12px;
    display: inline-block;
    width: 100%;
    font-style: normal;
    position: absolute;
    top: -17px;
  }

  .red {
    color: #ff7676;
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
  }

  .btn_wrap {
    height: 60px;
  }

  .btn {
    margin: 20px 0 0 250px;
  }

  .specialInput {
    width: 480px;
    width: calc( 100% - 260px);
  }

  .internet_sel {
    padding-left: 190px;
  }

  .internet_textarea {
    padding-left: 235px;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  /* 上网查询左侧label */

  .CreditForm .InternetInf_left_label {
    display: inline-block;
    width: 223px;
    font-size: 14px;
    font-weight: normal;
  }

  .CreditForm .InternetInf_right_label {
    width: 223px;
  }

  .Family_right_label {
    width: 223px;
  }

  /* 工作信息 */

  .Working_middle {
    padding-left: 211px;
  }

  .Working_right {
    padding-left: 150px;
  }

  .Working_input,
  .result_textarea,
  .family_textarea {
    padding-left: 235px;
  }

  .CreditForm_InternetInf li,
  .CreditForm_CheckId li,
  .CreditForm_FamilyInf_edit li
  /* 家庭信息 */

    {
    clear: both;
    vertical-align: middle;
  }

  .CreditForm_InternetInf li p,
  /*  上网查询 */

  .CreditForm_CheckId p,
  /* 核实信息 ul */

  .CreditForm_FamilyInf_edit li p,
  /* 家庭信息 */

  .CreditForm_live_ul_left li
  /* 居住情况 */

    {
    float: left;
    width: 33.3%;
    position: relative;
    vertical-align: middle;
    margin-top: 10px;
  }

  .CreditForm_InternetInf li p:nth-of-type(even),
  /*  上网查询 */

  .CreditForm_CheckId li p:nth-of-type(even),
  /* 核实信息 ul */

  .CreditForm_FamilyInf_edit li p:nth-of-type(even)
  /* 家庭信息 */

    {
    width: 66.6%
  }

  .CreditForm .CreditForm_FamilyInf_edit li p:nth-of-type(even) span {
    border: none;
  }

  /* --------------------------工作信息 + 私营企业--------------------- */

  .WorkInfs_left_label {
    width: 223px;
  }

  .CreditForm_WorkInfs_ul_right,
  /* 工作信息 */

  .CreditForm_CompanyInfs_ul_right
  /* 私营企业 */

    {
    float: left;
    width: 33.3%;
  }

  .CreditForm_WorkInfs_ul_left,
  /* 工作信息 */

  .CreditForm_CompanyInfs_ul_left
  /* 私营企业 */

    {
    width: 66.6%;
    float: left;
  }

  .CheckId_right_label
  /* 第三列里---即：第二列ul */

    {
    width: 140px;
  }

  .CreditForm_WorkInfs_ul_left li,
  .CreditForm_CompanyInfs_ul_left li {
    float: left;
    width: 50%;
    margin-top: 14px;
  }

  .CreditForm_WorkInfs_ul_right li,
  /* 工作信息 */

  .CreditForm_CompanyInfs_ul_right li {
    margin-top: 14px;
  }

  .CreditForm_result {
    padding-top: 14px;
  }

</style>
