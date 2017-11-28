<template>
  <div date="AntiConclution">
    <!--  反欺诈结论=========================默认显示1-条？分页？ -->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本信息" name="1">
        <div>
          <p>
            <span>进件编号：9328</span>
            <span>客户姓名： </span>
            <span>证件类型： </span>
          </p>
          <p>
            <span>证件号码： </span>
            <span>手机号码： </span>
          </p>
        </div>
        </el-collapse-item>
        <el-collapse-item title="反欺诈申请信息" name="2">
          <div>
            <p>
              <span>
                <label>欺诈申请类型主原因：</label>
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in mainReason" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </span>
              <span>
                <label>子原因：</label>
                <el-input v-model="sReason" placeholder="请输入内容"></el-input>
              </span>
            </p>
            <p>
              <label>欺诈上报描述：</label>
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="description">
              </el-input>

            </p>
            <p>
              <span>反欺诈申请人： </span>
              <span>反欺诈申请日期:</span>

              <span> 反欺诈申请机构:</span>
            </p>
          </div>
        </el-collapse-item>
      <el-collapse-item title="反欺诈结论" name="1">
        <div>
             <label>反欺诈结论：</label>
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="AntiResult">
              </el-input>
        </div>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2'],
        mainReason: [{
            value: '选项1',
            label: '信审黑名单、信审灰名单、外部黑名单'
          },
          {
            value: '选项1',
            label: '信审灰名单'
          },
          {
            value: '选项1',
            label: '外部黑名单'
          }, {
            value: '选项1',
            label: '外部灰名单'
          }, {
            value: '选项1',
            label: '不确定需下一级审批'
          }
        ],
        value: '',
        sReason: '', //子原因
        description: '',//描述
        AntiResult:''//反欺诈结论
      }
    },
    mounted() {

    },
  }

</script>
<style scoped>


</style>
