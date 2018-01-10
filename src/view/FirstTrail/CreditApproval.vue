<!-- 信审 - 审批 -->
<template>
  <div class="creditApproval-class">
    <div class="address-title">
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">概要信息</span>
      <!-- {{title1}} -->
    </div>
    <el-form style="padding:0 20px;width:100%; height:150px; " class="info">
      <el-form-item label="审批人：" class="item-column3">
        {{userName}}
      </el-form-item>
      <el-form-item label="申请类型：" class="item-column3">
        {{appTypeTxt}}
      </el-form-item>
      <el-form-item label="进件编号：" class="item-column3">
        {{applySubNo}}
      </el-form-item>
      <el-form-item label="证件类型：" class="item-column3">
        {{certTypeTxt}}
      </el-form-item>
      <el-form-item label="证件号码：" class="item-column3">
        {{certCode}}
      </el-form-item>
      <el-form-item label="产品名称：" class="item-column3">
        {{baseProName}}
      </el-form-item>
      <el-form-item label="申请期限[月]：" class="item-column3">
        {{loanTerm}}
      </el-form-item>
    </el-form>
    <div class="btn-div">
      <el-button icon="el-icon-check-hang" class="credit-btn" @click="open">挂起</el-button>
      <el-button icon="el-icon-check-back" class="credit-btn" @click="coverFn('02')">回退</el-button>
      <el-button icon="el-icon-check-reject" class="credit-btn" @click="coverFn('01')">拒绝</el-button>
      <el-button icon="el-icon-check-giveup" class="credit-btn" @click="coverFn('07')">放弃</el-button>
      <el-button icon="el-icon-check-appro" class="credit-btn" @click="coverFn('03')">审批</el-button>
      <el-button icon="el-icon-check-start" class="credit-btn" @click="coverFn('fqz')">发起反欺诈</el-button>
      <el-button icon="el-icon-check-spjl" class="credit-btn" @click="coverFn('spjl')">审批结论轨迹</el-button>
      <el-button icon="el-icon-check-lcgj" class="credit-btn" @click="coverFn('lcgj')">流程轨迹</el-button>
    </div>
    <!-- 弹窗 -->
    <!-- <div class="cover-view" v-show="coverShow"> -->
    <el-dialog :visible.sync="coverShow">
      <!-- 回退 -->
      <el-form v-show="showFlag=='02'" class="back-form huitui-class">
        <div class="form-title" style="position:relative;" v-show="showFlag=='02'">
          回退信息
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="back-form-li" v-show="showFlag=='02'">
          <span style="color:red;display:inline-block;width:0px;float:left;">*</span>
          <el-form-item label="回退节点: ">
            <el-select v-model="rollbackNodeName">
              <!-- 初审只能回退到  申请登记 -->
              <!-- <el-option label="申请登记" value="creditApp_apply"></el-option>
              options -->
              <el-option v-for="item in options" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <!-- 回退主原因输入 02 -->
          <!-- 拒绝主原因选择 01 -->
          <span style="color:red;display:inline-block;width:0px;float:left;position: relative;left:15px;">*</span>
          <el-form-item label="主原因：" class="item-column2" v-show="showFlag=='02'">
            <!-- <el-input v-model="mainReason"></el-input> -->
            <!-- 改成后台获取   filter-method     visible-change 下拉框 出现/隐藏时触发-->
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- 拒绝主原因选择 01 -->
          <el-form-item label="主原因：" class="item-column2" v-show="showFlag=='01' || showFlag=='07'">
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- secondeReasons -->
          <!-- <span style="color:red;display:inline-block;width:0px;float:left;">*</span> -->
          <el-form-item label="子原因：" class="item-column2">
            <el-select v-model="secondaryReason">
              <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;">*</span>
          <el-form-item label="原因说明：">
            <!--             <span style="color:red;display:inline-block;width:0px;float:right;margin-right: 25px;">*</span> -->
            <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="经办人：" class="item-column2">
            <!-- 取登录用户 -->
            {{dealroperCode}}
          </el-form-item>
          <el-form-item label="经办时间：" class="item-column2">
            <!-- {{2017-12-1}} -->
            {{dealroperDate | dateFilter}}
          </el-form-item>
        </div>
        <div class="back-form-li" style="text-align:right;">
          <el-button plain @click="showFlag=0,coverShow=false;">返回</el-button>
          <!-- 回退 -->
          <el-button type="primary" v-show="showFlag=='02'" @click="submitFn('02')">提交</el-button>
        </div>
      </el-form>
      <!-- 拒绝 -->
      <el-form v-show="showFlag=='01'" class="back-form jujue-class">
        <div class="form-title" style="position:relative;" v-show="showFlag=='01'">
          拒绝原因
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="back-form-li">
          <!-- 回退主原因输入 02 -->
          <!-- 拒绝主原因选择 01 -->
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:10px;">*</span>
          <el-form-item label="主原因：" class="item-column2" v-show="showFlag=='02'">
            <!-- <el-input v-model="mainReason"></el-input> -->
            <!-- 改成后台获取   filter-method     visible-change 下拉框 出现/隐藏时触发-->
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- 拒绝主原因选择 01 -->
          <el-form-item label="主原因：" class="item-column2" v-show="showFlag=='01' || showFlag=='07'">
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- secondeReasons -->
          <!-- <span style="color:red;display:inline-block;width:0px;float:left;">*</span> -->
          <el-form-item label="子原因：" class="item-column2">
            <el-select v-model="secondaryReason">
              <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;">*</span>
          <el-form-item label="原因说明：">
            <!--             <span style="color:red;display:inline-block;width:0px;float:right;margin-right: 25px;">*</span> -->
            <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="经办人：" class="item-column2">
            <!-- 取登录用户 -->
            {{dealroperCode}}
          </el-form-item>
          <el-form-item label="经办时间：" class="item-column2">
            <!-- {{2017-12-1}} -->
            {{dealroperDate | dateFilter}}
          </el-form-item>
        </div>
        <div class="back-form-li" style="text-align:right;">
          <el-button plain @click="showFlag=0,coverShow=false;">返回</el-button>
          <!-- 拒绝 -->
          <el-button type="primary" v-show="showFlag=='01'" @click="submitFn('01')">提交</el-button>
        </div>
      </el-form>
      <!-- 放弃 -->
      <el-form v-show="showFlag=='07'" class="back-form fangqi-class">
        <div class="form-title" style="position:relative;" v-show="showFlag=='07'">
          放弃原因
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="back-form-li">
          <!-- 回退主原因输入 02 -->
          <!-- 拒绝主原因选择 01 -->
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:10px;">*</span>
          <el-form-item label="主原因：" class="item-column2" v-show="showFlag=='02'">
            <!-- <el-input v-model="mainReason"></el-input> -->
            <!-- 改成后台获取   filter-method     visible-change 下拉框 出现/隐藏时触发-->
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- 拒绝主原因选择 01 -->
          <el-form-item label="主原因：" class="item-column2" v-show="showFlag=='01' || showFlag=='07'">
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- secondeReasons -->
          <!-- <span style="color:red;display:inline-block;width:0px;float:left;">*</span> -->
          <el-form-item label="子原因：" class="item-column2">
            <el-select v-model="secondaryReason">
              <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;">*</span>
          <el-form-item label="原因说明：">
            <!--             <span style="color:red;display:inline-block;width:0px;float:right;margin-right: 25px;">*</span> -->
            <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="经办人 ：" class="item-column2">
            <!-- 取登录用户 -->
            {{dealroperCode}}
          </el-form-item>
          <el-form-item label="经办时间：" class="item-column2">
            <!-- {{2017-12-1}} -->
            {{dealroperDate | dateFilter}}
          </el-form-item>
        </div>
        <div class="back-form-li" style="text-align:right;">
          <el-button plain @click="showFlag=0,coverShow=false;">返回</el-button>
          <!-- 放弃 -->
          <el-button type="primary" v-show="showFlag=='07'" @click="submitFn('07')">提交</el-button>
        </div>
      </el-form>
      <!-- 审批 03-->
      <!-- :model="spruleForm" :rules="sprules" ref="spruleForm" -->
      <el-form class="back-form appro-form" v-show="showFlag=='03'">
        <!-- <div class="form-title" style="position:relative;" >
          审批信息
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div> -->
        <div class="form-title" style="position:relative;" v-show=" showFlag=='03'">
          审批信息
          <el-tag closable @close="coverShow=false;showFlag='';proName='';" style="position:absolute;"></el-tag>
        </div>
        <div style="padding:5px;padding-top:0;height:300px;overflow:auto;">
          <div class="form-title">
            申请信息
          </div>
          <div class="back-form-li">
            <el-form-item label="申请金额[元]：" class="item-column2">
              <!-- {{loanAmt}} -->
              {{loanAmt}}
            </el-form-item>
            <el-form-item label="申请期限[月]：" class="item-column2">
              {{loanTerm}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="申请产品：" class="item-column2">
              {{sqproName}}
            </el-form-item>
            <el-form-item label="可接受最高每期还款额[元]：" class="item-column2 line-height2">
              {{eachTermAmt}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="信用评分：" class="item-column2">
              {{creditScore}}
            </el-form-item>
            <el-form-item label="申请类型：" class="item-column2">
              {{loanType}}
            </el-form-item>
          </div>
          <div class="form-title">
            信审核实信息
          </div>
          <el-form-item label="核实可接受最高每期还款额[元]：" style="width:300px;margin-bottom:10px;" class="item-column2 line-height2">
            {{fbalance}}
          </el-form-item>
          <div class="form-title">
            审批信息
          </div>
          <div class="back-form-li radio-li">
            <el-form-item label="结论：">
              <!-- <el-radio-group v-model="applyConclusion"> -->
              <el-radio label="00" v-model="applyConclusion">同意</el-radio>
              <el-radio label="03" v-model="applyConclusion" v-show="judgeFlag=='02'">请求更高级审批</el-radio>
              <!-- </el-radio-group> -->
            </el-form-item>
          </div>
          <div class="back-form-li back-form-edit-li" style="position:relative;">
            <!-- <span style="color:red;display:inline-block;width:0px;float:left;">*</span> -->
            <!-- prop="verIncome" -->
            <!-- spruleForm. -->
            <!-- <span style="color:red;display:inline-block;width:0px;float:left;">*</span> -->
            <!-- <span class="require" style="left:150px;top:-25px;" v-show="verIncomError">* 月核实收入</span> -->
            <el-form-item label="月核实收入[元]：" class="item-column2 width-120">
              <el-input v-model="verIncome" @blur="moneyBlur(verIncome,'verIncome')"></el-input>
            </el-form-item>
            <el-form-item label="批准产品：" class="item-column2 width-110">
              <el-select @change="proSlelecChange" v-model="proName">
                <el-option v-for="item in products" :key="item.id" :label="item.proName" :value="item"></el-option>
                <!-- <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName"> -->
              </el-select>
            </el-form-item>
          </div>
          <div class="back-form-li back-form-edit-li" style="position:relative;">
            <!-- <span class="require" style="left:150px;top:-25px;" v-show="ploanTermError">* 批准期限1-12月</span> -->
            <el-form-item label="批准期限[月]：" class="item-column2 width-120">
              <el-select @change="ploanTermChange" v-model="ploanTerm">
                <el-option v-for="item in ploanTerms" :label="item.appDuration" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- <span class="require" style="left:470px;top:-25px;" v-show="ploanAmtError">* 批准金额不能大于{{minAmount}},小于{{maxAmounnt}}</span> -->
            <el-form-item label="批准金额[元]：" class="item-column2 width-110">
              <el-input v-model="ploanAmt" @blur="moneyBlur(ploanAmt,'ploanAmt')"></el-input>
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="审批倍数：" class="item-column2 width-120">
              {{caculData.appmult}}
            </el-form-item>
            <el-form-item label="月还款额[元]：" class="item-column2 width-120">
              {{caculData.eachTermamt}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="内部负债率：" class="item-column2">
              {{caculData.inteDebitrate}}
            </el-form-item>
            <el-form-item label="总信用负债率：">
              {{caculData.creditDebitRate}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="总负债率：">
              {{caculData.totalRate}}
            </el-form-item>
          </div>
          <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
            <el-form-item label="意见说明：">
              <el-input type="textarea" resize="none" :rows="3" v-model="appConclusion"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button plain @click="showFlag=0,coverShow=false;">返回</el-button>
          <el-button type="primary" v-show="showFlag=='03'" @click="submitFn('03')">提交</el-button>
        </div>
      </el-form>
      <!-- 反欺诈 -->
      <!-- <div v-show="showFlag=='fqz'"></div> -->
      <!-- 反欺诈显示 -->
      <!-- 审批结论轨迹 -->
      <div v-show=" showFlag=='spjl'" class="spjl-div">
        <div class="form-title" style="position:relative;">
          信审审批结论轨迹
          <!-- <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag> -->
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <el-table :data="tableData.recordList" height="280" border style="width: 100%" highlight-current-row v-loading="loading">
          <el-table-column prop="verIncome" label="核实收入[元]" min-width="100">
          </el-table-column>
          <el-table-column prop="proCode" label="批准产品" min-width="80">
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
        <!-- 分页 -->
        <div class="block tool-bar" v-show="tableData.totalRecord > pageSize">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord">
          </el-pagination>
        </div>
      </div>
      <!-- 流程轨迹 -->
      <div v-show=" showFlag=='lcgj'" class="lcgj-div">
        <div class="form-title" style="position:relative;">
          流程轨迹
          <el-tag closable @close="coverShow=false;showFlag='';" style="position:absolute;"></el-tag>
        </div>
        <div class="xllcgj-div">
          <!-- <div class="form-title2" style="position:relative;">
            信审流程轨迹
          </div> -->
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
            <el-table-column prop="opinionExplain" label="意见说明" min-width="100" show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
        <!-- 反欺诈流程 -->
        <!-- <div>
          <div style="position:relative;">
            反欺诈流程
          </div>
          <el-table :data="tableData" height="250" border style="width: 100%" @row-dblclick="itemDbclick" @cell-mouse-enter="cellHover">
            <el-table-column prop="verIncome" label="任务节点">
            </el-table-column>
            <el-table-column prop="proCode" label="任务类型">
            </el-table-column>
            <el-table-column prop="ploanAmt" label="进入本环节时间">
            </el-table-column>
            <el-table-column prop="ploanTerm" label="任务状态">
            </el-table-column>
            <el-table-column prop="appmult" label="处理人">
            </el-table-column>
            <el-table-column prop="eachTermamt" label="处理时间">
            </el-table-column>
            <el-table-column prop="inteDebitrate" label="处理结论">
            </el-table-column>
            <el-table-column prop="address" label="意见说明">
            </el-table-column>
          </el-table>
        </div> -->
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button plain @click="showFlag=0,coverShow=false;">返回</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- </div> -->
    <!-- <el-alert title=warnMsg type="warning" v-show="warnShow"> -->
    <!-- </el-alert> -->
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      // 挂起
      coverShow: false, // 弹窗
      showFlag: 0, // 要显示的 模块,默认给0
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
      currentPage: 0,
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
      proCode: '', // 批准产品 产品编号
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
      // warnShow: '', // 警告 弹窗/
      // warnMsg: '' // 警告文字
      spjlData: [], // 审批结论轨迹数据
      lcgjData: [], // 流程轨迹 lcgjData
      products: [], // 审批产品
      baseProName: '', // 详情带过了的 产品名称
      // 审批结论轨迹
      pageNum: 1,
      pageSize: 5,
      loading: false, // 加载  审批结论轨迹
      mainId: '', // 主原因 id
      mainReasonTitle: '', // 主原因 title
      applicationInformationDetail: '', // 申请详情传过来的数据
      taskInWaitting: '', // 
      userInfo: '', // 登录信息
      // 审批
      loanAmt: '', // 批准金额
      loanTerm: '', // 申请期限
      sqproName: '', // 申请信息-申请产品
      eachTermAmt: '', // 可接受最高每期还款额
      loanType: '', // 申请类型
      // 审批同意
      applyConclusion: '00', // 审批同意
      verIncome: '', // 核实收入
      // proCode:'', // 产品编号
      // proId: '', // 产品id
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
      caculData: '', // 审批结论数据
      appConclusion: '', // 审批结论内容
      lcgjLoading: '', // 流程轨迹
      userName: '', // 审批人
      proName: '', // 产品名称
      applySubNo: '', // 进件编号
      appTypeTxt: '', // 申请类型
      certTypeTxt: '', // 证件类型
      sproId: '', // 审批 proId
      quotaData: '', // 评分 月还款额
      creditScore: '', // 单独处理的评分
      fbalance: '', // 核实每月可接受最高还款额
      // 表单必填
      spruleForm: { verIncome: '', ploanTerm: '', ploanAmt: '' },
      sprules: {
        verIncome: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '', trigger: 'blur' }
        ],
        ploanTerm: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '', trigger: 'blur' }
        ],
        ploanAmt: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '', trigger: 'blur' }
        ]
      },
      // 弹窗显示
      dialogFormVisible: false,
      verIncomError: false, // 审批 - 月核实收入错误
      ploanAmtError: false, // 审批 - 批准金额
      ploanTermError: false, // 批准期限 
      ploanTerms: [], // 审批 - 返回的批准期限集合
      ploanTermItem: '', // 审批 - 批准期限item
      synthesisRateM: '', // 审批 - 计算审批结论数据 - 综合费率
      loanRateYr: '', // 审批 - 计算审批结论数据 - 借款利率
      maxAmounnt: 0, // 产品最大金额
      minAmount: 0, // 产品最小金额
      verIncome2: 0, // 
      judgeFlag: '', // 初审/终审标志  
      approvalFlag: '0',
      auditFlag: '0',
      verIncome2: 0, // 处理的金额
      ploanAmt2: 0, // 批准的金额
      options: [], // 回退节点的数组
    }
  },
  mounted() {
    // 页面创建的时候  找数据 
    // 这里的数据是 申请信息 中存到本地的信息
    // var taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
    // 取出存在本地当然 userInfo 
    this.judgeFlag = JSON.parse(localStorage.getItem('judge')).flag;
    if (this.judgeFlag == '01') { // 初审 任务 id  taskId
      this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
      // 挂起 任务id
      this.taskId = this.taskInWaitting.taskId;
    } else if (this.judgeFlag == '02') { // 终审取终审  taskId
      this.FtaskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));
      // 挂起 任务id
      this.taskId = this.FtaskInWaitting.taskId;
    }
    console.log(this.taskId);


    // 回退 拒绝  审批
    // 经办人 登录用户名
    this.userInfo = JSON.parse(localStorage.getItem('userInf'));
    this.dealroperCode = this.userInfo.userCode;
    // this.dealroperCode = userInfo.userCode;
    console.log(this.dealroperCode);
    // 经办时间
    // this.dealroperDate =
    //   new Date().toLocaleString()
    //   .replace(/\//g, '-')
    //   .match(/\d{4}\-\d{2}\-\d{1,2}/)[0]
    // console.log(this.dealroperDate);


    // applyId
    // this.applyId = '00542';
    // this.applyId = '00542';

    this.applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
    this.applyId = this.applicationInformationDetail.applyId;
    console.log(this.applyId);
    this.appOrgId = this.applicationInformationDetail.appOrgId;
    console.log(this.appOrgId);
    // 客户编号
    this.custNo = this.applicationInformationDetail.custNo;


    // 显示
    // 审批人
    this.userName = this.userInfo.userName;
    // 申请类型
    this.appTypeTxt = this.applicationInformationDetail.appTypeTxt;
    // 进件编号
    this.applySubNo = this.applicationInformationDetail.applySubNo;
    // 证件类型
    this.certTypeTxt = this.applicationInformationDetail.certTypeTxt;
    // 证件号码
    this.certCode = this.applicationInformationDetail.certCode;
    // 产品名称
    // this.proName = this.applicationInformationDetail.proName;
    // 申请期限 
    this.loanTerm = this.applicationInformationDetail.loanTerm;

    this.sproId = this.applicationInformationDetail.proId;

    // 申请信息 带过来的 产品名称
    this.baseProName = this.applicationInformationDetail.proName;


    // 初审 / 终审
    this.judgeFlag = JSON.parse(localStorage.getItem('judge')).flag;
    //  this.opinionFlag  初审终审标志  
    if (this.judgeFlag == '01') {
      this.opinionFlag = '00';
      this.options = [{
        "label": "申请登记",
        "value": "creditApp_apply"
      }]
    } else if (this.judgeFlag == '02') {
      this.opinionFlag = '01'; // 终审
      this.options = [{
          "label": "申请登记",
          "value": "creditApp_apply"
        },
        {
          "label": "初审审批",
          "value": "creditApp_firstTrial"
        }
      ]
    } else if (this.judgeFlag == '03') {

    } else if (this.judgeFlag == '04') { // 主管
      this.options = [{
        "label": "反欺诈专员审批",
        "value": "antiFraudApp_commissioner"
      }, ]
    }



  },
  methods: {
    // open 打开 自定义 弹窗   挂起
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [
          h('span', null, '确定操作? '),
          // h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            console.log(this.taskId)
            // 点击 确认 提交 方法
            this.post("/creauditInfo/approveHang ", {
              taskId: this.taskId
            }).then(res => {
              console.log(res);
              console.log(res.statusCode);
              if (res.statusCode == '200') {
                done();
              } else {
                this.$message(res.msg);
                instance.confirmButtonText = '';
              }
              instance.confirmButtonLoading = false;
            });
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: 'success',
          message: '挂起成功'
        });
        this.$router.push('/taskInWaitting');
      });
    },
    coverFn(flag) {
      // 页面点击按钮出现 的 对应 弹窗
      // 统一处理    回退 02 拒绝 01 放弃  07 审批 03 审批结论 spjl 流程轨迹 lcgj
      this.coverShow = true;
      switch (flag) {
        case '02':
          console.log('020202020202020202')
          console.log(this.showFlag);
          this.showFlag = '02';
          // 获取系统时间
          this.get('system/getSystemDate').then(res => {
            console.log('回退', res)
            // 请求系统时间
            this.dealroperDate = res.data;
            console.log('this.', this.dealroperDate);
          })
          break;
        case '01':
          console.log('01010101010101')
          this.showFlag = '01';
          this.get('system/getSystemDate').then(res => {
            console.log(res)
            // 请求系统时间
            this.dealroperDate = res.data;
          })
          break;
        case '07':
          console.log('070707007')
          this.showFlag = '07';
          this.get('system/getSystemDate').then(res => {
            console.log(res)
            // 请求系统时间
            this.dealroperDate = res.data;
          })
          break;
        case '03':
          console.log('030303003030300330')
          this.showFlag = '03';
          // this.get('system/getSystemDate').then(res => {})
          // console.log(res)
          // 请求系统时间
          // this.dealroperDate = res.data;
          // 请求存到本地的数据
          // 申请金额
          this.loanAmt = this.applicationInformationDetail.loanAmt;
          // 申请期限
          // this.loanTerm = this.applicationInformationDetail.loanTerm;
          // 申请信息-申请产品
          this.sqproName = this.applicationInformationDetail.proName;
          // 可接受最高每期还款额
          this.eachTermAmt = this.applicationInformationDetail.eachTermAmt;
          // 申请类型/借款类型
          this.loanType = this.applicationInformationDetail.loanTypeTxt;
          console.log(this.proId)
          console.log('++++++++++++++++++++++++++++++')


          if (this.judgeFlag == '01') {
            // 信用评分  核实可接受最高还款额
            this.post('/credit/quotaScoring', {
              applyId: this.applyId,
              proId: this.sproId,
              appOrgId: this.appOrgId
            }).then(res => {
              console.log(res);
              if (res.statusCode == '200') {
                this.quotaData = res.data;
                // 单独处理 评分   =>  "评分:51.6"
                console.log(res.data.creditScore);
                this.creditScore = res.data.creditScore.split(',')[0].substr(3, 4);
                console.log(this.creditScore);
                this.fbalance = res.data.fbalance;
                console.log(this.fbalance);
              }
            })
            /* 请求 
              产品
            */
            // 产品
            this.get('/credit/product').then(res => {
              console.log(res);
              if (res.statusCode == '200') {
                // 假如没有  核实可接受最高每期还款额 
                // if(res.)  提交的时候也要判断
                // this.$message("提示：请完善信审表中可承受的月还款金额");
                this.products = res.data;
              }
            })
          } else if (this.judgeFlag == '02') { // 终审
            this.post('/creauditOpinion/queryCreauditOpinionObj', {
              applyId: this.applyId
            }).then(res => {
              if (this.statusCode == '200') {
                // applyId: this.applyId,
                // auditType: '00',
                this.proCode = res.data.proCode;
                this.verIncome2 = res.data.verIncome;
                this.ploanAmt2 = res.data.ploanAmt;
                this.caculData.ploanTerm = res.data.ploanTerm; //批准期限
                this.caculData.appmult = res.data.appmult; // 审批倍数
                this.caculData.eachTermamt = res.data.eachTermamt; //每期还款额[元]
                this.caculData.inteDebitrate = res.data.inteDebitrate; //内部负债率
                this.caculData.totalRate = res.data.totalRate; // 总负债率
                this.appConclusion = res.data.appConclusion;
                this.appOrgId = res.data.appOrgId; //进件机构ID
                this.custNo = res.data.custNo; //客户编号
                this.applyConclusion = res.data.applyConclusion;
                this.srcPloanAmt = res.data.srcPloanAmt; // 信审批准额度
                this.creditDebitRate = res.data.creditDebitRate; // 信用负债率
                this.proId = res.data.proId; //产品id
                this.taskId = res.data.taskId; // 任务id
                // opinionFlag: this.opinionFlag, // 任务类型  初审 00 
              }
            })
          }
          break;

        case 'fqz':
          console.log('点击发起反欺诈');
          // console.log(this.showFqz);
          // this.showFqz = true;
          console.log(this.showFqz);
          this.showFlag = 'fqz';
          // 查询反欺诈信息
          this.$router.push('AntiApplyEdit')
          break;
        case 'spjl':
          console.log('spspspspsppspspspspsp')
          this.showFlag = 'spjl';
          this.getSpjlList();
          break;
        case 'lcgj':
          console.log('lclclcllclclclclcllclcl')
          this.showFlag = 'lcgj';
          // 取本地的 流程模版id
          this.processTemplateId = JSON.parse(localStorage.getItem('workbenchPass')).processTemplateId;
          console.log(this.processTemplateId);
          // 任务状态
          this.taskStatus = JSON.parse(localStorage.getItem('workbenchPass')).taskStatus;
          this.lcgjLoading = true;
          this.getLcgjList();

          break;
      }
    },
    submitFn(flag) {
      console.log(flag)
      // 手动赋值  经办人
      this.dealroperCode = this.dealroperCode;
      switch (flag) {
        case '01':
          console.log("拒绝");
          // 必填校验
          // 主原因
          if (!this.mainReason) {
            this.$message({
              message: '提示：请选择主原因!',
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
          // this.mainReason = this.mainReason; // 主原因同理
          this.creauditAppOperate = 'check_Refuse';
          // this.taskId = '180074';
          this.approvalFn();
          break;
        case '02':
          console.log("回退");
          // 进行必填校验
          // 回退节点
          if (this.rollbackNodeName.length == 0) {
            this.$message({
              message: "提示：请选择回退节点!",
              type: 'warning'
            });
            return;
          }
          // 主原因
          if (!this.mainReason) {
            this.$message({
              message: "提示：请选择主原因!",
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
          this.rollbackNodeName = this.rollbackNodeName;
          // this.mainReason = this.mainReason; // 主原因同理
          this.creauditAppOperate = 'check_Back';
          // this.taskId = '180049';

          this.approvalFn();
          break;

        case '07':
          console.log("放弃");
          // 主原因
          if (!this.mainReason) {
            this.$message({
              message: "提示：请选择主原因!",
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
          // 放弃测试数据
          // this.taskId = '177524';
          this.creauditAppOperate = 'check_Abandon';
          this.approvalFn();
          break;
        case '03':
          console.log("审批");
          // 校验必填项
          // 假如没有  核实可接受最高每期还款额 , 提示
          console.log(this.quotaData.fbalance);
          if (!this.quotaData.fbalance) {
            this.$message({
              message: "提示：请完善信审表中可承受的月还款金额",
              type: 'warning'
            });
            return;
          }
          // 月核实收入
          if (!this.verIncome) {
            this.$message({
              message: "提示：请填月核实收入!",
              type: 'warning'
            });
            this.verIncomError = true;
            return;
          }
          // 批准产品 id
          if (!this.proId) {
            this.$message({
              message: "提示：请选择批准产品!",
              type: 'warning'
            });
            return;
          }
          // 批准期限
          if (!this.ploanTerm) {
            this.$message({
              message: "提示：请选择批准期限!",
              type: 'warning'
            });
            this.ploanTermError = true;
            return;
          }
          // 批准金额 ploanAmt
          if (!this.ploanAmt) {
            this.$message({
              message: "提示：请填写批准金额!",
              type: 'warning'
            })
            this.ploanAmtError = true;
            return;
          }
          // 意见说明 appConclusion
          if (!this.appConclusion) {
            this.$message({
              message: "提示：请填写意见说明!",
              type: 'warning'
            })
            return;
          }
          this.coverShow = false;
          this.showFlag = 0;
          // this.taskId = '182525';
          this.opinionFlag = '00';
          // 保存审批信息
          this.saveCreaduit();
          break;
      }
    },
    // 回退/拒绝/放弃
    approvalFn() {
      // 判断终审的 opinionFlag 
      console.log(this.opinionFlag)
      // 点击 确认 提交 方法
      this.post("/creauditInfo/approval", {
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
        console.log(res);
        console.log(this);

        if (res.statusCode != '200') {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
          return;
        }
        if (res.statusCode == '200') {
          // this.taskId = '';
          this.custName = ''; // 客户名称
          this.custNo = ''; // 客户code
          this.certType = ''; // 证件类型
          this.certCode = ''; // 证件号码
          this.emerType = ''; // 紧急程度
          this.appOrgCode = ''; // 门店代码
          // this.proName = ''; // 产品名称
          this.proCode = ''; //  产品代码
          this.proId = ''; // 产品id
          this.opinionFlag = ''; // 标志任务类型
          this.mainReason = ''; // 回退主原因
          this.secondaryReason = ''; // 回退子原因
          this.reasonRemark = ''; // 意见描述/原因说明
          this.appOrgId = ''; // 进件机构id
          // this.applyId = ''; // 申请单id
          this.rollbackNodeName = ''; // 回退节点名称
          this.dealroperDate = ''; // 经办时间
          this.creauditAppOperate = ''; // 操作类型

          this.$message({
            message: res.msg,
            type: 'success'
          })

          this.$router.push('/taskInWaitting');
        }
      });
    },
    // 保存审批信息
    saveCreaduit() {
      console.log("保存审批信息");

      let verIncome2 = 0;
      let ploanAmt2 = 0;
      if (/,/.test(this.verIncome))
        verIncome2 = Number(this.verIncome.replace(/,/g, ''));
      else
        verIncome2 = Number(this.verIncome);
      if (/,/.test(this.ploanAmt)) {
        console.log('-------------------------------------------------')
        ploanAmt2 = Number(this.ploanAmt.replace(/,/g, ''));
      } else {
        console.log('==========================================')
        ploanAmt2 = Number(this.ploanAmt)
      }
      this.post('/creauditOpinion/add', {
        applyId: this.applyId,
        auditType: '00',
        proCode: this.proCode,
        verIncome: verIncome2,
        ploanAmt: ploanAmt2,
        ploanTerm: this.caculData.ploanTerm, //批准期限
        appmult: this.caculData.appmult, // 审批倍数
        eachTermamt: this.caculData.eachTermamt, //每期还款额[元]
        inteDebitrate: this.caculData.inteDebitrate, //内部负债率
        totalRate: this.caculData.totalRate, // 总负债率
        appConclusion: this.appConclusion,
        newOldMainnos: '', //借新还旧进件编号集合
        applyMainNo: '', //主进件编号
        applySubNo: '', //从进件编号
        appOrgId: this.appOrgId, //进件机构ID
        appOrgCode: '', //进件机构代码
        applyType: '', //申请类型[“00”:”非循环贷”,”01”:”循环贷(借新还旧)”,”02”:”循环贷(非借新还旧)”]
        custId: '', //客户ID
        custNo: this.custNo, //客户编号
        applyCustId: '', //申请客户ID（申请登记-个人信息）
        applyConclusion: this.applyConclusion,
        ploanOperId: '', // 批准人员
        srcPloanAmt: this.srcPloanAmt, // 信审批准额度
        creditDebitRate: this.creditDebitRate, // 信用负债率
        approvalFlag: this.approvalFlag, // 终审通过标志  0 未
        ploanDate: '', // 批准日期
        auditDate: '', // 批准时间
        auditFlag: this.auditFlag, // 终审结束标识 0 初审 1终审 , 只有 终审 点审批的时候 才变为1 , 同 approvalFlag 字段
        proId: this.proId, //产品id
        taskId: this.taskId, // 任务id
        opinionFlag: this.opinionFlag, // 任务类型  初审 00 
      }).then(res => {
        console.log(res);
        if (res.statusCode != '200') {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
          return;
        }
        if (res.statusCode == '200') {

          this.$message({
            message: res.msg,
            type: 'success'
          })

          // applyId: this.applyId,
          // auditType: '00',
          // proCode: this.proCode,
          this.verIncome = ''; // 核实收入
          this.ploanAmt = ''; // 批准金额
          // ploanTerm: this.caculData.ploanTerm, //批准期限
          // appmult: this.caculData.appmult, // 审批倍数
          // eachTermamt: this.caculData.eachTermamt, //每期还款额[元]
          // inteDebitrate: this.caculData.inteDebitrate, //内部负债率
          // totalRate: this.caculData.totalRate, // 总负债率
          this.appConclusion = ''; //审批结论内容（文本框）
          // newOldMainnos: '', //借新还旧进件编号集合
          // applyMainNo: '', //主进件编号
          // applySubNo: '', //从进件编号
          // appOrgId: this.appOrgId, //进件机构ID
          // appOrgCode: '', //进件机构代码
          // applyType: '', //申请类型[“00”:”非循环贷”,”01”:”循环贷(借新还旧)”,”02”:”循环贷(非借新还旧)”]
          // custId: '', //客户ID
          // custNo: this.custNo, //客户编号
          // applyCustId: '', //申请客户ID（申请登记-个人信息）
          // applyConclusion: '00',
          // ploanOperId: '', // 批准人员
          this.srcPloanAmt = ''; // 信审批准额度
          this.creditDebitRate = ''; // 信用负债率
          // approvalFlag: '0', // 终审通过标志
          // ploanDate: '', // 批准日期
          // auditDate: '', // 批准时间
          // auditFlag: '', // 终审结束标识 0 初审 1终审
          // proId: this.proId, //产品id
          // taskId: this.taskId, // 任务id
          if (this.judgeFlag == '01') {// 初审 
            this.$router.push('/taskInWaitting');
          } else if (this.judgeFlag == '02') {// 终审
            this.$router.push('/FtaskInWaitting');
          }

        }
      })
    },
    // 获取主次原因
    getReason(flag, type) {
      console.log('获取主次原因');
      // flag 标志是 主/次   main/second
      // type 标志原因类型   02 回退  01 拒绝
      console.log(type);
      if (type == '02') {
        // 回退
        this.reasonType = '01';
      } else if (type == '01') {
        // 审批拒绝
        this.reasonType = '03';
      } else if (type == '07') {
        // 客户放弃
        this.reasonType = '05';
      }
      if (flag == 'main') {
        // 请求主原因
        this.get('/credit/firstNodeReason?reasonType=' + type).then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.mainReasons = res.data;
          }
        })
      } else if (flag == 'second') {
        console.log(this.mainReasonName);
        // 请求子原因
        this.get('/credit/findNodeFirstChildren?id=' + this.mainId).then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.secondeReasons = res.data;
          }
        })
      }
    },
    itemDbclick(row, event) {
      // 行被双击 事件
      console.log('row dbclick');
      console.log(row.name);
    },
    cellHover(row, column, cell, event) {
      // cell hover 事件
      console.log(row);
      console.log(column);
      console.log(event);
      console.log(cell.innerText); // 备注
      console.log(column.label);
      // this.tableData[]
    },
    handleSizeChange(val) {
      console.log("每页 ${val}条", val);
      this.pageSize = val;
      this.getSpjlList();
    },
    handleCurrentChange(val) {
      console.log("当前页: ${val}", val);
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
        console.log('审批结论轨迹');
        console.log(res);
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
      // this.post('/creauditInfo/approvalTrajectory', {
      //   processTemplateId: this.processTemplateId,
      //   taskStatus: this.taskStatus
      // }).then(res => {
      //   console.log(res);
      //   if (res.statusCode == '200') {
      //     this.lcgjLoading = false;
      //     this.lcgjData = res.data;
      //   } else {
      //     this.$message(res.msg);
      //   }
      // })

      this.get('/creauditInfo/getProcessTraceList?processInstanceId=' + this.processTemplateId)
        .then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.lcgjLoading = false;
            this.lcgjData = res.data;
          } else {
            this.$message(res.msg);
          }
        })


    },
    // 回退/拒绝 主原因 select - change
    selectChange: function(val) {
      console.log(val)
      console.log('回退/拒绝主原因  select - change')
      var id = val.id; // 主原因的 id
      // this.reasonName = val.reasonName;
      this.mainReason = val.reasonName;
      this.mainId = val.id;
      // 在主原因改变的时候请求子原因
      this.getReason('second', this.mainId);
    },
    // 批准产品 更改
    proSlelecChange: function(val) {
      console.log(val);
      // id val.id  产品id
      this.proId = val.id;
      console.log('=========================')
      console.log(this.proId);
      console.log('=========================')
      // proCode  产品code
      this.proCode = val.proCode;
      console.log(this.proCode);
      this.proName = val.proName;
      // 最大金额
      this.maxAmounnt = val.maxAmounnt;
      // 最小金额
      this.minAmount = val.minAmount;
      console.log('批准产品更改');
      this.get('/credit/ploanTermByPro?proId=' + this.proId).then(res => {
        console.log(res.data);
        if (res.statusCode == '200')
          this.ploanTerms = res.data;
      })

    },
    // 批准期限更改
    ploanTermChange: function(val) {
      console.log('批准期限更改!');
      // 批准期限
      this.ploanTerm = val.appDuration;
      // 综合费率
      this.synthesisRateM = val.synthesisRateM;
      // 借款利率
      this.loanRateYr = val.loanRateYr;
    },
    // 计算审批结论数据
    calculateByAuditInfo: function() {
      console.log('计算审批结论数据')
      // let this.ploanAmt2 = 0;
      // let this.verIncome2 = 0;
      // if (/,/.test(this.verIncome))
      //   this.verIncome2 = Number(this.verIncome.replace(/,/g, ''));
      // else
      //   this.verIncome2 = Number(this.verIncome);
      // if (/,/.test(this.ploanAmt)) {
      //   console.log('-------------------------------------------------')
      //   this.ploanAmt2 = Number(this.ploanAmt.replace(/,/g, ''));
      // } else {
      //   console.log('==========================================')
      //   this.ploanAmt2 = Number(this.ploanAmt)
      // }

      // // 大于最大
      // if (this.ploanAmt2 > this.maxAmounnt) {
      //   // this.ploanAmtError = true;
      //   this.$message({
      //     showClose: true,
      //     message: '批准金额不能大于产品最高上限' + this.maxAmounnt + '元',
      //     type: 'warning'
      //   });
      //   this.ploanAmt = '';
      //   return;
      // }
      // // 小于最小
      // if (this.ploanAmt2 < this.minAmount) {
      //   // this.ploanAmtError = true;
      //   this.$message({
      //     showClose: true,
      //     message: '批准金额不能小于产品最低下限' + this.minAmount + '元',
      //     type: 'warning'
      //   });
      //   this.ploanAmt = '';
      //   return;
      // }
      // // 大于申请金额
      // if (this.ploanAmt2 > this.loanAmt) {
      //   // this.ploanAmtError = true;
      //   this.$message({
      //     showClose: true,
      //     message: '此金额不能大于申请金额,请重新输入!',
      //     type: 'warning'
      //   });
      //   this.ploanAmt = '';
      //   return;
      // }


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
        if (res.statusCode == '200')
          this.caculData = res.data;
      })
    },
    // 月核实收入[元]
    moneyBlur: function(val, flag) {
      // 无数据
      if (!val) {
        if (flag == 'verIncome') {
          this.verIncome = '';
        } else if (flag == 'ploanAmt') {

          this.ploanAmt = ''
        }
      }

      // 有数据
      if (val) {
        this.ploanAmt2 = 0;
        this.verIncome2 = 0;
        if (/,/.test(this.verIncome))
          this.verIncome2 = Number(this.verIncome.replace(/,/g, ''));
        else
          this.verIncome2 = Number(this.verIncome);
        if (/,/.test(this.ploanAmt)) {
          console.log('-------------------------------------------------')
          this.ploanAmt2 = Number(this.ploanAmt.replace(/,/g, ''));
        } else {
          console.log('==========================================')
          this.ploanAmt2 = Number(this.ploanAmt)
        }

        // 大于最大
        if (this.ploanAmt2 > this.maxAmounnt) {
          // this.ploanAmtError = true;
          this.$message({
            showClose: true,
            message: '批准金额不能大于产品最高上限' + this.maxAmounnt + '元',
            type: 'warning'
          });
          this.ploanAmt = '';
          return;
        }
        // 小于最小
        if (this.ploanAmt2 < this.minAmount) {
          // this.ploanAmtError = true;
          this.$message({
            showClose: true,
            message: '批准金额不能小于产品最低下限' + this.minAmount + '元',
            type: 'warning'
          });
          this.ploanAmt = '';
          return;
        }
        // 大于申请金额
        if (this.ploanAmt2 > this.loanAmt) {
          // this.ploanAmtError = true;
          this.$message({
            showClose: true,
            message: '此金额不能大于申请金额,请重新输入!',
            type: 'warning'
          });
          this.ploanAmt = '';
          return;
        }



        val = val.split('.')[0].replace(/,/, '')
        if (/^[0-9]+$/g.test(Number(val))) {
          console.log(Number(val).toLocaleString() + '.00')
          if (flag == "verIncome") {
            this.verIncome = Number(val).toLocaleString() + '.00'
          }
          if (flag == "ploanAmt") {
            this.ploanAmt = Number(val).toLocaleString() + '.00'
          }



          // return Number(val).toLocaleString() + '.00';
          // 检测 数据 并 请求计算接口
          console.log("计算审批结论数据计算审批结论数据计算审批结论数据计算审批结论数据")
          console.log(this.proId, this.ploanTerm, this.ploanAmt, this.verIncome, this.eachTermamt);
          console.log(this.proId.length, this.ploanTerm.length, this.ploanAmt.length, this.verIncome.length, this.eachTermamt.length);

          // if (this.proId.length > 0 && this.ploanTerm.length > 0 && this.ploanAmt.length > 0 && this.verIncome.length > 0 && this.eachTermamt.length > 0) {
          if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0) {
            this.calculateByAuditInfo();
          }
        } else {
          console.log('错误提示')
          // 显示错误提示
          if (flag == "verIncome") {
            this.verIncome = '';
            this.verIncomError = true;
          } else if (flag == "ploanAmt") {
            this.ploanAmt = '';
            this.ploanAmtError = '';
          }
          return '';
        }
      }
    },
  },
  // 监听器
  watch: {
    rollbackNodeName: function(newValue) {
      console.log(this.rollbackNodeName);
      // 在回退节点改变的时候 请求主原因
      this.getReason('main', '02');
    },
    // mainReason: function(newValue) {
    //   console.log(this.mainReason.mainReasonName);
    //   // 在主原因改变的时候请求子原因
    //   this.getReason('second', this.mainReason.id);
    // },
    showFlag: function(newValue) {
      // 统一处理    回退 02 拒绝 01 放弃  07 审批 03 审批结论 spjl 流程轨迹 lcgj
      if (newValue == '01') { // 拒绝
        // 01 拒接 直接请求 主原因
        this.getReason('main', '01');
      } else if (newValue == '07') { // 审批
        // 07 拒接 直接请求 主原因
        this.getReason('main', '07');
      }
    },
    coverShow: function(value) {
      // 当 弹窗消失 ,直接清空所有数据
      if (!value) {
        // 清空数据

        // this.taskId = '';
        this.custName = ''; // 客户名称
        this.custNo = ''; // 客户code
        this.certType = ''; // 证件类型
        this.certCode = ''; // 证件号码
        this.emerType = ''; // 紧急程度
        this.appOrgCode = ''; // 门店代码
        // this.proName = ''; // 产品名称
        this.proCode = ''; //  产品代码
        this.proId = ''; // 产品id
        this.opinionFlag = ''; // 标志任务类型
        this.mainReason = ''; // 回退主原因
        this.secondaryReason = ''; // 回退子原因
        this.reasonRemark = ''; // 意见描述/原因说明
        // this.appOrgId = ''; // 进件机构id
        // this.applyId = ''; // 申请单id
        this.rollbackNodeName = ''; // 回退节点名称
        this.dealroperDate = ''; // 经办时间
        this.creauditAppOperate = ''; // 操作类型
      }
    },
    // 监听 输入请求
    // 月核实收入
    // verIncome: function() {
    //   console.log('月核实收入');
    //   // 计算 审批记录数据

    //   if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0)
    //     this.calculateByAuditInfo();
    // },
    // 批准期限
    ploanTerm: function() {
      console.log('批准期限');
      console.log(this.ploanTerm);
      // 计算 审批记录数据
      if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0)
        this.calculateByAuditInfo();
    },
    // // // 批准金额
    // ploanAmt: function() {
    //   console.log('批准金额');
    //   console.log(this.verIncome, this.proId, this.ploanTerm, this.ploanAmt);
    //   console.log(this.verIncome.length, this.proId.length, this.ploanTerm, this.ploanAmt.length);
    //   console.log(typeof this.ploanTerm)
    //   // 计算 审批记录数据
    //   if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0) {
    //     this.calculateByAuditInfo();
    //   }
    // },
    // 产品 id
    proId: function() {
      console.log('产品id');
      if (this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.verIncome.length > 0 && this.eachTermamt.length > 0)
        this.calculateByAuditInfo();
    }
  }
}

</script>
<style>
.creditApproval-class .address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  /*font-weight: bold;*/
  background: #eef0f9;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  /*margin-top: 20px;*/
  overflow: hidden;
}










/* 三列 */

.creditApproval-class .item-column3 {
  width: 30%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}

.creditApproval-class .el-form-item {
  height: 35px;
  line-height: 35px;
  margin: 0;
  padding: 0;
}










/* 按钮集合控件 */

.creditApproval-class .btn-div {
  text-align: center;
  width: 80%;
  float: left;
}










/* 信审审批 - btn*/

.creditApproval-class .credit-btn {
  padding: 10px;
  background: none;
  color: #333;
  border: none;
}










/* 弹窗背景 */

.creditApproval-class .cover-view {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 101;


  /*position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;*/
}










/* 两列 */

.creditApproval-class .item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}










/* 回退 拒绝 放弃 表单*/

.creditApproval-class .back-form {
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

.creditApproval-class .form-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  /*font-weight: bold;*/
  /*background: #ededed;*/
  background: #eef0f9;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 16px;
}

.creditApproval-class .form-title2 {
  width: 100%;
  height: 40px;
  font-size: 18px;
  /*font-weight: bold;*/
  /*background: #ededed;*/
  background: #eef0f9;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 16px;
}

.creditApproval-class .back-form .back-form-li {
  /*border-top: 0.5px solid #ededed;*/
  margin: 10px 0px;
  line-height: 40px;
  height: 35px;
  padding: 2px 10px 0 10px;
}










/* textarea */

.creditApproval-class .back-form .back-form-li .el-textarea {
  width: 80%;
}










/* 单独设置  label*/


/*.creditApproval-class .back-form .el-form-item__label {
  width: 80px;
}
*/


/* 弹窗页面 关闭按钮*/

.creditApproval-class .el-tag {
  width: 0;
  height: 0;
  color: none;
  border: none;
  position: absolute;
  right: 20px;
  top: 0;
}

.creditApproval-class .el-tag .el-icon-close {
  right: 0px;
  top: 5px;
}










/* 审批 表单 */

.creditApproval-class .appro-form {
  /*width: 80%;*/
  height: 600px;
  min-width: 685px;
  margin-top: 100px !important;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  overflow: hidden;
}










/*.creditApproval-class .appro-form .el-form-item__label {
  width: 220px;
}*/

.creditApproval-class .appro-form .back-form-li .el-textarea {
  width: 60%;
}










/* 审批结论轨迹 */

.creditApproval-class .spjl-div {
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

.creditApproval-class .el-table {
  font-size: 12px;
  line-height: 20px;
}










/* 分页 */

.creditApproval-class .tool-bar {
  width: 100%;
  text-align: center;
  padding: 10px 0 0 10px;
}










/* 流程轨迹 */

.creditApproval-class .lcgj-div {
  min-width: 760px;
  width: auto;
  height: 400px;
  margin: 0 auto;
  margin-top: 250px;
  overflow: hidden;

  background: #fff;
  border-radius: 5px;
  height: auto;
}


.creditApproval-class .el-input {
  width: calc( 100% - 120px);
  /*width: 100%;*/
  height: 35px;
  line-height: 35px;
}

.creditApproval-class .el-select {
  height: 100%;
  line-height: 100%;
}

.creditApproval-class .el-input--suffix .el-input__inner {
  margin: 0;
  padding: 0;
  padding-right: 30px;
  text-indent: 5px;
}










/* 申请信息 */

.creditApproval-class .info .el-form-item__content {
  line-height: 40px;
}

.creditApproval-class .info .el-form-item__label {
  width: 120px;
}










/* 报错提示 */

.creditApproval-class .el-form-item__error {
  top: -22px;
  left: 220px;
}










/* 有编辑框的 提示信息*/

.creditApproval-class .back-form .back-form-edit-li {
  margin-top: 25px !important;
}










/* icon */


/*挂起*/

.creditApproval-class .el-icon-check-hang {
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

.creditApproval-class .el-icon-check-back {
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

.creditApproval-class .el-icon-check-reject {
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

.creditApproval-class .el-icon-check-giveup {
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

.creditApproval-class .el-icon-check-appro {
  background: url(../../../static/images/appro.png);
  width: 30px;
  height: 30px;
  background-size: 30px;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-block;
}










/*发起反欺诈*/

.creditApproval-class .el-icon-check-start {
  background: url(../../../static/images/faqi.png);
  width: 30px;
  height: 30px;
  background-size: 30px;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-block;
}










/*审批结论轨迹*/

.creditApproval-class .el-icon-check-spjl {
  background: url(../../../static/images/jielun.png);
  width: 30px;
  height: 30px;
  background-size: 30px;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-block;
}










/*流程轨迹*/

.creditApproval-class .el-icon-check-lcgj {
  background: url(../../../static/images/liucheng.png);
  width: 30px;
  height: 30px;
  background-size: 30px;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-block;
}










/* 折叠面板头部背景色和icon */

.creditApproval-class .icon_hat {
  padding: 9px 10px 10px 13px;
  vertical-align: middle;
}

.creditApproval-class .headFont {
  font-size: 16px;
}










/* 信审审批  - - 弹窗*/

.creditApproval-class .el-dialog {
  width: 600px;
  margin-top: 30vh !important;
}

.creditApproval-class .el-dialog__header {
  display: none;
}

.creditApproval-class .el-dialog__body {
  padding: 0;
}










/* 信审审批  - 审批  编辑部分 */

.creditApproval-class .appro-form .back-form-edit-li .el-form-item__label {
  /*width: 120px;*/
}










/* 结论  同意 */

.creditApproval-class .appro-form .radio-li .el-form-item__label {
  /*width:120px;*/
}

.creditApproval-class .back-form .el-form-item__label {
  width: 120px;
}

.creditApproval-class .back-form .width-120 .el-form-item__label {
  width: 120px;
}

.creditApproval-class .back-form .width-110 .el-form-item__label {
  width: 110px;
}










/* 两行文字 样式 */

.creditApproval-class .back-form .line-height2 .el-form-item__label {
  line-height: 20px;
}










/* 2017-12-17 拆分表单 */

.creditApproval-class .huitui-class {}











/* label 文字样式 */

.creditApproval-class .huitui-class .el-form-item__label {
  width: 85px;
}

.creditApproval-class .jujue-class {}










/* label 文字样式 */

.creditApproval-class .jujue-class .el-form-item__label {
  width: 85px;
}

.creditApproval-class .fangqi-class {}

.creditApproval-class .fangqi-class .el-form-item__label {
  width: 85px;
}

.creditApproval-class .el-input__inner {
  height: 35px;
}

.creditApproval-class .require {
  font-size: 14px;
  color: red;
  position: absolute;
  color: red;
  font-weight: 700;
  font-size: 16px;
  vertical-align: middle;
}










/* 审批信息  */

.creditApproval-class .el-form-item__content .el-select .el-input {
  width: 100%;
}










/* 反欺诈表单 */

.creditApproval-class .anti-form {
  /*width: 80%;*/
  height: 600px;
  min-width: 685px;
  /*margin-top: 100px !important;*/
  height: 460px;
  margin: 0 auto;
  padding: 10px;
  overflow: auto;
}

</style>
