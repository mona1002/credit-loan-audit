<!-- 反欺诈  审批结论 -->
<template>
  <div class="approval-colun">
    <div class="address-title">
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">概要信息</span>
      <!-- {{title1}} -->
    </div>
    <ul>
      <li class="item-column3">
        <div class="left-title">
          审批结论：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3 item-column3-null">
        <div class="left-title"></div>
        <div class="">
        </div>
      </li>
      <li class="item-column3 item-column3-null">
        <div class="left-title"></div>
        <div class="">
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          主原因：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          子原因：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="风险拒贷[黑名单]" value="00"></el-option>
            <el-option label="风险拒贷[灰名单]" value="01"></el-option>
            <el-option label="风险排除" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">
          主/从借款人：
        </div>
        <div>
          百丽决策
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">
          风险项：
        </div>
        <div class="textarea-class2">
          <el-input v-model="issameFamtxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">反欺诈决策反馈：</div>
        <div class="textarea-class2">
          <el-input v-model="issameFamtxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column1 item-column3-2">
        <div class="left-title">案件描述：</div>
        <div class="textarea-class2">
          <el-input v-model="relBorrowertxt" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="btn-div">
      <el-button icon="el-icon-check-hang" class="credit-btn" @click="open">挂起</el-button>
      <el-button icon="el-icon-check-back" class="credit-btn" @click="coverFn('02')">回退</el-button>
      <!-- <el-button icon="el-icon-check-reject" class="credit-btn" @click="coverFn('01')">拒绝</el-button> -->
      <!-- <el-button icon="el-icon-check-giveup" class="credit-btn" @click="coverFn('07')">放弃</el-button> -->
      <el-button icon="el-icon-check-appro" class="credit-btn" @click="coverFn('03')">审批</el-button>
      <!-- <el-button icon="el-icon-check-start" class="credit-btn" @click="coverFn('fqz')">发起反欺诈</el-button> -->
      <!-- <el-button icon="el-icon-check-spjl" class="credit-btn" @click="coverFn('spjl')">审批结论轨迹</el-button> -->
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
          <el-form-item label="主原因:" class="item-column2" v-show="showFlag=='02'">
            <!-- <el-input v-model="mainReason"></el-input> -->
            <!-- 改成后台获取   filter-method     visible-change 下拉框 出现/隐藏时触发-->
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- 拒绝主原因选择 01 -->
          <el-form-item label="主原因 :" class="item-column2" v-show="showFlag=='01' || showFlag=='07'">
            <el-select @change="selectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- secondeReasons -->
          <!-- <span style="color:red;display:inline-block;width:0px;float:left;">*</span> -->
          <el-form-item label="子原因 :" class="item-column2">
            <el-select v-model="secondaryReason">
              <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
          <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;">*</span>
          <el-form-item label="原因说明 :">
            <!--             <span style="color:red;display:inline-block;width:0px;float:right;margin-right: 25px;">*</span> -->
            <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
          </el-form-item>
        </div>
        <div class="back-form-li">
          <el-form-item label="经办人 :" class="item-column2">
            <!-- 取登录用户 -->
            {{dealroperCode}}
          </el-form-item>
          <el-form-item label="经办时间 :" class="item-column2">
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
            <el-form-item label="申请金额[元] :" class="item-column2">
              <!-- {{loanAmt}} -->
              {{loanAmt}}
            </el-form-item>
            <el-form-item label="申请期限[月] :" class="item-column2">
              {{loanTerm}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="申请产品 :" class="item-column2">
              {{sqproName}}
            </el-form-item>
            <el-form-item label="可接受最高每期还款额[元] :" class="item-column2 line-height2">
              {{eachTermAmt}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="信用评分 :" class="item-column2">
              {{creditScore}}
            </el-form-item>
            <el-form-item label="申请类型 :" class="item-column2">
              {{loanType}}
            </el-form-item>
          </div>
          <div class="form-title">
            信审核实信息
          </div>
          <el-form-item label="核实可接受最高每期还款额[元] :" style="width:300px;margin-bottom:10px;" class="item-column2 line-height2">
            {{fbalance}}
          </el-form-item>
          <div class="form-title">
            审批信息
          </div>
          <div class="back-form-li radio-li">
            <el-form-item label="结论 :">
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
            <el-form-item label="月核实收入[元] :" class="item-column2 width-120">
              <el-input v-model="verIncome" @blur="moneyBlur(verIncome,'verIncome')"></el-input>
            </el-form-item>
            <el-form-item label="批准产品 :" class="item-column2 width-110">
              <el-select @change="proSlelecChange" v-model="proName">
                <el-option v-for="item in products" :key="item.id" :label="item.proName" :value="item"></el-option>
                <!-- <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName"> -->
              </el-select>
            </el-form-item>
          </div>
          <div class="back-form-li back-form-edit-li" style="position:relative;">
            <!-- <span class="require" style="left:150px;top:-25px;" v-show="ploanTermError">* 批准期限1-12月</span> -->
            <el-form-item label="批准期限[月] :" class="item-column2 width-120">
              <el-select @change="ploanTermChange" v-model="ploanTerm">
                <el-option v-for="item in ploanTerms" :label="item.appDuration" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- <span class="require" style="left:470px;top:-25px;" v-show="ploanAmtError">* 批准金额不能大于{{minAmount}},小于{{maxAmounnt}}</span> -->
            <el-form-item label="批准金额[元] :" class="item-column2 width-110">
              <el-input v-model="ploanAmt" @blur="moneyBlur(ploanAmt,'ploanAmt')"></el-input>
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="审批倍数 :" class="item-column2 width-120">
              {{caculData.appmult}}
            </el-form-item>
            <el-form-item label="月还款额[元] :" class="item-column2 width-120">
              {{caculData.eachTermamt}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="内部负债率 :" class="item-column2">
              {{caculData.inteDebitrate}}
            </el-form-item>
            <el-form-item label="总信用负债率 :">
              {{caculData.creditDebitRate}}
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="总负债率 :">
              {{caculData.totalRate}}
            </el-form-item>
          </div>
          <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
            <el-form-item label="意见说明 :">
              <el-input type="textarea" resize="none" :rows="3" v-model="appConclusion"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button plain @click="showFlag=0,coverShow=false;">返回</el-button>
          <el-button type="primary" v-show="showFlag=='03'" @click="submitFn('03')">提交</el-button>
        </div>
      </el-form>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      mainReason: '', // 主原因
      secondaryReason: '',
      reasonRemark: '',
      issameFamtxt: '', // 风险项
      relBorrowertxt: '', // 案件描述,
      rollbackNodeName: '', // 监听使用的回退节点
      options: [], // 回退节点的数组
      mainReasons:[],
      dealroperCode: '', // 经办人
      loanTerm:'',
      judgeFlag:'',
      verIncome:'',
      proName:'',
      ploanTerm:'',
      ploanTerms:'',
      ploanAmt:'',
      lcgjData:'',
      secondeReasons:'',
    }
  },
  mounted() {

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

        case '07':
          console.log('070707007')
          this.showFlag = '07';
          this.get('system/getSystemDate').then(res => {
            console.log(res)
            // 请求系统时间
            this.dealroperDate = res.data;
          })
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
  }
}

</script>
<style>
/*信审审批样式*/

.approval-colun .address-title {
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
  line-height: 30px;
  min-height: 30px;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
}









/* 3列 空位 */

.approval-colun .item-column3-null {
  min-height: 30px;
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












/*发起反欺诈*/

.approval-colun .el-icon-check-start {
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

.approval-colun .el-icon-check-spjl {
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
}

</style>
