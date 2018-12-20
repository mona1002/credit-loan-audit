<!-- 信审 - 审批  -->
<template>
  <!-- common_component_width -->
  <div class=" creditApproval-class">
    <el-collapse v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">概要信息</span>
        </template>
        <!-- checkedInf_li_width_triplet -->
        <div class="checkedInf wid_670 checkedInf_li_width_half clearFix" style="margin:0 auto">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <div>
                  <label class="label_width_95">客户名称：</label>
                  <span>{{custName}}</span>
                </div>
              </li>
              <li>
                <div>
                  <label class="label_width_95">申请类型：</label>
                  <span>{{applyTypeTxt}}</span>
                </div>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <div>
                  <label class="label_width_95">进件编号：</label>
                  <span>{{applySubNo}}</span>
                </div>
              </li>
              <li>
                <div>
                  <label class="label_width_95">证件类型：</label>
                  <span>{{certTypeTxt}}</span>
                </div>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <div>
                  <label class="label_width_95">证件号码：</label>
                  <span>{{certCode}}</span>
                </div>
              </li>
              <li>
                <div>
                  <label class="label_width_95">产品名称：</label>
                  <span>{{baseProName}}</span>
                </div>
              </li>
            </div>
            <div class=" CreditForm_div_border  clearFix">
              <li>
                <div>
                  <label class="label_width_95">申请期限[月]：</label>
                  <span>{{loanTerm}}</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <!-- approve_btn_area_width_1050 min-width:300px;-->
        <div class="approve_btn_area CreditApproval_btn">
          <div>
            <span class="approve_item" @click="hangOoutBtn">
              <i class="approve_icon HangUpIcon"></i>
              <span class="approve_text">挂起</span>
            </span>
            <span class="approve_item" @click="coverFn('02')">
              <i class="approve_icon backIcon"></i>
              <span class="approve_text">回退</span>
            </span>
            <span class="approve_item" v-show="judgeFlag == '01' && jujueBtnShow" @click="coverFn('01')">
              <i class="approve_icon rejectIcon"></i>
              <span class="approve_text">拒绝</span>
            </span>
            <span class="approve_item" v-show="judgeFlag!='01'" @click="coverFn('01')">
              <i class="approve_icon rejectIcon"></i>
              <span class="approve_text">拒绝</span>
            </span>
            <span class="approve_item" @click="coverFn('07')">
              <i class="approve_icon giveUpIcon"></i>
              <span class="approve_text">放弃</span>
            </span>
            <span class="approve_item" @click="coverFn('03')">
              <i class="approve_icon appro"></i>
              <span class="approve_text">审批</span>
            </span>
          </div>
          <!-- margin_top_20 width_480-->
          <div class="margin_top_20">
            <span class="approve_item" @click="coverFn('fqz')">
              <i class="approve_icon faqi"></i>
              <span class="approve_text">发起反欺诈</span>
            </span>
            <span class="approve_item" @click="coverFn('spjl')">
              <i class="approve_icon lineChartIcon"></i>
              <span class="approve_text">审批结论轨迹</span>
            </span>
            <span class="approve_item" @click="coverFn('lcgj')">
              <i class="approve_icon liuchengIcon"></i>
              <span class="approve_text">流程轨迹</span>
            </span>
            <span class="approve_item" @click="tobigData">
              <i class="approve_icon brokenLineIcon"></i>
              <span class="approve_text">大数据风控</span>
            </span>
          </div>
          <!-- <span class="approve_item" @click="roSocialSecurity">
            <i class="approve_icon dataMaptIcon"></i>
            <span class="approve_text">社保公积金{{social}}</span>
          </span> -->
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 回退弹窗 -->
    <div class="Height_240 return_back">
      <el-dialog title="回退信息" :visible.sync="huiTuiShow" :modal="false " width='630px'>
        <el-form :label-width="LabelWidth">
          <el-form-item label="回退节点：">
            <el-select @change="backSelectChange" v-model="rollbackNodeName">
              <el-option v-for="item in options" :label="item.label" :key='item.value' :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="bfc">
            <!-- 回退主原因输入 02 -->
            <!-- 拒绝主原因选择 01 -->
            <el-form-item class="fl" label="主原因：">
              <el-select @change="selectChange" v-model="mainReason">
                <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="子原因：">
              <el-select v-model="secondaryReason" @change='getCheckBox'>
                <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="bfc" v-if="checkBox&&judgeFlag == '01'">
            <el-form-item class="fl" label="补充授权项：">
              <el-checkbox-group v-model="checkedCities" class="creditApr_backoff clear_hint">
                <el-checkbox v-for="val in lists" :label="val.value" :key="val.value">{{val.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="dialog_textarea bfc">
            <el-form-item class="mr" label="原因说明：">
              <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl clear_hint" label="经办人：">
              <!-- 取登录用户 -->
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr clear_hint" label="经办时间：">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="huiTuiShow=false">取 消</el-button>
          <el-button type="primary" :loading="isLoading" @click="submitFn( '02') "> {{loadingTitle}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 拒绝弹窗 -->
    <div class="Height_240 return_back">
      <el-dialog title="拒绝原因" :visible.sync="juJueShow" :modal="false">
        <el-form>
          <div class="bfc">
            <!-- 回退主原因输入 02 -->
            <!-- 拒绝主原因选择 01 -->
            <el-form-item class="fl" label="主原因：" :label-width="formLabelWidth">
              <el-select @change="selectChange " v-model="mainReason ">
                <el-option v-for="item in mainReasons " :key="item.id " :label="item.reasonName " :value="item ">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="子原因：" :label-width="formLabelWidth">
              <el-select v-model="secondaryReason ">
                <el-option v-for="item in secondeReasons " :key="item.id " :label="item.reasonName " :value="item.reasonName ">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="dialog_textarea">
            <el-form-item class="mr" label="原因说明：" :label-width="formLabelWidth">
              <el-input type="textarea" :row="2 " resize="none " v-model="reasonRemark "></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth">
              <!-- 取登录用户 -->
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr" label="经办时间：" :label-width="formLabelWidth">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="juJueShow=false">取 消</el-button>
          <el-button type="primary" @click="submitFn( '01') " :loading="isLoading "> {{loadingTitle}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 放弃弹窗 -->
    <div class="Height_240 return_back">
      <el-dialog title="放弃原因" :visible.sync="fangQiShow" :modal="false" width='600px'>
        <el-form>
          <div class="bfc">
            <!-- 回退主原因输入 02 -->
            <!-- 拒绝主原因选择 01 -->
            <el-form-item class="fl" label="主原因：" :label-width="formLabelWidth">
              <el-select @change="selectChange " v-model="mainReason ">
                <el-option v-for="item in mainReasons " :key="item.id " :label="item.reasonName " :value="item ">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="子原因：" :label-width="formLabelWidth">
              <el-select v-model="secondaryReason ">
                <el-option v-for="item in secondeReasons " :key="item.id " :label="item.reasonName " :value="item.reasonName ">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="dialog_textarea">
            <el-form-item class="mr" label="原因说明：" :label-width="formLabelWidth">
              <el-input type="textarea" :row="2 " resize="none " v-model="reasonRemark "></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth">
              <!-- 取登录用户 -->
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr" label="经办时间：" :label-width="formLabelWidth">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="fangQiShow=false">取 消</el-button>
          <el-button type="primary" @click="submitFn( '07') " :loading="isLoading"> {{loadingTitle}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 审批 -->
    <el-dialog title="审批信息" :visible.sync="shenPiShow " :modal="false " width="710px" height='1100px'>
      <el-form>
        <el-collapse v-model="activeNames">
          <!--   申请信息-->
          <el-collapse-item title="申请信息" name="1" class="alert_collapse">
            <div class="dialog_form_auto">
              <el-form>
                <div class="bfc">
                  <el-form-item class="presentation" label="申请金额[元]：" :label-width="formApproLabLeft">
                    {{loanAmt |formatMoney}}
                  </el-form-item>
                  <el-form-item class="presentation" label="申请期限[月]：" :label-width="formApproLabelWidth">
                    {{loanTerm}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="申请产品：" :label-width="formApproLabLeft">
                    {{productName}}
                  </el-form-item>
                  <el-form-item class="presentation" label="可接受最高每期还款额[元]：" :label-width="formApproLabelWidth">
                    {{maxEachTermAmt |formatMoney}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="申请类型：" :label-width="formApproLabLeft">
                    {{loanType}}
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-collapse-item>
          <!-- 信审核实信息 -->
          <el-collapse-item title="信审核实信息" name="2" class="alert_collapse">
            <div class="dialog_form_auto">
              <el-form>
                <el-form-item class="presentation_one_row" label="核实可接受最高每期还款额[元]：" label-width="220px">
                  {{fbalance |formatMoney}}
                </el-form-item>
              </el-form>
            </div>
          </el-collapse-item>
          <!-- 审批信息 -->
          <el-collapse-item title="审批信息" name="3" class="alert_collapse">
            <div class="dialog_form_auto">
              <el-form>
                <el-form-item label="结论：" :label-width="formApproLab">
                  <el-radio label="00" value='00' v-model="opinionFlag">同意</el-radio>
                  <el-radio label="03" value='03' v-model="opinionFlag" v-show="taskName!='creditApp_finalTrial_five'
          && judgeFlag=='02' ">请求更高级审批</el-radio>
                </el-form-item>
                <div class="bfc">
                  <el-form-item class="fl alert_collapse_inputLabel" label="月核实收入[元]：" :label-width="formApproLab">
                    <el-input v-model="verIncome " @blur="moneyBlur(verIncome, 'verIncome') "></el-input>
                  </el-form-item>
                  <el-form-item class="fr alert_collapse_inputLabel" label="批准产品：" :label-width="formApproLab">
                    <el-select disabled v-model="proName ">
                      <el-option v-for="item in products " :key="item.id " :label="item.proName " :value="item "></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="fl alert_collapse_inputLabel" label="批准期限[月]：" :label-width="formApproLab">
                    <el-select @change="ploanTermChange " v-model="ploanTerm ">
                      <el-option v-for="item in ploanTerms " :label="item.appDuration " :value="item " :key="item.appDuration ">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="fr alert_collapse_inputLabel" label="批准金额[元]：" :label-width="formApproLab">
                    <el-input v-model="ploanAmt " @blur="moneyBlur(ploanAmt, 'ploanAmt') "></el-input>
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="fr alert_collapse_inputLabel" label="授信金额[元]：" :label-width="formApproLab">
                    <el-input v-model="creditExtensionLoanAmt" @blur="moneyBlur(creditExtensionLoanAmt, 'creditExtensionLoanAmt') "></el-input>
                  </el-form-item>
                  <el-form-item class="fl alert_collapse_inputLabel" label="授信期限[月]：" :label-width="formApproLab">
                    <el-select v-model="creditExtensionLoanTerm " @change='changeDate'>
                      <el-option v-for="item in creditExtensionLoanTermTerms " :label="item.code " :value="item.code "
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
                    {{caculData.eachTermamt | formatMoney}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="内部负债率：" :label-width="formApproLab">
                    {{caculData.inteDebitrate | formatValue}}
                  </el-form-item>
                  <el-form-item class="presentation" label="总信用负债率：" :label-width="formApproLab">
                    {{caculData.creditDebitRate | formatValue}}
                  </el-form-item>
                </div>
                <div class="bfc">
                  <el-form-item class="presentation" label="总负债率：" :label-width="formApproLab">
                    {{caculData.totalRate | formatValue}}
                  </el-form-item>
                  <el-form-item class="presentation" label="签约金额：" :label-width="formApproLab">
                    {{caculData.signAmount | formatMoney}}
                  </el-form-item>
                </div>
                <div class="bfc dialog_textarea alert_collapse_inputLabel mr" style="margin-bottom:10px;height:80px;">
                  <el-form-item label="意见说明：" :label-width="formApproLab">
                    <el-input type="textarea" resize="none" :rows="3" v-model="appConclusion"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="shenPiShow=false">取 消</el-button>
        <el-button type="primary" @click="submitFn('03')" :loading="isLoading"> {{loadingTitle}}</el-button>
      </div>
    </el-dialog>
    <!-- 审批结论轨迹弹窗 -->
    <el-dialog title="信审审批结论轨迹" :visible.sync="spjlShow" :modal="false" width="1000px">
      <el-table :data="tableData.recordList" height="280" border style="width: 100%" highlight-current-row v-loading="loading">
        <el-table-column prop="verIncome" label="核实收入[元]" min-width="100">
        </el-table-column>
        <el-table-column prop="proName" label="批准产品" min-width="80">
        </el-table-column>
        <el-table-column prop="ploanAmt" label="批准金额[元]" min-width="100">
        </el-table-column>
        <el-table-column prop="ploanTerm" label="批准期限[月]" min-width="100">
        </el-table-column>
        <el-table-column prop="appmult" label="审批倍数" min-width="80">
        </el-table-column>
        <el-table-column prop="eachTermamt" label="每期还款额[元]" min-width="120">
        </el-table-column>
        <el-table-column prop="inteDebitrate" label="内部负债率" min-width="100">
        </el-table-column>
        <el-table-column prop="creditDebitRate" label="总信用负债率" min-width="100">
        </el-table-column>
        <el-table-column prop="totalRate" label="总负债率" min-width="80">
        </el-table-column>
        <el-table-column prop="appConclusion" label="审批结论" min-width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="auditDate" label="审批时间" min-width="180">
        </el-table-column>
      </el-table>
      <div class="block tool-bar" v-show="tableData.totalRecord > pageSize">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
          :page-sizes="[10, 20,50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord">
        </el-pagination>
      </div>
      <div class="back-form-li" style="text-align:right;padding:10px;">
        <el-button plain @click="spjlShow=false;">返回</el-button>
      </div>
    </el-dialog>
    <!-- 流程轨迹弹窗 -->
    <el-dialog title="流程轨迹" :visible.sync="lcgjShow" :modal="false" width="1000px">
      <el-table :data="lcgjData" height="250" border style="width: 100%" highlight-current-row v-loading="lcgjLoading"
        center>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="taskNameTxt" label="任务节点" width="100">
        </el-table-column>
        <el-table-column prop="taskTypeTxt" label="任务类型" width="100">
        </el-table-column>
        <el-table-column prop="activationTime" label="进入本环节时间" width="150">
        </el-table-column>
        <el-table-column prop="taskStatusTxt" label="任务状态" width="100">
        </el-table-column>
        <el-table-column prop="operatorCode" label="处理人" width="80">
        </el-table-column>
        <el-table-column prop="completeTime" label="处理时间" width="150">
        </el-table-column>
        <el-table-column prop="approvalOpinionTxt" label="处理结论" width="100">
        </el-table-column>
        <el-table-column prop="opinionExplain" label="意见说明" min-width="325" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button plain @click="lcgjShow=false;">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        creditExtensionLoanAmt: '',
        creditExtensionLoanTerm: '',
        activeName: ['1'],
        formLabelWidth: '85px',
        LabelWidth: '100px',
        formApproLabLeft: "100px",
        formApproLab: "123px",
        formApproLabelWidth: "200px",
        formReturn: {},
        rulesReturn: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
        },
        tableData: [{
          verIncome: 'verIncome',
          proCode: 'proCode',
          ploanAmt: 'ploanAmt',
          ploanTerm: 'ploanTerm',
          appmult: 'appmult',
          eachTermamt: 'eachTermamt',
          inteDebitrate: 'inteDebitrate',
          address: 'address',
          totalRate: 'totalRate',
          appConclusion: 'appConclusion',
          auditDate: 'auditDate'
        }],
        checkList: '',
        // checkedCities
        lists: [],
        // lists: [{
        //   label: '公积金',
        //   value: '00'
        // }, {
        //   label: '社保',
        //   value: '01'
        // }, {
        //   label: '运营商',
        //   value: '02'
        // }, {
        //   label: '网银',
        //   value: '03'
        // }, {
        //   label: '简版征信',
        //   value: '04'
        // }, {
        //   label: '设备画像',
        //   value: '05'
        // }],
        //  checkAll: false,
        checkedCities: [],
        checkBox: false,
        // cities: cityOptions,
        // isIndeterminate: true,
        currentPage: 0,
        creditExtensionLoanTermTerms: [],
        mainReasons: [], // 主原因
        secondeReasons: [], // 次原因
        type: '', // 定义的判断 主/次 原因
        flag: '', // 定义的判断 回退类型
        dealroperCode: '', // 经办人
        taskId: '', // 任务id
        custName: '',
        custNo: '',
        certType: '',
        certCode: '', // 证件号码
        emerType: '',
        appOrgCode: '',
        proName: '',
        // proCode: '', // 批准产品 产品编号
        proId: '', // 产品id
        // "00"-"人工通过","01"-"人工拒绝","02"-"人工回退","03"-"高级审批","04"-"决策通过","05"-"决策拒绝","06"-"人工审批","07"-"客户放弃"),"08"-"系统通过","09"-"系统拒绝","10"-"人工撤销"
        opinionFlag: '00', // 任务标志类型  默认00 , 点击了 更高 审批改  03
        mainReason: '', // 主原因name
        secondaryReason: '',
        reasonDesc: '',
        appOrgId: '',
        applyId: '',
        rollbackNodeName: '', // 监听使用的  回退节点
        dealroperDate: '',
        creauditAppOperate: '',
        resource: '',
        spjlData: [], // 审批结论轨迹数据
        lcgjData: [], // 流程轨迹 lcgjData
        products: [], // 审批产品
        baseProName: '', // 详情带过了的 产品名称
        // 审批结论轨迹
        pageNum: 1,
        pageSize: 10,
        loading: false, // 加载  审批结论轨迹
        mainId: '', // 主原因 id
        mainReasonTitle: '', // 主原因 title
        applicationInformationDetail: '', // 申请详情传过来的数据
        userInfo: '', // 登录信息
        // 审批
        loanAmt: '', // 申请金额
        loanTerm: '', // 申请期限
        productName: '', // 申请信息-申请产品
        maxEachTermAmt: '', // 可接受最高每期还款额
        loanType: '', // 申请类型
        // 审批同意
        applyConclusion: '00', // 审批同意
        verIncome: '', // 核实收入
        ploanTerm: '', // 批准期限
        ploanAmt: '', // 批准金额
        proItem: '', // 遍历到的产品
        proCode: '', // 产品code
        appmult: '', // 审批倍数
        eachTermamt: '', // 月还款额
        inteDebitrate: '', // 内部负债率
        creditDebitRate: '', // 总信用负债率
        totalRate: '', // 总负债率
        reasonRemark: '',
        caculData: {}, // 审批结论数据
        creditExtensionBeginDate: this._getDate(), // 授权开始
        creditExtensionEndDate: '', // 授权结束
        appConclusion: '', // 审批结论内容
        lcgjLoading: '', // 流程轨迹
        userName: '', // 审批人
        proName: '', // 产品名称
        applySubNo: '', // 进件编号
        applyTypeTxt: '', // 申请类型
        certTypeTxt: '', // 证件类型
        sproId: '', // 审批 proId
        // quotaData: '', // 评分 月还款额
        fbalance: '', // 核实每月可接受最高还款额
        fbalance2Num: Number,
        hangOut: false,
        loadsitu: false,
        adbtn: '确定',
        // 表单必填
        spruleForm: {
          verIncome: '',
          ploanTerm: '',
          ploanAmt: ''
        },
        sprules: {
          verIncome: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '',
              trigger: 'blur'
            }
          ],
          ploanTerm: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '',
              trigger: 'blur'
            }
          ],
          ploanAmt: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '',
              trigger: 'blur'
            }
          ]
        },
        // 弹窗显示
        dialogFormVisible: false,
        // verIncomError: false, // 审批 - 月核实收入错误
        // ploanAmtError: false, // 审批 - 批准金额
        // ploanTermError: false, // 批准期限 
        ploanTerms: [], // 审批 - 返回的批准期限集合
        ploanTermItem: '', // 审批 - 批准期限item
        synthesisRateM: '', // 审批 - 计算审批结论数据 - 综合费率
        loanRateYr: '', // 审批 - 计算审批结论数据 - 借款利率
        maxAmounnt: 0, // 产品最大金额
        minAmount: 0, // 产品最小金额
        // verIncome2: 0, // 
        judgeFlag: '', // 初审/终审标志  
        approvalFlag: '0',
        auditFlag: '0',
        verIncome2: 0, // 处理的金额
        ploanAmt2: 0, // 批准的金额
        options: [], // 回退节点的数组
        repayWay: '', // 审批  计算审批结论数据  还款方式
        taskName: '', // 角色标志
        social: '', // 社保/公积金  授权标志
        orgId: '', // 用来请求产品  用户id
        huiTuiShow: false,
        juJueShow: false,
        fangQiShow: false,
        shenPiShow: false,
        spjlShow: false,
        lcgjShow: false,
        jujueBtnShow: false, // 拒绝 按钮 BX02
        activeNames: ['1', '2', '3'], // 更改 审批 为折叠面板
        isLoading: false, // 审批按钮 是否加载状态
        loadingTitle: '提交', // 默认btn title
        shenPiBtnShow: false, // 初审 审批按钮  BX21
        debtRate: Number, //产品负债率
        groupId: '', //	流程角色code
        maxAuditAmt: Number, //流程角色-最高审批金额
        ploanAmtNum: Number, //批准金额number类型
        params: '',
        mainReasonId: '', //主原因id
        subReasonId: '', //子原因id
        FtaskNodeName: '', //终审的taskNodeName，跳转回页面判断的
      }
    },
    mounted() {
      this.mountedInf();
      this.creditPeriod();
    },
    methods: {
      changeDate() {
        this.creditExtensionEndDate = this._getDate(this.creditExtensionLoanTerm, 0, true,
          true, this.creditExtensionBeginDate)
      },
      mountedInf() {
        // creditApp_finalTrial_five   信审总监审批 最高级不需要 更高级审批
        let taskInWaitting = {};
        this.judgeFlag = JSON.parse(localStorage.getItem('judge')).flag;
        this.userInfo = JSON.parse(localStorage.getItem('userInf'));
        this.FtaskNodeName = JSON.parse(localStorage.getItem('FtaskNodeName'));
        this.applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
        if (this.judgeFlag == '01') {
          taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
          this.options = [{
            "label": "申请登记",
            "value": "creditApp_apply",
            "type": "01"
          }]
          this.rollbackNodeName = 'creditApp_apply'; //只有一个节点默认显示此节点，多个节点需手动选择（删除此行）
          this.taskStatus = JSON.parse(localStorage.getItem('workbenchPass')).taskStatus; // 任务状态
          // 反欺诈专员审批按钮，要判断下，功能角色号有配BX22的
          if (this.userInfo.roleCodesList) {
            for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
              if (this.userInfo.roleCodesList[i] == 'BX21')
                if (this.judgeFlag == '01')
                  this.shenPiBtnShow = true;
          }
        } else if (this.judgeFlag == '02') {
          taskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));
          this.taskStatus = JSON.parse(localStorage.getItem('FinalWorkbenchPass')).taskStatus; // 任务状态
          this.taskName = taskInWaitting.taskName;
          this.groupId = taskInWaitting.groupId; //	流程角色code
          this.options = [{
            "label": "初审审批",
            "value": "creditApp_firstTrial",
            "type": "02"
          }];
          this.rollbackNodeName = 'creditApp_firstTrial';
          this.findSmFlowRole();
          // 拒绝按钮根据 角色判断 BX20
          if (this.userInfo.roleCodesList) {
            for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
              if (this.userInfo.roleCodesList[i] == 'BX20')
                if (this.judgeFlag == '01')
                  this.jujueBtnShow = true;
          }
        }
        //  获取列表页信息
        ({
          taskId: this.taskId,
          processInstanceId: this.processInstanceId,
          applyId: this.applyId,
          appOrgId: this.appOrgId,
          appOrgCode: this.appOrgCode,
          custNo: this.custNo, // 客户编号
          custName: this.custName,
          applySubNo: this.applySubNo, // 进件编号
          certTypeTxt: this.certTypeTxt, // 证件类型
          certCode: this.certCode, // 证件号码
          sproId: this.proId,
          proName: this.baseProName,
          certCode: this.certCode
        } = taskInWaitting);
        // 回退 拒绝  审批
        // 经办人 登录用户名
        this.dealroperCode = this.userInfo.userCode;
        // 用户id
        this.orgId = this.userInfo.orgId;
        JSON.stringify(this.applicationInformationDetail) === '{}' ? this._error('客户信息获取失败！请保存已填写内容，从任务列表重新进入！') : '';
        this.applyTypeTxt = this.applicationInformationDetail.applyTypeTxt; // 申请类型
        this.loanTerm = this.applicationInformationDetail.loanTerm; // 申请期限 
        // if (this.judgeFlag == '04') { // 主管
        //   this.options = [{
        //     "label": "反欺诈专员审批",
        //     "value": "antiFraudApp_commissioner",
        //     "type": ''
        //   }]
        // }
      },
      findSmFlowRole() { //信审审批-8.获取流程角色信息
        this.get("/smFlowRoleAction/findSmFlowRole", {
          flowRoleCode: this.groupId,
        }).then(res => {
          if (res.statusCode == 200) {
            this.maxAuditAmt = res.data.maxAuditAmt;
          } else {
            this._error(res.msg);
          }
        });
      },
      hangOoutBtn() { //挂起弹窗
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.Csave();
        }).catch(() => {});
      },
      canc() {
        this.hangOut = false;
      },
      Csave() {
        this.loadsitu = true;
        this.adbtn = '保存中';
        // 区分初审/终审
        if (this.judgeFlag == '01') {
          this.busiState = '01';
        } else if (this.judgeFlag == '02') {
          this.busiState = '11'
        }
        // 点击 确定 提交 方法              
        this.post("/creauditInfo/approveHang ", {
          taskId: this.taskId,
          busiState: this.busiState,
          applyId: this.applyId, // 申请单id
        }).then(res => {
          if (res.statusCode == '200') {
            this.hangOut = false;
            if (this.judgeFlag == '01') {
              this.$router.push('/taskInWaitting');
              this._del('初审详情');
            } else if (this.judgeFlag == '02') { // 终审
              this.$router.push('FtaskInWaitting?taskNodeName=' + this.FtaskNodeName + '&flag=02');
              this._del('终审详情');
            }
          } else {
            this.hangOut = false;
            this._error('挂起失败！请检查网络后再试！')
          }
        });
      },
      // 获取系统时间
      getSystemDate() {
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          // 请求系统时间
          this.dealroperDate = res.data;
        })
      },
      coverFn(flag) {
        // 清空原因
        this.mainReason = '';
        this.secondaryReason = ''; //清空子原因
        this.isLoading = false;
        this.checkBox = false; //隐藏复选框
        this.loadingTitle = '提交';
        // 页面点击按钮出现 的 对应 弹窗
        // 统一处理    回退 02 ,拒绝 01, 放弃  07, 审批 03, 审批结论 spjl, 流程轨迹 lcgj
        if (flag)
          switch (flag) {
            case '02':
              this.huiTuiShow = true;
              this.checkedCities = []; //清空复选框
              this.secondaryReason = ''; //清空子原因
              this.getSystemDate();
              // 初审回退到申请登记 01   终审会退到初审审批 02
              this.judgeFlag == '01' ? this.getReason('main', '01') : this.getReason('main', '02');
              break;
            case '01':
              this.juJueShow = true;
              this.getSystemDate();
              // 拒绝 03 new
              this.getReason('main', '03')
              break;
            case '07':
              this.fangQiShow = true;
              this.getSystemDate();
              // 放弃 05 new
              this.getReason('main', '05')
              break;
              //审批按钮
            case '03':
              this.shenPiShow = true;
              // 申请金额
              this.loanAmt = this.applicationInformationDetail.loanAmt;
              // 申请信息-申请产品
              this.productName = this.applicationInformationDetail.productName;
              // 可接受最高每期还款额
              this.maxEachTermAmt = this.applicationInformationDetail.maxEachTermAmt;
              // 申请类型/借款类型
              this.loanType = this.applicationInformationDetail.loanTypeTxt;
              //初审的时候调用评分接口
              // if (this.judgeFlag == '01') {
              // 信用评分  核实可接受最高还款额
              this.post('/credit/quotaScoring', {
                applyId: this.applyId,
                proId: this.sproId,
                appOrgId: this.appOrgId
              }).then(res => {
                if (res.statusCode == '200') {
                  // this.quotaData = res.data;
                  // 单独处理 评分   =>  "评分:51.6"
                  this.fbalance = res.data.fbalance;
                } else {
                  this._error(res.msg)
                }
              });
              // this.creditPeriod();
              //带回的信息
              this.post('/creauditOpinion/queryCreauditOpinionObj', {
                applyId: this.applyId
              }).then(res => {
                if (res.statusCode == '200') {
                  if (res.data) {
                    this.proCode = res.data.proCode;
                    this.verIncome2 = res.data.verIncome; //月核实收入[元];
                    this.proId = res.data.proId; //批准产品ID;
                    this.proName = res.data.proName; //批准产品;
                    this.ploanTerm = res.data.ploanTerm; //批准期限[月];
                    this.ploanAmt2 = res.data.ploanAmt;
                    res.data.verIncome || res.data.verIncome == 0 ? this.verIncome = this._formatNumber(res.data.verIncome) :
                      this.verIncome = res.data.verIncome; //月核实收入[元];
                    this.ploanAmt = res.data.ploanAmt || res.data.ploanAmt == 0 ? this._formatNumber(res.data.ploanAmt) :
                      '';
                    this.creditExtensionLoanAmt = this._formatNumber(res.data.creditExtensionLoanAmt); //批准金额[元];
                    this.caculData.appmult = res.data.appmult; //审批倍数;
                    this.caculData.eachTermamt = res.data.eachTermamt; //月还款额[元];
                    this.caculData.inteDebitrate = res.data.inteDebitrate; //内部负债率;
                    this.caculData.creditDebitRate = res.data.creditDebitRate; //总信用负债率;
                    this.caculData.totalRate = res.data.totalRate; //总负债率;
                    this.caculData.signAmount = res.data.signAmount; //签约金额;
                    this.appConclusion = res.data.appConclusion; //意见说明;
                    this.maxAmounnt = res.data.maxAmounnt; // 最大
                    this.minAmount = res.data.minAmount; // 最小
                    this.debtRate = res.data.debtRate; //产品负债率
                    this.creditExtensionLoanTerm = res.data.creditExtensionLoanTerm == 0 ? '' : res.data.creditExtensionLoanTerm; //授信期限[月]
                    //获取批准期限
                    this.ploanTerms = res.data.returnList; //获取批准期限
                    if (this.judgeFlag == '02') this.creditExtensionBeginDate = res.data.creditExtensionBeginDate; //授信开始日期-初审返回值为空，不需赋值，设定默认是为当天。终审获取初审时间
                    this.creditExtensionEndDate = res.data.creditExtensionEndDate; //授信截止日期
                    if (this.ploanTerm) { //初审第一次未填，在选中下拉值时赋值
                      for (let item of this.ploanTerms) {
                        if (item.appDuration == this.ploanTerm) {
                          ({
                            loanRateYr: this.loanRateYr,
                            repayWay: this.repayWay,
                            synthesisRateM: this.synthesisRateM
                          } = item);
                        }
                      }
                    }
                  } else {
                    return;
                  }
                } else {
                  this.verIncome = ''; //月核实收入[元];
                  this.verIncome2 = '';
                  this.proId = ''; //批准产品ID;
                  this.proName = ''; //批准产品;
                  this.ploanTerm = ''; //批准期限[月];
                  this.ploanAmt = ''; /*this.moneyBlur(res.data.ploanAmt,'ploanAmt')*/ ; //批准金额[元];
                  this.ploanAmt2 = ''
                  this.caculData.appmult = ''; //审批倍数;
                  this.caculData.eachTermamt = ''; //月还款额[元];
                  this.caculData.inteDebitrate = ''; //内部负债率;
                  this.caculData.creditDebitRate = ''; //总信用负债率;
                  this.caculData.totalRate = ''; //总负债率;
                  this.caculData.signAmount = ''; //签约金额;
                  this.appConclusion = ''; //意见说明;
                  this.maxAmounn = ''; // 最大
                  this.minAmount = ''; // 最小
                  this.debtRate = ''; //产品负债率
                  //获取批准期限
                  this.ploanTerms = []; //获取批准期限
                  this.loanRateYr = '';
                  this.repayWay = '';
                  this.synthesisRateM = '';
                }
              });
              break;
            case 'fqz':
              this.$router.push({
                name: 'AntiApplyEditf'
              });
              this.params = {
                id: this.applyId,
                flag: 'start',
                busiState: '30',
                channel: '00'
              }
              localStorage.setItem("AntiApplyParams", JSON.stringify(this.params));
              break;
            case 'spjl':
              this.spjlShow = true;
              this.getSpjlList();
              break;
            case 'lcgj':
              this.lcgjLoading = this.lcgjShow = true;
              // 任务状态
              this.getLcgjList();
              break;
          }
      },
      submitFn(flag) {
        // 手动赋值  经办人
        this.dealroperCode = this.dealroperCode;
        // 回退、拒绝、放弃
        //必填校验
        if (flag == '02') {
          if (!this.rollbackNodeName) {
            this._error('请选择回退节点!')
            return;
          }
          if (this.judgeFlag == '01') { //初审需要判断此处必填，终审没有
            if (this.checkBox && this.checkedCities.length == 0) {
              this._error('请勾选补充授权项！!')
              return;
            }
          }
        }
        if (flag != '03') {
          if (!this.mainReason) {
            this._error('请选择主原因!')
            return;
          }
          // 添加
          if (!this.reasonRemark) {
            this._error('请填写原因说明!')
            return;
          }
          //  区分初审/终审
          if (this.judgeFlag == '01') {
            if (flag == '01') this.busiState = '02';
            if (flag == '02') this.busiState = '00';
            if (flag == '07') this.busiState = '03';
          } else if (this.judgeFlag == '02') {
            if (flag == '01') this.busiState = '12';
            if (flag == '02') {
              this.rollbackNodeName == 'creditApp_apply' ? this.busiState = '00' : ''; //申请登记
              this.rollbackNodeName == 'creditApp_firstTrial' ? this.busiState = '10' : ''; //初审审批
            }
            if (flag == '07') this.busiState = '13';
          }
          // 设置入参
          if (flag == '01') this.creauditAppOperate = 'check_Refuse';
          if (flag == '02') this.creauditAppOperate = 'check_Back';
          if (flag == '07') this.creauditAppOperate = 'check_Abandon';
          this.approvalFn();
        } else { // 审批 03
          if (!this.fbalance) {
            this._error('请完善信审表中可承受的月还款金额！')
            return;
          }
          if (!this.verIncome) {
            this._error('请填写月核实收入!')
            return;
          }
          if (!this.proId) {
            this._error('请选择批准产品!')
            return;
          }
          if (!this.ploanTerm) {
            this._error('请选择批准期限!')
            return;
          }
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
          if (this.ploanAmt) {
            var newPloanAmt = this.ploanAmt.replace(/\,/g, '') * 1;
            if (newPloanAmt > this.maxAuditAmt && this.opinionFlag == '00') {
              this._error('大于当前审批人最高审批金额权限，请选择请求更高级审批!');
              return;
            };
          };
          if (!this.appConclusion) {
            this._error("请填写意见说明!");
            return;
          }
          // 区分初审/终审
          this.judgeFlag == '01' ? this.busiState = '04' : this.busiState = '14';
          this.saveCreaduit();
        }
      },
      // 回退/拒绝/放弃
      approvalFn() {
        this.isLoading = true;
        this.loadingTitle = '提交中';
        // 判断终审的 opinionFlag 
        // 点击 确定 提交 方法
        //获取主原因、子原因id
        for (var i = 0; i < this.mainReasons.length; i++) {
          if (this.mainReasons[i].reasonName == this.mainReason) {
            this.mainReasonId = this.mainReasons[i].id;
          }
        };
        for (var i = 0; i < this.secondeReasons.length; i++) {
          if (this.secondeReasons[i].reasonName == this.secondaryReason) {
            this.subReasonId = this.secondeReasons[i].id;
          }
        };
        // return
        this.post("/creauditInfo/approval", {
          // 挂起 taskId 任务id
          authCredits: this.checkedCities.join(','),//补充授权项
          taskId: this.taskId,
          custName: this.custName, // 客户名称
          custNo: this.custNo, // 客户code
          certType: this.certType, // 证件类型
          certCode: this.certCode, // 证件号码
          emerType: this.emerType, // 紧急程度
          appOrgCode: this.appOrgCode, // 门店代码
          proName: this.proName, // 产品名称
          proCode: this.proCode, //  产品代码
          proId: this.proId, // 产品id
          opinionFlag: this.opinionFlag, // 标志任务类型
          mainReasonName: this.mainReason, // 回退主原因
          subReasonName: this.secondaryReason, // 回退子原因
          mainReasonId: this.mainReasonId, // 回退主原因id
          subReasonId: this.subReasonId, // 回退子原因id
          reasonRemark: this.reasonRemark, // 意见描述/原因说明
          appOrgId: this.appOrgId, // 进件机构id
          applyId: this.applyId, // 申请单id
          rollbackNodeName: this.rollbackNodeName, // 回退节点名称
          dealroperDate: this.dealroperDate, // 经办时间
          creauditAppOperate: this.creauditAppOperate, // 操作类型
          busiState: this.busiState,
          applySubNo: this.applySubNo
        }).then(res => {
          this.fangQiShow = this.juJueShow = this.huiTuiShow = this.isLoading = false;
          this.loadingTitle = '提交';
          if (res.statusCode == '200') {
            this._succe(res.msg)
            if (this.judgeFlag == '01') {
              this.$router.push('/taskInWaitting');
              this._del('初审详情');
            }
            if (this.judgeFlag == '02') {
              this.$router.push('FtaskInWaitting?taskNodeName=' + this.FtaskNodeName + '&flag=02');
              this._del('终审详情');
            }
          } else {
            this._error(res.msg);
          }
        });
      },
      // 保存审批信息
      saveCreaduit(val) { //审批按钮  提交功能
        this.isLoading = true;
        this.loadingTitle = '提交中';
        if (this.judgeFlag == '02') {
          if (this.opinionFlag == '00') {
            this.auditFlag = '1';
          } else if (this.opinionFlag == '03') {
            this.auditFlag = '0';
          }
        }
        let verIncome = 0;
        let ploanAmt2 = 0;
        if (/,/.test(this.verIncome))
          verIncome = Number(this.verIncome.replace(/,/g, ''));
        else
          verIncome = Number(this.verIncome);
        if (/,/.test(this.ploanAmt)) {
          ploanAmt2 = Number(this.ploanAmt.replace(/,/g, ''));
        } else {
          ploanAmt2 = Number(this.ploanAmt)
        }
        if (/,/.test(this.creditExtensionLoanAmt)) {
          this.creditExtensionLoanAmt = Number(this.creditExtensionLoanAmt.replace(/,/g, ''));
        } else {
          this.creditExtensionLoanAmt = Number(this.creditExtensionLoanAmt)
        }
        this.post('/creauditOpinion/add', {
          creditExtensionLoanTerm: this.creditExtensionLoanTerm, //授信期限
          creditExtensionLoanAmt: this.creditExtensionLoanAmt, //授信金额
          applyId: this.applyId,
          auditType: this.judgeFlag == '01' ? '00' : '01',
          proCode: this.proCode,
          verIncome: verIncome,
          ploanAmt: ploanAmt2,
          ploanTerm: this.ploanTerm, //批准期限
          appmult: this.caculData.appmult, // 审批倍数
          eachTermamt: this.caculData.eachTermamt, //每期还款额[元]
          inteDebitrate: this.caculData.inteDebitrate, //内部负债率
          totalRate: this.caculData.totalRate, // 总负债率
          signAmount: this.caculData.signAmount, // 签约金额
          appConclusion: this.appConclusion,
          newOldMainnos: '', //借新还旧进件编号集合
          applyMainNo: '', //主进件编号
          applySubNo: this.applySubNo, //从进件编号
          appOrgId: this.appOrgId, //进件机构ID
          appOrgCode: '', //进件机构代码
          applyType: '', //申请类型[“00”:”非循环贷”,”01”:”循环贷(借新还旧)”,”02”:”循环贷(非借新还旧)”]
          custId: '', //客户ID
          custNo: this.custNo, //客户编号
          applyCustId: '', //申请客户ID（申请登记-个人信息）
          applyConclusion: this.applyConclusion,
          ploanOperId: '', // 批准人员
          srcPloanAmt: this.srcPloanAmt, // 信审批准额度
          creditDebitRate: this.caculData.creditDebitRate, // 信用负债率
          approvalFlag: this.approvalFlag, // 终审通过标志  0 未
          ploanDate: '', // 批准日期
          auditDate: '', // 批准时间
          auditFlag: this.auditFlag, // 终审结束标识 0 初审 1终审 , 只有 终审 点审批的时候 才变为1 , 同 approvalFlag 字段
          proId: this.proId, //产品id
          taskId: this.taskId, // 任务id
          opinionFlag: this.opinionFlag, // 任务类型  初审 00 
          busiState: this.busiState
        }).then(res => {
          this.isLoading = false;
          this.loadingTitle = '提交';
          this.shenPiShow = false;
          if (res.statusCode != '200') {
            this._error(res.msg);
            return;
          }
          if (res.statusCode == '200') {
            this._succe(res.msg);
            // 已跳转无需此处
            // this.verIncome = ''; // 核实收入
            // this.ploanAmt = ''; // 批准金额
            // this.appConclusion = ''; //审批结论内容（文本框）
            // this.srcPloanAmt = ''; // 信审批准额度
            // this.caculData.creditDebitRate = ''; // 信用负债率
            if (this.judgeFlag == '01') { // 初审 
              this.$router.push('/taskInWaitting');
              this._del('初审详情');
            } else if (this.judgeFlag == '02') { // 终审
              this.$router.push('FtaskInWaitting?taskNodeName=' + this.FtaskNodeName + '&flag=02');
              this._del('终审详情');
            }
          }
        })
      },
      getBackSeReason(id, appSN) {
        this.get('/credit/findNodeFirstChildren?id=' + id + '&applySubNo=' + appSN + '&' + Math.random()).then(res => {
          if (res.statusCode == '200') {
            this.secondeReasons = res.data.reasonList;
            res.data.relations?this.lists= res.data.relations:'';
          } else {
            this.secondeReasons = [];
          }
        })
      },
      // 获取主次原因
      getReason(flag, type) {
        if (flag == 'main') {
          // 请求主原因
          this.get('/credit/firstNodeReason?reasonType=' + type + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.mainReasons = res.data;
            } else {
              this.mainReasons = [];
            }
          })
        } else if (flag == 'second') {
          // 请求子原因
          this.get('/credit/findNodeFirstChildren?id=' + this.mainId + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.secondeReasons = res.data;
            } else {
              this.secondeReasons = [];
            }
          })
        }
      },
      // 获取授信期限
      creditPeriod() {
        this.get('/credit/creditPeriod').then(res => {
          if (res.statusCode == 200) {
            this.creditExtensionLoanTermTerms = res.data;
          } else {
            this._error(res.msg)
          }
        });
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getSpjlList();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getSpjlList();
      },
      // 审批结论轨迹
      getSpjlList() {
        this.post('/creauditOpinion/queryByPage', {
          applyId: this.applyId,
          pageNum: this.pageNum, // 页码
          pageSize: this.pageSize // 每页条数
        }).then(res => {
          if (res.statusCode == '200') {
            this.loading = false;
            this.tableData = res.data;
            // 处理 金额
            for (var i = 0; i < this.tableData.recordList.length; i++) {
              // 核实收入
              if (this.tableData.recordList[i].verIncome.toString().split('.').length > 1)
                this.tableData.recordList[i].verIncome = Number(this.tableData.recordList[i].verIncome[0]).toLocaleString() +
                '.' + this.tableData.recordList[i].verIncome.toString().split('.')[1];
              else
                this.tableData.recordList[i].verIncome = this.tableData.recordList[i].verIncome.toLocaleString();
              // 批准金额
              if (this.tableData.recordList[i].ploanAmt.toString().split('.').length > 1)
                this.tableData.recordList[i].ploanAmt = Number(this.tableData.recordList[i].ploanAmt.toString()
                  .split(
                    '.')[0]).toLocaleString() + '.' + this.tableData.recordList[i].ploanAmt.toString().split(
                  '.')[1];
              else
                this.tableData.recordList[i].ploanAmt = this.tableData.recordList[i].ploanAmt.toLocaleString();
              // 每期还款额
              if (this.tableData.recordList[i].eachTermamt.toString().split('.').length > 1)
                this.tableData.recordList[i].eachTermamt =
                Number(this.tableData.recordList[i].eachTermamt.toString().split('.')[0]).toLocaleString() +
                '.' +
                this.tableData.recordList[i].eachTermamt.toString().split('.')[1];
              else
                this.tableData.recordList[i].eachTermamt = this.tableData.recordList[i].eachTermamt.toLocaleString();
            }
          } else {
            this.tableData = [];
            this.$_error(res.msg);
          }
        })
      },
      // 流程轨迹
      getLcgjList() {
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processInstanceId + '&' + Math.random())
          .then(res => {
            if (res.statusCode == '200') {
              this.lcgjLoading = false;
              this.lcgjData = res.data;
            } else {
              this.lcgjData = [];
              this._error(res.msg);
            }
          })
      },
      // 回退节点改变 请求主原因-只有一个节点，不需要change请求
      backSelectChange: function (val) {

        // this.getReason('main', val.type);
        // // 清空主原因 子原因
        // this.mainReason = this.mainId = this.secondaryReason = '';
      },
      // 回退/拒绝 主原因 select - change
      selectChange: function (val) {
        // var id = val.id;// 主原因的 id
        this.mainReason = val.reasonName;
        this.secondaryReason = '';
        this.mainId = val.id; // 主原因的 id
        // 在主原因改变的时候请求子原因 ,判断是否选中的是大数据 （显示补充授权项勾选框），接口入参不同格式也不同
        val.reasonCode == 'r011507'? this.getBackSeReason(this.mainId, this.applySubNo):this.getReason('second', this.mainId);
      },
      getCheckBox(value) {
        //主原因：大数据爬取信息，子原因:授权项缺失/空白 时显示复选框
        this.checkedCities = [];
        for (let key of this.secondeReasons) {
          if (key.reasonName == value) {
            key.reasonCode == 'r01150702' ? this.checkBox = true : this.checkBox = false;
            break;
          }
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
        // 计算 审批记录数据
        this.calculateByAuditInfo();
      },
      // 计算审批结论数据
      calculateByAuditInfo: function () {
        if (!this.ploanAmt2 || !this.verIncome2 || !this.ploanTerm) return; //入参必填全部填入值再调用
        this.post('/creauditOpinion/calculateByAuditInfo', {
          applyId: this.applyId,
          proId: this.proId,
          ploanTerm: this.ploanTerm,
          ploanAmt: this.ploanAmt2,
          verIncome: this.verIncome2,
          eachTermamt: this.fbalance,
          repayWay: this.repayWay, // 还款方式
          synthesisRateM: this.synthesisRateM, // 综合费率 
          loanRateYr: this.loanRateYr, // 借款利率
        }).then(res => {
          // 审批结论数据
          if (res.statusCode == '200') {
            this.caculData = res.data;
            if (res.data.eachTermamt > this.fbalance) { // fbalance 可接受最高每期还款额
              this.ploanAmt = '' //批准金额
              this._error('月还款额不能大于可接受最高每期还款额，请重新输入！')
              return
            } else if (res.data.totalRate * 100 > this.debtRate || res.data.inteDebitrate * 100 > this.debtRate) { //产品负债率:debtRate  内部负债率:inteDebitrate  总负债率：totalRate
              this.ploanAmt = '' //批准金额
              this._error('内部负债率/总负债率超过该产品对应的最大负债率！')
              return
            }
            if (this.opinionFlag == '00' && this.judgeFlag == '02') { //选中同意
              this.ploanAmt.indexOf(',') != -1 ? this.ploanAmtNum = this.ploanAmt.replace(/,/g, '') * 1 : this.ploanAmtNum =
                this.ploanAmt * 1;
              if (this.ploanAmtNum > this.maxAuditAmt) { //流程角色最高审批金额:maxAuditAmt
                this.ploanAmt = '' //批准金额
                this._error('大于当前审批人最高审批金额权限，请选择请求更高级审批！')
                return
              }
            }
          }
        })
      },
      // 月核实收入[元]
      moneyBlur: function (val, flag) {
        let val2 = 0;
        val && val.indexOf(',') != -1 ? val = val.replace(/,/g, '') : '';
        if (isNaN(Number(val)) || val <= 0 || val == '') {
          val = '1.00';
          val2 = 1;
        } else if (val > 0) {
          val = this._formatNumber(val);
          val2 = parseFloat(val.replace(/,/g, ''))
        }
        if (flag == 'verIncome') {
          this.verIncome = val;
          this.verIncome2 = val2;
          this.calculateByAuditInfo();
        } else if (flag == 'creditExtensionLoanAmt') {
          this.creditExtensionLoanAmt = val;
        } else if (flag == 'ploanAmt') {
          // 校验
          if (val2 > this.maxAmounnt) {
            this._error('批准金额不能大于产品最高上限' + this.maxAmounnt + '元');
            this.creditExtensionLoanAmt = this.ploanAmt = this.ploanAmt2 = '';
            return;
          }
          if (val2 < this.minAmount) {
            this._error('批准金额不能小于产品最低下限' + this.minAmount + '元')
            this.creditExtensionLoanAmt = this.ploanAmt = this.ploanAmt2 = '';
            return;
          }
          // if (val2 > Number(this.loanAmt.split('.')[0].replace(',', ''))) {
          if (val2 > this.loanAmt) {
            this._error('此金额不能大于申请金额,请重新输入!')
            this.creditExtensionLoanAmt = this.ploanAmt = this.ploanAmt2 = '';
            return;
          }
          this.creditExtensionLoanAmt = this.ploanAmt = val;
          this.ploanAmt2 = val2;
          this.calculateByAuditInfo();
        } else {
          // 显示错误提示
          if (flag == "verIncome") {
            this.verIncome = this.verIncome2 = '';
          } else if (flag == "ploanAmt") {
            this.creditExtensionLoanAmt = this.ploanAmt = this.ploanAmt2 = '';
          }
        }
      },
      //   handleCheckAllChange(val) {
      //   this.checkedCities = val ? cityOptions : [];
      //   // this.isIndeterminate = false;
      // },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.lists.length;
        // checkedCities
        // this.isIndeterminate = checkedCount > 0 && checkedCount < this.lists.length;
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
    },
  }

</script>
<style>
  .creditApproval-class .el-collapse-item__header {
    width: 100%;
    background: #eef0f9;
    padding-left: 10px;
    display: block;
    margin-bottom: 5px;
    overflow: hidden;
    font-size: 16px;
  }

  .creditApproval-class .creditApr_backoff label {
    margin-left: 8px;
  }


  .CreditApproval_btn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 477px;
    height: 100px;
  }

  /* .creditApproval-class .creditApr_backoff label::before {
    content: '' !important;
  } */

</style>
