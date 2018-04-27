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
                <el-input type='textarea' v-if="regularInfo.isInmatch==0" v-model="regularInfo.isInmatchRemark" :rows="2" resize="none"
                  :maxlength='arealength' placeholder="请输入内容">
                </el-input>
              </td>
            </tr>
          </table>
        </div>
      </el-collapse-item>
    </el-collapse>
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
        arealength: 300, //area长度
        insConclusion: '',
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
        // tabIndex: 0,
        // payment: true,
        // custom: true,
        // others: false,
        // addTr: true,
        // currentRow: null,
        activeNames: ['0', '1', "2", "3", "4", "5", "6", "7", "8"], //折叠面板 默认显示下标
        // tab: ["客户本人", "单位电话", "家庭联系人", "工作证明人", "其他联系人"],
        InforSearch: [{
          title: '客户在人法网是否有被执行信息',
          conclution: null,
          comment: ''
        }, {
          title: '客户在失信网是否有失信记录',
          conclution: null,
          comment: ''
        }, {
          title: '网上搜索借款人的手机是否有异常',
          conclution: null,
          comment: ''
        }, {
          title: '网上搜索借款人现居住地址和房产地址是否异常',
          conclution: null,
          comment: ''
        }, {
          title: '当地工商网查询企业基本信息中是否有登记',
          conclution: null,
          comment: ''
        }, {
          title: '客户工作单位在全国组织代码查询中是否存在',
          conclution: null,
          comment: ''
        }, {
          title: '工商登记信息说明',
          conclution: null,
          comment: ''
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
        // qulityConclution: [{
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

      //     for (var i = 0; i < this.qulityConclution.length; i++) {
      //       this.qulityConclution[i].result != '' ? this.addTr = true : this.addTr = false;
      //       console.log(this.addTr)
      //     }
      //     console.log(this.qulityConclution)
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
      //     this.qulityConclution = this.qulityConclution.concat(obj)
      //     console.log(this.qulityConclution)
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
      //   tabClick(ev, ind, val) {
      //     //  this.title = val;
      //     //         this.tabContent1 = ind;
      //     this.tabIndex = ind;
      //     if (ind == 0) {
      //       this.payment = true;
      //       this.custom = true;
      //       this.others = false;
      //     } else if (ind == 1) {
      //       this.payment = false;
      //       this.custom = false;
      //       this.others = true;
      //     } else if (ind == 2) {
      //       this.payment = true;
      //       this.custom = false;
      //       this.others = true;
      //       this.othersCheck = this.a
      //     } else if (ind == 3) {
      //       this.payment = true;
      //       this.custom = false;
      //       this.others = true;
      //       this.othersCheck = this.b

      //     } else if (ind == 4) {
      //       this.payment = true;
      //       this.custom = false;
      //       this.others = true;
      //     }
      //   }
    },
    mounted() {
      // this.referPort();
      // console.log(this.regularInfo)
      // this.InitialInfo();
    }
  }

</script>
<style scoped>
  .baseInf {
    background: red;
  }

  .baseInf p {
    width: 50%;
    /* border:1px solid; */
    float: left;
    margin-top: 10px;
  }

  table {
    border: 1px solid #ebeef5;
    /* vertical-align: middle; */
  }

  tr {
    height: 70px;
  }

  tr:nth-of-type(1) {
    height: 30px;
  }

  td {
    text-align: center;
  }

  td:nth-of-type(4) {
    vertical-align: bottom;
  }

  .material {
    padding: 10px;
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

  .btn {
    width: 100px;
    text-align: center;
    display: inline-block;
    border: 1px solid;
    background: #0077ff;
    color: white;
    border-radius: 4px;
  }

  .btn:hover {
    cursor: pointer;
  }

</style>
