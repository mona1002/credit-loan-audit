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
          <ul>
            <li>
              <p>
                <i class="hint"> </i>
                <!-- <span>{{myWatch+"aaa"}}</span> -->
                <label class="InternetInf_left_label" @click="NewPage(0)">客户在法网是否有被执行信息：</label>
                <el-select class="internet_top" v-model="checkData.wbeexEcuted" placeholder="请选择" style="minWidth:150px;" @change="commentShow1(checkData.wbeexEcuted,Internet[0])">
                  <el-option v-for="item in beexEcuted" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.excude" class="internet_textarea"> 输入长度不能超过500</b>
                  <!-- <span v-if="this.checkData.wnetPhonetxt.length>=6"> neirong </span> -->
                  <!-- <b v-show="this.checkData.wbeexEcutedtxt.length==10" class="internet_textarea"> 输入长度不能超过500</b> -->

                </i>
                <label class="InternetInf_right_label"> 执行信息说明： </label>
                <!-- 此处为方法备用 -->
                <!-- <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="checkData.wbeexEcutedtxt" @compositionend.native="wordarea(checkData.wbeexEcutedtxt,'执行信息')"
                  @keyup.native="wordarea(checkData.wbeexEcutedtxt,'执行信息')">
                </el-input> -->
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wbeexEcutedtxt"
                  @compositionend.native="wordarea(checkData.wbeexEcutedtxt,'执行信息')" @keyup.native="wordarea(checkData.wbeexEcutedtxt,'执行信息')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label" @click="NewPage(0)">单位在法网是否有被执行信息：</label>
                <el-select class="internet_top" v-model="checkData.wnetHirecom" style="minWidth:150px;" placeholder="请选择" @change="commentShow1(checkData.wnetHirecom,Internet[1])">
                  <el-option v-for="item in netHirecom" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS1">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.comExcude" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位执行信息说明：</label>
                <el-input type="textarea" resize="none" :maxlength="this.textareaL" :rows="2" placeholder="请输入内容" v-model="checkData.wnetHirecomtxt"
                  @compositionend.native="wordarea(checkData.wnetHirecomtxt,'单位执行信息')" @keyup.native="wordarea(checkData.wnetHirecomtxt,'单位执行信息')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <!-- <div  class="red" style="display:inlineBlock"> 该项为必填项</div> -->
                <i class="hint">
                  <span v-show="errors.has('BrokenRecord')" class="internet_sel">{{ errors.first('BrokenRecord') }}</span>
                </i>
                <label class="InternetInf_left_label" @click="NewPage(1)">
                  <span class="red"> * </span>客户在失信网是否有失信记录：</label>
                <el-select class="internet_top" v-model="checkData.wnetEcutedBrea" placeholder="请选择" name="BrokenRecord" v-validate="'required'"
                  @change="commentShow1(checkData.wnetEcutedBrea,Internet[2])">
                  <el-option v-for="item in netEcutedBrea" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS2">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.looseCre" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 失信记录说明： </label>
                <el-input class="internet_top" type="textarea" resize="none" :maxlength="this.textareaL" :rows="2" placeholder="请输入内容" v-model="checkData.wnetEcutedBreatxt"
                  @compositionend.native="wordarea(checkData.wnetEcutedBreatxt,'失信记录')" @keyup.native="wordarea(checkData.wnetEcutedBreatxt,'失信记录')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label" @click="NewPage(1)">单位在失信网是否有失信记录：</label>
                <el-select class="internet_top" v-model="checkData.wnetHirecomBrea" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomBrea,Internet[3])">
                  <el-option v-for="item in netHirecomBrea" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS3">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.comLooseCre" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位失信记录说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomBreatxt"
                  @compositionend.native="wordarea(checkData.wnetHirecomBreatxt,'单位失信')" @keyup.native="wordarea(checkData.wnetHirecomBreatxt,'单位失信')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint">
                  <span v-show="errors.has('abnormalPhone')" class="internet_sel">{{ errors.first('abnormalPhone') }}</span>
                </i>
                <label class="InternetInf_left_label" @click="NewPage(2)">
                  <span class="red"> * </span>网上搜索借款人手机是否有异常：</label>
                <el-select class="internet_top" v-model="checkData.wnetPhone" placeholder="请选择" @change="commentShow1(checkData.wnetPhone,Internet[4])"
                  name="abnormalPhone" v-validate="'required'">
                  <el-option v-for="item in netPhone" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS4">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.phoneOUtS" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 手机异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetPhonetxt"
                  @compositionend.native="wordarea(checkData.wnetPhonetxt,'手机异常')" @keyup.native="wordarea(checkData.wnetPhonetxt,'手机异常')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位名称是否有异常：</label>
                <el-select v-model="checkData.wnetHirecomName" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomName,Internet[5])">
                  <el-option v-for="item in netHirecomName" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS5">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.ComName" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位名称异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomNametxt"
                  @compositionend.native="wordarea(checkData.wnetHirecomNametxt,'单位名称异常')" @keyup.native="wordarea(checkData.wnetHirecomNametxt,'单位名称异常')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位电话是否有异常：</label>
                <el-select v-model="checkData.wnetHirecomPhone" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomPhone,Internet[6])">
                  <el-option v-for="item in netHirecomPhone" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS6">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.comphoneOUtS" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位电话异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomPhonetxt"
                  @compositionend.native="wordarea(checkData.wnetHirecomPhonetxt,'单位电话异常')" @keyup.native="wordarea(checkData.wnetHirecomPhonetxt,'单位电话异常')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label" @click="NewPage(2)">网上搜索借款人现居住地址和房产地址是否有异常：</label>
                <el-select class="internet_top" v-model="checkData.wnetAddrandEstate" placeholder="请选择" @change="commentShow1(checkData.wnetAddrandEstate,Internet[7])">
                  <el-option v-for="item in netAddrandEstate" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS7">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.address" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 地址异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetAddrandEstatetxt"
                  @compositionend.native="wordarea(checkData.wnetAddrandEstatetxt,'地址异常')" @keyup.native="wordarea(checkData.wnetAddrandEstatetxt,'地址异常')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label" @click="NewPage(2)">网搜单位地址是否有异常：</label>
                <el-select v-model="checkData.wnetHirecomAddress" placeholder="请选择" @change="commentShow1(checkData.wnetHirecomAddress,Internet[8])">
                  <el-option v-for="item in netHirecomAddress" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS8">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.comAddress" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 单位地址异常信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetHirecomAddresstxt"
                  @compositionend.native="wordarea(checkData.wnetHirecomAddresstxt,'单位地址异常')" @keyup.native="wordarea(checkData.wnetHirecomAddresstxt,'单位地址异常')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint">
                  <span v-show="errors.has('registerInfor')" class="internet_sel">{{ errors.first('registerInfor') }}</span>
                </i>
                <label class="InternetInf_left_label" @click="NewPage(3)">
                  <span class="red"> * </span>当地工商网查询企业基本信息中是否有登记：</label>
                <el-select class="internet_top" v-model="checkData.wnetCompany" placeholder="请选择" @change="commentShow1(checkData.wnetCompany,Internet[9])"
                  name="registerInfor" v-validate="'required'">
                  <el-option v-for="item in netCompany" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS9">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.loginOrNot" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 工商登记信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetCompanytxt"
                  @compositionend.native="wordarea(checkData.wnetCompanytxt,'工商登记')" @keyup.native="wordarea(checkData.wnetCompanytxt,'工商登记')">
                </el-input>
              </p>
            </li>
            <li>
              <p>
                <i class="hint"></i>
                <label class="InternetInf_left_label" @click="NewPage(4)">客户工作单位在全国组织代码查询中是否存在：</label>
                <el-select class="internet_top" v-model="checkData.wnetAddrstate" placeholder="请选择" @change="commentShow1(checkData.wnetAddrstate,Internet[10])">
                  <el-option v-for="item in netAddrstate" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p v-show="this.InternetShow.commentS10">
                <i class="hint">
                  <b v-show="this.Wordhint.Internet.institutionCode" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class="InternetInf_right_label"> 组织机构代码信息说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.wnetAddrstatetxt"
                  @compositionend.native="wordarea(checkData.wnetAddrstatetxt,'组织机构代码')" @keyup.native="wordarea(checkData.wnetAddrstatetxt,'组织机构代码')">
                </el-input>
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
        <div class="CreditForm_CheckId">
          <ul class="CreditForm_CheckId_ul_left">
            <li>
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
                  <b v-show="this.Wordhint.checkID.answerDec" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class=" InternetInf_right_label "> 接听说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.iisselftxt"
                  @compositionend.native="wordarea(checkData.iisselftxt,'接听说明')" @keyup.native="wordarea(checkData.iisselftxt,'接听说明')">
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
                  <b v-show="this.Wordhint.checkID.Declear" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class=" InternetInf_right_label "> 说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.iloanBeforetxt"
                  @compositionend.native="wordarea(checkData.iloanBeforetxt,'说明')" @keyup.native="wordarea(checkData.iloanBeforetxt,'说明')">
                </el-input>
              </p>
            </li>
            <li>
              <p v-show="this.checkId.loanNot">
                <i class="hint"> </i>
                <label class="InternetInf_left_label">借款金额[元]：</label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanAmt" @blur="formatMoney(checkData.iloanAmt,$event,'借款金额')">
                </el-input>
              </p>
              <p v-show="this.checkId.loanNot">
                <i class="hint">
                  <!-- <b v-show="this.Wordhint.checkID.Declear" class="internet_textarea"> 输入长度不能超过500</b> -->
                  <!-- <span v-show="this.reg.mMontyP" class="red"> 请输入1-999之间的整数</span> -->
                </i>
                <label class=" InternetInf_right_label "> 借款期限[月]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.iloanTerm" @blur="mMonth(checkData.iloanTerm,$event,'月均工资')">
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
              <p v-show="this.checkId.loanNot">
                <i class="hint">
                  <b v-show="this.Wordhint.checkID.loanPurposed" class="internet_textarea"> 输入长度不能超过500</b>
                </i>
                <label class=" InternetInf_right_label "> 借款用途详细说明： </label>
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" v-model="checkData.iloanPurposetxt"
                  @compositionend.native="wordarea(checkData.iloanPurposetxt,'详细用途')" @keyup.native="wordarea(checkData.iloanPurposetxt,'详细用途')">
                </el-input>
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
        <div class="CreditForm_WorkInfs">
          <ul class="CreditForm_WorkInfs_ul_left">
            <li style="width:100%">
              <i class="hint">
                <b v-show="this.Wordhint.Working.address" class="Working_input"> 输入长度不能超过50</b>
              </i>
              <label class="InternetInf_left_label">工作单位：</label>
              <input type="text" class="specialInput" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirecomName"
                @compositionend="wordInput50(checkData.hirecomName,'工作单位')" @keydown="wordInput50(checkData.hirecomName,'工作单位')"
                @keyup="wordInput50(checkData.hirecomName,'工作单位')">

              <!-- <el-input type="text" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirecomName" @compositionend.native="wordInput50(checkData.hirecomName,'工作单位')"
                @keydown.native="wordInput50(checkData.hirecomName,'工作单位')" @keyup.native="wordInput50(checkData.hirecomName,'工作单位')">
              </el-input> -->
            </li>
            <li>
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
              <el-select v-model="checkData.hirecomKind" placeholder="请选择">
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
              <!-- 提示语  name="adddd" v-validate="'required|phone'"  -->
              <!-- <span v-show="errors.has('adddd')" class="help is-danger">{{ errors.first('adddd') }}</span> -->
            </li>
            <li>
              <i class="hint">
                <!-- <b v-show="this.Wordhint.Working.level" class="Working_input" > 输入长度不能超过40</b> -->
                <span class="Working_middle" v-show="this.reg.mphoneM">请输入：区号+5-8位数字</span>
                <span class="Working_middle" v-show="this.reg.mphoneR">不可输入：11111，12345等</span>
              </i>
              <label class="WorkInfs_left_label">单位电话：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.workTel" @blur="mPhone(checkData.workTel,$event)">
              </el-input>
            </li>
            <li>
              <i class="hint">
                <!-- <b v-show="this.Wordhint.Working.level" class="Working_middle" >请输入数字</b> -->
              </i>
              <label class="InternetInf_left_label">月均工资[元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.avgsalaryamt" @blur="formatMoney(checkData.avgsalaryamt,$event,'月均工资')">
              </el-input>
            </li>
            <li>
              <i class="hint">
                <!-- <b v-show="this.Wordhint.Working.level" class="Working_middle" >请输入数字</b> -->
                <span v-show="this.reg.mpayDay" class="Working_middle"> 请填入1-31之间的数字</span>
              </i>
              <label class="WorkInfs_left_label">每月发薪日：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.payDay" @blur="mday(checkData.payDay,$event)">
              </el-input>
            </li>
            <!-- 三级联动：单位地址：	hirecomAddress  -->
            <li style="width:100%">
              <i class="hint">
                <b v-show="this.Wordhint.Working.ComAdr" class="comaddressb" style="paddingLeft:826px">输入长度不能超过100</b>
              </i>
              <label class="InternetInf_left_label ">单位地址 ：</label>
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
              <el-input type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.workAddress" @compositionend.native="wordInput100(checkData.workAddress,'单位具体地址')"
                @keyup.native="wordInput100(checkData.workAddress,'单位具体地址')">
              </el-input>
            </li>
            <li style="width:100%">
              <i class="hint">
                <b v-show="this.Wordhint.Working.preComName" class="Working_input"> 输入长度不能超过50</b>
              </i>
              <label class="InternetInf_left_label">前单位名称：</label>
              <input type="text" class="specialInput" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirelastComname"
                @compositionend="wordInput50(checkData.hirelastComname,'前单位')" @keyup="wordInput50(checkData.hirelastComname,'前单位')">
              <!-- <el-input style="width:70%;" type="text" :maxlength="this.longInputL" placeholder="请输入内容" v-model="checkData.hirelastComname" @compositionend.native="wordInput50(checkData.hirelastComname,'前单位')"
                @keyup.native="wordInput50(checkData.hirelastComname,'前单位')">
              </el-input> -->
            </li>
          </ul>
          <!-- style="minWidth:1370px;" -->
          <ul class="CreditForm_WorkInfs_ul_right" style="paddingTop:62px">
            <li>
              <i class="hint">
                <b v-show="this.Wordhint.Working.department" class="Working_middle">输入长度不能超过20</b>
              </i>
              <label class=" CheckId_right_label ">所在部门： </label>
              <el-input type="text" placeholder="请输入内容" :maxlength="this.shotInputL" v-model="checkData.hiredepartment" @compositionend.native="wordInput20(checkData.hiredepartment,'部门')"
                @keyup.native="wordInput20(checkData.hiredepartment,'部门')">
              </el-input>
            </li>
            <li>
              <i class="hint"></i>
              <!--   @change="hireDate(checkData.entryDate,$event)"-->
              <label class=" CheckId_right_label "> 入职时间： </label>
              <el-date-picker v-model="checkData.entryDate" style="maxWidth:200px;minWidth:150px" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
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
            <li>
              <i class="hint">
                <b v-show="this.reg.mpostCode" class="Working_middle">请输入6位邮编</b>
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
            <li ref="compTypeDiv">
              <i class="hint">
                <span v-show="errors.has('companyType')" class="Working_input">{{ errors.first('companyType') }}</span>
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
                <span v-show="errors.has('registerDate')" class="Working_middle">{{ errors.first('registerDate') }}</span> </i>
              <label class=" WorkInfs_left_label ">
                <span class="red"> * </span> 公司注册时间： </label>
              <el-date-picker style="maxWidth:200px;minWidth:150px" v-model="checkData.compegDate" type="date" placeholder="选择日期" :picker-options="pickerOptions1"
                name="registerDate" v-validate="reqd">
              </el-date-picker>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">注册资金[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.regcapitalamt" @blur="formatMoney(checkData.regcapitalamt,$event,'注册资金')">
              </el-input>
              <!-- <el-select v-model="checkData.selfregcapital" placeholder="请选择">
                <el-option v-for="item in selfregcapital" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->
            </li>
            <li>
              <i class="hint"> </i>
              <label class="WorkInfs_left_label">占股比例：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfhasProportion" @blur="businessArea(checkData.selfhasProportion,$event,'占股比例','%')">
              </el-input>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">月还款额/租金[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.monthrentamt" @blur="formatMoney(checkData.monthrentamt,$event,'月还款/租金')">
              </el-input>
            </li>
            <li>
              <i class="hint"> </i>
              <label class="WorkInfs_left_label">营业面积：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfpremisesArea" @blur="businessArea(checkData.selfpremisesArea,$event,'营业面积','m²')">
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
            <li>
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">近一年利润[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.oneYearProfitamt" @blur="formatMoney(checkData.oneYearProfitamt,$event,'近一年利润')">
              </el-input>
            </li>
            <li>
              <i class="hint">
                <b v-show="this.Wordhint.company.Supplier" class="Working_middle">输入长度不能超过50</b>
              </i>
              <label class="WorkInfs_left_label">第一供销商：</label>
              <el-input type="text" placeholder="请输入内容" :maxlength=" this.longInputL" v-model="checkData.firstSuppliers" @compositionend.native="wordInput50(checkData.firstSuppliers,'供销商')"
                @keydown.native="wordInput50(checkData.firstSuppliers,'供销商')" @keyup.native="wordInput50(checkData.firstSuppliers,'供销商')">
              </el-input>
            </li>
          </ul>
          <ul class="CreditForm_CompanyInfs_ul_right" style="paddingTop:62px">
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
                <b v-show="this.workInf.empNumber" class="Working_middle">输入内容不得大于5位数</b>
              </i>
              <label class=" CheckId_right_label "> 员工人数： </label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.selfempCount" @blur="EmpNum(checkData.selfempCount)">
              </el-input>
            </li>
            <li style="paddingTop:18px">
              <i class="hint"> </i>
              <label class=" CheckId_right_label "> 每月净利润额[万元]：</label>
              <el-input type="text" placeholder="请输入内容" v-model="checkData.profitamountmamt" @blur="formatMoney(checkData.profitamountmamt,$event,'月利润')">
              </el-input>
            </li>
            <li>
              <i class="hint">
                <b v-show="this.Wordhint.company.distributor" class="Working_middle">输入长度不能超过50</b>
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
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">家庭信息</span>
        </template>
        <div class="CreditForm_FamilyInf">
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
                <el-input type="text" placeholder="请输入内容" v-model="checkData.spouseIncome" @blur="formatMoney(checkData.spouseIncome,$event,'配偶收入')">
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
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" style="width:49%" v-model="checkData.childCounttxt"
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
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" style="width:49%" v-model="checkData.childStatustxt"
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
                <el-select v-model="checkData.childIspaycost" placeholder="请选择" @change="commentShow1(checkData.childIspaycost,Internet[18])">
                  <el-option v-for="item in childIspaycost" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </li>
            <li v-show="this.Children.PayAlimony">
              <p>
                <i class="hint"> </i>
                <label class="InternetInf_left_label "> 生活费支付额度[元]： </label>
                <el-input type="text" placeholder="请输入内容" v-model="checkData.childPaycostamt" @blur="formatMoney(checkData.childPaycostamt,$event,'生活费支付')">
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
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" style="width:49%" v-model="checkData.parentIslivingtxt"
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
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" style="width:49%" v-model="checkData.parentHealthtxt"
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
                <el-input type="textarea" :rows="2" resize="none" :maxlength="this.shotTextareaL" placeholder="请输入内容" style="width:49%" v-model="checkData.parentPayalimonytxt"
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
                <el-input type="text" placeholder="请输入内容" v-model="checkData.parentIncome" @blur="formatMoney(checkData.parentIncome,$event,'父母收入')">
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
                <el-input type="text" placeholder="请输入内容" v-model="checkData.fconsumption" @blur="formatMoney(checkData.fconsumption,$event,'开销')">
                </el-input>
              </p>
              <p>
                <!-- 提示语 v-numbers  @blur="formatMoney(checkData.fbalance,$event)"    @blur="formattingMoney(checkData.fbalance)"  -->
                <i class="hint">
                <span v-show="errors.has('Paymonth')" class="family_textarea">{{ errors.first('Paymonth') }}</span>
                   </i>
                <label class="Family_right_label">
                  <span class="red"> * </span> 可以承受的月还款[元]： </label>
                <!-- <input type="text" placeholder="请输入内容" v-model.number="checkData.fbalance" name="Paymonth" v-numbers
                  v-validate="'required'"> -->
                <el-input type="text" placeholder="请输入内容" :rows="2" resize="none" :maxlength="this.shotTextareaL" v-model.number="checkData.fbalance"
                  @blur="formatMoney(checkData.fbalance,$event,'月还款')" name="Paymonth" v-validate="'required'">
                </el-input>
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
              <i class="hint"> </i>
              <label class="InternetInf_left_label ">同住者关系：</label>
              <el-select v-model="checkData.livingHouseHolds" placeholder="请选择">
                <el-option v-for="item in livingHouseHolds" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul class="CreditForm_live_ul_left">
            <li>
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
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">核对现住址</span>
        </template>
        <div class="CreditForm_check_reside">
          <ul class="CreditForm_check_reside_ul_left">
            <li>
              <i class="hint"></i>
              <label class="InternetInf_left_label ">现住址：</label>
              <span class="detail_inf oneline"> </span> {{this.checkData.aaddress}} </span>
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
          <p v-show="this.address.permanent" style="clear:both;width:100%">
            <i class="hint">
              <b v-show="this.Wordhint.address.permanentAddress" class="family_textarea"> 输入长度不能超过100</b>
            </i>
            <label class="InternetInf_left_label ">常住地址 ：</label>
            <input style="width:46%" type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.aisresidenttxt"
              @compositionend="wordInput100(checkData.aisresidenttxt,'常住地址')" @keyup="wordInput100(checkData.aisresidenttxt,'常住地址')">
            <!-- <el-input  type="text" :maxlength="this.longLongInputL" placeholder="请输入内容" v-model="checkData.aisresidenttxt"  @compositionend.native="wordInput100(checkData.aisresidenttxt,'常住地址')"
                @keyup.native="wordInput100(checkData.aisresidenttxt,'常住地址')">
            </el-input> -->
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
          <i class="hint">
            <span v-show="errors.has('conclusion')" class="result_textarea">{{ errors.first('conclusion') }}</span>
            <b v-show="this.Wordhint.result" class="result_textarea"> 输入长度不能超过500</b>
          </i>
          <p class="InternetInf_left_label" style="textAlign:right">
            <span class="red"> * </span>初审结果评价：</p>
          <!-- @click.native="this.adv" @mouseup.native="this.adv" -->
          <!-- <div style=" width:50%;background:red;"> -->

          <el-input type="textarea" :rows="5" resize="none" :maxlength="this.textareaL" placeholder="请输入内容" @compositionend.native="wordarea(checkData.oother,'评价')"
            @keyup.native="wordarea(checkData.oother,'评价')" v-model="checkData.oother" name="conclusion" v-validate="'required'">
          </el-input>
          <!-- </div> -->

        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-button type="primary" class="btn" @click="CFsave">确认</el-button> -->
    <!-- <el-button type="primary" @click="testVuex" style="position:fixed;top:50%;left:50%;">测试vuex</el-button> -->
    <el-button type="primary" class="btn" @click="makeSureBtn">确认</el-button>


    <!-- ==============================点击确认时提示弹框=================================== -->
    <div class="layer" v-show="Confirm">
      <!-- @touchmove.prevent  -->
      <div class="layerbox">
        <p>
          <span>询问</span>
          <i class="el-icon-close" @click="closed"></i>
        </p>
        <div>
          <p class="choces">您确定已填写好各项内容并提交？</p>
          <div class=buttonDiv>
            <!-- <el-button type="primary" @click="Cancle">取消</el-button>
            <el-button type="primary" @click="trueSure">确定</el-button> -->
            <el-button type="primary" @click="CFsave">确定</el-button>
            <el-button type="primary" @click="canc">取消</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        Pwidth: [],
        CFwidth: [],
        inputWidth: [],
        textareaPpraProj: [],
        comaddressb:[],
        shotInputL: 20,//20
        longInputL: 50,//50
        longLongInputL: 100,//100
        shotTextareaL: 200,//200
        textareaL: 500,//500
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
            // loanAmount:false,
            // loanExp:false,
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
        // workkkk:this.First(),
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
          // mphoneO: false,
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
      wordInput20(val, el) {
        console.log(val);
        console.log(val.length);
        if (val.length >= 10) {
          // console.log("不符合长度");
          // val = val.substr(0, 20);
          this.wordInput20SC(val, el);
        } else {
          this.wordInput20SCF(val, el);

        }
      },
      wordInput20SC(val, el) {
        switch (el) {
          // case "":  :break;
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
          // case "":  :break;
          case "职位级别":
            this.Wordhint.Working.level = false;
            break;
          case "部门":
            this.Wordhint.Working.department = false;
            break;

        }
      },
      wordInput50(val, el) {
        console.log(val);
        console.log(val.length);
        if (val.length >= 10) {
          // console.log("不符合长度");
          // val = val.substr(0, 40);
          this.wordInput50SC(val, el);
        } else {
          this.wordInput50SCF(val, el);
        }
      },
      wordInput50SC(val, el) {
        console.log("心事")
        switch (el) {
          // case "":  :break;
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
        console.log("心大师傅事")
        switch (el) {
          // case "":  :break;
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
          // case "":  :break;
          case "单位具体地址":
            val.length >= 10 ? this.Wordhint.Working.ComAdr = true : this.Wordhint.Working.ComAdr = false;
            break;
          case "常住地址":
            val.length >= 10 ? this.Wordhint.address.permanentAddress = true : this.Wordhint.address.permanentAddress =
              false;
            break;

        }
      },
      wordarea200(val, el) {
        console.log("ghlfdkjadshj")
        console.log(el);
        console.log(val.length);
        if (val.length >= 10) {
          console.log("<10");
          this.wordarea200SC(val, el);
        } else {
          console.log(">10");
          this.wordarea200SCF(val, el);
        }
      },
      wordarea200SC(val, el) {
        switch (el) {
          // case "":  :break;
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
          // case "":  :break;
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
      wordarea(val, el, txt) {
        // console.log("keydown") 
        // console.log(val)
        console.log(val.length)
        // console.log(el)  
        if (val.length <= 8 && val.length >= 0) {
          console.log("符合长度");
          console.log(val.length)
          //  this.Wordhint.excude=false;
          //  console.log(this.Wordhint.excude)
          this.wordareaSCF(val, el);
        }
        // else if(val.length >9){
        //    this.Wordhint.excude=true;
        // this.wordareaSC(val,el);
        // }
        else {
          //  this.Wordhint.excude=true;
          this.wordareaSC(val, el);
        }
      },
      wordareaSC(val, el) {
        console.log("显示")
        switch (el) {
          // case "":  :break;
          case "执行信息":
            // this.checkData.wbeexEcutedtxt = val;
            this.Wordhint.Internet.excude = true;
            break;
          case "单位执行信息":
            // this.checkData.wnetHirecomtxt = val;
            this.Wordhint.Internet.comExcude = true;
            break;
          case "失信记录":
            // this.checkData.wnetEcutedBreatxt = val;
            this.Wordhint.Internet.looseCre = true;
            break;
          case "单位失信":
            // this.checkData.wnetHirecomBreatxt = val;
            this.Wordhint.Internet.comLooseCre = true;
            break;
          case "手机异常":
            // this.checkData.wnetPhonetxt = val;
            this.Wordhint.Internet.phoneOUtS = true;
            break;
          case "单位名称异常":
            // this.checkData.wnetHirecomNametxt = val;
            this.Wordhint.Internet.ComName = true;
            break;
          case "单位电话异常":
            // this.checkData.wnetHirecomPhonetxt = val;
            this.Wordhint.Internet.comphoneOUtS = true;
            break;
          case "地址异常":
            // this.checkData.wnetAddrandEstatetxt = val;
            this.Wordhint.Internet.address = true;
            break;
          case "单位地址异常":
            // this.checkData.wnetHirecomAddresstxt = val;
            this.Wordhint.Internet.comAddress = true;
            break;
          case "公司上登记":
            // this.checkData.wnetCompanytxt = val;
            this.Wordhint.Internet.loginOrNot = true;
            break;
          case "组织机构代码":
            // this.checkData.wnetAddrstatetxt = val;
            this.Wordhint.Internet.institutionCode = true;
            break;
          case "接听说明":
            // this.checkData.iisselftxt = val;
            this.Wordhint.checkID.answerDec = true;
            break;
          case "说明":
            // this.checkData.iloanBeforetxt = val;
            this.Wordhint.checkID.Declear = true;
            break;
          case "详细用途":
            // this.checkData.iloanPurposetxt = val;
            this.Wordhint.checkID.loanPurposed = true;
            break;
          case "评价":
            // this.checkData.oother = val;
            this.Wordhint.result = true;
            break;
        }
      },
      wordareaSCF(val, el) { //隐藏textare提示语
        console.log("隐藏")
        switch (el) {
          // case "":  :break;
          case "执行信息":
            // this.checkData.wbeexEcutedtxt = val;
            this.Wordhint.Internet.excude = false;
            break;
          case "单位执行信息":
            // this.checkData.wnetHirecomtxt = val;
            this.Wordhint.Internet.comExcude = false;
            break;
          case "失信记录":
            // this.checkData.wnetEcutedBreatxt = val;
            this.Wordhint.Internet.looseCre = false;
            break;
          case "单位失信":
            // this.checkData.wnetHirecomBreatxt = val;
            this.Wordhint.Internet.comLooseCre = false;
            break;
          case "手机异常":
            // this.checkData.wnetPhonetxt = val;
            this.Wordhint.Internet.phoneOUtS = false;
            break;
          case "单位名称异常":
            // this.checkData.wnetHirecomNametxt = val;
            this.Wordhint.Internet.ComName = false;
            break;
          case "单位电话异常":
            // this.checkData.wnetHirecomPhonetxt = val;
            this.Wordhint.Internet.comphoneOUtS = false;
            break;
          case "地址异常":
            // this.checkData.wnetAddrandEstatetxt = val;
            this.Wordhint.Internet.address = false;
            break;
          case "单位地址异常":
            // this.checkData.wnetHirecomAddresstxt = val;
            this.Wordhint.Internet.comAddress = false;
            break;
          case "公司上登记":
            // this.checkData.wnetCompanytxt = val;
            this.Wordhint.Internet.loginOrNot = false;
            break;
          case "组织机构代码":
            // this.checkData.wnetAddrstatetxt = val;
            this.Wordhint.Internet.institutionCode = false;
            break;
          case "接听说明":
            // this.checkData.iisselftxt = val;
            this.Wordhint.checkID.answerDec = false;
            break;
          case "说明":
            // this.checkData.iloanBeforetxt = val;
            this.Wordhint.checkID.Declear = false;
            break;
          case "详细用途":
            // this.checkData.iloanPurposetxt = val;
            this.Wordhint.checkID.loanPurposed = false;
            break;
          case "评价":
            // this.checkData.oother = val;
            this.Wordhint.result = false;
            break;

        }
      },
      // wordareaHint(el){
      //   switch(el){
      //     case "": :break;
      //     case "": :break;

      //   }
      // },
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
              console.log("adnei")
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
              if (name == 0 || name == '') {
                this.reqd = '';
              }
              break;
            case "同城工作生活":
              this.marriage.workingLivingInf = false;
              this.checkData.spouseSamecitytxt = ""; //工作生活信息详情
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
              //             if(name==1 || name==""){
              //  this.address.permanent = false;
              //               this.checkData.aisresidenttxt = "";
              //             }
              this.address.permanent = false;
              this.checkData.aisresidenttxt = "";
              break;
          }
        } else if (hidLabel == "婚姻状况") {
          console.log(hidLabel + name)
          if (name == "02" || name == "03") {
            this.marriage.couple = true;
          } else {
            this.marriage.couple = false;
            this.marriage.workingCondition = false;
            this.marriage.workingLivingInf = false;
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
      makeSureBtn() {
        this.Confirm = true;

      },
      canc() {
        this.Confirm = false;
      },
      closed() {
        this.Confirm = false;

      },
      CFsave() {
        console.log("提交信息");
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            // alert('From Submitted!');
            // 下面为需要验证不为 空 的字段
            // console.log(this.checkData)
            this.checkData.selfpremisesArea = this.acreage; //面积
            this.checkData.selfhasProportion = this.Percent; //比例
            console.log(this.checkData.selfpremisesArea)
            console.log(this.checkData.selfhasProportion)

            this.post("/creauditInfo/addOrUpdate", this.checkData).then(res => {
              console.log(res);
              if (res.statusCode == 200) {
                // console.log(this.checkData.childCount )
                this.Confirm = false;
                alert('提交成功!');
                this.AreaNPercent();

                // if (this.checkData.selfpremisesArea) {
                //   this.checkData.selfpremisesArea += "m²";
                // } else {
                //   this.checkData.selfpremisesArea = "";
                // }
                // if (this.checkData.selfhasProportion) {
                //   this.checkData.selfhasProportion += "%";
                // } else {
                //   this.checkData.selfhasProportion = "";
                // }
              } else {
                alert("提交失败，请重新提交")
                this.Confirm = false;
              }
            });
            // alert('提交成功!');
            // return;
          } else {
            alert('请按要求填写！');
            this.Confirm = false;
          }
          // alert('Correct them errors!');
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
            val == 0 || val == null ? this.workInf.private = false : this.workInf.private = true;
            break;
          case 13: //婚姻状况
            val == "01" || val == "04" || val == null ? this.marriage.couple = false : this.marriage.couple = true;
            break;
          case 14: // 配偶工作情况
            val == "00" || val == "03" ? this.marriage.workingCondition = true : this.marriage.workingCondition = false;
            break;
          case 15: // 是否在同一个城市工作
            val == 0 || val == null ? this.marriage.workingLivingInf = false : this.marriage.workingLivingInf = true;
            break;
          case 16: // 是否有子女
            val == 0 || val == null ? this.Children.ChildrenOrNot = false : this.Children.ChildrenOrNot = true;
            break;
          case 17: // 是否支付其生活费
            val == 0 || val == null ? this.Children.PayAlimony = false : this.Children.PayAlimony = true;
            break;
          case 18: // 父母是否在世
            val == 0 || val == null ? this.parent.livingOrNot = false : this.parent.livingOrNot = true;
            break;
          case 19: // 是否有兄弟姐妹
            val == 0 || val == null ? this.siblings.siblingsOrNot = false : this.siblings.siblingsOrNot = true;
            break;
          case 20: // 是否为常住地址(选否显示)
            val == 0 ? this.address.permanent = true : this.address.permanent = false;
            break;

          case 21: // 是否为常住地址(选否显示)
            val == 0 || val == null ? this.checkId.loanNot = false : this.checkId.loanNot = true;
            break;
        }
        // this.checkData.val==0? this.InternetShow.commentS=false: this.InternetShow.commentS=true;

        // val==0? comment=false:comment=true;

      },
      hireDate(val, e) {
        console.log("获取日期")
        console.log(val)
        // console.log(e.target.value)
      },
      postCode(val, e) {
        // 邮编
        var reg = /^\d{6}$/;
        if (reg.test(val)) {
          console.log("匹配")
          this.checkData.workZip = e.target.value = val;
          this.reg.mpostCode = false;
        } else {
          console.log("不匹配")
          this.checkData.workZip = e.target.value = val = '';
          this.reg.mpostCode = true;
        }
      },
      ratio(val, e) {

      },
      businessArea(val, e, el, unit) {
        console.log("营业面积")
        val = parseFloat(val);
        if (isNaN(val)) {
          console.log(" 面积NAN")
          val = e.target.value = "";
          this.businessSC(val, el);

        } else if (val <= 0) {
          console.log(" 面积<0")
          val = e.target.value = "0.00" + unit;
          this.businessSC(val, el);

        } else if (val > 0) {
          console.log(" 面积>0")
          if (val.toString().indexOf('.') == -1) {
            console.log("无小数")
            e.target.value = val = val + "." + "0" + '0' + unit;
            this.businessSC(val, el);

            console.log(e.target.value)
            console.log(val)
            console.log(this.checkData.selfpremisesArea)

          } else if (val.toString().indexOf('.') != -1) {
            console.log("有小数")
            if (val.toString().split(".")[1].length < 2) {
              console.log("一位小数")
              e.target.value = val = val + "0" + unit;
              this.businessSC(val, el);
              console.log(this.checkData.selfpremisesArea)

            } else {
              console.log("两位小数")
              e.target.value = val = val.toString().split(".")[0] + "." + val.toString()
                .split(".")[1].slice(0, 2) + unit;
              this.businessSC(val, el);
            }
          }
        }
        console.log(this.checkData.selfpremisesArea);
        // console.log(this.checkData.selfpremisesArea.slice(0, -1))
        this.acreage = this.checkData.selfpremisesArea.slice(0, -2);
        this.Percent = this.checkData.selfhasProportion.slice(0, -1);
        console.log(this.acreage)
        console.log(this.Percent)
      },
      businessSC(val, el) {
        switch (el) {
          case "营业面积":
            this.checkData.selfpremisesArea = val;
            break;
          case "占股比例":
            this.checkData.selfhasProportion = val;
            break;
        }
      },
      mPhone(val, e) {
        // mphoneM
        // var reg=/^\d{3,4}$/;
        var reg = /^(0[0-9]{2,3}-)?([0-9]{5,8})$/; //含重复
        var regNoR =
          /^(0[0-9]{2,3}-)?(0{5,8})|(1{5,8})|(2{5,8})|(3{5,8})|(4{5,8})|(5{5,8})|(6{5,8})|(7{5,8})|(8{5,8})|(9{5,8})$/; //不含重复
        var regNoOrder =
          /^(0[0-9]{2,3}-)?(12345)|(54321)|(123456)|(654321)|(23456)|(65432)|(1234567)|(7654321)|(234567)|(765432)|(34567)|(76543)|(12345678)|(87654321)|(2345678)|(8765432)|(345678)|(876543)|(45678)|(87654)$/; //非正序倒序
        console.log("电话正则")
        //  var rek=/?<k1>[0-9a-zA-Z])\k<k1>{5}$ /;//不重复
        if (reg.test(val)) {
          console.log("重复")
          if (regNoR.test(val) || regNoOrder.test(val)) {
            console.log("全是重复")
            this.reg.mphoneM = false;
            this.reg.mphoneR = true;
            this.checkData.workTel = e.target.value = val = '';
          }
          // else if(regNoOrder.test(val)){
          //   console.log("全是按顺序")
          //       this.reg.mphoneM = false;
          //   this.reg.mphoneR = false;
          // this.reg.mphoneO = true;  
          // }
          else {
            console.log("既不重复也没按顺序")
            this.reg.mphoneM = false;
            this.reg.mphoneR = false;
            this.checkData.workTel = e.target.value = val;
            // workTel=   =val;
            // this.reg.mphoneO = false;
          }
          //  workTel this.
        }
        // else if(val=-1){
        //   this.reg.mphoneM = false;
        // }
        //  else if(regNoR.tes(val)){
        //    console.log("全是重复")
        //    this.reg.mphoneM=true;         
        //  }
        else {
          console.log("不匹配")
          this.reg.mphoneM = true;
          this.reg.mphoneR = false;
          this.checkData.workTel = e.target.value = val = '';
        }
      },
      mMonth(val, e) {
        console.log("mMonth")
        val = parseInt(val);
        if (val >= 1 && val <= 999) {
          console.log("小于31")
          this.checkData.iloanTerm = e.target.value = val;
          // this.reg.mMontyP = false;
        } else if (val >= 1 && val > 999) {
          console.log("大于31")
          this.checkData.iloanTerm = e.target.value = val = 999;
          // this.reg.mMontyP = true;
        } else {
          this.checkData.iloanTerm = e.target.value = val = " ";
          // this.reg.mMontyP = true;
        }
      },
      mday(val, e) {
        console.log("reg");
        if (val >= 1 && val <= 31) {
          console.log("小于31")
          this.checkData.payDay = e.target.value = val;
          this.reg.mpayDay = false;
          console.log(this.reg.mpayDay)

        } else {
          console.log("大于31")
          this.checkData.payDay = e.target.value = val = '';
          this.reg.mpayDay = true;

          console.log(this.reg.mpayDay)
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
      // count(val, e, name) {
      //   console.log("数量")
      //   val = parseInt(val);
      //   console.log(val)
      //   if (isNaN(val)) {
      //     console.log(" 数量<NAN")
      //     val = e.target.value = "";
      //     this.countSC(name, val)
      //   } else if (val <= 0) {
      //     console.log(" 数量<0")
      //     val = e.target.value = 0;
      //   } else if (val > 0) {
      //     console.log(" 数量>0")
      //     e.target.value = val;
      //   }
      // },
      // countSC(el, val) {
      //   console.log(el + "=====" + val)
      //   switch (el) {
      //     case "子女数量":
      //       this.checkData.childCount = val;
      //       break;
      //     case "员工人数":
      //       this.checkData.selfempCount = val;
      //       break;
      //   }
      // },
      formatMoney(val, e, name) {
        // this.formatSC(name,val);
        console.log(name)
        console.log(" blur更改金额")
        val = parseFloat(val);
        if (isNaN(val)) {
          console.log(" 金额<NAN")
          val = e.target.value = "";
          this.formatSC(name, val);
        } else if (val <= 0) {
          console.log(" 金额<0")
          val = e.target.value = "0.00";
          this.formatSC(name, val);
        } else if (val > 0) {
          console.log(" 金额>0")
          if (val.toString().indexOf('.') == -1) {
            console.log("无小数")
            // val = val + "."+0+0;
            // for(var i=0;i<2;i++){
            //   val[i]+=0
            //   // }
            //   console.log(val)
            //   var k=parseFloat(val)
            // e.target.value = val;
            //   // parseFloat(val)
            //   console.log(typeof(val))
            //   console.log(k)
            //   console.log(typeof(k))

            // //  k= parseFloat(k)
            //   e.target.value = val=parseFloat(val);
            //   console.log(typeof(e.target.value))

            val = val + "." + "0" + '0';
            // e.target.value = val = val + "."+"0"+'0';

            console.log(e.target.value)

            // e.target.value= val+"%"
            console.log(val)
            console.log(e.target.value)
            console.log(this.checkData.fbalance)

            this.formatSC(name, val);
            console.log(this.checkData.fbalance)


          } else if (val.toString().indexOf('.') != -1) {
            console.log("有小数")
            // console.log(val.toString().split(".").length )
            if (val.toString().split(".")[1].length < 2) {
              console.log("一位小数")
              //  e.target.value = val= val.toString().split(".")[0] + "." + val.toString().split(".")[1]+"0";
              e.target.value = val = val + "0";
              // console.log(this.checkData.fbalance)
              // console.log(val)
              // console.log(e.target.value)
              this.formatSC(name, val);
            } else {
              console.log("两位小数")
              e.target.value = val = val.toString().split(".")[0] + "." + val.toString().split(".")[1].slice(0, 2);
              this.formatSC(name, val);
            }

          }
        }
      },
      formatSC(el, val) {
        console.log(el + "=====" + val)
        switch (el) {
          case "月还款":
            this.checkData.fbalance = val;
            break;
          case "借款金额":
            this.checkData.iloanAmt = val;
            break;
          case "月均工资":
            this.checkData.avgsalaryamt = val;
            break;
          case "注册资金":
            this.checkData.regcapitalamt = val;
            break;
          case "月利润":
            this.checkData.profitamountmamt = val;
            break;
          case "月还款/租金":
            this.checkData.monthrentamt = val;
            break;
          case "近一年利润":
            this.checkData.oneYearProfitamt = val;
            break;
          case "配偶收入":
            this.checkData.spouseIncome = val;
            break;

          case "生活费支付":
            this.checkData.childPaycostamt = val;
            break;
          case "父母收入":
            this.checkData.parentIncome = val;
            break;
          case "开销":
            this.checkData.fconsumption = val;
            break;
        }
      },
      // testVuex(){
      //   console.log("testVuex");
      //   console.log(this.$store.state.First.Workbench)

      //   console.log(this.First)

      // },
      formatMoneyBackUp(val, e) {
        console.log(" blur更改金额")
        // console.log(e.target)
        // console.log(val)
        // console.log(this.checkData.fbalance)
        // console.log(typeof(val))
        console.log(parseFloat(val))
        val = parseFloat(val);
        console.log(typeof (val))
        console.log(val)
        // console.log(val)
        if (val <= 0 || isNaN(val)) {
          console.log(" 金额<0")

          this.checkData.fbalance = this.val = val = e.target.value = "0.00";
          console.log(e.target.value)
          console.log(val)
          console.log(this.checkData.fbalance)
        } else if (val > 0) {
          console.log(" 金额>0")

          // this.checkData.fbalance = this.val = val = e.target.value = Math.floor(val * 100) 
          console.log(e.target.value)
          console.log(val)
          console.log(this.checkData.fbalance)
          console.log(val.toString().indexOf('.'))
          if (val.toString().indexOf('.') == -1) {
            console.log("无小数")
            console.log(val)
            e.target.value = val = val + ".00"
          } else if (val.toString().indexOf('.') != -1) {
            console.log("有小数")
            console.log(typeof (val))
            console.log(val.toString().split("."))
            //  var FloatCount=  val.toString().split(".")
            // val=FloatCount[0]+"."+ FloatCount[1].slice(0,2);
            e.target.value = val = val.toString().split(".")[0] + "." + val.toString().split(".")[1].slice(0, 2);
            console.log(val)
          }
        }

      },
      ElInputStyle(val) { //监听分屏右侧div宽度，100% / 50% 的时候改变input的大小
        console.log(val)
        if (val == "50%") {
          console.log("50%");
          for (var i = 0; i < this.Pwidth.length; i++) {
            this.Pwidth[i].style.width = 150 + "px";
          };
          for (var i = 0; i < this.inputWidth.length; i++) {
            this.inputWidth[i].style.width = 515 + "px";;
          };
          this.CFwidth[0].style.minWidth = 1272 + "px";
          this.comaddressb[0].style.paddingLeft = 674 + "px";//comaddressHint
      //  this.textareaPpraProj[0].style.width=516+"px";
          console.log(this.CFwidth[0].style.minWidth)
          console.log(this.CFwidth[0].style.minWidth)
        } else if (val == "100%") {
          console.log("100%")
          for (var i = 0; i < this.Pwidth.length; i++) {
            this.Pwidth[i].style.width = 200 + "px";
          };
          for (var i = 0; i < this.inputWidth.length; i++) {
            this.inputWidth[i].style.width = "calc( 50% + 160px )"
          };
          this.CFwidth[0].style.minWidth = 1592 + "px";
          this.comaddressb[0].style.paddingLeft = 826 + "px";
          //  this.textareaPpraProj[0].style.width="100%";
          //  this.textareaPpraProj[0].style.maxWidth=768+"px";
          console.log(this.CFwidth[0].style.minWidth)
        }
      }
    },
    computed: {
      First() {
        return this.$store.state.First
      },
      // 计算属性的 getter
      format: function (val) {
        // `this` 指向 vm 实例
        console.log(val)
        return val.split(".")
        // return this.message.split('').reverse().join('')
      }
    },
    filters: {
      formateAmount: function (val) {
        if (val <= 0) {
          return "0.00"
        }
        // if (!value) return ''
        // value = value.toString()
        // return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    // computed: {
    //   formatMoney(val) {
    //     console.log("格式化金额");
    //     console.log(val)
    //     // if (val <= 0) {
    //     //  return val = 0;
    //     // }
    //   },
    // },
    mounted() {
      this.getParams = JSON.parse(localStorage.getItem("taskInWaitting"));

      // 获取查询列表数据
      this.post("/creauditInfo/queryCreauditInfoObj", {
        // applyId: this.getParams.applyId,
        applyId: "00542",
      }).then(res => {
        console.log(res.data);
        this.checkData = res.data;
        this.AreaNPercent(); // 营业面积 百分比拼上后面字符
        console.log("查询到的日期")
        console.log(this.checkData.wnetPhonetxt.length)


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
        this.mountJ(15, res.data.spouseSamecity); // 是否在同一个城市工作生活
        this.mountJ(16, res.data.childFlag); // 是否有子女
        this.mountJ(17, res.data.childIspaycost); // 是否支付其生活费
        this.mountJ(18, res.data.parentIsliving); // 父母是否在世
        this.mountJ(19, res.data.brothersIfhas); // 是否有兄弟姐妹
        this.mountJ(20, res.data.aisresident); // 是否为常住地址
        this.mountJ(21, res.data.iloanBefore); //是否在我司申请借款
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
      //  var k= document.getElementsByClassName(" CreditForm>hint")
      //  var k= document.getElementsByClassName("el-input")[0].style.width=150+"px"
      //  var k= document.getElementsByClassName("el-input")
      this.Pwidth = document.getElementsByClassName("el-input")
      this.CFwidth = document.getElementsByClassName("CreditForm")
      this.inputWidth = document.getElementsByClassName("specialInput")
      this.comaddressb=document.getElementsByClassName("comaddressb")
      // this.textareaPpraProj=document.getElementsByClassName("opraProj")
      console.log(this.textareaPpraProj)
      // console.log(this.Pwidth)
      // console.log(this.$parent.$refs.rRight.style.width)
      if (this.myWatch) {
        this.ElInputStyle(this.myWatch)
      } else {
        for (var i = 0; i < this.Pwidth.length; i++) {
          this.Pwidth[i].style.width = 150 + "px";
          this.comaddressb[0].style.paddingLeft = 674 + "px";
        }
      }
      console.log(this.myWatch)
    },
    props: ["myWatch"],
    watch: {
      // 监听分屏右侧div宽度，100% / 50% 的时候改变input的大小
      myWatch: function (val) {
        this.ElInputStyle(val);
      }
      // 监听分屏右侧div宽度，100% / 50% 的时候改变input的大小
      //   myWatch:function(val){
      //     console.log(val)
      //     if(val=="50%"){
      //       console.log("50%");
      //        for(var i=0; i<this.Pwidth.length;i++){
      //    this.Pwidth[i].style.width=150+"px";
      //   };
      //   for(var i=0; i<this.inputWidth.length;i++){
      //    this.inputWidth[i].style.width=515+"px";;
      //   };
      //    this.CFwidth[0].style.minWidth=1272+"px";
      // //  this.textareaPpraProj[0].style.width=516+"px";
      //   console.log( this.CFwidth[0].style.minWidth )
      //   console.log( this.CFwidth[0].style.minWidth )
      //     }else if(val=="100%"){
      //       console.log("100%")
      //        for(var i=0; i<this.Pwidth.length;i++){
      //   this.Pwidth[i].style.width=200+"px";
      //   };
      //    for(var i=0; i<this.inputWidth.length;i++){
      //   this.inputWidth[i].style.width= "calc( 50% + 160px )"
      //   };
      //    this.CFwidth[0].style.minWidth=1592+"px";
      //   //  this.textareaPpraProj[0].style.width="100%";
      //   //  this.textareaPpraProj[0].style.maxWidth=768+"px";
      //   console.log( this.CFwidth[0].style.minWidth )
      //     }
      //   }
    },
    directives: {

      numberOnly: {
        // bind() {
        //   handler = function () {
        //     this.el.value = this.el.value.replace(/\D+/, '')
        //   }.bind(this)
        //   this.el.addEventListener('input', this.handler)
        // },
        // unbind() {
        //   this.el.removeEventListener('input', this.handler)
        // }
      }

      // 指令的定义
      // numbers: {
      //   twoWay: true,
      //   bind: function (el) {
      //     console.log(el);
      //     el.handler = function () {
      //       let value;

      //       function formatNumber(num, cent, isThousand) {
      //         var num = num.toString().replace(/\$|\,/g, '');

      //         // 检查传入数值为数值类型
      //         if (isNaN(num))
      //           num = "0";

      //         // 获取符号(正/负数)
      //         let sign = (num == (num = Math.abs(num)));

      //         num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
      //         let cents = num % Math.pow(10, cent); // 求出小数位数值
      //         num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
      //         cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度

      //         // 补足小数位到指定的位数
      //         while (cents.length < cent)
      //           cents = "0" + cents;

      //         if (isThousand) {
      //           // 对整数部分进行千分位格式化.
      //           for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      //             num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      //         }

      //         if (cent > 0)
      //           return (((sign) ? '' : '-') + num + '.' + cents);
      //         else
      //           return (((sign) ? '' : '-') + num);
      //       };
      //       console.log(formatNumber(el.value, 2, 0));
      //       (function () {
      //         value = formatNumber(el.value, 2, 0)
      //         console.log(value);
      //         return value
      //       })()
      //       el.value = value
      //       console.log(el.value);
      //     };
      //     el.addEventListener('blur', el.handler);
      //   },
      //   update: function (el, binding, vnode) {
      //     if (el.value !== '') {
      //       el.value = el.value.replace(/[^0-9.]+/g, '');
      //       console.log(el.value);
      //     }
      //   },
      // },
    },
  }

</script>

<style scoped>
  .CreditForm input {
    border: 1px solid rgb(229, 229, 229);
    border-radius: 4px;
    height: 36px;
    outline: none;
    padding: 0 15px;
    /* width:calc( 50% + 160px ); */
    font-size: inherit;
    color: #5a5e66;
  }

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #b4bccc;
    font-size: 14px;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #b4bccc;
    font-size: 14px;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #b4bccc;
    font-size: 14px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #b4bccc;
    font-size: 14px;
  }
  /* 最下面的 弹窗样式 */
  /* add class */

  .mWidth {
    width: 100%;
  }
  /* 上网信息-两行select下拉 居中 */

  .internet_top {
    top: -11px;
  }

  .hint {
    color: red;
    /* background: #000; */
    font-size: 12px;
    display: inline-block;
    /* border:1px solid green; */
    width: 100%;
    font-style: normal;
  }

  .red {
    color: red
  }

  .btn {
    margin: 20px 0 0 80%;
  }

  .specialInput {
    width: 480px;
  }

  .internet_sel {
    padding-left: 190px;
  }

  .internet_textarea {
    padding-left: 185px;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }
  /* 上网查询左侧label */

  .InternetInf_left_label {
    /* width: 170px; */
    display: inline-block;
    width: 182px;
    margin-right: 10px;
  }

  .InternetInf_right_label {
    width: 155px;
    margin-right: 10px;
  }

  .Family_right_label {
    width: 182px;
  }
  /* 工作信息 */

  .Working_input {
    /* padding-left: 200px; */
    padding-left: 214px;
  }

  .Working_middle {
    padding-left: 170px;
  }

  .family_textarea {
    padding-left: 212px;
  }

  .result_textarea {
    padding-left: 212px;
  }
  /* public */

  .CreditForm {
    /* min-width: 1140px; */
    /* min-width: 1420px; */
    /* min-width: 1592px; */
    overflow: auto;
    min-width: 1272px;
  }

  .CreditForm li {
    color: #475669;
    font-size: 14px;
    /* border: 1px solid yellowgreen; */
    vertical-align: middle;
    position: relative;
  }

  .CreditForm label {
    display: inline-block;
    text-align: right;
    margin-right: 10px;
  }
  /* 各自 */
  /* ------------------------------上网查询 +核实身份--------------------------- */

  .CreditForm_InternetInf li,
  .CreditForm_CheckId li,
  .CreditForm_FamilyInf li
  /* 家庭信息 */

  {
    /* border: 1px solid yellowgreen; */
    clear: both;
    vertical-align: middle;
  }

  .CreditForm_InternetInf li p,
  /*  上网查询 */

  .CreditForm_CheckId p,
  /* 核实信息 ul */

  .CreditForm_FamilyInf li p,
  /* 家庭信息 */

  .CreditForm_live_ul_left li {
    /* border: 1px solid blue; */
    float: left;
    width: 33%;
    position: relative;
    vertical-align: middle;
    /* vertical-align:bottom; */
  }

  .CreditForm_CheckId p:nth-of-type(odd) {
    padding-top: 18px;
  }
  /* .CreditForm_InternetInf li p:nth-of-type(1) {
    min-width: 350px;
  } */
  /* --------------------------工作信息 + 私营企业--------------------- */

  .WorkInfs_left_label {
    width: 142px;
  }

  .CreditForm_WorkInfs_ul_right,
  /* 工作信息 */

  .CreditForm_CompanyInfs_ul_right
  /* 私营企业 */

  {
    float: left;
    width: 33%;
  }

  .CreditForm_WorkInfs_ul_left,
  /* 工作信息 */

  .CreditForm_CompanyInfs_ul_left
  /* 私营企业 */

  {
    /* min-width: 1010px; */
    /* border:1px solid blue; */
    width: 66%;
    float: left;
  }

  .CheckId_right_label
  /* 第三列里---即：第二列ul */

  {
    width: 140px;
  }

  .CreditForm_WorkInfs_ul_left li,
  .CreditForm_CompanyInfs_ul_left li {
    /* clear:both; */
    float: left;
    width: 50%;
    /* height: 65px; */
  }
  /* -----------------------家庭信息--------------------- */

  .CreditForm_FamilyInf li {
    /* border: 1px solid yellowgreen; */
  }
  /* ======================================== */

  .layer {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  .layer .layerbox {
    width: 338px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -169px;
    margin-top: -80px;
    border: 1px solid #ccc;
    background-color: #eee;
    z-index: 10000;
  }

  .layer .layerbox p {
    width: 100%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding-left: 10px;
    color: #475669;
  }

  .layer .layerbox p.choces {
    text-align: center;
  }

  .layer p i {
    float: right;
    font-size: 20px;
    color: #0077ff;
    padding: 5px 10px 0 0;
  }

  .layer .layerbox div {
    background-color: #fff;
    height: 100px;
    padding: 10px 10px;
    width: 96%;
    margin: auto;
    margin-bottom: 8px;
  }

  .layer .layerbox .buttonDiv {
    /* float: left; */
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }

  .layer .layerbox .buttonDiv button {
    float: left;
    margin: 0 0 0 50px;
  }

  .layer .layerbox .infoButton {
    height: auto;
  }

  .layer .layerbox .infoButton button {
    float: right;
  }
  /* ========================================================================= */

</style>
