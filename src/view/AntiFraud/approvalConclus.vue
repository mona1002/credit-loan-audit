<!-- 反欺诈  审批结论 -->
<template>
  <div class="approval-colun">
    <div class="address-title">
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">概要信息</span>
    </div>
    <ul class="form-ul" style="width:100%;height:auto;overflow:hidden;">
      <li class="item-column3">
        <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:40px;top:10px;font-weight:bold;">*</span>
        <div class="left-title item-label-show">
          审核结论：
        </div>
        <div class="item-label-show" v-show="!isEdit">
          {{auditResulttext}}
        </div>
        <div v-show="isEdit">
          <el-select v-model="auditResult" @change="auditResultChange">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li>
        <el-button icon="el-icon-change-hang" class="credit-btn" @click="editFn" v-if="auditResult=='02'">修改</el-button>
      </li>
      <li class="item-column3 item-column3-null" v-if="auditResult!='02'">
        <div class="left-title"></div>
        <div class="">
        </div>
      </li>
      <li class="item-column3 item-column3-null" v-if="auditResult!='02'">
        <div class="left-title"></div>
        <div class="">
        </div>
      </li>
      <li class="item-column3" v-show="auditResult!='02'">
        <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:55px;top:10px;font-weight:bold;">*</span>
        <div class="left-title item-label-show">
          主原因：
        </div>
        <div class="item-label-show" v-show="!isEdit" v-model="mainReason">
          {{mainReasonName}}
        </div>
        <div v-show="isEdit">
          <!-- <el-select v-model="mainReason" @change="mainReasonChange" ref="mainReason"> -->
          <el-select v-model="mainReasonName" @change="mainReasonChange" ref="mainReasonName">
            <el-option v-for="item in mainReasons" :label="item.reasonName" :value="item.id">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3" v-show="auditResult!='02'">
        <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:55px;top:10px;font-weight:bold;">*</span>
        <div class="left-title item-label-show">
          子原因：
        </div>
        <div class="item-label-show" v-show="!isEdit" v-model="secondReason">
          {{subreaName}}
        </div>
        <div v-show="isEdit">
          <!-- <el-select v-model="secondReason" ref="sencondReasonName"> -->
          <el-select v-model="subreaName" ref="sencondReasonName" @change='getSecond'>
            <el-option v-for="item in secondReasons" :label="item.reasonName" :value="item.id">
            </el-option>
          </el-select>
        </div>
      </li>
      <li>
        <el-button icon="el-icon-change-hang" class="credit-btn" @click="editFn" v-if="auditResult!='02' && judgeFlag!='03'">修改</el-button>
      </li>
      <li class="item-column1">
        <div class="left-title item-label-show">
          主/从借款人：
        </div>
        <div class="item-label-show">
          {{custName}}
        </div>
      </li>
      <!-- item-column3-2 -->
      <li class="item-column1 item-column3-2 risk-select" v-show="auditResult!='02' && riskSection.length>1">
        <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:55px;top:10px;font-weight:bold;"
          v-show="auditResult=='00'&& judgeFlag=='04'">*</span>
        <div class="left-title">
          风险项：
        </div>
        <div>
          <!-- @change="selectChangeRisk" multiple    class="muti-select"   -->
          <!-- <el-select v-model="riskSection" multiple collapse-tags class="muti-select"> -->
          <el-select v-model="riskSection" multiple collapse-tags placeholder="请选择" class="muti-select">
            <el-option v-for="item in riskSections" :key="item.enumCode" :label="item.showMsg" :value="item.showMsg">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column1 item-column3-2" v-show="auditResult!='02' && riskSection.length<2">
        <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:55px;top:10px;font-weight:bold;"
          v-show="auditResult=='00'&& judgeFlag=='04'">*</span>
        <div class="left-title">
          风险项：
        </div>
        <div>
          <!-- @change="selectChangeRisk" multiple    class="muti-select"   -->
          <!-- <el-select v-model="riskSection" multiple collapse-tags class="muti-select"> -->
          <el-select v-model="riskSection" multiple collapse-tags placeholder="请选择" class="muti-select">
            <el-option v-for="item in riskSections" :key="item.enumCode" :label="item.showMsg" :value="item.showMsg">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:0px;top:10px;font-weight:bold;">*</span>
        <div class="left-title">反欺诈决策反馈：</div>
        <div class="textarea-class2">
          <el-input v-model="auditDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <!-- <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:40px;top:10px;font-weight:bold;">*</span> -->
        <div class="left-title">
          案件编号：
        </div>
        <div class="newLi">
          <!-- <el-select v-model="caseNum">
            <el-option v-for="item in caseOptions" :label="item.caseNum" :value="item.caseNum">
            </el-option>
          </el-select> -->
          <el-autocomplete v-model="caseNum" :fetch-suggestions="querySearchAsync" placeholder="请输入关键词" @select="handleSelect"></el-autocomplete>
        </div>
      </li>
      <li>
        <el-button class="btn-detail btn-detail2" @click="caseAdd('ruleForm')">新增</el-button>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">案件描述：</div>
        <div class="textarea-class2">
          <el-input v-model="caseDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li>
        <el-button class="btn-detail" @click="coverFn('showDetail')">详细信息</el-button>
      </li>
    </ul>
    <!-- <div class="btn-div">
      <el-button icon="el-icon-check-hang" class="credit-btn" @click="open">挂起</el-button>
      <el-button v-show="judgeFlag != '03'" icon="el-icon-check-back" class="credit-btn" @click="coverFn('02')">回退</el-button> -->
    <!-- 专员 多一个审批 -->
    <!-- <el-button v-show="judgeFlag == '03' && shenPiBtnShow" icon="el-icon-check-appro" class="credit-btn" @click="insert('submit')"
        :loading="isLoading">审批</el-button> -->
    <!-- 原审批改为提交 -->
    <!-- <el-button icon="el-icon-check-appro" class="credit-btn" @click="insert()" :loading="isLoading">提交</el-button>
      <el-button icon="el-icon-check-lcgj" class="credit-btn" @click="coverFn('lcgj')">流程轨迹</el-button>
      <el-button icon="el-icon-check-lcgj" class="credit-btn" @click="coverFn('save')">保存</el-button>
      <el-button icon="el-icon-check-big-data" class="credit-btn" @click="tobigData">大数据风控</el-button>
      <el-button icon="el-icon-check-social" class="credit-btn" @click="roSocialSecurity">社保公积金{{social}}</el-button>
    </div> -->
    <div class="approve_btn_area approve_btn_area_width_700">
      <span class="approve_item" @click="open">
        <i class="approve_icon HangUpIcon"></i>
        <span class="approve_text">挂起</span>
      </span>
      <span class="approve_item"  v-show="judgeFlag != '03'"  @click="coverFn('02')">
        <i class="approve_icon backIcon"></i>
        <span class="approve_text">回退</span>
      </span>
      <span class="approve_item" v-show="judgeFlag == '03' && shenPiBtnShow" @click="insert('submit')" :loading="isLoading">
        <i class="approve_icon appro"></i>
        <span class="approve_text">审批</span>
      </span>
      <span class="approve_item" @click="insert()" :loading="isLoading">
        <i class="approve_icon addIcon"></i>
        <span class="approve_text">提交</span>
      </span>
      <span class="approve_item" @click="coverFn('lcgj')">
        <i class="approve_icon liuchengIcon"></i>
        <span class="approve_text">流程轨迹</span>
      </span>
      <span class="approve_item" @click="coverFn('save')">
        <i class="approve_icon editIcon"></i>
        <span class="approve_text">保存</span>
      </span>
      <span class="approve_item" @click="tobigData">
        <i class="approve_icon brokenLineIcon"></i>
        <span class="approve_text">大数据风控</span>
      </span>
      <span class="approve_item" @click="roSocialSecurity">
        <i class="approve_icon dataMaptIcon"></i>
        <span class="approve_text">社保公积金{{social}}</span>
      </span>
    </div>
    <!-- 弹窗 -->
    <!-- <el-dialog title="回退信息" :visible.sync="huiTuiShow" :modal="false">
      <el-form class="back-form huitui-class">
        <div class="form-title" style="position:relative;" v-show="showFlag=='02'">
          回退信息
          <el-tag closable @close="huiTuiShow=false;" style="position:absolute;"></el-tag>
        </div>
        <div class="back-form-li">
          <span style="color:red;display:inline-block;width:0px;float:left;">*</span>
          <el-form-item label="回退节点: ">
            <el-select @change="backSelectChange" v-model="rollbackNodeName">
              <el-option v-for="item in options" :label="item.label" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;">*</span>
          <el-form-item label="原因说明 :">
            <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="经办人 :" class="item-column2">
            {{dealroperCode}}
          </el-form-item>
          <el-form-item label="经办时间 :" class="item-column2">
            {{dealroperDate | dateFilter}}
          </el-form-item>
        </div>
        <div class="back-form-li" style="text-align:right;">
          <el-button plain @click="huiTuiShow=false;">返回</el-button>
          <el-button type="primary" @click="submitFn('02')" :loading="isLoading">{{loadingTitle}}</el-button>
        </div>
      </el-form>
    </el-dialog> -->
    <!-- 回退弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="回退信息" :visible.sync="huiTuiShow" :modal="false ">
        <!-- <el-form :model="formReturn" :rules="rulesReturn" ref="ruleFormReturn"> -->
        <el-form>
          <el-form-item class="alert_collapse_inputLabel" label="回退节点：" :label-width="formLabelWidth">
            <el-select @change="backSelectChange" v-model="rollbackNodeName">
              <el-option v-for="item in options" :label="item.label" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="dialog_textarea alert_collapse_inputLabel">
            <el-form-item label="原因说明：" :label-width="formLabelWidth">
              <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
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
          <el-button @click="huiTuiShow=false">取 消</el-button>
          <el-button type="primary" @click="submitFn('02')" :loading="isLoading"> {{loadingTitle}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 流程轨迹 -->
    <!-- <div>
      <el-dialog :visible.sync="lcgjShow" :modal="false" width="1000px">
        <div class="lcgj-div">
          <div class="form-title" style="position:relative;">
            流程轨迹
            <el-tag closable @close="lcgjShow=false;" style="position:absolute;"></el-tag>
          </div>
          <div class="xllcgj-div">
            <el-table :data="lcgjData" height="250" border style="width: 100%" highlight-current-row v-loading="lcgjLoading" center>
              <el-table-column type="index" label="序号" min-width="50">
              </el-table-column>
              <el-table-column prop="taskNameTxt" label="任务节点" min-width="100">
              </el-table-column>
              <el-table-column prop="taskTypeTxt" label="任务类型" min-width="100">
              </el-table-column>
              <el-table-column prop="activationTime" label="进入本环节时间" min-width="150">
              </el-table-column>
              <el-table-column prop="taskStatusTxt" label="任务状态" min-width="100">
              </el-table-column>
              <el-table-column prop="operatorCode" label="处理人" min-width="80">
              </el-table-column>
              <el-table-column prop="completeTime" label="处理时间" min-width="150">
              </el-table-column>
              <el-table-column prop="approvalOpinionTxt" label="处理结论" min-width="100">
              </el-table-column>
              <el-table-column prop="opinionExplain" label="意见说明" min-width="200" show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </div>
          <div class="back-form-li" style="text-align:right;padding:10px;">
            <el-button plain @click="lcgjShow=false;">返回</el-button>
          </div>
        </div>
      </el-dialog>
    </div> -->
    <!-- 流程轨迹弹窗 -->
    <el-dialog title="流程轨迹" :visible.sync="lcgjShow" :modal="false" width="1000px">
      <el-table :data="lcgjData" height="250" border style="width: 100%" highlight-current-row v-loading="lcgjLoading" center>
        <el-table-column type="index" label="序号" min-width="50">
        </el-table-column>
        <el-table-column prop="taskNameTxt" label="任务节点" min-width="140">
        </el-table-column>
        <el-table-column prop="taskTypeTxt" label="任务类型" min-width="100">
        </el-table-column>
        <el-table-column prop="activationTime" label="进入本环节时间" min-width="150">
        </el-table-column>
        <el-table-column prop="taskStatusTxt" label="任务状态" min-width="100">
        </el-table-column>
        <el-table-column prop="operatorCode" label="处理人" min-width="120">
        </el-table-column>
        <el-table-column prop="completeTime" label="处理时间" min-width="150">
        </el-table-column>
        <el-table-column prop="approvalOpinionTxt" label="处理结论" min-width="100">
        </el-table-column>
        <el-table-column prop="opinionExplain" label="意见说明" min-width="200" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button plain @click="lcgjShow=false">返回</el-button>
      </div>
    </el-dialog>
    <!-- 审批结论轨迹 -->
    <!-- <div>
      <el-dialog title="详情信息" :visible.sync="shenPiShow" :modal="false" width="1000px">
        <div class="spjl-div">
          <div style="line-height:30px;">
            <span>
              案件编号：
            </span>
            <span>
              {{caseNum}}
            </span>
          </div>
          <el-table :data="detailData.recordList" height="250" border style="width: 100%" highlight-current-row>
            <el-table-column type="index" label="序号" min-width="50">
            </el-table-column>
            <el-table-column prop="applySubno" label="进件编号" min-width="100">
            </el-table-column>
            <el-table-column prop="applyCustName" label="客户名称" min-width="150">
            </el-table-column>
            <el-table-column prop="auditTime" label="创建时间" min-width="100">
            </el-table-column>
            <el-table-column prop="caseDesc" label="案件描述" min-width="150">
            </el-table-column>
          </el-table>
          <div class="block tool-bar">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
              :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="detailData.totalRecord" v-show="detailData.totalRecord > 0">
            </el-pagination>
          </div>
        </div>
      </el-dialog>
    </div> -->
    <!-- 详情信息弹窗 -->
    <el-dialog title="详情信息" :visible.sync="shenPiShow" :modal="false" width="1000px">
      <p style="margin-bottom:3px"> 案件编号：
        <span>{{caseNum}}</span>
      </p>
      <el-table :data="detailData.recordList" height="250" border style="width: 100%" highlight-current-row>
        <el-table-column type="index" label="序号" min-width="50">
        </el-table-column>
        <el-table-column prop="applySubno" label="进件编号" min-width="100">
        </el-table-column>
        <el-table-column prop="applyCustName" label="客户名称" min-width="150">
        </el-table-column>
        <el-table-column prop="auditTime" label="创建时间" min-width="100">
        </el-table-column>
        <el-table-column prop="caseDesc" label="案件描述" min-width="150">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button plain @click="lcgjShow=false">返回</el-button> -->
        <div class="page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
            :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="detailData.totalRecord" v-show="detailData.totalRecord > 0">
          </el-pagination>
        </div>
      </div>
    </el-dialog>
    <!-- 案件编号-新增弹框 -->
    <!-- <div class="bigDataLog addDataLog">
      <el-dialog title="" :visible.sync="addLogVisible" width="430px">
        <p class="addLogP">
          <label>
            <span class="xing">*</span>案件编号：</label>
          <el-input :rows="1" placeholder="请输入内容" v-model="caseNums" :maxlength="20" @keyup.native="trimFilter('caseNums')">
          </el-input>
          <span class="addWarimg" v-show="caseNums != null && caseNums.length==20">
            输入长度不能超过20
          </span>
        </p>
        <p class="addLogP addLogP2">
          <label>
            <span class="xing">*</span>案件描述：</label>
          <span class="addWarimg" v-show="caseDescs != null && caseDescs.length==500">
            输入长度不能超过500
          </span>
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="caseDescs" :maxlength="500" resize="none" @keyup.native="trimFilter('caseDescs')">
          </el-input>
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addSure">确认</el-button>
        </span>
      </el-dialog>
    </div> -->
    <!-- 新增弹窗 -->
    <div class="Height_240 ">
      <el-dialog title="新增" :visible.sync="addLogVisible"  :modal="false ">
        <el-form :model="ruleFormAdd" :rules="rules" ref="ruleForm" >
          <el-form-item class="alert_collapse_inputLabel"  prop="caseNums" label="案件编号：" :label-width="formLabelWidth">
            <el-input :rows="1" placeholder="请输入内容" v-model="ruleFormAdd.caseNums" @keyup.native="trimFilter('caseNums')">
            </el-input>
          </el-form-item>
          <div class="dialog_textarea alert_collapse_inputLabel">
            <el-form-item label="案件描述："  prop="caseDescs" :label-width="formLabelWidth">
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="ruleFormAdd.caseDescs" resize="none" @keyup.native="trimFilter('caseDescs')">
              </el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addSure('ruleForm')">确认</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import baseurl from '../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
        ruleFormAdd:{
          caseNums:'',
          caseDescs:''
        },
        formLabelWidth: '85px',
        caseNums: '',
        caseDescs: '',
        taskName: '',
        // nodeName: '',
        // routeParams: '',
        coverShow: false, // 弹窗
        products: [], // 审批产品
        dealroperDate: '',
        loanAmt: '',
        sqproName: '',
        eachTermAmt: '',
        loanType: '',
        applyId: '',
        sproId: '',
        appOrgId: '',
        quotaData: '',
        creditScore: '',
        fbalance: '',
        fbalance2: '',
        products: '',
        proCode: '',
        verIncome2: '',
        ploanAmt2: '',
        caculData: '',
        appConclusion: '',
        custNo: '',
        applyConclusion: '',
        srcPloanAmt: '',
        creditDebitRate: '',
        proId: '',
        taskId: '',
        showFlag: '',
        processTemplateId: '',
        taskStatus: '',
        lcgjLoading: '',
        reasonRemark: '',
        issameFamtxt: '', // 风险项
        relBorrowertxt: '', // 案件描述,
        rollbackNodeName: '', // 监听使用的回退节点
        options: [], // 回退节点的数组
        dealroperCode: '', // 经办人
        loanTerm: '',
        judgeFlag: '',
        verIncome: '',
        proName: '',
        ploanTerm: '',
        ploanTerms: '',
        ploanAmt: '',
        lcgjData: [],
        auditResult: '', // 审核结论
        auditResulttext: '',
        mainId: '', // 主原因 id
        secondId: '', // 子原因id
        // appinfoId:'', // 反欺诈申请id
        applicationInformationDetail: '', // 取到 本地存储的 申请信息
        riskSectionArr: [], // 风险项
        riskSection: [],
        auditDesc: '', // 反欺诈决策反馈
        caseDesc: '', // 案件描述
        taskNodeName: '', // 任务节点
        taskId: '', // 任务节点
        processInstanceId: '', // 流程实例id
        caseOptions: [], // 请求回来的案件 
        caseNum: '', // 案件编号
        riskSections: [], // 请求回来的风险项
        custName: '', // 客户名
        riskObj: {}, // 风险项对象
        // riskSection: '', // 风险项 显示 
        detailData: [{
          applyCustName: '100',
          applySubno: '100',
          auditTime: '2018-01-15',
          caseDesc: '21'
        }], // 查看详情 数据
        pageNum: 1, // 页码
        pageSize: 10, // 每页容量
        huiTuiShow: false, // 回退信息
        lcgjShow: false, // 流程轨迹
        shenPiShow: false, // 审批结论轨迹
        shenPiBtnShow: false, // 审批 专员 BX22
        social: '', // 社保/公积金  授权标志
        // bigDataLogVisible: false, //大数据风控弹框
        // socialLogVisible: false, //社保公积金
        isEdit: false,
        mainReason: '', // 主原因
        mainReasonT: '', // 主管临时变量
        mainReasons: [], // 主原因数组
        mainReasonName: '', // 主原因name
        secondReason: '', // 子原因
        secondReasonT: '', //  主管临时变量
        subreaName: '', // 子原因name
        secondReasons: [],
        secondaryReason: '',
        isLoading: false, // 审批按钮 是否加载状态
        loadingTitle: '提交', // 默认btn title
        taskwaitting: '',
        //案件编号-新增弹框
        addLogVisible: false,
        //远程搜索案件编号
        restaurants: [],
        timeout: null,
        channel: '',
        // mainName:'',
        // secondaryName:''
       rules:{
caseNums:[
  { required: true, message: '请输入活动名称', trigger: 'blur' },
  { min: 0, max: 20, message: '输入长度不能超过20', trigger: 'blur' }
],
caseDescs:[  { required: true, message: '请输入活动名称', trigger: 'blur' },
  { min: 0, max: 500, message: '输入长度不能超过500', trigger: 'blur' }
]

       }
      }
    },
    mounted() {
      // 取出  申请信息   applicationInformationDetail
      this.applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
      // this.custName = this.applicationInformationDetail.custName;
      // this.certCode = this.applicationInformationDetail.certCode;

      // 取出 审批结论 所需数据
      this.auditCode = JSON.parse(localStorage.getItem('userInf')).userCode;

      // 回退 拒绝  审批
      // 经办人 登录用户名
      this.userInfo = JSON.parse(localStorage.getItem('userInf'));
      this.dealroperCode = this.userInfo.userCode;

      this.judgeFlag = JSON.parse(localStorage.getItem('judge')).flag;
      if (this.judgeFlag == '01') { // 初审 任务 id  taskId
        this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
        this.custName = this.taskInWaitting.custName;
        this.certCode = this.taskInWaitting.certCode;
        // 挂起 任务id
        this.taskId = this.taskInWaitting.taskId;

        this.opinionFlag = '00';
        this.options = [{
          "label": "申请登记",
          "value": "creditApp_apply",
          "type": "01"
        }]
        //channel
        this.channel = '00';

      } else if (this.judgeFlag == '02') { // 终审取终审  taskId
        this.FtaskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));
        this.custName = this.FtaskInWaitting.custName;
        this.certCode = this.FtaskInWaitting.certCode;
        // 挂起 任务id
        this.taskId = this.FtaskInWaitting.taskId;

        this.opinionFlag = '01'; // 终审
        this.options = [{
            "label": "申请登记",
            "value": "creditApp_apply",
            "type": "01"
          },
          {
            "label": "初审审批",
            "value": "creditApp_firstTrial",
            "type": "02"
          }
        ]
        //channel
        this.channel = '00';
      } else if (this.judgeFlag == '03' || this.judgeFlag == '04') {
        this.taskwaitting = JSON.parse(localStorage.getItem('AntitaskInWaitting'));
        this.custName = this.taskwaitting.custName;
        this.certCode = this.taskwaitting.certCode;
        this.taskName = this.taskwaitting.taskName;
        this.taskId = this.taskwaitting.taskId;
        this.applyId = this.taskwaitting.applyId;
        this.processInstanceId = this.taskwaitting.processInstanceId;
        this.taskNodeName = this.taskwaitting.taskNodeName;
        this.taskStatus = this.taskwaitting.taskStatus;
        var insertObj = JSON.parse(localStorage.getItem('saveInsertObj'));
        if (insertObj != undefined) {
          this.auditResult = insertObj.auditResult; // 审核结论
          this.auditResulttext = insertObj.auditResulttext; // 审核结论 名称
          this.mainReason = insertObj.mainreasonId; // 欺诈主原因id
          this.mainReasonName = insertObj.mainreaName, // 欺诈主原因名称
            this.secondReason = insertObj.subreasonId; // 欺诈子原因id
          this.subreaName = insertObj.subreaName, // 欺诈子原因名称
            this.riskSection = insertObj.riskSection; // 风险项
          this.auditDesc = insertObj.auditDesc; // 反欺诈决策反馈
          this.caseNum = insertObj.caseNum; // 案件编号 caseNum
          this.caseDesc = insertObj.caseDesc; // 案件描述
        }
        // 请求风险项
        this.getRiskItems();
        // 专员主管区分
        if (this.taskName == 'antiFraudApp_commissioner') { // 专员
          this.processTemplateId = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).processTemplateId;
          this.isEdit = true;
          if (this.userInfo.roleCodesList) {
            for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
              if (this.userInfo.roleCodesList[i] == 'BX22')
                if (this.judgeFlag == '03')
                  this.shenPiBtnShow = true;
          }
          this.queryCaseNumList();
        } else if (this.taskName == 'antiFraudApp_manager') { //主管
          this.processTemplateId = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).processTemplateId;
          this.options = [{
            "label": "反欺诈专员审批",
            "value": "antiFraudApp_commissioner",
            "type": ''
          }]
          if (!insertObj) {
            // 反欺诈主管 请求 反欺诈历史信息
            this.queryCreauditOpinionObj();
          }
        }
      } else if (this.judgeFlag == '05' || this.judgeFlag == '06') {
        //channel
        this.channel = '04';
      } else if (this.judgeFlag == '07' || this.judgeFlag == '08' || this.judgeFlag == '10' || this.judgeFlag == '11' ||
        this.judgeFlag == '12' || this.judgeFlag == '13') {
        //channel
        this.channel = '03';
      }
      // else if (this.judgeFlag == '03') {

      //   // 取出 流程模版id  processTemplateId
      //   // this.processTemplateId = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).processTemplateId;
      //   this.isEdit = true;
      //   // 反欺诈专员审批按钮，要判断下，功能角色号有配BX22的
      //   if (this.userInfo.roleCodesList) {
      //     for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
      //       if (this.userInfo.roleCodesList[i] == 'BX22')
      //         if (this.judgeFlag == '03')
      //           this.shenPiBtnShow = true;
      //   }
      //   // 审批 专员 AntiWorkbenchPass
      //   // this.taskId = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskId;
      //   // // 反欺诈申请id
      //   // this.appinfoId = 
      //   // this.applyId = JSON.parse(localStorage.getItem('AntitaskInWaitting')).applyId;
      //   // 任务节点
      //   // this.taskNodeName = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskNodeName;
      //   // this.taskId = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskId;
      //   // 流程实例id
      //   // this.processInstanceId = JSON.parse(localStorage.getItem('AntitaskInWaitting')).processInstanceId;
      //   // 任务状态
      //   // this.taskStatus = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskStatus;
      //   // this.taskName = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskName;
      //   // this.nodeName = '反欺诈专员审批';
      //   // 先取 保存的信息
      //   // var insertObj = JSON.parse(localStorage.getItem('saveInsertObj'));
      //   if (insertObj != undefined) {
      //     this.auditResult = insertObj.auditResult; // 审核结论
      //     this.auditResulttext = insertObj.auditResulttext; // 审核结论 名称
      //     this.mainReason = insertObj.mainreasonId; // 欺诈主原因id
      //     // this.mainreaName = insertObj.mainReasonName, // 欺诈主原因名称
      //     this.mainReasonName = insertObj.mainreaName, // 欺诈主原因名称
      //       this.secondReason = insertObj.subreasonId; // 欺诈子原因id
      //     // this.subreaName = insertObj.subreaName, // 欺诈子原因名称
      //     this.subreaName = insertObj.subreaName, // 欺诈子原因名称    
      //       this.riskSection = insertObj.riskSection; // 风险项
      //     this.auditDesc = insertObj.auditDesc; // 反欺诈决策反馈
      //     this.caseNum = insertObj.caseNum; // 案件编号 caseNum
      //     this.caseDesc = insertObj.caseDesc; // 案件描述
      //     // 请求主原因
      //     // if (this.auditResult) {
      //     //   this.getReason('main', this.auditResult, true);
      //     //   // 赋值主原因
      //     // }
      //     // 请求子原因
      //     // this.secondReasonT = insertObj.subreasonId;
      //     // if (insertObj.mainreasonId) {
      //     //   this.getReason('second', this.mainReasonT, true);
      //     // }
      //     // 请求风险项
      //     // this.getRiskItems();
      //   }
      //   // 请求风险项
      //   this.getRiskItems();
      //   this.queryCaseNumList();

      // } else if (this.judgeFlag == '04') {
      //   // 取出 流程模版id  processTemplateId
      //   // this.processTemplateId = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).processTemplateId;
      //   // 审批主管
      //   // this.taskId = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskId;
      //   // this.applyId = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).applyId;
      //   // 任务节点
      //   // this.taskNodeName = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskNodeName;
      //   // this.taskId = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskId;
      //   // 流程实例id
      //   // this.processInstanceId = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).processInstanceId;
      //   // 任务状态
      //   // this.taskStatus = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskStatus;
      //   // this.taskName = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskName;
      //   // this.nodeName = '反欺诈主管审批';

      //   this.options = [{
      //     "label": "反欺诈专员审批",
      //     "value": "antiFraudApp_commissioner",
      //     "type": ''
      //   }]

      //   // 反欺诈主管 , 假如 本地存储了信息, 就不请求 了
      //   // var insertObj = JSON.parse(localStorage.getItem('saveInsertObj'));
      //   if (insertObj != undefined) {
      //     this.auditResult = insertObj.auditResult; // 审核结论
      //     this.auditResulttext = insertObj.auditResulttext; // 审核结论 名称
      //     this.mainReason = insertObj.mainreasonId; // 欺诈主原因id
      //     this.mainreaName = insertObj.mainReasonName, // 欺诈主原因名称
      //       this.secondReason = insertObj.subreasonId; // 欺诈子原因id
      //     this.subreaName = insertObj.subreaName, // 欺诈子原因名称
      //       this.riskSection = insertObj.riskSection; // 风险项
      //     this.auditDesc = insertObj.auditDesc; // 反欺诈决策反馈
      //     this.caseNum = insertObj.caseNum; // 案件编号 caseNum
      //     this.caseDesc = insertObj.caseDesc; // 案件描述
      //     // 请求主原因
      //     // if (this.auditResult) {
      //     //   this.getReason('main', this.auditResult, true);
      //     //   // 赋值主原因
      //     // }
      //     // 请求子原因
      //     // this.secondReasonT = insertObj.subreasonId;
      //     // if (insertObj.mainreasonId) {
      //     //   this.getReason('second', this.mainReasonT, true);
      //     // }
      //   } else {
      //     // 反欺诈主管 请求 反欺诈历史信息
      //     this.queryCreauditOpinionObj();
      //   }
      //   // 请求风险项
      //   this.getRiskItems();

      // }
      // this.routeParams = '?taskNodeName=' + this.taskName
      // 将这里的 请求风险项 转移到 专员/主管内
      // 请求风险项
      // this.getRiskItems();
      // 请求  案件编号
      // this.queryCaseNumList();
      this.Social();
    },
    methods: {
      open() { //挂起
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showCancelButton: false
        }).then(() => {
          this.busiState = '30'
          // 点击 确认 提交 方法
          this.post("/creauditInfo/approveHang ", {
            taskId: this.taskId,
            busiState: this.busiState,
            applyId: this.applyId, // 申请单id
          }).then(res => {
            if (res.statusCode == '200') {
              this.$message({
                type: 'success',
                message: '挂起成功'
              });
              this.$router.push('/AntiFraud34');
            } else {
              this.$message(res.msg);
            }
          });
        }).catch(() => {});
        // const h = this.$createElement;
        // this.$msgbox({
        //   title: '提示',
        //   message: h('p', null, [
        //     h('span', null, '确定操作? '),
        //     // h('i', { style: 'color: teal' }, 'VNode')
        //   ]),
        //   showCancelButton: true,
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   modal: false,
        //   beforeClose: (action, instance, done) => {
        //     if (action === 'confirm') {
        //       instance.confirmButtonLoading = true;
        //       instance.confirmButtonText = '执行中...';

        //       this.busiState = '30'
        //       // 点击 确认 提交 方法
        //       this.post("/creauditInfo/approveHang ", {
        //         taskId: this.taskId,
        //         busiState: this.busiState,
        //         applyId: this.applyId, // 申请单id
        //       }).then(res => {
        //         if (res.statusCode == '200') {
        //           done();
        //         } else {
        //           this.$message(res.msg);
        //           instance.confirmButtonText = '';
        //         }
        //         instance.confirmButtonLoading = false;
        //       });
        //     } else {
        //       done();
        //     }
        //   }
        // }).then(action => {
        //   this.$message({
        //     type: 'success',
        //     message: '挂起成功'
        //   });
        //   this.$router.push('/AntiFraud34');
        // });
      },
      // 请求系统时间
      getSystemDate() {
        // 获取系统时间
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          // 请求系统时间
          this.dealroperDate = res.data;
        })
      },
      // 请求风险项
      getRiskItems() {
        this.get('/credit/getRiskItems?applyId=' + this.applyId + '&' + Math.random()).then(res => {

          if (res.statusCode == 200) {
            this.riskSections = res.data;
            // 主管 
            // if (TF == true) {
            //   for (var i = 0; i < this.riskSection.length; i++) {
            //     // 请求回来的列表值
            //     for (var j = 0; j < this.riskSections.length; j++) {
            //       // 判断页面的每个值 是否 == 列表的选项
            //       if (this.riskSection[i] == this.riskSections[j].showMsg) {
            //         // 赋值给对象 
            //         this.riskSectionArr.push({
            //           'showMsg': this.riskSections[j].showMsg,
            //           'enumCode': this.riskSections[j].enumCode,
            //           'returnMsg': this.riskSections[j].returnMsg
            //         });
            //         continue;
            //       }
            //     }
            //   }
            // }
          }
        })
      },
      // 请求案件编号 
      queryCaseNumList() {
        this.get('/fraudAuditOpinion/queryCaseNumList?' + Math.random()).then(res => {
          if (res.statusCode == '200') {
            //this.list = res.data;
            this.restaurants = res.data;
            /* this.list = res.data.map(item => {
            return { value: item.caseNum, label: item.caseNum };
          });         */
          }
        })
      },
      //请求远程搜索
      querySearchAsync(queryString, cb) {
        for (let i of this.restaurants) {
          i.value = i.caseNum; //将caseNum作为value  
        };
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 300 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {},
      // 审批
      insert(val) {
        // 反欺诈专员
        if (val == 'submit') {
          // 判断 审批结论 不为 风险排除 就弹窗
          if (this.auditResult != '02' && this.judgeFlag == '03') {
            this.$message({
              showClose: true,
              message: '您只能审批“风险排除”的进件！',
              type: 'warning'
            });
            return;
          }
          // 专员 风险排除 审批 必填
          if (this.auditResult == '02' && this.judgeFlag == '03') {
            // 判断必填项  
            if (!this.auditResult || !this.auditDesc) {

              this.$message({
                showClose: true,
                message: '请输入必填项',
                type: 'warning'
              });
              return;
            }
          }
        }

        if (this.auditResult != '02') {
          // 判断必填项
          if (!this.auditResult || !this.mainReason || !this.secondReason || !this.auditDesc) {

            this.$message({
              showClose: true,
              message: '请输入必填项',
              type: 'warning'
            });
            return;
          }
        }

        // 主管  黑名单 , 风险项必填
        if (this.auditResult == '00' && this.judgeFlag == '04') {
          if (!this.riskSection.length > 0) {

            this.$message({
              showClose: true,
              message: '请选择风险项!',
              type: 'warning'
            });
            return;
          }
        }

        // 处理风险项
        if (this.auditResult != '02' || this.auditResult != '01') {

          if (this.riskSection.length > 0) {
            // 页面的选项值
            for (var i = 0; i < this.riskSection.length; i++) {
              // 请求回来的列表值
              for (var j = 0; j < this.riskSections.length; j++) {
                // 判断页面的每个值 是否 == 列表的选项
                if (this.riskSection[i] == this.riskSections[j].showMsg) {
                  // 赋值给对象 
                  this.riskSectionArr.push({
                    'showMsg': this.riskSections[j].showMsg,
                    'enumCode': this.riskSections[j].enumCode,
                    'returnMsg': this.riskSections[j].returnMsg
                  });
                  continue;
                }
              }
            }
            // return;
          }




          // 取出主原因name
          if (this.mainReason) {
            for (var i = 0; i < this.mainReasons.length; i++) {
              if (this.mainReasons[i].id == this.mainReason) {
                this.mainReasonName = this.mainReasons[i].reasonName;
              }
            }
          }


          // 取出子原因name
          if (this.secondReason) {
            for (let i = 0; i < this.secondReasons.length; i++) {
              if (this.secondReasons[i].id == this.secondReason) {
                this.subreaName = this.secondReasons[i].reasonName;
              }
            }
          }
        } else if (this.auditResult == '02') {
          // 假如是风险排除,不传 主原因 子原因 风险项
          this.mainReason = '';
          this.mainReasonName = '';
          this.secondReason = '';
          this.subreaName = '';
          this.riskSectionArr = '';
          // 31 风险拒绝
          this.busiState = '31';
        }

        // 专员的审批 相当于是主管的审批
        if (val == 'submit') {
          // 原来主管的审批 不变
          const h = this.$createElement;
          this.$msgbox({
            title: '提示',
            message: h('p', null, [
              h('span', null, '确定操作? '),
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                this.post('/fraudAuditOpinion/opinionInsert', {
                  applyId: this.applyId, // 申请单id
                  mainreasonId: this.mainReason, // 欺诈主原因id
                  subreasonId: this.secondReason, // 欺诈子原因id
                  mainreaName: this.mainReasonName, // 欺诈主原因名称
                  subreaName: this.subreaName, // 欺诈子原因名称
                  riskSection: this.riskSectionArr, // 风险项
                  auditDesc: this.auditDesc, // 反欺诈决策反馈
                  auditResult: this.auditResult, // 审核结论
                  caseDesc: this.caseDesc, // 案件描述
                  caseNum: this.caseNum, // 案件编号 caseNum
                  auditType: '01', // 审批类型
                  taskNodeName: this.taskName, // 任务节点- 取列表taskName
                  taskId: this.taskId,
                  processInstanceId: this.processInstanceId, // 流程实例Id
                  busiState: this.busiState, //  状态
                  processTemplateId: this.processTemplateId // 流程模版Id
                }).then(res => {
                  if (res.statusCode == '200') {
                    this.resMsg = res.msg;
                    done();
                  } else {

                    if (res.statusCode == '500') {
                      this.$message({
                        type: 'warning',
                        message: '网络异常,请重试!'
                      });
                      instance.confirmButtonText = '';
                      instance.confirmButtonLoading = false;
                    } else {

                      this.$message({
                        type: 'warning',
                        message: res.msg
                      });
                    }
                  }
                  instance.confirmButtonText = '';
                  instance.confirmButtonLoading = false;
                })
              } else {
                done();
              }
            }
          }).then(action => {
            this.$message({
              type: 'success',
              message: '反欺诈审批成功!'
            });
            this.$router.push('/AntiFraud34');
          });
        } else {

          this.$confirm('您确定操作？', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            showCancelButton: false
          }).then(() => {
            // 专员的 提交  
            this.busiState = '30';
            // 原来主管的审批 不变
            this.post('/fraudAuditOpinion/insert', {
              applyId: this.applyId, // 申请单id
              mainreasonId: this.mainReason, // 欺诈主原因id
              subreasonId: this.secondReason, // 欺诈子原因id
              mainreaName: this.mainReasonName, // 欺诈主原因名称
              subreaName: this.subreaName, // 欺诈子原因名称
              riskSection: this.riskSectionArr, // 风险项
              auditDesc: this.auditDesc, // 反欺诈决策反馈
              auditResult: this.auditResult, // 审核结论
              caseDesc: this.caseDesc, // 案件描述
              caseNum: this.caseNum, // 案件编号 caseNum
              auditType: '01', // 审批类型
              taskNodeName: this.taskName, // 任务节点- 取列表taskName
              taskId: this.taskId,
              processInstanceId: this.processInstanceId, // 流程实例Id
              busiState: this.busiState, //  状态
              processTemplateId: this.processTemplateId, // 流程模版Id
              channel: this.channel
            }).then(res => {
              if (res.statusCode == '200') {
                this.resMsg = res.msg;
                this.$message({
                  type: 'success',
                  message: '反欺诈审批成功!'
                });
                this.$router.push('/AntiFraud34');
              } else {
                if (res.statusCode == '500') {
                  this.$message({
                    type: 'warning',
                    message: '网络异常,请重试!'
                  });
                  instance.confirmButtonText = '';
                  instance.confirmButtonLoading = false;
                } else {
                  this.$message({
                    type: 'warning',
                    message: res.msg
                  });
                }
              }
            })
          }).catch(() => {});

          // // 专员的 提交  
          // this.busiState = '30';
          // // 原来主管的审批 不变
          // const h = this.$createElement;
          // this.$msgbox({
          //   title: '提示',
          //   message: h('p', null, [
          //     h('span', null, '确定操作? '),
          //   ]),
          //   showCancelButton: true,
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   beforeClose: (action, instance, done) => {
          //     if (action === 'confirm') {
          //       instance.confirmButtonLoading = true;
          //       instance.confirmButtonText = '执行中...';
          //       this.post('/fraudAuditOpinion/insert', {
          //         applyId: this.applyId, // 申请单id
          //         mainreasonId: this.mainReason, // 欺诈主原因id
          //         subreasonId: this.secondReason, // 欺诈子原因id
          //         mainreaName: this.mainReasonName, // 欺诈主原因名称
          //         subreaName: this.subreaName, // 欺诈子原因名称
          //         riskSection: this.riskSectionArr, // 风险项
          //         auditDesc: this.auditDesc, // 反欺诈决策反馈
          //         auditResult: this.auditResult, // 审核结论
          //         caseDesc: this.caseDesc, // 案件描述
          //         caseNum: this.caseNum, // 案件编号 caseNum
          //         auditType: '01', // 审批类型
          //         taskNodeName: this.taskName, // 任务节点- 取列表taskName
          //         taskId: this.taskId,
          //         processInstanceId: this.processInstanceId, // 流程实例Id
          //         busiState: this.busiState, //  状态
          //         processTemplateId: this.processTemplateId, // 流程模版Id
          //         channel: this.channel
          //       }).then(res => {
          //         if (res.statusCode == '200') {
          //           this.resMsg = res.msg;
          //           done();
          //         } else {

          //           if (res.statusCode == '500') {
          //             this.$message({
          //               type: 'warning',
          //               message: '网络异常,请重试!'
          //             });
          //             instance.confirmButtonText = '';
          //             instance.confirmButtonLoading = false;
          //           } else {

          //             this.$message({
          //               type: 'warning',
          //               message: res.msg
          //             });
          //           }
          //         }
          //         instance.confirmButtonText = '';
          //         instance.confirmButtonLoading = false;
          //       })
          //     } else {
          //       done();
          //     }
          //   }
          // }).then(action => {
          //   this.$message({
          //     type: 'success',
          //     message: '反欺诈审批成功!'
          //   });
          //   this.$router.push('/AntiFraud34');
          // });
        }


      },
      coverFn(flag) {
        // 页面点击按钮出现 的 对应 弹窗
        // 统一处理    回退 02 拒绝 01 放弃  07 审批 03 审批结论 spjl 流程轨迹 lcgj

        switch (flag) {
          case '02':
            this.huiTuiShow = true;
            this.showFlag = '02';
            // 获取系统时间
            this.get('system/getSystemDate?' + Math.random()).then(res => {
              // 请求系统时间
              this.dealroperDate = res.data;
            })
            break;

          case 'lcgj':
            this.lcgjShow = true;
            // 取本地的 流程模版id
            // this.processTemplateId = JSON.parse(localStorage.getItem('workbenchPass')).processTemplateId;

            this.lcgjLoading = true;
            this.getLcgjList();

            break;

          case 'showDetail':
            if (!this.caseNum) {
              this.$message({
                type: 'warning',
                message: '请选择案件编号!'
              });
              return;
            }
            this.coverShow = true;
            // this.showFlag = 'showDetail';
            this.shenPiShow = true;
            this.queryDetailList();
            break;
          case 'save':
            // 点击保存 
            this.mainReasonName = this.$refs.mainReasonName.selectedLabel;
            this.subreaName = this.$refs.sencondReasonName.selectedLabel;
            var tempObj = {
              auditResult: this.auditResult, // 审核结论
              auditResulttext: this.auditResulttext, // 审核结论 名称
              mainreasonId: this.mainReason, // 欺诈主原因id
              // mainreaName: this.mainReasonName, // 欺诈主原因名称
              mainreaName: this.mainReasonName, // 欺诈主原因名称
              subreasonId: this.secondReason, // 欺诈子原因id
              // subreaName: this.subreaName, // 欺诈子原因名称
              subreaName: this.subreaName, // 欺诈子原因名称
              riskSection: this.riskSection, // 风险项
              auditDesc: this.auditDesc, // 反欺诈决策反馈
              caseNum: this.caseNum, // 案件编号 caseNum
              caseDesc: this.caseDesc, // 案件描述
            }
            // 点击保存 存本地
            localStorage.setItem('saveInsertObj', JSON.stringify(tempObj));
            // 保存 成功
            if (localStorage.getItem('saveInsertObj') != undefined) {
              this.$message({
                message: "保存成功!",
                type: 'success'
              });
              return;
            }
        }
      },
      // 获取显示详情信息  
      queryDetailList() {
        this.post('/fraudAuditOpinion/queryByPage', {
          caseNum: this.caseNum, // 案件编号
          pageNum: this.pageNum, // 页码
          pageSize: this.pageSize // 单页容量
        }).then(res => {
          if (res.statusCode == 200) {
            this.detailData = res.data;
          }
        })
      },
      // 每页条数
      handleSizeChange(val) {
        this.pageSize = val;
        this.queryDetailList();
      },
      // 页码
      handleCurrentChange(val) {
        this.pageNum = val;
        this.queryDetailList();
      },
      submitFn(flag) {
        // 手动赋值  经办人
        this.dealroperCode = this.dealroperCode;
        switch (flag) {
          case '02':
            // 进行必填校验
            // 回退节点
            if (this.rollbackNodeName.length == 0) {
              this.$message({
                message: "提示：请选择回退节点!",
                type: 'warning'
              });
              return;
            }
            // 原因说明
            if (!this.reasonRemark) {
              this.$message({
                message: "提示：请填写原因说明!",
                type: 'warning'
              });
              return;
            }
            this.coverShow = false;
            this.showFlag = 0;
            // 回退节点 使用了监听,所以单独赋值
            this.rollbackNodeName = this.rollbackNodeName.value;
            this.creauditAppOperate = 'check_Back';
            this.approvalFn();
            break;
        }
      },
      // 回退/拒绝/放弃
      approvalFn() {
        this.isLoading = true;
        this.loadingTitle = '提交中';
        // 判断终审的 opinionFlag 
        // 点击 确认 提交 方法
        this.post("/fraudAuditOpinion/approval", {
          // 挂起 taskId 任务id
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
          secondaryReason: this.secondaryReason, // 回退子原因
          reasonRemark: this.reasonRemark, // 意见描述/原因说明
          appOrgId: this.appOrgId, // 进件机构id
          applyId: this.applyId, // 申请单id
          rollbackNodeName: this.rollbackNodeName, // 回退节点名称
          dealroperDate: this.dealroperDate, // 经办时间
          creauditAppOperate: this.creauditAppOperate // 操作类型
        }).then(res => {
          this.huiTuiShow = false;

          if (res.statusCode != '200') {
            this.$message({
              message: res.msg,
              type: 'warning'
            })
            return;
          }
          if (res.statusCode == '200') {
            // this.taskId = '';
            // this.custName = ''; // 客户名称
            // this.custNo = ''; // 客户code
            // this.certType = ''; // 证件类型
            // this.certCode = ''; // 证件号码
            // this.emerType = ''; // 紧急程度
            // this.appOrgCode = ''; // 门店代码
            // // this.proName = ''; // 产品名称
            // this.proCode = ''; //  产品代码
            // this.proId = ''; // 产品id
            // this.opinionFlag = ''; // 标志任务类型
            // this.mainReason = ''; // 回退主原因
            // this.secondaryReason = ''; // 回退子原因
            // this.reasonRemark = ''; // 意见描述/原因说明
            // this.appOrgId = ''; // 进件机构id
            // // this.applyId = ''; // 申请单id
            // this.rollbackNodeName = ''; // 回退节点名称
            // this.dealroperDate = ''; // 经办时间
            // this.creauditAppOperate = ''; // 操作类型

            this.$message({
              message: res.msg,
              type: 'success'
            })

            this.$router.push('/AntiFraud34');
            this.del();
          }
        });
      },
      // 流程轨迹
      getLcgjList() {
        // this.post('/creauditInfo/approvalTrajectory', {
        //   processTemplateId: this.processTemplateId,
        //   taskStatus: this.taskStatus
        // }).then(res => {
        //   if (res.statusCode == '200') {
        //     this.lcgjLoading = false;
        //     this.lcgjData = res.data;
        //   } else {
        //     this.$message(res.msg);
        //   }
        // })
        this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processInstanceId + '&' + Math.random())
          .then(res => {
            if (res.statusCode == '200') {
              this.lcgjLoading = false;
              this.lcgjData = res.data;
            } else {
              this.$message({
                message: res.msg,
                type: 'warning'
              });
            }
          })


      },
      // 风险项更改
      selectChangeRisk: function (val) {
        if (val) {
          for (var i = 0; i < val.length; i++) {
            for (var j = 0; j < this.riskSections.length; j++) {
              if (val[i] == this.riskSections[j].showMsg) {
                // 赋值给对象 
                this.riskObj.showMsg = this.riskSections[j].showMsg;
                this.riskObj.enumCode = this.riskSections[j].enumCode;
                this.riskObj.returnMsg = this.riskSections[j].returnMsg;
                this.riskSectionArr.push(this.riskObj);
                return
              }
            }
          }

        }
      },
      // 获取主原因
      selectChangeMain: function (val) {
        this.secondReason = '';
        // 在主原因改变的时候请求子原因
        this.getReason('main', val, false);

        if (val == '00') {
          this.getReason('main', '08', false);
        } else if (val == '01') {
          this.getReason('main', '09', false);
        } else if (val == '02') {}
      },
      selectChange: function (val) {
        var id = val.id; // 主原因的 id
        // this.reasonName = val.reasonName;
        // 主原因
        // this.mainReason = val.reasonName;

        // 在主原因改变的时候请求子原因
        this.getReason('second', this.mainReason, false);
      },
      // 取子原因的 id
      selectChangeSccond: function (val) {
        var id = val.id; // 主原因的 id
        // this.reasonName = val.reasonName;
        // 主原因
        // this.secondReason = val.reasonName;

        this.secondId = val.id;
      },
      // 回退节点改变 请求主原因
      backSelectChange: function (val) {
        this.getReason('main', val.type);
      },
      // 通过监听请求主原因
      // flag 主/子
      // type 类型
      // true 真 主管 false 假 专员
      getReason(flag, type, TF) {
        var mainType;
        if (flag == 'main') {
          if (type == '00') {
            mainType = '08';
          } else if (type == '01') {
            mainType = '09';
          } else if (type == '02') {}
          this.get('/credit/firstNodeReason?reasonType=' + mainType + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.mainReasons = res.data;
              if (TF == true) {
                // this.mainReason = this.mainReasonT;
                this.mainReason = '';
                this.mainReasonName = '';
                this.secondReason = '';
                this.subreaName = '';
              } else {
                this.mainReason = '';
                this.mainReasonName = '';
                this.secondReason = '';
                this.subreaName = '';
              }
            }
          })
        } else if (flag == 'second') {
          // 请求子原因
          this.get('/credit/findNodeFirstChildren?id=' + type + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.secondReasons = res.data;
              if (TF == true) {
                this.secondReason = '';
                this.subreaName = '';
              } else {
                this.secondReason = '';
                this.subreaName = '';
              }
            }
          })
        }
      },
      // 反欺诈主管 申请 反欺诈专员信息
      queryCreauditOpinionObj: function () {
        this.get('/fraudAuditOpinion/queryCreauditOpinionObj?applyId=' + this.applyId + '&' + Math.random()).then(res => {
          if (res.statusCode == 200) {
            // 先赋值,直接点审批

            // this.mainReason.id = res.data.mainreasonId; // 欺诈主原因id
            // this.secondId.id = res.data.subreasonId; // 欺诈子原因id
            // this.mainReason.reasonName = res.data.mainreaName; // 欺诈主原因名称
            // this.secondReason.reasonName = res.data.subreaName;  // 欺诈子原因名称
            // this.riskSectionArr = res.data.riskSection; // 风险项
            // this.auditDesc = res.data.auditDesc; // 反欺诈决策反馈
            // this.caseNum = res.data.caseNum; // 案件编号 caseNum
            // this.caseDesc = res.data.caseDesc; // 案件描述

            // 审核结论
            this.auditResult = res.data.auditResult;
            this.auditResulttext = res.data.auditResulttext; // 审核结论  txt
            // 请求主原因
            // this.mainReasonT = res.data.mainreasonId;
            this.mainReason = res.data.mainreasonId;
            // 主原因name
            this.mainReasonName = res.data.mainreaName;
            // if (this.auditResult) {
            // this.getReason('main', this.auditResult, true);
            // 赋值主原因
            // }
            // 主原因
            // this.mainReason = res.data.mainreasonId;
            // 请求子原因   subreasonId
            // this.secondReasonT = res.data.subreasonId;
            // 子原因 id
            this.secondReason = res.data.subreasonId;
            // 子原因 name
            this.subreaName = res.data.subreaName;
            // if (res.data.mainreasonId) {
            // this.getReason('second', this.mainReasonT, true);
            // }

            // 风险项 riskSection
            this.riskSection = res.data.riskSectionArr;

            // 反欺诈决策反馈
            this.auditDesc = res.data.auditDesc;
            // 案件编号
            this.caseNum = res.data.caseNum;
            // 案件描述
            this.caseDesc = res.data.caseDesc;

            // 请求风险项
            this.getRiskItems();
            // 请求案件编号
            this.queryCaseNumList();
          }
        })
      },
      mainReasonChange(val) {
        //   // 主原因改变 请求子原因
        //   this.getReason('second',val,false)
      },
      //大数据风控
      tobigData() {
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          applyId: this.applyId
        }).then(res => {
          if (res.obj == null) {
            // alert('社保')
            // this.bigDataLogVisible = true;
            // alert(this.bigDataLogVisible)
            this.$confirm('此进件不存在大数据风控明细！', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showCancelButton: false
            }).then(() => {}).catch(() => {});
          } else if (res.obj) {
            this.$router.push({
              path: '/PneCtrl'
            });
            // this.$store.dispatch('addVisitedViews', {
            //   name: '大数据风控',
            //   path: '/PneCtrl',
            //   flag: this.judgeFlag,
            //   params: '',
            //   StatefullPath: '/PneCtrl',
            // })
          }
        });
      },
      //大数据风控 提示弹框关闭
      // infoSure() {
      //   this.bigDataLogVisible = false;
      // },
      //社保/公积金
      Social() {
        this.post(baseurl.BaseUrl + '/rmMxSecFundQryAction!notSession_getLatestSuccRisQuery.action', {
          certCode: this.certCode,
          custName: this.custName
        }).then(res => {
          if (res.obj) {
            this.social = "(已授权)";
          } else {
            this.social = "(未授权)";
          }
        });
      },
      roSocialSecurity() {
        // alert('社保')
        if (this.social == "(未授权)") {
          // this.socialLogVisible = true;
          this.$confirm('客户社保公积金未授权！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            showCancelButton: false
          }).then(() => {}).catch(() => {});
        } else if (this.social == "(已授权)") {
          this.$router.push({
            path: '/SocialSe'
          });
          // this.$store.dispatch('addVisitedViews', {
          //   name: '社保公积金',
          //   path: '/SocialSe',
          //   flag: this.judgeFlag,
          //   params: '',
          //   StatefullPath: '/SocialSe',
          // })
        }
      },
      //社保公积金 弹窗关闭
      // socialSure() {
      //   this.socialLogVisible = false;
      // },
      // 修改 按钮
      editFn() {
        this.isEdit = true;
        this.auditResult = '';
        this.mainReason = '';
        this.mainReasonName = '';
        this.secondReason = '';
        this.subreaName = '';
      },
      // 审核结论  更改
      auditResultChange(val) {
        this.getReason('main', val, true);
      },
      // 主原因更改
      mainReasonChange(val) {
        this.getReason('second', val, true);
        this.mainReason = val;
      },
      getSecond(val) {
        this.secondReason = val;
      },
      /*案件编号-新增按钮*/
      caseAdd(formName) {
        this.addLogVisible = true;
        // this.caseNums = '';
         this.ruleFormAdd.caseNums = '';
        // this.caseDescs = '';
        this.ruleFormAdd.caseDescs = '';
        this.$refs[formName] ? this.$refs[formName].resetFields() : '';       
      },
      /*案件编号-新增弹框-确认*/
      addSure(formName) {
        // if (!this.caseNums) {
        //   this.$message({
        //     showClose: true,
        //     message: '请填写案件编号',
        //     type: 'warning'
        //   });
        //   return;
        // } else if (!this.caseDescs) {
        //   this.$message({
        //     showClose: true,
        //     message: '请填写案件描述',
        //     type: 'warning'
        //   });
        //   return;
        // };
        // if (this.caseNums && this.caseDescs) {
          // this.post('/caseInfoController/insert', {
          //   param: {
          //     caseNum: this.ruleFormAdd.caseNums,
          //     creatorCode: '',
          //     creatorOrgCode: '',
          //     caseDesc: this.ruleFormAdd.caseDescs
          //   }
          // }).then(res => {
          //   if (res.statusCode != 200) {
          //     this.$message({
          //       showClose: true,
          //       message: res.msg,
          //       type: 'warning'
          //     });
          //     return;
          //   } else {
          //     this.addLogVisible = false;
          //     this.caseNum = this.ruleFormAdd.caseNums;
          //     this.caseDesc = this.ruleFormAdd.caseDescs;
          //     this.queryCaseNumList();
          //   }
          // })
        // }
         this.$refs[formName].validate((valid) => {
          if (valid) {
       this.post('/caseInfoController/insert', {
            param: {
              caseNum: this.ruleFormAdd.caseNums,
              creatorCode: '',
              creatorOrgCode: '',
              caseDesc: this.ruleFormAdd.caseDescs
            }
          }).then(res => {
            if (res.statusCode != 200) {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'warning'
              });
              return;
            } else {
              this.$message({
                type:'success',
                message:'新增成功！'
              })
              this.addLogVisible = false;
              this.caseNum = this.ruleFormAdd.caseNums;
              this.caseDesc = this.ruleFormAdd.caseDescs;
              this.queryCaseNumList();
            }
          })
} else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      trimFilter: function (value) {
        switch (value) {
          case 'caseNums':
            return this.ruleFormAdd.caseNums = this.ruleFormAdd.caseNums.replace(/\s/g, '');
            break;
          case 'caseDescs':
            return this.ruleFormAdd.caseDescs = this.ruleFormAdd.caseDescs.replace(/\s/g, '');
            break;
        }
      },
      del() {
        this.$store.dispatch('delVisitedViews', {
          name: '反欺诈详情'
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
    watch: {
      // 审核结论 改变请求主原因
      //   auditResult: function(val) {
      //     // 审核结论改变 , 主原因 子原因 都清空
      //     this.mainReason = '';
      //     // this.mainReasonName = '';
      //     this.mainId = '';
      //     this.secondReason = '';
      //     // this.subreaName = '';
      //     this.getReason('main', val);
      //   },
      //   // 通过主原因  请求 子原因
      //   mainReason: function(val) {
      //     this.secondReason = '';
      //     // this.subreaName = '';
      //     this.getReason('second', val, false);
      //   }
    },
  }

</script>
<style>
  /*信审审批样式*/

  .approval-colun .address-title {
    width: 100%;
    height: 35px;
    font-size: 18px;
    /*font-weight: bold;*/
    background: #eef0f9;
    line-height: 35px;
    padding-left: 10px;
    display: block;
    margin-bottom: 10px;
    /*margin-top: 20px;*/
    overflow: hidden;
  }





  /* 折叠面板头部背景色和icon */

  .approval-colun .icon_hat {
    padding: 9px 10px 10px 13px;
    vertical-align: middle;
  }

  .approval-colun .headFont {
    font-size: 16px;
  }





  /* 一列 */

  .approval-colun .item-column1 {
    width: 90%;
    float: left;
    margin: 0;
    margin-bottom: 10px;
  }





  /* 两列 */

  .approval-colun .item-column2 {
    width: 50%;
    float: left;
    margin: 0;
  }





  /* 三列 */

  .approval-colun .item-column3 {
    width: 33%;
    float: left;
    margin: 0;
    margin-bottom: 10px;
  }

  .approval-colun .left-title {
    float: left;
    width: 130px;
    line-height: 35px;
    min-height: 35px;
    padding-right: 10px;
    text-align: right;
    font-size: 14px;
    margin-right: 0px;
  }





  /* 3列 空位 */

  .approval-colun .item-column3-null {
    min-height: 35px;
  }

  .approval-colun .item-column3-2 {
    width: 66%;
  }

  .approval-colun .el-input__inner {
    height: 30px;
    line-height: 30px;
  }





  /* input hover 样式 */

  .approval-colun .el-select:hover .el-input__inner {
    background: #ffffff;
    border: 1px solid #475669;
    border-radius: 4px;
    /*width: 258px;*/
    height: 30px;
  }

  .approval-colun .textarea-class2 {
    width: calc( 100% - 130px);
    float: left;
  }





  /* 按钮集合控件 */

  .approval-colun .btn-div {
    text-align: center;
    width: 80%;
    float: left;
  }





  /*挂起*/

  .approval-colun .el-icon-check-hang {
    background: url(../../../static/images/guaqi.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*回退*/

  .approval-colun .el-icon-check-back {
    background: url(../../../static/images/back.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*拒绝*/

  .approval-colun .el-icon-check-reject {
    background: url(../../../static/images/jujue.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*放弃*/

  .approval-colun .el-icon-check-giveup {
    background: url(../../../static/images/fangqi.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*审批*/

  .approval-colun .el-icon-check-appro {
    background: url(../../../static/images/appro.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*流程轨迹*/

  .approval-colun .el-icon-check-lcgj {
    background: url(../../../static/images/liucheng.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /* 反欺诈 审批结论 - btn*/

  .approval-colun .credit-btn {
    padding: 10px;
    background: none;
    color: #333;
    border: none;
    padding-top: 0px;
  }





  /* 反欺诈 审批结论  - - 弹窗*/

  .approval-colun .el-dialog {
    width: 600px;
    margin-top: 30vh;
  }

  .approval-colun .el-dialog__body {
    padding: 0;
  }

  .approval-colun .back-form {
    min-width: 600px;
    min-height: 250px;
    background: #fff;
    margin: 0 auto;
    /*margin-top: 300px;*/
    border-radius: 2px;
    overflow: hidden;
    padding-bottom: 10px;
  }





  /* form-title */

  .approval-colun .form-title {
    width: 100%;
    height: 35px;
    font-size: 18px;
    /*font-weight: bold;*/
    /*background: #ededed;*/
    background: #eef0f9;
    line-height: 35px;
    padding-left: 10px;
    display: block;
    margin-bottom: 10px;
    overflow: hidden;
    font-size: 16px;
  }

  .approval-colun .form-title2 {
    width: 100%;
    height: 35px;
    font-size: 18px;
    /*font-weight: bold;*/
    /*background: #ededed;*/
    background: #eef0f9;
    line-height: 35px;
    padding-left: 10px;
    display: block;
    margin-bottom: 10px;
    overflow: hidden;
    font-size: 16px;
  }

  .approval-colun .back-form .back-form-li {
    /*border-top: 0.5px solid #ededed;*/
    margin: 10px 0px;
    line-height: 35px;
    height: 35px;
    padding: 2px 10px 0 10px;
  }





  /* textarea */

  .approval-colun .back-form .back-form-li .el-textarea {
    width: 80%;
  }





  /* 弹窗页面 关闭按钮*/

  .approval-colun .el-tag {
    width: 0;
    height: 0;
    color: none;
    border: none;
    /*position: absolute;*/
    right: 20px;
    top: 0;
  }

  .approval-colun .el-tag .el-icon-close {
    right: 0px;
    top: 5px;
  }





  /* 审批 表单 */

  .approval-colun .appro-form {
    /*width: 80%;*/
    height: 600px;
    min-width: 685px;
    margin-top: 100px !important;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    overflow: hidden;
  }





  /*.approval-colun .appro-form .el-form-item__label {
  width: 220px;
}*/

  .approval-colun .appro-form .back-form-li .el-textarea {
    width: 60%;
  }





  /* 流程轨迹 */

  .approval-colun .lcgj-div {
    min-width: 760px;
    width: auto;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    height: auto;
  }

  /* .approval-colun .el-input {
    width: 100%;
    height: 35px;
    line-height: 35px;
  } */

  /* .approval-colun .el-select {
    height: 100%;
    line-height: 100%;
  } */

  /* 反欺诈 -- 审批结论 */

  .approval-colun .form-ul {
    padding-left: 30px;
  }





  /* 默认显示样式 */

  .approval-colun .form-ul .el-select {
    /*width: 300px;*/
    width: calc( 100% - 130px);
  }

  .approval-colun .el-input--suffix .el-input__inner {
    margin: 0;
    padding: 0;
    padding-right: 30px;
    text-indent: 15px;
  }

  .approval-colun .item-label-show {
    margin-right: 0px;
    font-size: 14px;
    line-height: 30px;
  }

  .approval-colun .el-form-item__content .el-select .el-input {
    width: 100%;
  }





  /* 审批 label*/

  .approval-colun .appro-form .back-form-edit-li .el-form-item__label {
    width: 120px;
  }





  /* 结论  同意 */

  .approval-colun .appro-form .radio-li .el-form-item__label {
    width: 120px;
  }

  .approval-colun .el-form-item__label {
    width: 120px;
  }





  /* 两行文字 样式 */

  .approval-colun .back-form .line-height2 .el-form-item__label {
    line-height: 20px;
  }





  /* 回退样式 */

  /* label 文字样式 */

  .approval-colun .huitui-class .el-form-item__label {
    width: 85px;
  }

  .approval-colun .jujue-class {}





  /* 详细 信息按钮*/

  .approval-colun .btn-detail {
    /*border: none;*/
    float: left;
    margin-top: 20px;
    margin-left: 10px;
  }

  .approval-colun .btn-detail2 {
    margin-top: 0px;
  }





  /* 审批结论 详细信息 */

  .approval-colun .spjl-div {
    /*width: 80%;*/
    min-width: 500px;
    height: 400px;
    margin: 0 auto;
    /*margin-top: 250px;*/
    overflow: hidden;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
  }





  /* 分页 */

  .approval-colun .tool-bar {
    width: 100%;
    text-align: center;
    padding: 10px 0 0 10px;
  }





  /* 隐藏分页 */

  .approval-colun .el-pagination__jump {
    display: none;
  }





  /*多选下拉*/

  .approval-colun .form-ul .muti-select {
    display: flex;
    position: relative;
    /*width: 400px;*/
    height: normal;
    line-height: normal;
    width: normal;
    /*height: 100px;*/
    /*border: 1px solid;*/
    line-height: 100%;
  }

  .approval-colun .muti-select .el-select__tags {
    max-width: 100% !important;
    position: absolute;
    line-height: normal;
    white-space: normal;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }

  .approval-colun .muti-select .el-select__tags>span {
    width: 100%;
    height: auto;
    white-space: nowrap;
    display: inline-grid;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    display: inline-grid
  }

  .approval-colun .muti-select .el-tag {
    box-sizing: border-box;
    border-color: transparent;
    margin: 3px 0 3px 6px;
    background-color: #f0f2f5;
    right: 0;
    /*position: relative;*/
    height: auto;
    width: min-content;
    width: 640px;
  }

  .approval-colun .muti-select .el-tag:nth-child(2) {
    width: 30px;
  }

  .approval-colun .muti-select>.el-input {
    display: block;
  }

  .approval-colun .muti-select .el-tag .el-icon-close {
    top: 0;
  }

  .approval-colun .muti-select .el-input {
    height: auto;
    min-height: 35px;
  }

  .approval-colun .muti-select .el-input--suffix .el-input__inner {
    height: auto;
    /*height: 100px;*/
    min-height: 30px;
  }

  .approval-colun .risk-select .el-input--suffix .el-input__inner {
    height: 60px;
  }





  /*大数据风控*/

  .approval-colun .el-icon-check-big-data {
    background: url(../../../static/images/bigdata.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*社保公积金*/

  .approval-colun .el-icon-check-social {
    background: url(../../../static/images/social.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }





  /*修改信息*/

  .approval-colun .el-icon-change-hang {
    background: url(../../../static/images/change.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }

  .approval-colun .bigDataLog .el-dialog__body {
    padding: 30px 20px;
  }

  /* 必填 */

  .xing {
    color: #ff7676;
    font-size: 14px;
    position: relative;
    top: 2px;
    right: 2px;
  }

  .approval-colun .addLogP {
    position: relative;
  }

  .approval-colun .addLogP .addWarimg {
    position: absolute;
    left: 85px;
    top: -20px;
    color: #ff7676;
    font-size: 12px;
  }

  .approval-colun .addLogP label {
    width: 80px;
    text-align: right;
    display: inline-block;
  }

  .approval-colun .addLogP div {
    width: 280px;
    display: inline-block;
  }

  .approval-colun .addLogP2 {
    margin-top: 15px;
  }

  .approval-colun .addLogP2 label {
    float: left;
    height: 114px;
    line-height: 114px;
    margin-right: 5px;
  }

  .newLi {
    width: calc( 100% - 130px);
    float: right;
  }

  .newLi div {
    width: 100%;
  }

</style>
