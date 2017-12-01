<!-- 电话征信 - 住址电话 -->
<template>
  <div class="address-form">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3 dis-input">
        <el-input v-model="custName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.phoneType" disabled placeholder="" >
          <el-option label="住址电话" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码" class="item-column3 dis-input">
        <el-input v-model="phoneNum" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        <el-select v-model="form.source" placeholder="">
          <el-option label="申请表" value="00"></el-option>
          <el-option label="第三方查询" value="01"></el-option>
          <el-option label="其他" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-select v-model="form.answer" placeholder="">
          <el-option label="无人接" value="00"></el-option>
          <el-option label="拒接" value="01"></el-option>
          <el-option label="停机" value="02"></el-option>
          <el-option label="空号" value="03"></el-option>
          <el-option label="接通" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        <el-select v-model="form.checkStage" placeholder="">
          <el-option label="正在调查" value="00"></el-option>
          <el-option label="完成调查" value="01"></el-option>
          <el-option label="调查失败" value="02"></el-option>
          <el-option label="未调查" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他来源说明" class="item-column2">
        <el-input></el-input>
      </el-form-item>
      <div class="address-title">
        录入住址电话调查信息
      </div>
      <el-form-item label="第三方调查结果:" class="item-column1">
        <el-input v-model="form.thirdResult" type="textarea" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item label="三方查询是否异常:" class="item-column2">
        <el-select v-model="form.threeQueries" placeholder="">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <!-- 三方异常出 -->
      <el-form-item label="异常说明" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <!-- 家庭联系人 -->
      <el-form-item label="是否与为同一接听人:" class="item-column2 min-lin-class">
        <el-select v-model="form.issameFam" placeholder="">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <!-- 与家庭联系人不是同一接听人 -->
      <el-form-item label="-" class="item-column2">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="与借款人关系:" class="item-column2">
        <el-select v-model="form.relBorrower" placeholder="">
          <el-option label="父母" value="00"></el-option>
          <el-option label="爱人" value="01"></el-option>
          <el-option label="子女" value="02"></el-option>
          <el-option label="其他" value="03"></el-option>
        </el-select>
      </el-form-item>
      <!-- 与借款人关系  其他 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="核对工作情况:" class="item-column2">
        <el-select v-model="form.checkWork" placeholder="">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <!-- 工作情况  基本一致/不一致 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="核对婚姻情况:" class="item-column2">
        <el-select v-model="form.maritalStatus" placeholder="">
          <el-option label="未婚" value="00"></el-option>
          <el-option label="已婚" value="01"></el-option>
          <el-option label="离异" value="02"></el-option>
          <el-option label="丧偶" value="03"></el-option>
          <el-option label="准备结婚" value="04"></el-option>
          <el-option label="被调查人不清楚" value="05"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对子女情况:" class="item-column2">
        <el-select v-model="form.childrenStatus" placeholder="">
          <el-option label="有子女" value="00"></el-option>
          <el-option label="无子女" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对地址:" class="item-column2">
        <el-select v-model="form.checkAddr" placeholder="">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <!-- 核对地址 基本一致/不一致 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="核对房产:" class="item-column2">
        <el-select v-model="form.checkEstate" placeholder="">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="租房" value="02"></el-option>
          <el-option label="与父母同住" value="03"></el-option>
          <el-option label="被调查人不清楚" value="04"></el-option>
        </el-select>
      </el-form-item>
      <!-- 核对房产  有 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="其他收入:" class="item-column2">
        <el-select v-model="form.otherIncome" placeholder="">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <!-- 其他收入  有 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="近期大项开销:" class="item-column2">
        <el-select v-model="form.recentLargespend" placeholder="">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <!-- 近期大项开销  有 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="父母:" class="item-column2">
        <el-select v-model="form.parents" placeholder="">
          <el-option label="退休" value="00"></el-option>
          <el-option label="在职" value="01"></el-option>
          <el-option label="务农" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <!-- 父母  在职-->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="兄弟姐妹:" class="item-column2">
        <el-select v-model="form.brother" placeholder="">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <!-- 兄弟姐妹  有 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="支付家庭生活费用:" class="item-column2">
        <el-select v-model="form.expenses" placeholder="">
          <el-option label="需要" value="00"></el-option>
          <el-option label="不需要" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <!-- 支付家庭生活费用  需要 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="核对家庭固话:" class="item-column2">
        <el-select v-model="form.checkHometel" placeholder="">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <!-- 核对家庭收入  基本一致/不一致 -->
      <el-form-item label="-" class="item-column2">
        <el-input v-model="other"></el-input>
      </el-form-item>
      <el-form-item label="借款人爱好和品行:" class="item-column1">
        <el-input v-model="form.hobbyandBehave" type="textarea" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item label="调查结论:" class="item-column1">
        <el-input v-model="form.conclusion" type="textarea" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item class="address-submit item-column1">
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
        custName: '', // 姓名
        phoneType: '', // 类型  带入的,不可编辑
        phoneNum: '', // 号码
        source: '', // 来源
        answer: '', // 接听情况
        checkStage: '', // 调查阶段
        thirdResult: '', // 第三方查询结果
        threeQueries: '', // 三方查询结果是否异常
        issameFam: '', // 是否与家庭联系人为同一接听人
        relBorrower: '', // 与借款人关系
        checkWork: '', // 核对工作情况
        maritalStatus: '', // 核对婚姻情况
        childrenStatus: '', // 核对子女情况
        checkAddr: '', // 核对地址
        checkEstate: '', // 核对房产
        otherIncome: '', // 其他收入
        recentLargespend: '', // 近期大项开销
        parents: '', // 父母
        brother: '', // 兄弟姐妹
        expenses: '', // 支付家庭生活费用
        checkHometel: '', // 核对家庭固话
        hobbyandBehave: '', // 借款人爱好和品行
        conclusion: '' // 调查结论
      },
      other: ''
    }
  },
  props: ['custName', 'phoneNum'],
  mounted() {
    this.form.custName = this.custName;
    this.form.phoneNum = this.phoneNum;
    this.form.phoneType = '01'; // 住址电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addHomeTelLog', this.form)
        .then(res => {
          console.log(res);
        })
    }
  }
}

</script>
