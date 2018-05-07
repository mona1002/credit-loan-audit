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
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">资料核实</span>
        </template>
        <div class="material">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='200px'>核实类型 </th>
              <th width='150px'>核实结论（必填）</th>
              <th>备注（非必填）</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> 申请单表是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isForm" @change='clearContent("申请单表",regularInfo.isForm)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isForm==0" v-model="regularInfo.isFormRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 2</td>
              <td> 身份证证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isIdcard" @change='clearContent("身份证",regularInfo.isIdcard)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isIdcard==0" v-model="regularInfo.isIdcardRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td> 收入证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isIncome" @change='clearContent(" 收入证明",regularInfo.isIncome)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isIncome==0" v-model="regularInfo.isIncomeRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td> 工作证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isWork" @change='clearContent("工作证明",regularInfo.isWork)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isWork==0" v-model="regularInfo.isWorkRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td> 房产资料是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isEstate" @change='clearContent("房产资料",regularInfo.isIdcard)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isEstate==0" v-model="regularInfo.isEstateRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td> 居住证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isLive" @change='clearContent("居住证明",regularInfo.isLive)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isLive==0" v-model="regularInfo.isLiveRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td> 经营证明是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isBusiness" @change='clearContent("经营证明",regularInfo.isBusiness)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isBusiness==0" v-model="regularInfo.isBusinessRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 8</td>
              <td> 信用报告是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isCredit" @change='clearContent("信用报告",regularInfo.isCredit)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isCredit==0" v-model="regularInfo.isCreditRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 9</td>
              <td> 客户流水是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isCustomerflow" @change='clearContent("客户流水",regularInfo.isCustomerflow)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isCustomerflow==0" v-model="regularInfo.isCustomerflowRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 10</td>
              <td> 客户其他资料是否符合要求</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isCustomerother" @change='clearContent("其他资料",regularInfo.isCustomerother)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isCustomerother==0" v-model="regularInfo.isCustomerotherRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 11 </td>
              <td> 负债计算是否正确</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isLiabilities" @change='clearContent(" 负债计算",regularInfo.isLiabilities)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isLiabilities==0" v-model="regularInfo.isLiabilitiesRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 12 </td>
              <td> 流水计算是否正确</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isFlow" @change='clearContent("流水计算",regularInfo.isFlow)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isFlow==0" v-model="regularInfo.isFlowRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 13</td>
              <td> 征信录入是否正确</td>
              <td>
                <el-radio-group :disabled='material' v-model="regularInfo.isReference" @change='clearContent("征信录入",regularInfo.isReference)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isReference==0" v-model="regularInfo.isReferenceRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 三方信息查询=====后两个选否弹出未改 -->
    <el-collapse v-model="activeNames" v-if='InfoSearchShow'>
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">三方信息查询</span>
        </template>
        <div class="material">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='290px'>核实类型 </th>
              <th width='150px'>核实结论（必填）</th>
              <th>备注（非必填）</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> 客户在人法网是否有被执行信息</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wbeexEcuted" @change='clearContent("被执行信息",regularInfo.wbeexEcuted)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.wbeexEcuted==1" v-model="regularInfo.wbeexEcutedtxt" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 2</td>
              <td> 客户在失信网是否有失信记录</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetEcutedBrea" @change='clearContent("失信记录",regularInfo.wnetEcutedBrea)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.wnetEcutedBrea==1" v-model="regularInfo.wnetEcutedBreatxt" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td> 网上搜索借款人的手机是否有异常</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetPhone" @change='clearContent("手机异常",regularInfo.wnetPhone)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.wnetPhone==1" v-model="regularInfo.wnetPhonetxt" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td> 网上搜索借款人现居住地址和房产地址是否异常</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetAddrandEstate" @change='clearContent("居住房产异常",regularInfo.wnetAddrandEstate)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.wnetAddrandEstate==1" v-model="regularInfo.wnetAddrandEstatetxt" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td> 当地工商网查询企业基本信息中是否有登记</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetCompany" @change='clearContent("工商登记",regularInfo.wnetCompany)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.wnetCompany==0" v-model="regularInfo.wnetCompanytxt" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td> 客户工作单位在全国组织代码查询中是否存在</td>
              <td>
                <el-radio-group :disabled='InfoInquire' v-model="regularInfo.wnetAddrstate" @change='clearContent("全国组织代码",regularInfo.wnetAddrstate)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.wnetAddrstate==0" v-model="regularInfo.wnetAddrstatetxt" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td> 工商登记信息说明</td>
              <td>
                <td>
                  <el-input type='textarea' v-model="regularInfo.icbcRegistrationInfo" :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                  </el-input>
                </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 内部匹配核实 -->
    <el-collapse v-model="activeNames" v-if='MatchingShow'>
      <el-collapse-item name="4">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">内部匹配核实</span>
        </template>
        <div class="material">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='290px'>核实类型 </th>
              <th width='150px'>核实结论（必填）</th>
              <th>备注（非必填）</th>
            </tr>
            <tr>
              <td> 1</td>
              <td> 内部匹配是否进行排查</td>
              <td>
                <el-radio-group :disabled='matching' v-model="regularInfo.isInmatch" @change='clearContent("匹配排查",regularInfo.isInmatch)'>
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </td>
              <td>
                <el-input type='textarea' v-if="regularInfo.isInmatch==0" v-model="regularInfo.isInmatchRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- phone -->
    <!-- 电话征信 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="5">
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
          <div v-if="this.payment">
            <p class="P_title">微信/支付宝核实</p>
            <el-table :data="Alipay" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="核实类型" align="left" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <!-- <b style="color:red;fontWeight:700px"> * </b> -->
                    <label v-if='scope.row.insVerifyType=="00"'> {{ '微信查询结果' }}</label>
                    <label v-if='scope.row.insVerifyType=="01"'> {{ '支付宝查询结果' }}</label>
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="核实结论" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="clearContent(scope.row)">
                      <el-radio :label="'00'">正常</el-radio>
                      <el-radio :label="'01'">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark"
                    :maxlength="this.textareaL" placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- call-content 客户本人中-电话拨打核实  -->
          <div v-show="this.custom">
            <p class="P_title">电话拨打核实</p>
            <el-table :data="insTelCustInfo" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <!-- <el-table-column label="电话号码" align="center" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.telNum }}</span>
                </template>
              </el-table-column> -->
              <el-table-column prop="telNum" label="电话号码" align="center" width="180">
              </el-table-column>
              <!-- <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.telRecord }}</span>
                </template>
              </el-table-column> -->
              <el-table-column prop="telRecord" label="电话录音" align="center" width="180">
              </el-table-column>
              <el-table-column prop="iisself" label="接听人是否借款人本人" align="center" width="180">
              </el-table-column>
              <el-table-column prop="iisselftxt" label="接听说明" width="180" align="center">
              </el-table-column>
              <el-table-column label="质检结果（必填项）" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="clearContent(scope.row)">
                      <el-radio :label="'00'">正常</el-radio>
                      <el-radio :label="'01'">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark"
                    :maxlength="this.textareaL" placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- others-content 除客户本人的 电话拨打核实-->
          <div v-show="this.others">
            <p class="P_title">电话拨打核实</p>
            <el-table :data="insTelVerifyList" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <!-- <el-table-column label="电话号码" align="center" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.telNum }}</span>
                </template>
              </el-table-column> -->
              <el-table-column prop="telNum" label="电话号码" align="center" width="70">
              </el-table-column>
              <!-- <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.telRecord }}</span>
                </template> -->
              <el-table-column prop="telRecord" label="电话录音来源" align="center" width="70">
              </el-table-column>
              <el-table-column prop="source" label="来源" align="center" width="70">
              </el-table-column>
              <el-table-column prop="checkTime" label="最新调查时间" align="center" width="180">
              </el-table-column>
              <el-table-column prop="answer" label="最新接听情况" align="center" width="180">
              </el-table-column>
              <el-table-column prop="checkStage" label="最新调查阶段" align="center" width="180">
              </el-table-column>
              <el-table-column prop="conclusion" label="调查结论" align="center" width="180">
              </el-table-column>
              <el-table-column label="质检结果（必填项）" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group :disabled='PhoneCredit' v-model="scope.row.insResult" @change="clearContent(scope.row)">
                      <el-radio :label="'00'">正常</el-radio>
                      <el-radio :label="'01'">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark"
                    :maxlength="this.textareaL" placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 质检结论 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="6">
        <template slot="title">
          <div>
            <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
            <p style="display:inline-block" class="headFont">质检结论</p>
            <p style="float:right">
              <span class="btn" @click.stop="addTr=true">
                <img src='../../../../../static/images/add.png'> 添加 </span>
              <span class="btn" @click.stop="delQTresult">
                <img src="../../../../../static/images/delete.png"> 删除</span>
            </p>
          </div>
        </template>
        <div class="result_QT">
          <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='230px'>质检结果 </th>
              <th width='210px'>差错类型</th>
              <th width='210px'>差错描述</th>
              <th>备注（非必填）</th>
              <th width='150px'>操作人员</th>
              <th width='150px'>操作日期</th>
            </tr>
            <tr v-if="addTr">
              <td> 1</td>
              <td>
                <el-select :disabled='QTConclution' v-model="insConclusion.checkResult" placeholder="请选择">
                  <el-option v-for="item in QTresult" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-tooltip class="item" effect="dark" :content="insConclusion.errorType" :disabled="!insConclusion.errorType" placement="top-start">
                  <el-input :disabled='QTConclution' v-model="insConclusion.errorType" :maxlength='fiftyWords' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </td>
              <td>
                <el-tooltip class="item" effect="dark" :content="insConclusion.errorDescribe" :disabled="!insConclusion.errorDescribe" placement="top-start">
                  <el-input :disabled='QTConclution' v-model="insConclusion.errorDescribe" :maxlength='arealength' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </td>
              <td>
                <el-tooltip class="item" effect="dark" :content="insConclusion.remark" :disabled="!insConclusion.remark" placement="top-start">
                  <el-input type='textarea' :disabled='QTConclution' v-model="insConclusion.remark" :rows="2" resize="none" :maxlength='arealength'
                    placeholder="请输入内容">
                  </el-input>
                </el-tooltip>
              </td>
              <td>
                {{ insConclusion.insMemberName}}
              </td>
              <td>
                {{ insConclusion.insDate}}
              </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 复核结论===显示框，无手风琴 -->
    <div class="reResult" v-if='reResultShow'>
      <label style="font-size:14px;">复核结论：</label>
      <div>
        <el-input type='textarea' resize='none' rows="2"></el-input>
      </div>

    </div>
    <!-- 底部按钮 -->
    <div class="QT_btns_wrap">
      <el-button @click="SaveInf">
        <img src="../../../../../static/images/relieve.png">
        <label class="labelTxt">保存</label>
      </el-button>
      <el-button @click="SaveInf">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">提交</label>
      </el-button>
      <el-button @click="NoReconsider">
        <img src="../../../../../static/images/back.png">
        <label class="labelTxt">无需复议</label>
      </el-button>
      <!-- <el-button @click="this.ReconsiderShow=true"> -->
      <el-button @click="ReconsiderShow = true">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">发起复议</label>
      </el-button>
         <el-button @click="ReAprovalShow = true">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">复议审批</label>
      </el-button>
      <el-button @click="AntiApply">
        <img src="../../../../../static/images/faqi.png">
        <label class="labelTxt">发起反欺诈</label>
      </el-button>
      <el-button @click="getLcgjList">
        <img src="../../../../../static/images/liucheng.png">
        <label class="labelTxt">流程轨迹</label>
      </el-button>
      <el-button @click="RiskControl">
        <img src="../../../../../static/images/bigdata.png">
        <label class="labelTxt">大数据风控</label>
      </el-button>
      <el-button @click="roSocialSecurity">
        <img src="/static/images/social.png">
        <label class="labelTxt">社保/公积金{{social}}</label>
      </el-button>
    </div>
    <!-- =================================弹窗===================================== -->
    <!-- 发起复议  -->
    <el-dialog title='发起复议' :visible.sync="ReconsiderShow" :modal="false" width="620px" top="20vh">
      <div>
        <p>
          <label>复议节点：</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p style="margin:10px 0;">
          <label>复议说明：</label>
          <el-input style="width:500px;vertical-align:top;" type="textarea" resize='none' rows="2"></el-input>
        </p>
        <p>
          <span> 经办人：{{'dd' }}</span>
          <span style="float:right;width:280px;"> 发起复议时间：{{'dd' }}</span>
        </p>
      </div>
      <div style="text-align:right;">
        <el-button type="primary" @click="ToReconsider">提交</el-button>
      </div>
    </el-dialog>
    <!-- 复议审批  -->
    <el-dialog title='复议审批' :visible.sync="ReAprovalShow" :modal="false" width="820px" top="20vh">
      <div class="reApproval">
        <p>
          <span>
              <label>复议节点：</label>
 <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          </span>
               <span>
              <label>质检结果：</label>
 <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          </span>
        </p>
               <p>
          <span>
              <label>质检员是否有差错：</label>
 <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          </span>
               <span>
              <label>差错类型：</label>
 <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          </span>
        </p>
        <p style="margin:10px 0;">
          <label>复议说明：</label>
          <el-input style="width:500px;vertical-align:top;" type="textarea" resize='none' rows="2"></el-input>
        </p>
        <p>
          <span> 审批人{{'dd' }}</span>
          <span style="float:right;width:280px;"> 处理时间：s{{'dd' }}</span>
        </p>
      </div>
      <div style="text-align:right;">
        <el-button type="primary" @click="ToReconsider">提交</el-button>
      </div>
    </el-dialog>
    <!-- 流程轨迹 -->
    <div class="liuchenggj">
      <el-dialog title='流程轨迹' :visible.sync="lcdialogVisible" :modal="false" width="860px" top="20vh">
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
    <div class="bigDataLog">
      <el-dialog title="提示" :visible.sync="bigDataLogVisible" :modal="false" width="420px" top="35vh">
        <span>此进件不存在大数据风控明细！</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="this.bigDataLogVisible=false">确定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 社保公积金 -->
    <div class="bigDataLog">
      <el-dialog title="提示" :visible.sync="socialLogVisible" :modal="false" width="420px" top="35vh">
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
        isForm: '',
        radio: '1',
        baseInfo: '', //基本信息
        // regularInfo: '',
        fiftyWords: 50,
        arealength: 300, //area长度
        insConclusion: {},
        insWechatAlipay: '', //微信、支付宝
        Alipay: [], //微信支付宝切换暂存
        AlipayCus: '', //客户本人-微信
        AlipayCompany: '', //单位电话-微信
        AlipayFamily: '', //家庭联系人-微信
        AlipayWork: '', //工作证明-微信
        AlipayOthers: '', //其他联系人-微信
        insTelCustInfo: [], //客户本人-拨打核实
        insTelVerifyList: [], //除客户本人以外-电话拨打核实-暂存
        insTelVerifyListCompany: [], //单位电话-电话拨打核实
        insTelVerifyListFamily: [], //家庭联系人-电话拨打核实
        insTelVerifyListWork: [], //工作证明-电话拨打核实
        insTelVerifyListOthers: [], //其他联系人-电话拨打核实


        //  regularInfo: {},//接口可调用时待测试默认选中值
        regularInfo: {
          isForm: 1,
          isIdcard: 1,
          isIncome: 1,
          isWork: 1,
          isEstate: 1,
          isLive: 1,
          isBusiness: 1,
          isCredit: 1,
          isCustomerflow: 1,
          isCustomerother: 1,
        }, // // 资料核实+三方信息查询+ 内部匹配核实
        // insConclusion:'',
        // tableData1: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }],

        // //   ---
        // textareaL: 300,
        tabIndex: 0,
        payment: true,
        custom: true,
        others: false,
        addTr: true,
        // currentRow: null,
        telType: '06', //电话征信 电话类型入参
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        tabTitle: ["客户本人", "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
        // tab: ["客户本人", "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
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
          value: '044',
          label: '终审重大差错'
        }, {
          value: '05',
          label: '初审建议'
        }, {
          value: '06',
          label: '终审建议'
        }, {
          value: '07',
          label: '无'
        }],
        // Match: [{
        //   title: '内部匹配是否进行排查',
        //   conclution: null,
        //   comment: ''
        // }],
        // PhoneCre: [{
        //   title: '微信查询结果',
        //   conclution: 1,
        //   comment: ''
        // }, {
        //   title: '支付宝查询结果',
        //   conclution: 1,
        //   comment: ''
        // }],
        // PhoneCheck: [{
        //   title: '内部匹配是否进行排查',
        //   Self: '是',
        //   conclution: null,
        //   comment: ''
        // }],

        // othersCheck: [{
        //   title: '1242346956',
        //   Self: '否',
        //   conclution: null,
        //   comment: ''
        // }],
        // a: [{
        //   title: '4444444444',
        //   Self: '否',
        //   conclution: null,
        //   comment: ''
        // }],
        // b: [{
        //   title: '7777777777',
        //   Self: '否',
        //   conclution: null,
        //   comment: ''
        // }],
        // insConclusion: [{
        //   title: "",
        //   Self: '否',
        //   conclution: null,
        //   comment: '',
        //   result: '',
        //   person: '吴彦祖',
        //   date: '2019-20-3'
        // }, {
        //   title: "",
        //   Self: '否',
        //   conclution: null,
        //   comment: '',
        //   result: '',
        //   person: '吴彦祖',
        //   date: '2019-20-3'
        // }],


        // options: [{
        //   value: '选项1',
        //   label: '黄金糕'
        // }, {
        //   value: '选项2',
        //   label: '双皮奶'
        // }, {
        //   value: '选项5',
        //   label: '北京烤鸭'
        // }],
        // value: ''
        // insWechatAlipayList:'',
        processInstanceId: '',
        changeAlipay: '',
        // insTelCustInfo:{},//客户本人-拨打核实
        // -----------弹窗---
        ReconsiderShow: false,
        ReAprovalShow:true,
        lcdialogVisible: false,
        lcgjData: [],
        socialLogVisible: false,
        bigDataLogVisible: false,
        social: '', //社保公积金 已绑定 未绑定
        // -------------------单选按钮 disabled-------------
        material: false, //资料核实
        InfoInquire: false, //三方信息查询
        matching: false, //内部配核实
        PhoneCredit: true, //电话征信
        QTConclution: false, //质检结论
        // -----------------手风琴显示项--------------------
        AprovalInfolShow: true, //审批信息        
        MaterialShow: true, //资料核实
        InfoSearchShow: true, //三方信息查询
        MatchingShow: true, //内部匹配核实
        reResultShow: false, //复核结论-div 
      }
    },
    props: ['propApplyId', 'pageType'],
    methods: {
      show() {
        console.log('furyi ')
        this.ReconsiderShow = true;
      },
      // 质检页面查询接口
      referPort() {
        this.get("/insConclusion/queryInsConclusionObj", {
          applyId: this.propApplyId, //入参待更新+测试-------------------------------------------------------
        }).then(res => {
          if (res.statusCode == 200) {
            //  基本信息                                -Object
            this.baseInfo = res.data.applyBaseInfo;
            // 资料核实+三方信息查询+ 内部匹配核实         -Object
            this.regularInfo = res.data.insRegularInfo;
            // 质检结论                                  -Object
            this.insConclusion = res.data.insConclusion;

            // 电话征信：客户本人-电话拨打核实             -object
            this.insTelCustInfo[0] = res.data.insTelCustInfo; //this.insTelCustInfo 是array / 查询接口 -只返回客户本人-电话核实信息
            //电话征信： 微信/支付宝核实                  -Array
            // this.insWechatAlipayList = res.data.insWechatAlipayList;
            this.AlipayCus = res.data.insWechatAlipayList; // 查询接口 -只返回客户本人-微信支付宝信息
            // for(var i=0;i<this.insWechatAlipayList.length;i++){
            //   switch(this.insWechatAlipayList[i].telType){
            //     case '06':this.AlipayCus=this.insWechatAlipayList[i];break;//客户本人-微信
            //     case '02':this.AlipayCompany=this.insWechatAlipayList[i];break;//单位联系人-微信
            //     case '03':this.AlipayFamily=this.insWechatAlipayList[i];break;//家庭联系人-微信
            //     case '05':this.AlipayWork=this.insWechatAlipayList[i];break;//工作证明人-微信
            //     case '04':this.AlipayOthers=this.insWechatAlipayList[i];break;//其他联系人-微信
            //   }
            // }
          } else {
            this.$message.error(res.msg);
          }
        });
      },

      getTelAlipay(telTypeVal) {
        // 电话征信-微信支付宝 + 拨打核实接口
        this.post("/insConclusion/getTelVerifyWechatAlipay", {
          applyId: '申请单id',
          // telType: this.telType,
          telType: telTypeVal
        }).then(res => {
          if (res.statusCode == 200) {
            // 拨打核实  insTelVerify
            // this.insTelVerifyList = res.data.insTelVerifyList;

            // 微信支付宝  insWechatAlipay
            // this.insWechatAlipayList = res.data.insWechatAlipayList;
            // telTypeVal=='02'? this.Alipay=this.AlipayCompany=res.data.insWechatAlipayList:this.Alipay;//单位联系人-微信
            // telTypeVal=='03'? this.Alipay=this.AlipayFamily=res.data.insWechatAlipayList:this.Alipay;//家庭联系人-微信
            // telTypeVal=='04'? this.Alipay=this.AlipayOthers=res.data.insWechatAlipayList:this.Alipay;//其他联系人-微信
            // telTypeVal=='05'? this.Alipay=this.AlipayWork=res.data.insWechatAlipayList:this.Alipay;//工作证明人-微信
            if (telTypeVal == '02') {
              this.Alipay = this.AlipayCompany = res.data.insWechatAlipayList; //单位联系人-微信
              this.insTelVerifyList = this.insTelVerifyListCompany = res.data.insTelVerifyList; //单位电话-电话拨打核实
            } else if (telTypeVal == '03') {
              this.Alipay = this.AlipayFamily = res.data.insWechatAlipayList; //家庭联系人-微信
              this.insTelVerifyList = this.insTelVerifyListFamily = res.data.insTelVerifyList; //家庭联系人-电话拨打核实
            } else if (telTypeVal == '04') {
              this.Alipay = this.AlipayOthers = res.data.insWechatAlipayList; //其他联系人-微信
              this.insTelVerifyList = this.insTelVerifyListOthers = res.data.insTelVerifyList; //其他联系人-电话拨打核实
            } else if (telTypeVal == '05') {
              this.Alipay = this.AlipayWork = res.data.insWechatAlipayList; //工作证明人-微信
              this.insTelVerifyList = this.insTelVerifyListWork = res.data.insTelVerifyList; //工作证明-电话拨打核实
            }
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      delQTresult() {
        this.addTr = false;
        this.insConclusion.checkResult = '';
        this.insConclusion.errorType = '';
        this.insConclusion.errorDescribe = '';
        this.insConclusion.remark = '';
        // this.insConclusion.insMemberName = '';--展示 不需要清空
        // this.insConclusion.insDate = '';--展示 不需要清空
      },
      InitialInfo() {
        this.regularInfo.isForm ? this.regularInfo.isForm : this.regularInfo.isForm = 1;
        this.regularInfo.isIdcard ? this.regularInfo.isIdcard : this.regularInfo.isIdcard = 1;
        this.regularInfo.isIncome ? this.regularInfo.isIncome : this.regularInfo.isIncome = 1;
        this.regularInfo.isWork ? this.regularInfo.isWork : this.regularInfo.isWork = 1;
        this.regularInfo.isEstate ? this.regularInfo.isEstate : this.regularInfo.isEstate = 1;
        this.regularInfo.isLive ? this.regularInfo.isLive : this.regularInfo.isLive = 1;
        this.regularInfo.isBusiness ? this.regularInfo.isBusiness : this.regularInfo.isBusiness = 1;
        this.regularInfo.isCredit ? this.regularInfo.isCredit : this.regularInfo.isCredit = 1;
        this.regularInfo.isCustomerflow ? this.regularInfo.isCustomerflow : this.regularInfo.isCustomerflow = 1;
        this.regularInfo.isCustomerother ? this.regularInfo.isCustomerother : this.regularInfo.isCustomerother = 1;
        console.log(this.regularInfo)
        // 三方信息查询

        // 内部匹配核实

      },
      //   handleEdit(index, row) {
      //     console.log(index, row);
      //   },
      //   handleDelete(index, row) {
      //     console.log(index, row);
      //   },
      //   handleCurrentChange(val) {
      //     this.currentRow = val;
      //     // this.currentRow!=''?this.addTr=true:this.addTr=false;

      //     for (var i = 0; i < this.insConclusion.length; i++) {
      //       this.insConclusion[i].result != '' ? this.addTr = true : this.addTr = false;
      //       console.log(this.addTr)
      //     }
      //     console.log(this.insConclusion)
      //     console.log(this.addTr)
      //   },
      clearContent(el, val) {
        // console.log(val)regularInfo.
        switch (el) {
          case '申请单表':
            val == 1 ? this.regularInfo.isFormRemark = '' : this.regularInfo.isFormRemark;
            break;
          case '身份证':
            val == 1 ? this.regularInfo.isIdcardRemark = '' : this.regularInfo.isIdcardRemark;
            break;
          case '收入证明':
            val == 1 ? this.regularInfo.isIncomeRemark = '' : this.regularInfo.isIncomeRemark;
            break;
          case '工作证明':
            val == 1 ? this.regularInfo.isWorkRemark = '' : this.regularInfo.isWorkRemark;
            break;
          case '房产资料':
            val == 1 ? this.regularInfo.isEstateRemark = '' : this.regularInfo.isEstateRemark;
            break;
          case '居住证明':
            val == 1 ? this.regularInfo.isLiveRemark = '' : this.regularInfo.isLiveRemark;
            break;
          case '经营证明':
            val == 1 ? this.regularInfo.isBusinessRemark = '' : this.regularInfo.isBusinessRemark;
            break;
          case '信用报告':
            val == 1 ? this.regularInfo.isCreditRemark = '' : this.regularInfo.isCreditRemark;
            break;
          case '客户流水':
            val == 1 ? this.regularInfo.isCustomerflowRemark = '' : this.regularInfo.isCustomerflowRemark;
            break;
          case '其他资料':
            val == 1 ? this.regularInfo.isCustomerotherRemark = '' : this.regularInfo.isCustomerotherRemark;
            break;
          case '负债计算':
            val == 1 ? this.regularInfo.isLiabilitiesRemark = '' : this.regularInfo.isLiabilitiesRemark;
            break;
          case '流水计算':
            val == 1 ? this.regularInfo.isFlowRemark = '' : this.regularInfo.isFlowRemark;
            break;
          case '征信录入':
            val == 1 ? this.regularInfo.isReferenceRemark = '' : this.regularInfo.isReferenceRemark;
            break;
          case '被执行信息':
            val == 0 ? this.regularInfo.wbeexEcutedtxt = '' : this.regularInfo.wbeexEcutedtxt;
            break;
          case '失信记录':
            val == 0 ? this.regularInfo.wnetEcutedBreatxt = '' : this.regularInfo.wnetEcutedBreatxt;
            break;
          case '手机异常':
            val == 0 ? this.regularInfo.wnetPhonetxt = '' : this.regularInfo.wnetPhonetxt;
            break;
          case '居住房产异常':
            val == 0 ? this.regularInfo.wnetAddrandEstatetxt = '' : this.regularInfo.wnetAddrandEstatetxt;
            break;
          case '工商登记':
            val == 1 ? this.regularInfo.wnetCompanytxt = '' : this.regularInfo.wnetCompanytxt;
            break;
          case '全国组织代码':
            val == 1 ? this.regularInfo.wnetAddrstatetxt = '' : this.regularInfo.wnetAddrstatetxt;
            break;
          case '匹配排查':
            val == 1 ? this.regularInfo.isInmatchRemark = '' : this.regularInfo.isInmatchRemark;
            break;

        }
      },
      maxLength(el, val) {
        console.log(val.length)
        // 长度判断 提示语 ----待确定
        switch (el) {
          case '申请单表':
            val > 300 ? this.regularInfo.isFormRemark = '' : this.regularInfo.isFormRemark;
            break;
          case '身份证':
            val > 300 ? this.regularInfo.isIdcardRemark = '' : this.regularInfo.isIdcardRemark;
            break;
          case '收入证明':
            val > 300 ? this.regularInfo.isIncomeRemark = '' : this.regularInfo.isIncomeRemark;
            break;
          case '工作证明':
            val > 300 ? this.regularInfo.isWorkRemark = '' : this.regularInfo.isWorkRemark;
            break;
          case '房产资料':
            val > 300 ? this.regularInfo.isEstateRemark = '' : this.regularInfo.isEstateRemark;
            break;
          case '居住证明':
            val > 300 ? this.regularInfo.isLiveRemark = '' : this.regularInfo.isLiveRemark;
            break;
          case '经营证明':
            val > 300 ? this.regularInfo.isBusinessRemark = '' : this.regularInfo.isBusinessRemark;
            break;
          case '信用报告':
            val > 300 ? this.regularInfo.isCreditRemark = '' : this.regularInfo.isCreditRemark;
            break;
          case '客户流水':
            val > 300 ? this.regularInfo.isCustomerflowRemark = '' : this.regularInfo.isCustomerflowRemark;
            break;
          case '其他资料':
            val > 300 ? this.regularInfo.isCustomerotherRemark = '' : this.regularInfo.isCustomerotherRemark;
            break;
          case '负债计算':
            val > 300 ? this.regularInfo.isLiabilitiesRemark = '' : this.regularInfo.isLiabilitiesRemark;
            break;
          case '流水计算':
            val > 300 ? this.regularInfo.isFlowRemark = '' : this.regularInfo.isFlowRemark;
            break;
          case '征信录入':
            val > 300 ? this.regularInfo.isReferenceRemark = '' : this.regularInfo.isReferenceRemark;
            break;
        }
      },
      // console.log(sop.title)
      // if (sop.title == '客户在人法网是否有被执行信息' || sop.title == '客户在失信网是否有失信记录' || sop.title == '网上搜索借款人的手机是否有异常' || sop.title ==
      //   '网上搜索借款人现居住地址和房产地址是否异常') {
      //   sop.conclution == '2' ? sop.comment = '' : '';
      // } else {
      //   sop.conclution == '1' ? sop.comment = '' : '';
      // }

      //   add() {
      //     console.log('添加')
      //     var obj = [{
      //       title: "",
      //       Self: '否',
      //       conclution: null,
      //       comment: '',
      //       result: '',
      //       person: '吴彦祖',
      //       date: '2019-20-3'
      //     }];
      //     this.insConclusion = this.insConclusion.concat(obj)
      //     console.log(this.insConclusion)
      //     //  <el-select v-model='value' placeholder='请选择'>
      //     //     <el-option
      //     //       v-for='item in options'
      //     //       :key='item.value'
      //     //       :label='item.label'
      //     //       :value='item.value'>
      //     //     </el-option>
      //     //   </el-select>
      //     this.addTr = false;
      //   },
      tabClick(ev, ind, val) {
        console.log(ind)
        //  this.title = val;
        //         this.tabContent1 = ind;
        this.tabIndex = ind;
        if (ind == 0) {
          // 客户本人
          this.telType = '06'
          this.payment = true;
          this.custom = true;
          this.others = false;
          this.changeAlipay = '';
          this.Alipay = this.AlipayCus; //微信支付宝内容

        } else if (ind == 1) {
          // 单位电话
          this.telType = '02'
          this.payment = false;
          this.custom = false;
          this.others = true;
          this.Alipay = this.AlipayCompany; //微信支付宝内容   
          this.getTelAlipay('02'); //----调用查询微信信息接口  
        } else if (ind == 2) {
          // 家庭联系人
          this.telType = '03'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.a;
          this.Alipay = this.AlipayFamily; //微信支付宝内容 
          this.getTelAlipay('03'); //----调用查询微信信息接口  
        } else if (ind == 3) {
          // 工作证明人
          this.telType = '05'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.b;
          this.Alipay = this.AlipayWork; //微信支付宝内容
          this.getTelAlipay('05'); //----调用查询微信信息接口   
        } else if (ind == 4) {
          // 其他联系人
          this.telType = '04'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.Alipay = this.AlipayOthers; //微信支付宝内容 
          this.getTelAlipay('04'); //----调用查询微信信息接口  
        }
      },
      // ---------------------------------按钮事件----------------
      // 保存 或 提交
      SaveInf() {
        // this.insTelCustInfo[0]// 入参客户本人-电话拨打核实，转换为obj（原为array）
        this.post("/insConclusion/addOrSubmit", {
          taskId: "",
          applyBaseInfo: {}, //基础信息
          insConclusion: {}, //质检结论页-质检结论
          insRegularInfo: {}, //常规质检
          insTelCustInfo: {}, //电话征信-客户本人-电话拨打核实
          insTelVerifyList: [], //:质检-电话征信-拨打核实
          insWechatAlipayList: [], //电话征信-微信/支付宝核实
        }).then(res => {
          if (res.statusCode == 200) {
            this.referPort()
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      // 无需复议
      NoReconsider() {
        console.log('发起复议')

      },
      // 发起复议
      ToReconsider() {
        console.log('发起复议')

      },
      // 发起反欺诈
      AntiApply() {
        console.log('反欺诈')
        this.$router.push({
          name: 'AntiApplyEditf',
          params: {
            // id: this.applyId,
            // flag: 'fuyi',
            // busiState:'20'
          }
        });
      },
      // 流程轨迹
      getLcgjList() {
        console.log('流程轨迹')
        this.lcdialogVisible = true;
        console.log(this.processInstanceId)
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processInstanceId + '&' + Math.random())
          .then(res => {
            console.log(res);
            if (res.statusCode == '200') {
              this.lcgjData = res.data;
            } else {
              this.$message(res.msg);
            }
          })
      },
      //大数据风控
      RiskControl() {
        // console.log('大数据')
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          // applyId: this.applyId
          applyId: '申请单id'
        }).then(res => {
          //console.log(res.data);
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
      roSocialSecurity() {
        // console.log('社保')
        if (this.social == "(未授权)") {
          this.socialLogVisible = true;
        } else if (this.social == "(已授权)") {
          this.$router.push({
            path: '/SocialSe'
          });
        }
      },
      showdiffer() {
        if (this.pageType == '常规质检') {
          AprovalInfolShow = true; //审批信息        
          MaterialShow = true; //资料核实
          InfoSearchShow = true; //三方信息查询
          MatchingShow = true; //内部匹配核实
          reResultShow = false; //复核结论-div 
        } else if (this.pageType == '专纵质检') {
          AprovalInfolShow = false; //审批信息        
          MaterialShow = false; //资料核实
          InfoSearchShow = false; //三方信息查询
          MatchingShow = false; //内部匹配核实
        } else if (this.pageType == '常规又专纵质检') {
          reResultShow = true; //复核结论-div 
        } else if (this.pageType == '复议') {

        }
      }
    },
    mounted() {
      // this.processInstanceId = JSON.parse(localStorage.getItem('未存储，未确定，待更改-RtaskInWaitting')).processInstanceId;
      // 质检结论枚举
      // ["01": "初审一般差错",
      // "02": "初审重大差错",
      // "03": "终审一般差错",
      // "04":"终审重大差错",
      // "05": "初审建议",
      // "06": "终审建议","07":"无"]

      // this.referPort();
      // console.log(this.regularInfo)
      // this.InitialInfo();
      // this.getTelAlipay('06')//电话征信-支付宝+电话核实接口
      // this.Social();//社保公积金接口
      // this.Alipay = this.AlipayCus //初始状态取客户信息的支付宝数据-----带更改（解决异步数据不确定顺序问题）

    }
  }

</script>
<style scoped>
  .baseInf {
    padding-left: 10px;
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

  .regularQT table {
    border: 1px solid #ebeef5;
    /* vertical-align: middle; */
  }

  .regularQT tr {
    height: 70px;
  }

  .regularQT tr:nth-of-type(1) {
    height: 30px;
  }

  .regularQT td {
    text-align: center;
  }

  .regularQT .material td:nth-of-type(4) {
    vertical-align: bottom;
  }

  .result_QT td {
    padding: 0 2px;
  }

  .material {
    padding: 10px;
  }

  .result_QT {
    padding: 10px;
    height: 130px;
  }

  /* .btn {
    vertical-align: top;
    cursor: pointer;
    margin-right: 10px;
  }

  .btn img {
    vertical-align: middle;
  } */

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
    width: 100px;
    border-right: 1px solid;
  }

  .tab1Default:hover {
    cursor: pointer;
  }

  .tabAct {
    color: white;
    background: #0077ff
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
.reApproval span{
display: inline-block;
width:49%;
}
.reApproval span:nth-of-type(1) label{
  display: inline-block;
  width:130px;
  text-align: right;
}
  /* .btn {
    width: 100px;
    text-align: center;
    display: inline-block;
    border: 1px solid;
    background: #0077ff;
    color: white;
    border-radius: 4px;
  } */

  /* .btn:hover {
    cursor: pointer;
  } */

</style>
