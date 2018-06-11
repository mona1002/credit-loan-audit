<template>
  <div class="regularQT">
    <!-- 审批信息 -->
    <el-collapse v-model="activeNames" v-if='AprovalInfolShow'>
      <el-collapse-item name="0">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批信息</span>
        </template>
        <div class="baseInf">
          <ul>
            <li>
              <p>客户名称：{{baseInfo.custName }} </p>
              <p>产品名称： {{baseInfo.proName }}</p>
            </li>
            <li>
              <p>初审人员：{{baseInfo.auditNamec }} </p>
              <p>初审日期：{{baseInfo.auditDatec }} </p>
            </li>
            <li>
              <p>终审人员：{{baseInfo.auditNamez }} </p>
              <p>终审日期：{{baseInfo.auditDatez }} </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 资料核实 -->
    <el-collapse v-model="activeNames" v-if='MaterialShow'>
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">资料核实</span>
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isForm==0" v-model.trim="regularInfo.isFormRemark" @keyup.native='ccc'
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isIdcard=='0'" v-model.trim="regularInfo.isIdcardRemark"
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isIncome==0" v-model.trim="regularInfo.isIncomeRemark" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isWork==0" v-model.trim="regularInfo.isWorkRemark" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isEstate==0" v-model.trim="regularInfo.isEstateRemark" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isLive==0" v-model.trim="regularInfo.isLiveRemark" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isBusiness==0" v-model.trim="regularInfo.isBusinessRemark"
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isCredit==0" v-model.trim="regularInfo.isCreditRemark" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isCustomerflow==0" v-model.trim="regularInfo.isCustomerflowRemark"
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isCustomerother==0" v-model.trim="regularInfo.isCustomerotherRemark"
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isLiabilities=='0'" v-model.trim="regularInfo.isLiabilitiesRemark"
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isFlow=='0'" v-model.trim="regularInfo.isFlowRemark" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='material' v-if="regularInfo.isReference=='0'" v-model.trim="regularInfo.isReferenceRemark"
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">三方信息查询</span>
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wbeexEcuted==1" v-model.trim="regularInfo.wbeexEcutedtxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetEcutedBrea==1" v-model.trim="regularInfo.wnetEcutedBreatxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetPhone==1" v-model.trim="regularInfo.wnetPhonetxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetAddrandEstate==1" v-model.trim="regularInfo.wnetAddrandEstatetxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetCompany=='0'" v-model.trim="regularInfo.wnetCompanytxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetAddrstate=='0'" v-model.trim="regularInfo.wnetAddrstatetxt"
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
                  <el-input type='textarea' :disabled='InfoInquire' v-model.trim="regularInfo.icbcRegistrationInfo" :rows="2" resize="none"
                    :maxlength='arealength' placeholder="请输入内容">
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">内部匹配核实</span>
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
                <el-input type='textarea' :disabled='matching' v-if="regularInfo.isInmatch=='0'" v-model.trim="regularInfo.isInmatchRemark"
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">电话征信</span>
        </template>
        <div class="CreditForm_CheckId">
          <!-- tab-title -->
          <ul>
            <li ref="tabOne" class="tab1Default" v-for="(val,index) in tabTitle" :key="index" @click="tabClick($event,index,val)" :class="{tabAct:tabIndex==index}">
              {{val}}</li>
          </ul>
          <!-- pay-content 微信/支付宝核实 -->
          <div v-show="this.payment" class="weChatNapliay">
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
                      <!-- <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="scope.row.insResult=='00'?scope.row.remark='':scope.row.remark"> -->
                      <el-radio label="00">正常</el-radio>
                      <el-radio label="01">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center">
                <template slot-scope="scope">
                  <b class="hint_word" v-show="scope.row.remark&&scope.row.remark.length>=300"> 输入长度不能超过300</b>
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model.trim="scope.row.remark"
                    :maxlength='arealength' placeholder="请输入内容">
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
                  <el-input type='textarea' :disabled='PhoneCredit' v-if="insTelCustInfo.insResult=='01'" v-model.trim="insTelCustInfo.remark"
                    :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                  </el-input>
                </td>
              </tr>
            </table>
            <!-- ====================== -->
          </div>
          <!--  除客户本人的 电话拨打核实-->
          <div v-show="this.others">
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
                  <span>{{ scope.row.telRecord}}</span>
                  <audio controls="controls" height="100" width="100">
                    <!-- 多个source格式 -->
                    <source :src="URL+scope.row.telRecord" type="audio/mp3" />
                    <source :src="URL+scope.row.telRecord" type="audio/ogg" />
                    <embed height="100" width="100" :src="URL+scope.row.telRecord" /> 您的浏览器不支持该音频播放器格式
                  </audio>
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
              <el-table-column prop="conclusion" label="调查结论" align="center" width="180">
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
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model.trim="scope.row.remark"
                    :maxlength="this.textareaL" placeholder="请输入内容">
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">初终审复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="TrilSelfTableData" border style="width: 100%">
            <el-table-column prop="approverUserCode" label="复议申请人" width="150">
            </el-table-column>
            <el-table-column prop="reconDate" width="180" label="复议申请日期">
            </el-table-column>
            <el-table-column prop="reviewRemark" label="复议说明" min-width="580">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 审批主管第一次复议申请信息 -->
    <el-collapse v-model="activeNames" v-if='SuperVisor'>
      <el-collapse-item name="6">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批主管第一次复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="ManagerFirstTableData" border style="width: 100%">
            <el-table-column prop="approverUserCode" label="经办人" width="150">
            </el-table-column>
            <el-table-column prop="reconDate" width="180" label="发起复议时间">
            </el-table-column>
            <el-table-column prop="reviewRemark" label="复议说明" min-width="580">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 第一次复议审批信息 -->
    <el-collapse v-model="activeNames" v-if='FirstReconsider'>
      <el-collapse-item name="7">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">第一次复议审批信息</span>
        </template>
        <div class="material">
          <el-table :data="insReconApproval" border style="width: 100%">
            <el-table-column prop="reviewResultTxt" label="复议结果" width="150">
            </el-table-column>
            <el-table-column prop="checkResultTxt" width="180" label="质检结果">
            </el-table-column>
            <el-table-column prop="approverUserCode" width="180" label="审批人">
            </el-table-column>
            <el-table-column prop="approverDate" width="180" label="审批时间">
            </el-table-column>
            <el-table-column prop="reviewRemark" label="复议说明" min-width="580">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 审批主管第二次复议申请信息 -->
    <el-collapse v-model="activeNames" v-if='SuperVisorSecond'>
      <el-collapse-item name="8">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批主管第二次复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="ManagerSecondTableData" border style="width: 100%">
            <el-table-column prop="approverUserCode" label="经办人" width="150">
            </el-table-column>
            <el-table-column prop="reconDate" width="180" label="发起复议时间">
            </el-table-column>
            <el-table-column prop="reviewRemark" label="复议说明" min-width="580">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 质检结论 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="9">
        <template slot="title">
          <div>
            <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
            <p style="display:inline-block" class="headFont">质检结论</p>
            <p style="float:right" v-if='QTConclutionBtn'>
              <!-- <span class="btn" @click.stop="addTr=true"> -->
              <span class="btn" @click.stop="addQTResult">
                <img src='../../../../../static/images/add.png'> 添加 </span>
              <span class="btn" @click.stop="delQTresult">
                <img src="../../../../../static/images/delete.png"> 删除</span>
            </p>
          </div>
        </template>
        <div class="result_QT">
          <el-table :data="insConclusion" style="width: 100%" highlight-current-row @current-change='QTtableVal' border min-width='1366px'>
            <el-table-column label="质检结果" align="center" width="240">
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
                  <el-input :disabled='QTConclution' v-model.trim="scope.row.errorType" :maxlength='fiftyWords' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="差错描述" align="center" width="230">
              <template slot-scope="scope">
                <b class="hint_word" v-show="scope.row.errorDescribe&& scope.row.errorDescribe.length>=300"> 输入长度不能超过300</b>
                <el-tooltip class="item" effect="dark" :content="scope.row.errorDescribe" :disabled="!scope.row.errorDescribe" placement="top-start">
                  <el-input :disabled='QTConclution' v-model.trim="scope.row.errorDescribe" :maxlength='arealength' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="备注" align="center" min-width="200">
              <template slot-scope="scope">
                <b class="hint_word" v-show="scope.row.remark&&scope.row.remark.length>=300"> 输入长度不能超过300</b>
                <el-tooltip class="item" effect="dark" :content="scope.row.remark" :disabled="!scope.row.remark" placement="top-start">
                  <el-input type='textarea' :disabled='QTConclution' v-model.trim="scope.row.remark" :rows="2" resize="none" :maxlength='arealength'
                    placeholder="请输入内容">
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
    <div class="QT_btns_wrap" v-if='BottomBtn'>
      <el-button @click="SaveInf('保存')" v-if="saveBtn">
        <img src="../../../../../static/images/relieve.png">
        <label class="labelTxt">保存</label>
      </el-button>
      <el-button @click="submitShow=true" v-if="submitBtn">
        <!-- <el-button @click="SaveInf('提交')" v-if="submitBtn"> -->
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">提交</label>
      </el-button>
      <el-button @click="NoReconsider" v-if="NoReconsiderBtn">
        <img src="../../../../../static/images/back.png">
        <label class="labelTxt">无需复议</label>
      </el-button>
      <!-- 区域经理提交按钮 -->
      <el-button @click="AreaToReconsiderAlert" v-if="AreaReconsiderBtn">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">提交</label>
      </el-button>
      <!-- <el-button @click="this.ReconsiderShow=true"> -->
      <el-button @click="ToReconsiderAlert" v-if="ReconsiderBtn">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">发起复议</label>
      </el-button>
      <el-button @click="ReAprovalAlert" v-if="ReAprovalBtn">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">复议审批</label>
      </el-button>
      <el-button @click="AprovalAlert" v-if="AprovalBtn">
        <!-- <el-button @click="ReAprovalShow = true" v-if="ReAprovalBtn"> -->
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">审批</label>
      </el-button>
      <el-button @click="AntiApply" v-if="AntiBtn">
        <img src="../../../../../static/images/faqi.png">
        <label class="labelTxt">发起反欺诈</label>
      </el-button>
      <el-button @click="getLcgjList">
        <img src="../../../../../static/images/liucheng.png">
        <label class="labelTxt">流程轨迹</label>
      </el-button>
      <el-button @click="RiskControl" v-if="RiskControlBtn">
        <!-- <el-button @click="RiskControl"> -->
        <img src="../../../../../static/images/bigdata.png">
        <label class="labelTxt">大数据风控</label>
      </el-button>
      <el-button @click="roSocialSecurity" v-if="SocialSecurityBtn">
        <img src="/static/images/social.png">
        <label class="labelTxt">社保/公积金{{social}}</label>
      </el-button>
    </div>
    <!-- =================================弹窗===================================== -->
    <!-- 提交 -->
    <div class='alertBox'>
      <el-dialog title="提示" :modal="false" :visible.sync="submitShow" width="420px">
        <span>确定操作？</span>
        <span slot="footer" class="dialog-footer">
          <el-button class="calbtn" @click="submitShow=false">取消</el-button>
          <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveInf('提交')">{{adbtn}}</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 发起复议  -->
    <div class="alertBox">
      <el-dialog title='发起复议' :visible.sync="ReconsiderShow" :modal="false" width="630px">
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
    </div>
    <!-- 区域经理-提交按钮-发起复议 -->
    <div class="alertBox">
      <el-dialog title='发起复议' :visible.sync="AreaReconsiderShow" :modal="false" width="630px">
        <div>
          <p>
            <label class="reconsider_Alert_Label">
              <b class="required_Red"> * </b>复议结果：</label>
            <!-- xiala -->
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
    </div>
    <!-- 复议审批  -->
    <div class="alertBox">
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
              <!-- <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select> -->
              <!--  :disabled='QTConclution' -->
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
    </div>
    <!-- 流程轨迹 -->
    <div class="alertBox">
      <el-dialog title='流程轨迹' :visible.sync="lcdialogVisible" :modal="false" width="860px" top="0">
        <div class="splcBody">
          <!-- <el-collapse v-model="activeNames2" @change="handleChange">
			  		<el-collapse-item title="信审流程轨迹" name="1"> -->
          <div class="first">
            <el-table :data="lcgjData" style="width: 100%" height="296" border>
              <el-table-column type="index" label="序号" min-width="50">
              </el-table-column>
              <el-table-column prop="taskNameTxt" label="任务节点" min-width="120">
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
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="lcdialogVisible = false">返回</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 大数据风控 -->
    <div class="bigDataLog alertBox">
      <el-dialog title="提示" :visible.sync="bigDataLogVisible" :modal="false" width="420px">
        <span>此进件不存在大数据风控明细！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="bigDataLogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 社保公积金 -->
    <div class="bigDataLog alertBox">
      <el-dialog title="提示" :visible.sync="socialLogVisible" :modal="false" width="420px">
        <span>客户社保公积金未授权！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="this.socialLogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import baseurl from '../../../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
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
          channel: '00',
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
        // ------------------------------------测试用--------------------
        // tableData: [{
        //   reviewRemark: '2016-05-02',
        //   approverUserCode: '王小虎',
        //   reconDate: '上海市普陀区金沙江路 1518 弄',
        //   reconType: '00'
        // }, {
        //   reviewRemark: '2016-05-02',
        //   approverUserCode: '王小虎',
        //   reconDate: '上海市普陀区金沙江路 1518 弄',
        //   reconType: '00'
        // }, {
        //   reviewRemark: '2016-05-02',
        //   approverUserCode: '王小虎',
        //   reconDate: '上海市普陀区金沙江路 1518 弄',
        //   reconType: '01'
        // }, {
        //   reviewRemark: '2016-05-02',
        //   approverUserCode: '王小虎',
        //   reconDate: '上海市普陀区金沙江路 1518 弄',
        //   reconType: '02'
        // }],
        // ------------------------------------------------------------
        tabIndex: 0,
        payment: true,
        custom: true,
        others: false,
        addTr: true,
        // currentRow: null,
        telType: '06', //电话征信 电话类型入参
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8", "9", '10'], //折叠面板 默认显示下标
        tabTitle: ["客户本人", '住址电话', "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
        QTresult: [{
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
        QTresultSpecial: [{
          value: '07',
          label: '专项'
        }, {
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
        socialLogVisible: false,
        bigDataLogVisible: false,
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
        checkResultCount07: 0
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
            console.log(!res.data.insTelCustInfo.applyId)
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
      // ---------------------------------按钮事件----------------
      // 保存 或 提交
      SaveInf(type) { //质检主管不需要提交，只有质检专员 显示提交
        this.checkResultCount01 = 0;
        this.checkResultCount02 = 0;
        this.checkResultCount03 = 0;
        this.checkResultCount04 = 0;
        this.checkResultCount05 = 0;
        this.checkResultCount06 = 0;
        this.checkResultCount07 = 0;
        if (type == '提交') { //提交 加校验，保存无需校验必填---常规质检
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
              }
              this.referPort();
            } else {
              this.$message.error(res.msg);
            }
            this.submitShow = false;
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
            }
            if (this.checkResultCount01 > 1 || this.checkResultCount02 > 1 || this.checkResultCount03 > 1 || this.checkResultCount04 >
              1 || this.checkResultCount05 > 1 || this.checkResultCount06 > 1 || this.checkResultCount07 > 1) {
              this.$message.error('质检结论中质检结果重复添加！')
              return
            }
          }
          // 微信支付宝+电话核实（除本人）合并为一个数组
          this.insTelVerifyListConcat = this.insTelVerifyListAddress.concat(this.insTelVerifyListCompany).concat(this.insTelVerifyListFamily)
            .concat(this.insTelVerifyListWork)
            .concat(this.insTelVerifyListOthers)
          this.AlipayConcat = this.AlipayCus.concat(this.AlipayFamily).concat(this.AlipayWork).concat(this.AlipayOthers)
          // 循环质检结论list 改变对应的值-不能跟上面的循环校验一起，校验不过不用修改
          for (var i = 0; i < this.insConclusion.length; i++) {
            console.log('isSubmit：', this.insConclusion[i].isSubmit)
            type == '保存' ? this.insConclusion[i].isSubmit = '0' : this.insConclusion[i].isSubmit = '1'; // 质检结论 保存：0，修改：1
            this.propQTconclution.pageType !== 'checkApp_apply' ? this.insConclusion[i].checkType = '02' : ''; // 质检主管保存 质检结论 CheckType 改为02，初检依旧保持01
            // this.insConclusion[i].checkType == '01' && this.insConclusion[i].id ? this.insConclusion[i].id = '' : this.insConclusion[
            //   i].id; //主管首次保存或提交id设置为空
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
                }
                this.referPort();
              } else {
                this.$message.error(res.msg);
              }
            });
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
          } else {
            this.$message.error(res.msg);
          }
        });
        this.AreaReconsiderShow = false;
      },
      // 发起反欺诈
      AntiApply() {
        this.$router.push({
          name: 'AntiApplyEditf'
        });
        localStorage.setItem("AntiApplyParams", JSON.stringify(this.AntiApplyParams));
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
          } else {
            this.$message.error(res.msg);
          }
        });
        this.ReAprovalShow = false;
      },
      // 流程轨迹
      getLcgjList() {
        this.lcdialogVisible = true;
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.propQTconclution.tastwaitingPass.processInstanceId +
            '&' + Math.random())
          .then(res => {
            if (res.statusCode == '200') {
              this.lcgjData = res.data;
            } else {
              this.$message(res.msg);
            }
          })
      },
      //大数据风控
      RiskControl() {
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          applyId: this.propQTconclution.applyId
        }).then(res => {
          if (res.obj == null) {
            this.bigDataLogVisible = true;
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
          this.socialLogVisible = true;
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
            this.QTresult = this.QTresultSpecial;
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
            this.QTresult = this.QTresultSpecial;
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
      this.Social(); //社保公积金接口
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
    /* border:1px solid; */
    float: left;
    margin-top: 10px;
  }

  .regularQT {
    overflow: hidden;
  }

  .regularQT table {
    border: 1px solid #ebeef5;
    font-size: 14px;
    /* vertical-align: middle; */
  }

  .regularQT tr {
    height: 70px;
  }

  .regularQT tr:nth-of-type(1) {
    height: 50px;
    vertical-align: middle;
  }

  .regularQT td,
  .regularQT th {
    text-align: center;
    border: 1px solid #ebeef5;
    color: #909399;
  }

  .regularQT th {
    font-weight: 800;
  }

  .regularQT td {
    color: #606266;
    position: relative;
    padding: 0 10px;
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
    /* margin-right: 10px; */
    /* background:pink; */
    position: relative;
  }

  .btn img {
    /* vertical-align: middle; */
    position: absolute;
    top: 3px;
    left: -35px;
    /* margin-top:3px; */
    /* background:red; */
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px
  }

  .headFont {
    font-size: 16px;
  }

  .tab1Default {
    float: left;
    color: #183a56;
    padding: 5px 20px;
    border-radius: 4px;
    /* background:red; */
    /* width: 100px; */
    /* border-right: 1px solid; */
    cursor: pointer;

  }

  /* .tab1Default:hover {
    cursor: pointer;
    opacity: .6;
  } */

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
    width: 83px;
    text-align: right;
  }

</style>
