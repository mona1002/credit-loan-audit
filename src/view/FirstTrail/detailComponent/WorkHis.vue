<!-- 电话征信 - 工作证明 历史 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        <!-- <el-label v-model="form.name">531531</el-label> -->
        <div v-model="form.name">
          5315151
        </div>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="调查情况:" class="item-column3">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <div class="address-title">
        录入工作证明人调查信息
      </div>
      <el-form-item label="微信/支付宝是否异常:">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="异常项说明:">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="接电话人身份:">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="核对单位工作情况:">
        <el-label v-model="form.name">531531</el-label>
      </el-form-item>
      <el-form-item label="调查结果:">
        <el-label v-model="form.name">531531</el-label>
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
        desc: ''
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
