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
                <el-input type='textarea' v-if="regularInfo.isForm==0" v-model="regularInfo.isFormRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isIdcard==0" v-model="regularInfo.isIdcardRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isIncome==0" v-model="regularInfo.isIncomeRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isWork==0" v-model="regularInfo.isWorkRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isEstate==0" v-model="regularInfo.isEstateRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isLive==0" v-model="regularInfo.isLiveRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isBusiness==0" v-model="regularInfo.isBusinessRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isCredit==0" v-model="regularInfo.isCreditRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isCustomerflow==0" v-model="regularInfo.isCustomerflowRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isCustomerother==0" v-model="regularInfo.isCustomerotherRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isLiabilities==0" v-model="regularInfo.isLiabilitiesRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' v-if="regularInfo.isFlow==0" v-model="regularInfo.isFlowRemark" :rows="2" resize="none" :maxlength='arealength'
                  placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wbeexEcuted==1" v-model="regularInfo.wbeexEcutedtxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetEcutedBrea==1" v-model="regularInfo.wnetEcutedBreatxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetPhone==1" v-model="regularInfo.wnetPhonetxt" :rows="2"
                  resize="none" :maxlength='arealength' placeholder="请输入内容">
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetAddrandEstate==1" v-model="regularInfo.wnetAddrandEstatetxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetCompany==0" v-model="regularInfo.wnetCompanytxt"
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
                <el-input type='textarea' :disabled='InfoInquire' v-if="regularInfo.wnetAddrstate==0" v-model="regularInfo.wnetAddrstatetxt"
                  :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td> 工商登记信息说明</td>
              <td>
                <td>
                  <el-input type='textarea' :disabled='InfoInquire' v-model="regularInfo.icbcRegistrationInfo" :rows="2" resize="none" :maxlength='arealength'
                    placeholder="请输入内容">
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
            <!-- <el-table :data="Alipay" border style="width: 100%"> -->
            <el-table :data="WechatData(this.ind)" border style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="核实类型" prop='insVerifyTypeTxt' align="left" width="180">
                <!-- <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <label v-if='scope.row.insVerifyType=="00"'> {{ '微信查询结果' }}</label>
                    <label v-if='scope.row.insVerifyType=="01"'> {{ '支付宝查询结果' }}</label>
                  </span>
                </template> -->
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
                  <el-input type="textarea" :disabled='PhoneCredit' v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark"
                    :maxlength="this.textareaL" placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- call-content 客户本人中-电话拨打核实  -->
          <div v-show="custom">
            <!-- <p class="P_title">电话拨打核实</p> -->
            <p style='clear:both;padding:3px 0;'>
              <el-tag>电话拨打核实</el-tag>
            </p>
            <!-- ============对象形式============= -->
            <table border="1" cellpadding='2' width='100%'>
              <tr>
                <th width='40px'> 序号</th>
                <th width='160px'>电话号码 </th>
                <th width='130px'>电话录音 </th>
                <th width='160px'>接听人是否借款人本人 </th>
                <th width='200px'>接听说明 </th>
                <th width='150px'>质检结果</th>
                <th>备注 </th>
              </tr>
              <tr>
                <td> 1</td>
                <!-- 电话号码 -->
                <td> {{insTelCustInfo.telNum}}</td>
                <!-- 电话录音-->
                <td> {{insTelCustInfo.telRecord}}</td>
                <!-- 接听人是否借款人本人 -->
                <td> {{insTelCustInfo.iisself}}</td>
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
                <td>
                  <el-input type='textarea' v-if="insTelCustInfo.insResult=='01'" v-model="insTelCustInfo.remark" :rows="2" resize="none" :maxlength='arealength'
                    placeholder="请输入内容">
                  </el-input>
                </td>
              </tr>
            </table>
            <!-- ====================== -->
          </div>
          <!-- others-content 除客户本人的 电话拨打核实-->
          <div v-show="this.others">
            <!-- <p class="P_title">电话拨打核实</p> -->
            <p style='clear:both;padding:3px 0;'>
              <el-tag>电话拨打核实</el-tag>
            </p>
            <!-- insTelVerifyList -->
            <el-table :data="TelData(this.ind)" border style="width: 100%">
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
    <!-- 初终审复议申请信息 -->
    <el-collapse v-model="activeNames" v-if='ReApply'>
      <el-collapse-item name="5">
        <template slot="title">
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">初终审复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="复议申请人" width="100">
            </el-table-column>
            <el-table-column prop="address" width="180" label="复议申请日期">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top-start">
                  <p>{{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <span> {{ scope.row.address }}</span>
                  </div>
                </el-popover>
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批主管第一次复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="经办人" width="100">
            </el-table-column>
            <el-table-column prop="address" width="180" label="发起复议时间">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top-start">
                  <p>{{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <span> {{ scope.row.address }}</span>
                  </div>
                </el-popover>
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">第一次复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="复议结果" width="100">
            </el-table-column>
            <el-table-column prop="address" width="180" label="质检结果">
            </el-table-column>
            <el-table-column prop="address" width="180" label="审批人">
            </el-table-column>
            <el-table-column prop="address" width="180" label="审批时间">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top-start">
                  <p>{{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <span> {{ scope.row.address }}</span>
                  </div>
                </el-popover>
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
          <img src="../../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">审批主管第二次复议申请信息</span>
        </template>
        <div class="material">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="经办人" width="100">
            </el-table-column>
            <el-table-column prop="address" width="180" label="发起复议时间">
            </el-table-column>
            <el-table-column label="复议说明" min-width="580">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top-start">
                  <p>{{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <span> {{ scope.row.address }}</span>
                  </div>
                </el-popover>
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
          <el-table :data="insConclusion" style="width: 100%" @current-change='QTtableVal' border min-width='1366px'>
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
                <el-tooltip class="item" effect="dark" :content="scope.row.errorType" :disabled="!scope.row.errorType" placement="top-start">
                  <el-input :disabled='QTConclution' v-model="scope.row.errorType" :maxlength='fiftyWords' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="差错描述" align="center" width="230">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" :content="scope.row.errorDescribe" :disabled="!scope.row.errorDescribe" placement="top-start">
                  <el-input :disabled='QTConclution' v-model="scope.row.errorDescribe" :maxlength='arealength' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column label="备注" align="center" min-width="200">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" :content="scope.row.remark" :disabled="!scope.row.remark" placement="top-start">
                  <el-input type='textarea' :disabled='QTConclution' v-model="scope.row.remark" :rows="2" resize="none" :maxlength='arealength'
                    placeholder="请输入内容">
                  </el-input>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="insMemberName" label="操作人员" align="center" width="120">
            </el-table-column>
            <el-table-column prop="insDate" label="质检日期" align="center" width="180">
            </el-table-column>
          </el-table>
          <!-- <table border="1" cellpadding='2' width='100%'>
            <tr>
              <th width='40px'> 序号</th>
              <th width='230px'>质检结果 </th>
              <th width='210px'>差错类型</th>
              <th width='210px'>差错描述</th>
              <th>备注</th>
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
          </table> -->
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
      <!-- <el-button @click="submitShow" v-if="submitBtn"> -->
      <el-button @click="SaveInf('提交')" v-if="submitBtn">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">提交</label>
      </el-button>
      <el-button @click="NoReconsider" v-if="NoReconsiderBtn">
        <img src="../../../../../static/images/back.png">
        <label class="labelTxt">无需复议</label>
      </el-button>
      <!-- <el-button @click="this.ReconsiderShow=true"> -->
      <el-button @click="ReconsiderShow = true" v-if="ReconsiderBtn">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">发起复议</label>
      </el-button>
      <el-button @click="ReAprovalShow = true" v-if="ReAprovalBtn">
        <img src="../../../../../static/images/appro.png">
        <label class="labelTxt">复议审批</label>
      </el-button>
      <el-button @click="AprovalShow = true" v-if="AprovalBtn">
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
    <el-dialog title="提示" :modal="false" :visible.sync="submitShow" width="420px">
      <span>确定操作？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="submitShow=false">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="SaveInf">{{adbtn}}</el-button>
      </span>
    </el-dialog>
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
          <el-input style="width:500px;vertical-align:top;" type="textarea" resize='none' :rows="2"></el-input>
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
    <el-dialog title='复议审批' :visible.sync="ReAprovalShow" :modal="false" width="750px" top="20vh">
      <div class="reApproval">
        <p>
          <span>
            <label>复议结果：</label>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in RecResult" :key="item.value" :label="item.label" :value="item.value">
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
            <!-- <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select> -->
            <el-input :disabled='QTConclution' v-model="insConclusion.errorDescribe" :maxlength='arealength' placeholder="请输入内容"></el-input>
          </span>
        </p>
        <p style="margin:10px 0;">
          <label class="aaaaaaa">复议说明：</label>
          <el-input style="width:500px;vertical-align:top;" type="textarea" resize='none' :rows="2"></el-input>
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
          <el-button type="primary" @click="bigDataLogVisible=false">确定</el-button>
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
        userInf: '',
        SaveInfParams: '',
        systermTime: Number,
        submitShow: false, //提交弹框
        loadsitu: false,
        adbtn: '确认',
        currentRow: null,
        addId: '',
        ind: 0,
        reviewConclusion: {}, //复核结论
        isForm: '',
        radio: '1',
        baseInfo: '', //基本信息
        // regularInfo: '',
        fiftyWords: 50,
        arealength: 300, //area长度
        insConclusion: [],
        insWechatAlipay: '', //微信、支付宝
        AlipayConcat: [], //合并微信拨打核实
        Alipay: [{ //微信支付宝切换暂存
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "06" //默认客户本人type
          },
          {
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "06" //默认客户本人type
          }
        ],
        AlipayCus: [{ //客户本人-微信
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "06" //默认客户本人type
          },
          {
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "06" //默认客户本人type
          }
        ],
        // AlipayCompany: [], //单位电话-微信
        AlipayFamily: [{ //家庭联系人-微信
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "03"
          },
          {
            applyId: "",
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
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "05"
          },
          {
            applyId: "",
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
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "00", //微信
            insVerifyTypeTxt: "微信查询结果",
            remark: "",
            telType: "04"
          },
          {
            applyId: "",
            id: "",
            insResult: "00",
            insResultTxt: "正常",
            insVerifyType: "01", //支付宝
            insVerifyTypeTxt: "支付宝查询结果",
            remark: "",
            telType: "04"
          }
        ],
        // insTelCustInfo: [{
        //   applyId:'',
        //   id:'',
        //   iisself:'',
        //   iisselftxt:'',
        //   insResult:'',
        //   remark:'',
        //   telNum:'',
        //   telRecord:'',
        // }], //客户本人-拨打核实-本人只有一条电话拨打核实记录----array
        insTelCustInfo: {}, //客户本人-拨打核实-本人只有一条电话拨打核实记录---obj
        // insTelVerifyList: [], //除客户本人以外-电话拨打核实-暂存
        insTelVerifyListCompany: [], //单位电话-电话拨打核实
        insTelVerifyListFamily: [], //家庭联系人-电话拨打核实
        insTelVerifyListWork: [], //工作证明-电话拨打核实
        insTelVerifyListOthers: [], //其他联系人-电话拨打核实

        // insTelVerifyListCompanyCount: 0, //单位电话-电话拨打核实
        // insTelVerifyListFamilyCount: 0, //家庭联系人-电话拨打核实
        // insTelVerifyListWorkCount: 0, //工作证明-电话拨打核实
        // insTelVerifyListOthersCount: 0, //其他联系人-电话拨打核实
        insTelVerifyListConcat: [], //合并电话拨打核实-除客户本人
        //  regularInfo: {},//接口可调用时待测试默认选中值
        regularInfo: {
          // 资料核实
          isForm: '1', //申请单表是否符合要求
          isIdcard: '1', //身份证证明是否符合要求
          isIncome: '1', //收入证明是否符合要求
          isWork: '1', //工作证明是否符合要求
          isEstate: '1', //房产资料是否符合要求
          isLive: '1', //居住证明是否符合要求
          isBusiness: '1', //经营证明是否符合要求
          isCredit: '1', //信用报告是否符合要求
          isCustomerflow: '1', //客户流水是否符合要求
          isCustomerother: '1', //客户其他资料是否符合要求
          isLiabilities: null, //负债计算是否正确
          isFlow: null, //流水计算是否正确
          isReference: null, //征信录入是否正确
          // 第三方信息查询 
          wbeexEcuted: null, //客户在人法网是否有被执行信息
          wnetEcutedBrea: null, //客户在失信网是否有失信记录
          wnetPhone: null, //网上搜索借款人的手机是否有异常
          wnetAddrandEstate: null, //网上搜索借款人现居住地址和房产地址是否异常
          wnetCompany: null, //当地工商网查询企业基本信息中是否有登记
          wnetAddrstate: null, //客户工作单位在全国组织代码查询中是否存在
          icbcRegistrationInfo: null, //工商登记信息说明
          // 内部匹配核实
          isInmatch: null, //内部匹配是否进行排查
        }, // // 资料核实+三方信息查询+ 内部匹配核实
        // insConclusion:'',
        // ------------------------------------测试用--------------------
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        // ------------------------------------------------------------
        // //   ---
        // textareaL: 300,
        tabIndex: 0,
        payment: true,
        custom: true,
        others: false,
        addTr: true,
        // currentRow: null,
        telType: '06', //电话征信 电话类型入参
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8", "9", '10'], //折叠面板 默认显示下标
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
          value: '04',
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
        RecResult: [{
          label: '审批拒绝',
          value: '02',
        }, {
          label: '审批通过',
          value: '01',
        }],

        // ----------------------------------------
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        // --------------------------------
        // insWechatAlipayList:'',
        // insTelCustInfo:{},//客户本人-拨打核实
        // -----------弹窗---
        ReconsiderShow: false,
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
        ReAprovalBtn: false, //按钮 - 复议审批
        AprovalBtn: false, //按钮 - 审批
        AntiBtn: true, //发起反欺诈
        RiskControlBtn: true, //按钮 - 大数据风控
        SocialSecurityBtn: true, //按钮 - 社保公积金

      }
    },
    props: ['propQTconclution', 'propApplyId', 'pageType'],
    methods: {
      getSystermTime() { // 获取系统时间-质检结论-质检日期取值---基础接口
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            this.systermTime = new Date(res.data);
            this.systermTime = this.systermTime.getFullYear() + '-' + (this.systermTime.getMonth() + 1) + '-' +
              this.systermTime
              .getDate()
          }
        })
      },
      show() {
        console.log('furyi ')
        this.ReconsiderShow = true;
      },
      referPort() { // 质检页面查询接口
        this.get("/insConclusion/queryInsConclusionObj", {
          applyId: this.propQTconclution.applyId, //入参待更新+测试-------------------------------------------------------
        }).then(res => {
          if (res.statusCode == 200) {
            //  基本信息                                -Object
            this.baseInfo = res.data.applyBaseInfo;
            // 资料核实+三方信息查询+ 内部匹配核实         -Object
            !res.data.insRegularInfo ? this.regularInfo : this.regularInfo = res.data.insRegularInfo;
            // 质检结论                                  -Object
            !res.data.insConclusionList ? this.insConclusion : this.insConclusion = res.data.insConclusionList;
            this.insConclusion[0] && this.insConclusion[0].id ? this.addId = this.insConclusion[0].id : this.addId =
              ''; //取添加质检结论时，id值
              // 复核结论   -----obj
              this.reviewConclusion=res.data.insReviewConclusion;
            // 电话征信：客户本人-电话拨打核实 - 本人只有一条电话拨打核实记录            -object
            this.insTelCustInfo = res.data.insTelCustInfo; //this.insTelCustInfo 是array / 查询接口 -只返回客户本人-电话核实信息
            !this.insTelCustInfo.insResult ? this.insTelCustInfo.insResult = '00' : this.insTelCustInfo.insResult; //本人拨打电话核实-默认选00           
            // 电话征信：电话拨打核实-除客户本人
            for (var k = 0; k < res.data.insTelVerifyList.length; k++) {
              res.data.insTelVerifyList[k].insResult == '' ? res.data.insTelVerifyList[k].insResult = '00' : ''; //质检结果如果没有值，默认选00 正常
              res.data.insTelVerifyList[k].telType == '02' ? this.insTelVerifyListCompany.push(res.data.insTelVerifyList[
                k]) : ''; //单位电话
              res.data.insTelVerifyList[k].telType == '03' ? this.insTelVerifyListFamily.push(res.data.insTelVerifyList[
                k]) : ''; //家庭联系人
              res.data.insTelVerifyList[k].telType == '04' ? this.insTelVerifyListOthers.push(res.data.insTelVerifyList[
                k]) : ''; //其他联系人
              res.data.insTelVerifyList[k].telType == '05' ? this.insTelVerifyListWork.push(res.data[k]) : ''; //工作证明
            }
            // 电话征信：微信/支付宝核实  ----  单位电话无微信支付宝--- -Array  (专员进来为空，提交/保存之后八条都会返回)
            console.log('bbbbb')
            for (var k = 0; k < res.data.insWechatAlipayList.length; k++) {
              // console.log('aaaaa')
              // res.data.insWechatAlipayList[k].telType == '06' && res.data.insWechatAlipayList[k].insVerifyType ==
              //   '00' ? this.AlipayCus[0] = res.data.insWechatAlipayList[k] : this.AlipayCus[1] = res.data.insWechatAlipayList[
              //     k]; //客户本人
              // res.data.insWechatAlipayList[k].telType == '03' && res.data.insWechatAlipayList[k].insVerifyType ==
              //   '00' ? this.AlipayFamily[0] = res.data.insWechatAlipayList[k] : this.AlipayFamily[1] = res.data.insWechatAlipayList[
              //     k]; //家庭联系人
              // res.data.insWechatAlipayList[k].telType == '04' && res.data.insWechatAlipayList[k].insVerifyType ==
              //   '00' ? this.AlipayOthers[0] = res.data.insWechatAlipayList[k] : this.AlipayOthers[1] = res.data.insWechatAlipayList[
              //     k]; //其他联系人
              // res.data.insWechatAlipayList[k].telType == '05' && res.data.insWechatAlipayList[k].insVerifyType ==
              //   '00' ? this.AlipayWork[0] = res.data.insWechatAlipayList[k] : this.AlipayWork[1] = res.data.insWechatAlipayList[
              //     k]; //工作证明
              if (res.data.insWechatAlipayList[k].telType == '06') { //客户本人
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  this.AlipayCus[0] = res.data.insWechatAlipayList[k];
                } else {
                  this.AlipayCus[1] = res.data.insWechatAlipayList[k];
                }
              } else if (res.data.insWechatAlipayList[k].telType == '03') { //家庭联系人
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  this.AlipayFamily[0] = res.data.insWechatAlipayList[k];
                } else {
                  this.AlipayFamily[1] = res.data.insWechatAlipayList[k];
                }
              } else if (res.data.insWechatAlipayList[k].telType == '04') { //其他联系人
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  this.AlipayOthers[0] = res.data.insWechatAlipayList[k];
                } else {
                  this.AlipayOthers[1] = res.data.insWechatAlipayList[k];
                }
              } else if (res.data.insWechatAlipayList[k].telType == '05') { //工作证明
                if (res.data.insWechatAlipayList[k].insVerifyType == '00') {
                  this.AlipayWork[0] = res.data.insWechatAlipayList[k];
                } else {
                  this.AlipayWork[1] = res.data.insWechatAlipayList[k];
                }
              }
              //  res.data[k].telType=='03'? this.insTelVerifyListFamily.push(res.data[k] ):''; //
              //     res.data[k].telType=='04'? this.insTelVerifyListOthers.push(res.data[k] ):''; //
              //     res.data[k].telType=='05'? this.insTelVerifyListWork.push(res.data[k] ):''; //
            }
            //    insTelCustInfo: {}, //客户本人-拨打核实-本人只有一条电话拨打核实记录---obj
            // insTelVerifyList: [], //除客户本人以外-电话拨打核实-暂存
            // insTelVerifyListCompany: [], //单位电话-电话拨打核实
            // insTelVerifyListFamily: [], //家庭联系人-电话拨打核实
            // insTelVerifyListWork: [], //工作证明-电话拨打核实
            // insTelVerifyListOthers: [], //其他联系人-电话拨打核实

            //           if(res.data.insWechatAlipayList.length>0){
            // for(var i=0;i<res.data.insWechatAlipayList.length;i++){
            // res.data.insWechatAlipayList[i].insVerifyType=='00'?this.Alipay[0]=res.data.insWechatAlipayList[i]:this.Alipay[0];//微信
            // res.data.insWechatAlipayList[i].insVerifyType=='01'?this.Alipay[1]=res.data.insWechatAlipayList[i]:this.Alipay[1];//支付宝
            // }
            //  }
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
      addQTResult() {
        // event.stopPropagation();
        // 判断初终审标识-------------未填写------------初终检标志根据角色更改
        // this.propQTconclution.pageType == 'checkApp_apply' //专员
        // -----------------------------
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
            checkType: "", // 初终检标志
            instaskType: "", //任务类型（00:常规质检，01:专项质检）
            id: this.addId, // 专员或主管首次保存或提交不传
            isSubmit: "0", // 0：保存 1：提交
            // "checkResult": "", // 任务类型（00:常规质检，01:专项质检）
          });
        } else {
          // if(this.cardDetList[this.cardDetList.length-1].bankName=='' || this.cardDetList[this.cardDetList.length-1].accountStatus==''){
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
              checkType: "", // 初终检标志
              instaskType: "", //任务类型（00:常规质检，01:专项质检）
              id: this.addId, // 专员或主管首次保存或提交不传
              isSubmit: "0", // 0：保存 1：提交
              // "checkResult: "", // 任务类型（00:常规质检，01:专项质检）
            });
          }
        };
      },
      delQTresult() {
        console.log(this.currentRow);
        for (var i = 0; i < this.insConclusion.length; i++) {
          if (this.insConclusion[i] == this.currentRow) {
            this.insConclusion.splice(i, 1);
          }
        }
      },
      QTtableVal(val) {
        console.log(val)
        this.currentRow = val
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
      WechatData(ind) {
        if (ind == 0) { //客户本人
          return this.AlipayCus;
        } else if (ind == 2) { //家庭联系人
          return this.AlipayFamily;
        } else if (ind == 3) { //工作证明
          return this.AlipayWork;
        } else if (ind == 4) { //其他联系人
          return this.AlipayOthers;
        }
      },
      TelData(ind) {
        if (ind == 1) { //单位电话
          return this.insTelVerifyListCompany;
        } else if (ind == 2) { //家庭联系人
          return this.insTelVerifyListFamily;
        } else if (ind == 3) { //工作证明
          return this.insTelVerifyListWork;
        } else if (ind == 4) { //其他联系人
          return this.insTelVerifyListOthers;
        }
      },
      tabClick(ev, ind, val) {
        console.log(ind)
        this.tabIndex = this.ind = ind;
        if (ind == 0) { // 客户本人
          this.telType = '06'
          this.payment = true;
          this.custom = true;
          this.others = false;
          // this.Alipay = this.AlipayCus; //微信支付宝内容
        } else if (ind == 1) { // 单位电话
          this.telType = '02'
          this.payment = false;
          this.custom = false;
          this.others = true;
          // this.Alipay = this.AlipayCompany; //微信支付宝内容   
          // this.insTelVerifyList = this.insTelVerifyListCompany; //电话核实
        } else if (ind == 2) { // 家庭联系人
          this.telType = '03'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.a;
          // this.Alipay = this.AlipayFamily; //微信支付宝内容 
          // this.insTelVerifyList = this.insTelVerifyListFamily; //电话核实
        } else if (ind == 3) { // 工作证明人
          this.telType = '05'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.b;
          // this.Alipay = this.AlipayWork; //微信支付宝内容
          // this.insTelVerifyList = this.insTelVerifyListWork; //电话核实
        } else if (ind == 4) { // 其他联系人
          this.telType = '04'
          this.payment = true;
          this.custom = false;
          this.others = true;
          // this.Alipay = this.AlipayOthers; //微信支付宝内容 
          // this.insTelVerifyList = this.insTelVerifyListOthers; //电话核实
        }
      },
      // ---------------------------------按钮事件----------------
      // 保存 或 提交
      SaveInf(type) { //质检主管不需要提交，只有质检专员 显示提交
        console.log(type)
        console.log(this.insConclusion.length )
        if (type == '提交') { //提交 加校验，保存无需校验必填---常规质检
        if( this.propQTconclution.tastwaitingPass.listType == '常规质检' ){
 if (!this.regularInfo.isForm || !this.regularInfo.isIdcard || !this.regularInfo.isIncome || !this.regularInfo
            .isWork ||
            !this.regularInfo.isEstate || !this.regularInfo.isLive || !this.regularInfo.isBusiness || !this.regularInfo
            .isCredit ||
            !this.regularInfo.isCustomerflow || !this.regularInfo.isCustomerother || !this.regularInfo.isLiabilities ||
            !this.regularInfo.isFlow ||
            !this.regularInfo.isReference ||
            !this.regularInfo.wbeexEcuted || !this.regularInfo.wnetEcutedBrea || !this.regularInfo.wnetPhone ||
            !this.regularInfo.wnetAddrandEstate || !this.regularInfo.wnetCompany || !this.regularInfo.wnetAddrstate ||
            !this.regularInfo.isInmatch) {
            this.$message.error('请输入必填项！')
            return
          }else if(this.insConclusion.length==0){//必须添加一条质检结论校验
 this.$message.error('请至少添加一条质检结论！')
 return
        }
          
        }else if( this.propQTconclution.tastwaitingPass.listType == '专项质检' ){
          if(this.insConclusion.length==0){//必须添加一条质检结论校验
 this.$message.error('请至少添加一条质检结论！')
 return
        }
        }
        }
        // 提交 保存 
        if (this.propQTconclution.tastwaitingPass.listType == '常规又专项质检') { //常规又专项质检
              this.post("/insConclusion/addReviewConclusion", {
          id: this.reviewConclusion.id,
          applyId:  this.reviewConclusion.applyId,
          reviewConclusion: this.reviewConclusion.reviewConclusion,
          checkType:this.reviewConclusion.checkType,
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
              this.$message({
                type: 'success',
                message:'添加复核结论成功！'
              })
          } else {
            this.$message.error(res.msg);
          }
        });
        } else {                                                        //  常规质检、专纵质检
          // 先校验-质检结论最后一条信息，质检结果如果为空，提示并return
          if (type == '提交' && this.insConclusion.length > 0 && this.insConclusion[this.insConclusion.length - 1].checkResult ==
            '') {
            this.$message.error('请输入必填项！');
            return
          }
          // 微信支付宝+电话核实（除本人）合并为一个数组
          this.insTelVerifyListConcat = this.insTelVerifyListCompany.concat(this.insTelVerifyListFamily).concat(this.insTelVerifyListWork)
            .concat(this.insTelVerifyListOthers)
          // console.log(this.insTelVerifyListCompany)
          // console.log(this.insTelVerifyListFamily)
          // console.log(this.insTelVerifyListWork)
          // console.log(this.insTelVerifyListOthers)
          // console.log(this.insTelVerifyListConcat)
          this.AlipayConcat = this.AlipayCus.concat(this.AlipayFamily).concat(this.AlipayWork).concat(this.AlipayOthers)
          // 循环质检结论list 改变对应的值
          for (var i = 0; i < this.insConclusion.length; i++) {
            console.log('isSubmit：', this.insConclusion[i].isSubmit)
            type == '保存' ? this.insConclusion[i].isSubmit = '0' : this.insConclusion[i].isSubmit = '1'; // 质检结论 保存：0，修改：1
            this.insConclusion[i].checkType == '01' && this.insConclusion[i].id ? this.insConclusion[i].id = '' : this.insConclusion[
              i].id; //主管首次保存或提交id设置为空
          }
            this.SaveInfParams = { //入参
              taskId: this.propQTconclution.tastwaitingPass.taskId,
              applyBaseInfo: this.baseInfo, //基础信息
              insConclusion: this.insConclusion, //质检结论页-质检结论
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
              type == '保存' ? this.referPort() : ''; // 点保存重新获取信息
              if (type == '提交') {
                this.propQTconclution.pageType == 'checkApp_apply' ? this.$router.push(
                  '/commissioner?taskNodeName=checkApp_apply&flag=07') : ''; //专员
              }
            } else {
              this.$message.error(res.msg);
            }
          });}
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
            id: this.propQTconclution.applyId,
            flag: 'zhijian',
            busiState: '30',
            wayOf: '02' //质检
          }
        });
      },
      // 流程轨迹
      getLcgjList() {
        console.log('流程轨迹')
        this.lcdialogVisible = true;
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.propQTconclution.tastwaitingPass.processInstanceId +
            '&' + Math.random())
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
          applyId: this.propQTconclution.applyId
          // applyId: '申请单id'
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
      areaAndComplianceBtn() {
        this.onlyCheck();
        this.ReApply = true; //初终审复议申请信息
        this.SuperVisor = true; //审批主管第一次复议申请信息
        this.FirstReconsider = true; //第一次复议审批信息
        this.SuperVisorSecond = true; // 审批主管第二次复议申请信息
        this.saveBtn = false; //保存
        this.SocialSecurityBtn = false; //社保公积金          
      },
      onlyCheck() { //   查看页面，-编辑常规又质检
        this.material = true; //资料核实
        this.InfoInquire = true; //三方信息查询
        this.matching = true; //内部匹配核实
        this.PhoneCredit = true; //电话征信
        this.QTConclution = true; //质检结论
      },
      Special() { //this.propQTconclution.EditType == '项'
        this.AprovalInfolShow = false; //审批信息        
        this.MaterialShow = false; //资料核实
        this.InfoSearchShow = false; //三方信息查询
        this.MatchingShow = false; //内部匹配核实
        this.submitBtn = false; //提交
      },
      regularAndSpecial() { //this.propQTconclution.EditType == '常规又专项质检'
        this.reResultShow = true; //复核结论-div 
        this.AntiBtn = false; //发起反欺诈
        this.SocialSecurityBtn = false; //社保公积金
        this.onlyCheck();
      },
      showdiffer() {
        // ---------------------------------------
        // if (this.propQTconclution.EditType == '项') { //专员 ，主管     √
        //   this.AprovalInfolShow = false; //审批信息        
        //   this.MaterialShow = false; //资料核实
        //   this.InfoSearchShow = false; //三方信息查询
        //   this.MatchingShow = false; //内部匹配核实
        //   this.submitBtn = false; //提交
        // } else if (this.propQTconclution.EditType == '常规又专项质检') {
        //   this.reResultShow = true; //复核结论-div 
        //   this.AntiBtn = false; //发起反欺诈
        //   this.SocialSecurityBtn = false; //社保公积金
        //   // -----------------------------------------------------------------查看disable---------------------------
        //   // this.material=true;//资料核实
        //   // this.InfoInquire=true;//三方信息查询
        //   // this.matching=true;//内部匹配核实
        //   // this.PhoneCredit=true;//电话征信
        //   // this.QTConclution=true;//质检结论
        //   this.onlyCheck();
        // }
        // ----------------------角色------------------------------
        if (this.propQTconclution.pageType == 'checkApp_apply') { //专员-编辑  √
          console.log('专员')
          if (this.propQTconclution.tastwaitingPass.listType == '常规质检') {
            this.QTConclutionBtn = true;
          } else
          if (this.propQTconclution.tastwaitingPass.listType == '专项质检') {
            this.Special();
            //   this.AprovalInfolShow = false; //审批信息        
            //   this.MaterialShow = false; //资料核实
            //   this.InfoSearchShow = false; //三方信息查询
            //   this.MatchingShow = false; //内部匹配核实
            this.submitBtn = true; //提交
            this.QTConclutionBtn = true;
          } else if (this.propQTconclution.tastwaitingPass.listType == '常规又专项质检') {
            this.regularAndSpecial();
            //   this.reResultShow = true; //复核结论-div 
            //   this.AntiBtn=false;//发起反欺诈
            //   this.SocialSecurityBtn=false;//社保公积金
            //   // reResultShow
          }
        } else if (this.propQTconclution.pageType == 'checkApp_check_manager') { //主管-编辑 √
          if (this.propQTconclution.tastwaitingPass.listType == '常规质检') {
            this.submitBtn = false; //提交
            this.SocialSecurityBtn = false; //社保公积金
          } else if (this.propQTconclution.tastwaitingPass.listType == '专项质检') {
            this.Special();
            // this.AprovalInfolShow = false; //审批信息        
            // this.MaterialShow = false; //资料核实
            // this.InfoSearchShow = false; //三方信息查询
            // this.MatchingShow = false; //内部匹配核实
            // this.submitBtn=false;//提交
          } else if (this.propQTconclution.tastwaitingPass.listType == '常规又专项质检') {
            this.regularAndSpecial();
            // this.reResultShow = true; //复核结论-div 
            // this.AntiBtn=false;//发起反欺诈
            // this.SocialSecurityBtn=false;//社保公积金
            this.submitBtn = false; //提交
          }
        } else if (this.propQTconclution.pageType == 'self') { //本人---单独页面
        } else if (this.propQTconclution.pageType == 'ReApply') { //初终审主管  √
          this.onlyCheck();
          this.ReApply = true; //初终审复议申请信息
          this.NoReconsiderBtn = true; //无需复议
          this.ReconsiderBtn = true; //发起复议
          this.saveBtn = false; //保存            
          this.submitBtn = false; //提交
          this.SocialSecurityBtn = false; //社保公积金
          if (this.propQTconclution.EditType == 'fristTime') {
            //首次复议
            // this.ReApply=true;//初终审复议申请信息
          } else if (this.propQTconclution.EditType == 'secondTime') {
            this.FirstReconsider = true; //第一次复议审批信息
          }
        } else if (this.propQTconclution.pageType == 'QTRe') { //复议任务列表（首次） √
          this.onlyCheck();
          this.ReApply = true; //初终审复议申请信息
          this.SuperVisor = true; //审批主管第一次复议申请信息
          this.submitBtn = false; //提交
          this.SocialSecurityBtn = false; //社保公积金
          this.ReAprovalBtn = true; //复议审批
        } else if (this.propQTconclution.pageType == 'Area') { //区域 √
          // this.onlyCheck();
          // this.ReApply = true; //初终审复议申请信息
          // this.SuperVisor = true; //审批主管第一次复议申请信息
          // this.FirstReconsider = true; //第一次复议审批信息
          // this.SuperVisorSecond = true; // 审批主管第二次复议申请信息
          // this.saveBtn=false;//保存
          //  this.SocialSecurityBtn = false; //社保公积金
          this.areaAndComplianceBtn();
          this.RiskControlBtn = false; //大数据风控
          this.NoReconsiderBtn = true; //无需复议
        } else if (this.propQTconclution.pageType == 'compliance') { //合规 √
          // this.onlyCheck();
          // this.ReApply = true; //初终审复议申请信息
          // this.SuperVisor = true; //审批主管第一次复议申请信息
          // this.FirstReconsider = true; //第一次复议审批信息
          // this.SuperVisorSecond = true; // 审批主管第二次复议申请信息
          // this.saveBtn=false;//保存
          this.submitBtn = false; //提交
          this.AprovalBtn = true; //审批
        }
      },

    },
    mounted() {
      console.log(this.propQTconclution)
      console.log(this.propQTconclution.tastwaitingPass.listType)
      this.getSystermTime();
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      // console.log(this.userInf)
      // console.log(this.propQTconclution)
      // this.processInstanceId = JSON.parse(localStorage.getItem('未存储，未确定，待更改-RtaskInWaitting')).processInstanceId;
      // 质检结论枚举
      // ["01": "初审一般差错",
      // "02": "初审重大差错",
      // "03": "终审一般差错",
      // "04":"终审重大差错",
      // "05": "初审建议",
      // "06": "终审建议","07":"无"]
      // console.log(this.propQTconclution.applyId)
      this.referPort(); //质检查询页面
      this.showdiffer();
      // console.log(this.regularInfo)
      // this.InitialInfo();
      // this.getTelAlipay('06')//电话征信-支付宝+电话核实接口
      this.Social(); //社保公积金接口
      // this.Alipay = this.AlipayCus //初始状态取客户信息的支付宝数据-----带更改（解决异步数据不确定顺序问题）

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
    width: 130px;
    text-align: right;
  }

  .aaaaaaa {
    width: 126px;
    display: inline-block;
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
