<!-- 电话征信 - 住址电话 -->
<template>
  <div>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
    </div>
    <ul class="content-ul" style="margin-left:15px;">
      <li class="item-column3">
        <div class="left-title">电话名称：</div>
        <div class="dis-input">
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型：</div>
        <div>
          <el-select v-model="phoneType" :disabled="true">
            <el-option label="住址电话" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码：</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:80px;">*</span> 来源：</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="source">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">*</span> 接听情况：
        </div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="answer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>调查阶段：</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="checkStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column1" v-show="source=='02'">
        <div class="left-title">其他来源说明：</div>
        <div class="textarea-class">
          <el-input v-model="sourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入住址电话调查信息</span>
    </div>
    <ul style="margin-left:15px;">
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">第三方查询结果：</div>
          <div class="textarea-class">
            <el-input v-model="thirdResult" type="textarea" :rows="3" resize=none :maxlength="500"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title"><span class="require-icon" style="left:0px;">*</span>三方查询是否异常：</div>
          <!-- <div> -->
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <el-select v-model="threeQueries">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-tooltip>
          <!-- </div> -->
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="threeQueries=='1'"><span class="require-icon" style="left:80px;">*</span>说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="threeQueries=='1'">
              <el-input v-model="exceptionState" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2">是否与家庭联系人为同一人接听：</div>
          <div>
            <el-select v-model="issameFam">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="issameFam=='0'">说明：</div>
          <div class="textarea-class2" v-show="issameFam=='0'">
            <el-input v-model="issameFamtxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">与借款人关系：</div>
          <div>
            <el-select v-model="relBorrower">
              <el-option label="父母" value="00"></el-option>
              <el-option label="爱人" value="01"></el-option>
              <el-option label="子女" value="02"></el-option>
              <el-option label="其他" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="relBorrower=='03'">说明：</div>
          <div class="textarea-class2" v-show="relBorrower=='03'">
            <el-input v-model="relBorrowertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对工作情况：</div>
          <div>
            <el-select v-model="checkWork">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="checkWork=='01'">说明：</div>
          <div class="textarea-class2" v-show="checkWork=='01'">
            <el-input v-model="checkWorktxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对婚姻情况：</div>
          <div>
            <el-select v-model="maritalStatus">
              <el-option label="未婚" value="00"></el-option>
              <el-option label="已婚" value="01"></el-option>
              <el-option label="离异" value="02"></el-option>
              <el-option label="丧偶" value="03"></el-option>
              <el-option label="准备结婚" value="04"></el-option>
              <el-option label="被调查人不清楚" value="05"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">核对子女情况：</div>
          <div>
            <el-select v-model="maritalStatustxt">
              <el-option label="有子女" value="00"></el-option>
              <el-option label="无子女" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3 item-column3-null">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对地址：</div>
          <div>
            <el-select v-model="checkAddr">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="checkAddr=='01'">说明：</div>
          <div class="textarea-class2" v-show="checkAddr=='01'">
            <el-input v-model="checkAddrtxt" type="textarea" resize=none :rows="2" :maxlength="500"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对房产：</div>
          <div>
            <el-select v-model="checkEstate">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="租房" value="02"></el-option>
              <el-option label="与父母同住" value="03"></el-option>
              <el-option label="被调查人不清楚" value="04"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="checkEstate=='00'">说明：</div>
          <div class="textarea-class2" v-show="checkEstate=='00'">
            <el-input v-model="checkEstatetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">其他收入：</div>
          <div>
            <el-select v-model="otherIncome">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="otherIncome=='00'">说明：</div>
          <div class="textarea-class2" v-show="otherIncome=='00'">
            <el-input v-model="otherIncometxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">近期大项开销：</div>
          <div>
            <el-select v-model="recentLargespend">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="recentLargespend=='00'">说明：</div>
          <div class="textarea-class2" v-show="recentLargespend=='00'">
            <el-input v-model="recentlArgespendInfo" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">父母：</div>
          <div>
            <el-select v-model="parents">
              <el-option label="退休" value="00"></el-option>
              <el-option label="在职" value="01"></el-option>
              <el-option label="务农" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="parents=='01'">说明：</div>
          <div class="textarea-class2" v-show="parents=='01'">
            <el-input v-model="parentsInfo" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">是否有兄弟姐妹：</div>
          <div>
            <el-select v-model="brother">
              <el-option label="有" value="00"></el-option>
              <el-option label="无" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="brother=='00'">说明：</div>
          <div class="textarea-class2" v-show="brother=='00'">
            <el-input v-model="brothertxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">支付家庭生活费用：</div>
          <div>
            <el-select v-model="expenses">
              <el-option label="需要" value="00"></el-option>
              <el-option label="不需要" value="01"></el-option>
              <el-option label="被调查人不清楚" value="02"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="expenses=='00'">说明：</div>
          <div class="textarea-class2" v-show="expenses=='00'">
            <el-input v-model="expensestxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对家庭固话：</div>
          <div>
            <el-select v-model="checkHometel">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="checkHometel=='01'">说明：</div>
          <div class="textarea-class2" v-show="checkHometel=='01'">
            <el-input v-model="checkHometeltxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
        <!-- <li class="item-column3">
          <div class="left-title"></div>
          <div class="textarea-class2">
          </div>
        </li> -->
      </div>
      <li class="item-column1">
        <div class="left-title">借款人爱好和品行：</div>
        <div class="textarea-class">
          <el-input v-model="hobbyandBehave" type="textarea" :rows="3" resize=none :maxlength="500"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>调查结果：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class">
            <el-input v-model="conclusion" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column1 submit-class">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //threeQueries: '',
      // custName: '',
      phoneType: '01',
      // phoneNum: '',
     /* source: '',
      answer: '',
      checkStage: '',
      sourceDesc: '',
      thirdResult: '',
      issameFam: '',
      relBorrower: '',
      checkWork: '',
      maritalStatustxt: '',
      maritalStatus: '',
      checkAddr: '',
      checkEstate: '',
      otherIncome: '',
      recentLargespend: '',
      parents: '',
      brother: '',
      threeQueries: '',
      exceptionState: '',
      expenses: '',
      checkStage: '',
      checkHometel: '',
      hobbyandBehave: '',
      conclusion: '',
      issameFamtxt: '',
      relBorrowertxt: '',
      checkWorktxt: '',
      checkAddrtxt: '',
      checkEstatetxt: '',
      otherIncometxt: '',
      recentlArgespendInfo: '',
      parentsInfo: '',
      brothertxt: '',
      expensestxt: '',
      checkHometeltxt: '',*/
      phoneId: '', // 用来区分是添加 还是 修改 
      resMsg:''
    }
  },
  props: ['custName', 'phoneNum', 'applyId', 'formId', 'isFull','source', "answer", "checkStage", "sourceDesc", "thirdResult", "threeQueries", "exceptionState", "issameFam", "issameFamtxt", "relBorrower", "relBorrowertxt", "checkWork", "checkWorktxt", "maritalStatus", "maritalStatustxt", "checkAddr", "checkAddrtxt", "checkEstate", "checkEstatetxt", "otherIncome", "otherIncometxt", "recentLargespend", "recentlArgespendInfo", "parents", "parentsInfo", "brother", "brothertxt", "expenses", "expensestxt", "checkHometel", "checkHometeltxt", "hobbyandBehave", "conclusion"],
  mounted() {
    this.phoneType = '01'; // 住址电话
    if (this.isFull == true) { // 全屏
      console.log('全屏');
      $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      $('.item-column1 textarea').css("width", "100%")
      $('.item-column1 textarea').css("width", "100%")
      // 提交按钮
      $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      // 显示 column2
      // $('.item-column3').css({
      //   "min-height" :"50px"
      // })
      $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
      $('.item-column2 textarea').css("width", "100%");
    } else if (this.isFull == false) { // 分屏
      console.log("分屏");
      // $(".textarea-class").css("minWidth", "300px")
      // 提交按钮
      $('.submit-class').css("margin-left", "370px")

      $('.item-column3').css({
        "min-height": "0px",
        "margin-bottom": "10px"
      })
      $('.item-column1 textarea').css("width", "300px")
      $('.item-column2 textarea').css("width", "300px")
    }
  },
  methods: {
    submitForm() {
      console.log('submit!');
      // 接听情况   三方查询是否异常/是  异常说明
      if (!this.source || !this.answer || !this.checkStage || !this.threeQueries || (this.threeQueries == '1' && !this.exceptionState) || !this.conclusion) {
        this.$message({
          message: '请输入必填项!',
          type: 'warning'
        });
        return;
      }
      this.open();
    },
    // open 打开 是否确认提交弹窗
    open() {
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
            console.log(this.taskId)
            // 点击 确认 提交 方法
            this.post('/creTelResearchHis/addHomeTelLog', {
              cretelinvest: {
                custName: this.custName,
                phoneType: this.phoneType,
                phoneNum: this.phoneNum,
                source: this.source,
                answer: this.answer,
                checkStage: this.checkStage,
                sourceDesc: this.sourceDesc, // 其他来源说明
                applyId: this.applyId,
                id: this.phoneId
              },
              cretelhometel: {
                applyId: this.applyId,
                id: this.phoneId,
                thirdResult: this.thirdResult,
                issameFam: this.issameFam,
                relBorrower: this.relBorrower,
                checkWork: this.checkWork,
                maritalStatustxt: this.maritalStatustxt, // 核对子女情况说明
                maritalStatus: this.maritalStatus,
                checkAddr: this.checkAddr,
                checkEstate: this.checkEstate, // 核对房产
                otherIncome: this.otherIncome,
                recentLargespend: this.recentLargespend,
                parents: this.parents,
                brother: this.brother,
                threeQueries: this.threeQueries,
                exceptionState: this.exceptionState, // 异常项说明
                expenses: this.expenses, // 支付家庭费用
                checkStage: this.checkStage,
                checkHometel: this.checkHometel, // 核对家庭固话
                hobbyandBehave: this.hobbyandBehave, // 借款人爱好和品行
                conclusion: this.conclusion, // 调查结果
                issameFamtxt: this.issameFamtxt, // 是否与家庭联系人为同一人接听说明
                relBorrowertxt: this.relBorrowertxt, // 与借款人关系说明
                checkWorktxt: this.checkWorktxt, // 工作情况说明
                checkAddrtxt: this.checkAddrtxt, // 核对地址说明
                checkEstatetxt: this.checkEstatetxt, // 核对房产说明
                otherIncometxt: this.otherIncometxt, // 其他收入说明
                recentlArgespendInfo: this.recentlArgespendInfo, // 近期大项开销说明
                parentsInfo: this.parentsInfo, // 父母情况说明
                brothertxt: this.brothertxt, // 兄弟姐妹情况说明
                expensestxt: this.expensestxt, // 支付家庭费用说明
                checkHometeltxt: this.checkHometeltxt, // 核对家庭固话说明
              }
            }).then(res => {
              console.log(res);
              console.log(res.statusCode);
              if (res.statusCode == '200') {
                this.phoneId ='';
                // 清数据
                 this.source = '';
                 this.answer = '';
                 this.checkStage = '';
                 this.sourceDesc = '';
                 this.thirdResult = '';
                 this.issameFam = '';
                 this.relBorrower = '';
                 this.checkWork = '';
                 this.maritalStatustxt = '';
                 this.maritalStatus = '';
                 this.checkAddr = '';
                 this.checkEstate = '';
                 this.otherIncome = '';
                 this.recentLargespend = '';
                 this.parents = '';
                 this.brother = '';
                 this.threeQueries = '';
                 this.exceptionState = '';
                 this.expenses = '';
                 this.checkStage = '';
                 this.checkHometel = '';
                 this.hobbyandBehave = '';
                 this.conclusion = '';
                 this.issameFamtxt = '';
                 this.relBorrowertxt = '';
                 this.checkWorktxt = '';
                 this.checkAddrtxt = '';
                 this.checkEstatetxt = '';
                 this.otherIncometxt = '';
                 this.recentlArgespendInfo = '';
                 this.parentsInfo = '';
                 this.brothertxt = '';
                 this.expensestxt = '';
                 this.checkHometeltxt = '';
                // 提交数据成功,广播事件 重新刷新列表
                this.$emit('updateList');
                this.$emit('updateTree');
                this.resMsg = res.msg;
                done();
              } else {
                this.resMsg = res.msg;
                instance.confirmButtonText = '';
              }
              instance.confirmButtonLoading = false;
            });
          } else {
            // this.$message({ message: this.resMsg, type: 'warning' });
            done();
          }
        }
      }).then(action => {
        this.$message({ type: 'success', message: this.resMsg });

      });
    }
  },
  watch: {
    // 监听  
    // 来源
    source: function() {
      console.log(this.source)
      this.sourceDesc = '';
    },
    // 其他来源说明
    sourceDesc: function() {
      if (this.sourceDesc.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;

    },
    // 第三方查询结果
    thirdResult: function() {
      if (this.thirdResult.length == 500)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;

    },
    // 三方查询异常
    threeQueries: function() {
      this.exceptionState = '';
    },
    // 三方查询异常说明
    exceptionState: function() {
      if (this.exceptionState.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 是否为同一接听人
    issameFam: function() {
      this.issameFamtxt = '';
    },
    // 是否为同一接听人异常说明
    issameFamtxt: function() {
      if (this.issameFamtxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 与借款人关系
    relBorrower: function() {
      this.relBorrowertxt = '';
    },
    // 与借款人关系其他说明
    relBorrowertxt: function() {
      if (relBorrowertxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 核对工作情况
    checkWork: function() {
      this.checkWorktxt = '';
    },
    // 核对工作情况 其他说明
    checkWorktxt: function() {
      if (this.checkWorktxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 核对地址
    checkAddr: function() {
      this.checkAddrtxt = '';
    },
    // 核对地址说明
    checkAddrtxt: function() {
      if (this.checkAddrtxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 核对房产
    checkEstate: function() {
      this.checkEstatetxt = '';
    },
    // 房产说明
    checkEstatetxt: function() {
      if (this.checkEstatetxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 其他收入
    otherIncome: function() {
      this.otherIncometxt = '';
    },
    // 其他收入说明
    otherIncometxt: function() {
      if (this.otherIncometxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 父母
    parents: function() {
      this.parentsInfo = '';
    },
    // 父母说明
    parentsInfo: function() {
      if (this.parentsInfo.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 兄弟姐妹
    brother: function() {
      this.brothertxt = '';
    },
    // 兄弟姐妹说明
    brothertxt: function() {
      if (this.brothertxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 支付家庭生活费用
    expenses: function() {
      this.expensestxt = '';
    },
    // 支付家庭生活费用说明
    expensestxt: function() {
      if (this.expensestxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 核对家庭固话
    checkHometel: function() {
      this.checkHometeltxt = '';
    },
    // 核对家庭固话说明
    checkHometeltxt: function() {
      if (this.checkHometeltxt.length == 100)
        this.$message({
          message: '输入长度不能超出100',
          type: 'warning'
        });
      return;
    },
    // 借款人爱好和品行
    hobbyandBehave: function() {
      if (this.hobbyandBehave.length == 500) {
        this.$message({
          message: '输入长度不能超出500',
          type: 'warning'
        });
        return;
      }
    },
    // 调查结果
    conclusion: function() {
      if (this.conclusion.length == 500) {
        this.$message({
          message: '输入长度不能超出500',
          type: 'warning'
        });
        return;
      }
    },
    // 判断全屏 , 更改样式
    isFull: function(val) {
      if (val == true) { // 全屏
        console.log('全屏');
        $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
        $('.item-column1 textarea').css("width", "100%")
        // 提交按钮
        $('.submit-class').css("margin-left", "calc( 66% - 140px)")
        // 显示 column2
        // $('.item-column3').css({
        //   "min-height": "50px"
        // })
        $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
        $('.item-column2 textarea').css("width", "100%");
      } else if (val == false) { // 分屏
        console.log("分屏");
        // $(".textarea-class").css("minWidth", "300px")
        // 提交按钮
        $('.submit-class').css("margin-left", "370px")

        $('.item-column3').css({
          "min-height": "0px",
          "margin-bottom": "10px"
        })
        $('.item-column1 textarea').css("width", "300px")
        $('.item-column2 textarea').css("width", "300px")
      }
    }

  }
}

</script>
