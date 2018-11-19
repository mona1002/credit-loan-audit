<!-- 复议结论 -->
<template>
  <div class="ReconsiderationConclusion">
    <el-collapse v-model="titleNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">概要信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">客户名称：</label>
                <span>{{datas.custName}}</span>
              </li>
              <li>
                <label class="label_width_166">申请类型：</label>
                <span>{{datas.appTypeTxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">证件类型：</label>
                <span>{{datas.certTypeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号码：</label>
                <span>{{datas.certCode}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">产品名称：</label>
                <span>{{datas.proName}}</span>
              </li>
              <li>
                <label class="label_width_166">最高月还款额：</label>
                <span>{{datas.eachTermAmt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">申请金额：</label>
                <span>{{datas.loanAmt}}</span>
              </li>
              <li>
                <label class="label_width_166">申请期限：</label>
                <span>{{datas.loanTerm}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">借款用途：</label>
                <span>{{datas.loanPurposeTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">借款用途说明：</label>
                <span>{{datas.loanPurposeNote}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">客户来源渠道：</label>
                <span>{{datas.sourcesChanTxt}}</span>
              </li>
              <li>
                <label class="label_width_166">客户来源渠道说明：</label>
                <span>{{datas.sourcesChanRemark}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_166">进件机构：</label>
                <span>{{datas.appOrgName}}</span>
              </li>
              <li>
                <label class="label_width_166">直销人员：</label>
                <span>{{datas.salPerName}}</span>
              </li>
            </div>
          </ul>
        </div>
        <div class="approve_btn_area approve_btn_area_width_900 margin_top_100">
          <span class="approve_item" @click="coverFn('back')">
            <i class="approve_icon backIcon"></i>
            <span class="approve_text">回退</span>
          </span>
          <span class="approve_item" @click="coverFn('refuse')">
            <i class="approve_icon rejectIcon"></i>
            <span class="approve_text">拒绝</span>
          </span>
          <span class="approve_item" @click="shenpi">
            <i class="approve_icon appro"></i>
            <span class="approve_text">审批</span>
          </span>
          <span class="approve_item" @click="AntiFraudApplication">
            <i class="approve_icon faqi"></i>
            <span class="approve_text">反欺诈申请</span>
          </span>
          <span class="approve_item" @click="getSpjlList">
            <i class="approve_icon editIcon"></i>
            <span class="approve_text">审批流程轨迹</span>
          </span>
          <span class="approve_item" @click="getLcgjList">
            <i class="approve_icon liuchengIcon"></i>
            <span class="approve_text">流程轨迹</span>
          </span>
          <span class="approve_item" @click="tobigData">
            <i class="approve_icon brokenLineIcon"></i>
            <span class="approve_text">大数据风控</span>
          </span>
          <!-- <span class="approve_item" @click="roSocialSecurity">
            <i class="approve_icon dataMaptIcon"></i>
            <span class="approve_text">社保公积金{{social}}</span>
          </span> -->
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 回退弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="回退信息" :visible.sync="dialogVisible" :modal="false ">
        <el-form :model="FormReturn" :rules="rules" ref="FormReturn">
          <el-form-item label="回退节点：" :label-width="formLabelWidth" prop="rollbackNodeName">
            <el-select v-model="FormReturn.rollbackNodeName" placeholder="请选择" @change="backNode">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="bfc">
            <el-form-item class="fl" label="主原因：" :label-width="formLabelWidth" prop="mainReasonName">
              <el-select ref="mainReasonName" v-model="FormReturn.mainReasonName" placeholder="请选择" @change="mainReason($event,'mainback')">
                <el-option v-for="item in mainResions" :key="item.id" :label="item.reasonName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="子原因：" :label-width="formLabelWidth">
              <el-select ref="subReasonName" v-model="FormReturn.subReasonName" placeholder="请选择">
                <el-option v-for="item in childReasons" :key="item.id" :label="item.reasonName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="dialog_textarea ">
            <el-form-item label="原因说明：" :label-width="formLabelWidth" prop="reasonRemark">
              <el-input type="textarea" :row="2" resize="none" v-model="FormReturn.reasonRemark"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth">
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr" label="经办时间：" :label-width="formLabelWidth">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" :loading='huituiLoading' @click="hsure('FormReturn')"> {{huituiFont}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 拒绝弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="拒绝原因" :visible.sync="jdialogVisible" :modal="false ">
        <el-form :model="FormReject" :rules="rules" ref="FormReject">
          <div class="bfc">
            <el-form-item class="fl" label="主原因：" :label-width="formLabelWidth" prop="rmainReasonName">
              <el-select ref="rmainReasonName" v-model="FormReject.rmainReasonName" placeholder="请选择" @change="mainReason($event,'mainrefuse')">
                <el-option v-for="item in rmainResions" :key="item.id" :label="item.reasonName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="子原因：" :label-width="formLabelWidth">
              <el-select ref="rsubReasonName" v-model="FormReject.rsubReasonName" placeholder="请选择">
                <el-option v-for="item in rchildReasons" :key="item.id" :label="item.reasonName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="dialog_textarea_3rows ">
            <el-form-item label="原因说明：" :label-width="formLabelWidth" prop="rreasonRemark">
              <el-input type="textarea" :rows="3" resize='none' placeholder="请输入内容" v-model="FormReject.rreasonRemark">
              </el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth">
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr" label="经办时间：" :label-width="formLabelWidth">
              {{jdealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="jdialogVisible = false">取 消</el-button>
          <el-button type="primary" :loading='jujueLoading' @click="jSure('FormReject')"> {{jujueFont}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 审批 -->
    <el-dialog title="审批信息" :visible.sync="sdialogVisible " :modal="false " width="710px" height='1100px'>
      <el-form>
        <el-collapse v-model="activeNames">
          <!--   申请信息-->
          <el-collapse-item title="申请信息" name="1" class="alert_collapse">
            <div class="dialog_form_auto">
              <el-form>
                <div class="bfc">
                  <el-form-item class="presentation" label="申请金额[元]：" :label-width="formApproLabLeft">
                    {{datas.loanAmt}}
                  </el-form-item>
                  <el-form-item class="presentation" label="申请期限[月]：" :label-width="formApproLabelWidth">
                    {{datas.loanTerm}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="申请产品：" :label-width="formApproLabLeft">
                    {{datas.proName}}
                  </el-form-item>
                  <el-form-item class="presentation" label="可接受最高每期还款额[元]：" :label-width="formApproLabelWidth">
                    {{datas.eachTermAmt}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="信用评分：" :label-width="formApproLabLeft">
                    {{creditScore}}
                  </el-form-item>
                  <el-form-item class="presentation" label="申请类型：" :label-width="formApproLabelWidth">
                    {{datas.appTypeTxt}}
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-collapse-item>
          <!-- 信审核实信息 -->
          <el-collapse-item title="信审核实信息" name='2' class="alert_collapse">
            <div class="dialog_form_auto">
              <el-form>
                <el-form-item class="presentation_one_row" label="核实可接受最高每期还款额[元]：" label-width="220px">
                  {{fbalance2}}
                </el-form-item>
              </el-form>
            </div>
          </el-collapse-item>
          <!-- 审批信息 -->
          <el-collapse-item title="审批信息" name='3' class="alert_collapse">
            <div class="dialog_form_auto">
              <el-form>
                <el-form-item label="结论：" :label-width="formApproLab">
                  <el-radio v-model="applyConclusion" label="00">同意</el-radio>
                </el-form-item>
                <div class="bfc">
                  <el-form-item class="fl alert_collapse_inputLabel" label="月核实收入[元]：" :label-width="formApproLab">
                    <el-input v-model="verIncome" @blur="moneyBlur(verIncome,'verIncome')"> </el-input>
                  </el-form-item>
                  <el-form-item class="fr alert_collapse_inputLabel" label="批准产品：" :label-width="formApproLab">
                    <el-select v-model="proName" disabled>
                      <el-option v-for="item in products" :key="item.id" :label="item.proName" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="fl alert_collapse_inputLabel" label="批准期限[月]：" :label-width="formApproLab">
                    <el-select v-model="ploanTerm" @change="ploanTermChange">
                      <el-option v-for="item in ploanTerms" :key="item.appDuration" :label="item.appDuration" :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="fr alert_collapse_inputLabel" label="批准金额[元]：" :label-width="formApproLab">
                    <el-input v-model="ploanAmt" @blur="moneyBlur(ploanAmt,'ploanAmt')"> </el-input>
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="fr alert_collapse_inputLabel" label="授信金额[元]：" :label-width="formApproLab">
                    <el-input v-model="creditExtensionLoanAmt" @blur="moneyBlur(creditExtensionLoanAmt, 'creditExtensionLoanAmt') "></el-input>
                  </el-form-item>
                  <el-form-item class="fl alert_collapse_inputLabel" label="授信期限[月]：" :label-width="formApproLab">
                    <el-select v-model="creditExtensionLoanTerm ">
                      <el-option v-for="item in creditExtensionLoanTermTerms " :label="item.code " :value="item.code"
                        :key="item.code ">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="授信开始日期：" :label-width="formApproLab">
                    {{creditExtensionBeginDate}}
                  </el-form-item>
                  <el-form-item class="presentation" label="授信截止日期：" :label-width="formApproLab">
                    {{creditExtensionEndDate}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="审批倍数：" :label-width="formApproLab">
                    {{caculData.appmult}}
                  </el-form-item>
                  <el-form-item class="presentation" label="月还款额[元]：" :label-width="formApproLab">
                    {{caculData.eachTermamt}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="内部负债率：" :label-width="formApproLab">
                    {{caculData.inteDebitrate}}
                  </el-form-item>
                  <el-form-item class="presentation" label="总负债率：" :label-width="formApproLab">
                    {{caculData.totalRate}}
                  </el-form-item>
                </div>
                <div class="bfc dialog_textarea_3rows alert_collapse_inputLabel mr">
                  <el-form-item label="意见说明：" :label-width="formApproLab" style="margin-bottom:10px">
                    <el-input type="textarea" :rows="3" resize="none" v-model="appConclusion">
                    </el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="sdialogVisible=false">取 消</el-button>
        <el-button type="primary" :loading='shenpiLoading' @click="spsure"> {{shenpiFont}}</el-button>
      </div>
    </el-dialog>
    <!-- 审批流程轨迹 -->
    <el-dialog title='复议审批轨迹' :visible.sync="sldialogVisible" :modal="false" width="1000px">
      <el-table :data="tableData.recordList" style="width: 100%" height="250" border highlight-current-row center>
        <el-table-column type="index" label="序号" width="55">
        </el-table-column>
        <el-table-column prop="verIncome" label="核实收入[元]" width="90">
        </el-table-column>
        <el-table-column prop="proName" label="批准产品" width="100">
        </el-table-column>
        <el-table-column prop="ploanAmt" label="批准金额[元]" width="100">
        </el-table-column>
        <el-table-column prop="ploanTerm" label="批准期限[月]" width="100">
        </el-table-column>
        <el-table-column prop="appmult" label="审批倍数" width="70">
        </el-table-column>
        <el-table-column prop="eachTermamt" label="每期还款额[元]" width="100">
        </el-table-column>
        <el-table-column prop="inteDebitrate" label="内部负债率" width="85">
        </el-table-column>
        <el-table-column prop="creditDebitRate" label="总信用负债率" width="100">
        </el-table-column>
        <el-table-column prop="totalRate" label="总负债率" width="80">
        </el-table-column>
        <el-table-column prop="appConclusion" label="审批结论" min-width="200">
        </el-table-column>
        <el-table-column prop="auditDate" label="审批时间" width="160">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="[10, 20,50]" :page-size='setPageSize' layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord">
        </el-pagination>
      </div>
    </el-dialog>
    <!-- 流程轨迹 -->
    <el-dialog title='流程轨迹' :visible.sync="lcdialogVisible" :modal="false" width="1000px">
      <el-table :data="lcgjData" style="width: 100%" height="250" border highlight-current-row center>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="taskNameTxt" label="任务节点" width="120">
        </el-table-column>
        <el-table-column prop="taskTypeTxt" label="任务类型" width="120">
        </el-table-column>
        <el-table-column prop="activationTime" label="进入本环节时间" width="180">
        </el-table-column>
        <el-table-column prop="taskStatusTxt" label="任务状态" width="100">
        </el-table-column>
        <el-table-column prop="operatorCode" label="处理人" width="120">
        </el-table-column>
        <el-table-column prop="completeTime" label="处理时间" width="180">
        </el-table-column>
        <el-table-column prop="approvalOpinionTxt" label="处理结论" width="120">
        </el-table-column>
        <el-table-column prop="opinionExplain" label="意见说明" min-width="325" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="lcdialogVisible = false">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        formLabelWidth: '85px',
        formApproLabLeft: "100px",
        formApproLab: "122px",
        formApproLabelWidth: "200px",
        fbalance: '',
        fbalance2: '',
        creditExtensionLoanAmt: '',
        creditExtensionLoanTerm: '',
        creditExtensionLoanTermTerms: [],
        FormReturn: {
          rollbackNodeName: '',
          mainReasonName: '',
          subReasonName: '',
          reasonRemark: '',
        },
        FormReject: {
          rmainReasonName: '',
          rreasonRemark: '',
        },
        rules: {
          rollbackNodeName: [{
            required: true,
            message: '请选择回退节点',
            trigger: 'change'
          }],
          mainReasonName: [{
            required: true,
            message: '请选择主原因',
            trigger: 'change'
          }],
          subReasonName: [{
            required: true,
            message: '请选择子原因',
            trigger: 'change'
          }],
          reasonRemark: [{
            required: true,
            message: '请输入原因说明',
            trigger: 'blur'
          }],
          rmainReasonName: [{
            required: true,
            message: '请输入主原因',
            trigger: 'change'
          }],
          rreasonRemark: [{
            required: true,
            message: '请输入原因说明',
            trigger: 'blur'
          }]
        },
        creditDebitRate: null, //信用负债率
        //申请单ID
        id: '',
        //初始化的页面数据
        datas: '',
        dialogVisible: false,
        jdialogVisible: false,
        sdialogVisible: false,
        sldialogVisible: false,
        lcdialogVisible: false,
        //回退节点
        values: '',
        //主原因
        mainReasonName: '',
        mainResions: [],
        //子原因
        subReasonName: '',
        childReasons: [],
        //拒绝主原因
        rmainReasonName: '',
        rmainResions: [],
        //拒绝子原因
        rsubReasonName: '',
        rchildReasons: [],
        options: [],
        options1: [{ //复议专员用
          value: 'reconsiderApp_apply',
          label: '复议申请'
        }],
        options2: [{ //复议经理用
          value: 'reconsiderApp_commissioner',
          label: '复议专员审批'
        }],
        //经办时间
        dealroperDate: '',
        jdealroperDate: '',
        //原因说明
        reasonRemark: '',
        rreasonRemark: '',
        //经办人
        dealroperCode: '',
        activeNames: ['1', '2', '3'],
        titleNames: ['1'],
        applyConclusion: '00',
        caculData: {}, // 审批结论数据
        applyId: '',
        sproId: '', // 审批 proId
        appOrgId: '', //进件ID
        //审批
        creditScore: '', // 单独处理的评分
        loanAmt: null, //审批金额（输入批准金额是校验）
        verIncome: '', // 核实收入
        ploanAmt: '', // 批准金额
        ploanTerm: '', // 批准期限
        products: [],
        proName: '', //批准产品
        appConclusion: '', //意见说明
        proId: '', // 产品id(通过 批准产品 获取 批准期限[月])
        ploanTerms: [], //批准期限[月]
        maxAmounnt: 0, // 产品最大金额
        minAmount: 0, // 产品最小金额
        synthesisRateM: '', // 审批 - 计算审批结论数据 - 综合费率
        loanRateYr: '', // 审批 - 计算审批结论数据 - 借款利率
        repayWay: '', // 审批  计算审批结论数据  还款方式
        //审批流程轨迹
        tableData: {},
        currentPage: 1, // 默认显示的当前页
        setPageSize: 10,
        //流程轨迹
        activeNames2: ['1'],
        lcgjData: [],
        processTemplateId: '',
        taskId: '', //任务id
        custNo: '', // 客户code 空
        emerType: '', // 紧急程度 空
        appOrgCode: '', // 门店代码 空
        proCode: '',
        applyCustId: '',
        processInstanceId: '', //流程实例id
        social: '', //社保公积金 已绑定 未绑定
        orgId: '',
        huituiFont: '提交',
        huituiLoading: false,
        jujueLoading: false,
        jujueFont: '提交',
        shenpiLoading: false,
        shenpiFont: '提交',
        RtaskInWaitting: '',
        debtRate: Number, //产品负债率
      }
    },
    props: {
      type: {
        default: '',
        required: true,
        type: String
      }
    },
    mounted() {
      this.RtaskInWaitting = JSON.parse(localStorage.getItem('RtaskInWaitting'));
      this.userInf = JSON.parse(localStorage.getItem('userInf'));
      //申请单ID
      this.id = this.RtaskInWaitting.applyId;
      this.request();
      this.applyId = this.RtaskInWaitting.applyId;
      this.appOrgId = this.RtaskInWaitting.appOrgId;
      // 客户编号
      this.custNo = this.RtaskInWaitting.custNo;
      //产品id
      this.sproId = this.RtaskInWaitting.proId;
      this.proCode = this.RtaskInWaitting.proCode;
      this.appOrgCode = this.RtaskInWaitting.appOrgCode;
      this.applyCustId = this.RtaskInWaitting.applyCustId;
      this.certType = this.RtaskInWaitting.certType;
      //经办人
      this.dealroperCode = this.userInf.userCode;
      //登陆人id
      this.orgId = this.userInf.orgId;
      //流程模版ID
      if (this.type == 'commissioner') { //复议专员
        this.options = this.options1;
        this.processTemplateId = JSON.parse(localStorage.getItem('ReWorkbenchPass')).processTemplateId; //专员
      } else { //复议经理
        this.options = this.options2;
        this.processTemplateId = JSON.parse(localStorage.getItem('ReManagerWorkbenchPass')).processTemplateId; //主管
      }
      //流程实例id
      this.processInstanceId = JSON.parse(localStorage.getItem('RtaskInWaitting')).processInstanceId;
      //任务id
      this.taskId = JSON.parse(localStorage.getItem('RtaskInWaitting')).taskId;
    },
    methods: {
      request() {
        this.post("/creAccepLoanDetailInfo/getAccepLoanDetailMsg", {
          'id': this.id
        }).then(res => {
          if (res.statusCode == '200') {
            this.datas = res.data;
            this.loanAmt = res.data.loanAmt;
            this.datas.eachTermAmt = this._formatNumber(this.datas.eachTermAmt);
            this.datas.loanAmt = this._formatNumber(this.datas.loanAmt);

          }
        })
      },
      //回退:back、拒绝:refuse
      coverFn(flag) {
        switch (flag) {
          case 'back':
            this.huituiLoading = false;
            this.huituiFont = '提交';
            this.dialogVisible = true;
            this.get('system/getSystemDate?' + Math.random()).then(res => {
              // 请求系统时间
              this.dealroperDate = res.data;
            })
            break;
          case 'refuse':
            this.jujueLoading = false;
            this.jujueFont = '提交';
            this.jdialogVisible = true;
            this.get('system/getSystemDate?' + Math.random()).then(res => {
              // 请求系统时间
              this.jdealroperDate = res.data;
            });
            this.get('/credit/firstNodeReason?reasonType=03' + '&' + Math.random()).then(res => {
              if (res.statusCode == '200') {
                this.rmainResions = res.data;
              }
            });
            break;
        }
      },
      //审批
      shenpi() {
        this.shenpiLoading = false;
        this.shenpiFont = '提交';
        this.sdialogVisible = true;
        //请求评分
        this.post('/credit/quotaScoring', {
          applyId: this.applyId,
          proId: this.sproId,
          appOrgId: this.appOrgId
        }).then(res => {
          if (res.statusCode == '200') {
            this.quotaData = res.data;
            // 单独处理 评分   =>  "评分:51.6"
            this.creditScore = res.data.creditScore.split(',')[0].substr(3, 4);
            this.fbalance = res.data.fbalance;
            if (res.data.creditScore.split(',')[1]) {
              this.fbalance2 = Number(res.data.fbalance).toLocaleString() + res.data.creditScore.split(
                ',')[1];
            } else {
              this.fbalance2 = Number(res.data.fbalance).toLocaleString() + '.00'
            }
          } else if (res.statusCode == '700') {
            this._error(res.msg);
          }
        });
        this.creditPeriod(); //授信期限
        //请求复议专员带过来的审批信息
        this.post('/creauditOpinion/queryCreauditOpinionObj', {
          applyId: this.applyId
        }).then(res => {
          if (res.statusCode == 200) {
            this.ploanTerm = res.data.ploanTerm; //批准期限[月]
            this.proName = res.data.proName; //批准产品
            this.proId = res.data.proId; //批准产品Id
            this.maxAmounnt = res.data.maxAmounnt;
            this.minAmount = res.data.minAmount;
            this.debtRate = res.data.debtRate; //产品负债率
            // 核实收入
            res.data.verIncome || res.data.verIncome == 0 ? this.verIncome = this._formatNumber(res.data.verIncome) :
              this.verIncozme = res.data.verIncome;
            // 批准金额
            res.data.ploanAmt || res.data.ploanAmt == 0 ? his.creditExtensionLoanAmt = this.ploanAmt = this._formatNumber(
                res.data.ploanAmt) :
              his.creditExtensionLoanAmt = this.ploanAmt = res.data.ploanAmt;
            //审批结论数据
            //审批倍数
            res.data.appmult || res.data.appmult == 0 ? this.caculData.appmult = this._formatNumber(res.data.appmult) :
              '';
            //内部负债率
            res.data.inteDebitrate || res.data.inteDebitrate == 0 ? this.caculData.inteDebitrate = (res.data.inteDebitrate *
              100).toFixed(2) + "%" : '';
            //总负债率
            res.data.totalRate || res.data.totalRate == 0 ? this.caculData.totalRate = (res.data.totalRate * 100).toFixed(
              2) + "%" : '';
            //月还款额
            res.data.eachTermamt || res.data.eachTermamt == 0 ? this.caculData.eachTermamt = this._formatNumber(res
              .data
              .eachTermamt) : '';
            //意见说明
            this.appConclusion = res.data.appConclusion;
            this.ploanTerms = res.data.returnList; //批准期限月下拉
            this.creditExtensionBeginDate = res.data.creditExtensionBeginDate. //授信开始日期
            this.creditExtensionEndDate = res.data.creditExtensionEndDate; //授信截止日期
            //  if (this.ploanTerm) { 
            for (let item of this.ploanTerms) {
              if (item.appDuration == this.ploanTerm) {
                ({
                  loanRateYr: this.loanRateYr,
                  repayWay: this.repayWay,
                  synthesisRateM: this.synthesisRateM
                } = item);
              }
            }
          } else {
            this.ploanTerm = ''; //批准期限[月]
            this.proName = ''; //批准产品
            this.proId = ''; //批准产品Id
            this.debtRate = ''; //产品负债率
            this.maxAmounnt = '';
            this.minAmount = '';
            this.loanRateYr = '';
            this.repayWay = '';
            this.synthesisRateM = '';
            this.verIncome = '';
            this.ploanAmt = '';
            this.caculData = {};
          };
        });
      },
      //审批提交按钮
      spsure() {
        // 月核实收入
        if (!this.verIncome) {
          this._error('请填写月核实收入!')
          return;
        }
        // 批准期限
        if (!this.ploanTerm) {
          this._error('请选择批准期限!')
          return;
        }
        // 批准金额 ploanAmt
        if (!this.ploanAmt) {
          this._error('请填写批准金额!')
          return;
        }
        if (!this.creditExtensionLoanAmt) {
          this._error('请填写授信金额!')
          return;
        }
        if (!this.creditExtensionLoanTerm) {
          this._error('请填写授信期限!')
          return;
        }
        // 意见说明 appConclusion
        if (!this.appConclusion) {
          this._error("请填写意见说明")
          return;
        };
        //按钮加“加载中”
        this.shenpiLoading = true;
        this.shenpiFont = '提交中';
        var reg = /,/g;
        this.post('/creauditOpinion/add', {
          creditExtensionLoanTerm: this.creditExtensionLoanTerm.replace(reg, '') * 1, //授信期限
          creditExtensionLoanAmt: this.creditExtensionLoanAmt.replace(reg, '') * 1, //授信金额
          applyId: this.applyId,
          auditType: '02',
          proCode: this.proCode, //产品编号
          verIncome: this.verIncome.replace(reg, '') * 1, //核实收入[元]
          ploanAmt: this.ploanAmt.replace(reg, '') * 1, //批准金额[元]
          ploanTerm: this.ploanTerm, //批准期限
          appmult: this.caculData.appmult * 1, // 审批倍数
          eachTermamt: this.caculData.eachTermamt.replace(reg, '') * 1, //每期还款额[元]
          inteDebitrate: (this.caculData.inteDebitrate == 0 || this.caculData.inteDebitrate == '') ? 0 : this.caculData
            .inteDebitrate.replace("%", "") / 100, //内部负债率
          totalRate: (this.caculData.totalRate == 0 || this.caculData.totalRate == '') ? 0 : this.caculData.totalRate
            .replace("%", "") / 100, // 总负债率
          appConclusion: this.appConclusion, //审批结论内容（文本框）
          newOldMainnos: '', //借新还旧进件编号集合
          applyMainNo: '', //主进件编号
          applySubNo: this.datas.applySubNo, //从进件编号
          appOrgId: this.appOrgId, //进件机构ID
          appOrgCode: this.appOrgCode, //进件机构代码
          applyType: '', //申请类型[“00”:”非循环贷”,”01”:”循环贷(借新还旧)”,”02”:”循环贷(非借新还旧)”]
          custId: '', //客户ID
          custNo: this.custNo, //客户编号
          applyCustId: this.applyCustId, //申请客户ID（申请登记-个人信息）
          applyConclusion: this.applyConclusion, //申请结论（00-通过）
          ploanOperId: '', // 批准人员
          creditDebitRate: this.caculData.creditDebitRate, // 信用负债率
          approvalFlag: '0', // 终审通过标志  0 未
          ploanDate: '', // 批准日期
          auditDate: '', // 批准时间
          auditFlag: this.type == 'commissioner' ? '0' : '1', // 终审结束标识 0 初审 1终审 , 只有 终审 点审批的时候 才变为1 , 同 approvalFlag 字段
          proId: this.proId, //产品id
          taskId: this.taskId, // 任务id
          opinionFlag: '00', // 任务类型  初审 00 
          busiState: '21' //复议审批
        }).then(res => {
          this.sdialogVisible = false;
          if (res.statusCode != '200') {
            this.$message({
              message: res.msg,
              type: 'warning'
            })
            return;
          };
          if (res.statusCode == '200') {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            if (this.type == 'commissioner') {
              this.$router.push('/reconsiderList?taskNodeName=reconsiderApp_commissioner&flag=05');
            } else {
              this.$router.push('/reconsiderList?taskNodeName=reconsiderApp_manager&flag=06');
            }
            this.del();
          };
        })

      },
      // 月核实收入[元]
      moneyBlur: function (val, flag) {
        val || val == 0 ? val = val.toString().replace(/,/g, '') : '';
        switch (flag) {
          case 'verIncome':
            if (isNaN(Number(val)) || val <= 0 || val == '') {
              this.verIncome = '1.00';
            } else if (val > 0) {
              this.verIncome = this._formatNumber(this.verIncome);
            }
            this.calculateByAuditInfo();
            break;
          case 'creditExtensionLoanAmt':
            this.creditExtensionLoanAmt = this._formatNumber(this.creditExtensionLoanAmt);
            break;
          case 'ploanAmt':
            if (val * 1 > this.maxAmounnt) {
              this.$message({
                message: '批准金额不能大于产品最高上限' + this.maxAmounnt + '元',
                type: 'warning'
              });
              this.creditExtensionLoanAmt = this.ploanAmt = '';
              return
            };
            if (val * 1 < this.minAmount) {
              this.$message({
                message: '批准金额不能小于产品最低下限' + this.minAmount + '元',
                type: 'warning'
              });
              this.creditExtensionLoanAmt = this.ploanAmt = '';
              return
            };
            this.creditExtensionLoanAmt = this.ploanAmt = this._formatNumber(this.ploanAmt);
            this.calculateByAuditInfo();
            break;
        }
      },
      // 批准期限更改
      ploanTermChange: function (val) {
        // 批准期限
        this.ploanTerm = val.appDuration;
        // 综合费率
        this.synthesisRateM = val.synthesisRateM;
        // 借款利率
        this.loanRateYr = val.loanRateYr;
        // 还款方式  
        this.repayWay = val.repayWay;
        this.calculateByAuditInfo();
      },
      // 计算审批结论数据
      calculateByAuditInfo() {
        var reg = /,/g;
        this.post('/creauditOpinion/calculateByAuditInfo', {
          applyId: this.applyId, //申请单ID
          proId: this.proId, //产品ID
          ploanTerm: this.ploanTerm, //批准期限
          ploanAmt: this.ploanAmt || this.ploanAmt == 0 ? this.ploanAmt.replace(reg, '') * 1 : '', //批准金额[元]
          verIncome: this.verIncome || this.verIncome == 0 ? this.verIncome.replace(reg, '') * 1 : '', //核实收入[元]
          eachTermamt: this.datas.eachTermAmt.replace(reg, '') * 1, //每期还款额[元]
          repayWay: this.repayWay, // 还款方式
          synthesisRateM: this.synthesisRateM, // 综合费率 
          loanRateYr: this.loanRateYr, // 借款利率
        }).then(res => {
          // 审批结论数据
          if (res.statusCode == '200') {
            this.caculData = res.data;
            if (res.data.totalRate * 100 > this.debtRate || res.data.inteDebitrate * 100 > this.debtRate) { //产品负债率:debtRate  内部负债率:inteDebitrate  总负债率：totalRate
              this.ploanAmt = '' //批准金额
              this._error('内部负债率/总负债率超过该产品对应的最大负债率！')
              return
            }
            this.caculData.appmult = this._formatNumber(this.caculData.appmult); //审批倍数
            this.caculData.eachTermamt = this._formatNumber(this.caculData.eachTermamt); //月还款额
            this.caculData.inteDebitrate = (this.caculData.inteDebitrate * 100).toFixed(2) + "%"; //内部负债率
            this.caculData.totalRate = (this.caculData.totalRate * 100).toFixed(2) + "%"; //总负债率
          } else {
            this.caculData = {};
          }
        })
      },
      //拒绝提交按钮
      jSure(formName) {
        this.jujueLoading = true;
        this.jujueFont = '提交中';
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.post("/creauditOpinion/approval", {
              // 挂起 taskId 任务id
              taskId: this.taskId,
              processInstanceId: this.processInstanceId, //流程实例ID
              custName: this.datas.custName, // 客户名称
              custNo: this.custNo, // 客户code
              certType: this.certType, // 证件类型
              certCode: this.datas.certCode, // 证件号码
              emerType: this.emerType, // 紧急程度
              appOrgCode: this.appOrgCode, // 门店代码
              proName: this.datas.proName, // 产品名称
              proCode: this.proCode, //  产品代码
              proId: this.sproId, // 产品id     //"d7fa0628-791d-4cc5-b854-aa8bef9340a6"
              opinionFlag: '01', // 标志任务类型(复议 拒绝)
              mainReasonName: this.$refs.rmainReasonName.selectedLabel, // 拒绝/回退主原因
              subReasonName: this.$refs.rsubReasonName.selectedLabel, // 拒绝/回退次原因
              reasonRemark: this.FormReject.rreasonRemark, // 意见描述/原因说明
              appOrgId: this.appOrgId, // 进件机构id
              applyId: this.applyId, // 申请单id
              rollbackNodeName: '', // 回退节点名称(没有回退节点) 
              dealroperDate: this.jdealroperDate, // 经办时间
              creauditAppOperate: '01', // 复议 拒绝creauditAppOperate: 'check_Refuse'
              busiState: '22', //复议审批中（回退）
              dealroperCode: this.dealroperCode, //经办人
              applySubNo: this.datas.applySubNo, //复议申请单ID
              userInf: {},
            }).then(res => {
              this.jdialogVisible = false;
              if (res.statusCode != '200') {
                this.$message({
                  message: res.msg,
                  type: 'warning'
                })
                return;
              }
              if (res.statusCode == '200') {
                // this.taskId = '';
                this.datas.custName = ''; // 客户名称
                this.custNo = ''; // 客户code
                this.datas.certTypeTxt = ''; // 证件类型
                this.datas.certCode = ''; // 证件号码
                this.emerType = ''; // 紧急程度
                this.appOrgCode, // 门店代码
                  this.datas.proName, // 产品名称
                  this.proId = ''; // 产品id
                this.opinionFlag = ''; // 标志任务类型
                this.mainReason = ''; // 回退主原因
                this.secondaryReason = ''; // 回退子原因
                this.FormReject.rreasonRemark = ''; // 意见描述/原因说明
                this.appOrgId = ''; // 进件机构id
                this.rollbackNodeName = ''; // 回退节点名称
                this.dealroperDate = ''; // 经办时间
                this.dealroperCode = ''; //经办人
                this.creauditAppOperate = ''; // 操作类型
                this.$message({
                  message: res.msg,
                  type: 'success'
                })
                this.$router.push('/reconsiderList');
                this.del();
              }
            });
          } else {
            return false;
          }
        });
      },
      //回退提交按钮
      hsure(formName) {
        this.huituiLoading = true;
        this.huituiFont = '提交中';
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.post("/creauditOpinion/approval", {
              // 挂起 taskId 任务id
              taskId: this.taskId,
              processInstanceId: this.processInstanceId, //流程实例ID
              custName: this.datas.custName, // 客户名称
              custNo: this.custNo, // 客户code
              certType: this.certType, // 证件类型
              certCode: this.datas.certCode, // 证件号码
              emerType: this.emerType, // 紧急程度
              appOrgCode: this.appOrgCode, // 门店代码
              proName: this.datas.proName, // 产品名称
              proCode: this.proCode, //  产品代码
              proId: this.sproId, // 产品id     //"d7fa0628-791d-4cc5-b854-aa8bef9340a6"
              opinionFlag: '02', // 标志任务类型(复议经理 回退)
              mainReasonName: this.$refs.mainReasonName.selectedLabel, // 回退主原因
              subReasonName: this.$refs.subReasonName.selectedLabel, // 回退子原因
              reasonRemark: this.reasonRemark, // 意见描述/原因说明
              appOrgId: this.appOrgId, // 进件机构id
              applyId: this.applyId, // 申请单id
              rollbackNodeName: this.type == 'commissioner' ? 'reconsiderApp_apply' : 'reconsiderApp_commissioner', // 回退节点名称
              dealroperDate: this.dealroperDate, // 经办时间
              creauditAppOperate: '02', //check_Back
              busiState: '20', //复议审批中（回退） // 复议经理 回退
              applySubNo: this.datas.applySubNo, //复议申请单ID    
              dealroperCode: this.dealroperCode, //经办人
            }).then(res => {
              this.dialogVisible = false;
              if (res.statusCode != '200') {
                this.$message({
                  message: res.msg,
                  type: 'warning'
                })
              } else {
                // this.taskId = '';
                this.datas.custName = ''; // 客户名称
                this.custNo = ''; // 客户code
                this.datas.certTypeTxt = ''; // 证件类型
                this.datas.certCode = ''; // 证件号码
                this.emerType = ''; // 紧急程度
                this.appOrgCode = ''; // 门店代码
                this.proCode = ''; //  产品代码
                this.proId = ''; // 产品id
                this.opinionFlag = ''; // 标志任务类型
                this.mainReason = ''; // 回退主原因
                this.secondaryReason = ''; // 回退子原因
                this.reasonRemark = ''; // 意见描述/原因说明
                //  this.FormReturn.reasonRemark = ''; // 意见描述/原因说明z
                this.appOrgId = ''; // 进件机构id
                this.rollbackNodeName = ''; // 回退节点名称
                this.dealroperDate = ''; // 经办时间
                this.dealroperCode = ''; //经办人
                this.creauditAppOperate = ''; // 操作类型
                this.$message({
                  message: res.msg,
                  type: 'success'
                })
                this.$router.push('/reconsiderList?taskNodeName=reconsiderApp_manager&flag=06');
                this.del();
              }
            });
          } else {
            return false;
          }
        });
      },
      //回退节点
      backNode() {
        this.get('/credit/firstNodeReason?reasonType=01' + '&' + Math.random()).then(res => {
          if (res.statusCode == '200') {
            this.mainResions = res.data;
          }
        })
      },
      // 获取授信期限
      creditPeriod() {
        this.get('/credit/creditPeriod').then(res => {
          console.log(res)
          if (res.statusCode == 200) {
            this.creditExtensionLoanTermTerms = res.data;
          } else {
            this._error(res.msg)
          }
        });
      },
      //主原因
      mainReason($event, flag) {
        //"mainback":回退
        //"mainrefuse":拒绝
        if (flag == 'mainback') {
          this.get('/credit/findNodeFirstChildren?id=' + $event + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.childReasons = res.data;
            }
          })
        } else if (flag == 'mainrefuse') {
          this.get('/credit/findNodeFirstChildren?id=' + $event + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.rchildReasons = res.data;
            }
          })
        }
      },
      //分页
      handleSizeChange(val) {
        /*this.queryParam.pageSize = val;
        this.queryParam.pageNum = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.request(this.queryParam);
        };*/
      },
      handleCurrentChange(val) {
        /*this.queryParam.pageNum = val;
        		  this.request(this.queryParam);*/
      },
      //反欺诈申请
      AntiFraudApplication() {
        this.$router.push({
          name: 'AntiApplyEditf'
        });
        this.params = {
          id: this.applyId,
          flag: 'fuyi',
          busiState: '20',
          channel: '04'
        }
        localStorage.setItem("AntiApplyParams", JSON.stringify(this.params));
      },
      // 审批结论轨迹
      getSpjlList() {
        this.sldialogVisible = true;
        this.post('/creauditOpinion/queryByPage', {
          applyId: this.applyId,
          pageNum: this.pageNum, // 页码
          pageSize: this.pageSize // 每页条数
        }).then(res => {
          if (res.statusCode == '200') {
            this.loading = false;
            this.tableData = res.data;
          } else {
            this.$message(res.msg);
          }
        })
      },
      // 流程轨迹
      getLcgjList() {
        this.lcdialogVisible = true;
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processInstanceId + '&' + Math.random())
          .then(res => {
            if (res.statusCode == '200') {
              this.lcgjData = res.data;
            } else {
              this.$message(res.msg);
            }
          })
      },
      //大数据风控
      tobigData() {
        this.$router.push({
          name: 'PneCtrl',
          params: {
            newOne: true,
          }
        });
      },
      del() {
        this.$store.dispatch('delVisitedViews', {
          name: '复议详情'
        }).then((views) => {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.StatefullPath);
          } else {
            this.$router.push('/')
          }
        })
      }
    },
  }

</script>
<style scoped>
  .ReconsiderationConclusion {
    width: 100%;
    min-width: 1327px;
    height: 100%;
    font-size: 14px;
  }

  .main {
    width: 100%;
    height: 290px;
  }

  .main ul.mainUl {
    width: 40%;
    float: left;
  }

  .main ul.secondUl {
    width: 60%;
    text-align: left;
  }

  .main ul.mainUl li {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 150px;
  }

  .main ul.mainUl li label {
    display: inline-block;
    width: 130px;
    text-align: right;
  }

  .main ul.mainUl li span {
    text-align: left;
    display: inline-block;
  }

  .buttons {
    width: 80%;
    text-align: center;
  }

  .buttons button {
    border: none;
  }

  .buttons button span {
    display: inline-block;
    height: 30px;
  }

  .buttons .labelTxt {
    font-size: 14px;
    color: #475669;
    position: relative;
    top: -10px;
  }

  .buttons img {
    width: 30px;
    height: 30px;
  }

  .bodyP {
    margin-bottom: 15px;
    height: 35px;
  }

  .bodyP label {
    display: inline-block;
    width: 100px;
    text-align: right;
  }

  .bodyP label span {
    color: #ff7676;
    font-size: 16px;
    position: relative;
    top: 4px;
    padding-right: 2px;
  }

  .bodyP li {
    float: left;
    width: 50%;
  }

  .huituiBody .bodyP2 {
    padding-right: calc(50% - 305px);
    height: 75px;
  }

  .shenpi .bodyP2 {
    padding-right: calc(50% - 305px);
    height: 75px;
  }

  .bodyP2 label {
    height: 75px;
    line-height: 75px;
    float: left;
    margin-right: 5px;
  }

  .bodyP2 div {
    width: calc(100% - 105px);
    display: inline-block;
  }

  .shenpiBody {
    width: 100%;
    border: 1px solid #e6eaee;
  }

  .shenpiBody .first {
    width: 100%;
  }

  .shenpiBody .first ul {
    width: 50%;
    float: left;
  }

  .shenpiBody .first ul li {
    width: 100%;
    height: 35px;
    line-height: 35px;
  }

  .shenpiBody .first ul li label {
    display: inline-block;
    width: 170px;
    text-align: right;
  }

  .shenpiBody .first ul li span {
    display: inline-block;
    text-align: left;
  }

  .sbodyP {
    height: 35px;
    line-height: 35px;
  }

  .sbodyP label:nth-of-type(1) {
    display: inline-block;
    width: 170px;
    text-align: right;
  }

  .sfirst {
    width: 100%;
    height: 185px;
  }

  .sfirst ul {
    width: 50%;
    float: left;
  }

  .sfirst li {
    height: 35px;
    line-height: 35px;
    margin-bottom: 15px;
  }

  .sfirst ul:nth-of-type(1) li:nth-of-type(3) {
    margin-bottom: 0px;
  }

  .sfirst ul:nth-of-type(2) li:nth-of-type(3) {
    margin-bottom: 0px;
  }

  .sfirst li label {
    display: inline-block;
    width: 170px;
    text-align: right;
  }

  .sfirst li label span {
    color: #ff7676;
    font-size: 16px;
    position: relative;
    top: 4px;
    padding-right: 2px;
  }

  .sfirst li div {
    display: inline-block;
    width: 200px;
    text-align: left;
  }

  /* 审批流程轨迹 分页 */

  .page {
    text-align: center;
    margin-top: 20px;
  }

</style>
