<template>
  <div class="regularQT table_no_hover_color">
    <!-- 审批信息 -->
    <el-collapse v-model="activeNames" v-if='AprovalInfolShow'>
      <el-collapse-item name="0">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">审批信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166"> 客户名称：</label>
                <span> {{baseInfo.custName }}</span>
              </li>
              <li>
                <label class="label_width_166"> 产品名称：</label>
                <span> {{baseInfo.proName }}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">初审人员：</label>
                <span> {{baseInfo.auditNamec }} </span>
              </li>
              <li>
                <label class="label_width_166">初审日期：</label>
                <span> {{baseInfo.auditDatec }} </span>
              </li>
            </div>
            <li>
              <label class="label_width_166">终审人员：</label>
              <span> {{baseInfo.auditNamez }} </span>
            </li>
            <li>
              <label class="label_width_166">终审日期：</label>
              <span> {{baseInfo.auditDatez }} </span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 资料核实 -->
    <el-collapse v-model="activeNames" v-if='MaterialShow'>
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">资料核实</span>
        </template>
        <div class="material">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='200px'>核实类型 </th>
              <th width='150px'>
                <b class="required_Red"> * </b>核实结论</th>
              <th>备注</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> 申请单表是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isForm" @change="regularInfo.isForm=='1'?regularInfo.isFormRemark='':regularInfo.isFormRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isFormRemark && regularInfo.isFormRemark.length>=300"> 输入长度不能超过300</b>
                <el-input class='margin_top_15' type='textarea' :readonly='material' v-if="regularInfo.isForm==0" v-model.trim="regularInfo.isFormRemark"
                  @keyup.native='ccc' :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 2</td>
              <td>身份证证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isIdcard" @change="regularInfo.isIdcard=='1'?regularInfo.isIdcardRemark='':regularInfo.isIdcardRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isIdcardRemark && regularInfo.isIdcardRemark.length>=300"> 输入长度不能超过300</b>
                <el-input class='margin_top_15' type='textarea' :readonly='material' v-if="regularInfo.isIdcard=='0'" v-model.trim="regularInfo.isIdcardRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td>收入证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isIncome" @change="regularInfo.isIncome=='1'?regularInfo.isIncomeRemark='':regularInfo.isIncomeRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isIncomeRemark && regularInfo.isIncomeRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isIncome==0" v-model.trim="regularInfo.isIncomeRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td>工作证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isWork" @change="regularInfo.isWork=='1'?regularInfo.isWorkRemark='':regularInfo.isWorkRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isWorkRemark &&regularInfo.isWorkRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isWork==0" v-model.trim="regularInfo.isWorkRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td>房产资料是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isEstate" @change="regularInfo.isEstate=='1'?regularInfo.isEstateRemark='':regularInfo.isEstateRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isEstateRemark && regularInfo.isEstateRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isEstate==0" v-model.trim="regularInfo.isEstateRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td>居住证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isLive" @change="regularInfo.isLive=='1'?regularInfo.isLiveRemark='':regularInfo.isLiveRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isLiveRemark && regularInfo.isLiveRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isLive==0" v-model.trim="regularInfo.isLiveRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td> 经营证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isBusiness" @change="regularInfo.isBusiness=='1'?regularInfo.isBusinessRemark='':regularInfo.isBusinessRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isBusinessRemark && regularInfo.isBusinessRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isBusiness==0" v-model.trim="regularInfo.isBusinessRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 8</td>
              <td>信用报告是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isCredit" @change="regularInfo.isCredit=='1'?regularInfo.isCreditRemark='':regularInfo.isCreditRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isCreditRemark && regularInfo.isCreditRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isCredit==0" v-model.trim="regularInfo.isCreditRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 9</td>
              <td> 客户流水是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isCustomerflow" @change="regularInfo.isCustomerflow=='1'?regularInfo.isCustomerflowRemark='':regularInfo.isCustomerflowRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isCustomerflowRemark && regularInfo.isCustomerflowRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isCustomerflow==0" v-model.trim="regularInfo.isCustomerflowRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 10</td>
              <td> 客户其他资料是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isCustomerother" @change="regularInfo.isCustomerother=='1'?regularInfo.isCustomerotherRemark='':regularInfo.isCustomerotherRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isCustomerotherRemark && regularInfo.isCustomerotherRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isCustomerother==0" v-model.trim="regularInfo.isCustomerotherRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 11 </td>
              <td> 负债计算是否正确</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isLiabilities" @change="regularInfo.isLiabilities=='1'?regularInfo.isLiabilitiesRemark='':regularInfo.isLiabilitiesRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isLiabilitiesRemark && regularInfo.isLiabilitiesRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isLiabilities=='0'" v-model.trim="regularInfo.isLiabilitiesRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 12 </td>
              <td> 流水计算是否正确</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isFlow" @change="regularInfo.isFlow=='1'?regularInfo.isFlowRemark='':regularInfo.isFlowRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isFlowRemark && regularInfo.isFlowRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isFlow=='0'" v-model.trim="regularInfo.isFlowRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 13</td>
              <td> 征信录入是否正确</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isReference" @change="regularInfo.isReference=='1'?regularInfo.isReferenceRemark='':regularInfo.isReferenceRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isReferenceRemark && regularInfo.isReferenceRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='material' v-if="regularInfo.isReference=='0'" v-model.trim="regularInfo.isReferenceRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 三方信息查询=====后两个选否弹出未改 -->
    <el-collapse v-model="activeNames" v-if='InfoSearchShow'>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">三方信息查询</span>
        </template>
        <div class="material">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='290px'>核实类型 </th>
              <th width='150px'>
                <b class="required_Red"> * </b>核实结论</th>
              <th>备注</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> 客户在人法网是否有被执行信息</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wbeexEcuted" @change="regularInfo.wbeexEcuted=='0'?regularInfo.wbeexEcutedtxt='':regularInfo.wbeexEcutedtxt">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.wbeexEcutedtxt&&regularInfo.wbeexEcutedtxt.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-if="regularInfo.wbeexEcuted==1" v-model.trim="regularInfo.wbeexEcutedtxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 2</td>
              <td> 客户在失信网是否有失信记录</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetEcutedBrea" @change="regularInfo.wnetEcutedBrea=='0'?regularInfo.wnetEcutedBreatxt='':regularInfo.wnetEcutedBreatxt">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.wnetEcutedBreatxt&&regularInfo.wnetEcutedBreatxt.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-if="regularInfo.wnetEcutedBrea==1" v-model.trim="regularInfo.wnetEcutedBreatxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td> 网上搜索借款人的手机是否有异常</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetPhone" @change="regularInfo.wnetPhone=='0'?regularInfo.wnetPhonetxt='':regularInfo.wnetPhonetxt">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.wnetPhonetxt&&regularInfo.wnetPhonetxt.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-if="regularInfo.wnetPhone==1" v-model.trim="regularInfo.wnetPhonetxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td> 网上搜索借款人现居住地址和房产地址是否异常</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetAddrandEstate" @change="regularInfo.wnetAddrandEstate=='0'?regularInfo.wnetAddrandEstatetxt='':regularInfo.wnetAddrandEstatetxt">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.wnetAddrandEstatetxt&&regularInfo.wnetAddrandEstatetxt.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-if="regularInfo.wnetAddrandEstate==1" v-model.trim="regularInfo.wnetAddrandEstatetxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td> 当地工商网查询企业基本信息中是否有登记</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetCompany" @change="regularInfo.wnetCompany=='1'?regularInfo.wnetCompanytxt='':regularInfo.wnetCompanytxt">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.wnetCompanytxt&&regularInfo.wnetCompanytxt.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-if="regularInfo.wnetCompany=='0'" v-model.trim="regularInfo.wnetCompanytxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td> 客户工作单位在全国组织代码查询中是否存在</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetAddrstate" @change="regularInfo.wnetAddrstate=='1'?regularInfo.wnetAddrstatetxt='':regularInfo.wnetAddrstatetxt">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.wnetAddrstatetxt && regularInfo.wnetAddrstatetxt.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-if="regularInfo.wnetAddrstate=='0'" v-model.trim="regularInfo.wnetAddrstatetxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td> 工商登记信息说明</td>
              <td>
                <td>
                  <b class="hint_word" v-show="regularInfo.icbcRegistrationInfo && regularInfo.icbcRegistrationInfo.length>=300"> 输入长度不能超过300</b>
                  <el-input type='textarea' class='margin_top_15' :readonly='InfoInquire' v-model.trim="regularInfo.icbcRegistrationInfo" :rows="2"
                    resize="none" :maxlength='arealength' placeholder="请输入内容">
                  </el-input>
                </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 内部匹配核实 -->
    <el-collapse v-model="activeNames" v-if='MatchingShow'>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">内部匹配核实</span>
        </template>
        <div class="material">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='290px'>核实类型 </th>
              <th width='150px'>
                <b class="required_Red"> * </b>核实结论</th>
              <th>备注</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> 内部匹配是否进行排查</td>
              <td>
                <el-radio-group :disabled='matching' v-model="regularInfo.isInmatch" @change="regularInfo.isInmatch=='1'?regularInfo.isInmatchRemark='':regularInfo.isInmatchRemark">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <b class="hint_word" v-show="regularInfo.isInmatchRemark && regularInfo.isInmatchRemark.length>=300"> 输入长度不能超过300</b>
                <el-input type='textarea' class='margin_top_15' :readonly='matching' v-if="regularInfo.isInmatch=='0'" v-model.trim="regularInfo.isInmatchRemark"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 电话征信 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">电话征信</span>
        </template>
        <div class="CreditForm_CheckId">
          <!-- tab-title -->
          <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in tabTitle" :key="index" @click="tabClick($event,index,val)" :class="{tabAct:tabIndex==index}">
              {{val}}</li>
          </ul>
          <!-- pay-content 微信/支付宝核实 -->
          <div v-show="this.payment" class="weChatNapliay height_auto">
            <!-- <p class="P_title">微信/支付宝核实</p> -->
            <p style='clear:both;padding:3px 0;'>
              <el-tag>微信/支付宝核实</el-tag>
            </p>
            <el-table :data="WechatData(this.ind)" border style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="核实类型" prop='insVerifyTypeTxt' align="left" width="180">
              </el-table-column>
              <el-table-column label="核实结论" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <b class="required_Red"> * </b>
                    <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="scope.row.insResult=='00'?scope.row.remark='':scope.row.remark">
                      <el-radio label="00">正常</el-radio>
                      <el-radio label="01">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center">
                <template slot-scope="scope">
                  <b class="hint_word" v-show="scope.row.remark&&scope.row.remark.length>=300"> 输入长度不能超过300</b>
                  <el-input class='margin_top_15' type="textarea" :readonly='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none"
                    v-model.trim="scope.row.remark" :maxlength='arealength' placeholder="请输入内容">
                  </el-input>
                  <!-- {{scope.row.insResult}} -->
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 客户本人中-电话拨打核实  -->
          <div v-show="custom">
            <!-- <p class="P_title">电话拨打核实</p> -->
            <p style='clear:both;padding:3px 0;'>
              <el-tag>电话拨打核实</el-tag>
            </p>
            <!-- ============对象形式============= -->
            <table border="1" cellpadding='2' width='100%'>
              <tr>
                <th width='50px'> 序号</th>
                <th width='160px'>电话号码 </th>
                <th width='130px'>电话录音 </th>
                <th width='160px'>接听人是否借款人本人 </th>
                <th width='200px'>接听说明 </th>
                <th width='180px'>质检结果</th>
                <th>备注 </th>
              </tr>
              <tr>
                <td> 1</td>
                <!-- 电话号码 -->
                <td> {{insTelCustInfo.telNum}}</td>
                <!-- 电话录音-->
                <td> {{insTelCustInfo.telRecord}}</td>
                <!-- 接听人是否借款人本人 -->
                <td> {{insTelCustInfo.isSelfTxt}}</td>
                <!-- 接听说明 -->
                <td> {{insTelCustInfo.iisselftxt}}</td>
                <!-- 质检结果 -->
                <td>
                  <b class="required_Red"> * </b>
                  <el-radio-group :disabled='PhoneCredit' v-model="insTelCustInfo.insResult" @change="insTelCustInfo.insResult=='00'?insTelCustInfo.remark='':insTelCustInfo.remark">
                    <el-radio label="00">正常</el-radio>
                    <el-radio label="01">异常</el-radio>
                  </el-radio-group>
                </td>
                <!-- 备注 -->
                <td style="vertical-align:bottom;">
                  <b class="hint_word" v-show="insTelCustInfo.remark&&insTelCustInfo.remark.length>=300"> 输入长度不能超过300</b>
                  <el-input class='margin_top_15' type='textarea' :readonly='PhoneCredit' v-if="insTelCustInfo.insResult=='01'" v-model.trim="insTelCustInfo.remark"
                    :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                  </el-input>
                </td>
              </tr>
            </table>
            <!-- ====================== -->
          </div>
          <!--  除客户本人的 电话拨打核实-->
          <div v-show="this.others" class="MobileCheck height_auto">
            <p style='clear:both;padding:3px 0;'>
              <el-tag>电话拨打核实</el-tag>
            </p>
            <!-- insTelVerifyList -->
            <el-table :data="TelData(this.ind)" border style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column prop="telNum" label="电话号码" align="center" width="160">
              </el-table-column>
              <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <!-- <span>{{ scope.row.telRecord}}</span>
                  <audio controls="controls" height="100" width="100">
                    <source :src="URL+scope.row.telRecord" type="audio/mp3" />
                    <source :src="URL+scope.row.telRecord" type="audio/WAV" />
                    <source :src="URL+scope.row.telRecord" type="audio/WMA" />
                    <source :src="URL+scope.row.telRecord" type="audio/AMR" />
                    <source :src="URL+scope.row.telRecord" type="audio/AVA" />
                    <source :src="URL+scope.row.telRecord" type="audio/ACT" />
                    <source :src="URL+scope.row.telRecord" type="audio/ogg" />
                    <embed height="100" width="100" :src="URL+scope.row.telRecord" /> 您的浏览器不支持该音频播放器格式
                  </audio> -->
                </template>
              </el-table-column>
              <el-table-column prop="sourceTxt" label="来源" align="center" width="70">
              </el-table-column>
              <el-table-column prop="checkTime" label="最新调查时间" align="center" width="180">
              </el-table-column>
              <el-table-column prop="answerTxt" label="最新接听情况" align="center" width="180">
              </el-table-column>
              <el-table-column prop="checkStageTxt" label="最新调查阶段" align="center" width="180">
              </el-table-column>
              <el-table-column label="调查结论" align="center" width="180">
                <template slot-scope="scope">
                  <span class="pre_wrap">{{ scope.row.conclusion}}</span>
                </template>
              </el-table-column>
              <el-table-column label="质检结果" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <b class="required_Red"> * </b>
                    <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="scope.row.insResult=='00'?scope.row.remark='':scope.row.remark">
                      <el-radio label="00">正常</el-radio>
                      <el-radio label="01">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center" min-width="180">
                <template slot-scope="scope">
                  <b class="hint_word" v-show="scope.row.remark&&scope.row.remark.length>=300"> 输入长度不能超过300</b>
                  <el-input class='margin_top_15' type="textarea" :readonly='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none"
                    v-model.trim="scope.row.remark" :maxlength="this.textareaL" placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 初终审复议申请信息 -->
    <el-collapse v-model="activeNames" v-if='ReApply'>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">初终审复议申请信息</span>
        </template>
        <div class="material height_auto">
          <el-table :data="TrilSelfTableData" border style="width: 100%">
            <el-table-column prop="approverUserCode" label="复议申请人" width="150">
            </el-table-column>
            <el-table-column prop="reconDate" width="180" label="复议申请日期">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <span class="pre_wrap">{{ scope.row.reviewRemark }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 审批主管第一次复议申请信息 -->
    <el-collapse v-model="activeNames" v-if='SuperVisor'>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">审批主管第一次复议申请信息</span>
        </template>
        <div class="material height_auto">
          <el-table :data="ManagerFirstTableData" border style="width: 100%">
            <el-table-column prop="approverUserCode" label="经办人" width="150">
            </el-table-column>
            <el-table-column prop="reconDate" width="180" label="发起复议时间">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <span class="pre_wrap">{{ scope.row.reviewRemark }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 第一次复议审批信息 -->
    <el-collapse v-model="activeNames" v-if='FirstReconsider'>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">第一次复议审批信息</span>
        </template>
        <div class="material height_auto">
          <el-table :data="insReconApproval" border style="width: 100%">
            <el-table-column prop="reviewResultTxt" label="复议结果" width="150">
            </el-table-column>
            <el-table-column prop="checkResultTxt" width="180" label="质检结果">
            </el-table-column>
            <el-table-column prop="approverUserCode" width="180" label="审批人">
            </el-table-column>
            <el-table-column prop="approverDate" width="180" label="审批时间">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <span class="pre_wrap">{{ scope.row.reviewRemark }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 审批主管第二次复议申请信息 -->
    <el-collapse v-model="activeNames" v-if='SuperVisorSecond'>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">审批主管第二次复议申请信息</span>
        </template>
        <div class="material height_auto">
          <el-table :data="ManagerSecondTableData" border style="width: 100%">
            <el-table-column prop="approverUserCode" label="经办人" width="150">
            </el-table-column>
            <el-table-column prop="reconDate" width="180" label="发起复议时间">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <span class="pre_wrap">{{ scope.row.reviewRemark }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 质检结论 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">质检结论</span>
          <div class="title_icon" v-if='QTConclutionBtn'>
            <span @click.stop="addQTResult">
              <i class="title_icon_img addIcon"></i>
              <span class="title_icon_span">添加</span>
            </span>
            <span @click.stop="delQTresult">
              <i class="title_icon_img deleteIcon"></i>
              <span class="title_icon_span">删除</span>
            </span>
          </div>
          <!-- <p style="float:right" v-if='QTConclutionBtn'>
              <span class="btn" @click.stop="addQTResult">
                <img src='../../../../../static/images/add.png'> 添加 </span>
              <span class="btn" @click.stop="delQTresult">
                <img src="../../../../../static/images/delete.png"> 删除</span>
            </p> -->
        </template>
        <div class="result_QT height_auto">
          <el-table :data="insConclusion" style="width: 100%" highlight-current-row @current-change='QTtableVal' border min-width='1366px'>
            <el-table-column label="质检结果" align="center" width="260">
              <template slot-scope="scope">
                <i class="required_Red"> * </i>
                <el-select :disabled='QTConclution' v-model="scope.row.checkResult" placeholder="请选择">
                  <el-option v-for="item in QTresult" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="差错类型" align="center" width="230">
              <template slot-scope="scope">
                <b class="hint_word" v-show="scope.row.errorType&&scope.row.errorType.length>=50"> 输入长度不能超过50</b>
                <el-tooltip class="item" effect="dark" :content="scope.row.errorType" :disabled="!scope.row.errorType" placement="top-start">
                  <el-input :readonly='QTConclution' v-model.trim="scope.row.errorType" :maxlength='fiftyWords' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="差错描述" align="center" width="230">
              <template slot-scope="scope">
                <b class="hint_word" v-show="scope.row.errorDescribe&& scope.row.errorDescribe.length>=300"> 输入长度不能超过300</b>
                <el-tooltip class="item" effect="dark" :content="scope.row.errorDescribe" :disabled="!scope.row.errorDescribe" placement="top-start">
                  <el-input :readonly='QTConclution' v-model.trim="scope.row.errorDescribe" :maxlength='arealength' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="备注" align="center" min-width="200">
              <template slot-scope="scope">
                <b class="hint_word" v-show="scope.row.remark&&scope.row.remark.length>=300"> 输入长度不能超过300</b>
                <el-tooltip class="item" effect="dark" :content="scope.row.remark" :disabled="!scope.row.remark" placement="top-start">
                  <el-input class="margin_top_15" type='textarea' :readonly='QTConclution' v-model.trim="scope.row.remark" :rows="2" resize="none"
                    :maxlength='arealength' placeholder="请输入内容">
                  </el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="insMemberName" label="操作人员" align="center" width="120">
            </el-table-column>
            <el-table-column label="质检日期" align="center" width="180">
              <template slot-scope='scope'>
                <span>{{scope.row.insDate | dateFilter}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 复核结论===显示框，无手风琴 -->
    <div class="reResult" v-if='reResultShow'>
      <label style="font-size:14px;">复核结论：</label>
      <div>
        <el-input type='textarea' resize='none' v-model="reviewConclusion.reviewConclusion" :rows="2"></el-input>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="approve_btn_area approve_btn_area_width_700" v-if='BottomBtn'>
      <span class="approve_item" @click="SaveInf('保存')" v-if="saveBtn">
        <i class="approve_icon relieveIcon"></i>
        <span class="approve_text">保存</span>
      </span>
      <span class="approve_item" @click="SubmitAlert" v-if="submitBtn">
        <i class="approve_icon appro"></i>
        <span class="approve_text">提交</span>
      </span>
      <span class="approve_item" @click="NoReconsider" v-if="NoReconsiderBtn">
        <i class="approve_icon backIcon"></i>
        <span class="approve_text">无需复议</span>
      </span>
      <!-- 区域经理提交按钮 -->
      <span class="approve_item" @click="AreaToReconsiderAlert" v-if="AreaReconsiderBtn">
        <i class="approve_icon appro"></i>
        <span class="approve_text">提交</span>
      </span>
      <span class="approve_item" @click="ToReconsiderAlert" v-if="ReconsiderBtn">
        <i class="approve_icon faqi"></i>
        <span class="approve_text">发起复议</span>
      </span>
      <span class="approve_item" @click="ReAprovalAlert" v-if="ReAprovalBtn">
        <i class="approve_icon appro"></i>
        <span class="approve_text">复议审批</span>
      </span>
      <span class="approve_item" @click="AprovalAlert" v-if="AprovalBtn">
        <i class="approve_icon appro"></i>
        <span class="approve_text">审批</span>
      </span>
      <span class="approve_item" @click="AntiApply" v-if="AntiBtn">
        <i class="approve_icon faqi"></i>
        <span class="approve_text">发起反欺诈</span>
      </span>
      <span class="approve_item" @click="getLcgjList">
        <i class="approve_icon liuchengIcon"></i>
        <span class="approve_text">流程轨迹</span>
      </span>
      <span class="approve_item" @click="RiskControl" v-if="RiskControlBtn">
        <i class="approve_icon brokenLineIcon"></i>
        <span class="approve_text">大数据风控</span>
      </span>
      <span class="approve_item" @click="roSocialSecurity" v-if="SocialSecurityBtn">
        <i class="approve_icon dataMaptIcon"></i>
        <span class="approve_text">社保/公积金{{social}}</span>
      </span>
    </div>
    <!-- =================================弹窗===================================== -->
    <!-- 提交 -->
    <!-- <div class='alertBox'>
      <el-dialog title="提示" :modal="false" :visible.sync="submitShow" width="420px">
        <span>确定操作？</span>
        <span slot="footer" class="dialog-footer">
          <el-button class="calbtn" @click="submitShow=false">取消</el-button>
          <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveInf('提交')">{{adbtn}}</el-button>
        </span>
      </el-dialog>
    </div> -->
    <!-- 发起复议  -->
    <div class="Height_240">
      <el-dialog title="发起复议" :visible.sync="ReconsiderShow" :modal="false ">
        <el-form>
          <el-form-item label="复议节点：" :label-width="formLabelWidth">
            <el-input readonly v-model="ReconsiderNode" placeholder="请选择"> </el-input>
          </el-form-item>
          <div class="dialog_textarea alert_collapse_inputLabel">
            <el-form-item class="mr" label="复议说明：" :label-width="formLabelWidth">
              <el-input v-model="ReconsiderDes" type="textarea" resize='none' :rows="2"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth">
              {{userInf. userName}}
            </el-form-item>
            <el-form-item class="fr" label="发起复议时间：" label-width="110px">
              {{systermTime | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="huiTuiShow=false">取 消</el-button>
          <el-button type="primary" :loading="loadSub" @click='ToReconsider'> {{ReconSubmit}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- <div class="alertBox">
      <el-dialog title='发起复议' :visible.sync="ReconsiderShow" :modal="false" width="650px">
        <div>
          <p>
            <label class="reconsider_Alert_Label">复议节点：</label>
            <el-input disabled v-model="ReconsiderNode" placeholder="请选择"> </el-input>
          </p>
          <p style="margin:10px 0;">
            <label class="reconsider_Alert_Label">
              <b class="required_Red"> * </b>复议说明：</label>
            <el-input v-model="ReconsiderDes" style="width:500px;vertical-align:top;" type="textarea" resize='none' :rows="2"></el-input>
          </p>
          <p>
            <span class="reconsider_Alert_Label"> 经办人：</span>
            <span>{{userInf. userName}}</span>
            <span style="float:right;width:280px;"> 发起复议时间：{{systermTime | dateFilter}}</span>
          </p>
        </div>
        <div style="text-align:right;">
          <el-button type="primary" @click="ToReconsider" :loading="loadSub">{{ReconSubmit}}</el-button>
        </div>
      </el-dialog>
    </div> -->
    <!-- 区域经理-提交按钮-发起复议 -->
    <!-- <div class="alertBox">
      <el-dialog title='发起复议' :visible.sync="AreaReconsiderShow" :modal="false" width="630px">
        <div>
          <p>
            <label class="reconsider_Alert_Label">
              <b class="required_Red"> * </b>复议结果：</label>
            <el-select v-model="ToAteaApprovalParams.reviewResult" placeholder="请选择">
              <el-option v-for="item in RecResult" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </p>
          <p style="margin:10px 0;">
            <label class="reconsider_Alert_Label">
              <b class="required_Red"> * </b>复议说明：</label>
            <el-input v-model="ToAteaApprovalParams.reviewRemark" style="width:500px;vertical-align:top;" type="textarea" resize='none'
              :rows="2"></el-input>
          </p>
          <p>
            <span class="reconsider_Alert_Label"> 审批人：</span>
            <span>{{userInf. userName}}</span>
            <span style="float:right;width:280px;"> 审批时间：{{systermTime | dateFilter}}</span>
          </p>
        </div>
        <div style="text-align:right;">
          <el-button type="primary" @click="AreaToReconsider" :loading="loadSub">{{ReconSubmit}}</el-button>
        </div>
      </el-dialog>
    </div> -->
    <div class="Height_240">
      <el-dialog title="发起复议" :visible.sync="AreaReconsiderShow" :modal="false ">
        <el-form>
          <el-form-item label="复议结果：" :label-width="formLabelWidth" class="alert_collapse_inputLabel">
            <el-select v-model="ToAteaApprovalParams.reviewResult" placeholder="请选择">
              <el-option v-for="item in RecResult" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="dialog_textarea alert_collapse_inputLabel">
            <el-form-item class="mr" label="复议说明：" :label-width="formLabelWidth">
              <el-input v-model="ToAteaApprovalParams.reviewRemark" type="textarea" resize='none' :rows="2"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="审批人：" :label-width="formLabelWidth">
              {{userInf. userName}}
            </el-form-item>
            <el-form-item class="fr" label="审批时间：" label-width="110px">
              {{systermTime | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="huiTuiShow=false">取 消</el-button>
          <el-button type="primary" :loading="loadSub" @click='AreaToReconsider'> {{ReconSubmit}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 复议审批  -->
    <!-- <div class="alertBox">
      <el-dialog title='复议审批' :visible.sync="ReAprovalShow" :modal="false" width="800px">
        <div class="reApproval">
          <p>
            <span>
              <label>
                <b class="required_Red"> * </b>复议结果：</label>
              <el-select v-model="ToApprovalParams.reviewResult" placeholder="请选择">
                <el-option v-for="item in RecResult" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>
              <label>质检结果：</label>
              <el-select v-model="ToApprovalParams.checkResult" placeholder="请选择">
                <el-option v-for="item in QTresultAlert" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
          </p>
          <p>
            <span>
              <label>
                <b class="required_Red"> * </b>质检员是否有差错：</label>
              <el-select v-model="ToApprovalParams.isError" placeholder="请选择">
                <el-option v-for="item in ApprolisError" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>
              <label>
                <b class="required_Red"> * </b>差错类型：</label>
              <el-input v-model="ToApprovalParams.errorType" :maxlength='arealength' placeholder="请输入内容"></el-input>
            </span>
          </p>
          <p style="margin:10px 0;">
            <label class="ReDec">
              <b class="required_Red"> * </b>复议说明：</label>
            <el-input v-model='ToApprovalParams.reviewRemark' style="width:510px;vertical-align:top;" type="textarea" resize='none' :rows="2"></el-input>
          </p>
          <p>
            <span> 审批人：{{userInf. userName }}</span>
            <span style="float:right;width:280px;"> 处理时间：{{systermTime | dateFilter}}</span>
          </p>
        </div>
        <div style="text-align:right;">
          <el-button type="primary" @click="ToApproval" :loading="loadSub">{{ReconSubmit}}</el-button>
        </div>
      </el-dialog>
    </div> -->
    <div class="Height_240">
      <el-dialog title="复议审批" :visible.sync="ReAprovalShow" :modal="false ">
        <el-form>
          <div class="bfc">
            <el-form-item class="fl alert_collapse_inputLabel" label="复议结果：" :label-width="formApproLabel">
              <el-select v-model="ToApprovalParams.reviewResult" placeholder="请选择">
                <el-option v-for="item in RecResult" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="质检结果：" :label-width="formApproLabel">
              <el-select v-model="ToApprovalParams.checkResult" placeholder="请选择">
                <el-option v-for="item in QTresultAlert" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl alert_collapse_inputLabel" label="质检员是否有差错：" :label-width="formApproLabel">
              <el-select v-model="ToApprovalParams.isError" placeholder="请选择">
                <el-option v-for="item in ApprolisError" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr alert_collapse_inputLabel" label="差错类型：" :label-width="formApproLabel">
              <el-input v-model="ToApprovalParams.errorType" :maxlength='arealength' placeholder="请输入内容"></el-input>
            </el-form-item>
          </div>
          <div class="dialog_textarea">
            <el-form-item class="mr" label="复议说明：" :label-width="formApproLabel">
              <el-input v-model='ToApprovalParams.reviewRemark' type="textarea" resize='none' :rows="2"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="审批人：" :label-width="formApproLabel" prop="holiday">
              {{userInf. userName }}
            </el-form-item>
            <el-form-item class="fr" label="处理时间：" :label-width="formApproLabel" prop="holiday">
              {{systermTime | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button>取 消</el-button>
          <el-button type="primary" :loading="loadSub" @click='ToApproval'> {{ReconSubmit}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 流程轨迹 -->
    <div class="alertBox pro_alert">
      <el-dialog title='流程轨迹' :visible.sync="lcdialogVisible" :modal="false" width="1000px">
        <el-table :data="lcgjData" height="250" border style="width: 100%" highlight-current-row>
          <el-table-column type="index" label="序号" min-width="50">
          </el-table-column>
          <el-table-column prop="taskNodeNameTxt" label="任务节点" min-width="120">
          </el-table-column>
          <el-table-column prop="taskTypeTxt" label="任务类型" min-width="120">
          </el-table-column>
          <el-table-column prop="activationTime" label="进入本环节时间" min-width="180">
          </el-table-column>
          <el-table-column prop="taskStatusTxt" label="任务状态" min-width="100">
          </el-table-column>
          <el-table-column prop="operatorCode" label="处理人" min-width="120">
          </el-table-column>
          <el-table-column prop="completeTime" label="处理时间" min-width="180">
          </el-table-column>
          <el-table-column prop="approvalOpinionTxt" label="处理结论" min-width="120">
          </el-table-column>
          <el-table-column prop="opinionExplain" label="意见说明" min-width="200" show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="lcdialogVisible = false">返回</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 大数据风控 -->
    <!-- <div class="bigDataLog alertBox">
      <el-dialog title="提示" :visible.sync="bigDataLogVisible" :modal="false" width="420px">
        <span>此进件不存在大数据风控明细！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="bigDataLogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div> -->
    <!-- 社保公积金 -->
    <!-- <div class="bigDataLog alertBox">
      <el-dialog title="提示" :visible.sync="socialLogVisible" :modal="false" width="420px">
        <span>客户社保公积金未授权！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="this.socialLogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div> -->
  </div>
</template>
<script>
  import baseurl from '../../../../util/ConstantSocialAndPn';
  import baseurlBPM from '../../../../util/constant';
  export default {
    data() {
      return {
        formLabelWidth: '85px',
        formApproLabel: '140px',
        userInf: '',
        SaveInfParams: '',
        URL: '', //音频路径
        systermTime: Number,
        submitShow: false, //提交弹框
        loadsitu: false,
        loadSub: false,
        adbtn: '确认',
        ReconSubmit: '提交',
        currentRow: null,
        addId: '',
        ind: 0,
        insReconApply: [], //复议申请表
        ReconsiderNode: '质检主管', //复议弹窗-复议节点
        reconTypeParams: '', //发起复议入参
        ReconsiderDes: '', //复议弹窗-复议说明
        instaskType: '', //添加质检结论入参-任务类型（00:常规质检，01:专项质检）
        reviewConclusion: {}, //复核结论
        conclusionId: '', //发起复议-弹窗入参
        processInstanceIdParams: '', // 查询流程轨迹入参
        tablrf: [{
          insResult: '01'
        }],
        ToApprovalParams: { //复议审批弹窗 
          applyId: this.propQTconclution.applyId,
          reviewResult: '',
          checkResult: '',
          isError: '',
          errorType: '',
          reviewRemark: '',
          approverUserCode: '',
          approverDate: '',
          insState: '',
          taskId: this.propQTconclution.tastwaitingPass.taskId,
        },
        ToAteaApprovalParams: { //区域经理审批弹窗入参
          applyId: this.propQTconclution.applyId,
          reviewResult: '',
          checkResult: '',
          isError: '',
          errorType: '',
          reviewRemark: '',
          approverUserCode: '',
          approverDate: '',
          insState: '01',
          taskId: this.propQTconclution.tastwaitingPass.taskId,
        },
        AntiApplyParams: {
          id: this.propQTconclution.applyId,
          flag: 'zhijian',
          busiState: '30',
          channel: '03', //   ("00", "审批提报"), ("01", "前端提报"), ("02", "规则提报"), ("03","质检提报"), ("04","复议提报"), ("05","内匹关联"), ("06","反欺诈提报"), ("99","其他提报");
        },
        isForm: '',
        radio: '1',
        baseInfo: '', //基本信息
        fiftyWords: 50,
        arealength: 300, //area长度
        insConclusion: [],
        AlipayConcat: [], //合并微信拨打核实
        AlipayCus: [{ //客户本人-微信
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "06" //默认客户本人type
          },
          {
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "06" //默认客户本人type
          }
        ],
        AlipayFamily: [{ //家庭联系人-微信
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "03"
          },
          {
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "03"
          }
        ],
        AlipayWork: [{ //工作证明-微信
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "05"
          },
          {
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "05"
          }
        ],
        AlipayOthers: [{ //其他联系人-微信
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "04"
          },
          {
            applyId: this.propQTconclution.applyId,
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "04"
          }
        ],
        insTelCustInfo: {
          applyId: this.propQTconclution.applyId,
          telNum: '',
          telRecord: '',
          iisself: '',
          iisselftxt: '',
          insResult: '00', // 质检结果(00:正常，01:异常)		
          remark: '',
        }, //客户本人-拨打核实-本人只有一条电话拨打核实记录---obj
        insTelVerifyListAddress: [], //住址电话-电话拨打核实        
        insTelVerifyListCompany: [], //单位电话-电话拨打核实
        insTelVerifyListFamily: [], //家庭联系人-电话拨打核实
        insTelVerifyListWork: [], //工作证明-电话拨打核实
        insTelVerifyListOthers: [], //其他联系人-电话拨打核实
        insTelVerifyListConcat: [], //合并电话拨打核实-除客户本人
        regularInfo: {
          applyId: this.propQTconclution.applyId,
          // 资料核实
          isForm: '1', //申请单表是否符合要求
          isFormRemark: '', //申请表是否符合要求说明
          isIdcard: '1', //身份证证明是否符合要求
          isIdcardRemark: '', //身份证证明是否符合要求说明
          isIncome: '1', //收入证明是否符合要求
          isIncomeRemark: '', //收入证明是否符合要求说明
          isWork: '1', //工作证明是否符合要求
          isWorkRemark: '', //工作证明是否符合要求说明
          isEstate: '1', //房产资料是否符合要求
          isEstateRemark: '', //房产资料是否符合要求说明
          isLive: '1', //居住证明是否符合要求
          isLiveRemark: '', //房产资料是否符合要求说明
          isBusiness: '1', //经营证明是否符合要求
          isBusinessRemark: '', //经营证明是否符合要求说明
          isCredit: '1', //信用报告是否符合要求
          isCreditRemark: '', //信用报告是否符合要求说明
          isCustomerflow: '1', //客户流水是否符合要求
          isCustomerflowRemark: '', //客户流水是否符合要求说明
          isCustomerother: '1', //客户其他资料是否符合要求
          isCustomerotherRemark: '', //客户其他资料是否符合要求说明
          isLiabilities: '', //负债计算是否正确
          isLiabilitiesRemark: '', //负债计算是否正确说明
          isFlow: '', //流水计算是否正确
          isFlowRemark: '', //负债计算是否正确说明
          isReference: '', //征信录入是否正确
          isReferenceRemark: '', //征信录入是否正确说明
          // 第三方信息查询 
          wbeexEcuted: '', //客户在人法网是否有被执行信息
          wbeexEcutedtxt: '', //客户在人法网是否有被执行信息说明   
          wnetEcutedBrea: '', //客户在失信网是否有失信记录
          wnetEcutedBreatxt: '', //客户在失信网是否有失信记录说明                 
          wnetPhone: '', //网上搜索借款人的手机是否有异常
          wnetPhonetxt: '', //网上搜索借款人的手机是否有异常说明
          wnetAddrandEstate: '', //网上搜索借款人现居住地址和房产地址是否异常
          wnetAddrandEstatetxt: '', //当地工商网查询企业基本信息中是否有登记说明
          wnetCompany: '', //当地工商网查询企业基本信息中是否有登记
          wnetCompanytxt: '', //当地工商网查询企业基本信息中是否有登记
          wnetAddrstate: '', //客户工作单位在全国组织代码查询中是否存在
          wnetAddrstatetxt: '', //客户工作单位在全国组织代码查询中是否存在说明
          icbcRegistrationInfo: '', //工商登记信息说明
          // 内部匹配核实
          isInmatch: '', //内部匹配是否进行排查
          isInmatchRemark: '', //内部匹配是否进行排查说明
        }, // // 资料核实+三方信息查询+ 内部匹配核实
        // ------------------------各主管审批查询TableData---------------------------
        TrilSelfTableData: [], //初终审本人
        ManagerFirstTableData: [], //初终审主管首次
        ManagerSecondTableData: [], //初终审主管二次
        insReconApproval: [], //复议审批表
        tabIndex: 0,
        payment: true,
        custom: true,
        others: false,
        addTr: true,
        telType: '06', //电话征信 电话类型入参
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8", "9", '10'], //折叠面板 默认显示下标
        tabTitle: ["客户本人", '住址电话', "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
        QTresult: [{ //常规下拉
          value: '01',
          label: '初审一般差错'
        }, {
          value: '02',
          label: '初审重大差错'
        }, {
          value: '03',
          label: '终审一般差错'
        }, {
          value: '04',
          label: '终审重大差错'
        }, {
          value: '05',
          label: '初审建议优化'
        }, {
          value: '06',
          label: '终审建议优化'
        }, {
          value: '09',
          label: '无'
        }],
        QTresultSpecial: [{ //专项下拉
          value: '07',
          label: '专项'
        }, {
          value: '09',
          label: '无'
        }],
        QTresultS: [{ //纵向下拉
          value: '08',
          label: '纵向'
        }, {
          value: '09',
          label: '无'
        }],
        RecResult: [{
          label: '审批拒绝',
          value: '02',
        }, {
          label: '审批通过',
          value: '01',
        }],
        QTresultAlert: [{
          value: '01',
          label: '初审一般差错'
        }, {
          value: '02',
          label: '初审重大差错'
        }, {
          value: '03',
          label: '终审一般差错'
        }, {
          value: '04',
          label: '终审重大差错'
        }, {
          value: '10',
          label: '建议优化'
        }, {
          value: '07',
          label: '专项'
        }, {
          value: '08',
          label: '纵向'
        }, {
          value: '09',
          label: '无'
        }],
        // ----------------------------------------
        ApprolisError: [{
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],
        value: '',
        // -----------弹窗---
        ReconsiderShow: false,
        AreaReconsiderShow: false,
        ReAprovalShow: false,
        AprovalShow: false,
        lcdialogVisible: false,
        lcgjData: [],
        // socialLogVisible: false,
        // bigDataLogVisible: false,
        social: '', //社保公积金 已绑定 未绑定
        // -------------------单选按钮 disabled-------------
        material: false, //资料核实
        InfoInquire: false, //三方信息查询
        matching: false, //内部配核实
        PhoneCredit: false, //电话征信
        QTConclution: false, //质检结论
        // -----------------手风琴显示项--------------------
        AprovalInfolShow: true, //审批信息        
        MaterialShow: true, //资料核实
        InfoSearchShow: true, //三方信息查询
        MatchingShow: true, //内部匹配核实
        reResultShow: false, //复核结论-div 
        ReApply: false, //初终审复议申请信息
        SuperVisor: false, //审批主管第一次复议申请信息
        FirstReconsider: false, // 第一次复议申请信息
        SuperVisorSecond: false, // 审批主管第二次复议申请信息
        // --------------------底部按钮全部+质检结论添加删除按钮-----------------
        QTConclutionBtn: false,
        BottomBtn: true, //底部按钮全部
        saveBtn: true, //按钮 - 保存
        submitBtn: true, //按钮 - 提交
        NoReconsiderBtn: false, //按钮 - 无需复议
        ReconsiderBtn: false, //按钮 - 发起复议
        AreaReconsiderBtn: false, //按钮 - 区域经理提交
        ReAprovalBtn: false, //按钮 - 复议审批
        AprovalBtn: false, //按钮 - 审批
        AntiBtn: true, //发起反欺诈
        RiskControlBtn: true, //按钮 - 大数据风控
        SocialSecurityBtn: true, //按钮 - 社保公积金
        // --------------------------------质检结论-质检结果-------------------
        checkResultCount01: 0,
        checkResultCount02: 0,
        checkResultCount03: 0,
        checkResultCount04: 0,
        checkResultCount05: 0,
        checkResultCount06: 0,
        checkResultCount07: 0,
        checkResultCount08: 0,
        checkResultCount09: 0,
        checkResultCount10: 0,
      }
    },
    props: ['propQTconclution'],
    methods: {
      ccc() {
        console.log(this.regularInfo.isFormRemark.length)
        console.log('a' + this.regularInfo.isFormRemark + "b")
      },
      getSystermTime() { // 获取系统时间-质检结论-质检日期取值---基础接口
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.systermTime = res.data;
          }
        })
      },
      show() {
        this.ReconsiderShow = true;
      },
      referPort() { // 质检页面查询接口
        this.get("/insConclusion/queryInsConclusionObj?applyId=" + this.propQTconclution.applyId + '&' + Math.random()
          // , {
          //   applyId: this.propQTconclution.applyId, //入参待更新+测试-------------------------------------------------------
          // }
        ).then(res => {
          if (res.statusCode == 200) {
            // console.log(this.Alipay)
            // 除基本信息以外，专员获取都为空，applyid要一个个赋值进去
            //  基本信息                                -Object
            this.baseInfo = res.data.applyBaseInfo;
            // 质检流程-质检页面查询接口-基本信息中取流程轨迹入参  processInstanceIdSecond不为空取 processInstanceIdSecond ，为空取processInstanceId
            this.baseInfo && this.baseInfo.processInstanceIdSecond ? this.processInstanceIdParams = this.baseInfo.processInstanceIdSecond :
              this.processInstanceIdParams = this.baseInfo.processInstanceId;
            // 资料核实+三方信息查询+ 内部匹配核实         -Object
            // !res.data.insRegularInfo ? this.regularInfo.applyId = this.propQTconclution.applyId : this.regularInfo =
            //   res.data.insRegularInfo;
            !res.data.insRegularInfo ? this.regularInfo : this.regularInfo = res.data.insRegularInfo;
            // console.log(this.propQTconclution.applyId)
            // 质检结论                                  -Object
            !res.data.insConclusionList ? this.insConclusion.applyId = this.propQTconclution.applyId : this.insConclusion =
              res.data.insConclusionList;
            this.insConclusion[0] && this.insConclusion[0].id ? this.addId = this.insConclusion[0].id : this.addId =
              ''; //取添加质检结论时，id值 
            // 循环质检结论，取issend为1的那条数据的id，作为发起复议弹窗入参
            for (var n = 0; n < this.insConclusion.length; n++) {
              this.insConclusion[n].isSend && this.insConclusion[n].isSend == '1' ? this.conclusionId = this.insConclusion[
                n].id : '';
            }
            // 复核结论   -----obj
            !res.data.insReviewConclusion ? this.reviewConclusion.applyId = this.propQTconclution.applyId : this.reviewConclusion =
              res.data.insReviewConclusion;
            // 电话征信：客户本人-电话拨打核实 - 本人只有一条电话拨打核实记录            -object
            // 专员第一次进，只返回电话号码-因为是从申请表取的。保存之后其他字段都会有，applyid也会被存入
            if (!res.data.insTelCustInfo.applyId) { //第一次进来，无数据（除电话号码），除默认选正常其他分别赋值进去
              // 质检结果不赋值，因为默认选正常-00
              this.insTelCustInfo.applyId = this.propQTconclution.applyId;
              this.insTelCustInfo.telNum = res.data.insTelCustInfo.telNum; //电话号码
              this.insTelCustInfo.telRecord = res.data.insTelCustInfo.telRecord; //电话录音
              this.insTelCustInfo.iisself = res.data.insTelCustInfo.iisself; //接听人是否借款人本人
              this.insTelCustInfo.iisselftxt = res.data.insTelCustInfo.iisselftxt; //接听说明
              this.insTelCustInfo.remark = res.data.insTelCustInfo.remark; //备注
            } else {
              this.insTelCustInfo = res.data.insTelCustInfo;
              // this.insTelCustInfo.insResult = res.data.insTelCustInf.insResult//电话拨打核实-质检结果
            }
            // !res.data.insTelCustInfo.applyId ? this.insTelCustInfo.applyId = this.propQTconclution.applyId : this.insTelCustInfo =
            //   res.data.insTelCustInfo; //this.insTelCustInfo 是obj / 查询接口 -只返回客户本人-电话核实信息
            // !res.data.insTelCustInfo.insResult ? '' : this.insTelCustInfo.insResult = res.data.insTelCustInf.insResult; //本人拨打电话核实-默认选00           
            // 电话征信：电话拨打核实-除客户本人,保存之后清空数组重新保存最新值
            this.insTelVerifyListAddress = [];
            this.insTelVerifyListCompany = [];
            this.insTelVerifyListFamily = [];
            this.insTelVerifyListWork = [];
            this.insTelVerifyListOthers = [];
            if (res.data.insTelVerifyList) {
              for (var k = 0; k < res.data.insTelVerifyList.length; k++) {
                res.data.insTelVerifyList[k].insResult == '' || res.data.insTelVerifyList[k].insResult == null ?
                  res.data.insTelVerifyList[k].insResult = '00' : ''; //质检结果如果没有值，默认选00 正常
                !res.data.insTelVerifyList[k].applyId ? res.data.insTelVerifyList[k].applyId = this.propQTconclution
                  .applyId : ''; //质检结果如果没有值，默认选00 正常
                res.data.insTelVerifyList[k].telType === '01' ? this.insTelVerifyListAddress.push(res.data.insTelVerifyList[
                  k]) : ''; //住址电话
                res.data.insTelVerifyList[k].telType === '02' ? this.insTelVerifyListCompany.push(res.data.insTelVerifyList[
                  k]) : ''; //单位电话
                res.data.insTelVerifyList[k].telType === '03' ? this.insTelVerifyListFamily.push(res.data.insTelVerifyList[
                  k]) : ''; //家庭联系人
                res.data.insTelVerifyList[k].telType === '04' ? this.insTelVerifyListOthers.push(res.data.insTelVerifyList[
                  k]) : ''; //其他联系人
                res.data.insTelVerifyList[k].telType === '05' ? this.insTelVerifyListWork.push(res.data.insTelVerifyList[
                  k]) : ''; //工作证明
              }
            }
            // 电话征信：微信/支付宝核实  ----  单位电话无微信支付宝--- -Array  (专员进来为空，提交/保存之后八条都会返回)
            for (var k = 0; k < res.data.insWechatAlipayList.length; k++) {
              if (res.data.insWechatAlipayList[k].telType == '06') { //客户本人
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  // this.AlipayCus[0] = res.data.insWechatAlipayList[k];
                  // this.AlipayCus[0].insResult = res.data.insWechatAlipayList[k].insResult;
                  this.AlipayCus.shift();
                  this.AlipayCus.unshift(res.data.insWechatAlipayList[k]);
                } else {
                  // this.AlipayCus[1] = res.data.insWechatAlipayList[k];
                  this.AlipayCus.pop();
                  this.AlipayCus.push(res.data.insWechatAlipayList[k]);
                }
              } else if (res.data.insWechatAlipayList[k].telType == '03') { //家庭联系人
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  // this.AlipayFamily[0] = res.data.insWechatAlipayList[k];
                  this.AlipayFamily.shift();
                  this.AlipayFamily.unshift(res.data.insWechatAlipayList[k]);
                } else {
                  // this.AlipayFamily[1] = res.data.insWechatAlipayList[k];
                  this.AlipayFamily.pop();
                  this.AlipayFamily.push(res.data.insWechatAlipayList[k]);
                }
              } else if (res.data.insWechatAlipayList[k].telType == '04') { //其他联系人
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  // this.AlipayOthers[0] = res.data.insWechatAlipayList[k];
                  this.AlipayOthers.shift();
                  this.AlipayOthers.unshift(res.data.insWechatAlipayList[k]);
                } else {
                  // this.AlipayOthers[1] = res.data.insWechatAlipayList[k];
                  this.AlipayOthers.pop();
                  this.AlipayOthers.push(res.data.insWechatAlipayList[k]);
                }
              } else if (res.data.insWechatAlipayList[k].telType == '05') { //工作证明
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  // this.AlipayWork[0] = res.data.insWechatAlipayList[k];
                  this.AlipayWork.shift();
                  this.AlipayWork.unshift(res.data.insWechatAlipayList[k]);
                } else {
                  // this.AlipayWork[1] = res.data.insWechatAlipayList[k];
                  this.AlipayWork.pop();
                  this.AlipayWork.push(res.data.insWechatAlipayList[k]);
                }
              }
            }
            this.WechatData(0); //客户本人 微信支付宝赋值为客户本人AlipayCus
            this.Social(); //社保公积金接口
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getManagerList() { //获取各主管查看table信息
        this.get("/insReconApply/getReconApplyReconApproval", {
          applyId: this.propQTconclution.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            //insReconApplyList:复议申请表   insReconApproval ：复议审批表
            res.data.insReconApplyList ? this.insReconApply = res.data.insReconApplyList : '';
            // 清楚数据
            this.TrilSelfTableData = []; //初终审本人
            this.ManagerFirstTableData = []; //初终审主管首次
            this.ManagerSecondTableData = []; //初终审主管二次
            // console.log(this.insReconApply )
            for (var m = 0; m < this.insReconApply.length; m++) {
              console.log(this.insReconApply[m].reconType)
              this.insReconApply[m].reconType == '00' ? this.TrilSelfTableData.push(this.insReconApply[m]) : ''; //00:初终审本人---初终审复议申请信息
              this.insReconApply[m].reconType == '01' ? this.ManagerFirstTableData.push(this.insReconApply[m]) : ''; //01:初终审主管首次----审批主管第一次复议申请信息
              this.insReconApply[m].reconType == '02' ? this.ManagerSecondTableData.push(this.insReconApply[m]) :
                ''; //02:初终审主管二次----审批主管第二次复议申请信息
            }
            // 第一次复议审批信息--审批信息取值-obj
            this.insReconApproval = [];
            res.data.insReconApproval ? this.insReconApproval.push(res.data.insReconApproval) : '';
            // res.data.insReconApproval && res.data.insReconApproval.reviewRemark ? this.insReconApproval.push(res.data
            //   .insReconApproval) : ''; //复议申请表
            // res.data.insReconApproval.reviewRemark?this.insReconApproval.push(res.data.insReconApproval):'';//复议申请表
          } else {
            this.$message.error(res.msg);
          }
        });
        // 
      },
      addQTResult() { //添加
        if (this.insConclusion.length == 0) {
          this.insConclusion.push({
            applyId: this.propQTconclution.applyId, // 申请单id
            checkResult: "", // 质检结果
            errorType: "", // 差错类型
            errorDescribe: "", // 差错描述
            remark: "", // 备注
            insMemberCode: this.userInf.userCode, // 操作人员-质检code            
            insMemberName: this.userInf.userName, // 操作人员-质检员name
            insDate: this.systermTime, // 质检日期
            checkType: '01', // 初终检标志01:初检，02：终检 ，终审点击保存的时候全部改为02（包括插过来的初审数据的CheckType）
            instaskType: this.instaskType, //任务类型（00:常规质检，01:专项质检）
            // id: this.addId, // 专员或主管首次保存或提交不传-checktype=01专员：新添加的都  CheckType=01主管：保存提交的时候id值不清空（不能新添加）
            id: '', // 专员或主管首次保存或提交不传, -checktype=01专员：新添加的id都为空，已经添加保存过的id不清空，主管亦同  CheckType=01主管：保存提交的时候id值不清空（不能新添加）
            isSubmit: "0", // 0：保存 1：提交
            // "checkResult": "", // 任务类型（00:常规质检，01:专项质检）
          });
          console.log(this.insConclusion)
        } else {
          if (this.insConclusion[this.insConclusion.length - 1].checkResult == '') { //质检结果不能为空
            this.$message.error('质检结果不能为空！');
            return
          } else {
            this.insConclusion.push({
              applyId: this.propQTconclution.applyId, // 申请单id
              checkResult: "", // 质检结果
              errorType: "", // 差错类型
              errorDescribe: "", // 差错描述
              remark: "", // 备注
              insMemberCode: this.userInf.userCode, // 操作人员-质检code            
              insMemberName: this.userInf.userName, // 操作人员-质检员name
              insDate: this.systermTime, // 质检日期
              // checkType: this.propQTconclution.pageType == 'checkApp_apply' ? '01' : '02', // 初终检标志01:初检，02：终检
              checkType: '01', //  初终检标志01:初检，02：终检 ，终审点击保存的时候全部改为02（包括插过来的初审数据的CheckType）
              instaskType: this.instaskType, //任务类型（00:常规质检，01:专项质检）
              // id: this.addId, // 专员或主管首次保存或提交不传
              id: '', // 专员或主管首次保存或提交不传, -checktype=01专员：新添加的id都为空，已经添加保存过的id不清空，主管亦同  CheckType=01主管：保存提交的时候id值不清空（不能新添加）              
              isSubmit: "0", // 0：保存 1：提交
              // "checkResult: "", // 任务类型（00:常规质检，01:专项质检）
            });
          }
        };
      },
      delQTresult() {
        for (var i = 0; i < this.insConclusion.length; i++) {
          if (this.insConclusion[i] == this.currentRow) {
            this.insConclusion.splice(i, 1);
          }
        }
      },
      QTtableVal(val) {
        this.currentRow = val
      },
      WechatData(ind) {
        if (ind == 0) { //客户本人
          return this.AlipayCus;
        } else if (ind == 3) { //家庭联系人
          return this.AlipayFamily;
        } else if (ind == 4) { //工作证明
          return this.AlipayWork;
        } else if (ind == 5) { //其他联系人
          return this.AlipayOthers;
        }
      },
      TelData(ind) {
        if (ind == 1) { //住址电话
          return this.insTelVerifyListAddress;
        } else if (ind == 2) { //单位电话
          return this.insTelVerifyListCompany;
        } else if (ind == 3) { //家庭联系人
          return this.insTelVerifyListFamily;
        } else if (ind == 4) { //工作证明
          return this.insTelVerifyListWork;
        } else if (ind == 5) { //其他联系人
          return this.insTelVerifyListOthers;
        }
      },
      tabClick(ev, ind, val) {
        this.tabIndex = this.ind = ind;
        if (ind == 0) { // 客户本人
          this.telType = '06'
          this.payment = true;
          this.custom = true;
          this.others = false;
        } else if (ind == 1) { // 地址电话
          this.telType = '01'
          this.payment = false;
          this.custom = false;
          this.others = true;
        } else if (ind == 2) { // 单位电话
          this.telType = '02'
          this.payment = false;
          this.custom = false;
          this.others = true;
        } else if (ind == 3) { // 家庭联系人
          this.telType = '03'
          this.payment = true;
          this.custom = false;
          this.others = true;
        } else if (ind == 4) { // 工作证明人
          this.telType = '05'
          this.payment = true;
          this.custom = false;
          this.others = true;
        } else if (ind == 5) { // 其他联系人
          this.telType = '04'
          this.payment = true;
          this.custom = false;
          this.others = true;
        }
      },
      SubmitAlert() { //提交弹窗
        // this.submitShow = true;
        // this.adbtn = '确认';
        // this.loadsitu = false;
        this.$confirm('确定提交？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.SaveInf('提交');
        }).catch(() => {});
      },
      // ---------------------------------按钮事件----------------
      // 保存 或 提交
      SaveInf(type) { //质检主管不需要提交，只有质检专员 显示提交
        // this.loadsitu = true;
        // this.adbtn = '提交中';
        // this.submitShow = false;
        this.checkResultCount01 = 0;
        this.checkResultCount02 = 0;
        this.checkResultCount03 = 0;
        this.checkResultCount04 = 0;
        this.checkResultCount05 = 0;
        this.checkResultCount06 = 0;
        this.checkResultCount07 = 0;
        this.checkResultCount08 = 0;
        this.checkResultCount09 = 0;
        this.checkResultCount10 = 0;
        if (type == '提交') { //提交 加校验，保存无需校验必填---常规质检
          // 保存、提交质检结论都校验
          if (this.propQTconclution.tastwaitingPass.listType == '常规质检') {
            if (!this.regularInfo.isForm || !this.regularInfo.isIdcard || !this.regularInfo.isIncome || !this.regularInfo
              .isWork ||
              !this.regularInfo.isEstate || !this.regularInfo.isLive || !this.regularInfo.isBusiness || !this.regularInfo
              .isCredit ||
              !this.regularInfo.isCustomerflow || !this.regularInfo.isCustomerother || !this.regularInfo.isLiabilities ||
              !this.regularInfo.isFlow ||
              !this.regularInfo.isReference ||
              !this.regularInfo.wbeexEcuted || !this.regularInfo.wnetEcutedBrea || !this.regularInfo.wnetPhone ||
              !this.regularInfo.wnetAddrandEstate || !this.regularInfo.wnetCompany || !this.regularInfo.wnetAddrstate ||
              !this.regularInfo.isInmatch ||
              (this.insConclusion.length > 0 && this.insConclusion[this.insConclusion.length - 1].checkResult == '') //质检结论最后一条质检结果校验是否为空
            ) {
              this.$message.error('请输入必填项！')
              return
            } else if (this.insConclusion.length == 0) { //必须添加一条质检结论校验
              this.$message.error('请至少添加一条质检结论！')
              return
            }
          } else if (this.propQTconclution.tastwaitingPass.listType == '专项质检') {
            if (this.insConclusion.length == 0) { //必须添加一条质检结论校验
              this.$message.error('请至少添加一条质检结论！')
              return
            }
          }
        }
        if (type == '保存') {
          if (this.insConclusion.length > 0 && this.insConclusion[this.insConclusion.length - 1].checkResult == '') { //质检结论最后一条质检结果校验是否为空
            this.$message.error('请输入质检结论必填项！')
            return
          }
        }
        // 提交 保存 
        if (this.propQTconclution.tastwaitingPass.listType == '常规又专项质检') { //常规又专项质检
          this.post("/insConclusion/addReviewConclusion", {
            id: this.reviewConclusion.id,
            applyId: this.reviewConclusion.applyId,
            reviewConclusion: this.reviewConclusion.reviewConclusion,
            checkType: this.propQTconclution.pageType == 'checkApp_apply' ? '01' : '02',
            isSubmit: type == '提交' ? '1' : '0',
            taskId: this.propQTconclution.tastwaitingPass.taskId,
          }).then(res => {
            if (res.statusCode == 200) {
              this.$message({
                type: 'success',
                message: type + '成功！'
              })
              if (type == '提交') {
                this.propQTconclution.pageType == 'checkApp_apply' ? this.$router.push(
                  '/commissioner?taskNodeName=checkApp_apply&flag=07') : ''; //专员
                this.$store.dispatch('delVisitedViews', {
                  name: '质检详情'
                }).then((views) => {
                  const latestView = views.slice(-1)[0]
                  if (latestView) {
                    this.$router.push(latestView.StatefullPath);
                  } else {
                    this.$router.push('/')
                  }
                })
              }
              this.referPort(); //保存之后要查询最新信息，否则一直为入参会一直为原始信息，id第二次保存的时候或者提交的时候依旧会为空（应该有值）
            } else {
              this.$message.error(res.msg);
            }
            // this.submitShow = false;
          });
        } else { //  常规质检、专纵质检
          // 保存、提交之前都要校验质检结论是否重复添加多条
          if (this.insConclusion.length !== 0) { //质检结论中质检结果不能重复添加
            for (var n = 0; n < this.insConclusion.length; n++) {
              this.insConclusion[n].checkResult == '01' ? this.checkResultCount01++ : '';
              this.insConclusion[n].checkResult == '02' ? this.checkResultCount02++ : '';
              this.insConclusion[n].checkResult == '03' ? this.checkResultCount03++ : '';
              this.insConclusion[n].checkResult == '04' ? this.checkResultCount04++ : '';
              this.insConclusion[n].checkResult == '05' ? this.checkResultCount05++ : '';
              this.insConclusion[n].checkResult == '06' ? this.checkResultCount06++ : '';
              this.insConclusion[n].checkResult == '07' ? this.checkResultCount07++ : '';
              this.insConclusion[n].checkResult == '08' ? this.checkResultCount08++ : '';
              this.insConclusion[n].checkResult == '09' ? this.checkResultCount09++ : '';
              this.insConclusion[n].checkResult == '10' ? this.checkResultCount10++ : '';
            }
            // 添加质检结论校验
            // 01-09，都只能存在一个，即有01不能再次添加01
            // 01和02互斥，有01无02，有02无01
            // 03和04互斥，有03无04，有04无03
            // 07和08互斥，有07无08，有08无07
            // 09和01/02/03/04/07/08/10互斥，即在选择无以后，不可以再选其他选项。
            if (this.checkResultCount01 > 1 || this.checkResultCount02 > 1 || this.checkResultCount03 > 1 || this.checkResultCount04 >
              1 || this.checkResultCount05 > 1 || this.checkResultCount06 > 1 || this.checkResultCount07 > 1 || this.checkResultCount08 >
              1 || this.checkResultCount09 > 1 || this.checkResultCount10 > 1) {
              this.$message.error('质检结论中质检结果重复添加！')
              return
            } else if (this.checkResultCount01 > 0 && this.checkResultCount02 > 0) {
              this.$message.error('初审差错重复！')
              return
            } else if (this.checkResultCount03 > 0 && this.checkResultCount04 > 0) {
              this.$message.error('终审差错重复！')
              return
            } else if (this.checkResultCount07 > 0 && this.checkResultCount08 > 0) {
              this.$message.error('质检结果专项/纵向/无不能同时存在！')
              return
            } else if (this.checkResultCount09 > 0 && (this.checkResultCount01 > 0 || this.checkResultCount02 > 0 ||
                this.checkResultCount03 > 0 || this.checkResultCount04 > 0 || this.checkResultCount05 > 0 || this.checkResultCount06 >
                0 || this.checkResultCount07 > 0 || this.checkResultCount08 >
                0)) {
              this.$message.error('质检结果已经选择无！')
              return
            }
          }
          // console.log( '01',      this.checkResultCount01)
          // console.log('02',       this.checkResultCount02)
          // console.log('03',       this.checkResultCount03)
          // console.log('04',       this.checkResultCount04)
          // console.log('05',       this.checkResultCount05)
          // console.log('06',       this.checkResultCount06)
          // console.log('07',       this.checkResultCount07)
          // console.log('08',       this.checkResultCount08)
          // console.log('09',       this.checkResultCount09)
          // console.log('10',       this.checkResultCount10)
          // this.$message.error('return')
          // 微信支付宝+电话核实（除本人）合并为一个数组
          this.insTelVerifyListConcat = this.insTelVerifyListAddress.concat(this.insTelVerifyListCompany).concat(this.insTelVerifyListFamily)
            .concat(this.insTelVerifyListWork)
            .concat(this.insTelVerifyListOthers)
          this.AlipayConcat = this.AlipayCus.concat(this.AlipayFamily).concat(this.AlipayWork).concat(this.AlipayOthers)
          // 循环质检结论list 改变对应的值-不能跟上面的循环校验一起，校验不过不用修改
          for (var i = 0; i < this.insConclusion.length; i++) {
            console.log('isSubmit：', this.insConclusion[i].isSubmit)
            type == '保存' ? this.insConclusion[i].isSubmit = '0' : this.insConclusion[i].isSubmit = '1'; // 质检结论 保存：0，修改：1
            this.propQTconclution.pageType !== 'checkApp_apply' ? this.insConclusion[i].checkType = '02' : this.insConclusion[
              i].checkType = '01'; // 质检主管保存 质检结论 CheckType 改为02，初检01
            this.propQTconclution.pageType !== 'checkApp_apply' && this.insConclusion[i].checkType == '01' ? this.insConclusion[
              i].id = '' : ''; //主管首次保存或提交id设置为空
          }
          // insResultTxt  更改微信支付宝显示汉字字段
          for (var k = 0; k < this.AlipayConcat.length; k++) {
            this.AlipayConcat[k].insResult === '01' ? this.AlipayConcat[k].insResultTxt = '异常' : this.AlipayConcat[k].insResultTxt =
              '正常';
          }
          this.SaveInfParams = { //入参
            applyId: this.propQTconclution.applyId,
            checkType: this.propQTconclution.pageType == 'checkApp_apply' ? '01' : '02', //专员  01:初检，02：终检
            isSubmit: type == '提交' ? '1' : '0',
            taskId: this.propQTconclution.tastwaitingPass.taskId,
            applyBaseInfo: this.baseInfo, //基础信息
            insConclusionList: this.insConclusion, //质检结论页-质检结论
            insRegularInfo: this.regularInfo, //常规质检
            insTelCustInfo: this.insTelCustInfo, //电话征信-客户本人-电话拨打核实
            insTelVerifyList: this.insTelVerifyListConcat, //电话征信-拨打核实-除客户本人
            insWechatAlipayList: this.AlipayConcat, //电话征信-微信/支付宝核实
          }
          this.post("/insConclusion/addOrSubmit", this.SaveInfParams)
            .then(res => {
              if (res.statusCode == 200) {
                this.$message({
                  type: 'success',
                  message: type + '成功！'
                })
                // 保存获取最新信息，提交跳转
                // type == '保存' ? this.referPort() : ''; // 点保存重新获取信息
                if (type == '提交') {
                  this.propQTconclution.pageType == 'checkApp_apply' ? this.$router.push(
                    '/commissioner?taskNodeName=checkApp_apply&flag=07') : ''; //专员
                  this.$store.dispatch('delVisitedViews', {
                    name: '质检详情'
                  }).then((views) => {
                    const latestView = views.slice(-1)[0]
                    if (latestView) {
                      this.$router.push(latestView.StatefullPath);
                    } else {
                      this.$router.push('/')
                    }
                  })
                }
                this.referPort(); //同上
              } else {
                this.$message.error(res.msg);
              }
            });
          // this.submitShow = false;
        }
      },
      // 无需复议
      NoReconsider() {
        this.post("/insReconApply/noNeedReview", {
          applyId: this.propQTconclution.applyId,
          taskId: this.propQTconclution.tastwaitingPass.taskId,
          reconType: this.propQTconclution.tastwaitingPass.reconType,
        }).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '提交成功！'
            });
            this.propQTconclution.pageType == 'checkApp_trial_manager' ? this.$router.push(
              'ManagerTaskList?taskNodeName=checkApp_trial_manager&flag=10') : '';
            this.propQTconclution.pageType == 'checkApp_regional_manager' ? this.$router.push(
              'ACManagerTaskList?taskNodeName=checkApp_regional_manager&flag=12') : '';
            this.$store.dispatch('delVisitedViews', {
              name: '质检详情'
            }).then((views) => {
              const latestView = views.slice(-1)[0]
              if (latestView) {
                this.$router.push(latestView.StatefullPath);
              } else {
                this.$router.push('/')
              }
            })
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      ToReconsiderAlert() { //发起复议弹窗
        this.ReconsiderShow = true;
        this.loadSub = false;
        this.ReconSubmit = '提交';
      },
      AreaToReconsiderAlert() {
        this.AreaReconsiderShow = true;
        this.loadSub = false;
        this.ReconSubmit = '提交';
      },
      ReAprovalAlert() { //复议审批-弹窗-编辑
        this.ReAprovalShow = true;
        this.ReconSubmit = '提交';
        this.loadSub = false;
      },
      AprovalAlert() { //审批-弹窗-编辑  合规经理-查询区域经理审批内容
        this.ReAprovalShow = true;
        this.ReconSubmit = '提交';
        this.loadSub = false;
        //  获取区域经理审批信息
        this.get("/insReconApply/getReconApprovalByState", {
          applyId: this.propQTconclution.applyId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.ToApprovalParams.reviewResult = res.data.reviewResult;
            this.ToApprovalParams.checkResult = res.data.checkResult;
            this.ToApprovalParams.isError = res.data.isError;
            this.ToApprovalParams.errorType = res.data.errorType;
            this.ToApprovalParams.reviewRemark = res.data.reviewRemark;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      // 发起复议
      ToReconsider() {
        if (this.ReconsiderDes == '') {
          this.$message.error('复议说明不能为空！');
          return
        }
        this.loadSub = true;
        this.ReconSubmit = '提交中';
        this.post("/insReconApply/saveInsReconApply", {
          applyId: this.propQTconclution.applyId,
          taskId: this.propQTconclution.tastwaitingPass.taskId,
          taskNodeName: this.propQTconclution.pageType,
          reviewRemark: this.ReconsiderDes, //复议说明
          approverUserCode: this.userInf.userCode,
          reconDate: this.systermTime,
          reconType: this.reconTypeParams,
          conclusionId: this.conclusionId
          // taskNode:this.ReconsiderNode //不需要入
        }).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '发起复议成功！'
            })
            this.ReconsiderDes = ''; //请空复议说明输入框
            this.$router.push('/ManagerTaskList?taskNodeName=checkApp_trial_manager&flag=10');
            this.$store.dispatch('delVisitedViews', {
              name: '质检详情'
            }).then((views) => {
              const latestView = views.slice(-1)[0]
              if (latestView) {
                this.$router.push(latestView.StatefullPath);
              } else {
                this.$router.push('/')
              }
            })
          } else {
            this.$message.error(res.msg);
          }
        });
        this.ReconsiderShow = false;
      },
      // 区域经理提交按钮-发起复议
      AreaToReconsider() {
        if (this.ToAteaApprovalParams.reviewResult == '' || this.ToAteaApprovalParams.reviewRemark == '') {
          this.$message.error('有必填项未填！');
          return
        }
        this.loadSub = true;
        this.ReconSubmit = '提交中';
        this.post("/insReconApply/saveInsReconApproval", this.ToAteaApprovalParams).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '审批成功！'
            })
            // 清空已填数据
            this.ToAteaApprovalParams.reviewResult = ''; //复议结果
            this.ToAteaApprovalParams.reviewRemark = ''; //复议说明
            this.$router.push('/ACManagerTaskList?taskNodeName=checkApp_regional_manager&flag=12'); //区域经理提交成功-成功跳转到列表页
            this.$store.dispatch('delVisitedViews', {
              name: '质检详情'
            }).then((views) => {
              const latestView = views.slice(-1)[0]
              if (latestView) {
                this.$router.push(latestView.StatefullPath);
              } else {
                this.$router.push('/')
              }
            })
          } else {
            this.$message.error(res.msg);
          }
        });
        this.AreaReconsiderShow = false;
      },
      // 发起反欺诈
      AntiApply() {
        this.post("/antiFraud/getAntiFraudSurveyInfoByApplyId", {
          applyId: this.propQTconclution.applyId
        }).then(res => {
          if (res.statusCode == 200) { //200 可以发起
            this.$router.push({
              name: 'AntiApplyEditf'
            });
            localStorage.setItem("AntiApplyParams", JSON.stringify(this.AntiApplyParams));
          } else {
            if (res.statusCode !== 500) {
              this.$message.error('此进件正在发欺诈流程中，不能再次发起反欺诈！');
            }
          }
        });
      },
      ToApproval() { //复议审批、审批
        if (this.ToApprovalParams.reviewRemark == '' || this.ToApprovalParams.errorType == '' || this.ToApprovalParams.isError ==
          '' || this.ToApprovalParams.reviewResult == '') {
          this.$message.error('有必填项未填写！');
          return
        }
        this.ReconSubmit = '提交中';
        this.loadSub = true;
        this.ToApprovalParams.approverUserCode = this.userInf.userCode;
        this.ToApprovalParams.approverDate = this.systermTime;
        this.post("/insReconApply/saveInsReconApproval", this.ToApprovalParams).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '审批成功！'
            })
            // 清空已填数据
            this.ToApprovalParams.reviewResult = '';
            this.ToApprovalParams.checkResult = '';
            this.ToApprovalParams.isError = '';
            this.ToApprovalParams.errorType = '';
            this.ToApprovalParams.reviewRemark = '';
            // checkApp_check_recon_manager   复议首次
            this.propQTconclution.pageType == 'checkApp_check_recon_manager' ? this.$router.push(
              'ReManagerTaskList?taskNodeName=checkApp_check_recon_manager&flag=11') : ''; //复议首次-成功跳转到列表页
            this.propQTconclution.pageType == 'checkApp_compliance_manager' ? this.$router.push(
              'ACManagerTaskList?taskNodeName=checkApp_compliance_manager&flag=13') : ''; //合规经理结论点击审批-成功跳转到列表页
            this.$store.dispatch('delVisitedViews', {
              name: '质检详情'
            }).then((views) => {
              const latestView = views.slice(-1)[0]
              if (latestView) {
                this.$router.push(latestView.StatefullPath);
              } else {
                this.$router.push('/')
              }
            })
          } else {
            this.$message.error(res.msg);
          }
        });
        this.ReAprovalShow = false;
      },
      // 流程轨迹-工作流接口-查询流程轨迹
      getLcgjList() {
        this.lcdialogVisible = true;
        // POST
        // {
        //   processInstanceId:this.processInstanceIdParams,
        //   processStatus:'01'
        // }
        this.post(baseurlBPM.baseUrl_common2 + '/bpmService/getProcessTraceList', {
            processInstanceId: this.processInstanceIdParams,
            processStatus: '01'
          })
          .then(res => {
            this.lcgjData = res.taskDetailList;
          })
      },
      //大数据风控
      RiskControl() {
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          applyId: this.propQTconclution.applyId
        }).then(res => {
          if (res.obj == null) {
            // this.bigDataLogVisible = true;
            this.$confirm('此进件不存在大数据风控明细！', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              cancelButtonText: '取消',
              showCancelButton: true
            }).then(() => {}).catch(() => {});
          } else if (res.obj) {
            this.$router.push({
              path: '/PneCtrl'
            });
          }
        });
      },
      //社保/公积金
      Social() {
        this.post(baseurl.BaseUrl + '/rmMxSecFundQryAction!notSession_getLatestSuccRisQuery.action', {
          certCode: this.baseInfo.certCode,
          custName: this.baseInfo.custName
        }).then(res => {
          if (res.obj == null || res.obj == '') {
            this.social = "(未授权)";
          } else if (res.obj) {
            this.social = "(已授权)";
          }
        });
      },
      roSocialSecurity() { //社保/公积金-授权显示
        if (this.social == "(未授权)") {
          // this.socialLogVisible = true;
          this.$confirm('客户社保公积金未授权！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
        } else if (this.social == "(已授权)") {
          this.$router.push({
            path: '/SocialSe'
          });
        }
      },
      areaAndComplianceBtn() {
        this.onlyCheck();
        this.ReApply = true; //初终审复议申请信息
        this.SuperVisor = true; //审批主管第一次复议申请信息
        this.FirstReconsider = true; //第一次复议审批信息
        this.SuperVisorSecond = true; // 审批主管第二次复议申请信息
        this.saveBtn = false; //保存     
      },
      onlyCheck() { //   查看页面，-编辑常规又质检
        this.material = true; //资料核实
        this.InfoInquire = true; //三方信息查询
        this.matching = true; //内部匹配核实
        this.PhoneCredit = true; //电话征信
        this.QTConclution = true; //质检结论
      },
      Special() { //专项质检
        this.AprovalInfolShow = false; //审批信息        
        this.MaterialShow = false; //资料核实
        this.InfoSearchShow = false; //三方信息查询
        this.MatchingShow = false; //内部匹配核实
        this.submitBtn = false; //提交
      },
      regularAndSpecial() { //'常规又专项质检'
        this.reResultShow = true; //复核结论-div 
        this.AntiBtn = false; //发起反欺诈
        this.onlyCheck();
      },
      showdiffer() {
        // ----------------------角色------------------------------
        if (this.propQTconclution.pageType == 'checkApp_apply') { //专员-编辑  √
          if (this.propQTconclution.tastwaitingPass.listType == '常规质检') {
            this.instaskType = '00';
            this.QTConclutionBtn = true;
          } else
          if (this.propQTconclution.tastwaitingPass.listType == '专项质检') {
            this.instaskType = '01';
            this.QTresult = [];
            if (this.propQTconclution.tastwaitingPass.instaskType == '01') { //专项   
              this.QTresult = this.QTresultSpecial;
            } else if (this.propQTconclution.tastwaitingPass.instaskType == '02') { // 纵向
              this.QTresult = this.QTresultS;
            }
            this.Special();
            this.submitBtn = true; //提交
            this.QTConclutionBtn = true;
          } else if (this.propQTconclution.tastwaitingPass.listType == '常规又专项质检') {
            this.regularAndSpecial();
          }
        } else if (this.propQTconclution.pageType == 'checkApp_check_manager') { //主管-编辑 √
          if (this.propQTconclution.tastwaitingPass.listType == '常规质检') {
            this.submitBtn = false; //提交
          } else if (this.propQTconclution.tastwaitingPass.listType == '专项质检') {
            this.QTresult = [];
            if (this.propQTconclution.tastwaitingPass.instaskType == '01') { //专项   
              this.QTresult = this.QTresultSpecial;
            } else if (this.propQTconclution.tastwaitingPass.instaskType == '02') { // 纵向
              this.QTresult = this.QTresultS;
            }
            this.Special();
          } else if (this.propQTconclution.tastwaitingPass.listType == '常规又专项质检') {
            this.regularAndSpecial();
            this.submitBtn = false; //提交
          }
        } else if (this.propQTconclution.pageType == 'self') { //本人---单独页面
        } else if (this.propQTconclution.pageType == 'checkApp_trial_manager') { //初终审主管  √
          this.onlyCheck();
          this.getManagerList();
          this.ReApply = true; //初终审复议申请信息
          this.NoReconsiderBtn = true; //无需复议
          this.ReconsiderBtn = true; //发起复议
          this.saveBtn = false; //保存            
          this.submitBtn = false; //提交
          if (this.propQTconclution.tastwaitingPass.reconType == '00') {
            //首次复议
            this.ReconsiderNode = '质检主管'; //复议弹窗-复议节点
            this.reconTypeParams = '01'; //复议弹窗-入参reconType
          } else if (this.propQTconclution.tastwaitingPass.reconType == '01') {
            // 二次复议
            this.FirstReconsider = true; //第一次复议审批信息
            this.ReconsiderNode = '区域经理'; //复议弹窗-复议节点
            this.reconTypeParams = '02'; //复议弹窗-入参reconType
          }
        } else if (this.propQTconclution.pageType == 'checkApp_check_recon_manager') { //复议任务列表（首次） √
          this.onlyCheck();
          this.getManagerList();
          this.ToApprovalParams.insState = '00'; //复议审批入参-状态(00:首次审批,01:二次区域经理审批，02:二次合规经理审批)
          this.ReApply = true; //初终审复议申请信息
          this.SuperVisor = true; //审批主管第一次复议申请信息
          this.submitBtn = false; //提交
          this.ReAprovalBtn = true; //复议审批
        } else if (this.propQTconclution.pageType == 'checkApp_regional_manager') { //区域 √
          this.SocialSecurityBtn = false; //社保公积金
          this.areaAndComplianceBtn();
          this.getManagerList();
          this.RiskControlBtn = false; //大数据风控
          this.AreaReconsiderBtn = true; //区域经理提交
          this.submitBtn = false; //提交
        } else if (this.propQTconclution.pageType == 'checkApp_compliance_manager') { //合规 √
          this.areaAndComplianceBtn();
          this.getManagerList();
          this.ToApprovalParams.insState = '02';
          this.submitBtn = false; //提交
          this.AprovalBtn = true; //审批
        }
      },
    },
    mounted() {
      console.log('propQTconclution:', this.propQTconclution)
      this.URL = baseurl.imgBaseUrl;
      this.getSystermTime();
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      this.referPort(); //质检查询页面
      this.showdiffer();
    }
  }

</script>
<style scoped>
  .baseInf {
    padding-left: 10px;
    height: 110px;
  }

  .paddingleft {
    padding-left: 10px;
  }

  .baseInf p {
    width: 50%;
    float: left;
    margin-top: 10px;
  }

  .regularQT {
    overflow: hidden;
  }

  .regularQT table {
    border: 1px solid #ebeef5;
    font-size: 14px;
  }

  /* height: 70px; */

  .regularQT tr {
    min-height: 30px;
  }

  /* .regularQT tr:nth-of-type(1) {
    height: 35px;
    vertical-align: middle;
  } */

  .regularQT td,
  .regularQT th {
    text-align: center;
    border: 1px solid #ebeef5;
    color: #000;
  }

  .regularQT th {
    font-weight: 800;
    height: 35px;
  }

  .regularQT td {
    color: #606266;
    position: relative;
    padding: 0 10px;
    /* min-height:30px !important; */
    height: 30px;
    font-size: 13px;
  }

  .regularQT .material td:nth-of-type(4) {
    vertical-align: bottom;
  }

  .result_QT td {
    padding: 0 2px;
    overflow-x: auto;
  }

  .material {
    padding: 10px;
  }

  .result_QT {
    padding: 10px;
  }

  .btn {
    vertical-align: top;
    cursor: pointer;
    width: 80px;
    display: inline-block;
    position: relative;
  }

  .btn img {
    position: absolute;
    top: 3px;
    left: -35px;
  }


  .tab1Default {
    float: left;
    color: #183a56;
    padding: 5px 20px;
    border-radius: 4px;
    cursor: pointer;
  }

  .tabAct {
    color: #1387e6;
    background: #e7e7e7;
  }

  .P_title {
    clear: both;
    background: silver;
    padding: 2px 0 2px 20px;
    font-size: 16px;
  }

  .reResult {
    padding: 10px;
    margin: 30px 0;
  }

  .reResult div {
    display: inline-block;
    width: 900px;
    vertical-align: top;
  }

  .reApproval span {
    display: inline-block;
    width: 49%;
    margin-bottom: 10px;
  }

  .reApproval span:nth-of-type(1) label {
    display: inline-block;
    width: 150px;
    text-align: right;
  }

  .reApproval span:nth-of-type(2) label {
    width: 85px;
    text-align: right;
    display: inline-block;
  }

  .ReDec {
    width: 150px;
    display: inline-block;
    text-align: right;
  }

  .hint_word {
    top: -4px;
    text-align: left;
    padding-left: 20px;
  }

  .reconsider_Alert_Label {
    display: inline-block;
    width: 90px;
    text-align: right;
  }

</style>
