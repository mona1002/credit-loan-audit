<!-- 电话征信 - 工作证明人 -->
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
      <span class="headFont">录入工作证明人调查信息</span>
    </div>
    <ul>
      <li class="item-column2">
        <div class="left-title">微信/支付宝是否异常</div>
        <div>
          <el-select v-model="mobilepayment" placeholder="请选择调查情况">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">异常项说明</div>
        <div>
          <el-input v-model="mobilepaymenttxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">接电话人身份</div>
        <div>
          <el-select v-model="answerIdentity" placeholder="请选择调查情况">
            <el-option label="同事" value="00"></el-option>
            <el-option label="本人" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="answerIdentity=='00'">
          <el-input v-model="answertxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对单位工作情况</div>
        <div>
          <el-select v-model="checkJob" placeholder="请选择调查情况">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkJob=='01'">
          <el-input v-model="checkJobtxt"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">调查结论</div>
        <div>
          <el-input type="textarea" v-model="conclusion" :row="2" resize=none></el-input>
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
      // custName: '',
      phoneType: '05',
      // phoneNum: '',
      source: '',
      answer: '',
      checkStage: '',
      sourceDesc: '',
      answerIdentity: '',
      answertxt: '',
      checkJob: '',
      checkJobtxt: '',
      mobilepayment: '',
      mobilepaymenttxt: '',
      conclusion: '',
      phoneId: ''
    }
  },
  props: ['custName', 'phoneNum', 'applyId', 'formId'],
  mounted() {
    this.phoneType = '05'; // 住址电话

  },
  methods: {
    submitForm() {
      console.log('submit!');

      this.post('/creTelResearchHis/addTeljobref', {
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
          creteljobref: {
            applyId: this.applyId,
            id: this.phoneId,
            answer: this.answerIdentity, // 接电话人身份
            answertxt: this.answertxt,
            checkJob: this.checkJob,
            checkJobtxt: this.checkJobtxt,
            mobilepayment: this.mobilepayment,
            mobilepaymenttxt: this.mobilepaymenttxt,
            conclusion: this.conclusion
          }
        })
        .then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.phoneId = res.data.id;

            // 清数据
            this.source = '';
            this.answer = '';
            this.checkStage = '';
            this.sourceDesc = '';
            this.answerIdentity = '';
            this.answertxt = '';
            this.checkJob = '';
            this.checkJobtxt = '';
            this.mobilepayment = '';
            this.mobilepaymenttxt = '';
            this.conclusion = '';


            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');
          }
        })
    }
  },
  watch: {
    source: function() {
      this.sourceDesc = '';
    },
    answerIdentity: function() {
      this.answertxt = '';
    },
    checkJob: function() {
      this.checkJobtxt = '';
    }
  }
}

</script>
