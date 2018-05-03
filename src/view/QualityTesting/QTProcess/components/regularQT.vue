<template>
  <div class="regularQT">
    <!-- 审批信息 -->
    <el-collapse v-model="activeNames">
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
    <el-collapse v-model="activeNames">
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
              <td> 申请表是否符合要求</td>
              <td>
                <el-radio-group v-model="regularInfo.isForm" @change='clearContent("申请表",regularInfo.isForm)'>
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
                <el-radio-group v-model="regularInfo.isIdcard" @change='clearContent("身份证",regularInfo.isIdcard)'>
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
                <el-radio-group v-model="regularInfo.isIncome" @change='clearContent(" 收入证明",regularInfo.isIncome)'>
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
                <el-radio-group v-model="regularInfo.isWork" @change='clearContent("工作证明",regularInfo.isWork)'>
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
                <el-radio-group v-model="regularInfo.isEstate" @change='clearContent("房产资料",regularInfo.isIdcard)'>
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
                <el-radio-group v-model="regularInfo.isLive" @change='clearContent("居住证明",regularInfo.isLive)'>
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
                <el-radio-group v-model="regularInfo.isBusiness" @change='clearContent("经营证明",regularInfo.isBusiness)'>
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
                <el-radio-group v-model="regularInfo.isCredit" @change='clearContent("信用报告",regularInfo.isCredit)'>
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
                <el-radio-group v-model="regularInfo.isCustomerflow" @change='clearContent("客户流水",regularInfo.isCustomerflow)'>
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
                <el-radio-group v-model="regularInfo.isCustomerother" @change='clearContent("其他资料",regularInfo.isCustomerother)'>
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
                <el-radio-group v-model="regularInfo.isLiabilities" @change='clearContent(" 负债计算",regularInfo.isLiabilities)'>
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
                <el-radio-group v-model="regularInfo.isFlow" @change='clearContent("流水计算",regularInfo.isFlow)'>
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
                <el-radio-group v-model="regularInfo.isReference" @change='clearContent("征信录入",regularInfo.isReference)'>
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
    <el-collapse v-model="activeNames">
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
                <el-radio-group v-model="regularInfo.wbeexEcuted" @change='clearContent("被执行信息",regularInfo.wbeexEcuted)'>
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
                <el-radio-group v-model="regularInfo.wnetEcutedBrea" @change='clearContent("失信记录",regularInfo.wnetEcutedBrea)'>
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
                <el-radio-group v-model="regularInfo.wnetPhone" @change='clearContent("手机异常",regularInfo.wnetPhone)'>
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
                <el-radio-group v-model="regularInfo.wnetAddrandEstate" @change='clearContent("居住房产异常",regularInfo.wnetAddrandEstate)'>
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
                <el-radio-group v-model="regularInfo.wnetCompany" @change='clearContent("工商登记",regularInfo.wnetCompany)'>
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
                <el-radio-group v-model="regularInfo.wnetAddrstate" @change='clearContent("全国组织代码",regularInfo.wnetAddrstate)'>
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
    <el-collapse v-model="activeNames">
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
                <el-radio-group v-model="regularInfo.isInmatch" @change='clearContent("匹配排查",regularInfo.isInmatch)'>
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
          <!-- pay-content 微信/支付宝核实==========待确认写死还是后台 返 -->
          <div v-if="this.payment">
            <p class="P_title">微信/支付宝核实</p>
            <el-table :data="PhoneCre" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="核实类型" align="left" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="核实结论" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group v-model="scope.row.conclution" @change="clearContent(scope.row)">
                      <el-radio :label="1">正常</el-radio>
                      <el-radio :label="2">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" v-if="scope.row.conclution=='2'" :rows="2" resize="none" v-model="scope.row.comment" :maxlength="this.textareaL"
                    placeholder="请输入内容">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- call-content 客户本人中  -->
          <div v-show="this.custom">
            <p class="P_title">电话拨打核实</p>
            <el-table :data="insTelVerifyList" style="width: 100%">
              <el-table-column label='序号' align="center" type="index" width="50"> </el-table-column>
              <el-table-column label="电话号码" align="center" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.telNum }}</span>
                </template>
              </el-table-column>
              <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.telRecord }}</span>
                </template>
              </el-table-column>
              <!-- ================注释掉的地方  接口文档没有对应字段，待更新======================== -->
              <!-- <el-table-column prop="Self" label="接听人是否借款人本人" align="center" width="180">
              </el-table-column>
              <el-table-column prop="Self" label="接听说明" width="180" align="center">
              </el-table-column> -->
              <el-table-column label="质检结果（必填项）" align="center" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-radio-group v-model="scope.row.insResult" @change="clearContent(scope.row)">
                      <el-radio :label="'00'">正常</el-radio>
                      <el-radio :label="'01'">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark" :maxlength="this.textareaL"
                    placeholder="请输入内容">
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
              <el-table-column label="电话号码" align="center" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">
                    <b style="color:red;fontWeight:700px"> * </b>{{ scope.row.telNum }}</span>
                </template>
              </el-table-column>
              <el-table-column label="电话录音" align="center" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.telRecord }}</span>
                </template>
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
                    <el-radio-group v-model="scope.row.insResult" @change="clearContent(scope.row)">
                      <el-radio :label="1">正常</el-radio>
                      <el-radio :label="2">异常</el-radio>
                    </el-radio-group>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="备注（非必填）" align="center" min-width="180">
                <template slot-scope="scope">
                  <el-input type="textarea" v-if="scope.row.insResult=='01'" :rows="2" resize="none" v-model="scope.row.remark" :maxlength="this.textareaL"
                    placeholder="请输入内容">
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
                <el-select v-model="insConclusion.checkResult" placeholder="请选择">
                  <el-option v-for="item in QTresult" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-tooltip class="item" effect="dark" :content="insConclusion.errorType" :disabled="!insConclusion.errorType" placement="top-start">
                  <el-input v-model="insConclusion.errorType" :maxlength='fiftyWords' placeholder="请输入内容"></el-input>
                </el-tooltip>
              </td>
              <td>
                <el-tooltip class="item" effect="dark" :content="insConclusion.errorDescribe" :disabled="!insConclusion.errorDescribe" placement="top-start">
                  <el-input v-model="insConclusion.errorDescribe" :maxlength='arealength' placeholder="请输入内容"></el-input>
                </el-tooltip>

              </td>
              <td>
                <el-tooltip class="item" effect="dark" :content="insConclusion.remark" :disabled="!insConclusion.remark" placement="top-start">
                  <el-input type='textarea' v-model="insConclusion.remark" :rows="2" resize="none" :maxlength='arealength' placeholder="请输入内容">
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
    <!-- 底部按钮 -->
    <div class="QT_btns_wrap">
        <!-- <el-button @click="coverFn('back')">
        <img src="/static/images/back.png">
        <label class="labelTxt">回退</label>
      </el-button>
      <el-button @click="coverFn('refuse')">
        <img src="/static/images/jujue.png">
        <label class="labelTxt">拒绝</label>
      </el-button>
      <el-button @click="shenpi">
        <img src="/static/images/back.png">
        <label class="labelTxt">审批</label>
      </el-button>
      <el-button @click="AntiFraudApplication">
        <img src="/static/images/faqi.png">
        <label class="labelTxt">反欺诈申请</label>
      </el-button>
      <el-button @click="getSpjlList">
        <img src="/static/images/jielun.png">
        <label class="labelTxt">审批流程轨迹</label>
      </el-button>
      <el-button @click="getLcgjList">
        <img src="/static/images/liucheng.png">
        <label class="labelTxt">流程轨迹</label>
      </el-button>
      <el-button @click="tobigData">
        <img src="/static/images/bigdata.png">
        <label class="labelTxt">大数据风控</label>
      </el-button>
      <el-button @click="roSocialSecurity">
        <img src="/static/images/social.png">
        <label class="labelTxt">社保/公积金{{social}}</label>
      </el-button> -->
    </div>
  </div>
</template>
<script>
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
        insTelCustInfo: '', //客户拨打核实
        insWechatAlipay: '', //微信、支付宝
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
        telType:'06',//电话征信 电话类型入参
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
insTelVerifyList:'',
insWechatAlipayList:''
      }
    },
    props: ['propApplyId'],
    methods: {
      // 质检页面查询接口
      referPort() {
        this.get("/insConclusion/queryInsConclusionObj", {
          applyId: this.propApplyId, //入参待更新+测试-------------------------------------------------------
        }).then(res => {
          if (res.statusCode == 200) {
            //  基本信息
            this.baseInfo = res.data.applyBaseInfo;
            // 资料核实+三方信息查询+ 内部匹配核实
            this.regularInfo = res.data.insRegularInfo;
            // 质检结论
            this.insConclusion = res.data.insConclusion;

            // 电话征信：客户本人-电话拨打核实     
            this.insTelCustInfo = res.data.insTelCustInfo;
            //电话征信： 微信/支付宝核实     
            this.insWechatAlipay = res.data.insWechatAlipay;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      getTelAlipay(telTypeVal){
        // 电话征信-微信支付宝 + 拨打核实接口
         this.post("/insConclusion/getTelVerifyWechatAlipay", {
         applyId:'申请单id',
        // telType: this.telType,
        telType: telTypeVal
        }).then(res => {
          if (res.statusCode == 200) {
            // 拨打核实  insTelVerify
            this.insTelVerifyList = res.data.insTelVerifyList;
            // 微信支付宝  insWechatAlipay
            this.insWechatAlipayList = res.data.insWechatAlipayList;
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
          case '申请表':
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
          case '申请表':
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
        console.log(ind )
        // “01”:”住址电话”,”02”:,”03”:””,”04”:””,”05”:””
        //  this.title = val;
        //         this.tabContent1 = ind;
        this.tabIndex = ind;
        if (ind == 0) {
          // 客户本人
          this.telType='06'
          this.payment = true;
          this.custom = true;
          this.others = false;
        } else if (ind == 1) {
           // 单位电话
          this.telType='02'
          this.payment = false;
          this.custom = false;
          this.others = true;
        } else if (ind == 2) {
            // 家庭联系人
          this.telType='03'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.a
        } else if (ind == 3) {
           // 工作证明人
          this.telType='05'
          this.payment = true;
          this.custom = false;
          this.others = true;
          this.othersCheck = this.b

        } else if (ind == 4) {
           // 其他联系人
          this.telType='04'
          this.payment = true;
          this.custom = false;
          this.others = true;
        }
      }
    },
    mounted() {
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
    }
  }

</script>
<style scoped>
  .baseInf {
    padding-left:10px;
  }
.paddingleft{
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
.result_QT{
  padding:10px;
height:130px;
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
