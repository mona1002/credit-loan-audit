<!-- 电话征信 - 工作证明人 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.region" placeholder="请选择电话类型">
          <el-option label="住址电话" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="电话号码" class="item-column3">
        <el-form-item label="13103582965"></el-form-item>
      </el-form-item> -->
      <el-form-item label="来源:" class="item-column3">
        <el-select v-model="form.region" placeholder="请选择来源">
          <el-option label="申请表" value="shanghai"></el-option>
          <el-option label="第三方查询" value="beijing"></el-option>
          <el-option label="其他" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-select v-model="form.region" placeholder="请选择接听情况">
          <el-option label="无人接" value="shanghai"></el-option>
          <el-option label="拒接" value="beijing"></el-option>
          <el-option label="停机" value="beijing"></el-option>
          <el-option label="空号" value="beijing"></el-option>
          <el-option label="接通" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        <el-select v-model="form.region" placeholder="请选择调查阶段">
          <el-option label="正则调查" value="shanghai"></el-option>
          <el-option label="完成调查" value="beijing"></el-option>
          <el-option label="调查失败" value="beijing"></el-option>
          <el-option label="未调查" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <div class="address-title">
        录入工作证明人调查信息
      </div>
      <el-form-item label="微信/支付宝是否异常:">
        <el-select v-model="form.region" placeholder="请选择调查情况">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常项说明:">
        <el-select v-model="form.region" placeholder="请选择调查情况">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接电话人身份:">
        <el-select v-model="form.region" placeholder="请选择调查情况">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对单位工作情况:">
        <el-select v-model="form.region" placeholder="请选择调查情况">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查结论:">
        <el-input type="textarea" v-model="form.region"></el-input>
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
        phoneTypes: [{
            value: '住址电话',
            label: '住址电话'
          },
          {
            value: '单位电话',
            label: '单位电话',
            disabled: true
          },
          {
            value: '家庭联系人',
            label: '家庭联系人',
            disabled: true
          },
          {
            value: '紧急联系人',
            label: '紧急联系人',
            disabled: true
          },
          {
            value: '工作证明人',
            label: '工作证明人',
            disabled: true
          }
        ],
        phoneType: '',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        phone: 1310358254
      }
    }
  },
  methods: {
    submitForm() {
      console.log('submit!');
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
