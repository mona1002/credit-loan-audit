<!-- 信审 - 审批 -->
<template>
  <!-- <div class="creditApproval-class"> -->
  <div class="  taskWatting  creditApproval-class">
    <div class="address-title">
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">概要信息</span>
      <!-- {{title1}} -->
    </div>
    <el-form style="padding:0 20px;width:100%; height:150px; " class="info">
      <el-form-item label="客户名称：" class="item-column3">
        {{custName}}
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
      <!-- <el-button icon="el-icon-check-hang" class="credit-btn" @click="open">挂起</el-button> -->
      <el-button icon="el-icon-check-hang" class="credit-btn" @click="hangOoutBtn">挂起</el-button>
      <el-button icon="el-icon-check-back" class="credit-btn" @click="coverFn('02')">回退</el-button>
      <!-- BX20 根据角色  -->
      <el-button icon="el-icon-check-reject" class="credit-btn" v-show="judgeFlag == '01' && jujueBtnShow" @click="coverFn('01')">拒绝</el-button>
      <el-button icon="el-icon-check-reject" class="credit-btn" v-show="judgeFlag!='01'" @click="coverFn('01')">拒绝</el-button>
      <el-button icon="el-icon-check-giveup" class="credit-btn" @click="coverFn('07')">放弃</el-button>
      <el-button icon="el-icon-check-appro" class="credit-btn" @click="coverFn('03')">审批</el-button>
      <el-button icon="el-icon-check-start" class="credit-btn" @click="coverFn('fqz')">发起反欺诈</el-button>
      <el-button icon="el-icon-check-spjl" class="credit-btn" @click="coverFn('spjl')">审批结论轨迹</el-button>
      <el-button icon="el-icon-check-lcgj" class="credit-btn" @click="coverFn('lcgj')">流程轨迹</el-button>
      <el-button icon="el-icon-check-big-data" class="credit-btn" @click="tobigData">大数据风控</el-button>
      <el-button icon="el-icon-check-social" class="credit-btn" @click="roSocialSecurity">社保公积金{{social}}</el-button>
    </div>
    <!-- 回退 -->
    <!-- <div>
      <el-dialog title="回退信息" :visible.sync="huiTuiShow" :modal="false" width="600px" top="10vh">
        <el-form :model="form" :rules="rulesAdd" ref="ruleFormReturn">
          <div class="back-form-li">
            <span style="color:red;display:inline-block;width:0px;float:left;position: relative;left:-5px;font-weight:bold;">*</span>
            <el-form-item label="回退节点：" class="item-column2">
              <el-select @change="backSelectChange" v-model="rollbackNodeName">
                <el-option v-for="item in options" :label="item.label" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="item-column2"> </el-form-item>
          </div>
          <div class="back-form-li"> -->
    <!-- <span style="color:red;display:inline-block;width:0px;float:left;position: relative;left:10px;font-weight:bold;">*</span>
            <el-form-item label="主原因：" class="item-column2"> -->
    <!-- 改成后台获取   filter-method     visible-change 下拉框 出现/隐藏时触发-->
    <!-- <el-select @change="selectChange" v-model="mainReason">
                <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="子原因：" class="item-column2">
              <el-select v-model="secondaryReason">
                <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
            <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;left:-5px;font-weight:bold;">*</span>
            <el-form-item label="原因说明：">
              <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
            </el-form-item>
          </div>
          <div class="back-form-li">
            <el-form-item label="经办人：" class="item-column2">
              {{dealroperCode}}
            </el-form-item>
            <el-form-item label="经办时间：" class="item-column2">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
          <div class="back-form-li" style="text-align:right;">
            <el-button plain @click="huiTuiShow=false;">返回</el-button>
            <el-button type="primary" @click="submitFn('02')" :loading="isLoading">{{loadingTitle}}</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div> -->
    <!-- 回退弹窗 -->
    <div class="Height_240 return_back">
      <el-dialog title="回退信息" :visible.sync="huiTuiShow" :modal="false ">
        <!-- <el-form :model="formReturn" :rules="rulesReturn" ref="ruleFormReturn"> -->
        <el-form>
          <el-form-item label="回退节点：" :label-width="formLabelWidth">
            <el-select @change="backSelectChange" v-model="rollbackNodeName">
              <el-option v-for="item in options" :label="item.label" :key='item.value' :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <div class="bfc">
            <!-- 回退主原因输入 02 -->
            <!-- 拒绝主原因选择 01 -->
            <el-form-item class="fl" label="主原因：" :label-width="formLabelWidth">
              <el-select @change="selectChange" v-model="mainReason">
                <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="fr" label="子原因：" :label-width="formLabelWidth">
              <el-select v-model="secondaryReason">
                <el-option v-for="item in secondeReasons" :key="item.id" :label="item.reasonName" :value="item.reasonName">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="dialog_textarea">
            <el-form-item class="mr" label="原因说明：" :label-width="formLabelWidth">
              <el-input type="textarea" :row="2" resize="none" v-model="reasonRemark"></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth" prop="holiday">
              <!-- 取登录用户 -->
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr" label="经办时间：" :label-width="formLabelWidth" prop="holiday">
              <!-- {{2017-12-1}} -->
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="huiTuiShow=false">取 消</el-button>
          <el-button type="primary" :loading="isLoading" @click="submitFn( '02', 'ruleFormReturn') "> {{loadingTitle}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 拒绝 -->
    <!-- <div>
      <el-dialog :visible.sync="juJueShow " :modal="false ">
        <el-form class="back-form jujue-class ">
          <div class="form-title " style="position:relative; ">
            拒绝原因
            <el-tag closable @close="juJueShow=false; " style="position:absolute; "></el-tag>
          </div>
          <div class="back-form-li ">
            <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:10px;font-weight:bold; ">*</span>
            <el-form-item label="主原因： " class="item-column2 ">
              <el-select @change="selectChange " v-model="mainReason ">
                <el-option v-for="item in mainReasons " :key="item.id " :label="item.reasonName " :value="item ">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="子原因： " class="item-column2 ">
              <el-select v-model="secondaryReason ">
                <el-option v-for="item in secondeReasons " :key="item.id " :label="item.reasonName " :value="item.reasonName ">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="back-form-li " style="height:60px;line-height: 60px;padding-top:5px; ">
            <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;left:-5px;font-weight:bold; ">*</span>
            <el-form-item label="原因说明： ">
              <el-input type="textarea " :row="2 " resize="none " v-model="reasonRemark "></el-input>
            </el-form-item>
          </div>
          <div class="back-form-li ">
            <el-form-item label="经办人： " class="item-column2 ">
              {{dealroperCode}}
            </el-form-item>
            <el-form-item label="经办时间： " class="item-column2 ">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
          <div class="back-form-li " style="text-align:right; ">
            <el-button plain @click="juJueShow=false; ">返回</el-button>
            <el-button type="primary " @click="submitFn( '01') " :loading="isLoading ">{{loadingTitle}}</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div> -->
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
              <!-- {{2017-12-1}} -->
              {{dealroperDate}} {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="juJueShow=false">取 消</el-button>
          <el-button type="primary" @click="submitFn( '01') " :loading="isLoading "> {{loadingTitle}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 放弃 -->
    <!-- <div>
      <el-dialog :visible.sync="fangQiShow " :modal="false " width="600px " top="10vh ">
        <el-form class="back-form fangqi-class ">
          <div class="form-title " style="position:relative; ">
            放弃原因
            <el-tag closable @close="fangQiShow=false; " style="position:absolute; "></el-tag>
          </div>
          <div class="back-form-li ">
            <span style="color:red;display:inline-block;width:0px;float:left;position:relative;left:10px;font-weight:bold; ">*</span>
            <el-form-item label="主原因： " class="item-column2 ">
              <el-select @change="selectChange " v-model="mainReason ">
                <el-option v-for="item in mainReasons " :key="item.id " :label="item.reasonName " :value="item ">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="子原因： " class="item-column2 ">
              <el-select v-model="secondaryReason ">
                <el-option v-for="item in secondeReasons " :key="item.id " :label="item.reasonName " :value="item.reasonName ">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="back-form-li " style="height:60px;line-height: 60px;padding-top:5px; ">
            <span style="color:red;display:inline-block;width:0px;float:left;position:relative;top:-8px;left:-5px;font-weight:bold; ">*</span>
            <el-form-item label="原因说明： ">
              <el-input type="textarea " :row="2 " resize="none " v-model="reasonRemark "></el-input>
            </el-form-item>
          </div>
          <div class="back-form-li ">
            <el-form-item label="经办人 ： " class="item-column2 ">
              {{dealroperCode}}
            </el-form-item>
            <el-form-item label="经办时间： " class="item-column2 ">
              {{dealroperDate | dateFilter}}
            </el-form-item>
          </div>
          <div class="back-form-li " style="text-align:right; ">
            <el-button plain @click="fangQiShow=false; ">返回</el-button>
            <el-button type="primary " @click="submitFn( '07') " :loading="isLoading ">{{loadingTitle}}</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div> -->
    <!-- 放弃弹窗 -->
    <div class="Height_240 return_back">
      <el-dialog title="放弃原因" :visible.sync="fangQiShow" :modal="false">
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
              <el-input type="textarea " :row="2 " resize="none " v-model="reasonRemark "></el-input>
            </el-form-item>
          </div>
          <div class="bfc">
            <el-form-item class="fl" label="经办人：" :label-width="formLabelWidth">
              <!-- 取登录用户 -->
              {{dealroperCode}}
            </el-form-item>
            <el-form-item class="fr" label="经办时间：" :label-width="formLabelWidth">
              <!-- {{2017-12-1}} -->
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
    <div>
      <el-dialog title="审批信息" :visible.sync="shenPiShow " :modal="false " width="710px" height='1100px'>
        <el-form>
          <!-- <div style="padding:5px;padding-top:0;height:400px;overflow:auto; "> -->
          <div style="padding:5px;padding-top:0;overflow:auto; ">
            <el-collapse v-model="activeNames ">
              <!--   申请信息-->
              <el-collapse-item title="申请信息 " name="applyMsg " class="alert_collapse">
                <!-- <div class="back-form-li ">
                  <el-form-item label="申请金额[元]： " class="item-column2 ">
                    {{loanAmt}}
                  </el-form-item>
                  <el-form-item label="申请期限[月]： " class="item-column2 ">
                    {{loanTerm}}
                  </el-form-item>
                </div>
                <div class="back-form-li ">
                  <el-form-item label="申请产品： " class="item-column2 ">
                    {{sqproName}}
                  </el-form-item>
                  <el-form-item label="可接受最高每期还款额[元]： " class="item-column2 line-height2 ">
                    {{eachTermAmt}}
                  </el-form-item>
                </div>
                <div class="back-form-li ">
                  <el-form-item label="信用评分： " class="item-column2 ">
                    {{creditScore}}
                  </el-form-item>
                  <el-form-item label="申请类型： " class="item-column2 ">
                    {{loanType}}
                  </el-form-item>
                </div> -->
                <div class="dialog_form_auto">
                  <el-form>
                    <div class="bfc">
                      <el-form-item class="presentation" label="申请金额[元]：" :label-width="formApproLabLeft">
                        {{loanAmt}}
                      </el-form-item>
                      <el-form-item class="presentation" label="申请期限[月]：" :label-width="formApproLabelWidth">
                        {{loanTerm}}
                      </el-form-item>
                    </div>
                    <div class="bfc">
                      <el-form-item class="presentation" label="申请产品：" :label-width="formApproLabLeft">
                        {{sqproName}}
                      </el-form-item>
                      <el-form-item class="presentation" label="可接受最高每期还款额[元]：" :label-width="formApproLabelWidth">
                        {{eachTermAmt}}
                      </el-form-item>
                    </div>

                    <div class="bfc">
                      <el-form-item class="presentation" label="信用评分：" :label-width="formApproLabLeft" prop="holiday">
                        {{creditScore}}
                      </el-form-item>
                      <el-form-item class="presentation" label="申请类型：" :label-width="formApproLabelWidth" prop="holiday">
                        {{loanType}}
                      </el-form-item>
                    </div>
                  </el-form>
                </div>
              </el-collapse-item>
              <!-- 信审核实信息 -->
              <el-collapse-item title="信审核实信息 " class="alert_collapse">
                <!-- <el-form-item label="核实可接受最高每期还款额[元]： " style="width:300px;margin-bottom:10px; " class="item-column2 line-height2 ">
                  {{fbalance2}}
                </el-form-item> -->
                <div class="dialog_form_auto">
                  <el-form>
                    <el-form-item label="核实可接受最高每期还款额[元]：" label-width="220px">
                      {{fbalance2}}
                    </el-form-item>
                  </el-form>
                </div>
              </el-collapse-item>
              <!-- 审批信息 -->
              <el-collapse-item title="审批信息 " class="alert_collapse">
                <!-- <div class="back-form-li radio-li ">
                  <el-form-item label="结论： ">
                    <el-radio label="00 " value='00' v-model="opinionFlag ">同意</el-radio>
                    <el-radio label="03 " value='03' v-model="opinionFlag " v-show="taskName!='creditApp_finalTrial_five'
                             && judgeFlag=='02' ">请求更高级审批</el-radio>
                  </el-form-item>
                </div>
                <div class="back-form-li back-form-edit-li " style="position:relative; ">
                  <span style="color:red;display:inline-block;width:0px;float:left;left:-5px;position:relative;font-weight:bold; ">*</span>
                  <el-form-item label="月核实收入[元]： " class="item-column2 width-120 ">
                    <el-input v-model="verIncome " @blur="moneyBlur(verIncome, 'verIncome') "></el-input>
                  </el-form-item>
                  <span style="color:red;display:inline-block;width:0px;float:left;left:30px;position:relative;font-weight:bold; ">*</span>
                  <el-form-item label="批准产品： " class="item-column2 width-110 ">
                    <el-select @change="proSlelecChange " v-model="proName ">
                      <el-option v-for="item in products " :key="item.id " :label="item.proName " :value="item "></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="back-form-li back-form-edit-li " style="position:relative; ">
                  <span style="color:red;display:inline-block;width:0px;float:left;left:5px;position:relative;font-weight:bold; ">*</span>
                  <el-form-item label="批准期限[月]： " class="item-column2 width-120 ">
                    <el-select @change="ploanTermChange " v-model="ploanTerm ">
                      <el-option v-for="item in ploanTerms " :label="item.appDuration " :value="item ">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <span style="color:red;display:inline-block;width:0px;float:left;left:5px;position:relative;font-weight:bold; ">*</span>
                  <el-form-item label="批准金额[元]： " class="item-column2 width-110 ">
                    <el-input v-model="ploanAmt " @blur="moneyBlur(ploanAmt, 'ploanAmt') "></el-input>
                  </el-form-item>
                </div>
                <div class="back-form-li ">
                  <el-form-item label="审批倍数： " class="item-column2 width-120 item-label-show ">
                    {{caculData.appmult}}
                  </el-form-item>
                  <el-form-item label="月还款额[元]： " class="item-column2 width-120 item-label-show ">
                    {{caculData.eachTermamt | formatMoney}}
                  </el-form-item>
                </div>
                <div class="back-form-li ">
                  <el-form-item label="内部负债率： " class="item-column2 item-label-show ">
                    {{caculData.inteDebitrate | formatValue}}
                  </el-form-item>
                  <el-form-item label="总信用负债率： " class="item-column2 item-label-show " v-show="caculData.creditDebitRate>0"> {{caculData.creditDebitRate | formatValue}}
                  </el-form-item>
                  <el-form-item label="总信用负债率：" class="item-column2 item-label-show" v-show="caculData.creditDebitRate==0">
                    0.00%
                  </el-form-item>
                </div>
                <div class="back-form-li">
                  <el-form-item label="总负债率：" class="item-column2 item-label-show">
                    {{caculData.totalRate | formatValue}}
                  </el-form-item>
                </div>
                <span style="color:red;display:inline-block;width:0px;float:left;top:15px;left:35px;position:relative;font-weight:bold;">*</span>
                <div class="back-form-li" style="height:60px;line-height: 60px;padding-top:5px;">
                  <el-form-item label="意见说明：">
                    <el-input type="textarea" resize="none" :rows="3" v-model="appConclusion"></el-input>
                  </el-form-item>
                </div> -->
                <div class="dialog_form_auto">
                  <el-form>
                    <el-form-item label="结论：" :label-width="formApproLab">
                      <el-radio label="00 " value='00' v-model="opinionFlag ">同意</el-radio>
                      <el-radio label="03 " value='03' v-model="opinionFlag " v-show="taskName!='creditApp_finalTrial_five'
          && judgeFlag=='02' ">请求更高级审批</el-radio>
                    </el-form-item>
                    <div class="bfc">
                      <el-form-item class="fl" label="月核实收入[元]：" :label-width="formApproLab">
                        <el-input v-model="verIncome " @blur="moneyBlur(verIncome, 'verIncome') "></el-input>
                      </el-form-item>
                      <el-form-item class="fr" label="批准产品：" :label-width="formApproLab">
                        <el-select @change="proSlelecChange " v-model="proName ">
                          <el-option v-for="item in products " :key="item.id " :label="item.proName " :value="item "></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="bfc">
                      <el-form-item class="fl" label="批准期限[月]：" :label-width="formApproLab">
                        <el-select @change="ploanTermChange " v-model="ploanTerm ">
                          <el-option v-for="item in ploanTerms " :label="item.appDuration " :value="item ">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item class="fr" label="批准金额[元]：" :label-width="formApproLab">
                        <el-input v-model="ploanAmt " @blur="moneyBlur(ploanAmt, 'ploanAmt') "></el-input>
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
                      <el-form-item class="presentation" label="总信用负债率：" :label-width="formApproLab" v-show="caculData.creditDebitRate>0">
                        {{caculData.creditDebitRate | formatValue}}
                      </el-form-item>
                      <el-form-item class="presentation" label="总信用负债率：" :label-width="formApproLab" v-show="caculData.creditDebitRate==0">
                        0.00%
                      </el-form-item>
                    </div>
                    <el-form-item class="presentation" label="总负债率：" :label-width="formApproLab">
                      {{caculData.totalRate | formatValue}}
                    </el-form-item>
                    <div class="bfc dialog_textarea" style="margin-bottom:10px;">
                      <el-form-item label="意见说明：" :label-width="formApproLab">
                        <el-input type="textarea" resize="none" :rows="3" v-model="appConclusion"></el-input>
                      </el-form-item>
                    </div>
                  </el-form>
                </div>

              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="back-form-li" style="text-align:right;padding:10px;">
            <el-button plain @click="shenPiShow=false;">返回</el-button>
            <el-button type="primary" @click="submitFn('03')" :loading="isLoading">{{loadingTitle}}</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
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
      <!-- 分页 -->
      <div class="block tool-bar" v-show="tableData.totalRecord > pageSize">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord">
        </el-pagination>
      </div>
      <div class="back-form-li" style="text-align:right;padding:10px;">
        <el-button plain @click="spjlShow=false;">返回</el-button>
      </div>
    </el-dialog>
    <!-- 流程轨迹弹窗 -->
    <el-dialog title="流程轨迹" :visible.sync="lcgjShow" :modal="false" width="1000px">
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
      <div class="back-form-li" style="text-align:right;padding:10px;">
        <el-button plain @click="lcgjShow=false;">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import baseurl from '../../util/ConstantSocialAndPn';
  // 用户接口
  import userBaseUrl from '../.././util/constant';
  export default {
    data() {
      return {
        formLabelWidth: '85px',
        formApproLabLeft: "100px",
        formApproLab: "120px",
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
        // 挂起
        // coverShow: false, // 弹窗
        // showFlag: 0, // 要显示的 模块,默认给0
        nodeName: '',
        routeParams: '',
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
        loanAmt: '', // 申请金额
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
        caculData: {}, // 审批结论数据
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
        fbalance2: '', // 
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
        repayWay: '', // 审批  计算审批结论数据  还款方式
        taskName: '', // 角色标志
        social: '', // 社保/公积金  授权标志
        // bigDataLogVisible: false, //大数据风控弹框
        // socialLogVisible: false, //社保公积金
        orgId: '', // 用来请求产品  用户id
        huiTuiShow: false,
        juJueShow: false,
        fangQiShow: false,
        shenPiShow: true,
        spjlShow: false,
        lcgjShow: false,
        jujueBtnShow: false, // 拒绝 按钮 BX02
        activeNames: ['applyMsg'], // 更改 审批 为折叠面板
        isLoading: false, // 审批按钮 是否加载状态
        loadingTitle: '提交', // 默认btn title
        shenPiBtnShow: false, // 初审 审批按钮  BX21
        debtRate: Number, //产品负债率
        flowRoleCode: '', //	流程角色code
        maxAuditAmt: Number, //流程角色-最高审批金额
        ploanAmtNum: Number, //批准金额number类型
        params: '',
        mainReasonId: '', //主原因id
        subReasonId: '', //子原因id

      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        // 取出标志taskNodeName
        // creditApp_finalTrial_five   信审总监审批 最高级不需要 更高级审批
        //this.taskNodeName = localStorage.getItem('taskNodeName');
        // 页面创建的时候  找数据 
        // 这里的数据是 申请信息 中存到本地的信息
        // var taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
        // 取出存在本地当然 userInfo 
        this.judgeFlag = JSON.parse(localStorage.getItem('judge')).flag;
        if (this.judgeFlag == '01') { // 初审 任务 id  taskId
          this.taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
          this.taskId = this.taskInWaitting.taskId;
          this.processInstanceId = this.taskInWaitting.processInstanceId;
          this.applyId = this.taskInWaitting.applyId;
          this.appOrgId = this.taskInWaitting.appOrgId;
          this.appOrgCode = this.taskInWaitting.appOrgCode;
          // 客户编号
          this.custNo = this.taskInWaitting.custNo;
          // 显示
          this.custName = this.taskInWaitting.custName;
          // 申请类型
          // 进件编号
          this.applySubNo = this.taskInWaitting.applySubNo;
          // 证件类型
          this.certTypeTxt = this.taskInWaitting.certTypeTxt;
          // 证件号码
          this.certCode = this.taskInWaitting.certCode;
          // 申请期限 
          this.sproId = this.taskInWaitting.proId;
          // 申请信息 带过来的 产品名称
          this.baseProName = this.taskInWaitting.proName;
          this.certCode = this.taskInWaitting.certCode;
          this.options = [{
            "label": "申请登记",
            "value": "creditApp_apply",
            "type": "01"
          }]
          // 任务状态
          this.taskStatus = JSON.parse(localStorage.getItem('workbenchPass')).taskStatus;
          // 反欺诈专员审批按钮，要判断下，功能角色号有配BX22的
          if (this.userInfo.roleCodesList) {
            for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
              if (this.userInfo.roleCodesList[i] == 'BX21')
                if (this.judgeFlag == '01')
                  this.shenPiBtnShow = true;
          }

        } else if (this.judgeFlag == '02') { // 终审取终审  taskId
          this.FtaskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));
          this.flowRoleCode = this.FtaskInWaitting.flowRoleCode; //	流程角色code
          // 挂起 任务id
          this.taskId = this.FtaskInWaitting.taskId;
          // 流程 实例id
          this.processInstanceId = this.FtaskInWaitting.processInstanceId;
          this.applyId = this.FtaskInWaitting.applyId;
          this.appOrgId = this.FtaskInWaitting.appOrgId;
          this.appOrgCode = this.FtaskInWaitting.appOrgCode;
          // 客户编号
          this.custNo = this.FtaskInWaitting.custNo;
          // 显示
          this.custName = this.FtaskInWaitting.custName;
          // 申请类型
          // 进件编号
          this.applySubNo = this.FtaskInWaitting.applySubNo;
          // 证件类型
          this.certTypeTxt = this.FtaskInWaitting.certTypeTxt;
          // 证件号码
          this.certCode = this.FtaskInWaitting.certCode;
          // 申请期限 
          this.sproId = this.FtaskInWaitting.proId;
          // 申请信息 带过来的 产品名称
          this.baseProName = this.FtaskInWaitting.proName;
          this.certCode = this.FtaskInWaitting.certCode;
          this.options = [{
            "label": "初审审批",
            "value": "creditApp_firstTrial",
            "type": "02"
          }]
          // 任务状态
          this.taskStatus = JSON.parse(localStorage.getItem('FinalWorkbenchPass')).taskStatus;
          this.taskName = this.FtaskInWaitting.taskName;
          this.findSmFlowRole();
          // 拒绝按钮根据 角色判断 BX20
          if (this.userInfo.roleCodesList) {
            for (var i = 0; i < this.userInfo.roleCodesList.length; i++)
              if (this.userInfo.roleCodesList[i] == 'BX20')
                if (this.judgeFlag == '01')
                  this.jujueBtnShow = true;
          }
        }
        // 回退 拒绝  审批
        // 经办人 登录用户名
        this.userInfo = JSON.parse(localStorage.getItem('userInf'));
        this.dealroperCode = this.userInfo.userCode;
        // 用户id
        this.orgId = this.userInfo.orgId;
        // this.dealroperCode = userInfo.userCode;
        // 经办时间
        // this.dealroperDate =
        //   new Date().toLocaleString()
        //   .replace(/\//g, '-')
        //   .match(/\d{4}\-\d{2}\-\d{1,2}/)[0]
        this.applicationInformationDetail = JSON.parse(localStorage.getItem('applicationInformationDetail'));
        JSON.stringify(this.applicationInformationDetail) === '{}' ? this.$message.error('客户信息获取失败！请保存已填写内容，从任务列表重新进入！') :
          '';
        // this.applyId = this.applicationInformationDetail.applyId;    
        // this.appOrgId = this.applicationInformationDetail.appOrgId;
        // this.appOrgCode = this.applicationInformationDetail.appOrgCode;
        // // 客户编号
        // this.custNo = this.applicationInformationDetail.custNo;
        // // 显示
        // // 审批人
        // // this.userName = this.userInfo.userName;
        // this.custName = this.applicationInformationDetail.custName;
        // 申请类型
        this.appTypeTxt = this.applicationInformationDetail.appTypeTxt; //...
        // 进件编号
        // this.applySubNo = this.applicationInformationDetail.applySubNo;
        // // 证件类型
        // this.certTypeTxt = this.applicationInformationDetail.certTypeTxt;
        // // 证件号码
        // this.certCode = this.applicationInformationDetail.certCode;
        // // 产品名称
        // // this.proName = this.applicationInformationDetail.proName;
        // // 申请期限 
        this.loanTerm = this.applicationInformationDetail.loanTerm; //...
        // this.sproId = this.applicationInformationDetail.proId;
        // // 申请信息 带过来的 产品名称
        // this.baseProName = this.applicationInformationDetail.proName;
        // this.certCode = this.applicationInformationDetail.certCode;
        this.Social();
        // 初审 / 终审
        // this.judgeFlag = JSON.parse(localStorage.getItem('judge')).flag;
        //  this.opinionFlag  初审终审标志  

        // if (this.judgeFlag == '01') {
        //   // this.opinionFlag = '01';
        //   this.options = [{
        //     "label": "申请登记",
        //     "value": "creditApp_apply",
        //     "type": "01"
        //   }]
        // } else if (this.judgeFlag == '02') {
        //   // this.opinionFlag = '02'; // 终审
        //   this.options = [
        //     {
        //       "label": "初审审批",
        //       "value": "creditApp_firstTrial",
        //       "type": "02"
        //     }
        //   ]
        // }  else if (this.judgeFlag == '04') { // 主管
        //   this.options = [{
        //     "label": "反欺诈专员审批",
        //     "value": "antiFraudApp_commissioner",
        //     "type": ''
        //   }]
        // }
        if (this.judgeFlag == '04') { // 主管
          this.options = [{
            "label": "反欺诈专员审批",
            "value": "antiFraudApp_commissioner",
            "type": ''
          }]
        }
      },
      findSmFlowRole() { //信审审批-8.获取流程角色信息
        this.get("/smFlowRoleAction/findSmFlowRole", {
          flowRoleCode: this.flowRoleCode,
        }).then(res => {
          if (res.statusCode == 200) {
            this.maxAuditAmt = res.data.maxAuditAmt;
            // this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      hangOoutBtn() { //挂起弹窗
        // this.loadsitu = false;
        // this.adbtn = '确定';
        // this.hangOut = true;
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showCancelButton: false
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
        // 点击 确认 提交 方法              
        this.post("/creauditInfo/approveHang ", {
          taskId: this.taskId,
          busiState: this.busiState,
          applyId: this.applyId, // 申请单id
        }).then(res => {
          if (res.statusCode == '200') {
            this.hangOut = false;
            // done();
            if (this.judgeFlag == '01') {
              this.$router.push('/taskInWaitting');
              this.del('初审详情');
            }
            // 终审
            else if (this.judgeFlag == '02') {
              this.$router.push('/FtaskInWaitting' + this.routeParams);
              this.del('终审详情');
            }

          } else {
            if (res.statusCode == 500) {
              this.hangOut = false;
              this.$message({
                type: 'warning',
                message: '网络异常,请重试!'
              });
            } else {
              if (this.judgeFlag == '01') {
                this.$router.push('/taskInWaitting');
              }
              // 终审
              else if (this.judgeFlag == '02') {
                this.$router.push('/FtaskInWaitting' + this.routeParams);
              }
              this.hangOut = false;
              this.$message({
                type: 'warning',
                message: res.msg
              });
            }
          }
        });
      },
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
          modal: false,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              // 区分初审/终审
              if (this.judgeFlag == '01') {
                this.busiState = '01';
              } else if (this.judgeFlag == '02') {
                this.busiState = '11'
              }
              // 点击 确认 提交 方法
              this.post("/creauditInfo/approveHang ", {
                taskId: this.taskId,
                busiState: this.busiState,
                applyId: this.applyId, // 申请单id
              }).then(res => {
                if (res.statusCode == '200') {
                  done();
                } else {
                  if (res.statusCode == 500) {
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
          // 初审
          if (this.judgeFlag == '01')
            this.$router.push('/taskInWaitting');
          // 终审
          if (this.judgeFlag == '02')
            this.$router.push('/FtaskInWaitting' + this.routeParams);
        });
      },
      coverFn(flag) {
        // 清空原因
        this.mainReason = '';
        this.secondaryReason = '';
        // 页面点击按钮出现 的 对应 弹窗
        // 统一处理    回退 02 ,拒绝 01, 放弃  07, 审批 03, 审批结论 spjl, 流程轨迹 lcgj
        // this.coverShow = true;
        switch (flag) {
          case '02':

            // this.showFlag = '02';
            this.huiTuiShow = true;
            // 获取系统时间
            this.get('system/getSystemDate?' + Math.random()).then(res => {
              // 请求系统时间
              this.dealroperDate = res.data;
            })
            // 回退 01 new  根据节点 请求
            // getReason('main', '01')
            break;
          case '01':
            // this.showFlag = '01';
            this.juJueShow = true;
            this.get('system/getSystemDate?' + Math.random()).then(res => {
              // 请求系统时间
              this.dealroperDate = res.data;
            })
            // 拒绝 03 new
            this.getReason('main', '03')
            break;
          case '07':
            // this.showFlag = '07';
            this.fangQiShow = true;
            this.get('system/getSystemDate?' + Math.random()).then(res => {
              // 请求系统时间
              this.dealroperDate = res.data;
            })
            // 放弃 05 new
            this.getReason('main', '05')
            break;

            //审批按钮
          case '03':
            // this.showFlag = '03';
            this.shenPiShow = true;
            // this.get('system/getSystemDate').then(res => {})
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
            //初审的时候调用评分接口
            if (this.judgeFlag == '01') {
              // 信用评分  核实可接受最高还款额
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
                }
              });
              this.getProducts();
              //带回回退的信息
              this.post('/creauditOpinion/queryCreauditOpinionObj', {
                applyId: this.applyId
              }).then(res => {
                if (res.statusCode == '200') {
                  if (res.data) {
                    this.verIncome = Number(res.data.verIncome).toLocaleString() + '.00'; //月核实收入[元];
                    this.verIncome2 = Number(this.verIncome.split('.')[0].replace(/,/g, '')) +
                      Number('0.' + this.verIncome.split('.')[1]);
                    this.proId = res.data.proId; //批准产品ID;
                    this.ploanTerm = res.data.ploanTerm; //批准期限[月];
                    this.ploanAmt = Number(res.data.ploanAmt).toLocaleString() + '.00'; /*this.moneyBlur(res.data.ploanAmt,'ploanAmt')*/ ; //批准金额[元];
                    this.caculData.appmult = res.data.appmult; //审批倍数;
                    this.caculData.eachTermamt = res.data.eachTermamt; //月还款额[元];
                    this.caculData.inteDebitrate = res.data.inteDebitrate; //内部负债率;
                    this.caculData.creditDebitRate = res.data.creditDebitRate; //总信用负债率;
                    this.caculData.totalRate = res.data.totalRate; //总负债率;
                    this.appConclusion = res.data.appConclusion; //意见说明;
                    if (res.data.proId) {
                      //获取产品列表
                      this.post('/credit/product').then(ress => {
                        if (ress.statusCode == '200') {
                          this.products = ress.data;
                          for (var i = 0; i < this.products.length; i++) {
                            if (res.data.proId == this.products[i].id) {
                              this.proName = this.products[i].proName;
                              // 最大
                              this.maxAmounnt = this.products[i].maxAmounnt;
                              // 最小
                              this.minAmount = this.products[i].minAmount;
                            }
                          };
                        }
                      });
                      //获取批准期限
                      this.post('/credit/ploanTermByPro?proId=' + res.data.proId).then(resp => {
                        if (resp.statusCode == '200')
                          this.ploanTerms = resp.data;
                        for (var j = 0; j < this.ploanTerms.length; j++) {
                          if (this.ploanTerms[j].appDuration == this.ploanTerm) {
                            this.loanRateYr = this.ploanTerms[j].loanRateYr
                            this.repayWay = this.ploanTerms[j].repayWay
                            this.synthesisRateM = this.ploanTerms[j].synthesisRateM
                            break;
                          }
                        }
                      });
                    }
                  } else {
                    return;
                  }
                }
              });
            } else if (this.judgeFlag == '02') {
              this.queryCreauditOpinionObj();
            }

            // if (this.judgeFlag == '01') {
            // /* 请求 
            //   产品
            // */
            // // 产品
            // this.get('/credit/product').then(res => {
            //   if (res.statusCode == '200') {
            //     // 假如没有  核实可接受最高每期还款额 
            //     // if(res.)  提交的时候也要判断
            //     // this.$message("提示：请完善信审表中可承受的月还款金额");
            //     this.products = res.data;
            //   }
            // })
            // } else 
            //if (this.judgeFlag == '02') { // 终审
            // 请求产品  初审-审批结论 / 终审-审核结论
            //}
            break;
          case 'fqz':
            // this.showFqz = true;
            // this.showFlag = 'fqz';
            // 查询反欺诈信息
            // this.$router.push('AntiApplyEdit')
            // var routeParms = 'id=' + this.applyId + ';flag=start;busiState=30'
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
            // localStorage.setItem("antiApplyFlag", JSON.stringify(routeParms));
            // this.$store.dispatch('addVisitedViews', {
            //   name: '反欺诈申请',
            //   path: '/AntiApplyEditf',
            //   flag: this.judgeFlag,
            //   params: '',
            //   StatefullPath: '/AntiApplyEditf',
            // })
            break;
          case 'spjl':
            // this.showFlag = 'spjl';
            this.spjlShow = true;
            this.getSpjlList();
            break;
          case 'lcgj':
            // this.showFlag = 'lcgj';
            this.lcgjShow = true;
            // 取本地的 流程模版id
            // this.processTemplateId = JSON.parse(localStorage.getItem('workbenchPass')).processTemplateId;
            // 本地  流程实例id

            // 任务状态
            this.lcgjLoading = true;
            this.getLcgjList();
            break;
        }
      },
      // 进入 初审 审批结论 / 终审 审核结论  先请求产品
      getProducts() {
        /* 请求 
                产品
              */
        // 产品  调用户
        // this.post(userBaseUrl.baseUrl_user + 'remote/product/getProductForUser', {
        // // this.post('http://10.1.26.200:20717/remote/product/getProductForUser', {
        //   data: {
        //     "orgId": "f542358d-14c9-4c63-a299-39d3654751a2",
        //     "validFlag": "1" // 有效标志
        //   }
        // }).then(res => {
        //   if (res.statusCode == '200') {
        //     // 假如没有  核实可接受最高每期还款额 
        //     // if(res.)  提交的时候也要判断
        //     // this.$message("提示：请完善信审表中可承受的月还款金额");
        //     this.products = res.data;
        //     if (res.statusCode == '200') {
        //       if (this.judgeFlag == '02') { // 终审
        //         this.queryCreauditOpinionObj();
        //       }
        //     }
        //   }
        // })

        this.post('/credit/product').then(res => {
          /* this.get('/credit/product').then(res => {*/
          if (res.statusCode == '200') {
            // 假如没有  核实可接受最高每期还款额 
            // if(res.)  提交的时候也要判断
            // this.$message("提示：请完善信审表中可承受的月还款金额");
            this.products = res.data;
            /*if (res.statusCode == '200') {
              if (this.judgeFlag == '02') { // 终审
                this.queryCreauditOpinionObj();
              }
            }*/
          }
        })
      },
      // 根据id 请求信息  终审 - 审批
      queryCreauditOpinionObj() {
        this.post('/creauditOpinion/queryCreauditOpinionObj', {
          applyId: this.applyId
        }).then(res => {
          if (res.statusCode == '200') {
            // applyId: this.applyId,
            // auditType: '00',
            this.proCode = res.data.proCode;
            this.verIncome2 = res.data.verIncome; // 月核实收入
            this.verIncome = Number(res.data.verIncome).toLocaleString() + '.00';
            this.ploanAmt2 = res.data.ploanAmt; // 批准金额 
            this.ploanAmt = Number(res.data.ploanAmt).toLocaleString() + '.00';
            this.caculData.ploanTerm = res.data.ploanTerm; //批准期限
            this.ploanTerm = res.data.ploanTerm;
            this.caculData.appmult = res.data.appmult; // 审批倍数
            this.caculData.eachTermamt = res.data.eachTermamt; //每期还款额[元]
            this.eachTermamt = res.data.eachTermamt;
            this.caculData.inteDebitrate = res.data.inteDebitrate; //内部负债率
            this.caculData.totalRate = res.data.totalRate; // 总负债率
            this.appConclusion = res.data.appConclusion;
            this.appOrgId = res.data.appOrgId; //进件机构ID
            this.custNo = res.data.custNo; //客户编号
            this.applyConclusion = res.data.applyConclusion;
            this.srcPloanAmt = res.data.srcPloanAmt; // 信审批准额度
            this.caculData.creditDebitRate = res.data.creditDebitRate; // 信用负债率
            this.proId = res.data.proId; //获取产品期限产品id
            // this.taskId = res.data.taskId; // 任务id
            // opinionFlag: this.opinionFlag, // 任务类型  初审 00 
            this.ploanTerms = [];
            // 整合接口
            this.post('/credit/initPage', {
              proId: this.sproId, //产品id
              applyId: this.applyId, //申请单id
              appOrgId: this.appOrgId, //进件机构id
              ploanTermByProId: this.proId, //获取产品期限产品id
            }).then(res => {
              /*this.post('/credit/ploanTermByPro?proId='+this.proId).then(res => {*/
              if (res.statusCode == '200') {
                //获取评分、核实可接受最高月每期还款额
                this.creditScore = res.data.creditScore.split(',')[0].substr(3, 4);
                this.fbalance = res.data.fbalance;
                if (res.data.creditScore.split(',')[1]) {
                  this.fbalance2 = Number(res.data.fbalance).toLocaleString() + res.data.creditScore.split(
                    ',')[
                    1];
                } else {
                  this.fbalance2 = Number(res.data.fbalance).toLocaleString() + '.00'
                };
                //获取产品列表
                if (res.data.product) {
                  this.products = res.data.product;
                  for (var i = 0; i < this.products.length; i++) {
                    if (this.proId == this.products[i].id) {
                      this.proName = this.products[i].proName;
                      // 最大
                      this.maxAmounnt = this.products[i].maxAmounnt;
                      // 最小
                      this.minAmount = this.products[i].minAmount;
                      this.debtRate = this.products[i].debtRate; //产品负债率
                      //this.calculateByAuditInfo();
                    }
                  };
                };

                //根据产品id获取批准期限
                this.ploanTerms = res.data.ploanTermByPo;
                for (var j = 0; j < this.ploanTerms.length; j++) {
                  if (this.ploanTerms[j].appDuration == this.ploanTerm) {
                    this.loanRateYr = this.ploanTerms[j].loanRateYr
                    this.repayWay = this.ploanTerms[j].repayWay
                    this.synthesisRateM = this.ploanTerms[j].synthesisRateM
                    break;
                  }
                }
              }
            })
          }
        })
      },
      submitFn(flag) {
        // 手动赋值  经办人
        this.dealroperCode = this.dealroperCode;
        switch (flag) {
          case '01':
            // 人工拒绝 01
            // this.opinionFlag = '01';
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
            // this.coverShow = false;
            // this.showFlag = 0;
            // this.mainReason = this.mainReason; // 主原因同理
            this.creauditAppOperate = 'check_Refuse';
            // this.taskId = '180074';
            // 区分初审/终审
            if (this.judgeFlag == '01') {
              this.busiState = '02';
            } else if (this.judgeFlag == '02') {
              this.busiState = '12'
            }
            this.approvalFn();
            break;
          case '02':
            // 人工回退 02
            // this.opinionFlag = '02';
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
            // 回退节点 使用了监听,所以单独赋值
            // this.rollbackNodeName = this.rollbackNodeName.value;
            // this.mainReason = this.mainReason; // 主原因同理
            this.creauditAppOperate = 'check_Back';
            // this.taskId = '180049';
            // 区分初审/终审
            if (this.judgeFlag == '01') {
              this.busiState = '00';
            } else if (this.judgeFlag == '02') {
              // this.busiState = '10'
              if (this.rollbackNodeName.value == 'creditApp_apply') { //申请登记
                this.busiState = '00'
              } else if (this.rollbackNodeName.value == 'creditApp_firstTrial') { //初审审批
                this.busiState = '10'
              }
            }

            this.approvalFn();
            break;

          case '07':
            // 客户放弃  07
            // this.opinionFlag = '07';
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
            // this.coverShow = false;
            // this.showFlag = 0;
            // this.fangQiShow = false;
            // 放弃测试数据
            // this.taskId = '177524';
            this.creauditAppOperate = 'check_Abandon';
            // 区分初审/终审
            if (this.judgeFlag == '01') {
              this.busiState = '03';
            } else if (this.judgeFlag == '02') {
              this.busiState = '13'
            }
            this.approvalFn();
            break;
          case '03':

            // 校验必填项
            // 假如没有  核实可接受最高每期还款额 , 提示
            if (!this.fbalance2) {
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
            // 批准金额 ploanAmt
            if (this.ploanAmt) {
              var regs = /\,/g;
              var newPloanAmt = this.ploanAmt.replace(regs, '') * 1;
              //this.ploanAmt=this.ploanAmt.replace(regs,'')*1;
              //return;
              //this.ploanAmt = Number(this.ploanAmt.split('.')[0].replace(/,/g, '')) +
              //Number('0.' + this.ploanAmt.split('.')[1]);
              if (newPloanAmt > this.maxAuditAmt && this.opinionFlag == '00') {
                this.$message({
                  message: "提示：大于当前审批人最高审批金额权限，请选择请求更高级审批!",
                  type: 'warning'
                })
                return;
              };
              //this.ploanAmt=Number(this.ploanAmt).toLocaleString() + '.00';
            };
            // 意见说明 appConclusion
            if (!this.appConclusion) {
              this.$message({
                message: "提示：请填写意见说明!",
                type: 'warning'
              })
              return;
            }
            // this.coverShow = false;
            // this.showFlag = 0;
            // this.taskId = '182525';
            // this.opinionFlag = '00';
            // 区分初审/终审
            if (this.judgeFlag == '01') {
              this.busiState = '04';
            } else if (this.judgeFlag == '02') {
              this.busiState = '14'
            }
            // 保存审批信息
            this.saveCreaduit();
            break;
        }
      },
      // 回退/拒绝/放弃
      approvalFn() {
        this.isLoading = true;
        this.loadingTitle = '提交中';

        // 判断终审的 opinionFlag 
        // 点击 确认 提交 方法
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
          subReasonName: this.secondaryReason, // 回退子原因
          mainReasonId: this.mainReasonId, // 回退主原因id
          subReasonId: this.subReasonId, // 回退子原因id
          reasonRemark: this.reasonRemark, // 意见描述/原因说明
          appOrgId: this.appOrgId, // 进件机构id
          applyId: this.applyId, // 申请单id
          rollbackNodeName: this.rollbackNodeName.value, // 回退节点名称
          dealroperDate: this.dealroperDate, // 经办时间
          creauditAppOperate: this.creauditAppOperate, // 操作类型
          busiState: this.busiState,
          applySubNo: this.applySubNo
        }).then(res => {
          this.isLoading = false;
          this.loadingTitle = '提交';

          // 返回结果 处理所有的控制显示
          this.huiTuiShow = false;
          this.juJueShow = false;
          this.fangQiShow = false;


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
            // this.proName = ''; // 产品名称
            // this.proCode = ''; //  产品代码
            // this.proId = ''; // 产品id
            // this.opinionFlag = ''; // 标志任务类型
            this.mainReason = ''; // 回退主原因
            this.secondaryReason = ''; // 回退子原因
            this.reasonRemark = ''; // 意见描述/原因说明
            // this.appOrgId = ''; // 进件机构id
            // this.applyId = ''; // 申请单id
            this.rollbackNodeName = ''; // 回退节点名称
            this.dealroperDate = ''; // 经办时间
            this.creauditAppOperate = ''; // 操作类型

            this.$message({
              message: res.msg,
              type: 'success'
            })
            if (this.judgeFlag == '01') {
              this.$router.push('/taskInWaitting');
              this.del('初审详情');
            }
            if (this.judgeFlag == '02') {
              this.$router.push('/FtaskInWaitting' + this.routeParams);
              this.del('终审详情');
            }
          } else {
            this.$message({
              message: res.msg ? res.msg : '网络异常,请重试',
              type: 'success'
            })
          }
        });
      },
      // 保存审批信息
      saveCreaduit(val) { //审批按钮  提交功能
        this.isLoading = true;
        this.loadingTitle = '提交中';
        // if (this.judgeFlag == '02') {
        // this.auditFlag = '1';
        // }
        if (this.judgeFlag == '02') {
          if (this.opinionFlag == '00') {
            this.auditFlag = '1';
          } else if (this.opinionFlag == '03') {
            this.auditFlag = '0';
          }
        }

        let verIncome2 = 0;
        let ploanAmt2 = 0;

        if (/,/.test(this.verIncome))
          verIncome2 = Number(this.verIncome.replace(/,/g, ''));
        else
          verIncome2 = Number(this.verIncome);
        if (/,/.test(this.ploanAmt)) {
          ploanAmt2 = Number(this.ploanAmt.replace(/,/g, ''));
        } else {
          ploanAmt2 = Number(this.ploanAmt)
        }
        this.post('/creauditOpinion/add', {
          // this.post("http://10.1.26.47:8080/riskManagement/creauditOpinion/add", {
          applyId: this.applyId,
          auditType: this.judgeFlag == '01' ? '00' : '01',
          proCode: this.proCode,
          verIncome: verIncome2,
          ploanAmt: ploanAmt2,
          ploanTerm: this.ploanTerm, //批准期限
          appmult: this.caculData.appmult, // 审批倍数
          eachTermamt: this.caculData.eachTermamt, //每期还款额[元]
          inteDebitrate: this.caculData.inteDebitrate, //内部负债率
          totalRate: this.caculData.totalRate, // 总负债率
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
          // 更改显示
          this.shenPiShow = false;
          // 判断 500
          if (res.statusCode == '500') {
            this.$message({
              message: '网络异常,请重试!',
              type: 'warning'
            })
            return;
          }
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
            this.caculData.creditDebitRate = ''; // 信用负债率
            // approvalFlag: '0', // 终审通过标志
            // ploanDate: '', // 批准日期
            // auditDate: '', // 批准时间
            // auditFlag: '', // 终审结束标识 0 初审 1终审
            // proId: this.proId, //产品id
            // taskId: this.taskId, // 任务id
            if (this.judgeFlag == '01') { // 初审 
              this.$router.push('/taskInWaitting');
              this.del('初审详情');
            } else if (this.judgeFlag == '02') { // 终审
              this.$router.push('/FtaskInWaitting' + this.routeParams);
              this.del('终审详情');
            }
          }
        })
      },
      // 获取主次原因
      getReason(flag, type) {
        // flag 标志是 主/次   main/second
        // type 标志原因类型   02 回退  01 拒绝
        // if (type == '02') {
        //   // 回退
        //   this.reasonType = '01';
        // } else if (type == '01') {
        //   // 审批拒绝
        //   this.reasonType = '03';
        // } else if (type == '07') {
        //   // 客户放弃
        //   this.reasonType = '05';
        // }
        if (flag == 'main') {
          // 请求主原因
          this.get('/credit/firstNodeReason?reasonType=' + type + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.mainReasons = res.data;
            }
          })
        } else if (flag == 'second') {
          // 请求子原因
          this.get('/credit/findNodeFirstChildren?id=' + this.mainId + '&' + Math.random()).then(res => {
            if (res.statusCode == '200') {
              this.secondeReasons = res.data;
            }
          })
        }
      },
      itemDbclick(row, event) {
        // 行被双击 事件
      },
      cellHover(row, column, cell, event) {
        // cell hover 事件
        // this.tableData[]
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
            if (res.statusCode == '500')
              this.$message('网络异常,请重试!');
            else
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
              this.$message(res.msg);
            }
          })


      },
      // 回退节点改变 请求主原因
      backSelectChange: function (val) {
        this.getReason('main', val.type);
        // 清空主原因 子原因
        this.mainReason = '';
        this.mainId = '';
        this.secondaryReason = '';

      },
      // 回退/拒绝 主原因 select - change
      selectChange: function (val) {
        var id = val.id; // 主原因的 id
        // this.reasonName = val.reasonName;
        this.mainReason = val.reasonName;
        this.secondaryReason = '';
        this.mainId = val.id;
        // 在主原因改变的时候请求子原因
        this.getReason('second', this.mainId);
      },
      // 批准产品 更改
      proSlelecChange: function (val) {
        this.ploanTerm = '';
        this.ploanAmt = '';
        this.debtRate = val.debtRate; //产品负债率
        // id val.id  产品id
        this.proId = val.id;
        // proCode  产品code
        this.proCode = val.proCode;
        this.proName = val.proName;
        // 最大金额
        this.maxAmounnt = val.maxAmounnt;
        // 最小金额
        this.minAmount = val.minAmount;
        /*this.post('/credit/ploanTermByPro',{proId : this.proId}).then(res => {*/
        this.post('/credit/ploanTermByPro?proId=' + this.proId).then(res => {
          if (res.statusCode == '200')
            this.ploanTerms = res.data;
        })

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
      },
      // 计算审批结论数据
      calculateByAuditInfo: function () {
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
            console.log('总负债率：' + (res.data.totalRate * 100), res.data.totalRate * 100)
            console.log('内部负债率：' + (res.data.inteDebitrate * 100), res.data.inteDebitrate * 100)
            console.log('月还款额:' + res.data.eachTermamt, res.data.eachTermamt)
            console.log(this.fbalance2)
            console.log('可接受最高每期还款额:' + this.fbalance, this.fbalance)
            console.log('产品负债率：' + this.debtRate, this.debtRate)
            console.log('流程角色最高审批金额:' + this.maxAuditAmt, this.maxAuditAmt)
            console.log('同意:' + this.opinionFlag, this.opinionFlag)
            console.log('终审' + this.judgeFlag, this.judgeFlag)
            if (res.data.eachTermamt > this.fbalance) { // fbalance 可接受最高每期还款额
              this.ploanAmt = '' //批准金额
              this.$message.error('月还款额不能大于可接受最高每期还款额，请重新输入！')
              return
            } else if (res.data.totalRate * 100 > this.debtRate || res.data.inteDebitrate * 100 > this.debtRate) { //产品负债率:debtRate  内部负债率:inteDebitrate  总负债率：totalRate
              this.ploanAmt = '' //批准金额
              this.$message.error('内部负载率/总负债率超过该产品对应的最大负债率！')
              return
            }
            if (this.opinionFlag == '00' && this.judgeFlag == '02') { //选中同意
              // this.ploanAmtNum = Number(this.ploanAmt.split('.')[0].replace(/,/g, ''));//批准金额 number类型：ploanAmtNum            
              this.ploanAmt.indexOf(',') != -1 ? this.ploanAmtNum = this.ploanAmt.replace(/,/g, '') * 1 : this.ploanAmtNum =
                this.ploanAmt * 1;
              console.log('批准金额:' + this.ploanAmtNum, this.ploanAmtNum)
              if (this.ploanAmtNum > this.maxAuditAmt) { //流程角色最高审批金额:maxAuditAmt
                this.ploanAmt = '' //批准金额
                this.$message.error('大于当前审批人最高审批金额权限，请选择请求更高级审批！')
                return
              }
            }
          }
        })
      },
      // 月核实收入[元]
      moneyBlur: function (val, flag) {
        // 无数据
        if (!val) {
          if (flag == 'verIncome') {
            this.verIncome = '';
            this.verIncome2 = '';
          } else if (flag == 'ploanAmt') {
            this.ploanAmt = ''
            this.ploanAmt2 = ''
          }
        }
        // 有数据
        if (val) {
          if (flag == 'verIncome') {
            if (/,/.test(val)) {
              if (/\./.test(val)) { // 有小数
                this.verIncome2 = Number(val.split('.')[0].replace(/,/g, '')) +
                  Number('0.' + val.split('.')[1]);
                // 页面值
                this.verIncome = Number(val.split('.')[0].replace(/,/g, '')).toLocaleString() + '.' + val.split(
                  '.')[
                  1];
              } else {
                this.verIncome2 = Number(val.replace(/,/g, ''));
                this.verIncome = Number(val).toLocaleString() + '.00';
              }
            } else {
              this.verIncome2 = Number(val);
              if (/\./.test(val)) { // 有小数
                // 页面值
                this.verIncome = Number(val.split('.')[0]).toLocaleString() + '.' + val.split('.')[1];
              } else {
                // 页面值
                this.verIncome = Number(val).toLocaleString() + '.00';
              }
            }
            this.calculateByAuditInfo();
          } else if (flag == 'ploanAmt') {
            if (/,/.test(val)) {
              if (/./.test(val)) {
                this.ploanAmt2 = Number(val.split('.')[0].replace(/,/g, '')) +
                  Number('0.' + val.split('.')[1]);
                // 页面值
                this.ploanAmt = Number(val.split('.')[0].replace(/,/g, '')).toLocaleString() + '.' + val.split(
                  '.')[1];
              } else {
                this.ploanAmt2 = Number(val.replace(/,/g, ''));
                // 页面值
                this.ploanAmt = val.split('.')[0].toLocaleString() + '.00';
              }
            } else {
              this.ploanAmt2 = Number(val)
              // 页面值
              if (/\./.test(val)) {
                this.ploanAmt = Number(val.split('.')[0]).toLocaleString() + '.' + val.split('.')[1];
              } else {
                this.ploanAmt = Number(val).toLocaleString() + '.00';
              }
            }
            // 大于最大
            if (this.ploanAmt2 > this.maxAmounnt) {
              // this.ploanAmtError = true;
              this.$message({
                showClose: true,
                message: '批准金额不能大于产品最高上限' + this.maxAmounnt + '元',
                type: 'warning'
              });
              this.ploanAmt2 = '';
              this.ploanAmt = '';
              return;
            }
            // 小于最小
            if (this.ploanAmt2 < this.minAmount) {
              this.$message({
                showClose: true,
                message: '批准金额不能小于产品最低下限' + this.minAmount + '元',
                type: 'warning'
              });
              this.ploanAmt2 = '';
              this.ploanAmt = '';
              return;
            }

            // 大于申请金额
            if (this.ploanAmt2 > Number(this.loanAmt.split('.')[0].replace(',', ''))) {
              // this.ploanAmtError = true;
              this.$message({
                showClose: true,
                message: '此金额不能大于申请金额,请重新输入!',
                type: 'warning'
              });
              this.ploanAmt = '';
              this.ploanAmt2 = '';
              return;
            }
            console.log(this.verIncome + "*****" + this.proId + "*****" + this.ploanTerm + "*****" + this.ploanAmt.length);
            if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length >
              0 &&
              this.loanRateYr && this.repayWay && this.synthesisRateM) {
              this.calculateByAuditInfo();
            }
          } else {
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
      //大数据风控
      tobigData() {
        this.post(baseurl.BaseUrl + '/rmCreAuditOpinionAction!notSession_getBrRecord.action', {
          applyId: this.applyId
        }).then(res => {
          if (res.obj == null) {
            // alert('社保')
            // this.bigDataLogVisible = true;
            this.$confirm('此进件不存在大数据风控明细！', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              showCancelButton: false
            }).then(() => {}).catch(() => {});
            // alert(this.bigDataLogVisible)
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
      infoSure() {
        // this.bigDataLogVisible = false;
      },
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
      del(delname) {
        this.$store.dispatch('delVisitedViews', {
          name: delname
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
    // 监听器
    watch: {
      rollbackNodeName: function (newValue) {
        // 在回退节点改变的时候 请求主原因
        // 回退 01 new
        // this.getReason('main', '01');
      },
      // mainReason: function(newValue) {
      //   // 在主原因改变的时候请求子原因
      //   this.getReason('second', this.mainReason.id);
      // },
      showFlag: function (newValue) {
        // 统一处理    回退 02 拒绝 01 放弃  07 审批 03 审批结论 spjl 流程轨迹 lcgj
        // if (newValue == '01') { // 拒绝
        //   // 01 拒接 直接请求 主原因
        //   this.getReason('main', '01');
        // } else if (newValue == '07') { // 审批
        //   // 07 拒接 直接请求 主原因
        //   this.getReason('main', '07');
        // }
      },
      coverShow: function (value) {
        // 当 弹窗消失 ,直接清空所有数据
        if (!value) {
          // 清空数据

          // this.taskId = '';
          // this.custName = ''; // 客户名称
          // this.custNo = ''; // 客户code
          // this.certType = ''; // 证件类型
          // this.certCode = ''; // 证件号码
          // this.emerType = ''; // 紧急程度
          // this.appOrgCode = ''; // 门店代码
          // this.proName = ''; // 产品名称
          // this.proCode = ''; //  产品代码
          // this.proId = ''; // 产品id
          // this.opinionFlag = ''; // 标志任务类型
          // this.mainReason = ''; // 回退主原因
          // this.secondaryReason = ''; // 回退子原因
          // reasonRemark
          this.reasonRemark = ''; // 意见描述/原因说明
          // this.appOrgId = ''; // 进件机构id
          // this.applyId = ''; // 申请单id
          this.rollbackNodeName = ''; // 回退节点名称
          // this.dealroperDate = ''; // 经办时间
          // this.creauditAppOperate = ''; // 操作类型

        }
      },
      // 监听 输入请求
      // 月核实收入
      // verIncome: function() {
      //   // 计算 审批记录数据
      //   if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0)
      //     this.calculateByAuditInfo();
      // },
      // 批准期限
      ploanTerm: function () {
        // 计算 审批记录数据

        if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 &&
          this.loanRateYr && this.repayWay && this.synthesisRateM) {
          this.calculateByAuditInfo();
        }
      },
      // // // 批准金额
      // ploanAmt: function() {
      //   // 计算 审批记录数据
      //   if (this.verIncome.length > 0 && this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0) {
      //     this.calculateByAuditInfo();
      //   }
      // },
      // 产品 id
      proId: function () {
        if (this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.verIncome.length > 0 &&
          this.eachTermamt.length > 0 && this.loanRateYr && this.repayWay && this.synthesisRateM)
          this.calculateByAuditInfo();
      },
      /*ploanAmt:function(){
        if (this.proId.length > 0 && this.ploanTerm > 0 && this.ploanAmt.length > 0 && this.verIncome.length > 0 && this.eachTermamt.length > 0 && this.loanRateYr && this.repayWay && this.synthesisRateM)
          this.calculateByAuditInfo();
      }*/
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
    min-width: 300px;
  }

  /* .creditApproval-class .el-form-item {
    height: 35px;
    line-height: 35px;
    margin: 0;
    padding: 0;
  } */

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

  .creditApproval-class .el-collapse-item__header {
    width: 100%;
    height: 40px;
    font-size: 18px;

    background: #eef0f9;
    line-height: 40px;
    padding-left: 10px;
    display: block;
    margin-bottom: 5px;
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
    height: 550px;
    min-width: 685px;
    margin-top: 100px !important;
    /*height: auto;*/
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
    /*height: 400px;*/
    margin: 0 auto;
    /*margin-top: 250px;*/
    overflow: hidden;
    /*padding: 10px;*/
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
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    height: auto;
  }


  /* .creditApproval-class .el-input {
    width: calc( 100% - 130px);
    height: 35px;
    line-height: 35px;
  } */

  /* .creditApproval-class .el-select {
    height: 100%;
    line-height: 100%;
    width: calc( 100% - 130px);
  } */

  .creditApproval-class .el-input--suffix .el-input__inner {
    margin: 0;
    padding-left: 10px;
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






















  /*大数据风控*/

  .creditApproval-class .el-icon-check-big-data {
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

  .creditApproval-class .el-icon-check-social {
    background: url(../../../static/images/social.png);
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
    /*margin-top: 1vh !important;*/
  }


  .creditApproval-class .el-dialog__body {
    padding: 0;
  }

  .creditApproval-class .hung_class .el-dialog__body {
    padding: 10px 15px;
  }

  .creditApproval-class .hung_class .el-dialog__header {
    display: block;
    padding: 20px 20px 10px;
  }

  .creditApproval-class .hung_class .el-dialog__footer {
    padding: 5px 15px 10px;
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
    width: 125px;
  }

  .creditApproval-class .back-form .width-120 .el-form-item__label {
    width: 125px;
  }

  .creditApproval-class .back-form .width-110 .el-form-item__label {
    width: 125px;
  }

  .creditApproval-class .back-form .item-label-show .el-form-item__label {
    margin-right: 15px;
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

  /* .creditApproval-class .el-form-item__content .el-select .el-input {
    width: 100%;
  } */

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




















  /*大数据*/

  /* .creditApproval-class .bigDataLog .el-dialog__header {
    display: block;
  }

  .creditApproval-class .bigDataLog .el-dialog__body {
    padding: 20px 30px;
  }

 */

  /*社保/公积金*/

  /*大数据*/

  /* .creditApproval-class .bigDataLog .el-dialog__header {
    display: block;
  }

  .creditApproval-class .bigDataLog .el-dialog__body {
    padding: 20px 30px;
  } */

</style>
