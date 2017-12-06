<!-- 电话征信 - 家庭联系人 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3 dis-input">
        <el-input v-model="custName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.cretelinvest.phoneType">
          <el-option label="家庭联系人" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3 dis-input">
        <el-input v-model="phoneNum" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        <el-select v-model="form.cretelinvest.source">
          <el-option label="申请表" value="00"></el-option>
          <el-option label="第三方查询" value="01"></el-option>
          <el-option label="其他" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-select v-model="form.cretelinvest.answer">
          <el-option label="无人接" value="00"></el-option>
          <el-option label="拒接" value="01"></el-option>
          <el-option label="停机" value="02"></el-option>
          <el-option label="空号" value="03"></el-option>
          <el-option label="接通" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        <el-select v-model="form.cretelinvest.checkStage">
          <el-option label="正在调查" value="00"></el-option>
          <el-option label="完成调查" value="01"></el-option>
          <el-option label="调查失败" value="02"></el-option>
          <el-option label="未调查" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他来源说明:" class="item-column3">
        <el-input v-model="form.cretelinvest.sourceDesc"></el-input>
      </el-form-item>
      <div class="address-title">
        录入家庭联系人电话调查信息
      </div>
      <el-form-item label="第三方查询信息:" class="item-column1">
        <el-input type="textarea" v-model="form.cretelfcontact.thirdResult" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item label="三方查询是否异常:" class="item-column2">
        <el-select v-model="form.cretelfcontact.threeQueries">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常说明:" class="item-column2">
        <el-input v-model="form.cretelfcontact.threeQueriestxt"></el-input>
      </el-form-item>
      <el-form-item label="微信/支付宝是否异常:" class="item-column2">
        <el-select v-model="form.cretelfcontact.mobilepayment">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常项说明:" class="item-column2">
        <el-input v-model="form.cretelfcontact.mobilepaymenttxt"></el-input>
      </el-form-item>
      <!-- 是否与家庭联系人为同一接听人 -->
      <el-form-item label="是否为同一接听人:" class="item-column2">
        <el-select v-model="form.cretelfcontact.issameFam">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input v-model="form.cretelfcontact.issameFamtxt"></el-input>
      </el-form-item>
      <el-form-item label="与借款人关系:" class="item-column2">
        <el-select v-model="form.cretelfcontact.relBorrower">
          <el-option label="父母" value="00"></el-option>
          <el-option label="爱人" value="01"></el-option>
          <el-option label="子女" value="02"></el-option>
          <el-option label="其他" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input v-model="form.cretelfcontact.relBorrowertxt"></el-input>
      </el-form-item>
      <el-form-item label="核对工作情况:" class="item-column2">
        <el-select v-model="form.cretelfcontact.checkWork">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input v-model="form.cretelfcontact.checkWorktxt"></el-input>
      </el-form-item>
      <el-form-item label="核对婚姻情况:" class="item-column2">
        <el-select v-model="form.cretelfcontact.maritalStatus">
          <el-option label="未婚" value="00"></el-option>
          <el-option label="已婚" value="01"></el-option>
          <el-option label="离异" value="02"></el-option>
          <el-option label="丧偶" value="03"></el-option>
          <el-option label="准备结婚" value="04"></el-option>
          <el-option label="被调查人不清楚" value="05"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对子女情况:" class="item-column2">
        <el-select v-model="form.cretelfcontact.maritalStatustxt">
          <el-option label="有子女" value="00"></el-option>
          <el-option label="无子女" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核实居住地址:" class="item-column2">
        <el-select v-model="form.cretelfcontact.checkAddr">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input v-model="form.cretelfcontact.checkAddrtxt"></el-input>
      </el-form-item>
      <el-form-item label="核对房产:" class="item-column2">
        <el-select v-model="form.cretelfcontact.checkEstate">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="租房" value="02"></el-option>
          <el-option label="与父母同住" value="03"></el-option>
          <el-option label="被调查人不清楚" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input v-model="form.cretelfcontact.checkEstatetxt"></el-input>
      </el-form-item>
      <el-form-item label="其他收入:" class="item-column2">
        <el-select v-model="form.cretelfcontact.otherIncome">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input v-model="form.cretelfcontact.otherIncometxt"></el-input>
      </el-form-item>
      <el-form-item label="调查结果:" class="item-column2">
        <el-input type="textarea" v-model="form.cretelfcontact.conclusion" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item class="address-submit">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        cretelinvest: {
          custName: '',
          phoneType: '',
          phoneNum: '',
          source: '',
          answer: '',
          sourceDesc: '',
          checkStage: '',
          applyId: this.applyId
        },
        cretelfcontact: {
          custName: '',
          phoneType: '',
          phoneNum: '',
          source: '',
          answer: '',
          applyId: this.applyId,
          thirdResult: '', // 第三方查询信息
          threeQueries:'', // 三方异常
          threeQueriestxt:'',// 三方异常说明
          issameFam: '',
          issameFamtxt: '',
          wetherThirdAbnormal: '',
          wetherThirdAbnormaltxt: '',
          mobilepayment: '',
          mobilepaymenttxt: '', // 微信/支付宝异常说明
          relBorrower: '',
          relBorrowertxt: '',
          checkWork: '',
          checkWorktxt: '',
          maritalStatus: '',
          maritalStatustxt: '',
          checkAddr: '',
          checkAddrtxt: '',
          checkEstate: '',
          checkEstatetxt: '',
          otherIncome: '',
          otherIncometxt: '',
          conclusion: ''
        }
      }
    }
  },
  props: ['custName', 'phoneNum','applyId'],
  mounted() {
    this.form.cretelinvest.custName = this.custName;
    this.form.cretelinvest.phoneNum = this.phoneNum;
    this.form.cretelinvest.phoneType = '03'; // 家庭联系人电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addTelfContract', this.form)
        .then(res => {
          console.log(res);
          if (res.statusCode == '200')
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
        })
    }
  }
}

</script>
