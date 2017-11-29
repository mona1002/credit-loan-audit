<!-- 电话征信 - 住址电话 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        <el-input v-model="form.custName"></el-input>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.phoneType" placeholder="请选择电话类型">
          <el-option label="住址电话" value="01">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="电话号码:" class="item-column3">
        <el-input v-model="form.phoneNum"></el-input>
      </el-form-item> -->
      <el-form-item label="电话号码" class="item-column3">
        <el-form-item label="13103582965"></el-form-item>
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        <el-select v-model="form.source" placeholder="请选择来源">
          <el-option label="申请表" value="00"></el-option>
          <el-option label="第三方查询" value="01"></el-option>
          <el-option label="其他" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-select v-model="form.answer" placeholder="请选择接听情况">
          <el-option label="无人接" value="00"></el-option>
          <el-option label="拒接" value="01"></el-option>
          <el-option label="停机" value="02"></el-option>
          <el-option label="空号" value="03"></el-option>
          <el-option label="接通" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        <el-select v-model="form.checkStage" placeholder="请选择调查阶段">
          <el-option label="正在调查" value="00"></el-option>
          <el-option label="完成调查" value="01"></el-option>
          <el-option label="调查失败" value="02"></el-option>
          <el-option label="未调查" value="03"></el-option>
        </el-select>
      </el-form-item>
      <div class="address-title">
        录入住址电话调查信息
      </div>
      <el-form-item label="第三方调查结果:">
        <el-input type="textarea" v-model="form.thirdResult"></el-input>
      </el-form-item>
      <el-form-item label="三方查询是否异常:">
        <el-select v-model="form.threeQueries" placeholder="请选择调查情况">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否与家庭联系人为同一接听人:">
        <el-select v-model="form.issameFam" placeholder="请选择调查情况">
          <el-option label="否" value="shanghai"></el-option>
          <el-option label="是" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="与借款人关系:">
        <el-select v-model="form.relBorrower" placeholder="请选择调查情况">
          <el-option label="父母" value="00"></el-option>
          <el-option label="爱人" value="01"></el-option>
          <el-option label="子女" value="02"></el-option>
          <el-option label="其他" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对工作情况:">
        <el-select v-model="form.checkWork" placeholder="请选择调查情况">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对婚姻情况:" class="item-column2">
        <el-select v-model="form.maritalStatus" placeholder="请选择调查情况">
          <el-option label="未婚" value="00"></el-option>
          <el-option label="已婚" value="01"></el-option>
          <el-option label="离异" value="02"></el-option>
          <el-option label="丧偶" value="03"></el-option>
          <el-option label="准备结婚" value="04"></el-option>
          <el-option label="被调查人不清楚" value="05"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对子女情况:" class="item-column2">
        <el-select v-model="form.childrenStatus" placeholder="请选择调查情况">
          <el-option label="有子女" value="00"></el-option>
          <el-option label="无子女" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对地址:">
        <el-select v-model="form.checkAddr" placeholder="请选择调查情况">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对房产:">
        <el-select v-model="form.checkEstate" placeholder="请选择调查情况">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="租房" value="02"></el-option>
          <el-option label="与父母同住" value="03"></el-option>
          <el-option label="被调查人不清楚" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他收入:">
        <el-select v-model="form.otherIncome" placeholder="请选择调查情况">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="近期大项开销:" class="item-column2">
        <el-select v-model="form.recentLargespend" placeholder="请选择调查情况">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="父母:" class="item-column2">
        <el-select v-model="form.parents" placeholder="请选择调查情况">
          <el-option label="退休" value="00"></el-option>
          <el-option label="在职" value="01"></el-option>
          <el-option label="务农" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="兄弟姐妹:" class="item-column2">
        <el-select v-model="form.brother" placeholder="请选择调查情况">
          <el-option label="有" value="00"></el-option>
          <el-option label="无" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="支付家庭生活费用:" class="item-column2">
        <el-select v-model="form.expenses" placeholder="请选择调查情况">
          <el-option label="需要" value="00"></el-option>
          <el-option label="不需要" value="01"></el-option>
          <el-option label="被调查人不清楚" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对家庭固话:" class="item-column2">
        <el-select v-model="form.checkHometel" placeholder="请选择调查情况">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="借款人爱好和品行:">
        <el-input type="textarea" v-model="form.hobbyandBehave"></el-input>
      </el-form-item>
      <el-form-item label="调查结论:">
        <el-input type="textarea" v-model="form.conclusion"></el-input>
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
      }
    }
  },
  created(){
    this.custName = '';
    this.phoneNum = '';
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addHomeTelLog',this.form)
      .then( res => {
        console.log(res);
      })
    }
  }
}

</script>
<style>
.address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
}











/* */

.el-form-item__label {
  width: 150px !important;
}

.el-form-item {
  margin-bottom: 0;
}










/* 三列 */

.item-column3 {
  width: 33%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}










/* 两列 */

.item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}






/* 表单提交 */

.address-submit {
  margin: 0;
  padding: 0;
  float: right;
  margin: 20px;
}

</style>
