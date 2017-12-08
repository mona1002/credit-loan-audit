<!-- 电话征信 - 住址电话 -->
<template>
  <div>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
    </div>
    <ul>
      <li class="item-column3">
        <div class="left-title">客户名称:</div>
        <div class="dis-input">
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型:</div>
        <div>
          <el-select v-model="phoneType" disabled>
            <el-option label="住址电话" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码:</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">来源:</div>
        <div>
          <el-select v-model="source">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">接听情况:</div>
        <div>
          <el-select v-model="answer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">调查阶段:</div>
        <div>
          <el-select v-model="checkStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3" v-show="source=='02'">
        <div class="left-title">其他来源说明:</div>
        <div>
          <el-input v-model="sourceDesc"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入住址电话调查信息</span>
    </div>
    <ul>
      <li class="item-column1">
        <div class="left-title">第三方查询结果:</div>
        <div class="textarea-class">
          <el-input v-model="thirdResult" type="textarea" :row="2" resize=none></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">三方查询是否异常:</div>
        <div>
          <el-select v-model="threeQueries">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">异常说明:</div>
        <div>
          <el-input v-model="exceptionState"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">是否为同一接听人:</div>
        <div>
          <el-select v-model="issameFam">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="issameFam=='0'">
          <el-input v-model="issameFamtxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">与借款人关系:</div>
        <div>
          <el-select v-model="relBorrower">
            <el-option label="父母" value="00"></el-option>
            <el-option label="爱人" value="01"></el-option>
            <el-option label="子女" value="02"></el-option>
            <el-option label="其他" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="relBorrower=='03'">
          <el-input v-model="relBorrowertxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作情况:</div>
        <div>
          <el-select v-model="checkWork">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkWork=='01'">
          <el-input v-model="checkWorktxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对婚姻情况:</div>
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
      <li class="item-column2">
        <div class="left-title">核对子女情况:</div>
        <div>
          <el-select v-model="maritalStatustxt">
            <el-option label="有子女" value="00"></el-option>
            <el-option label="无子女" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对地址:</div>
        <div>
          <el-select v-model="checkAddr">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkAddr=='01'">
          <el-input v-model="checkAddrtxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对房产:</div>
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
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkEstate=='00'">
          <el-input v-model="checkEstatetxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">其他收入:</div>
        <div>
          <el-select v-model="otherIncome">
            <el-option label="有" value="00"></el-option>
            <el-option label="无" value="01"></el-option>
            <el-option label="被调查人不清楚" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="otherIncome=='00'">
          <el-input v-model="otherIncometxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">近期大项开销:</div>
        <div>
          <el-select v-model="recentLargespend">
            <el-option label="有" value="00"></el-option>
            <el-option label="无" value="01"></el-option>
            <el-option label="被调查人不清楚" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="recentLargespend=='00'">
          <el-input v-model="recentlArgespendInfo"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">父母:</div>
        <div>
          <el-select v-model="parents">
            <el-option label="退休" value="00"></el-option>
            <el-option label="在职" value="01"></el-option>
            <el-option label="务农" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="parents=='01'">
          <el-input v-model="parentsInfo"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">兄弟姐妹:</div>
        <div>
          <el-select v-model="brother">
            <el-option label="有" value="00"></el-option>
            <el-option label="无" value="01"></el-option>
            <el-option label="被调查人不清楚" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="brother=='00'">
          <el-input v-model="brothertxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">支付家庭生活费用:</div>
        <div>
          <el-select v-model="expenses">
            <el-option label="需要" value="00"></el-option>
            <el-option label="不需要" value="01"></el-option>
            <el-option label="被调查人不清楚" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="expenses=='00'">
          <el-input v-model="expensestxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对家庭固话:</div>
        <div>
          <el-select v-model="checkHometel">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkHometel=='01'">
          <el-input v-model="checkHometeltxt"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">借款人爱好和品行:</div>
        <div>
          <el-input v-model="hobbyandBehave" type="textarea" :row="2" resize=none></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">调查结论:</div>
        <div>
          <el-input v-model="conclusion" type="textarea" :row="2" resize=none></el-input>
        </div>
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
      threeQueries: '',
      // custName: '',
      phoneType: '01',
      // phoneNum: '',
      source: '',
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
      checkHometeltxt: '',
      phoneId: '' // 用来区分是添加 还是 修改 
    }
  },
  props: ['custName', 'phoneNum', 'applyId', 'formId'],
  mounted() {
    this.phoneType = '01'; // 住址电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
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
            conclusion: this.conclusion, // 调查结论
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
        })
        .then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.phoneId = res.data.id;
            console.log(this.phoneId);

            // 清数据
            this.source == '';
            this.answer == '';
            this.checkStage == '';
            this.sourceDesc == '';
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
          }
        })
    }
  },
  watch: {
    // 监听  
    // 来源
    source: function() {
      console.log(source)
      this.sourceDesc = '';
    },
    // 三方查询异常
    threeQueries: function() {
      this.exceptionState = '';
    },
    // 是否为同一接听人
    issameFam: function() {
      this.issameFamtxt = '';
    },
    // 与借款人关系
    relBorrower: function() {
      this.relBorrowertxt = '';
    },
    // 核对工作情况
    checkWork: function() {
      this.checkWorktxt = '';
    },
    // 核对地址
    checkAddr: function() {
      this.checkAddrtxt = '';
    },
    // 核对房产
    checkEstate: function() {
      this.checkEstatetxt = '';
    },
    // 其他收入
    otherIncome: function() {
      this.otherIncometxt = '';
    },
    // 父母
    parents: function() {
      this.parentsInfo = '';
    },
    // 兄弟姐妹
    brother: function() {
      this.brothertxt = '';
    },
    // 支付家庭生活费用
    expenses: function() {
      this.expensestxt = '';
    },
    // 核对家庭固话
    checkHometel: function() {
      this.checkHometeltxt = '';
    }
  }
}

</script>
